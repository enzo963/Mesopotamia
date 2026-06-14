

document.getElementById('downloadBtn').addEventListener('click', function () {

    const link = document.createElement('a');

    link.href = "Videos_for_game/video1.mp4";
    link.download = "video-test.mp4";

    document.body.appendChild(link);
    link.click();


    document.body.removeChild(link);
});