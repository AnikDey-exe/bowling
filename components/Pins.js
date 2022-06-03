AFRAME.registerComponent('pins', {
    init: function() {
        this.createPins();
    },
    createPins: function() {
        var posX = 0;
        var posY = -1;
        var posZ = -10;

        for(var i = 0; i < 5; i++) {
            for(var j = 0; j < i; j++) {
                var scene = document.querySelector('#scene-2');

                var pin = document.createElement('a-entity');

                posX += 0.7;

                pin.setAttribute('id', 'pin'+i);

                pin.setAttribute('position', {x: posX, y: posY, z: posZ});

                pin.setAttribute('scale', {x: 4, y: 4, z: 4});

                pin.setAttribute('gltf-model', '../models/bowling_pin/scene.gltf');

                pin.setAttribute('dynamic-body', {});

                scene.appendChild(pin);
            }
            posZ -= 1.4;
            posX = 0 - i*0.35;
        }
    }
});