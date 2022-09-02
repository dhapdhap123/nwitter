import { useState } from "react";

function onSubmit(event){
  event.preventDefault();
  console.log(event)
}

function Notice(){
  return (
    <div>
      <hr></hr>
      <h3>대표적인 이단</h3>
      <p>- 신천지, 하나님의교회, JMS, 구원파계열</p>
      <p>자세한 내용은 아래 사이트에서 확인 가능합니다.
        <br/><a target="blank" href="http://www.jesus114.net/">http://www.jesus114.net/</a>
        <br/><a target="blank" href="http://www.hdjongkyo.co.kr/news/sub.html?section=42264&category=42268">http://www.hdjongkyo.co.kr/news/sub.html?section=42264&category=42268</a></p>
    </div>
  );
}

function Applying(){
  return (
    <form onSubmit={onSubmit}>
      <hr></hr>
      <h3>만남 신청</h3>
      <p>이름 : <input  type="text" placeholder="홍길동" minLength="2" maxLength="5" required/></p>
      <p>성별 :&nbsp;
        <select>
          <option value="">--성별--</option>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select></p>
      <p>생년월일 : <input type="text" placeholder="20010101" minLength="8" maxLength="8" required/></p>
      <p>연락처 : <input type="text" placeholder="010-1234-5678" minLength="11" maxLength="13" required/></p>
      <p>현재 출석중인 교회(교단/노회) : <input type="text" placeholder="예수님교회(대한예수교OO회)" minLength="10" maxLength="20" required/></p>
      <p>학교/전공 : <input type="text" placeholder="고려대학교/기독교교육학과" minLength="5" maxLength="20" required/></p>
      <p>원하는 만남 : <input type="text" placeholder="멘토, 멘티, 친분, 이성교제" minLength="2" maxLength="20" required/></p>
      <p>한 줄 소개 : <input type="text" placeholder="저는 밝고 에너지가 넘치는 사람입니다." maxLength="20" required/></p>
      <input type="checkbox" required></input><span>이단이 아닙니다. (신천지, 하나님의 교회 등)</span><p className="red-ptag">*추후 본인이 이단 교파에 소속되어 있는 사실이 밝혀질 시 이에 따른 제재와 고발 조치 등을 받을 수 있음에 동의합니다.</p>
      <button>제출</button>
    </form>
  );
}

function Content(){
  const [openForm, setOpenForm] = useState(false);
  const [openNotice, setOpenNotice] = useState(false);
  const onForm = () => {
    setOpenForm((openForm) => !openForm);
  }
  const onNotice = () => {
    setOpenNotice((openNotice) => !openNotice);
  }
  return (
      <div className="content">
          <h1 className="Title">
            <a href="/">University & youth<br></br>Christian<br></br>Matching</a>
          </h1>
          <div className="menu">
            <button onClick={onForm}>만남 신청</button>
            <button onClick={onNotice}>이단 정보</button>
          </div>
          <div className="body">
            <h2>UCM은 크리스천 대학생들의 건강한 교제와 만남을 응원합니다.</h2>
          </div>
          <div className="apply-meeting">
            {openForm ? <Applying /> : null}
          </div>
          <div className="apply-meeting">
            {openNotice ? <Notice /> : null}
          </div>
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <Content/>
    </div>
  );
}

export default App;