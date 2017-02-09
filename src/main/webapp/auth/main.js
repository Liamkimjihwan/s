$('#submit-btn').click(function() {
	// 로그인 버튼을 눌렀을 때 #save-email 이 태그의 체크 상태에 따라서
	// 이메일 저장이 체크되어있으면 쿠키에 저장하고
	// 체크 되어 있지 않으면 쿠키에서 제거한다.
	 if ($('#save-email').is(':checked')) { // this = 이벤트가 발생된 객체
		    setCookie('email', $('#email').val(), 30); // 30일 동안
		  } else {
			  setCookie('email', '', 0);
		    //setCookie('email', '', 0, '/bitcamp-project-web2/auth');
		  }
		
	var param = {
		email:$('#email').val(),
		password:$('#password').val(),
		userType:$('input[name=user-type]:checked').val()
		//saveEmail:document.querySelector('#save-email').checked 
		// input 태그에서 name 이 user-type 인걸 모두 찾아라.  == CSS 기술 중에서 selector 라는 문법
	    //그중에서 checked 된 것만(학생 또는 매니저 또는 강사)상태인것만 찾아라.
		// 선택된것 중의 값만 꺼낸다.
	    // id 형식은 # , class 는 . , name
	};
	//var userTypeList = ; // css 에서는 클래스로 취급함 . 에 대해서.  
	 //console.log(param); param 값이 제대로 넘어왔는지 확인하기 위한 디버깅
	 
	$.post('login.json', param, function(ajaxResult) {
		if (ajaxResult.status == "success") {
			location.href = "../student/main.html";
			return;
		}
		alert(ajaxResult.data);
		//console.log(ajaxResult); // 서버로부터 받은 값을 출력해보자.
		
	}, 'json'); // 서버에서 보내는 데이터의 상태ㅐ가 json이라는 것을 알려줌.

}); // click
// email 쿠키가 있다면 값을 넣는다.
$('#email').val(getCookie('email').replace(/"/gi,'')); // email을 받으면 "user01@test.com"으로 나오기 때문에 "" 없앰. 
// #email라는 인풋박스를 찾아 값을 넣겠다.
// 리스너 document.querySelector('#save-email').onclick = function(event) { // 만약 클릭하게 되면 함수 호출

<!--     
<script>
$LAB.queueWait(function() {window.PackageManager = window.PackageManager || {
_q: [],
markExecuted: function() {
    this._q.push.apply(this._q, arguments);
}
};
PackageManager.markExecuted("shared.css","location-picker.css","eduorg-picker.css","profile-settings.css","notifications.css","settings.css")})</script>
<script>$LAB.queueScript('https://cdn.kastatic.org/genfiles/javascript/ko/corelibs-package-b6e499.js')</script>
<script>$LAB.queueWait(function() {PackageManager.markExecuted("corelibs.js")})</script>

<script>$LAB.queueScript('https://cdn.kastatic.org/genfiles/javascript/ko/shared-package-5b9358.js')</script>
<script>$LAB.queueWait(function() {PackageManager.markExecuted("shared.js")})</script>

<script>$LAB.queueWait(function() {KAdefine.require("./javascript/shared-package/site-infra.js").init();})</script>




    
        <div id="footer"><footer class="rootStyle_fszzwi" data-reactid=".0"><h2 class="srOnly_n51s9h" data-reactid=".0.0"><span data-reactid=".0.0.0">사이트 탐색
</span></h2><div class="footerContainer_1fhyji4" data-reactid=".0.1"><div class="rowFluid_1vi561s-o_O-linksArea_r6fkgh" data-reactid=".0.1.0"><div class="spanFluid2_1qy3wgj-o_O-mobileSpan_j6nvqp" data-reactid=".0.1.0.0:$column0"><ul data-reactid=".0.1.0.0:$column0.0"><li class="li_v3se1f-o_O-heading_10ewers" data-reactid=".0.1.0.0:$column0.0.0:$group0"><span data-reactid=".0.1.0.0:$column0.0.0:$group0.0">소개</span></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column0.0.0:1:$link0"><a class="a_4133r1" href="/about" data-reactid=".0.1.0.0:$column0.0.0:1:$link0.0"><span data-reactid=".0.1.0.0:$column0.0.0:1:$link0.0.0">칸아카데미 미션</span></a></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column0.0.0:1:$link1"><a class="a_4133r1" href="/youcanlearnanything" data-reactid=".0.1.0.0:$column0.0.0:1:$link1.0"><span data-reactid=".0.1.0.0:$column0.0.0:1:$link1.0.0">무엇이든 배울 수 있습니다</span></a></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column0.0.0:1:$link2"><a class="a_4133r1" href="/about/the-team" data-reactid=".0.1.0.0:$column0.0.0:1:$link2.0"><span data-reactid=".0.1.0.0:$column0.0.0:1:$link2.0.0">칸아카데미 팀</span></a></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column0.0.0:1:$link3"><a class="a_4133r1" href="/about/our-interns" data-reactid=".0.1.0.0:$column0.0.0:1:$link3.0"><span data-reactid=".0.1.0.0:$column0.0.0:1:$link3.0.0">인턴사원</span></a></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column0.0.0:1:$link4"><a class="a_4133r1" href="/about/our-content-specialists" data-reactid=".0.1.0.0:$column0.0.0:1:$link4.0"><span data-reactid=".0.1.0.0:$column0.0.0:1:$link4.0.0">칸아카데미 콘텐츠 전문가</span></a></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column0.0.0:1:$link5"><a class="a_4133r1" href="/about/our-board" data-reactid=".0.1.0.0:$column0.0.0:1:$link5.0"><span data-reactid=".0.1.0.0:$column0.0.0:1:$link5.0.0">칸아카데미 이사진</span></a></li></ul></div><div class="spanFluid2_1qy3wgj-o_O-mobileSpan_j6nvqp" data-reactid=".0.1.0.0:$column1"><ul data-reactid=".0.1.0.0:$column1.0"><li class="li_v3se1f-o_O-heading_10ewers" data-reactid=".0.1.0.0:$column1.0.0:$group0"><span data-reactid=".0.1.0.0:$column1.0.0:$group0.0">지원</span></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column1.0.0:1:$link0"><a class="a_4133r1" href="https://khanacademy.zendesk.com/" data-reactid=".0.1.0.0:$column1.0.0:1:$link0.0"><span data-reactid=".0.1.0.0:$column1.0.0:1:$link0.0.0">지원 센터</span></a></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column1.0.0:1:$link1"><a class="a_4133r1" href="https://khanacademy.zendesk.com/hc/en-us/community/topics" data-reactid=".0.1.0.0:$column1.0.0:1:$link1.0"><span data-reactid=".0.1.0.0:$column1.0.0:1:$link1.0.0">지원 커뮤니티</span></a></li><li class="li_v3se1f-o_O-heading_10ewers-o_O-spaced_1bb7e5j" data-reactid=".0.1.0.0:$column1.0.1:$group1"><span data-reactid=".0.1.0.0:$column1.0.1:$group1.0">문의</span></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column1.0.1:1:$link0"><a class="a_4133r1" href="/stories" data-reactid=".0.1.0.0:$column1.0.1:1:$link0.0"><span data-reactid=".0.1.0.0:$column1.0.1:1:$link0.0.0">사례 공유</span></a></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column1.0.1:1:$link1"><a class="a_4133r1" href="https://khanacademy.zendesk.com/hc/en-us/articles/202483630-PressRoom" data-reactid=".0.1.0.0:$column1.0.1:1:$link1.0"><span data-reactid=".0.1.0.0:$column1.0.1:1:$link1.0.0">보도 자료</span></a></li></ul></div><div class="spanFluid2_1qy3wgj-o_O-mobileSpan_j6nvqp" data-reactid=".0.1.0.0:$column2"><ul data-reactid=".0.1.0.0:$column2.0"><li class="li_v3se1f-o_O-heading_10ewers" data-reactid=".0.1.0.0:$column2.0.0:$group0"><span data-reactid=".0.1.0.0:$column2.0.0:$group0.0">자료</span></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column2.0.0:1:$link0"><a class="a_4133r1" href="/resources" data-reactid=".0.1.0.0:$column2.0.0:1:$link0.0"><span data-reactid=".0.1.0.0:$column2.0.0:1:$link0.0.0">교사 자료</span></a></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column2.0.0:1:$link1"><a class="a_4133r1" href="/resources/parents-mentors-1" data-reactid=".0.1.0.0:$column2.0.0:1:$link1.0"><span data-reactid=".0.1.0.0:$column2.0.0:1:$link1.0.0">학부모 자료</span></a></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column2.0.0:1:$link2"><a class="a_4133r1" href="https://khanacademy.zendesk.com/hc/en-us/community/topics/200142960-Teacher-and-Coach-Community" data-reactid=".0.1.0.0:$column2.0.0:1:$link2.0"><span data-reactid=".0.1.0.0:$column2.0.0:1:$link2.0.0">교사 및 학부모 커뮤니티</span></a></li></ul></div><div class="spanFluid2_1qy3wgj-o_O-mobileSpan_j6nvqp" data-reactid=".0.1.0.0:$column3"><ul data-reactid=".0.1.0.0:$column3.0"><li class="li_v3se1f-o_O-heading_10ewers" data-reactid=".0.1.0.0:$column3.0.0:$group0"><span data-reactid=".0.1.0.0:$column3.0.0:$group0.0">채용정보</span></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column3.0.0:1:$link0"><a class="a_4133r1" href="/careers" data-reactid=".0.1.0.0:$column3.0.0:1:$link0.0"><span data-reactid=".0.1.0.0:$column3.0.0:1:$link0.0.0">정규직</span></a></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column3.0.0:1:$link1"><a class="a_4133r1" href="/careers/interns" data-reactid=".0.1.0.0:$column3.0.0:1:$link1.0"><span data-reactid=".0.1.0.0:$column3.0.0:1:$link1.0.0">인턴십</span></a></li><li class="li_v3se1f-o_O-heading_10ewers-o_O-spaced_1bb7e5j" data-reactid=".0.1.0.0:$column3.0.1:$group1"><span data-reactid=".0.1.0.0:$column3.0.1:$group1.0">기부</span></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column3.0.1:1:$link0"><a class="a_4133r1" href="/donate" data-reactid=".0.1.0.0:$column3.0.1:1:$link0.0"><span data-reactid=".0.1.0.0:$column3.0.1:1:$link0.0.0">기부하기</span></a></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column3.0.1:1:$link1"><a class="a_4133r1" href="/contribute" data-reactid=".0.1.0.0:$column3.0.1:1:$link1.0"><span data-reactid=".0.1.0.0:$column3.0.1:1:$link1.0.0">자원 봉사</span></a></li><li class="li_v3se1f" data-reactid=".0.1.0.0:$column3.0.1:1:$link2"><a class="a_4133r1" href="/about/our-supporters" data-reactid=".0.1.0.0:$column3.0.1:1:$link2.0"><span data-reactid=".0.1.0.0:$column3.0.1:1:$link2.0.0">칸아카데미 서포터즈</span></a></li></ul></div><div class="spanFluid3_12tzde-o_O-mobileSpan_j6nvqp" data-reactid=".0.1.0.1"><ul data-reactid=".0.1.0.1.0"><li class="li_v3se1f-o_O-heading_10ewers-o_O-nowrap_basc2l" data-reactid=".0.1.0.1.0.0"><span data-reactid=".0.1.0.1.0.0.0:0">인터내셔널</span><span class="i18nIcon_omjqfy" data-reactid=".0.1.0.1.0.0.1"><svg width="17.009525334187146" height="17" viewBox="0 0 100 99.944" data-reactid=".0.1.0.1.0.0.1.0"><path fill="#000" d="M57.285 91.086q13.395-2.337 22.857-12.312-.114-.171-.798-.285t-1.368-.456q-.684-.285-1.026-.342.114-.969-.399-1.254l-1.14-.684q-.57-.399-1.311-1.026t-1.425-.57q-.627.057-.969.228t-.627.285-.114.285q-1.368-1.026-2.052-1.254t-1.482-.855-1.425 0q-.57.57-.627 1.197t-.114.855q-.456-.342 0-1.14t.057-1.368-1.026-.114q-.627.513-1.083.855t-1.026.57-.912 1.083q-.342.912-.513 1.083-.114-.342-.684-.456t-.684-.285q.114.741.228 2.337t.513 2.964q.285 1.368-1.197 2.85-1.482 1.368-1.71 2.565t.855 1.425q0 .456-.513 1.368-.57.912-.285 2.451zm8.778-50.331q.057-.285.057-1.026t.969-1.026q.969-.342 1.026-.399l1.14-.741q.171-.228.057-.228 1.14.114 1.824-.684t-.285-1.368q.171-.399-.171-.627-.399-.228-.969-.342.171-.057.741 0t.684-.114q.969-.627-.285-.969t-2.166.171q-.912.57-1.425 1.14t-.855.627q.171-.057.456-.741t.798-1.311 3.591-1.14q3.021-.57 4.104.627-.114-.171.627-.855t.969-.798.969-.228q.798-.171.969-.513l.114-1.425q-.798.057-1.14-.456t-.399-1.368q0 .114-.399.513 0-.684-.741-.513t-1.14.057-.741-.399-.513-1.083q-.171-.855-.285-1.083t-.57-.57-.57-.57l-.228-.456-.228-.456q-.228-.513-.513-.513-.285-.057-.741.627-.513.684-.627.627-.057-.057-.285-.057-.399.057-.684.342-.228.228-.741.342-.456.057-.627.114.912-.342.114-.684t-1.254-.228q1.14-.57-.057-1.653l.342 0q-.057-.399-1.197-.912t-1.482-.741-2.109-.513q-1.71-.285-2.109 0-.399.456-.114 1.311.399 1.368-.285 2.166t.456 1.425q2.052 1.197-.171 2.622-2.28 1.368-.399 3.021.228.228-.057.456l-1.083.741q-1.425.684-2.337-2.451-.342-1.311-.912-1.596-1.482-.513-1.881.057-.342-.855-2.337-1.539t-4.104-.399q.399-.057 0-1.026-.456-.969-1.254-.741.342-.798.456-1.824t.342-1.425q1.824-1.995 1.425-2.109 2.223.228 2.907-.456t1.254-1.71q.57-1.14 1.425-1.14l1.881.684q.912.114 1.026-.684t-.513-1.311q.798.057.342-.741t-.627-.969q-.798-.285-1.539.171t-.114.684q-.057 0-.627.684-1.368 1.824-2.109.798-.057-.057-.342-.855t-.627-.912q-.513 0-1.026 1.026.171-.513-.741-.969t-1.539-.57q1.254-.798-.513-1.767-.456-.285-1.71-.342t-1.254 1.026q-.114.57.627.798.684.228 1.083.342.399.171.969.513t.114.627q-.399.285-1.026.456-.57.171-.684.399t.057.855-.171.912q-.342-.285-.57-1.083t-.399-1.083q.399.741-2.337.228-.285 0-1.539.228t-1.596-.399q-.399-.627-.114-1.425.057-.285.228-.114l-1.368-1.197q-3.021.969-6.099 2.679.741.114 2.451-.969t2.565-.342l.342-.342q.912 1.026 1.311 1.653-.456-.285-1.881.057t-1.539.627q.456.798.342 1.197-.285-.171-1.026-.912-1.083-1.026-3.078-.741-9.519 5.187-15.333 14.478.456.456.798.513.342 0 .342.57.057.57.171.741t.741-.171q.57.513.171 1.197.057-.057 2.85 1.767 1.311 1.083 1.425 1.596t-.684.969q-.057-.114-.57-.57-1.083-.969-.57.912.228.798.627.855-.741.114-.741 2.337t-.057 2.508l.114.057q-.171.798.399 2.28t1.368 1.254q-.855.171 1.311 2.793.399.513.513.627t1.14.627q.969.57 1.254 1.026.342.456.684 1.596t.912 1.539q-.114.399.627 1.311 1.311 1.596.342 1.596.171.456 1.14.969t1.026 1.254q.057.684.171.912t.513.171q.114-1.311-1.311-3.705t-1.653-3.135q-.228-.798-.342-1.083.798 0 1.197.342.456.342.342.684-.114.228.228.912t.741 1.197q.456.513 1.083 1.254t.912.969.798 1.14q.513.855 0 .855.57 0 1.596.912t1.311 2.793.798 2.337q.513.399.912.627t1.026.57.912.456 1.14.684 1.425.798 1.026.228q.399 0 .969-.171t1.197-.285 1.539 1.026q.969 1.026 2.337 1.824t2.622.285q-.342.171 1.482 2.964.342.399 1.197.969t1.14 1.026q.342-.228.456-.513-.114.513.513 1.254.684.741 1.368.627t.684-2.109q-1.995.969-3.192-1.14 0-.057-.171-.399-.969-1.767-.285-1.767.741 0 .855-.228.342-1.254-.741-2.508-1.026-1.254-1.14-1.425-.342.57-1.083.513t-1.026-.57l-.171.741q-.855 0-.969-.057.057-.171.171-1.482t.969-2.565q.798-1.254.285-1.596-.57-.342-1.71-.285t-1.482 1.767q-.399 1.653-1.995 1.539-1.653-.057-2.337-.399t-1.254-1.767q-.627-1.368-.627-2.451l.342-3.363q.057-.57-.342-1.596.171-.171.57-.627t.627-.57q.456-.285.684-.114.228.114.285-.285t-.342-.627q.513.171 1.881-.114 1.368-.342 2.052.228t1.083-.285q0-.057-.171-.627t0-.855q.342 1.767 1.881.57.171.171.969.285 1.083.171 1.653.684t1.197-.114q.627.912 1.083 2.508t.969 1.938q.969.342.969-.513l-.057-1.71-.057-.513l0-1.197l-.114-.513q-1.995-.342-1.254-1.71t1.938-1.824 1.539-.855q1.368-1.254.969-2.28.456 0 .741-.57-.342.057-.684-.285t-.399-.342q.57-.342.114-1.083.342-.171.456-.684.171-.513.513-.684.57.798 1.368.171.456-.513.057-1.083.342-.456 1.368-.684t1.197-.57q.456.114.513-.171zm-16.017-40.755q13.566 0 25.08 6.726 11.514 6.669 18.24 18.183t6.726 25.137-6.726 25.137-18.24 18.183-25.08 6.669-25.137-6.726q-11.514-6.726-18.183-18.183-6.726-11.571-6.726-25.137t6.726-25.08 18.24-18.24 25.08-6.669zm5.757 75.126l0-.114zm-35.739-38.874l0 .057zm49.248 1.083l-.057 0zm-25.08 16.245l0 .057z" data-reactid=".0.1.0.1.0.0.1.0.0"></path></svg></span></li><li class="li_v3se1f" data-reactid=".0.1.0.1.0.1"><span data-reactid=".0.1.0.1.0.1.0"><a class="a_4133r1" href="/settings/account" data-reactid=".0.1.0.1.0.1.0.0"><span data-reactid=".0.1.0.1.0.1.0.0.0">언어 변경</span></a><span data-reactid=".0.1.0.1.0.1.0.1"> |</span></span><a class="a_4133r1" href="/settings/account?lang=en" data-reactid=".0.1.0.1.0.1.1">Change language</a></li><li class="li_v3se1f" data-reactid=".0.1.0.1.0.2"><a class="a_4133r1" href="/contribute" data-reactid=".0.1.0.1.0.2.0"><span data-reactid=".0.1.0.1.0.2.0.0">콘텐츠 번역</span></a></li><li class="li_v3se1f-o_O-heading_10ewers-o_O-spaced_1bb7e5j" data-reactid=".0.1.0.1.0.3"><span data-reactid=".0.1.0.1.0.3.0">소셜 네트워크</span></li><li class="li_v3se1f" data-reactid=".0.1.0.1.0.4"><a class="a_4133r1" href="https://www.facebook.com/khanacademy" title="페이스북" data-reactid=".0.1.0.1.0.4.0"><span data-reactid=".0.1.0.1.0.4.0.0">페이스북</span></a></li><li class="li_v3se1f" data-reactid=".0.1.0.1.0.5"><a class="a_4133r1" href="https://twitter.com/khanacademy" title="트위터" data-reactid=".0.1.0.1.0.5.0"><span data-reactid=".0.1.0.1.0.5.0.0">트위터</span></a></li><li class="li_v3se1f" data-reactid=".0.1.0.1.0.6"><a class="a_4133r1" href="/about/blog" data-reactid=".0.1.0.1.0.6.0"><span data-reactid=".0.1.0.1.0.6.0.0">블로그</span></a></li><li class="li_v3se1f" data-reactid=".0.1.0.1.0.7"><a class="a_4133r1" href="http://life.khanacademy.org/" data-reactid=".0.1.0.1.0.7.0"><span data-reactid=".0.1.0.1.0.7.0.0">칸아카데미 라이프</span></a></li></ul></div><div class="spanFluid1_8klp3r-o_O-mobileSpan_j6nvqp" data-reactid=".0.1.0.2"><img alt="칸아카데미 로고" class="handtree_obxedk" src="https://cdn.kastatic.org/images/khan-logo-vertical-transparent.png" data-reactid=".0.1.0.2.0"></div></div><div class="clearfix_rd8e1k-o_O-linksArea_r6fkgh-o_O-extraLinksArea_1l2dmtj" data-reactid=".0.1.1"><div class="legal_1da8a5n" data-reactid=".0.1.1.0"><span data-reactid=".0.1.1.0.0"><a class="a_4133r1" href="/about/tos" data-reactid=".0.1.1.0.0.0"><span data-reactid=".0.1.1.0.0.0.0">이용약관</span></a></span></div><div class="legal_1da8a5n" data-reactid=".0.1.1.1"><span data-reactid=".0.1.1.1.0"><a class="a_4133r1" href="/about/privacy-policy" data-reactid=".0.1.1.1.0.0"><span data-reactid=".0.1.1.1.0.0.0">개인정보 보호정책</span></a></span></div><div class="copyright_15tfhjl" title="Version: 170206-1545-05ea7b77f358.399009361667091535" data-reactid=".0.1.1.2"><span data-reactid=".0.1.1.2.0">© 2016 Khan Academy</span><br data-reactid=".0.1.1.2.1"><span data-reactid=".0.1.1.2.2:0">별도 명시된 사항을 제외하고 이곳의 모든 저작권은 칸아카데미가 소유하고 있습니다.</span></div><div class="extraFooterText_1fj9fk5" data-reactid=".0.1.1.4"><span data-reactid=".0.1.1.4.0">초/중/고등학교 및 대학교 과정의 동영상 강좌와 연습 문제를 온라인에서 무료로 이용할 수 있습니다.</span></div></div></div></footer></div>

        <script>$LAB.queueWait(function() {KAdefine.updatePathToPackageMap({"javascript/node_modules/react-dom/index.js": "corelibs.js", "javascript/node_modules/react/index.js": "corelibs.js", "javascript/page-package/footer.jsx": "page.js"})})</script>

        <script>
        $LAB.queueWait(function() {
            var KA = KAdefine.require("./javascript/shared-package/ka.js");

            var isDesktopSize = window.innerWidth > 768;
            var isContentPage = "";
            var isMobile = KA.featureFlag('isMobile');

            // Note: we also hide the footer for tablet exercises. However, we still need to
            // render it into the page in that case, since if the user then navigates to an
            // article or video, the footer should be revealed. See: cards-n-stacks.less.
            if (isDesktopSize || !isContentPage || !isMobile) {
                KAdefine.require.async([
                    "react",
                    "react-dom",
                    "./javascript/page-package/footer.jsx",
                ], function(React, ReactDOM, Footer) {
                    ReactDOM.render(React.createElement(Footer, {
                        "curLanguage": "ko",
                        "kaGlobals": {
                            "version": "170206-1545-05ea7b77f358.399009361667091535",
                        },
                        "kaLocale": "ko",
                        "languages": [["id", "Bahasa Indonesia"], ["ms", "Bahasa Malaysia"], ["cs", "čeština"], ["da", "dansk"], ["de", "Deutsch"], ["en", "English"], ["es", "español"], ["fr", "français"], ["xh", "isiXhosa"], ["zu", "isiZulu"], ["it", "italiano"], ["sw", "Kiswahili"], ["lol", "LOLCAT"], ["nl", "Nederlands"], ["nb", "norsk bokmål"], ["pl", "polski"], ["pt", "português"], ["pt-pt", "português (Portugal)"], ["tr", "Türkçe"], ["el", "Ελληνικά"], ["bg", "български"], ["mn", "монгол"], ["ru", "русский"], ["sr", "Српски"], ["uk", "українська"], ["hy", "հայերեն"], ["he", "עברית"], ["ur", "اردو"], ["ar", "العربية"], ["fa-af", "دری (افغانستان)"], ["fa", "فارسی"], ["hi", "हिन्दी"], ["bn", "বাংলা"], ["te", "తెలుగు"], ["th", "ไทย"], ["ka", "ქართული"], ["ko", "한국어"], ["zh-hans", "中文 (简体中文)"], ["ja", "日本語"]],
                        
                        
                        "userData": {
                            "isPhantom": false,
                        },
                        
                    }), document.getElementById("footer"));
                });
            }
        })
        </script>
        
    

</div>








<script>$LAB.queueScript('https://cdn.kastatic.org/genfiles/javascript/en/user-progress-cache-package-f6caeb.js')</script>
<script>$LAB.queueWait(function() {PackageManager.markExecuted("user-progress-cache.js")})</script>

<script>
$LAB.queueWait(function() {KAdefine.require("./javascript/user-progress-cache-package/user-progress-cache.js");})
</script>



<script>$LAB.queueScript('/userprogressjs?version=0&id=http%3A%2F%2Fid.khanacademy.org%2Fc9ac5297561147daab1d1d830c6989ca&fkey=1.0_y0i4xZ9t6GvU6g%3D%3D_1486429010&v=2')</script>



<script>$LAB.queueScript('https://cdn.kastatic.org/genfiles/manifests/ko/package-manifest-167a63.js')</script>


<script>
$LAB.queueWait(function() {
var StyleSheet = KAdefine.require("aphrodite").StyleSheet;
StyleSheet.rehydrate(["button_17kxc3w-o_O-pad_hvrboe-o_O-navItem_14i09n4-o_O-navItemWhenOpaque_1phkcfm", "computing_1jjj84r", "computing_1w6inmp", "computing_lz50lh", "domain_1368jxt", "domains_o3z00m", "dot_sjvh5n", "dropdown_9thx3o-o_O-dropdown_1s55ut0", "dropdown_9thx3o-o_O-dropdown_2oma9m", "headerContents_1nf8yqi", "headerSection_xuynyd", "headerSection_xuynyd-o_O-grow_10oodw2-o_O-alignLeft_1maz0e", "headerSection_xuynyd-o_O-grow_10oodw2-o_O-alignRight_1ebgk80", "header_t1ip60", "item_r7gnrk", "item_r7gnrk-o_O-itemFirst_paaff", "item_r7gnrk-o_O-itemLast_5vjoxx", "logoSvg_wshgzz", "math_134qkmx", "math_b6khi2", "math_rp08zo", "menu_yc5ugf", "pad_hvrboe-o_O-navItem_14i09n4-o_O-navItemWhenOpaque_1phkcfm-o_O-logo_djpwtp", "pad_hvrboe-o_O-navItem_14i09n4-o_O-navItemWhenOpaque_1phkcfm-o_O-responsiveMenuLink_npp7oy", "pad_hvrboe-o_O-navItem_14i09n4-o_O-navItemWhenOpaque_1phkcfm-o_O-responsiveMenuLink_npp7oy-o_O-responsiveSearchIcon_v30u5g", "pad_hvrboe-o_O-navItem_14i09n4-o_O-navItemWhenOpaque_1phkcfm-o_O-searchIcon_61ie8v", "responsiveMenuItemWrapper_8jyttu", "responsiveNavMenuWrapper_1g8zug2", "skipToMain_wcug7n", "srOnly_n51s9h", "switchArrow_db1jgf-o_O-switchArrowRight_1502aq6", "switchText_1lh86m9", "switch_14ekhsg-o_O-notificationsSwitch_1ycudkh", "triangle_nir888", "trigger_n8otci", "wrapper_1jxzfqt", "wrapper_e1iyoj-o_O-headerActive_jq320i", "wrapper_z0wssk"]);
})
</script>

<script>$LAB.queueScript('https://cdn.kastatic.org/genfiles/javascript/en/shared-styles-package-baa663.js')</script>
<script>$LAB.queueWait(function() {PackageManager.markExecuted("shared-styles.js")})</script>
<script>$LAB.queueScript('https://cdn.kastatic.org/genfiles/javascript/ko/page-package-d90ad4.js')</script>
<script>$LAB.queueWait(function() {PackageManager.markExecuted("page.js")})</script><script>
$LAB.queueWait(function() {
var React = KAdefine.require("react");
var ReactDOM = KAdefine.require("react-dom");
var Component = React.createFactory(
    KAdefine.require("./javascript/page-package/stateful-header.jsx"));
ReactDOM.render(Component({"domains": [{"children": [{"href": "/math/early-math", "identifier": "early-math", "level": 1, "missionSlug": "early-math", "title": "Early math", "translatedTitle": "\uae30\ucd08 \uc218\ud559"}, {"href": "/math/arithmetic", "identifier": "arithmetic", "level": 1, "missionSlug": "arithmetic", "title": "Arithmetic essentials", "translatedTitle": "\uc5f0\uc0b0"}, {"href": "/math/pre-algebra", "identifier": "pre-algebra", "level": 1, "missionSlug": "pre-algebra", "title": "Pre-algebra", "translatedTitle": "\uae30\ucd08 \ub300\uc218\ud559 (Pre-algebra)"}, {"href": "/math/algebra-basics", "identifier": "algebra-basics", "level": 1, "missionSlug": "algebra-basics", "title": "Algebra basics", "translatedTitle": "\ub300\uc218\ud559 \uc785\ubb38 (Algebra basics)"}, {"href": "/math/algebra", "identifier": "algebra", "level": 1, "missionSlug": "algebra", "title": "Algebra I", "translatedTitle": "\ub300\uc218\ud559 I"}, {"href": "/math/basic-geo", "identifier": "basic-geo", "level": 1, "missionSlug": null, "title": "Basic geometry", "translatedTitle": "\uae30\ucd08 \uae30\ud558\ud559"}], "childrenByGradeLevel": {"fundamentals": {"children": [{"href": "/math/early-math", "identifier": "early-math", "level": 1, "missionSlug": "early-math", "title": "Early math", "translatedTitle": "\uae30\ucd08 \uc218\ud559"}, {"href": "/math/arithmetic", "identifier": "arithmetic", "level": 1, "missionSlug": "arithmetic", "title": "Arithmetic essentials", "translatedTitle": "\uc5f0\uc0b0"}, {"href": "/math/pre-algebra", "identifier": "pre-algebra", "level": 1, "missionSlug": "pre-algebra", "title": "Pre-algebra", "translatedTitle": "\uae30\ucd08 \ub300\uc218\ud559 (Pre-algebra)"}, {"href": "/math/basic-geo", "identifier": "basic-geo", "level": 1, "missionSlug": null, "title": "Basic geometry", "translatedTitle": "\uae30\ucd08 \uae30\ud558\ud559"}], "header": "\uae30\ucd08 \uacfc\uc815"}, "secondary": {"children": [{"href": "/math/algebra-basics", "identifier": "algebra-basics", "level": 1, "missionSlug": "algebra-basics", "title": "Algebra basics", "translatedTitle": "\ub300\uc218\ud559 \uc785\ubb38 (Algebra basics)"}, {"href": "/math/algebra", "identifier": "algebra", "level": 1, "missionSlug": "algebra", "title": "Algebra I", "translatedTitle": "\ub300\uc218\ud559 I"}], "header": "\uace0\ub4f1\ud559\uad50 \uacfc\uc815 \uc774\uc0c1"}}, "gradeLevels": [], "href": "/math", "icon": "https://cdn.kastatic.org/genfiles/topic-icons/icons/arithmetic.png-a485a9-128c.png", "identifier": "math", "level": 0, "numUntranslatedChildren": 50, "title": "Math", "translatedTitle": "\uc218\ud559"}, {"children": [{"href": "/computing/computer-programming", "identifier": "computer-programming", "level": 1, "missionSlug": null, "title": "Computer programming", "translatedDescription": "JavaScript\uc640 ProcessingJS\ub97c \ud65c\uc6a9\ud558\uc5ec \uadf8\ub9bc, \uc560\ub2c8\uba54\uc774\uc158, \uac8c\uc784\uc744 \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc744 \ubc30\uc6cc \ubd05\uc2dc\ub2e4. HTML\uacfc CSS\ub97c \ud65c\uc6a9\ud558\uc5ec \uc6f9 \ud398\uc774\uc9c0\ub97c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc744 \ubc30\uc6b8 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc774 \uc644\uc131\ud55c \uc791\ud488\uc744 \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uacfc \uacf5\uc720\ud558\uace0 \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc774 \ub9cc\ub4e0 \uc791\ud488\uc744 \uc0b4\ud3b4\ubcf4\uba74\uc11c \uc11c\ub85c\uc5d0\uac8c\uc11c \ubc30\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", "translatedTitle": "\ucef4\ud4e8\ud130 \ud504\ub85c\uadf8\ub798\ubc0d"}, {"href": "/computing/computer-science", "identifier": "computer-science", "level": 1, "missionSlug": null, "title": "Computer science", "translatedDescription": "\ucef4\ud4e8\ud130 \uacfc\ud559\uc5d0\uc11c\uc758 \uba87 \uac00\uc9c0 \uc8fc\uc81c - \uc54c\uace0\ub9ac\uc998(\ucef4\ud4e8\ud130\uacfc\ud559\uc5d0\uc11c \uacf5\ud1b5\ub41c \ubb38\uc81c\ub97c \uc5b4\ub5bb\uac8c \ud480\uba70, \ud478\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \ud6a8\uc728\uc131\uc744 \uce21\uc815\ud558\ub294 \ubc29\ubc95)\n\uc554\ud638\ud654(\ube44\ubc00 \uc815\ubcf4\ub97c \uc548\uc804\ud558\uac8c \uc800\uc7a5\ud558\ub294 \ubc29\ubc95), \uc815\ubcf4 \uc774\ub860(\uc815\ubcf4\uc758 \uc554\ud638\ud654 \ubc0f \uc555\ucd95 \ubc29\ubc95) - \ub4f1\uc744 \ubc30\uc6cc\ubcf4\uc138\uc694.", "translatedTitle": "\ucef4\ud4e8\ud130 \uacfc\ud559"}, {"href": "/computing/hour-of-code", "identifier": "hour-of-code", "level": 1, "missionSlug": null, "title": "Hour of Code", "translatedDescription": "\ud55c \uc2dc\uac04\ubc16\uc5d0 \uc5ec\uc720\uac00 \uc5c6\ub2e4\uace0\uc694? \uadf8 \uc815\ub3c4\uba74 \ud504\ub85c\uadf8\ub798\ubc0d, \uc6f9\ud398\uc774\uc9c0 \ub9cc\ub4e4\uae30, \uadf8\ub9ac\uace0 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc791\uc131\uc758 \uae30\ucd08\ub97c \ubc30\uc6b8 \uc218 \uc788\ub294 \ucda9\ubd84\ud55c \uc2dc\uac04\uc785\ub2c8\ub2e4.", "translatedTitle": "\uc544\uc6cc \uc624\ube0c \ucf54\ub4dc"}], "gradeLevels": [], "href": "/computing", "icon": "https://cdn.kastatic.org/genfiles/topic-icons/icons/computer_programming.png-7d38e8-128c.png", "identifier": "computing", "level": 0, "numUntranslatedChildren": 0, "title": "Computing", "translatedTitle": "\ucef4\ud4e8\ud305"}], "fullBleed": false, "hideSearchBox": false, "hideSignupInHeader": false, "initialNotificationCount": 0, "initialUrl": "/settings/account", "initialUserProfileData": {"avatarSrc": "https://cdn.kastatic.org/images/avatars/leaf-green.png", "hasChildStudents": false, "hasCoachHomepage": false, "hasParentHomepage": false, "hasStudents": false, "isChildAccount": false, "isDemo": false, "isMidsignupPhantom": false, "isPhantom": false, "nickname": "Liam.Kimjihwan", "profileRoot": "/profile/kaid_247776623425725252201305/"}, "isBibliotronHeader": true, "pageDomain": null, "showWelcome": false, "transparent": false}),
                document.getElementById("top-header-container"));
})
</script>



<script>
$LAB.queueWait(function() {
    var KA = KAdefine.require("./javascript/shared-package/ka.js");
    // If their computer clock is off by more than a day, complain
    // about that too (causes SSL problems)
    if (Math.abs(KA.currentServerTime() - new Date() / 1000) >= 60 * 60 * 24 &&
            document.getElementById("inaccurate-clock-warning")) {
        document.getElementById("inaccurate-clock-warning").innerHTML = "문제가 지속되면 컴퓨터 시계를 확인하고 오늘 날짜가 올바르게 설정되어 있는지 확인하세요.";
    }
})
</script>



<script>
$LAB.queueWait(function() {
    // If we arrived via a Facebook callback, it might have appended #_=_
    // to our URL. This can confuse our Backbone routers, so get rid of it.
    // http://stackoverflow.com/questions/7131909/facebook-callback-appends-to-return-url
    if (window.location.hash === "#_=_") {
        if (history.replaceState) {
            history.replaceState(null, null,
                    window.location.href.split("#")[0]);
        } else {
            window.location.hash = "";
        }
    }
})
</script>

<script>
$LAB.queueWait(function() {
    var dom = KAdefine.require("./javascript/shared-package/dom-utils.js");
    dom.ready().then(function() {
        var Analytics = KAdefine.require("./javascript/shared-package/analytics.js");
        Analytics.init();
    });
})
</script>


    
<script>
(function() {switch (window.location.pathname) {
        case '/computing/hour-of-code/hour-of-drawing-code/v/welcome-hour-of-code':
            (new Image()).src = 'http://code.org/api/hour/begin_khan.png';
            break;
        case '/computing/hour-of-code/hour-of-drawing-code/a/code-beyond-the-hour-of-drawing':
            (new Image()).src = 'http://code.org/api/hour/finish_khan.png';
            break;
        case '/computing/hour-of-code/hour-of-html/v/making-webpages-intro':
            (new Image()).src = 'http://code.org/api/hour/begin_khanweb.png';
            break;
        case '/computing/hour-of-code/hour-of-html/a/hour-of-html-go-beyond-the-hour':
            (new Image()).src = 'http://code.org/api/hour/finish_khanweb.png';
            break;
        case '/computing/hour-of-code/hour-of-sql/v/welcome-to-sql':
            (new Image()).src = 'http://code.org/api/hour/begin_khandata.png';
            break;
        case '/computing/hour-of-code/hour-of-sql/a/hour-of-sql-go-beyond-the-hour':
            (new Image()).src = 'http://code.org/api/hour/finish_khandata.png';
            break;
    }
})();
</script>
    
    <script>
        $LAB.queueWait(function() {
            window._kiq = window._kiq || [];
            setTimeout(function() {
            var d = document, f = d.getElementsByTagName('script')[0], s = d.createElement('script'); s.type = 'text/javascript'; 
            s.async = true; s.src = '//s3.amazonaws.com/ki.js/53782/bH0.js'; f.parentNode.insertBefore(s, f);
            }, 1);
            _kiq.push(['identify', '_gae_bingo_random:Ff6nrXwv_2QuEeLUxRnKQ2YxOSiZL9fDOyvM8_6r']); 
            _kiq.push(['set', {"eligible_for_nps_survey": false, "eligible_for_sat_intent_survey_1": false, "eligible_for_sat_satisfaction_survey": false, "eligible_for_unregistered_user_goal_survey": false, "eligible_for_sat_intent_survey_2": false, "eligible_for_registered_user_goal_survey": false}]); 
        })
    </script>
    





<script>
    $LAB.queueWait(function() {
        function loadHorizon() {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = location.protocol + '//ak.sail-horizon.com/horizon/v1.js';
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        }
        loadHorizon();
        var oldOnLoad = window.onload;
        window.onload = function() {
            if (typeof oldOnLoad === 'function') {
                oldOnLoad();
            }
            if (window.Sailthru) {
                Sailthru.setup({domain: 'sthorizon.khanacademy.org'});
            } 
        };
    })
</script>




<script>
$LAB.queueWait(function() {

    
        if (window.console) {
            console.log(document.childNodes[1].nodeValue);  // @Nolint(console.log)
        }
    

    

})
</script>





<script>$LAB.queueScript('https://cdn.kastatic.org/genfiles/javascript/ko/corelibs-legacy-package-00be01.js')</script>
<script>$LAB.queueWait(function() {PackageManager.markExecuted("corelibs-legacy.js")})</script>

<script>$LAB.queueScript('https://cdn.kastatic.org/genfiles/javascript/en/react-components-package-faa54e.js')</script>
<script>$LAB.queueWait(function() {PackageManager.markExecuted("react-components.js")})</script>
<script>$LAB.queueScript('https://cdn.kastatic.org/genfiles/javascript/en/select2-package-e949f8.js')</script>
<script>$LAB.queueWait(function() {PackageManager.markExecuted("select2.js")})</script>
<script>$LAB.queueScript('https://cdn.kastatic.org/genfiles/javascript/en/location-picker-package-9bb5c5.js')</script>
<script>$LAB.queueWait(function() {PackageManager.markExecuted("location-picker.js")})</script>
<script>$LAB.queueScript('https://cdn.kastatic.org/genfiles/javascript/ko/eduorg-picker-package-dcc858.js')</script>
<script>$LAB.queueWait(function() {PackageManager.markExecuted("eduorg-picker.js")})</script>
<script>$LAB.queueScript('https://cdn.kastatic.org/genfiles/javascript/ko/profile-settings-package-ebb57f.js')</script>
<script>$LAB.queueWait(function() {PackageManager.markExecuted("profile-settings.js")})</script>

<script>$LAB.queueScript('https://cdn.kastatic.org/genfiles/javascript/ko/shared-components-package-f07f03.js')</script>
<script>$LAB.queueWait(function() {PackageManager.markExecuted("shared-components.js")})</script>
<script>$LAB.queueScript('https://cdn.kastatic.org/genfiles/javascript/ko/hover-card-package-9af172.js')</script>
<script>$LAB.queueWait(function() {PackageManager.markExecuted("hover-card.js")})</script>
<script>$LAB.queueScript('https://cdn.kastatic.org/genfiles/javascript/en/guiders-package-7d19b5.js')</script>
<script>$LAB.queueWait(function() {PackageManager.markExecuted("guiders.js")})</script>
<script>$LAB.queueScript('https://cdn.kastatic.org/genfiles/javascript/ko/settings-package-03f940.js')</script>
<script>$LAB.queueWait(function() {PackageManager.markExecuted("settings.js")})</script>

<script>
$LAB.queueWait(function() {
    var $ = KAdefine.require("jquery");
    var React = KAdefine.require("react");
    var ReactDOM = KAdefine.require("react-dom");
    var Settings = KAdefine.require("./javascript/settings-package/settings.js");
    Settings.initAccount({"sessionHash": "5813f465629c77eaf46f8fc12872fc48c27b8cec3ad71fe9da0fbf05a5c57986", "requiresExistingPassword": false, "targetProfile": {"isModerator": false, "streakLength": 0, "canRecordTutorial": false, "isDemo": false, "allowedByParentToAddAnyCoach": true, "userKey": "ag5zfmtoYW4tYWNhZGVteXJUCxIIVXNlckRhdGEiRnVzZXJfaWRfa2V5X2h0dHA6Ly9pZC5raGFuYWNhZGVteS5vcmcvYzlhYzUyOTc1NjExNDdkYWFiMWQxZDgzMGM2OTg5Y2EM", "countBrandNewNotifications": 0, "hasChangedAvatar": false, "avatarName": "greenleaf", "moderatorLevel": 0, "isActivityAccessible": true, "hasChildStudents": false, "isParentOfLoggedInUser": false, "dateJoined": "2017-02-07T00:57:17Z", "userId": "http://id.khanacademy.org/c9ac5297561147daab1d1d830c6989ca", "affiliations": [], "userLocation": null, "canCreateOfficialClarifications": false, "childPageRoot": "/parent/child/kaid_247776623425725252201305/", "backgroundName": "blue", "profileRoot": "/profile/kaid_247776623425725252201305/", "isDataCollectible": true, "streakLastExtended": "1900-01-01", "followRequiresApproval": true, "canMessageUsers": false, "isPhantom": false, "email": "Liam.Kimjihwan@gmail.com", "globalPermissions": [], "username": "", "bio": "", "hideVisual": false, "isMidsignupPhantom": false, "canModifyCoaches": true, "canEvalCsProjects": false, "canHellban": false, "publicBadges": [], "isChildAccount": false, "signedUpAsTeacher": false, "background": {"thumbSrc": "https://cdn.kastatic.org/images/profile/backgrounds/bg-blue-preview.png", "displayName": "Blue", "imagePath": "/images/profile/backgrounds/bg-blue.jpg", "rewardTriggers": "set([])", "thumbPath": "/images/profile/backgrounds/bg-blue-preview.png", "translatedRequirements": [], "thumbnailPath": "", "thumbnailSrc": "https://cdn.kastatic.org/images/profile/backgrounds/bg-blue.jpg", "rewardType": "profile_background", "translatedDisplayName": "파란색", "imageSrc": "https://cdn.kastatic.org/images/profile/backgrounds/bg-blue.jpg", "name": "blue"}, "isCreator": false, "countVideosCompleted": 0, "isPublic": false, "avatarSrc": "https://cdn.kastatic.org/images/avatars/leaf-green.png", "soundOn": true, "nickname": "Liam.Kimjihwan", "includesUserDataInfo": true, "hasCoachHomepage": false, "backgroundSrc": "https://cdn.kastatic.org/images/profile/backgrounds/bg-blue.jpg", "isDeveloper": false, "autocontinueOn": true, "isPublisher": false, "isCurator": false, "restrictedDomain": null, "hasParentHomepage": false, "homepageUrl": "/", "points": 0, "isCoachingLoggedInUser": true, "avatar": {"displayName": "Green Leaf", "imagePath": "/images/avatars/leaf-green.png", "rewardTriggers": "set([])", "translatedRequirements": [], "partType": "model", "thumbnailPath": "", "thumbnailSrc": "https://cdn.kastatic.org/images/avatars/leaf-green.png", "rewardType": "avatar_reward", "translatedDisplayName": "그린 리프", "imageSrc": "https://cdn.kastatic.org/images/avatars/leaf-green.png", "name": "greenleaf"}, "isSelf": true, "streakLastLength": 0, "isOrphan": false, "kaid": "kaid_247776623425725252201305", "badgeCounts": {"0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0}, "hasStudents": false}, "isChildView": false, "isModifyingChild": false, "isChildActor": false});

    var profileSettingsEl = document.getElementById("profile-settings");
    if (profileSettingsEl) {
        var KA = KAdefine.require("./javascript/shared-package/ka.js");
        var ProfileInfoEditForm = React.createFactory(KAdefine.require(
            "./javascript/profile-settings-package/profile-settings.jsx")
            .ProfileInfoEditForm);
        KA.getUserProfile().fetchFull().then(function() {
            ReactDOM.render(ProfileInfoEditForm({
                profileModel: KA.getUserProfile(),
            }), profileSettingsEl);
        });
    }

    Settings.initRouter();

    var EmailSettings = React.createFactory(KAdefine.require(
        "./javascript/settings-package/email-settings.jsx"));
    ReactDOM.render(
        EmailSettings({"answerNotification": {"checked": true, "description": "질문에 대한 답변이 완료되었습니다.", "key": "ag5zfmtoYW4tYWNhZGVteXJ7CxIVVXNlckVtYWlsU3Vic2NyaXB0aW9uImBlbWFpbF9zdWI6YW5zd2Vybm90aWZpY2F0aW9uZW1haWw6aWQ6aHR0cDovL2lkLmtoYW5hY2FkZW15Lm9yZy9jOWFjNTI5NzU2MTE0N2RhYWIxZDFkODMwYzY5ODljYToM"}, "isEmailVerified": true, "checked": true, "hasChildren": false, "masteryTask": {"checked": true, "description": "마스터리 과제 공지", "key": "ag5zfmtoYW4tYWNhZGVteXJwCxIVVXNlckVtYWlsU3Vic2NyaXB0aW9uIlVlbWFpbF9zdWI6bWFzdGVyeWVtYWlsOmlkOmh0dHA6Ly9pZC5raGFuYWNhZGVteS5vcmcvYzlhYzUyOTc1NjExNDdkYWFiMWQxZDgzMGM2OTg5Y2E6DA"}, "isChildView": false, "emails": ["Liam.Kimjihwan@gmail.com"], "childrenList": [], "token": null, "hasStudents": false, "studentLists": [], "allStudentsList": {"checked": false, "description": "전체 학생에 대해 하나의 이메일로 받기", "key": "ag5zfmtoYW4tYWNhZGVteXKEAQsSFVVzZXJFbWFpbFN1YnNjcmlwdGlvbiJpZW1haWxfc3ViOmNvYWNoX3JlcG9ydDppZDpodHRwOi8vaWQua2hhbmFjYWRlbXkub3JnL2M5YWM1Mjk3NTYxMTQ3ZGFhYjFkMWQ4MzBjNjk4OWNhOmxpc3Rfa2V5PWFsbFN0dWRlbnRzDA"}, "sendableEmail": true, "subscriptionKey": "ag5zfmtoYW4tYWNhZGVteXJsCxIVVXNlckVtYWlsU3Vic2NyaXB0aW9uIlFlbWFpbF9zdWI6YWxsZW1haWw6aWQ6aHR0cDovL2lkLmtoYW5hY2FkZW15Lm9yZy9jOWFjNTI5NzU2MTE0N2RhYWIxZDFkODMwYzY5ODljYToM", "email": "Liam.Kimjihwan@gmail.com", "personalReport": {"checked": false, "description": "내 활동 및 성과", "key": "ag5zfmtoYW4tYWNhZGVteXJyCxIVVXNlckVtYWlsU3Vic2NyaXB0aW9uIldlbWFpbF9zdWI6d2Vla2x5X3N1bW1hcnk6aWQ6aHR0cDovL2lkLmtoYW5hY2FkZW15Lm9yZy9jOWFjNTI5NzU2MTE0N2RhYWIxZDFkODMwYzY5ODljYToM"}, "evalNotification": {"checked": true, "description": "실패한 평가 응답", "key": "ag5zfmtoYW4tYWNhZGVteXJ5CxIVVXNlckVtYWlsU3Vic2NyaXB0aW9uIl5lbWFpbF9zdWI6ZXZhbG5vdGlmaWNhdGlvbmVtYWlsOmlkOmh0dHA6Ly9pZC5raGFuYWNhZGVteS5vcmcvYzlhYzUyOTc1NjExNDdkYWFiMWQxZDgzMGM2OTg5Y2E6DA"}}),
        $('.settings-tab.email').get(0));

    // If the URL ends with a section name, like `#sat-extra-time-section`,
    // scroll to it.
    // The browser would do this automatically if this page were server-side
    // rendered, but, because we use client-side rendering,
    // #sat-extra-time-section doesn't exist when the page loads. So, we wait
    // for it to render, then perform the auto-scrolling ourselves.
    var anchor = window.location.hash.slice(1);
    var section = document.getElementById(anchor);
    if (section) {
        section.scrollIntoView();
    }
})
</script> -->

<script>
(function() {
    window.KA = {"kaLocale": "ko", "userId": "http://id.khanacademy.org/c9ac5297561147daab1d1d830c6989ca", "VIDEO_AUTOPLAY_ENABLED": true, "SAT_VIDEO_END_CARD_MODAL": null, "SAT_EXAM_DAY_PROMO": false, "GANDALF_SHOW_ON_SITE_NO_TRANSLATION": false, "VIDEO_PLAYER_PREFERENCE": "youtube", "isZeroRated": false, "serverTime": 1486429116.06218, "staticUrlBase": "https://cdn.kastatic.org", "GANDALF_SHOW_TEACHER_LEADERBOARDS": false, "stripePublicKey": "pk_live_bOMeT1j35MoCY5NMcddnG0ke", "SAT_VIDEO_END_CARD_COPY": null, "FB_APP_NAMESPACE": "khanacademy", "SIMPLIFIED_MISSIONS": false, "bingoId": "_gae_bingo_random:Ff6nrXwv_2QuEeLUxRnKQ2YxOSiZL9fDOyvM8_6r", "LEARNSTORM_DATES": {"firstWeekStart": 1454140860000, "finalCutoff": 1460789940000, "kickoff": 1452499260000, "start": 1454054460000, "end": 1459580340000, "now": 1486429116000, "everythingOff": 1463381940000}, "isPhone": false, "SHOULD_VIDEO_AUTOPLAY_ON_INITIAL_LOAD": true, "EDIT_MULTI_ITEMS": false, "FB_APP_ID": "160249463991765", "mathjaxUrl": "https://cdn.kastatic.org/third_party/javascript-khansrc/khan-mathjax/2.1/MathJax.js?config=KAthJax-730d56e87e9c926b91584f6030314815", "isIPad": false, "vipIssueReporter": false, "GANDALF_SHOW_CURATION_ONLY_TOOLS": false, "gaeStatsKeyPrefix": null, "isIE10": false, "isTablet": false, "loginUrl": "/login?continue=%2Fsettings%2Faccount", "BLOCK_YOUTUBE": false, "RIO_2016_PARTICIPANT": false, "IS_DEV_SERVER": false, "HIDE_SAT_CB_LINKING": false, "version": "170206-1545-05ea7b77f358.399009361667091535", "SAT_ONBOARDING_SLIDES_COPY": "control", "MAX_BIO_LENGTH": 160, "useKatex": true, "languageYoutube": "ko", "isMobile": false, "GANDALF_GOOGLE_CLASSROOM_PROGRESS_SYNC": false, "GANDALF_LS_ALLOW_SET_SCHOOL": false, "GANDALF_LEARNSTORM_LEADERBOARDS": true, "commitSHA": "c53842eb4caec4d96dc8d7c7b1b2c9c33bff1555", "_userProfileData": {"isSelf": true, "username": "", "isParentOfLoggedInUser": false, "isChildAccount": false, "hasChangedAvatar": false, "soundOn": false, "badgeCounts": {"0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0}, "followRequiresApproval": true, "canModifyCoaches": true, "dateJoined": "2017-02-07T00:57:17Z", "hasCoachHomepage": false, "hasStudents": false, "userKey": "ag5zfmtoYW4tYWNhZGVteXJUCxIIVXNlckRhdGEiRnVzZXJfaWRfa2V5X2h0dHA6Ly9pZC5raGFuYWNhZGVteS5vcmcvYzlhYzUyOTc1NjExNDdkYWFiMWQxZDgzMGM2OTg5Y2EM", "backgroundSrc": "https://cdn.kastatic.org/images/profile/backgrounds/bg-blue.jpg", "homepageUrl": "/", "hideVisual": false, "isCreator": false, "childPageRoot": "/parent/child/kaid_247776623425725252201305/", "isCurator": false, "isDeveloper": false, "streakLastLength": 0, "affiliations": [], "avatarName": "greenleaf", "background": {"translatedDisplayName": "파란색", "imagePath": "/images/profile/backgrounds/bg-blue.jpg", "displayName": "Blue", "name": "blue", "thumbSrc": "https://cdn.kastatic.org/images/profile/backgrounds/bg-blue-preview.png", "translatedRequirements": [], "rewardType": "profile_background", "thumbnailSrc": "https://cdn.kastatic.org/images/profile/backgrounds/bg-blue.jpg", "imageSrc": "https://cdn.kastatic.org/images/profile/backgrounds/bg-blue.jpg", "thumbPath": "/images/profile/backgrounds/bg-blue-preview.png", "thumbnailPath": ""}, "includesUserDataInfo": false, "autocontinueOn": false, "canEvalCsProjects": false, "globalPermissions": [], "streakLastExtended": "1900-01-01", "profileRoot": "/profile/kaid_247776623425725252201305/", "isOrphan": false, "countVideosCompleted": 0, "bio": "", "isPublic": false, "countBrandNewNotifications": 0, "isActivityAccessible": true, "userId": "http://id.khanacademy.org/c9ac5297561147daab1d1d830c6989ca", "isModerator": false, "backgroundName": "blue", "canHellban": false, "isPublisher": false, "isPhantom": false, "isDataCollectible": true, "nickname": "Liam.Kimjihwan", "canMessageUsers": false, "canCreateOfficialClarifications": false, "publicBadges": [], "restrictedDomain": null, "moderatorLevel": 0, "allowedByParentToAddAnyCoach": true, "avatarSrc": "https://cdn.kastatic.org/images/avatars/leaf-green.png", "email": "Liam.Kimjihwan@gmail.com", "userLocation": null, "canRecordTutorial": false, "points": 0, "avatar": {"translatedDisplayName": "그린 리프", "imagePath": "/images/avatars/leaf-green.png", "displayName": "Green Leaf", "name": "greenleaf", "partType": "model", "translatedRequirements": [], "rewardType": "avatar_reward", "thumbnailSrc": "https://cdn.kastatic.org/images/avatars/leaf-green.png", "imageSrc": "https://cdn.kastatic.org/images/avatars/leaf-green.png", "thumbnailPath": ""}, "isCoachingLoggedInUser": true, "kaid": "kaid_247776623425725252201305", "hasParentHomepage": false, "signedUpAsTeacher": false}, "USE_DRAFT_EDITOR": false, "GANDALF_TRANSLATION_BOOKMARKS_BAR": false, "languageLocalName": "한국어", "languageIsRtl": false, "ALLOW_SIMPLIFIED_MISSION_OPT_IN": false, "language": "ko", "SHOW_UNANSWERED_TAB": false, "PROMINENT_SEARCH": "control", "isBibliotronPage": false, "requestLogId": "58991bbb00ff051a9f7372d5310001737e6b68616e2d61636164656d7900016931386e3a3137303230362d313534352d3035656137623737663335380001011f", "GANDALF_GOOGLE_CLASSROOM_API_SHARE": false, "INITIALIZED": true, "kaid": "kaid_247776623425725252201305"};  
    
    if (!window.KA_ENABLE_RAVENJS) {
        window.kaErrors = window.kaErrors || [];  
        window.onerror = function(msg, url, lineno, colno, err) { window.kaErrors.push(err); }  
    }
})();
</script>



<script>/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.3 (c) Kyle Simpson
    MIT License
*/
(function(e){var t=e.$LAB,n="UseLocalXHR",r="AlwaysPreserveOrder",i="AllowDuplicates",s="CacheBust",a="BasePath",c="ErrorHandler",f=/^[^?#]*\//.exec(location.href)[0],l=/^\w+\:\/\/\/?[^\/]+/.exec(f)[0],o=document.head||document.getElementsByTagName("head"),u=e.opera&&Object.prototype.toString.call(e.opera)=="[object Opera]"||"MozAppearance"in document.documentElement.style,d=document.createElement("script"),h=typeof d.preload=="boolean",p=h||d.readyState&&d.readyState=="uninitialized",y=!p&&d.async===true,g=!p&&!y&&!u;function m(e){return Object.prototype.toString.call(e)=="[object Function]"}function _(e){return Object.prototype.toString.call(e)=="[object Array]"}function v(e,t){var n=/^\w+\:\/\//;if(/^\/\/\/?/.test(e)){e=location.protocol+e}else if(!n.test(e)&&e.charAt(0)!="/"){e=(t||"")+e}return n.test(e)?e:(e.charAt(0)=="/"?l:f)+e}function x(e,t){for(var n in e){if(e.hasOwnProperty(n)){t[n]=e[n]}}return t}function b(e){var t=false;for(var n=0;n<e.scripts.length;n++){if(e.scripts[n].ready&&e.scripts[n].exec_trigger){t=true;e.scripts[n].exec_trigger();e.scripts[n].exec_trigger=null}}return t}function w(e,t,n,r){e.onload=e.onreadystatechange=function(){if(e.readyState&&e.readyState!="complete"&&e.readyState!="loaded"||t[n])return;e.onload=e.onreadystatechange=null;r()}}function S(e){e.ready=e.finished=true;for(var t=0;t<e.finished_listeners.length;t++){e.finished_listeners[t]()}e.ready_listeners=[];e.finished_listeners=[]}function O(e,t,r,i,s){setTimeout(function(){var a,c=t.real_src,f;if("item"in o){if(!o[0]){setTimeout(arguments.callee,25);return}o=o[0]}a=document.createElement("script");if(t.type)a.type=t.type;if(t.charset)a.charset=t.charset;if(s){if(p){r.elem=a;if(h){a.preload=true;a.onpreload=i}else{a.onreadystatechange=function(){if(a.readyState=="loaded")i()}}a.src=c}else if(s&&c.indexOf(l)==0&&e[n]){f=new XMLHttpRequest;f.onreadystatechange=function(){if(f.readyState==4){f.onreadystatechange=function(){};r.text=f.responseText+"\n//@ sourceURL="+c;i()}};f.open("GET",c);f.send()}else{a.type="text/cache-script";w(a,r,"ready",function(){o.removeChild(a);i()});a.src=c;o.insertBefore(a,o.firstChild)}}else if(y){a.async=false;w(a,r,"finished",i);a.src=c;o.insertBefore(a,o.firstChild)}else{w(a,r,"finished",i);a.src=c;o.insertBefore(a,o.firstChild)}},0)}function B(){var f={},l=p||g,u=[],d={},h;f[n]=true;f[r]=false;f[i]=false;f[s]=false;f[a]="";f[c]=function(){};function y(e,t,n){var r;function s(){if(r!=null){r=null;S(n)}}if(d[t.src].finished)return;if(!e[i])d[t.src].finished=true;r=n.elem||document.createElement("script");if(t.type)r.type=t.type;if(t.charset)r.charset=t.charset;w(r,n,"finished",s);if(n.elem){n.elem=null}else if(n.text){r.onload=r.onreadystatechange=null;r.text=n.text}else{r.src=t.real_src}o.insertBefore(r,o.firstChild);if(n.text){s()}}function A(e,t,n,r){var c,f,l=function(){t.ready_cb(t,function(){y(e,t,c)})},o=function(){t.finished_cb(t,n)};t.src=v(t.src,e[a]);t.real_src=t.src+(e[s]?(/\?.*$/.test(t.src)?"&_":"?_")+~~(Math.random()*1e9)+"=":"");if(!d[t.src])d[t.src]={items:[],finished:false};f=d[t.src].items;if(e[i]||f.length==0){c=f[f.length]={ready:false,finished:false,ready_listeners:[l],finished_listeners:[o]};O(e,t,c,r?function(){c.ready=true;for(var e=0;e<c.ready_listeners.length;e++){c.ready_listeners[e]()}c.ready_listeners=[]}:function(){S(c)},r)}else{c=f[0];if(c.finished){o()}else{c.finished_listeners.push(o)}}}function E(){var e,t=x(f,{}),n=[],i=0,s=false,a;function o(e,t){e.ready=true;e.exec_trigger=t;d()}function u(e,t){e.ready=e.finished=true;e.exec_trigger=null;for(var n=0;n<t.scripts.length;n++){if(!t.scripts[n].finished)return}t.finished=true;d()}function d(){while(i<n.length){if(m(n[i])){try{n[i++]()}catch(e){t[c](e)}continue}else if(!n[i].finished){if(b(n[i]))continue;break}i++}if(i==n.length){s=false;a=false}}function h(){if(!a||!a.scripts){n.push(a={scripts:[],finished:true})}}e={script:function(){for(var n=0;n<arguments.length;n++){(function(n,i){var c;if(!_(n)){i=[n]}for(var f=0;f<i.length;f++){h();n=i[f];if(m(n))n=n();if(!n)continue;if(_(n)){c=[].slice.call(n);c.unshift(f,1);[].splice.apply(i,c);f--;continue}if(typeof n=="string")n={src:n};n=x(n,{ready:false,ready_cb:o,finished:false,finished_cb:u});a.finished=false;a.scripts.push(n);A(t,n,a,l&&s);s=true;if(t[r])e.wait()}})(arguments[n],arguments[n])}return e},wait:function(){if(arguments.length>0){for(var t=0;t<arguments.length;t++){n.push(arguments[t])}a=n[n.length-1]}else a=false;d();return e}};return{script:e.script,wait:e.wait,setOptions:function(n){x(n,t);return e}}}h={setGlobalDefaults:function(e){x(e,f);return h},setOptions:function(){return E().setOptions.apply(null,arguments)},script:function(){return E().script.apply(null,arguments)},wait:function(){return E().wait.apply(null,arguments)},queueScript:function(){u[u.length]={type:"script",args:[].slice.call(arguments)};return h},queueWait:function(){u[u.length]={type:"wait",args:[].slice.call(arguments)};return h},runQueue:function(){var e=h,t=u.length,n=t,r;for(;--n>=0;){r=u.shift();e=e[r.type].apply(null,r.args)}return e},noConflict:function(){e.$LAB=t;return h},sandbox:function(){return B()}};return h}e.$LAB=B();(function(e,t,n){if(document.readyState==null&&document[e]){document.readyState="loading";document[e](t,n=function(){document.removeEventListener(t,n,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);</script>
<script>
(function() {
$LAB.setGlobalDefaults({
    AlwaysPreserveOrder:1,
    ErrorHandler:function(err) {
        console.error("Error in LABjs loading: " + err.message);
        if (typeof(window.kaErrors) !== "undefined") {
            window.kaErrors.push(err);
        }
    }
});
window.kaDoneLoading = false;
window.addEventListener("load", function(event) {
    // Register one last function that tells us we're all done!
    $LAB.queueWait(function() {
        window.kaDoneLoading = true;
        // This is set in end_to_end_tests.base.browser when running e2e tests.
        if (window.onKADoneLoading) {
            window.onKADoneLoading();
        }
    });
    $LAB.runQueue();
});
})();
</script>

<script>

    $LAB.queueWait(function() {// TODO(nabeel): replace this pixel (which is currently Alpert's)
    // with a KA-specific one.  For now, we're using Alpert's pixel
    // because he has some Facebook Ads credit that we'll be
    // using to run a few ad campaigns, and unfortunately,
    // it's not possible to share this credit with another account.
    (function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? 
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n; 
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0; 
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)})(window, 
    document,'script','//connect.facebook.net/en_US/fbevents.js'); 

    fbq('init', '917218295030130');}) 
</script>



<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ 
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), 
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) 
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 

    ga('create', 'UA-6742635-1', {
        'cookieDomain': '.khanacademy.org',
        'userId': "S2/rcgDMpP0O/dvvToSYgfVZLEK+Q0GOTMSlcuPcQd8=",
    });
    ga('set', 'dimension8', "main:/settings/account");
    ga('set', 'dimension5', "true");
    ga('set', 'dimension6', "Student");
    ga('set', 'dimension7', ":");

    

    ga('send', 'pageview');
</script>
