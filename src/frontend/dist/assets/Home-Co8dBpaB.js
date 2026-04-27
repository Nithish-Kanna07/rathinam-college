import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link, G as GraduationCap } from "./index-DOfvp4Z2.js";
import { V as Vector3, S as Spherical, Q as Quaternion, O as OrthographicCamera, P as PerspectiveCamera, M as MOUSE, T as TOUCH, a as Vector2, R as Ray, b as Plane, c as REVISION, u as useThree, d as useFrame, C as Color, A as AdditiveBlending, e as ShaderMaterial, f as Canvas } from "./react-three-fiber.esm-m-0ZPZ_o.js";
import { S as Section, B as Badge } from "./Section-BdvItxFc.js";
import { u as useOverallStats, a as usePlacementStats } from "./useBackend-5YnAgzFD.js";
import { A as AnimatePresence } from "./index-BqYWv6t-.js";
import { m as motion } from "./proxy-MM0XfJfO.js";
import { B as BookOpen } from "./book-open-CcbPGPb2.js";
import { A as ArrowRight } from "./arrow-right-DngBDH4K.js";
import { D as Download } from "./download-CPoApM8e.js";
import { A as Award } from "./award-BNk4Apbz.js";
import { T as TrendingUp } from "./trending-up-D_jXFHaU.js";
import { U as Users } from "./users-Dgt8fP5D.js";
import { G as Globe } from "./globe-C6HpeR6t.js";
import { T as Trophy } from "./trophy-D2Us8zw-.js";
import { L as Lightbulb } from "./lightbulb-BC1MR8jv.js";
import { S as Star } from "./star-S4XidvQT.js";
import { C as CircleCheckBig } from "./circle-check-big-CIdJD6Ul.js";
import { C as Calendar } from "./calendar--znboOEL.js";
import { B as Building2 } from "./building-2-Cs1kuwC4.js";
import { _ as _extends } from "./extends-BwmuZ0dU.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, key + "", value);
  return value;
};
class EventDispatcher {
  constructor() {
    __publicField$1(this, "_listeners");
  }
  /**
   * Adds a listener to an event type.
   * @param type The type of event to listen to.
   * @param listener The function that gets called when the event is fired.
   */
  addEventListener(type, listener) {
    if (this._listeners === void 0)
      this._listeners = {};
    const listeners = this._listeners;
    if (listeners[type] === void 0) {
      listeners[type] = [];
    }
    if (listeners[type].indexOf(listener) === -1) {
      listeners[type].push(listener);
    }
  }
  /**
      * Checks if listener is added to an event type.
      * @param type The type of event to listen to.
      * @param listener The function that gets called when the event is fired.
      */
  hasEventListener(type, listener) {
    if (this._listeners === void 0)
      return false;
    const listeners = this._listeners;
    return listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1;
  }
  /**
      * Removes a listener from an event type.
      * @param type The type of the listener that gets removed.
      * @param listener The listener function that gets removed.
      */
  removeEventListener(type, listener) {
    if (this._listeners === void 0)
      return;
    const listeners = this._listeners;
    const listenerArray = listeners[type];
    if (listenerArray !== void 0) {
      const index = listenerArray.indexOf(listener);
      if (index !== -1) {
        listenerArray.splice(index, 1);
      }
    }
  }
  /**
      * Fire an event type.
      * @param event The event that gets fired.
      */
  dispatchEvent(event) {
    if (this._listeners === void 0)
      return;
    const listeners = this._listeners;
    const listenerArray = listeners[event.type];
    if (listenerArray !== void 0) {
      event.target = this;
      const array = listenerArray.slice(0);
      for (let i = 0, l = array.length; i < l; i++) {
        array[i].call(this, event);
      }
      event.target = null;
    }
  }
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const _ray = /* @__PURE__ */ new Ray();
const _plane = /* @__PURE__ */ new Plane();
const TILT_LIMIT = Math.cos(70 * (Math.PI / 180));
const moduloWrapAround = (offset, capacity) => (offset % capacity + capacity) % capacity;
let OrbitControls$1 = class OrbitControls extends EventDispatcher {
  constructor(object, domElement) {
    super();
    __publicField(this, "object");
    __publicField(this, "domElement");
    __publicField(this, "enabled", true);
    __publicField(this, "target", new Vector3());
    __publicField(this, "minDistance", 0);
    __publicField(this, "maxDistance", Infinity);
    __publicField(this, "minZoom", 0);
    __publicField(this, "maxZoom", Infinity);
    __publicField(this, "minPolarAngle", 0);
    __publicField(this, "maxPolarAngle", Math.PI);
    __publicField(this, "minAzimuthAngle", -Infinity);
    __publicField(this, "maxAzimuthAngle", Infinity);
    __publicField(this, "enableDamping", false);
    __publicField(this, "dampingFactor", 0.05);
    __publicField(this, "enableZoom", true);
    __publicField(this, "zoomSpeed", 1);
    __publicField(this, "enableRotate", true);
    __publicField(this, "rotateSpeed", 1);
    __publicField(this, "enablePan", true);
    __publicField(this, "panSpeed", 1);
    __publicField(this, "screenSpacePanning", true);
    __publicField(this, "keyPanSpeed", 7);
    __publicField(this, "zoomToCursor", false);
    __publicField(this, "autoRotate", false);
    __publicField(this, "autoRotateSpeed", 2);
    __publicField(this, "reverseOrbit", false);
    __publicField(this, "reverseHorizontalOrbit", false);
    __publicField(this, "reverseVerticalOrbit", false);
    __publicField(this, "keys", { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" });
    __publicField(this, "mouseButtons", {
      LEFT: MOUSE.ROTATE,
      MIDDLE: MOUSE.DOLLY,
      RIGHT: MOUSE.PAN
    });
    __publicField(this, "touches", { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN });
    __publicField(this, "target0");
    __publicField(this, "position0");
    __publicField(this, "zoom0");
    __publicField(this, "_domElementKeyEvents", null);
    __publicField(this, "getPolarAngle");
    __publicField(this, "getAzimuthalAngle");
    __publicField(this, "setPolarAngle");
    __publicField(this, "setAzimuthalAngle");
    __publicField(this, "getDistance");
    __publicField(this, "getZoomScale");
    __publicField(this, "listenToKeyEvents");
    __publicField(this, "stopListenToKeyEvents");
    __publicField(this, "saveState");
    __publicField(this, "reset");
    __publicField(this, "update");
    __publicField(this, "connect");
    __publicField(this, "dispose");
    __publicField(this, "dollyIn");
    __publicField(this, "dollyOut");
    __publicField(this, "getScale");
    __publicField(this, "setScale");
    this.object = object;
    this.domElement = domElement;
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom;
    this.getPolarAngle = () => spherical.phi;
    this.getAzimuthalAngle = () => spherical.theta;
    this.setPolarAngle = (value) => {
      let phi = moduloWrapAround(value, 2 * Math.PI);
      let currentPhi = spherical.phi;
      if (currentPhi < 0)
        currentPhi += 2 * Math.PI;
      if (phi < 0)
        phi += 2 * Math.PI;
      let phiDist = Math.abs(phi - currentPhi);
      if (2 * Math.PI - phiDist < phiDist) {
        if (phi < currentPhi) {
          phi += 2 * Math.PI;
        } else {
          currentPhi += 2 * Math.PI;
        }
      }
      sphericalDelta.phi = phi - currentPhi;
      scope.update();
    };
    this.setAzimuthalAngle = (value) => {
      let theta = moduloWrapAround(value, 2 * Math.PI);
      let currentTheta = spherical.theta;
      if (currentTheta < 0)
        currentTheta += 2 * Math.PI;
      if (theta < 0)
        theta += 2 * Math.PI;
      let thetaDist = Math.abs(theta - currentTheta);
      if (2 * Math.PI - thetaDist < thetaDist) {
        if (theta < currentTheta) {
          theta += 2 * Math.PI;
        } else {
          currentTheta += 2 * Math.PI;
        }
      }
      sphericalDelta.theta = theta - currentTheta;
      scope.update();
    };
    this.getDistance = () => scope.object.position.distanceTo(scope.target);
    this.listenToKeyEvents = (domElement2) => {
      domElement2.addEventListener("keydown", onKeyDown);
      this._domElementKeyEvents = domElement2;
    };
    this.stopListenToKeyEvents = () => {
      this._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
      this._domElementKeyEvents = null;
    };
    this.saveState = () => {
      scope.target0.copy(scope.target);
      scope.position0.copy(scope.object.position);
      scope.zoom0 = scope.object.zoom;
    };
    this.reset = () => {
      scope.target.copy(scope.target0);
      scope.object.position.copy(scope.position0);
      scope.object.zoom = scope.zoom0;
      scope.object.updateProjectionMatrix();
      scope.dispatchEvent(changeEvent);
      scope.update();
      state = STATE.NONE;
    };
    this.update = (() => {
      const offset = new Vector3();
      const up = new Vector3(0, 1, 0);
      const quat = new Quaternion().setFromUnitVectors(object.up, up);
      const quatInverse = quat.clone().invert();
      const lastPosition = new Vector3();
      const lastQuaternion = new Quaternion();
      const twoPI = 2 * Math.PI;
      return function update() {
        const position = scope.object.position;
        quat.setFromUnitVectors(object.up, up);
        quatInverse.copy(quat).invert();
        offset.copy(position).sub(scope.target);
        offset.applyQuaternion(quat);
        spherical.setFromVector3(offset);
        if (scope.autoRotate && state === STATE.NONE) {
          rotateLeft(getAutoRotationAngle());
        }
        if (scope.enableDamping) {
          spherical.theta += sphericalDelta.theta * scope.dampingFactor;
          spherical.phi += sphericalDelta.phi * scope.dampingFactor;
        } else {
          spherical.theta += sphericalDelta.theta;
          spherical.phi += sphericalDelta.phi;
        }
        let min = scope.minAzimuthAngle;
        let max = scope.maxAzimuthAngle;
        if (isFinite(min) && isFinite(max)) {
          if (min < -Math.PI)
            min += twoPI;
          else if (min > Math.PI)
            min -= twoPI;
          if (max < -Math.PI)
            max += twoPI;
          else if (max > Math.PI)
            max -= twoPI;
          if (min <= max) {
            spherical.theta = Math.max(min, Math.min(max, spherical.theta));
          } else {
            spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
          }
        }
        spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
        spherical.makeSafe();
        if (scope.enableDamping === true) {
          scope.target.addScaledVector(panOffset, scope.dampingFactor);
        } else {
          scope.target.add(panOffset);
        }
        if (scope.zoomToCursor && performCursorZoom || scope.object.isOrthographicCamera) {
          spherical.radius = clampDistance(spherical.radius);
        } else {
          spherical.radius = clampDistance(spherical.radius * scale);
        }
        offset.setFromSpherical(spherical);
        offset.applyQuaternion(quatInverse);
        position.copy(scope.target).add(offset);
        if (!scope.object.matrixAutoUpdate)
          scope.object.updateMatrix();
        scope.object.lookAt(scope.target);
        if (scope.enableDamping === true) {
          sphericalDelta.theta *= 1 - scope.dampingFactor;
          sphericalDelta.phi *= 1 - scope.dampingFactor;
          panOffset.multiplyScalar(1 - scope.dampingFactor);
        } else {
          sphericalDelta.set(0, 0, 0);
          panOffset.set(0, 0, 0);
        }
        let zoomChanged = false;
        if (scope.zoomToCursor && performCursorZoom) {
          let newRadius = null;
          if (scope.object instanceof PerspectiveCamera && scope.object.isPerspectiveCamera) {
            const prevRadius = offset.length();
            newRadius = clampDistance(prevRadius * scale);
            const radiusDelta = prevRadius - newRadius;
            scope.object.position.addScaledVector(dollyDirection, radiusDelta);
            scope.object.updateMatrixWorld();
          } else if (scope.object.isOrthographicCamera) {
            const mouseBefore = new Vector3(mouse.x, mouse.y, 0);
            mouseBefore.unproject(scope.object);
            scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
            scope.object.updateProjectionMatrix();
            zoomChanged = true;
            const mouseAfter = new Vector3(mouse.x, mouse.y, 0);
            mouseAfter.unproject(scope.object);
            scope.object.position.sub(mouseAfter).add(mouseBefore);
            scope.object.updateMatrixWorld();
            newRadius = offset.length();
          } else {
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.");
            scope.zoomToCursor = false;
          }
          if (newRadius !== null) {
            if (scope.screenSpacePanning) {
              scope.target.set(0, 0, -1).transformDirection(scope.object.matrix).multiplyScalar(newRadius).add(scope.object.position);
            } else {
              _ray.origin.copy(scope.object.position);
              _ray.direction.set(0, 0, -1).transformDirection(scope.object.matrix);
              if (Math.abs(scope.object.up.dot(_ray.direction)) < TILT_LIMIT) {
                object.lookAt(scope.target);
              } else {
                _plane.setFromNormalAndCoplanarPoint(scope.object.up, scope.target);
                _ray.intersectPlane(_plane, scope.target);
              }
            }
          }
        } else if (scope.object instanceof OrthographicCamera && scope.object.isOrthographicCamera) {
          zoomChanged = scale !== 1;
          if (zoomChanged) {
            scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
            scope.object.updateProjectionMatrix();
          }
        }
        scale = 1;
        performCursorZoom = false;
        if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
          scope.dispatchEvent(changeEvent);
          lastPosition.copy(scope.object.position);
          lastQuaternion.copy(scope.object.quaternion);
          zoomChanged = false;
          return true;
        }
        return false;
      };
    })();
    this.connect = (domElement2) => {
      scope.domElement = domElement2;
      scope.domElement.style.touchAction = "none";
      scope.domElement.addEventListener("contextmenu", onContextMenu);
      scope.domElement.addEventListener("pointerdown", onPointerDown);
      scope.domElement.addEventListener("pointercancel", onPointerUp);
      scope.domElement.addEventListener("wheel", onMouseWheel);
    };
    this.dispose = () => {
      var _a, _b, _c, _d, _e, _f;
      if (scope.domElement) {
        scope.domElement.style.touchAction = "auto";
      }
      (_a = scope.domElement) == null ? void 0 : _a.removeEventListener("contextmenu", onContextMenu);
      (_b = scope.domElement) == null ? void 0 : _b.removeEventListener("pointerdown", onPointerDown);
      (_c = scope.domElement) == null ? void 0 : _c.removeEventListener("pointercancel", onPointerUp);
      (_d = scope.domElement) == null ? void 0 : _d.removeEventListener("wheel", onMouseWheel);
      (_e = scope.domElement) == null ? void 0 : _e.ownerDocument.removeEventListener("pointermove", onPointerMove);
      (_f = scope.domElement) == null ? void 0 : _f.ownerDocument.removeEventListener("pointerup", onPointerUp);
      if (scope._domElementKeyEvents !== null) {
        scope._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
      }
    };
    const scope = this;
    const changeEvent = { type: "change" };
    const startEvent = { type: "start" };
    const endEvent = { type: "end" };
    const STATE = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let state = STATE.NONE;
    const EPS = 1e-6;
    const spherical = new Spherical();
    const sphericalDelta = new Spherical();
    let scale = 1;
    const panOffset = new Vector3();
    const rotateStart = new Vector2();
    const rotateEnd = new Vector2();
    const rotateDelta = new Vector2();
    const panStart = new Vector2();
    const panEnd = new Vector2();
    const panDelta = new Vector2();
    const dollyStart = new Vector2();
    const dollyEnd = new Vector2();
    const dollyDelta = new Vector2();
    const dollyDirection = new Vector3();
    const mouse = new Vector2();
    let performCursorZoom = false;
    const pointers = [];
    const pointerPositions = {};
    function getAutoRotationAngle() {
      return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
    }
    function getZoomScale() {
      return Math.pow(0.95, scope.zoomSpeed);
    }
    function rotateLeft(angle) {
      if (scope.reverseOrbit || scope.reverseHorizontalOrbit) {
        sphericalDelta.theta += angle;
      } else {
        sphericalDelta.theta -= angle;
      }
    }
    function rotateUp(angle) {
      if (scope.reverseOrbit || scope.reverseVerticalOrbit) {
        sphericalDelta.phi += angle;
      } else {
        sphericalDelta.phi -= angle;
      }
    }
    const panLeft = (() => {
      const v = new Vector3();
      return function panLeft2(distance, objectMatrix) {
        v.setFromMatrixColumn(objectMatrix, 0);
        v.multiplyScalar(-distance);
        panOffset.add(v);
      };
    })();
    const panUp = (() => {
      const v = new Vector3();
      return function panUp2(distance, objectMatrix) {
        if (scope.screenSpacePanning === true) {
          v.setFromMatrixColumn(objectMatrix, 1);
        } else {
          v.setFromMatrixColumn(objectMatrix, 0);
          v.crossVectors(scope.object.up, v);
        }
        v.multiplyScalar(distance);
        panOffset.add(v);
      };
    })();
    const pan = (() => {
      const offset = new Vector3();
      return function pan2(deltaX, deltaY) {
        const element = scope.domElement;
        if (element && scope.object instanceof PerspectiveCamera && scope.object.isPerspectiveCamera) {
          const position = scope.object.position;
          offset.copy(position).sub(scope.target);
          let targetDistance = offset.length();
          targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180);
          panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
          panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
        } else if (element && scope.object instanceof OrthographicCamera && scope.object.isOrthographicCamera) {
          panLeft(
            deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth,
            scope.object.matrix
          );
          panUp(
            deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight,
            scope.object.matrix
          );
        } else {
          console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
          scope.enablePan = false;
        }
      };
    })();
    function setScale(newScale) {
      if (scope.object instanceof PerspectiveCamera && scope.object.isPerspectiveCamera || scope.object instanceof OrthographicCamera && scope.object.isOrthographicCamera) {
        scale = newScale;
      } else {
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
        scope.enableZoom = false;
      }
    }
    function dollyOut(dollyScale) {
      setScale(scale / dollyScale);
    }
    function dollyIn(dollyScale) {
      setScale(scale * dollyScale);
    }
    function updateMouseParameters(event) {
      if (!scope.zoomToCursor || !scope.domElement) {
        return;
      }
      performCursorZoom = true;
      const rect = scope.domElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const w = rect.width;
      const h = rect.height;
      mouse.x = x / w * 2 - 1;
      mouse.y = -(y / h) * 2 + 1;
      dollyDirection.set(mouse.x, mouse.y, 1).unproject(scope.object).sub(scope.object.position).normalize();
    }
    function clampDistance(dist) {
      return Math.max(scope.minDistance, Math.min(scope.maxDistance, dist));
    }
    function handleMouseDownRotate(event) {
      rotateStart.set(event.clientX, event.clientY);
    }
    function handleMouseDownDolly(event) {
      updateMouseParameters(event);
      dollyStart.set(event.clientX, event.clientY);
    }
    function handleMouseDownPan(event) {
      panStart.set(event.clientX, event.clientY);
    }
    function handleMouseMoveRotate(event) {
      rotateEnd.set(event.clientX, event.clientY);
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      const element = scope.domElement;
      if (element) {
        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
      }
      rotateStart.copy(rotateEnd);
      scope.update();
    }
    function handleMouseMoveDolly(event) {
      dollyEnd.set(event.clientX, event.clientY);
      dollyDelta.subVectors(dollyEnd, dollyStart);
      if (dollyDelta.y > 0) {
        dollyOut(getZoomScale());
      } else if (dollyDelta.y < 0) {
        dollyIn(getZoomScale());
      }
      dollyStart.copy(dollyEnd);
      scope.update();
    }
    function handleMouseMovePan(event) {
      panEnd.set(event.clientX, event.clientY);
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
      scope.update();
    }
    function handleMouseWheel(event) {
      updateMouseParameters(event);
      if (event.deltaY < 0) {
        dollyIn(getZoomScale());
      } else if (event.deltaY > 0) {
        dollyOut(getZoomScale());
      }
      scope.update();
    }
    function handleKeyDown(event) {
      let needsUpdate = false;
      switch (event.code) {
        case scope.keys.UP:
          pan(0, scope.keyPanSpeed);
          needsUpdate = true;
          break;
        case scope.keys.BOTTOM:
          pan(0, -scope.keyPanSpeed);
          needsUpdate = true;
          break;
        case scope.keys.LEFT:
          pan(scope.keyPanSpeed, 0);
          needsUpdate = true;
          break;
        case scope.keys.RIGHT:
          pan(-scope.keyPanSpeed, 0);
          needsUpdate = true;
          break;
      }
      if (needsUpdate) {
        event.preventDefault();
        scope.update();
      }
    }
    function handleTouchStartRotate() {
      if (pointers.length == 1) {
        rotateStart.set(pointers[0].pageX, pointers[0].pageY);
      } else {
        const x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
        const y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
        rotateStart.set(x, y);
      }
    }
    function handleTouchStartPan() {
      if (pointers.length == 1) {
        panStart.set(pointers[0].pageX, pointers[0].pageY);
      } else {
        const x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
        const y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
        panStart.set(x, y);
      }
    }
    function handleTouchStartDolly() {
      const dx = pointers[0].pageX - pointers[1].pageX;
      const dy = pointers[0].pageY - pointers[1].pageY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      dollyStart.set(0, distance);
    }
    function handleTouchStartDollyPan() {
      if (scope.enableZoom)
        handleTouchStartDolly();
      if (scope.enablePan)
        handleTouchStartPan();
    }
    function handleTouchStartDollyRotate() {
      if (scope.enableZoom)
        handleTouchStartDolly();
      if (scope.enableRotate)
        handleTouchStartRotate();
    }
    function handleTouchMoveRotate(event) {
      if (pointers.length == 1) {
        rotateEnd.set(event.pageX, event.pageY);
      } else {
        const position = getSecondPointerPosition(event);
        const x = 0.5 * (event.pageX + position.x);
        const y = 0.5 * (event.pageY + position.y);
        rotateEnd.set(x, y);
      }
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      const element = scope.domElement;
      if (element) {
        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
      }
      rotateStart.copy(rotateEnd);
    }
    function handleTouchMovePan(event) {
      if (pointers.length == 1) {
        panEnd.set(event.pageX, event.pageY);
      } else {
        const position = getSecondPointerPosition(event);
        const x = 0.5 * (event.pageX + position.x);
        const y = 0.5 * (event.pageY + position.y);
        panEnd.set(x, y);
      }
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
    }
    function handleTouchMoveDolly(event) {
      const position = getSecondPointerPosition(event);
      const dx = event.pageX - position.x;
      const dy = event.pageY - position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      dollyEnd.set(0, distance);
      dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
      dollyOut(dollyDelta.y);
      dollyStart.copy(dollyEnd);
    }
    function handleTouchMoveDollyPan(event) {
      if (scope.enableZoom)
        handleTouchMoveDolly(event);
      if (scope.enablePan)
        handleTouchMovePan(event);
    }
    function handleTouchMoveDollyRotate(event) {
      if (scope.enableZoom)
        handleTouchMoveDolly(event);
      if (scope.enableRotate)
        handleTouchMoveRotate(event);
    }
    function onPointerDown(event) {
      var _a, _b;
      if (scope.enabled === false)
        return;
      if (pointers.length === 0) {
        (_a = scope.domElement) == null ? void 0 : _a.ownerDocument.addEventListener("pointermove", onPointerMove);
        (_b = scope.domElement) == null ? void 0 : _b.ownerDocument.addEventListener("pointerup", onPointerUp);
      }
      addPointer(event);
      if (event.pointerType === "touch") {
        onTouchStart(event);
      } else {
        onMouseDown(event);
      }
    }
    function onPointerMove(event) {
      if (scope.enabled === false)
        return;
      if (event.pointerType === "touch") {
        onTouchMove(event);
      } else {
        onMouseMove(event);
      }
    }
    function onPointerUp(event) {
      var _a, _b, _c;
      removePointer(event);
      if (pointers.length === 0) {
        (_a = scope.domElement) == null ? void 0 : _a.releasePointerCapture(event.pointerId);
        (_b = scope.domElement) == null ? void 0 : _b.ownerDocument.removeEventListener("pointermove", onPointerMove);
        (_c = scope.domElement) == null ? void 0 : _c.ownerDocument.removeEventListener("pointerup", onPointerUp);
      }
      scope.dispatchEvent(endEvent);
      state = STATE.NONE;
    }
    function onMouseDown(event) {
      let mouseAction;
      switch (event.button) {
        case 0:
          mouseAction = scope.mouseButtons.LEFT;
          break;
        case 1:
          mouseAction = scope.mouseButtons.MIDDLE;
          break;
        case 2:
          mouseAction = scope.mouseButtons.RIGHT;
          break;
        default:
          mouseAction = -1;
      }
      switch (mouseAction) {
        case MOUSE.DOLLY:
          if (scope.enableZoom === false)
            return;
          handleMouseDownDolly(event);
          state = STATE.DOLLY;
          break;
        case MOUSE.ROTATE:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enablePan === false)
              return;
            handleMouseDownPan(event);
            state = STATE.PAN;
          } else {
            if (scope.enableRotate === false)
              return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
          }
          break;
        case MOUSE.PAN:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enableRotate === false)
              return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
          } else {
            if (scope.enablePan === false)
              return;
            handleMouseDownPan(event);
            state = STATE.PAN;
          }
          break;
        default:
          state = STATE.NONE;
      }
      if (state !== STATE.NONE) {
        scope.dispatchEvent(startEvent);
      }
    }
    function onMouseMove(event) {
      if (scope.enabled === false)
        return;
      switch (state) {
        case STATE.ROTATE:
          if (scope.enableRotate === false)
            return;
          handleMouseMoveRotate(event);
          break;
        case STATE.DOLLY:
          if (scope.enableZoom === false)
            return;
          handleMouseMoveDolly(event);
          break;
        case STATE.PAN:
          if (scope.enablePan === false)
            return;
          handleMouseMovePan(event);
          break;
      }
    }
    function onMouseWheel(event) {
      if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) {
        return;
      }
      event.preventDefault();
      scope.dispatchEvent(startEvent);
      handleMouseWheel(event);
      scope.dispatchEvent(endEvent);
    }
    function onKeyDown(event) {
      if (scope.enabled === false || scope.enablePan === false)
        return;
      handleKeyDown(event);
    }
    function onTouchStart(event) {
      trackPointer(event);
      switch (pointers.length) {
        case 1:
          switch (scope.touches.ONE) {
            case TOUCH.ROTATE:
              if (scope.enableRotate === false)
                return;
              handleTouchStartRotate();
              state = STATE.TOUCH_ROTATE;
              break;
            case TOUCH.PAN:
              if (scope.enablePan === false)
                return;
              handleTouchStartPan();
              state = STATE.TOUCH_PAN;
              break;
            default:
              state = STATE.NONE;
          }
          break;
        case 2:
          switch (scope.touches.TWO) {
            case TOUCH.DOLLY_PAN:
              if (scope.enableZoom === false && scope.enablePan === false)
                return;
              handleTouchStartDollyPan();
              state = STATE.TOUCH_DOLLY_PAN;
              break;
            case TOUCH.DOLLY_ROTATE:
              if (scope.enableZoom === false && scope.enableRotate === false)
                return;
              handleTouchStartDollyRotate();
              state = STATE.TOUCH_DOLLY_ROTATE;
              break;
            default:
              state = STATE.NONE;
          }
          break;
        default:
          state = STATE.NONE;
      }
      if (state !== STATE.NONE) {
        scope.dispatchEvent(startEvent);
      }
    }
    function onTouchMove(event) {
      trackPointer(event);
      switch (state) {
        case STATE.TOUCH_ROTATE:
          if (scope.enableRotate === false)
            return;
          handleTouchMoveRotate(event);
          scope.update();
          break;
        case STATE.TOUCH_PAN:
          if (scope.enablePan === false)
            return;
          handleTouchMovePan(event);
          scope.update();
          break;
        case STATE.TOUCH_DOLLY_PAN:
          if (scope.enableZoom === false && scope.enablePan === false)
            return;
          handleTouchMoveDollyPan(event);
          scope.update();
          break;
        case STATE.TOUCH_DOLLY_ROTATE:
          if (scope.enableZoom === false && scope.enableRotate === false)
            return;
          handleTouchMoveDollyRotate(event);
          scope.update();
          break;
        default:
          state = STATE.NONE;
      }
    }
    function onContextMenu(event) {
      if (scope.enabled === false)
        return;
      event.preventDefault();
    }
    function addPointer(event) {
      pointers.push(event);
    }
    function removePointer(event) {
      delete pointerPositions[event.pointerId];
      for (let i = 0; i < pointers.length; i++) {
        if (pointers[i].pointerId == event.pointerId) {
          pointers.splice(i, 1);
          return;
        }
      }
    }
    function trackPointer(event) {
      let position = pointerPositions[event.pointerId];
      if (position === void 0) {
        position = new Vector2();
        pointerPositions[event.pointerId] = position;
      }
      position.set(event.pageX, event.pageY);
    }
    function getSecondPointerPosition(event) {
      const pointer = event.pointerId === pointers[0].pointerId ? pointers[1] : pointers[0];
      return pointerPositions[pointer.pointerId];
    }
    this.dollyIn = (dollyScale = getZoomScale()) => {
      dollyIn(dollyScale);
      scope.update();
    };
    this.dollyOut = (dollyScale = getZoomScale()) => {
      dollyOut(dollyScale);
      scope.update();
    };
    this.getScale = () => {
      return scale;
    };
    this.setScale = (newScale) => {
      setScale(newScale);
      scope.update();
    };
    this.getZoomScale = () => {
      return getZoomScale();
    };
    if (domElement !== void 0)
      this.connect(domElement);
    this.update();
  }
};
const getVersion = () => parseInt(REVISION.replace(/\D+/g, ""));
const version = /* @__PURE__ */ getVersion();
const OrbitControls2 = /* @__PURE__ */ reactExports.forwardRef(({
  makeDefault,
  camera,
  regress,
  domElement,
  enableDamping = true,
  keyEvents = false,
  onChange,
  onStart,
  onEnd,
  ...restProps
}, ref) => {
  const invalidate = useThree((state) => state.invalidate);
  const defaultCamera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  const events = useThree((state) => state.events);
  const setEvents = useThree((state) => state.setEvents);
  const set = useThree((state) => state.set);
  const get = useThree((state) => state.get);
  const performance = useThree((state) => state.performance);
  const explCamera = camera || defaultCamera;
  const explDomElement = domElement || events.connected || gl.domElement;
  const controls = reactExports.useMemo(() => new OrbitControls$1(explCamera), [explCamera]);
  useFrame(() => {
    if (controls.enabled) controls.update();
  }, -1);
  reactExports.useEffect(() => {
    if (keyEvents) {
      controls.connect(keyEvents === true ? explDomElement : keyEvents);
    }
    controls.connect(explDomElement);
    return () => void controls.dispose();
  }, [keyEvents, explDomElement, regress, controls, invalidate]);
  reactExports.useEffect(() => {
    const callback = (e) => {
      invalidate();
      if (regress) performance.regress();
      if (onChange) onChange(e);
    };
    const onStartCb = (e) => {
      if (onStart) onStart(e);
    };
    const onEndCb = (e) => {
      if (onEnd) onEnd(e);
    };
    controls.addEventListener("change", callback);
    controls.addEventListener("start", onStartCb);
    controls.addEventListener("end", onEndCb);
    return () => {
      controls.removeEventListener("start", onStartCb);
      controls.removeEventListener("end", onEndCb);
      controls.removeEventListener("change", callback);
    };
  }, [onChange, onStart, onEnd, controls, invalidate, setEvents]);
  reactExports.useEffect(() => {
    if (makeDefault) {
      const old = get().controls;
      set({
        controls
      });
      return () => set({
        controls: old
      });
    }
  }, [makeDefault, controls]);
  return /* @__PURE__ */ reactExports.createElement("primitive", _extends({
    ref,
    object: controls,
    enableDamping
  }, restProps));
});
function create(type, effect) {
  const El = type + "Geometry";
  return /* @__PURE__ */ reactExports.forwardRef(({
    args,
    children,
    ...props
  }, fref) => {
    const ref = reactExports.useRef(null);
    reactExports.useImperativeHandle(fref, () => ref.current);
    reactExports.useLayoutEffect(() => void (effect == null ? void 0 : effect(ref.current)));
    return /* @__PURE__ */ reactExports.createElement("mesh", _extends({
      ref
    }, props), /* @__PURE__ */ reactExports.createElement(El, {
      attach: "geometry",
      args
    }), children);
  });
}
const Sphere = /* @__PURE__ */ create("sphere");
class StarfieldMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: {
          value: 0
        },
        fade: {
          value: 1
        }
      },
      vertexShader: (
        /* glsl */
        `
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`
      ),
      fragmentShader: (
        /* glsl */
        `
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${version >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
      }`
      )
    });
  }
}
const genStar = (r) => {
  return new Vector3().setFromSpherical(new Spherical(r, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI));
};
const Stars = /* @__PURE__ */ reactExports.forwardRef(({
  radius = 100,
  depth = 50,
  count = 5e3,
  saturation = 0,
  factor = 4,
  fade = false,
  speed = 1
}, ref) => {
  const material = reactExports.useRef(null);
  const [position, color, size] = reactExports.useMemo(() => {
    const positions = [];
    const colors = [];
    const sizes = Array.from({
      length: count
    }, () => (0.5 + 0.5 * Math.random()) * factor);
    const color2 = new Color();
    let r = radius + depth;
    const increment = depth / count;
    for (let i = 0; i < count; i++) {
      r -= increment * Math.random();
      positions.push(...genStar(r).toArray());
      color2.setHSL(i / count, saturation, 0.9);
      colors.push(color2.r, color2.g, color2.b);
    }
    return [new Float32Array(positions), new Float32Array(colors), new Float32Array(sizes)];
  }, [count, depth, factor, radius, saturation]);
  useFrame((state) => material.current && (material.current.uniforms.time.value = state.clock.elapsedTime * speed));
  const [starfieldMaterial] = reactExports.useState(() => new StarfieldMaterial());
  return /* @__PURE__ */ reactExports.createElement("points", {
    ref
  }, /* @__PURE__ */ reactExports.createElement("bufferGeometry", null, /* @__PURE__ */ reactExports.createElement("bufferAttribute", {
    attach: "attributes-position",
    args: [position, 3]
  }), /* @__PURE__ */ reactExports.createElement("bufferAttribute", {
    attach: "attributes-color",
    args: [color, 3]
  }), /* @__PURE__ */ reactExports.createElement("bufferAttribute", {
    attach: "attributes-size",
    args: [size, 1]
  })), /* @__PURE__ */ reactExports.createElement("primitive", {
    ref: material,
    object: starfieldMaterial,
    attach: "material",
    blending: AdditiveBlending,
    "uniforms-fade-value": fade,
    depthWrite: false,
    transparent: true,
    vertexColors: true
  }));
});
const HERO_SLIDES = [
  {
    id: 1,
    image: "/assets/generated/rathinam-campus-hero.dim_1400x600.jpg",
    badge: "🏆 Ranked #1 in Tamil Nadu for Placements 2024",
    title: "Rathinam Group",
    subtitle: "of Institutions",
    tagline: "Excellence in Education | Innovation | Industry Partnerships",
    desc: "Eachanari, Coimbatore — Igniting Careers. Shaping Leaders. Since 1994.\nApproved by AICTE · Affiliated to Anna University"
  },
  {
    id: 2,
    image: "/assets/generated/students-computer-lab.dim_800x500.jpg",
    badge: "🔬 State-of-the-Art Research Labs",
    title: "Learn by Doing",
    subtitle: "Industry-Ready Education",
    tagline: "50+ Advanced Labs | AI & Robotics | Live Industry Projects",
    desc: "Real equipment, real projects, real mentors.\nStep into your future career from day one."
  },
  {
    id: 3,
    image: "/assets/generated/international-collaboration-event.dim_1400x600.jpg",
    badge: "🌍 50+ International University Partners",
    title: "Global Exposure",
    subtitle: "International Collaborations",
    tagline: "UK · Singapore · Australia · Germany | Exchange Programs",
    desc: "Study, research, and intern at partner universities worldwide.\nBuild a global network that opens doors everywhere."
  }
];
const COURSES = [
  {
    id: "engineering",
    title: "Engineering & Tech",
    desc: "B.E./B.Tech in CSE, ECE, Mechanical, Civil with cutting-edge labs.",
    image: "/assets/generated/students-computer-lab.dim_800x500.jpg",
    badge: "Most Popular",
    badgeVariant: "secondary",
    seats: "240 seats"
  },
  {
    id: "management",
    title: "Management & Commerce",
    desc: "MBA, BBA, B.Com with live industry interactions and mentorship.",
    image: "/assets/generated/students-management.dim_800x500.jpg",
    badge: "High ROI",
    badgeVariant: "green",
    seats: "180 seats"
  },
  {
    id: "arts-science",
    title: "Arts & Science",
    desc: "BCA, BSc, BA in data science, liberal arts, and modern sciences.",
    image: "/assets/generated/students-library.dim_800x500.jpg",
    badge: "Creative",
    badgeVariant: "primary",
    seats: "120 seats"
  },
  {
    id: "health-sciences",
    title: "Health Sciences",
    desc: "Pharmacy and allied health programs for healthcare careers.",
    image: "/assets/generated/students-science-lab.dim_800x500.jpg",
    badge: "Growing Field",
    badgeVariant: "accent",
    seats: "60 seats"
  },
  {
    id: "research",
    title: "Research & PhD",
    desc: "Doctoral programs in engineering, management, and sciences.",
    image: "/assets/generated/students-science-lab.dim_800x500.jpg",
    badge: "Advanced",
    badgeVariant: "primary",
    seats: "30 seats"
  },
  {
    id: "diploma",
    title: "Diploma Programs",
    desc: "Skill-focused 3-year diploma courses with 100% job assistance.",
    image: "/assets/generated/students-classroom.dim_800x500.jpg",
    badge: "Job Ready",
    badgeVariant: "green",
    seats: "90 seats"
  }
];
const TOP_COMPANIES = [
  { name: "Google", package: "42 LPA", color: "text-secondary" },
  { name: "Amazon", package: "38 LPA", color: "text-secondary" },
  { name: "Microsoft", package: "34 LPA", color: "text-primary" },
  { name: "Infosys", package: "8 LPA", color: "text-accent" },
  { name: "TCS", package: "7 LPA", color: "text-accent" },
  { name: "Wipro", package: "7.5 LPA", color: "text-accent" },
  { name: "Zoho", package: "15 LPA", color: "text-primary" },
  { name: "Deloitte", package: "12 LPA", color: "text-primary" }
];
const INT_PARTNERS = [
  { name: "UWE Bristol", country: "🇬🇧 United Kingdom" },
  { name: "NTU Singapore", country: "🇸🇬 Singapore" },
  { name: "Curtin University", country: "🇦🇺 Australia" },
  { name: "IU Germany", country: "🇩🇪 Germany" }
];
const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "World-Class Faculty",
    desc: "500+ experienced professors, IIT/IIM alumni, and industry practitioners guiding every student.",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: Trophy,
    title: "100% Industry Placement",
    desc: "Dedicated placement cell with 350+ company tie-ups and mock interview programs year-round.",
    color: "text-secondary",
    bg: "bg-secondary/10"
  },
  {
    icon: Globe,
    title: "Global Collaborations",
    desc: "Student exchange, dual-degree, and research programs with 50+ universities across 20 countries.",
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    icon: Lightbulb,
    title: "Smart Classrooms",
    desc: "IoT-enabled classrooms, AI labs, maker spaces, and a central innovation & incubation centre.",
    color: "text-secondary",
    bg: "bg-secondary/10"
  }
];
const TESTIMONIALS = [
  {
    name: "Priya Krishnamurthy",
    role: "SDE at Amazon",
    company: "Amazon",
    package: "18 LPA",
    batch: "B.Tech CSE, 2023",
    quote: "Rathinam's placement cell guided me through every step. The mock interviews and industry sessions made all the difference in cracking Amazon.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Arjun Selvam",
    role: "Analyst at Deloitte",
    company: "Deloitte",
    package: "12 LPA",
    batch: "MBA, 2023",
    quote: "The international exposure through UWE Bristol was a game-changer. The faculty here genuinely care about your success beyond graduation.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Meera Sundaram",
    role: "Product Manager at Zoho",
    company: "Zoho",
    package: "15 LPA",
    batch: "B.Tech IT, 2022",
    quote: "From day one, the faculty pushed us to think beyond textbooks. Real projects, real learning, real results. I owe my career to Rathinam Group of Institutions.",
    avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=80&h=80&fit=crop&crop=face"
  }
];
const NEWS = [
  {
    date: "Apr 15, 2025",
    category: "Placements",
    title: "Record 42 LPA Placement: Rathinam Student Lands Google Offer",
    excerpt: "Kavin Kumar from B.Tech CSE batch 2025 receives the highest-ever offer of ₹42 LPA from Google Bangalore, setting a new record at Rathinam Group of Institutions.",
    image: "/assets/generated/placement-ceremony.dim_800x500.jpg",
    catColor: "text-secondary",
    catBg: "bg-secondary/15"
  },
  {
    date: "Mar 28, 2025",
    category: "International",
    title: "MoU Signed with NTU Singapore for Student Exchange 2025-26",
    excerpt: "Rathinam Group of Institutions expands its global footprint with a new academic partnership enabling 50 students to study at NTU Singapore annually.",
    image: "/assets/generated/international-collaboration-event.dim_1400x600.jpg",
    catColor: "text-accent",
    catBg: "bg-accent/15"
  },
  {
    date: "Mar 10, 2025",
    category: "Academics",
    title: "New AI & Data Science Lab Inaugurated — ₹2 Crore Investment",
    excerpt: "State-of-the-art AI lab with NVIDIA GPU clusters, IoT integration, and dedicated industry mentors from top tech companies opens for students.",
    image: "/assets/generated/students-computer-lab.dim_800x500.jpg",
    catColor: "text-primary",
    catBg: "bg-primary/15"
  }
];
const STAT_STRIP = [
  { value: "Est. 1994", label: "Founded" },
  { value: "15,000+", label: "Students" },
  { value: "500+", label: "Faculty" },
  { value: "93.12%", label: "Placements" },
  { value: "50+", label: "Intl. Partners" }
];
function FloatingShape({
  position,
  color,
  speed,
  shape,
  scale = 1
}) {
  const meshRef = reactExports.useRef(null);
  const initialY = position[1];
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * speed * 0.4;
    meshRef.current.rotation.y = t * speed * 0.6;
    meshRef.current.position.y = initialY + Math.sin(t * speed * 0.5) * 0.3;
  });
  const mat = /* @__PURE__ */ jsxRuntimeExports.jsx(
    "meshStandardMaterial",
    {
      color,
      roughness: 0.3,
      metalness: 0.6,
      transparent: true,
      opacity: 0.85
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref: meshRef, position, scale, children: [
    shape === "torusKnot" && /* @__PURE__ */ jsxRuntimeExports.jsx("torusKnotGeometry", { args: [0.5, 0.18, 100, 16] }),
    shape === "sphere" && /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.55, 32, 32] }),
    shape === "box" && /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.9, 0.9, 0.9] }),
    shape === "octahedron" && /* @__PURE__ */ jsxRuntimeExports.jsx("octahedronGeometry", { args: [0.65] }),
    mat
  ] });
}
function HeroScene({ isMobile }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.5 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [10, 10, 10], intensity: 1.4, color: "#4f6ef7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-8, -5, 5], intensity: 1, color: "#ff8c40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [0, 8, -5], intensity: 0.8, color: "#3ddc84" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Stars,
      {
        radius: 80,
        depth: 50,
        count: isMobile ? 1500 : 3e3,
        factor: 4,
        saturation: 0.5,
        fade: true,
        speed: 0.4
      }
    ),
    !isMobile && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FloatingShape,
        {
          position: [-5.5, 1.5, -3],
          color: "#4f6ef7",
          speed: 0.5,
          shape: "torusKnot",
          scale: 1.1
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FloatingShape,
        {
          position: [5, -1, -2],
          color: "#ff8c40",
          speed: 0.35,
          shape: "octahedron",
          scale: 1.3
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FloatingShape,
        {
          position: [3.5, 2.5, -4],
          color: "#3ddc84",
          speed: 0.45,
          shape: "sphere",
          scale: 0.9
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FloatingShape,
        {
          position: [-4, -2, -3],
          color: "#a855f7",
          speed: 0.55,
          shape: "box",
          scale: 0.8
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FloatingShape,
        {
          position: [0.5, 3.2, -5],
          color: "#f7c948",
          speed: 0.3,
          shape: "octahedron",
          scale: 0.7
        }
      )
    ] }),
    isMobile && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FloatingShape,
        {
          position: [-3.5, 1, -3],
          color: "#4f6ef7",
          speed: 0.4,
          shape: "torusKnot",
          scale: 0.8
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FloatingShape,
        {
          position: [3.5, -0.5, -2],
          color: "#ff8c40",
          speed: 0.3,
          shape: "octahedron",
          scale: 1
        }
      )
    ] }),
    !isMobile && /* @__PURE__ */ jsxRuntimeExports.jsx(
      OrbitControls2,
      {
        enableZoom: false,
        enablePan: false,
        autoRotate: true,
        autoRotateSpeed: 0.4,
        maxPolarAngle: Math.PI * 0.65,
        minPolarAngle: Math.PI * 0.35
      }
    )
  ] });
}
function ParticleRing() {
  const points = reactExports.useRef(null);
  const count = 400;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const angle = i / count * Math.PI * 2;
    const r = 3 + Math.random() * 1.5;
    positions[i * 3] = Math.cos(angle) * r;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 0.6;
    positions[i * 3 + 2] = Math.sin(angle) * r;
  }
  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { ref: points, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointsMaterial", { size: 0.045, color: "#ff8c40", transparent: true, opacity: 0.7 })
  ] });
}
function StatStripScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.4 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [0, 3, 2], intensity: 1.2, color: "#ff8c40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ParticleRing, {})
  ] });
}
function GlobeScene() {
  const globeRef = reactExports.useRef(null);
  const wireRef = reactExports.useRef(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (globeRef.current) globeRef.current.rotation.y = t * 0.25;
    if (wireRef.current) wireRef.current.rotation.y = t * 0.18;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.5 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [5, 5, 5], intensity: 1.5, color: "#4f6ef7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-4, -3, 2], intensity: 0.8, color: "#3ddc84" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stars, { radius: 40, depth: 20, count: 800, factor: 3, fade: true, speed: 0.2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref: globeRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [1.3, 48, 48] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meshStandardMaterial",
        {
          color: "#1a2f6e",
          roughness: 0.4,
          metalness: 0.5,
          transparent: true,
          opacity: 0.92
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref: wireRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [1.35, 18, 18] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meshBasicMaterial",
        {
          color: "#4f6ef7",
          wireframe: true,
          transparent: true,
          opacity: 0.25
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { rotation: [Math.PI / 2, 0, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("torusGeometry", { args: [1.7, 0.03, 8, 64] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meshStandardMaterial",
        {
          color: "#ff8c40",
          emissive: "#ff8c40",
          emissiveIntensity: 0.8
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { rotation: [Math.PI / 2.5, 0.5, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("torusGeometry", { args: [1.55, 0.02, 8, 64] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meshStandardMaterial",
        {
          color: "#3ddc84",
          emissive: "#3ddc84",
          emissiveIntensity: 0.6
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OrbitDot, {})
  ] });
}
function OrbitDot() {
  const ref = reactExports.useRef(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.x = Math.cos(t * 0.8) * 1.7;
      ref.current.position.z = Math.sin(t * 0.8) * 1.7;
      ref.current.position.y = Math.sin(t * 0.4) * 0.3;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sphere, { ref, args: [0.08, 12, 12], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "meshStandardMaterial",
    {
      color: "#f7c948",
      emissive: "#f7c948",
      emissiveIntensity: 1.2
    }
  ) });
}
function HomePage() {
  var _a;
  const { data: stats } = useOverallStats();
  const { data: placements } = usePlacementStats();
  const topPlaced = (placements == null ? void 0 : placements.slice(0, 4)) ?? [];
  const [slide, setSlide] = reactExports.useState(0);
  const [dir, setDir] = reactExports.useState(1);
  const timerRef = reactExports.useRef(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const goToSlide = reactExports.useCallback((next, direction) => {
    setDir(direction);
    setSlide((next + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);
  const nextSlide = reactExports.useCallback(
    () => goToSlide(slide + 1, 1),
    [slide, goToSlide]
  );
  const prevSlide = reactExports.useCallback(
    () => goToSlide(slide - 1, -1),
    [slide, goToSlide]
  );
  reactExports.useEffect(() => {
    timerRef.current = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length);
      setDir(1);
    }, 5500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);
  const current = HERO_SLIDES[slide];
  const variants = {
    enter: (_d) => ({ opacity: 0 }),
    center: { opacity: 1, x: 0 },
    exit: (_d2) => ({ opacity: 0 })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[92vh] flex flex-col overflow-hidden",
        "data-ocid": "home.hero.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            reactExports.Suspense,
            {
              fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-gradient-hero-full" }),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Canvas,
                {
                  camera: { position: [0, 0, 7], fov: 60 },
                  gl: { antialias: true, alpha: false },
                  style: { background: "transparent" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroScene, { isMobile })
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, custom: dir, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              custom: dir,
              variants: {
                enter: () => ({ opacity: 0 }),
                center: { opacity: 1 },
                exit: () => ({ opacity: 0 })
              },
              initial: "enter",
              animate: "center",
              exit: "exit",
              transition: { duration: 0.9 },
              className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
              style: {
                backgroundImage: `url('${current.image}')`,
                mixBlendMode: "overlay",
                opacity: 0.22
              }
            },
            current.id
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/70 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-transparent pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-1 flex items-center z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", custom: dir, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              custom: dir,
              variants,
              initial: "enter",
              animate: "center",
              exit: "exit",
              transition: { duration: 0.55, ease: "easeOut" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    initial: { opacity: 0, y: -10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.15 },
                    className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/30 border border-secondary/50 text-primary-foreground text-sm font-semibold mb-5 backdrop-blur-sm",
                    children: current.badge
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-1 drop-shadow-lg", children: current.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-semibold text-secondary mb-2 tracking-wide drop-shadow-md", children: current.subtitle }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/60 text-xs font-medium mb-3 tracking-wider uppercase", children: "Rathinam Group of Institutions, Eachanari, Coimbatore" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/90 text-base md:text-lg font-medium mb-3 tracking-wide", children: current.tagline }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-sm md:text-base mb-8 whitespace-pre-line", children: current.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/courses",
                      "data-ocid": "home.hero.explore_programs.secondary_button",
                      className: "inline-flex items-center gap-2 px-7 py-3.5 bg-primary-foreground/15 border-2 border-primary-foreground/50 text-primary-foreground font-semibold rounded-full hover:bg-primary-foreground/25 transition-smooth text-sm backdrop-blur-sm",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 16 }),
                        " Explore Programs"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/admissions",
                      "data-ocid": "home.hero.apply_now.primary_button",
                      className: "inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-secondary-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth text-sm",
                      children: [
                        "Apply Now 2025-26 ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "/assets/brochure.pdf",
                      download: true,
                      "data-ocid": "home.hero.download_brochure.button",
                      className: "inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth text-sm",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 16 }),
                        " Download Brochure"
                      ]
                    }
                  )
                ] })
              ]
            },
            `slide-${current.id}`
          ) }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: prevSlide,
                "data-ocid": "home.hero.prev.button",
                "aria-label": "Previous slide",
                className: "pointer-events-auto w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground transition-smooth backdrop-blur-sm",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: nextSlide,
                "data-ocid": "home.hero.next.button",
                "aria-label": "Next slide",
                className: "pointer-events-auto w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground transition-smooth backdrop-blur-sm",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10", children: HERO_SLIDES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => goToSlide(i, i > slide ? 1 : -1),
              "data-ocid": `home.hero.dot.${i + 1}`,
              "aria-label": `Go to slide ${i + 1}`,
              className: `transition-smooth rounded-full ${i === slide ? "w-8 h-2 bg-secondary" : "w-2 h-2 bg-primary-foreground/40 hover:bg-primary-foreground/70"}`
            },
            s.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bottom-0 pb-0 overflow-hidden z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.4 },
              className: "grid grid-cols-2 md:grid-cols-4 gap-0",
              children: [
                {
                  icon: Award,
                  value: `${(stats == null ? void 0 : stats.placementRate) ?? 93.12}%`,
                  label: "Placements",
                  color: "text-secondary"
                },
                {
                  icon: TrendingUp,
                  value: `${(stats == null ? void 0 : stats.avgPackageLPA) ?? 3.25} LPA`,
                  label: "Avg Package",
                  color: "text-secondary"
                },
                {
                  icon: Users,
                  value: `${(stats == null ? void 0 : stats.partnerCompanies) ?? 350}+`,
                  label: "Partner Companies",
                  color: "text-accent"
                },
                {
                  icon: Globe,
                  value: `${(stats == null ? void 0 : stats.internationalCollabs) ?? 50}+`,
                  label: "Global Partners",
                  color: "text-accent"
                }
              ].map(({ icon: Icon, value, label, color }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.5 + i * 0.1 },
                  "data-ocid": `home.stat.item.${i + 1}`,
                  className: "hero-card rounded-none first:rounded-tl-xl last:rounded-tr-xl text-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 26, className: `${color} mx-auto mb-2` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-3xl font-bold ${color}`, children: value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary-foreground/70 text-xs mt-1 uppercase tracking-wide", children: label })
                  ]
                },
                label
              ))
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative bg-secondary text-secondary-foreground py-3 overflow-hidden",
        "data-ocid": "home.stat_strip.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Canvas, { camera: { position: [0, 0, 6], fov: 50 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatStripScene, {}) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-0 divide-x divide-secondary-foreground/25", children: STAT_STRIP.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2 px-5 py-0.5",
              "data-ocid": `home.stat_strip.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-base", children: s.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary-foreground/75 text-xs font-medium", children: s.label })
              ]
            },
            s.label
          )) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary text-primary-foreground py-2.5 px-4 text-center text-sm font-semibold", children: [
      "🎓 Admissions Open for 2025-26 Academic Year  |  Apply before May 30, 2025  ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/admissions",
          "data-ocid": "home.admission_banner.apply.link",
          className: "underline ml-2 hover:no-underline text-secondary",
          children: "Apply Now →"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        title: "Why Choose Rathinam Group of Institutions?",
        subtitle: "Four pillars that set us apart from every other college in Tamil Nadu",
        className: "section-alt",
        centered: true,
        "data-ocid": "home.highlights.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: HIGHLIGHTS.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            whileInView: { opacity: 1, y: 0 },
            initial: { opacity: 0, y: 30 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            "data-ocid": `home.highlight.item.${i + 1}`,
            className: "bg-card border border-border rounded-2xl p-6 text-center shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-14 h-14 ${h.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(h.icon, { size: 28, className: h.color })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-display font-bold text-lg mb-2 ${h.color}`, children: h.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: h.desc })
            ]
          },
          h.title
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Section,
      {
        title: "Academic Programs",
        subtitle: "Industry-aligned programs designed to launch high-impact careers",
        "data-ocid": "home.courses.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide",
              "data-ocid": "home.courses.list",
              style: { scrollbarWidth: "none" },
              children: COURSES.map((course, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  whileInView: { opacity: 1, y: 0 },
                  initial: { opacity: 0, y: 50 },
                  viewport: { once: true },
                  transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
                  "data-ocid": `home.courses.item.${i + 1}`,
                  className: "snap-start flex-shrink-0 w-60 sm:w-72",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/courses/$courseId",
                      params: { courseId: course.id },
                      className: "group block",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "course-card h-full", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: course.image,
                            alt: course.title,
                            className: "w-full h-full object-cover group-hover:scale-105 transition-smooth",
                            loading: "lazy"
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: course.badgeVariant, children: course.badge }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: course.seats })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-base mb-1 group-hover:text-primary transition-smooth", children: course.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed line-clamp-2 mb-3", children: course.desc }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-smooth", children: [
                            "Learn More ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
                          ] })
                        ] })
                      ] })
                    }
                  )
                },
                course.id
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/courses",
              "data-ocid": "home.courses.view_all.link",
              className: "btn-outline inline-flex items-center gap-2",
              children: [
                "View All Programs ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "section-alt py-20",
        "data-ocid": "home.placements.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-4", children: "🚀 Outstanding Placement Record" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold text-foreground mb-3", children: "Our Students Get Hired by the Best" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: [
              "Consistent placements at India's top companies and global brands. Average salary",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary font-bold", children: "3.25 LPA" }),
              ", highest ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary font-bold", children: "58 LPA" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12", children: [
            {
              label: "Highest Package",
              value: `${(stats == null ? void 0 : stats.highestPackageLPA) ?? 58} LPA`,
              icon: "🚀",
              sub: "Google, 2024",
              color: "text-secondary",
              border: "border-secondary/30 bg-secondary/5"
            },
            {
              label: "Average Package",
              value: `${(stats == null ? void 0 : stats.avgPackageLPA) ?? 8.5} LPA`,
              icon: "📈",
              sub: "Across all batches",
              color: "text-primary",
              border: "border-primary/30 bg-primary/5"
            },
            {
              label: "Students Placed",
              value: `${((_a = stats == null ? void 0 : stats.totalStudentsPlaced) == null ? void 0 : _a.toLocaleString()) ?? "2,840"}+`,
              icon: "🎓",
              sub: "Class of 2024",
              color: "text-accent",
              border: "border-accent/30 bg-accent/5"
            },
            {
              label: "Placement Rate",
              value: `${(stats == null ? void 0 : stats.placementRate) ?? 93.12}%`,
              icon: "🏆",
              sub: "Rathinam Group 2024",
              color: "text-secondary",
              border: "border-secondary/30 bg-secondary/5"
            }
          ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              whileInView: { opacity: 1, scale: 1 },
              initial: { opacity: 0, scale: 0.9 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              "data-ocid": `home.placement_stat.item.${i + 1}`,
              className: `stat-card border ${item.border}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `font-display text-3xl font-bold ${item.color}`,
                    children: item.value
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground mt-1", children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: item.sub })
              ]
            },
            item.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-card mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground text-sm font-semibold mb-5 uppercase tracking-wider", children: "Our Students Work At" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
              TOP_COMPANIES.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  whileInView: { opacity: 1, y: 0 },
                  initial: { opacity: 0, y: 10 },
                  viewport: { once: true },
                  transition: { delay: i * 0.06 },
                  whileHover: {
                    scale: 1.08,
                    rotateX: 6,
                    rotateY: 4,
                    z: 20,
                    boxShadow: "0 12px 30px rgba(0,0,0,0.18)"
                  },
                  style: { transformStyle: "preserve-3d", perspective: 800 },
                  "data-ocid": `home.company.item.${i + 1}`,
                  className: "flex items-center gap-2 px-4 py-2.5 bg-muted/60 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-smooth cursor-default",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground text-sm", children: c.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold text-xs ${c.color}`, children: c.package })
                  ]
                },
                c.name
              )),
              topPlaced.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  whileInView: { opacity: 1, y: 0 },
                  initial: { opacity: 0, y: 10 },
                  viewport: { once: true },
                  transition: { delay: (i + TOP_COMPANIES.length) * 0.06 },
                  whileHover: {
                    scale: 1.08,
                    rotateX: 6,
                    rotateY: 4,
                    z: 20
                  },
                  style: { transformStyle: "preserve-3d", perspective: 800 },
                  className: "flex items-center gap-2 px-4 py-2.5 bg-muted/60 rounded-xl border border-border hover:border-secondary/30 hover:bg-secondary/5 transition-smooth cursor-default",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground text-sm", children: c.company }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary font-bold text-xs", children: c.package })
                  ]
                },
                `backend-${c.company}`
              ))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/placements",
              "data-ocid": "home.view_placements.primary_button",
              className: "btn-secondary inline-flex items-center gap-2",
              children: [
                "View Full Placement Record ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        title: "What Our Students Say",
        subtitle: "Success stories from Rathinam Group of Institutions alumni placed across India and the globe",
        "data-ocid": "home.testimonials.section",
        centered: true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            whileInView: { opacity: 1, x: 0 },
            initial: { opacity: 0, x: -20 },
            viewport: { once: true },
            transition: { delay: i * 0.15 },
            "data-ocid": `home.testimonial.item.${i + 1}`,
            className: "bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated transition-smooth relative flex flex-col",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl text-secondary/20 font-display absolute top-3 right-5 select-none", children: '"' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-3", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  size: 12,
                  className: "fill-secondary text-secondary"
                },
                s
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed mb-5 italic flex-1", children: [
                '"',
                t.quote,
                '"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: t.avatar,
                    alt: t.name,
                    className: "w-12 h-12 rounded-full object-cover border-2 border-secondary/30",
                    loading: "lazy"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground text-sm truncate", children: t.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-secondary font-medium truncate", children: [
                    t.role,
                    " · ",
                    t.company
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.batch })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "placement-badge", children: t.package }) })
              ] })
            ]
          },
          t.name
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Section,
      {
        title: "Global Collaborations",
        subtitle: "Study, research, and intern at our international partner universities",
        className: "section-alt",
        centered: true,
        "data-ocid": "home.international.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                whileInView: { opacity: 1, scale: 1 },
                initial: { opacity: 0, scale: 0.85 },
                viewport: { once: true },
                transition: { duration: 0.7 },
                className: "h-72 lg:h-80 rounded-2xl overflow-hidden border border-border shadow-elevated bg-primary/10",
                "data-ocid": "home.globe.canvas",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  reactExports.Suspense,
                  {
                    fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 48, className: "text-primary/30 animate-pulse" }) }),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Canvas, { camera: { position: [0, 0, 4], fov: 55 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlobeScene, {}) })
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: INT_PARTNERS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                whileInView: { opacity: 1, y: 0 },
                initial: { opacity: 0, y: 20 },
                viewport: { once: true },
                transition: { delay: i * 0.1 },
                whileHover: { scale: 1.04, rotateX: 4, rotateY: 3 },
                style: { transformStyle: "preserve-3d", perspective: 600 },
                "data-ocid": `home.international.item.${i + 1}`,
                className: "bg-card border border-border rounded-xl p-5 text-center shadow-card hover:shadow-elevated transition-smooth",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: p.country.split(" ")[0] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-sm", children: p.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs mt-1", children: p.country.split(" ").slice(1).join(" ") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "green", className: "mt-2", children: "Partner University" })
                ]
              },
              p.name
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/international",
              "data-ocid": "home.international.primary_button",
              className: "btn-primary inline-flex items-center gap-2",
              children: [
                "Explore Global Programs ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 16 })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", "data-ocid": "home.facilities.section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "primary", className: "mb-4", children: "🏛️ World-Class Infrastructure" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold text-foreground mb-4", children: "Facilities That Inspire Excellence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-6 leading-relaxed", children: "Over 100 acres of lush campus in Eachanari, Coimbatore with state-of-the-art labs, smart classrooms, innovation hubs, sports facilities, and modern hostels for a complete campus experience." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-8", children: [
          "10+ Advanced Engineering & Research Labs",
          "Smart Classrooms with IoT & AR Integration",
          "Central Library with 50,000+ Volumes",
          "Innovation & Incubation Centre (IIIC)",
          "Sports Complex, Swimming Pool & Gymnasium"
        ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "flex items-center gap-3 text-sm text-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 16, className: "text-accent shrink-0" }),
              f
            ]
          },
          f
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/facilities",
            "data-ocid": "home.facilities.primary_button",
            className: "btn-primary inline-flex items-center gap-2",
            children: [
              "Explore Campus ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/generated/students-computer-lab.dim_800x500.jpg",
            alt: "Computer Lab",
            className: "rounded-xl shadow-card w-full aspect-video object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/generated/students-classroom.dim_800x500.jpg",
            alt: "Smart Classroom",
            className: "rounded-xl shadow-card w-full aspect-video object-cover mt-6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/generated/students-library.dim_800x500.jpg",
            alt: "Library",
            className: "rounded-xl shadow-card w-full aspect-video object-cover -mt-6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/generated/students-science-lab.dim_800x500.jpg",
            alt: "Science Lab",
            className: "rounded-xl shadow-card w-full aspect-video object-cover"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Section,
      {
        title: "News & Events",
        subtitle: "Stay updated with the latest happenings at Rathinam Group of Institutions",
        className: "section-alt",
        "data-ocid": "home.news.section",
        centered: true,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: NEWS.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.article,
            {
              whileInView: { opacity: 1, y: 0 },
              initial: { opacity: 0, y: 20 },
              viewport: { once: true },
              transition: { delay: i * 0.12 },
              "data-ocid": `home.news.item.${i + 1}`,
              className: "bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth cursor-pointer group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: n.image,
                    alt: n.title,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-smooth",
                    loading: "lazy"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `px-2.5 py-0.5 rounded-full text-xs font-bold ${n.catBg} ${n.catColor} border border-current/20`,
                        children: n.category
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 11 }),
                      " ",
                      n.date
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-base mb-2 group-hover:text-primary transition-smooth line-clamp-2", children: n.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed line-clamp-3", children: n.excerpt }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-3 flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-smooth", children: [
                    "Read More ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
                  ] })
                ] })
              ]
            },
            n.title
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/about",
              "data-ocid": "home.news.view_all.link",
              className: "btn-outline inline-flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 16 }),
                " View All News & Events"
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-gradient-primary py-16",
        "data-ocid": "home.cta.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h2,
            {
              whileInView: { opacity: 1, y: 0 },
              initial: { opacity: 0, y: 20 },
              viewport: { once: true },
              className: "font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4",
              children: "Your Dream Career Starts Here"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.p,
            {
              whileInView: { opacity: 1, y: 0 },
              initial: { opacity: 0, y: 15 },
              viewport: { once: true },
              transition: { delay: 0.1 },
              className: "text-primary-foreground/80 text-lg mb-3",
              children: [
                "Join 2,800+ students who landed placements at top companies with packages up to",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary font-bold", children: "42 LPA" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/60 text-sm mb-8", children: "Rathinam Group of Institutions, Eachanari, Coimbatore" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/admissions",
                "data-ocid": "home.cta.apply_now.primary_button",
                className: "inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth",
                children: [
                  "Apply Now ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "/assets/brochure.pdf",
                download: true,
                "data-ocid": "home.cta.download_brochure.button",
                className: "inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 18 }),
                  " Download Brochure"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                "data-ocid": "home.cta.contact.secondary_button",
                className: "inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/15 border-2 border-primary-foreground/40 text-primary-foreground font-semibold rounded-full hover:bg-primary-foreground/25 transition-smooth",
                children: "Talk to Counsellor"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  HomePage as default
};
