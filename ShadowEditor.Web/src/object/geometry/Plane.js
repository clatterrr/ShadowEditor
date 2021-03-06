/**
 * 平面
 * @param {THREE.PlaneBufferGeometry} geometry 几何体
 * @param {THREE.MeshStandardMaterial} material 材质
 */
function Plane(geometry = new THREE.PlaneBufferGeometry(50, 50), material = new THREE.MeshStandardMaterial()) {
    THREE.Mesh.call(this, geometry, material);

    this.name = _t('Plane');
    this.rotation.x = -Math.PI / 2;
    this.castShadow = true;
    this.receiveShadow = true;

    this.userData.physics = this.userData.physics || {
        enabled: true,
        type: 'rigidBody',
        shape: 'btBoxShape',
        mass: 0,
        inertia: {
            x: 0,
            y: 0,
            z: 0
        }
    };
}

Plane.prototype = Object.create(THREE.Mesh.prototype);
Plane.prototype.constructor = Plane;

export default Plane;