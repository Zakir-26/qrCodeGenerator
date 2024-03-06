document.addEventListener('DOMContentLoaded', function() {
      const generateButton = document.getElementById('generateButton');
      const qrCodeImage = document.getElementById('qrCodeImage');
      const loadingSpinner = document.getElementById('loadingSpinner');

      generateButton.addEventListener('click', function() {
        const inputText = document.getElementById('inputText').value.trim();
        document.getElementById('para').innerHTML = "Generating Qr Code, Please wait...";
        //document.getElementById('btn').innerHTML= "<button>Download</button>"

        if (inputText !== '') {
          loadingSpinner.style.display = 'block';

          // Simulate loading time with a timeout
          setTimeout(() => {
            qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputText)}`;
            qrCodeImage.style.display = 'inline-block';
            loadingSpinner.style.display = 'none';
            document.getElementById('para').innerHTML = ' ';
           
            //document.getElementsByClassName('downqr').style.display = 'void';
          }, 3000);
        }
      });
});

function reset() {
  location.reload(true); 
}

const date = new Date();
const a = date.getFullYear();
document.getElementById('year').innerHTML = a;