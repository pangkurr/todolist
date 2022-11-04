export default class{  //모듈과 클래스 선언
	constructor({save}){  //저장된 값을 전달하기 위해 콜백함수를 전달받음
		this.$value = $('#value');
		this.$btn = $('#btn');
		this.save = save;

		this.$btn.on('click', ()=>{  //저장버튼을 클릭시 입력된 값을 콜백함수에 전달
			let value = this.$value.val();
			this.$value.val('');
			this.save.call(this, value);
		});
	}
	set value(value){ //수정 버튼 클릭시 해당 목록 값이 input에 들어가도록 설정
		this.$value.val(value);
	}
}