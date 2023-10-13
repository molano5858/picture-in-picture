const videoElement = document.getElementById("video");
const button = document.getElementById("button");
const buttonSelect = document.getElementById("button-select");

// Prompt to select media stream , pass to video content, then play

async function selectMediaStream() {
  try {
    const mediStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("Whoops, error here: ", error);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  //  Start Pictiure in Picture
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disabled = false;
});

buttonSelect.addEventListener("click", selectMediaStream);
