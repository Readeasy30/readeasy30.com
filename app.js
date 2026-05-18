const app = document.getElementById("app");

app.innerHTML = `
  <div style="max-width:600px;margin:60px auto;font-family:Arial;text-align:center;">
    
    <h1>📘 ReadEasy30</h1>
    <p>25 Minutes to Reading Success</p>

    <button id="startBtn" style="padding:12px 20px;font-size:16px;">
      Start Placement Test
    </button>

    <div id="output" style="margin-top:30px;"></div>
  </div>
`;

document.getElementById("startBtn").onclick = function () {
  document.getElementById("output").innerHTML = `
    <h3>Level Check Started</h3>
    <p>We will build your reading level next.</p>
  `;
};
  

