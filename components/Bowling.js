AFRAME.registerComponent('bowl', {
    init: function () {
        this.Bowl();
    },
    Bowl: function () {
        window.addEventListener('click', () => {
            // if(e.key === 'z') {
            var element = document.createElement('a-entity');

            var camera = document.querySelector('#camera-2');
            var scene = document.querySelector('#scene-2');

            var cameraPos = camera.getAttribute('position');

            var cameraObject3D = document.querySelector('#camera-2').object3D;

            var direction = new THREE.Vector3();

            cameraObject3D.getWorldDirection(direction);

            element.setAttribute('geometry', { primitive: 'sphere', radius: 0.5 });
            element.setAttribute('material', { color: 'black' });
            element.setAttribute('position', { x: cameraPos.x, y: cameraPos.y, z: cameraPos.z });
            element.setAttribute('velocity', direction.multiplyScalar(-10));
            element.setAttribute('dynamic-body', { shape: "sphere", mass: 0 });

            scene.appendChild(element);

            element.addEventListener('collide', this.removeBall);
            //}
        })
    },
    removeBall: function (e) {
        var ball = e.detail.target.el;
        var pin = e.detail.body.el;

        if (pin.id.includes("pin")) {
            pin.setAttribute('material', { opacity: 0.5, transparent: true });
            var impulse = new CANNON.Vec3(-2, 2, 1);
            var point = new CANNON.Vec3().copy(pin.getAttribute('position'));
            pin.body.applyImpulse(impulse, point);
            ball.removeEventListener('collide', this.removeBall);
            var scene = document.querySelector('#scene-2');
            scene.removeChild(ball);
        }
    }
})