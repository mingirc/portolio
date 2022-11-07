const externalClick = (path, target) => {
    // var file_path = '../../assets/Cemal_Mingir_Resume.pdf';
    var file_path = path;
    var a = document.createElement('A');
    a.href = file_path;
    a.download = file_path.substring(file_path.lastIndexOf('/') + 1);
    a.target = target;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

export default externalClick;