const h1 = document.getElementById("header");
const p1 = document.getElementById("paragraph");
const b1 = document.body;


function setTitle(titleText = null)
{
    if(titleText == null)
    {
        h1.textContent = "This is default H1 Text!";
    }
    else
    {
        h1.textContent = titleText;
    }
}

function setDescription(dText = null)
{
    if(dText == null)
    {
        p1.textContent = "This is default paragraph Text!";
    }
    else
    {
        p1.textContent = dText;
    }
}

function setBackgroundColor(bgColor = null)
{
    if(bgColor == null)
    {
        b1.setAttribute("style", "background-color: white !important;");
    }
    else
    {
        b1.setAttribute("style", "background-color: " + bgColor + " !important");
    }
}

function setFontColor(fontColor = null)
{
    if(fontColor == null)
    {
        h1.style.color = "white";
        p1.style.color = "white";
    }
    else
    {
        h1.style.color = fontColor;
        p1.style.color = fontColor;
    }
}

function setTheme(themeName = null)
{
    if(themeName == null)
    {
        b1.setAttribute("style", "");
        b1.classList.add("light-theme");
    }
    else if(themeName === "dark")
    {
        b1.setAttribute("style", "");
        b1.classList.add("dark-theme");
        b1.classList.remove("light-theme");
    }
    else if(themeName === "light")
    {
        b1.setAttribute("style", "");
        b1.classList.add("light-theme");
        b1.classList.remove("dark-theme");
    }
}

