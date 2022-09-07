export const getCookie = name => {
  const cookies = document.cookie.split(" ").map(cookie => {
    const index = cookie.indexOf("=");
    if (index < 0) return { name: "", value: null };

    const name = cookie.slice(0, index);
    let value = cookie.slice(index + 1);
    value = value.endsWith(";") ? value.slice(0, -1) : value;
    return { name, value };
  });
  const cookie = cookies.find(cookie => cookie.name === name);

  return cookie ? cookie.value : null;
};

export const setCookie = (name,value,days) => {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
/*
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
*/
export const eraseCookie = (name) => {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
