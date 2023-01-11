function openSideDrawer() {
  document.getElementById("side-drawer").style.display = "block";
}

function closeSideDrawer() {
  document.getElementById("side-drawer").style.display = "none";
}

function playMusic(music) {
  var albert = document.getElementsByClassName("pricing__btn-albert");
  var wanda = document.getElementsByClassName("pricing__btn-wanda");
  var octavius = document.getElementsByClassName("pricing__btn-octavius");
  var private = document.getElementsByClassName("pricing__btn-private");

  albert[1].style.display = "none";
  albert[0].style.display = "block";
  wanda[1].style.display = "none";
  wanda[0].style.display = "block";
  octavius[1].style.display = "none";
  octavius[0].style.display = "block";
  private[1].style.display = "none";
  private[0].style.display = "block";

  if (music == "albert") {
    if (albert[1].style.display == "none") {
      albert[1].style.display = "block";
      albert[0].style.display = "none";
      document.getElementById("pricing__sample-audio").play();
    } else {
      albert[1].style.display = "none";
      albert[0].style.display = "block";
      document.getElementById("pricing__sample-audio").pause();
    }
  } else if (music == "wanda") {
    if (wanda[1].style.display == "none") {
      wanda[1].style.display = "block";
      wanda[0].style.display = "none";
      document.getElementById("pricing__sample-audio").play();
    } else {
      wanda[1].style.display = "none";
      wanda[0].style.display = "block";
      document.getElementById("pricing__sample-audio").pause();
    }
  } else if (music == "octavius") {
    if (octavius[1].style.display == "none") {
      octavius[1].style.display = "block";
      octavius[0].style.display = "none";
      document.getElementById("pricing__sample-audio").play();
    } else {
      octavius[1].style.display = "none";
      octavius[0].style.display = "block";
      document.getElementById("pricing__sample-audio").pause();
    }
  } else if (music == "private") {
    if (private[1].style.display == "none") {
      private[1].style.display = "block";
      private[0].style.display = "none";
      document.getElementById("pricing__sample-audio").play();
    } else {
      private[1].style.display = "none";
      private[0].style.display = "block";
      document.getElementById("pricing__sample-audio").pause();
    }
  }
}

function validateName(event) {
  var validatedName = /^[a-zA-Z ]+$/.test(event.target.value);
  var name = document.getElementById("contact-us__error-msg-name");

  if (!validatedName) {
    name.style.display = "block";
  } else {
    name.style.display = "none";
  }

  return validatedName;
}

function validateSubject(event) {
  var subject = document.getElementById("contact-us__error-msg-subject");
  if (event.target.value == "") {
    subject.style.display = "block";
  } else {
    subject.style.display = "none";
  }

  return event.target.value == "";
}

function validateEmail(event) {
  var validatedEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      event.target.value
    );
  var email = document.getElementById("contact-us__error-msg-email");

  if (!validatedEmail) {
    email.style.display = "block";
  } else {
    email.style.display = "none";
  }

  return validatedEmail;
}

function validateMessage(event) {
  var message = document.getElementById("contact-us__error-msg-message");
  if (event.target.value == "") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }

  return event.target.value == "";
}

function openCol(id) {
  var disp = document.getElementById(`faq__${id}`);

  if (disp.style.display == "block") {
    disp.style.display = "none";
  } else {
    disp.style.display = "block";
  }
}
