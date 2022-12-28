// const targetImagePath = new URL("./target_image.zpt", import.meta.url).href;
// const manager = new ZapparThree.LoadingManager();
const renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true });
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
});
renderer.setAnimationLoop(render);
const camera = new ZapparThree.Camera();
ZapparThree.glContextSet(renderer.getContext());
const scene = new THREE.Scene();
scene.background = camera.backgroundTexture;
ZapparThree.permissionRequestUI().then((granted) => {
    if (granted)
        camera.start();
    else ZapparThree.permissionDeniedUI();
});
// const tracker = new ZapparThree.ImageTrackerLoader(manager).load(
//     targetImagePath
// );
const trackerGroup = new ZapparThree.ImageAnchorGroup(camera, tracker);
scene.add(trackerGroup);


function render() {
    camera.updateFrame(renderer);
    renderer.render(scene, camera);
}
