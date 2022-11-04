import List from './js/list.js'; //list 모듈 불러오기
import Data from './js/data.js'; //data 모듈 불러오기
import Input from './js/input.js'; //input 모듈 불러오기

const MODE = {
	WRITE:'write', //추가
	MODIFY:'modify' //수정
};

let currentMode = MODE.WRITE;
let modifyIndex;

const data = new Data();

const list = new List({
	modify:function(index){
		currentMode = MODE.MODIFY;
		modifyIndex = index;
		input.value = data.getIndexValue(index).content;
	},
	del:function(index){ //list 모듈에 삭제할 목록의index를 전달받는 콜백함수를 전달
		data.remove(index);
		list.render(data.list);
	}
});

const input = new Input({ //input 모듈에 선언된 클래스의 인스턴스를 생성
	save:function(value){ //입력된 값을 전달받기위해 콜백함수를 생성자에 전달
		switch(currentMode){ //처음 작성은 WRITE로, 수정은 MODIFY값으로 바꾸는걸 switch문으로 작성
			case MODE.WRITE:
				data.add(value);
				list.render(data.list);
				break;
			case MODE.MODIFY:
				data.modify({value:value, index:modifyIndex});
				list.render(data.list);
				currentMode = MODE.WRITE;
				break;
		}
	}
});
