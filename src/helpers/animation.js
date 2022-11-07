import $ from "jquery";

const animation = () => {
    $('#navElementWrapper').css({"marginRight":"-50vw"}).animate({"marginRight":"0"}, 1000);
    $('#logoWrapper').css({"marginLeft":"-50vw"}).animate({"marginLeft":"0vw"}, 1000)
    $('#smbWrapper').css({"marginBottom":"-400px"}).animate({"marginBottom":"0"}, 1000)
}

export default animation;