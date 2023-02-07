function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZqGw9NHEi4":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbx-JddlWKbgZyhYnMawL5l1PTUIIIZF0MhFzLaFLaERUxBwZ__IqZLtDkk1tpUHw1QS/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

