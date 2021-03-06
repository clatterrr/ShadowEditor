import BaseSerializer from '../BaseSerializer';
import MaterialSerializer from './MaterialSerializer';

/**
 * MeshDepthMaterialSerializer
 * @author tengge / https://github.com/tengge1
 */
function MeshDepthMaterialSerializer() {
    BaseSerializer.call(this);
}

MeshDepthMaterialSerializer.prototype = Object.create(BaseSerializer.prototype);
MeshDepthMaterialSerializer.prototype.constructor = MeshDepthMaterialSerializer;

MeshDepthMaterialSerializer.prototype.toJSON = function (obj) {
    return MaterialSerializer.prototype.toJSON.call(this, obj);
};

MeshDepthMaterialSerializer.prototype.fromJSON = function (json, parent, server) {
    var obj = parent === undefined ? new THREE.MeshDepthMaterial() : parent;

    MaterialSerializer.prototype.fromJSON.call(this, json, obj, server);

    return obj;
};

export default MeshDepthMaterialSerializer;