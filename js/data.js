export default class{ //모듈과 클래스 선언
	constructor(){ //데이터를 저장할 배열 선언
		this._list = [];
	}

	get list(){
		return this._list;
	}

	getIndexValue(index){
		return this._list[index];
	}

	add(value){ //입력된 값을 전달받아 저장하는 함수
		if(!value) return;

		const obj = { //배열에 저장할 항목의 타입은 객체이며, 할일을 작성한 글과 작성 날짜를 저장
			content:value,
			date:this.formatDate() //시간 format을 변경하여 저장
		};
		this._list.push(obj);
	}

	modify({value, index}){
		if(!value) return;
		
		const obj = {
			content:value,
			date:this.formatDate()
		};
		this._list[index] = obj;
	}

	remove(index){ //index를 전달받아 해당 index 데이터를 삭제해주는 메서드 추가
		this._list.splice(index, 1);
	}

	formatDate() { //date format을 변경해 주는 함수 추가
	    let date = new Date();
	    let month = '' + (date.getMonth() + 1);
	    let day = '' + date.getDate();
	    let year = date.getFullYear();

	    if (month.length < 2) month = '0' + month;
	    if (day.length < 2) day = '0' + day;

	    return [year, month, day].join('-');
	}
}