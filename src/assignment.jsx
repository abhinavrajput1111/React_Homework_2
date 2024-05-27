let date = 20;

function Assignment() {
  let data = (
    <>
      <div
        id="box"
        className=" h-screen flex justify-center items-center bg-yellow-50"
      >
        <div id="wrapper" className="p-5 shadow-xl w-[65%] mx-auto bg-white">
          <h1 className="text-3xl my-3 font-semibold text-gray-700">
            Topics Covered
          </h1>

          <p>The following is a List, of Topics covered by MDN learning Area</p>

          <h4 className="my-3 text-lg">
            <a
              href="https://developer.mozilla.org/en-US/"
              className="text-blue-500 underline"
            >
              Getting Started with the Web
            </a>{" "}
          </h4>
          <p className="ml-5">
            Provides a practical introduction {date} to the web development for
            complete beginners
          </p>

          <h4 className="my-3 text-lg">
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/HTML"
              className="text-blue-500 underline"
            >
              HTML - Structuring the Web
            </a>
          </h4>
          <p className="ml-5">
            HTML is the language we use to Structure the different parts of out
            content and define what there meaning and purpose is. This topic
            teaches HTML in detail.
          </p>

          <h4 className="my-3 text-lg">
            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/CSS"
              className="text-blue-500 underline"
            >
              CSS - Styling the Web
            </a>
          </h4>
          <p className="ml-5" style={{}}>
            Css is the languge that controls our web contents styles and
            layouts, as well as adding behaviour in the page such as adding
            animations.
            <br></br>
            this topic provides comprehensive coverage of CSS.
          </p>
        </div>
      </div>
    </>
  );
  return data;
}

export default Assignment;
