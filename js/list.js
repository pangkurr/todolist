export default class{ //모듈과 클래스 선언
	constructor({modify,del}){ //app 모듈로부터 콜백함수를 전달받음
		this.modify=modify;
		this.del=del;
		this.$list = $('#list');

		this.render([]);
	}

	render(list){//전달 받은 데이터를 출력해 줄 함수
		this.$list = $('#list').empty(); //목록을 그려줄 때 기존 목록은 삭제

		if(list.length > 0){ //데이터의 수가 0보다 클 경우
			for(let row of list){
				let self = this;
				let template = `<tr>
									<td><span>${row.content}</span></td>
									<td class="text-right"><span>${row.date}</span></td>
									<td class="text-right">
										<input class="btn btn-default btn-modify" type="button" value="수정" />
										<input class="btn btn-default btn-delete" type="button" value="삭제" />
									</td>
								</tr>`;/* 템플릿 문자열로 목록 html을 작성 */

				let $template = $(template);
				this.$list.append($template); //작성된 목록 html을 차례로 붙여 넣는다.
				
				//수정 기능 구현
				$template.find('.btn-modify').bind('click',function(){
					self.modify.call(this,$(this).parents('tr').index());
				});
				//삭제 기능 구현
				$template.find('.btn-delete').bind('click', function(){//삭제 버튼에 클릭 이벤트 생성
					self.del.call(this, $(this).parents('tr').index());
					//app모듈에 index 전달
				});
			}
		} else { //데이터가 없을 경우 처리
			let template = `<tr>
								<td colspan="3" class="no-list"><span>등록된 할 일이 없습니다.</span></td>
							</tr>`;
			let $template = $(template);
			this.$list.append($template);
		}
	}
}