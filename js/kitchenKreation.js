var KKJS = (function (exports) {
  'use strict';
  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var EVENT_WALL_CLICKED = 'WALL_CLICKED_EVENT';
  var EVENT_ROOM_CLICKED = 'ROOM_CLICKED_EVENT';
  var EVENT_FLOOR_CLICKED = 'FLOOR_CLICKED_EVENT';
  var EVENT_NOTHING_CLICKED = 'NOTHING_CLICKED_EVENT';

  var EVENT_MODE_RESET = 'MODE_RESET_EVENT';
  var EVENT_CAMERA_MOVED = 'CAMERA_MOVED_EVENT';
  var EVENT_CAMERA_ACTIVE = 'CAMERA_ACTIVE_STATUS_EVENT';

  var EVENT_ITEM_LOADING = 'ITEM_LOADING_EVENT';
  var EVENT_ITEM_LOADED = 'ITEM_LOADED_EVENT';
  var EVENT_ITEM_DELETED = 'ITEM_REMOVED_EVENT';
  var EVENT_ITEM_SELECTED = 'ITEM_SELECTED_EVENT';
  var EVENT_ITEM_UNSELECTED = 'ITEM_UNSELECTED_EVENT';

  var EVENT_ACTION = 'ACTION_EVENT';
  var EVENT_DELETED = 'DELETED_EVENT';
  var EVENT_MOVED = 'MOVED_EVENT';
  var EVENT_REDRAW = 'REDRAW_EVENT';
  var EVENT_NEW = 'NEW_EVENT';
  var EVENT_LOADED = 'LOADED_EVENT';
  var EVENT_LOADING = 'LOADING_EVENT';
  var EVENT_UPDATED = 'UPDATED_EVENT';
  var EVENT_SAVED = 'SAVED_EVENT';
  var EVENT_CHANGED = 'CHANGED_EVENT';
  var EVENT_GLTF_READY = 'GLTF_READY_EVENT';

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.reference, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

/**
* @alert TO SKIP TO BUILD CODE
* CTRL+F "KITCHEN KREATION CODE STARTS HERE"
**/

  /*!
 * Three.js JavaScript Library vr102
 *
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license

 The MIT License

 Copyright © 2010-2019 three.js authors

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author philogb / http://blog.thejit.org/
 * @author egraether / http://egraether.com/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 */

 /**
  * https://github.com/mrdoob/eventdispatcher.js/
  */

 function EventDispatcher() {}

 Object.assign( EventDispatcher.prototype, {

   addEventListener: function ( type, listener ) {

     if ( this._listeners === undefined ) this._listeners = {};

     var listeners = this._listeners;

     if ( listeners[ type ] === undefined ) {

       listeners[ type ] = [];

     }

     if ( listeners[ type ].indexOf( listener ) === - 1 ) {

       listeners[ type ].push( listener );

     }

   },

   removeEventListener: function ( type, listener ) {

     if ( this._listeners === undefined ) return;

     var listeners = this._listeners;
     var listenerArray = listeners[ type ];

     if ( listenerArray !== undefined ) {

       var index = listenerArray.indexOf( listener );

       if ( index !== - 1 ) {

         listenerArray.splice( index, 1 );

       }

     }

   },

   dispatchEvent: function ( event ) {

     if ( this._listeners === undefined ) return;

     var listeners = this._listeners;
     var listenerArray = listeners[ event.type ];

     if ( listenerArray !== undefined ) {

       event.target = this;

       var array = listenerArray.slice( 0 );

       for ( var i = 0, l = array.length; i < l; i ++ ) {

         array[ i ].call( this, event );

       }

     }

   }

 } );

 var REVISION = '98';
 var MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2 };


 var AddEquation = 100;
 var SubtractEquation = 101;
 var ReverseSubtractEquation = 102;
 var MinEquation = 103;
 var MaxEquation = 104;
 var ZeroFactor = 200;
 var OneFactor = 201;
 var SrcColorFactor = 202;
 var OneMinusSrcColorFactor = 203;
 var SrcAlphaFactor = 204;
 var OneMinusSrcAlphaFactor = 205;
 var DstAlphaFactor = 206;
 var OneMinusDstAlphaFactor = 207;
 var DstColorFactor = 208;
 var OneMinusDstColorFactor = 209;
 var SrcAlphaSaturateFactor = 210;

 var ReinhardToneMapping = 2;
 var Uncharted2ToneMapping = 3;
 var CineonToneMapping = 4;
 var UVMapping = 300;
 var CubeReflectionMapping = 301;
 var CubeRefractionMapping = 302;
 var EquirectangularReflectionMapping = 303;
 var EquirectangularRefractionMapping = 304;
 var SphericalReflectionMapping = 305;
 var CubeUVReflectionMapping = 306;
 var CubeUVRefractionMapping = 307;
 var RepeatWrapping = 1000;
 var ClampToEdgeWrapping = 1001;
 var MirroredRepeatWrapping = 1002;
 var NearestFilter = 1003;
 var NearestMipMapNearestFilter = 1004;
 var NearestMipMapLinearFilter = 1005;
 var LinearFilter = 1006;
 var LinearMipMapNearestFilter = 1007;
 var LinearMipMapLinearFilter = 1008;
 var UnsignedByteType = 1009;
 var ByteType = 1010;
 var ShortType = 1011;
 var UnsignedShortType = 1012;
 var IntType = 1013;
 var UnsignedIntType = 1014;
 var FloatType = 1015;
 var HalfFloatType = 1016;
 var UnsignedShort4444Type = 1017;
 var UnsignedShort5551Type = 1018;
 var UnsignedShort565Type = 1019;
 var UnsignedInt248Type = 1020;
 var AlphaFormat = 1021;
 var RGBFormat = 1022;
 var RGBAFormat = 1023;
 var LuminanceFormat = 1024;
 var LuminanceAlphaFormat = 1025;
 var RGBEFormat = RGBAFormat;
 var DepthFormat = 1026;
 var DepthStencilFormat = 1027;
 var RedFormat = 1028;


 var _Math = {

   DEG2RAD: Math.PI / 180,
   RAD2DEG: 180 / Math.PI,

   generateUUID: ( function () {

     // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136

     var lut = [];

     for ( var i = 0; i < 256; i ++ ) {

       lut[ i ] = ( i < 16 ? '0' : '' ) + ( i ).toString( 16 );

     }

     return function generateUUID() {

       var d0 = Math.random() * 0xffffffff | 0;
       var d1 = Math.random() * 0xffffffff | 0;
       var d2 = Math.random() * 0xffffffff | 0;
       var d3 = Math.random() * 0xffffffff | 0;
       var uuid = lut[ d0 & 0xff ] + lut[ d0 >> 8 & 0xff ] + lut[ d0 >> 16 & 0xff ] + lut[ d0 >> 24 & 0xff ] + '-' +
         lut[ d1 & 0xff ] + lut[ d1 >> 8 & 0xff ] + '-' + lut[ d1 >> 16 & 0x0f | 0x40 ] + lut[ d1 >> 24 & 0xff ] + '-' +
         lut[ d2 & 0x3f | 0x80 ] + lut[ d2 >> 8 & 0xff ] + '-' + lut[ d2 >> 16 & 0xff ] + lut[ d2 >> 24 & 0xff ] +
         lut[ d3 & 0xff ] + lut[ d3 >> 8 & 0xff ] + lut[ d3 >> 16 & 0xff ] + lut[ d3 >> 24 & 0xff ];

       // .toUpperCase() here flattens concatenated strings to save heap memory space.
       return uuid.toUpperCase();

     };

   } )(),

   clamp: function ( value, min, max ) {

     return Math.max( min, Math.min( max, value ) );

   },

   // compute euclidian modulo of m % n
   // https://en.wikipedia.org/wiki/Modulo_operation

   euclideanModulo: function ( n, m ) {

     return ( ( n % m ) + m ) % m;

   },

   isPowerOfTwo: function ( value ) {

     return ( value & ( value - 1 ) ) === 0 && value !== 0;

   },

   floorPowerOfTwo: function ( value ) {

     return Math.pow( 2, Math.floor( Math.log( value ) / Math.LN2 ) );

   }

 };


 function Vector2( x, y ) {

   this.x = x || 0;
   this.y = y || 0;

 }

 Object.defineProperties( Vector2.prototype, {

   "width": {

     get: function () {

       return this.x;

     },

     set: function ( value ) {

       this.x = value;

     }

   },

   "height": {

     get: function () {

       return this.y;

     },

     set: function ( value ) {

       this.y = value;

     }

   }

 } );

 Object.assign( Vector2.prototype, {

   isVector2: true,

   set: function ( x, y ) {

     this.x = x;
     this.y = y;

     return this;

   },

   clone: function () {

     return new this.constructor( this.x, this.y );

   },

   copy: function ( v ) {

     this.x = v.x;
     this.y = v.y;

     return this;

   },

   add: function ( v, w ) {

     if ( w !== undefined ) {

       console.warn( 'THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
       return this.addVectors( v, w );

     }

     this.x += v.x;
     this.y += v.y;

     return this;

   },

   addScaledVector: function ( v, s ) {

     this.x += v.x * s;
     this.y += v.y * s;

     return this;

   },

   sub: function ( v, w ) {

     if ( w !== undefined ) {

       console.warn( 'THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
       return this.subVectors( v, w );

     }

     this.x -= v.x;
     this.y -= v.y;

     return this;

   },

   subVectors: function ( a, b ) {

     this.x = a.x - b.x;
     this.y = a.y - b.y;

     return this;

   },

   multiplyScalar: function ( scalar ) {

     this.x *= scalar;
     this.y *= scalar;

     return this;

   },

   min: function ( v ) {

     this.x = Math.min( this.x, v.x );
     this.y = Math.min( this.y, v.y );

     return this;

   },

   equals: function ( v ) {

     return ( ( v.x === this.x ) && ( v.y === this.y ) );

   },

   fromArray: function ( array, offset ) {

     if ( offset === undefined ) offset = 0;

     this.x = array[ offset ];
     this.y = array[ offset + 1 ];

     return this;

   },
 } );

 function Quaternion( x, y, z, w ) {

   this._x = x || 0;
   this._y = y || 0;
   this._z = z || 0;
   this._w = ( w !== undefined ) ? w : 1;

 }

 Object.defineProperties( Quaternion.prototype, {

   x: {

     get: function () {

       return this._x;

     },

     set: function ( value ) {

       this._x = value;
       this.onChangeCallback();

     }

   },

   y: {

     get: function () {

       return this._y;

     },

     set: function ( value ) {

       this._y = value;
       this.onChangeCallback();

     }

   },

   z: {

     get: function () {

       return this._z;

     },

     set: function ( value ) {

       this._z = value;
       this.onChangeCallback();

     }

   },

   w: {

     get: function () {

       return this._w;

     },

     set: function ( value ) {

       this._w = value;
       this.onChangeCallback();

     }

   }

 } );

   Object.assign( Quaternion.prototype, {

     isQuaternion: true,

     set: function ( x, y, z, w ) {

       this._x = x;
       this._y = y;
       this._z = z;
       this._w = w;

       this.onChangeCallback();

       return this;

     },

   clone: function () {

     return new this.constructor( this._x, this._y, this._z, this._w );

   },

   copy: function ( quaternion ) {

     this._x = quaternion.x;
     this._y = quaternion.y;
     this._z = quaternion.z;
     this._w = quaternion.w;

     this.onChangeCallback();

     return this;

   },

   setFromEuler: function ( euler, update ) {

     if ( ! ( euler && euler.isEuler ) ) {

       throw new Error( 'THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.' );

     }

     var x = euler._x, y = euler._y, z = euler._z, order = euler.order;

     // http://www.mathworks.com/matlabcentral/fileexchange/
     // 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
     //	content/SpinCalc.m

     var cos = Math.cos;
     var sin = Math.sin;

     var c1 = cos( x / 2 );
     var c2 = cos( y / 2 );
     var c3 = cos( z / 2 );

     var s1 = sin( x / 2 );
     var s2 = sin( y / 2 );
     var s3 = sin( z / 2 );

     if ( order === 'XYZ' ) {

       this._x = s1 * c2 * c3 + c1 * s2 * s3;
       this._y = c1 * s2 * c3 - s1 * c2 * s3;
       this._z = c1 * c2 * s3 + s1 * s2 * c3;
       this._w = c1 * c2 * c3 - s1 * s2 * s3;

     }

     if ( update !== false ) this.onChangeCallback();

     return this;

   },

   setFromAxisAngle: function ( axis, angle ) {

     // http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

     // assumes axis is normalized

     var halfAngle = angle / 2, s = Math.sin( halfAngle );

     this._x = axis.x * s;
     this._y = axis.y * s;
     this._z = axis.z * s;
     this._w = Math.cos( halfAngle );

     this.onChangeCallback();

     return this;

   },

   setFromRotationMatrix: function ( m ) {

     // http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

     // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

     var te = m.elements,

       m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
       m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
       m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

       trace = m11 + m22 + m33,
       s;

     if ( trace > 0 ) {

       s = 0.5 / Math.sqrt( trace + 1.0 );

       this._w = 0.25 / s;
       this._x = ( m32 - m23 ) * s;
       this._y = ( m13 - m31 ) * s;
       this._z = ( m21 - m12 ) * s;

     } else if ( m11 > m22 && m11 > m33 ) {

       s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

       this._w = ( m32 - m23 ) / s;
       this._x = 0.25 * s;
       this._y = ( m12 + m21 ) / s;
       this._z = ( m13 + m31 ) / s;

     } else if ( m22 > m33 ) {

       s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

       this._w = ( m13 - m31 ) / s;
       this._x = ( m12 + m21 ) / s;
       this._y = 0.25 * s;
       this._z = ( m23 + m32 ) / s;

     } else {

       s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

       this._w = ( m21 - m12 ) / s;
       this._x = ( m13 + m31 ) / s;
       this._y = ( m23 + m32 ) / s;
       this._z = 0.25 * s;

     }

     this.onChangeCallback();

     return this;

   },

   setFromUnitVectors: function () {

     // assumes direction vectors vFrom and vTo are normalized

     var v1 = new Vector3();
     var r;

     var EPS = 0.000001;

     return function setFromUnitVectors( vFrom, vTo ) {

       if ( v1 === undefined ) v1 = new Vector3();

       r = vFrom.dot( vTo ) + 1;

       if ( r < EPS ) {

         r = 0;

         if ( Math.abs( vFrom.x ) > Math.abs( vFrom.z ) ) {

           v1.set( - vFrom.y, vFrom.x, 0 );

         } else {

           v1.set( 0, - vFrom.z, vFrom.y );

         }

       } else {

         v1.crossVectors( vFrom, vTo );

       }

       this._x = v1.x;
       this._y = v1.y;
       this._z = v1.z;
       this._w = r;

       return this.normalize();

     };

   }(),

   inverse: function () {

     // quaternion is assumed to have unit length

     return this.conjugate();

   },

   conjugate: function () {

     this._x *= - 1;
     this._y *= - 1;
     this._z *= - 1;

     this.onChangeCallback();

     return this;

   },

   dot: function ( v ) {

     return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

   },

   length: function () {

     return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

   },

   normalize: function () {

     var l = this.length();

     if ( l === 0 ) {

       this._x = 0;
       this._y = 0;
       this._z = 0;
       this._w = 1;

     } else {

       l = 1 / l;

       this._x = this._x * l;
       this._y = this._y * l;
       this._z = this._z * l;
       this._w = this._w * l;

     }

     this.onChangeCallback();

     return this;

   },

   multiply: function ( q, p ) {

     if ( p !== undefined ) {

       console.warn( 'THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.' );
       return this.multiplyQuaternions( q, p );

     }

     return this.multiplyQuaternions( this, q );

   },

   premultiply: function ( q ) {

     return this.multiplyQuaternions( q, this );

   },

   multiplyQuaternions: function ( a, b ) {

     // from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

     var qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
     var qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

     this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
     this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
     this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
     this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

     this.onChangeCallback();

     return this;

   },

   fromArray: function ( array, offset ) {

     if ( offset === undefined ) offset = 0;

     this._x = array[ offset ];
     this._y = array[ offset + 1 ];
     this._z = array[ offset + 2 ];
     this._w = array[ offset + 3 ];

     this.onChangeCallback();

     return this;

   },

   onChange: function ( callback ) {

     this.onChangeCallback = callback;

     return this;

   },

   onChangeCallback: function () {}

 } );

 /**
  * @author mrdoob / http://mrdoob.com/
  * @author kile / http://kile.stravaganza.org/
  * @author philogb / http://blog.thejit.org/
  * @author mikael emtinger / http://gomo.se/
  * @author egraether / http://egraether.com/
  * @author WestLangley / http://github.com/WestLangley
  */

 function Vector3( x, y, z ) {

   this.x = x || 0;
   this.y = y || 0;
   this.z = z || 0;

 }

 Object.assign( Vector3.prototype, {

   isVector3: true,

   set: function ( x, y, z ) {

     this.x = x;
     this.y = y;
     this.z = z;

     return this;

   },

   clone: function () {

     return new this.constructor( this.x, this.y, this.z );

   },

   copy: function ( v ) {

     this.x = v.x;
     this.y = v.y;
     this.z = v.z;

     return this;

   },

   add: function ( v, w ) {

     if ( w !== undefined ) {

       console.warn( 'THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
       return this.addVectors( v, w );

     }

     this.x += v.x;
     this.y += v.y;
     this.z += v.z;

     return this;

   },

   addVectors: function ( a, b ) {

     this.x = a.x + b.x;
     this.y = a.y + b.y;
     this.z = a.z + b.z;

     return this;

   },


   sub: function ( v, w ) {

     if ( w !== undefined ) {

       console.warn( 'THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
       return this.subVectors( v, w );

     }

     this.x -= v.x;
     this.y -= v.y;
     this.z -= v.z;

     return this;

   },

   subVectors: function ( a, b ) {

     this.x = a.x - b.x;
     this.y = a.y - b.y;
     this.z = a.z - b.z;

     return this;

   },

   multiply: function ( v, w ) {

     if ( w !== undefined ) {

       console.warn( 'THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.' );
       return this.multiplyVectors( v, w );

     }

     this.x *= v.x;
     this.y *= v.y;
     this.z *= v.z;

     return this;

   },

   multiplyScalar: function ( scalar ) {

     this.x *= scalar;
     this.y *= scalar;
     this.z *= scalar;

     return this;

   },

   applyMatrix3: function ( m ) {

     var x = this.x, y = this.y, z = this.z;
     var e = m.elements;

     this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
     this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
     this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

     return this;

   },

   applyMatrix4: function ( m ) {

     var x = this.x, y = this.y, z = this.z;
     var e = m.elements;

     var w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );

     this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] ) * w;
     this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] ) * w;
     this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;

     return this;

   },

   applyQuaternion: function ( q ) {

     var x = this.x, y = this.y, z = this.z;
     var qx = q.x, qy = q.y, qz = q.z, qw = q.w;

     // calculate quat * vector

     var ix = qw * x + qy * z - qz * y;
     var iy = qw * y + qz * x - qx * z;
     var iz = qw * z + qx * y - qy * x;
     var iw = - qx * x - qy * y - qz * z;

     // calculate result * inverse quat

     this.x = ix * qw + iw * - qx + iy * - qz - iz * - qy;
     this.y = iy * qw + iw * - qy + iz * - qx - ix * - qz;
     this.z = iz * qw + iw * - qz + ix * - qy - iy * - qx;

     return this;

   },

   project: function ( camera ) {

     return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );

   },

   unproject: function () {

     var matrix = new Matrix4();

     return function unproject( camera ) {

       return this.applyMatrix4( matrix.getInverse( camera.projectionMatrix ) ).applyMatrix4( camera.matrixWorld );

     };

   }(),

   transformDirection: function ( m ) {

     // input: THREE.Matrix4 affine matrix
     // vector interpreted as a direction

     var x = this.x, y = this.y, z = this.z;
     var e = m.elements;

     this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z;
     this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z;
     this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

     return this.normalize();

   },

   divideScalar: function ( scalar ) {

     return this.multiplyScalar( 1 / scalar );

   },

   min: function ( v ) {

     this.x = Math.min( this.x, v.x );
     this.y = Math.min( this.y, v.y );
     this.z = Math.min( this.z, v.z );

     return this;

   },

   max: function ( v ) {

     this.x = Math.max( this.x, v.x );
     this.y = Math.max( this.y, v.y );
     this.z = Math.max( this.z, v.z );

     return this;

   },

   dot: function ( v ) {

     return this.x * v.x + this.y * v.y + this.z * v.z;

   },

   lengthSq: function () {

     return this.x * this.x + this.y * this.y + this.z * this.z;

   },

   length: function () {

     return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

   },

   normalize: function () {

     return this.divideScalar( this.length() || 1 );

   },

   cross: function ( v, w ) {

     if ( w !== undefined ) {

       console.warn( 'THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.' );
       return this.crossVectors( v, w );

     }

     return this.crossVectors( this, v );

   },

   crossVectors: function ( a, b ) {

     var ax = a.x, ay = a.y, az = a.z;
     var bx = b.x, by = b.y, bz = b.z;

     this.x = ay * bz - az * by;
     this.y = az * bx - ax * bz;
     this.z = ax * by - ay * bx;

     return this;

   },

   distanceTo: function ( v ) {

     return Math.sqrt( this.distanceToSquared( v ) );

   },

   distanceToSquared: function ( v ) {

     var dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;

     return dx * dx + dy * dy + dz * dz;

   },

   setFromSpherical: function ( s ) {

     return this.setFromSphericalCoords( s.radius, s.phi, s.theta );

   },

   setFromSphericalCoords: function ( radius, phi, theta ) {

     var sinPhiRadius = Math.sin( phi ) * radius;

     this.x = sinPhiRadius * Math.sin( theta );
     this.y = Math.cos( phi ) * radius;
     this.z = sinPhiRadius * Math.cos( theta );

     return this;

   },
   setFromMatrixPosition: function ( m ) {

     var e = m.elements;

     this.x = e[ 12 ];
     this.y = e[ 13 ];
     this.z = e[ 14 ];

     return this;

   },

   fromArray: function ( array, offset ) {

     if ( offset === undefined ) offset = 0;

     this.x = array[ offset ];
     this.y = array[ offset + 1 ];
     this.z = array[ offset + 2 ];

     return this;

   },

 } );

 /**
  * @author alteredq / http://alteredqualia.com/
  * @author WestLangley / http://github.com/WestLangley
  * @author bhouston / http://clara.io
  * @author tschw
  */

 function Matrix3() {

   this.elements = [

     1, 0, 0,
     0, 1, 0,
     0, 0, 1

   ];

   if ( arguments.length > 0 ) {

     console.error( 'THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.' );

   }

 }

 Object.assign( Matrix3.prototype, {

   isMatrix3: true,

   set: function ( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

     var te = this.elements;

     te[ 0 ] = n11; te[ 1 ] = n21; te[ 2 ] = n31;
     te[ 3 ] = n12; te[ 4 ] = n22; te[ 5 ] = n32;
     te[ 6 ] = n13; te[ 7 ] = n23; te[ 8 ] = n33;

     return this;

   },

   clone: function () {

     return new this.constructor().fromArray( this.elements );

   },

   copy: function ( m ) {

     var te = this.elements;
     var me = m.elements;

     te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ];
     te[ 3 ] = me[ 3 ]; te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ];
     te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ]; te[ 8 ] = me[ 8 ];

     return this;

   },

   setFromMatrix4: function ( m ) {

     var me = m.elements;

     this.set(

       me[ 0 ], me[ 4 ], me[ 8 ],
       me[ 1 ], me[ 5 ], me[ 9 ],
       me[ 2 ], me[ 6 ], me[ 10 ]

     );

     return this;

   },

   determinant: function () {

     var te = this.elements;

     var a = te[ 0 ], b = te[ 1 ], c = te[ 2 ],
       d = te[ 3 ], e = te[ 4 ], f = te[ 5 ],
       g = te[ 6 ], h = te[ 7 ], i = te[ 8 ];

     return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;

   },

   getInverse: function ( matrix, throwOnDegenerate ) {

     if ( matrix && matrix.isMatrix4 ) {

       console.error( "THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument." );

     }

     var me = matrix.elements,
       te = this.elements,

       n11 = me[ 0 ], n21 = me[ 1 ], n31 = me[ 2 ],
       n12 = me[ 3 ], n22 = me[ 4 ], n32 = me[ 5 ],
       n13 = me[ 6 ], n23 = me[ 7 ], n33 = me[ 8 ],

       t11 = n33 * n22 - n32 * n23,
       t12 = n32 * n13 - n33 * n12,
       t13 = n23 * n12 - n22 * n13,

       det = n11 * t11 + n21 * t12 + n31 * t13;

     if ( det === 0 ) {

       var msg = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";

       if ( throwOnDegenerate === true ) {

         throw new Error( msg );

       } else {

         console.warn( msg );

       }

       return this.identity();

     }

     var detInv = 1 / det;

     te[ 0 ] = t11 * detInv;
     te[ 1 ] = ( n31 * n23 - n33 * n21 ) * detInv;
     te[ 2 ] = ( n32 * n21 - n31 * n22 ) * detInv;

     te[ 3 ] = t12 * detInv;
     te[ 4 ] = ( n33 * n11 - n31 * n13 ) * detInv;
     te[ 5 ] = ( n31 * n12 - n32 * n11 ) * detInv;

     te[ 6 ] = t13 * detInv;
     te[ 7 ] = ( n21 * n13 - n23 * n11 ) * detInv;
     te[ 8 ] = ( n22 * n11 - n21 * n12 ) * detInv;

     return this;

   },

   transpose: function () {

     var tmp, m = this.elements;

     tmp = m[ 1 ]; m[ 1 ] = m[ 3 ]; m[ 3 ] = tmp;
     tmp = m[ 2 ]; m[ 2 ] = m[ 6 ]; m[ 6 ] = tmp;
     tmp = m[ 5 ]; m[ 5 ] = m[ 7 ]; m[ 7 ] = tmp;

     return this;

   },

   getNormalMatrix: function ( matrix4 ) {

     return this.setFromMatrix4( matrix4 ).getInverse( this ).transpose();

   },

   setUvTransform: function ( tx, ty, sx, sy, rotation, cx, cy ) {

     var c = Math.cos( rotation );
     var s = Math.sin( rotation );

     this.set(
       sx * c, sx * s, - sx * ( c * cx + s * cy ) + cx + tx,
       - sy * s, sy * c, - sy * ( - s * cx + c * cy ) + cy + ty,
       0, 0, 1
     );

   },

   fromArray: function ( array, offset ) {

     if ( offset === undefined ) offset = 0;

     for ( var i = 0; i < 9; i ++ ) {

       this.elements[ i ] = array[ i + offset ];

     }

     return this;

   },

 } );


 /**
  * @author supereggbert / http://www.paulbrunt.co.uk/
  * @author philogb / http://blog.thejit.org/
  * @author mikael emtinger / http://gomo.se/
  * @author egraether / http://egraether.com/
  * @author WestLangley / http://github.com/WestLangley
  */

 function Vector4( x, y, z, w ) {

   this.x = x || 0;
   this.y = y || 0;
   this.z = z || 0;
   this.w = ( w !== undefined ) ? w : 1;

 }

 Object.assign( Vector4.prototype, {

   isVector4: true,

   set: function ( x, y, z, w ) {

     this.x = x;
     this.y = y;
     this.z = z;
     this.w = w;

     return this;

   },

   copy: function ( v ) {

     this.x = v.x;
     this.y = v.y;
     this.z = v.z;
     this.w = ( v.w !== undefined ) ? v.w : 1;

     return this;

   },

   multiplyScalar: function ( scalar ) {

     this.x *= scalar;
     this.y *= scalar;
     this.z *= scalar;
     this.w *= scalar;

     return this;

   },

   equals: function ( v ) {

     return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) && ( v.w === this.w ) );

   },
 } );

 /**
  * @author bhouston / http://clara.io
  * @author WestLangley / http://github.com/WestLangley
  */

 function Box3( min, max ) {

   this.min = ( min !== undefined ) ? min : new Vector3( + Infinity, + Infinity, + Infinity );
   this.max = ( max !== undefined ) ? max : new Vector3( - Infinity, - Infinity, - Infinity );

 }

 Object.assign( Box3.prototype, {

   isBox3: true,

   setFromBufferAttribute: function ( attribute ) {

     var minX = + Infinity;
     var minY = + Infinity;
     var minZ = + Infinity;

     var maxX = - Infinity;
     var maxY = - Infinity;
     var maxZ = - Infinity;

     for ( var i = 0, l = attribute.count; i < l; i ++ ) {

       var x = attribute.getX( i );
       var y = attribute.getY( i );
       var z = attribute.getZ( i );

       if ( x < minX ) minX = x;
       if ( y < minY ) minY = y;
       if ( z < minZ ) minZ = z;

       if ( x > maxX ) maxX = x;
       if ( y > maxY ) maxY = y;
       if ( z > maxZ ) maxZ = z;

     }

     this.min.set( minX, minY, minZ );
     this.max.set( maxX, maxY, maxZ );

     return this;

   },

   setFromPoints: function ( points ) {

     this.makeEmpty();

     for ( var i = 0, il = points.length; i < il; i ++ ) {

       this.expandByPoint( points[ i ] );

     }

     return this;

   },

   setFromCenterAndSize: function () {

     var v1 = new Vector3();

     return function setFromCenterAndSize( center, size ) {

       var halfSize = v1.copy( size ).multiplyScalar( 0.5 );

       this.min.copy( center ).sub( halfSize );
       this.max.copy( center ).add( halfSize );

       return this;

     };

   }(),

   setFromObject: function ( object ) {

     this.makeEmpty();

     return this.expandByObject( object );

   },

   makeEmpty: function () {

     this.min.x = this.min.y = this.min.z = + Infinity;
     this.max.x = this.max.y = this.max.z = - Infinity;

     return this;

   },

   isEmpty: function () {

     // this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes

     return ( this.max.x < this.min.x ) || ( this.max.y < this.min.y ) || ( this.max.z < this.min.z );

   },

   getCenter: function ( target ) {

     if ( target === undefined ) {

       console.warn( 'THREE.Box3: .getCenter() target is now required' );
       target = new Vector3();

     }

     return this.isEmpty() ? target.set( 0, 0, 0 ) : target.addVectors( this.min, this.max ).multiplyScalar( 0.5 );

   },

   expandByPoint: function ( point ) {

     this.min.min( point );
     this.max.max( point );

     return this;

   },

   expandByObject: function () {

     // Computes the world-axis-aligned bounding box of an object (including its children),
     // accounting for both the object's, and children's, world transforms

     var scope, i, l;

     var v1 = new Vector3();

     function traverse( node ) {

       var geometry = node.geometry;

       if ( geometry !== undefined ) {

         if ( geometry.isGeometry ) {

           var vertices = geometry.vertices;

           for ( i = 0, l = vertices.length; i < l; i ++ ) {

             v1.copy( vertices[ i ] );
             v1.applyMatrix4( node.matrixWorld );

             scope.expandByPoint( v1 );

           }

         } else if ( geometry.isBufferGeometry ) {

           var attribute = geometry.attributes.position;

           if ( attribute !== undefined ) {

             for ( i = 0, l = attribute.count; i < l; i ++ ) {

               v1.fromBufferAttribute( attribute, i ).applyMatrix4( node.matrixWorld );

               scope.expandByPoint( v1 );

             }

           }

         }

       }

     }

     return function expandByObject( object ) {

       scope = this;

       object.updateMatrixWorld( true );

       object.traverse( traverse );

       return this;

     };

   }(),


 } );

 /**
  * @author bhouston / http://clara.io
  * @author mrdoob / http://mrdoob.com/
  */

 function Sphere( center, radius ) {

   this.center = ( center !== undefined ) ? center : new Vector3();
   this.radius = ( radius !== undefined ) ? radius : 0;

 }

 Object.assign( Sphere.prototype, {
   setFromPoints: function () {

     var box = new Box3();

     return function setFromPoints( points, optionalCenter ) {

       var center = this.center;

       if ( optionalCenter !== undefined ) {

         center.copy( optionalCenter );

       } else {

         box.setFromPoints( points ).getCenter( center );

       }

       var maxRadiusSq = 0;

       for ( var i = 0, il = points.length; i < il; i ++ ) {

         maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( points[ i ] ) );

       }

       this.radius = Math.sqrt( maxRadiusSq );

       return this;

     };

   }(),

   copy: function ( sphere ) {

     this.center.copy( sphere.center );
     this.radius = sphere.radius;

     return this;

   },

   applyMatrix4: function ( matrix ) {

     this.center.applyMatrix4( matrix );
     this.radius = this.radius * matrix.getMaxScaleOnAxis();

     return this;

   }
 } );

 /**
  * @author bhouston / http://clara.io
  */

 function Plane( normal, constant ) {

   // normal is assumed to be normalized

   this.normal = ( normal !== undefined ) ? normal : new Vector3( 1, 0, 0 );
   this.constant = ( constant !== undefined ) ? constant : 0;

 }

 Object.assign( Plane.prototype, {

   set: function ( normal, constant ) {

     this.normal.copy( normal );
     this.constant = constant;

     return this;

   },

   setComponents: function ( x, y, z, w ) {

     this.normal.set( x, y, z );
     this.constant = w;

     return this;

   },

   normalize: function () {

     // Note: will lead to a divide by zero if the plane is invalid.

     var inverseNormalLength = 1.0 / this.normal.length();
     this.normal.multiplyScalar( inverseNormalLength );
     this.constant *= inverseNormalLength;

     return this;

   },

   distanceToPoint: function ( point ) {

     return this.normal.dot( point ) + this.constant;

   },
 } );



 var alphamap_fragment = "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n";

 var alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n";

 var alphatest_fragment = "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n";

 var aomap_fragment = "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n";

 var aomap_pars_fragment = "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif";

 var begin_vertex = "\nvec3 transformed = vec3( position );\n";

 var beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n";

 var bsdfs = "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n";

 var bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n";

 var clipping_planes_fragment = "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif\n";

 var clipping_planes_pars_fragment = "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n";

 var clipping_planes_pars_vertex = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif\n";

 var clipping_planes_vertex = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n";

 var color_fragment = "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif";

 var color_pars_fragment = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n";

 var color_pars_vertex = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif";

 var color_vertex = "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif";

 var common = "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n";

 var cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n";

 var defaultnormal_vertex = "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n";

 var displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n";

 var displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n";

 var emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n";

 var emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n";

 var encodings_fragment = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n";

 var encodings_pars_fragment = "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}\n";

 var envmap_fragment = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n";

 var envmap_pars_fragment = "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n";

 var envmap_pars_vertex = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n";

 var envmap_vertex = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n";

 var fog_vertex = "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif\n";

 var fog_pars_vertex = "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif\n";

 var fog_fragment = "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n";

 var fog_pars_fragment = "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n";

 var gradientmap_pars_fragment = "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n";

 var lightmap_fragment = "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n";

 var lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif";

 var lights_lambert_vertex = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n";

 var lights_pars_begin = "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n";

 var envmap_physical_pars_fragment = "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n";

 var lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n";

 var lights_phong_pars_fragment = "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n";

 var lights_physical_fragment = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n";

 var lights_physical_pars_fragment = "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n";

 var lights_fragment_begin = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif\n";

 var lights_fragment_maps = "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif\n";

 var lights_fragment_end = "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n";

 var logdepthbuf_fragment = "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif";

 var logdepthbuf_pars_fragment = "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif\n";

 var logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif\n";

 var logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n";

 var map_fragment = "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n";

 var map_pars_fragment = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n";

 var map_particle_fragment = "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n";

 var map_particle_pars_fragment = "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n";

 var metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n";

 var metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif";

 var morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n";

 var morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif";

 var morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n";

 var normal_fragment_begin = "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n";

 var normal_fragment_maps = "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n";

 var normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif\n";

 var packing = "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n";

 var premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n";

 var project_vertex = "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n";

 var dithering_fragment = "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n";

 var dithering_pars_fragment = "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n";

 var roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n";

 var roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif";

 var shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n";

 var shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n";

 var shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n";

 var shadowmask_pars_fragment = "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n";

 var skinbase_vertex = "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif";

 var skinning_pars_vertex = "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n";

 var skinning_vertex = "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n";

 var skinnormal_vertex = "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n";

 var specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif";

 var specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif";

 var tonemapping_fragment = "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n";

 var tonemapping_pars_fragment = "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n";

 var uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif";

 var uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n";

 var uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif";

 var uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif";

 var uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif";

 var uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif";

 var worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n";

 var background_frag = "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n}\n";

 var background_vert = "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position, 1.0 );\n\tgl_Position.z = 1.0;\n}\n";

 var cube_frag = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n";

 var cube_vert = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n";

 var depth_frag = "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n";

 var depth_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n";

 var distanceRGBA_frag = "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n";

 var distanceRGBA_vert = "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n";

 var equirect_frag = "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n";

 var equirect_vert = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n";

 var linedashed_frag = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";

 var linedashed_vert = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n";

 var meshbasic_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";

 var meshbasic_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n";

 var meshlambert_frag = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n";

 var meshlambert_vert = "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n";

 var meshmatcap_frag = "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\tvec4 matcapColor = texture2D( matcap, uv );\n\tmatcapColor = matcapTexelToLinear( matcapColor );\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";

 var meshmatcap_vert = "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}\n";

 var meshphong_frag = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n";

 var meshphong_vert = "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n";

 var meshphysical_frag = "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n";

 var meshphysical_vert = "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n";

 var normal_frag = "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n";

 var normal_vert = "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n";

 var points_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";

 var points_vert = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}\n";

 var shadow_frag = "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n";

 var shadow_vert = "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n";

 var sprite_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";

 var sprite_vert = "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n";

 var ShaderChunk = {
   alphamap_fragment: alphamap_fragment,
   alphamap_pars_fragment: alphamap_pars_fragment,
   alphatest_fragment: alphatest_fragment,
   aomap_fragment: aomap_fragment,
   aomap_pars_fragment: aomap_pars_fragment,
   begin_vertex: begin_vertex,
   beginnormal_vertex: beginnormal_vertex,
   bsdfs: bsdfs,
   bumpmap_pars_fragment: bumpmap_pars_fragment,
   clipping_planes_fragment: clipping_planes_fragment,
   clipping_planes_pars_fragment: clipping_planes_pars_fragment,
   clipping_planes_pars_vertex: clipping_planes_pars_vertex,
   clipping_planes_vertex: clipping_planes_vertex,
   color_fragment: color_fragment,
   color_pars_fragment: color_pars_fragment,
   color_pars_vertex: color_pars_vertex,
   color_vertex: color_vertex,
   common: common,
   cube_uv_reflection_fragment: cube_uv_reflection_fragment,
   defaultnormal_vertex: defaultnormal_vertex,
   displacementmap_pars_vertex: displacementmap_pars_vertex,
   displacementmap_vertex: displacementmap_vertex,
   emissivemap_fragment: emissivemap_fragment,
   emissivemap_pars_fragment: emissivemap_pars_fragment,
   encodings_fragment: encodings_fragment,
   encodings_pars_fragment: encodings_pars_fragment,
   envmap_fragment: envmap_fragment,
   envmap_pars_fragment: envmap_pars_fragment,
   envmap_pars_vertex: envmap_pars_vertex,
   envmap_physical_pars_fragment: envmap_physical_pars_fragment,
   envmap_vertex: envmap_vertex,
   fog_vertex: fog_vertex,
   fog_pars_vertex: fog_pars_vertex,
   fog_fragment: fog_fragment,
   fog_pars_fragment: fog_pars_fragment,
   gradientmap_pars_fragment: gradientmap_pars_fragment,
   lightmap_fragment: lightmap_fragment,
   lightmap_pars_fragment: lightmap_pars_fragment,
   lights_lambert_vertex: lights_lambert_vertex,
   lights_pars_begin: lights_pars_begin,
   lights_phong_fragment: lights_phong_fragment,
   lights_phong_pars_fragment: lights_phong_pars_fragment,
   lights_physical_fragment: lights_physical_fragment,
   lights_physical_pars_fragment: lights_physical_pars_fragment,
   lights_fragment_begin: lights_fragment_begin,
   lights_fragment_maps: lights_fragment_maps,
   lights_fragment_end: lights_fragment_end,
   logdepthbuf_fragment: logdepthbuf_fragment,
   logdepthbuf_pars_fragment: logdepthbuf_pars_fragment,
   logdepthbuf_pars_vertex: logdepthbuf_pars_vertex,
   logdepthbuf_vertex: logdepthbuf_vertex,
   map_fragment: map_fragment,
   map_pars_fragment: map_pars_fragment,
   map_particle_fragment: map_particle_fragment,
   map_particle_pars_fragment: map_particle_pars_fragment,
   metalnessmap_fragment: metalnessmap_fragment,
   metalnessmap_pars_fragment: metalnessmap_pars_fragment,
   morphnormal_vertex: morphnormal_vertex,
   morphtarget_pars_vertex: morphtarget_pars_vertex,
   morphtarget_vertex: morphtarget_vertex,
   normal_fragment_begin: normal_fragment_begin,
   normal_fragment_maps: normal_fragment_maps,
   normalmap_pars_fragment: normalmap_pars_fragment,
   packing: packing,
   premultiplied_alpha_fragment: premultiplied_alpha_fragment,
   project_vertex: project_vertex,
   dithering_fragment: dithering_fragment,
   dithering_pars_fragment: dithering_pars_fragment,
   roughnessmap_fragment: roughnessmap_fragment,
   roughnessmap_pars_fragment: roughnessmap_pars_fragment,
   shadowmap_pars_fragment: shadowmap_pars_fragment,
   shadowmap_pars_vertex: shadowmap_pars_vertex,
   shadowmap_vertex: shadowmap_vertex,
   shadowmask_pars_fragment: shadowmask_pars_fragment,
   skinbase_vertex: skinbase_vertex,
   skinning_pars_vertex: skinning_pars_vertex,
   skinning_vertex: skinning_vertex,
   skinnormal_vertex: skinnormal_vertex,
   specularmap_fragment: specularmap_fragment,
   specularmap_pars_fragment: specularmap_pars_fragment,
   tonemapping_fragment: tonemapping_fragment,
   tonemapping_pars_fragment: tonemapping_pars_fragment,
   uv_pars_fragment: uv_pars_fragment,
   uv_pars_vertex: uv_pars_vertex,
   uv_vertex: uv_vertex,
   uv2_pars_fragment: uv2_pars_fragment,
   uv2_pars_vertex: uv2_pars_vertex,
   uv2_vertex: uv2_vertex,
   worldpos_vertex: worldpos_vertex,

   background_frag: background_frag,
   background_vert: background_vert,
   cube_frag: cube_frag,
   cube_vert: cube_vert,
   depth_frag: depth_frag,
   depth_vert: depth_vert,
   distanceRGBA_frag: distanceRGBA_frag,
   distanceRGBA_vert: distanceRGBA_vert,
   equirect_frag: equirect_frag,
   equirect_vert: equirect_vert,
   linedashed_frag: linedashed_frag,
   linedashed_vert: linedashed_vert,
   meshbasic_frag: meshbasic_frag,
   meshbasic_vert: meshbasic_vert,
   meshlambert_frag: meshlambert_frag,
   meshlambert_vert: meshlambert_vert,
   meshmatcap_frag: meshmatcap_frag,
   meshmatcap_vert: meshmatcap_vert,
   meshphong_frag: meshphong_frag,
   meshphong_vert: meshphong_vert,
   meshphysical_frag: meshphysical_frag,
   meshphysical_vert: meshphysical_vert,
   normal_frag: normal_frag,
   normal_vert: normal_vert,
   points_frag: points_frag,
   points_vert: points_vert,
   shadow_frag: shadow_frag,
   shadow_vert: shadow_vert,
   sprite_frag: sprite_frag,
   sprite_vert: sprite_vert
 };



 /**
  * Uniform MathUtilities
  */

 var UniformsUtils = {

   merge: function ( uniforms ) {

     var merged = {};

     for ( var u = 0; u < uniforms.length; u ++ ) {

       var tmp = this.clone( uniforms[ u ] );

       for ( var p in tmp ) {

         merged[ p ] = tmp[ p ];

       }

     }

     return merged;

   },

   clone: function ( uniforms_src ) {

     var uniforms_dst = {};

     for ( var u in uniforms_src ) {

       uniforms_dst[ u ] = {};

       for ( var p in uniforms_src[ u ] ) {

         var parameter_src = uniforms_src[ u ][ p ];

         if ( parameter_src && ( parameter_src.isColor ||
           parameter_src.isMatrix3 || parameter_src.isMatrix4 ||
           parameter_src.isVector2 || parameter_src.isVector3 || parameter_src.isVector4 ||
           parameter_src.isTexture ) ) {

           uniforms_dst[ u ][ p ] = parameter_src.clone();

         } else if ( Array.isArray( parameter_src ) ) {

           uniforms_dst[ u ][ p ] = parameter_src.slice();

         } else {

           uniforms_dst[ u ][ p ] = parameter_src;

         }

       }

     }

     return uniforms_dst;

   }

 };


 function Color( r, g, b ) {

   if ( g === undefined && b === undefined ) {

     // r is THREE.Color, hex or string
     return this.set( r );

   }

   return this.setRGB( r, g, b );

 }

 Object.assign( Color.prototype, {

   isColor: true,

   r: 1, g: 1, b: 1,

   set: function ( value ) {

     if ( value && value.isColor ) {

       this.copy( value );

     } else if ( typeof value === 'number' ) {

       this.setHex( value );

     } else if ( typeof value === 'string' ) {

       this.setStyle( value );

     }

     return this;

   },

   setHex: function ( hex ) {

     hex = Math.floor( hex );

     this.r = ( hex >> 16 & 255 ) / 255;
     this.g = ( hex >> 8 & 255 ) / 255;
     this.b = ( hex & 255 ) / 255;

     return this;

   },

   setRGB: function ( r, g, b ) {

     this.r = r;
     this.g = g;
     this.b = b;

     return this;

   },

   setHSL: function () {

     function hue2rgb( p, q, t ) {

       if ( t < 0 ) t += 1;
       if ( t > 1 ) t -= 1;
       if ( t < 1 / 6 ) return p + ( q - p ) * 6 * t;
       if ( t < 1 / 2 ) return q;
       if ( t < 2 / 3 ) return p + ( q - p ) * 6 * ( 2 / 3 - t );
       return p;

     }

     return function setHSL( h, s, l ) {

       // h,s,l ranges are in 0.0 - 1.0
       h = _Math.euclideanModulo( h, 1 );
       s = _Math.clamp( s, 0, 1 );
       l = _Math.clamp( l, 0, 1 );

       if ( s === 0 ) {

         this.r = this.g = this.b = l;

       } else {

         var p = l <= 0.5 ? l * ( 1 + s ) : l + s - ( l * s );
         var q = ( 2 * l ) - p;

         this.r = hue2rgb( q, p, h + 1 / 3 );
         this.g = hue2rgb( q, p, h );
         this.b = hue2rgb( q, p, h - 1 / 3 );

       }

       return this;

     };

   }(),
   setStyle: function ( style ) {

     function handleAlpha( string ) {

       if ( string === undefined ) return;

       if ( parseFloat( string ) < 1 ) {

         console.warn( 'THREE.Color: Alpha component of ' + style + ' will be ignored.' );

       }

     }

     var m;

   if ( m = /^\#([A-Fa-f0-9]+)$/.exec( style ) ) {

       // hex color

       var hex = m[ 1 ];
       var size = hex.length;

       if ( size === 3 ) {

         // #ff0
         this.r = parseInt( hex.charAt( 0 ) + hex.charAt( 0 ), 16 ) / 255;
         this.g = parseInt( hex.charAt( 1 ) + hex.charAt( 1 ), 16 ) / 255;
         this.b = parseInt( hex.charAt( 2 ) + hex.charAt( 2 ), 16 ) / 255;

         return this;

       } else if ( size === 6 ) {

         // #ff0000
         this.r = parseInt( hex.charAt( 0 ) + hex.charAt( 1 ), 16 ) / 255;
         this.g = parseInt( hex.charAt( 2 ) + hex.charAt( 3 ), 16 ) / 255;
         this.b = parseInt( hex.charAt( 4 ) + hex.charAt( 5 ), 16 ) / 255;

         return this;

       }

     }

     if ( style && style.length > 0 ) {

       // color keywords
       var hex = ColorKeywords[ style ];

       if ( hex !== undefined ) {

         // red
         this.setHex( hex );

       } else {

         // unknown color
         console.warn( 'THREE.Color: Unknown color ' + style );

       }

     }

     return this;

   },

   clone: function () {

     return new this.constructor( this.r, this.g, this.b );

   },

   copy: function ( color ) {

     this.r = color.r;
     this.g = color.g;
     this.b = color.b;

     return this;

   },

 //allows to move objects in scene
   getHex: function () {

     return ( this.r * 255 ) << 16 ^ ( this.g * 255 ) << 8 ^ ( this.b * 255 ) << 0;

   },

   getHexString: function () {

     return ( '000000' + this.getHex().toString( 16 ) ).slice( - 6 );

   },

   multiplyScalar: function ( s ) {

     this.r *= s;
     this.g *= s;
     this.b *= s;

     return this;

   },

   fromArray: function ( array, offset ) {

     if ( offset === undefined ) offset = 0;

     this.r = array[ offset ];
     this.g = array[ offset + 1 ];
     this.b = array[ offset + 2 ];

     return this;

   },

 } );

 /**
  * Uniforms library for shared webgl shaders
  */

 var UniformsLib = {

   common: {

     diffuse: { value: new Color( 0xeeeeee ) },
     opacity: { value: 1.0 },

     map: { value: null },
     uvTransform: { value: new Matrix3() },

     alphaMap: { value: null },

   },

   specularmap: {

     specularMap: { value: null },

   },

   envmap: {

     envMap: { value: null },
     flipEnvMap: { value: - 1 },
     reflectivity: { value: 1.0 },
     refractionRatio: { value: 0.98 },
     maxMipLevel: { value: 0 }

   },

   aomap: {

     aoMap: { value: null },
     aoMapIntensity: { value: 1 }

   },

   lightmap: {

     lightMap: { value: null },
     lightMapIntensity: { value: 1 }

   },

   emissivemap: {

     emissiveMap: { value: null }

   },

   bumpmap: {

     bumpMap: { value: null },
     bumpScale: { value: 1 }

   },

   normalmap: {

     normalMap: { value: null },
     normalScale: { value: new Vector2( 1, 1 ) }

   },

   displacementmap: {

     displacementMap: { value: null },
     displacementScale: { value: 1 },
     displacementBias: { value: 0 }

   },

   roughnessmap: {

     roughnessMap: { value: null }

   },

   metalnessmap: {

     metalnessMap: { value: null }

   },

   gradientmap: {

     gradientMap: { value: null }

   },

   fog: {

     fogDensity: { value: 0.00025 },
     fogNear: { value: 1 },
     fogFar: { value: 2000 },
     fogColor: { value: new Color( 0xffffff ) }

   },

   lights: {

     ambientLightColor: { value: [] },

     directionalLights: { value: [], properties: {
       direction: {},
       color: {},

       shadow: {},
       shadowBias: {},
       shadowRadius: {},
       shadowMapSize: {}
     } },

     directionalShadowMap: { value: [] },
     directionalShadowMatrix: { value: [] },

     spotLights: { value: [], properties: {
       color: {},
       position: {},
       direction: {},
       distance: {},
       coneCos: {},
       penumbraCos: {},
       decay: {},

       shadow: {},
       shadowBias: {},
       shadowRadius: {},
       shadowMapSize: {}
     } },

     spotShadowMap: { value: [] },
     spotShadowMatrix: { value: [] },

     pointLights: { value: [], properties: {
       color: {},
       position: {},
       decay: {},
       distance: {},

       shadow: {},
       shadowBias: {},
       shadowRadius: {},
       shadowMapSize: {},
       shadowCameraNear: {},
       shadowCameraFar: {}
     } },

     pointShadowMap: { value: [] },
     pointShadowMatrix: { value: [] },

     hemisphereLights: { value: [], properties: {
       direction: {},
       skyColor: {},
       groundColor: {}
     } },

     rectAreaLights: { value: [], properties: {
       color: {},
       position: {},
       width: {},
       height: {}
     } }

   },

   points: {

     diffuse: { value: new Color( 0xeeeeee ) },
     opacity: { value: 1.0 },
     size: { value: 1.0 },
     scale: { value: 1.0 },
     map: { value: null },
     uvTransform: { value: new Matrix3() }

   },

   sprite: {

     diffuse: { value: new Color( 0xeeeeee ) },
     opacity: { value: 1.0 },
     center: { value: new Vector2( 0.5, 0.5 ) },
     rotation: { value: 0.0 },
     map: { value: null },
     uvTransform: { value: new Matrix3() }

   }

 };

 /**
  * @author alteredq / http://alteredqualia.com/
  * @author mrdoob / http://mrdoob.com/
  * @author mikael emtinger / http://gomo.se/
  */

 var ShaderLib = {

   basic: {

     uniforms: UniformsUtils.merge( [
       UniformsLib.common,
       UniformsLib.specularmap,
       UniformsLib.envmap,
       UniformsLib.aomap,
       UniformsLib.lightmap,
       UniformsLib.fog
     ] ),

     vertexShader: ShaderChunk.meshbasic_vert,
     fragmentShader: ShaderChunk.meshbasic_frag

   },

   lambert: {

     uniforms: UniformsUtils.merge( [
       UniformsLib.common,
       UniformsLib.specularmap,
       UniformsLib.envmap,
       UniformsLib.aomap,
       UniformsLib.lightmap,
       UniformsLib.emissivemap,
       UniformsLib.fog,
       UniformsLib.lights,
       {
         emissive: { value: new Color( 0x000000 ) }
       }
     ] ),

     vertexShader: ShaderChunk.meshlambert_vert,
     fragmentShader: ShaderChunk.meshlambert_frag

   },

   phong: {

     uniforms: UniformsUtils.merge( [
       UniformsLib.common,
       UniformsLib.specularmap,
       UniformsLib.envmap,
       UniformsLib.aomap,
       UniformsLib.lightmap,
       UniformsLib.emissivemap,
       UniformsLib.bumpmap,
       UniformsLib.normalmap,
       UniformsLib.displacementmap,
       UniformsLib.gradientmap,
       UniformsLib.fog,
       UniformsLib.lights,
       {
         emissive: { value: new Color( 0x000000 ) },
         specular: { value: new Color( 0x111111 ) },
         shininess: { value: 30 }
       }
     ] ),

     vertexShader: ShaderChunk.meshphong_vert,
     fragmentShader: ShaderChunk.meshphong_frag

   },

   standard: {

     uniforms: UniformsUtils.merge( [
       UniformsLib.common,
       UniformsLib.envmap,
       UniformsLib.aomap,
       UniformsLib.lightmap,
       UniformsLib.emissivemap,
       UniformsLib.bumpmap,
       UniformsLib.normalmap,
       UniformsLib.displacementmap,
       UniformsLib.roughnessmap,
       UniformsLib.metalnessmap,
       UniformsLib.fog,
       UniformsLib.lights,
       {
         emissive: { value: new Color( 0x000000 ) },
         roughness: { value: 0.5 },
         metalness: { value: 0.5 },
         envMapIntensity: { value: 1 } // temporary
       }
     ] ),

     vertexShader: ShaderChunk.meshphysical_vert,
     fragmentShader: ShaderChunk.meshphysical_frag

   },

   matcap: {

     uniforms: UniformsUtils.merge( [
       UniformsLib.common,
       UniformsLib.bumpmap,
       UniformsLib.normalmap,
       UniformsLib.displacementmap,
       UniformsLib.fog,
       {
         matcap: { value: null }
       }
     ] ),

     vertexShader: ShaderChunk.meshmatcap_vert,
     fragmentShader: ShaderChunk.meshmatcap_frag

   },

   points: {

     uniforms: UniformsUtils.merge( [
       UniformsLib.points,
       UniformsLib.fog
     ] ),

     vertexShader: ShaderChunk.points_vert,
     fragmentShader: ShaderChunk.points_frag

   },

   dashed: {

     uniforms: UniformsUtils.merge( [
       UniformsLib.common,
       UniformsLib.fog,
       {
         scale: { value: 1 },
         dashSize: { value: 1 },
         totalSize: { value: 2 }
       }
     ] ),

     vertexShader: ShaderChunk.linedashed_vert,
     fragmentShader: ShaderChunk.linedashed_frag

   },

   depth: {

     uniforms: UniformsUtils.merge( [
       UniformsLib.common,
       UniformsLib.displacementmap
     ] ),

     vertexShader: ShaderChunk.depth_vert,
     fragmentShader: ShaderChunk.depth_frag

   },

   normal: {

     uniforms: UniformsUtils.merge( [
       UniformsLib.common,
       UniformsLib.bumpmap,
       UniformsLib.normalmap,
       UniformsLib.displacementmap,
       {
         opacity: { value: 1.0 }
       }
     ] ),

     vertexShader: ShaderChunk.normal_vert,
     fragmentShader: ShaderChunk.normal_frag

   },

   sprite: {

     uniforms: UniformsUtils.merge( [
       UniformsLib.sprite,
       UniformsLib.fog
     ] ),

     vertexShader: ShaderChunk.sprite_vert,
     fragmentShader: ShaderChunk.sprite_frag

   },

   background: {

     uniforms: {
       uvTransform: { value: new Matrix3() },
       t2D: { value: null },
     },

     vertexShader: ShaderChunk.background_vert,
     fragmentShader: ShaderChunk.background_frag

   },
   /* -------------------------------------------------------------------------
   //	Cube map shader
    ------------------------------------------------------------------------- */

   cube: {

     uniforms: {
       tCube: { value: null },
       tFlip: { value: - 1 },
       opacity: { value: 1.0 }
     },

     vertexShader: ShaderChunk.cube_vert,
     fragmentShader: ShaderChunk.cube_frag

   },

   equirect: {

     uniforms: {
       tEquirect: { value: null },
     },

     vertexShader: ShaderChunk.equirect_vert,
     fragmentShader: ShaderChunk.equirect_frag

   },

   distanceRGBA: {

     uniforms: UniformsUtils.merge( [
       UniformsLib.common,
       UniformsLib.displacementmap,
       {
         referencePosition: { value: new Vector3() },
         nearDistance: { value: 1 },
         farDistance: { value: 1000 }
       }
     ] ),

     vertexShader: ShaderChunk.distanceRGBA_vert,
     fragmentShader: ShaderChunk.distanceRGBA_frag

   },

   shadow: {

     uniforms: UniformsUtils.merge( [
       UniformsLib.lights,
       UniformsLib.fog,
       {
         color: { value: new Color( 0x00000 ) },
         opacity: { value: 1.0 }
       },
     ] ),

     vertexShader: ShaderChunk.shadow_vert,
     fragmentShader: ShaderChunk.shadow_frag

   }

 };

 ShaderLib.physical = {

   uniforms: UniformsUtils.merge( [
     ShaderLib.standard.uniforms,
     {
       clearCoat: { value: 0 },
       clearCoatRoughness: { value: 0 }
     }
   ] ),

   vertexShader: ShaderChunk.meshphysical_vert,
   fragmentShader: ShaderChunk.meshphysical_frag

 };

 /**
  * @author mrdoob / http://mrdoob.com/
  * @author WestLangley / http://github.com/WestLangley
  * @author bhouston / http://clara.io
  */

 function Euler( x, y, z, order ) {

   this._x = x || 0;
   this._y = y || 0;
   this._z = z || 0;
   this._order = order || Euler.DefaultOrder;

 }

 Euler.RotationOrders = [ 'XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX' ];

 Euler.DefaultOrder = 'XYZ';

 Object.defineProperties( Euler.prototype, {

   x: {

     get: function () {

       return this._x;

     },

     set: function ( value ) {

       this._x = value;
       this.onChangeCallback();

     }

   },

   y: {

     get: function () {

       return this._y;

     },

     set: function ( value ) {

       this._y = value;
       this.onChangeCallback();

     }

   },

   z: {

     get: function () {

       return this._z;

     },

     set: function ( value ) {

       this._z = value;
       this.onChangeCallback();

     }

   },

   order: {

     get: function () {

       return this._order;

     },

     set: function ( value ) {

       this._order = value;
       this.onChangeCallback();

     }

   }

 } );

 Object.assign( Euler.prototype, {

   isEuler: true,

   set: function ( x, y, z, order ) {

     this._x = x;
     this._y = y;
     this._z = z;
     this._order = order || this._order;

     this.onChangeCallback();

     return this;

   },

   setFromRotationMatrix: function ( m, order, update ) {

     var clamp = _Math.clamp;

     // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

     var te = m.elements;
     var m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
     var m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
     var m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

     order = order || this._order;

     if ( order === 'XYZ' ) {

       this._y = Math.asin( clamp( m13, - 1, 1 ) );

       if ( Math.abs( m13 ) < 0.99999 ) {

         this._x = Math.atan2( - m23, m33 );
         this._z = Math.atan2( - m12, m11 );

       } else {

         this._x = Math.atan2( m32, m22 );
         this._z = 0;

       }

     } else if ( order === 'YXZ' ) {

       this._x = Math.asin( - clamp( m23, - 1, 1 ) );

       if ( Math.abs( m23 ) < 0.99999 ) {

         this._y = Math.atan2( m13, m33 );
         this._z = Math.atan2( m21, m22 );

       } else {

         this._y = Math.atan2( - m31, m11 );
         this._z = 0;

       }

     } else if ( order === 'ZXY' ) {

       this._x = Math.asin( clamp( m32, - 1, 1 ) );

       if ( Math.abs( m32 ) < 0.99999 ) {

         this._y = Math.atan2( - m31, m33 );
         this._z = Math.atan2( - m12, m22 );

       } else {

         this._y = 0;
         this._z = Math.atan2( m21, m11 );

       }

     } else if ( order === 'ZYX' ) {

       this._y = Math.asin( - clamp( m31, - 1, 1 ) );

       if ( Math.abs( m31 ) < 0.99999 ) {

         this._x = Math.atan2( m32, m33 );
         this._z = Math.atan2( m21, m11 );

       } else {

         this._x = 0;
         this._z = Math.atan2( - m12, m22 );

       }

     } else if ( order === 'YZX' ) {

       this._z = Math.asin( clamp( m21, - 1, 1 ) );

       if ( Math.abs( m21 ) < 0.99999 ) {

         this._x = Math.atan2( - m23, m22 );
         this._y = Math.atan2( - m31, m11 );

       } else {

         this._x = 0;
         this._y = Math.atan2( m13, m33 );

       }

     } else if ( order === 'XZY' ) {

       this._z = Math.asin( - clamp( m12, - 1, 1 ) );

       if ( Math.abs( m12 ) < 0.99999 ) {

         this._x = Math.atan2( m32, m22 );
         this._y = Math.atan2( m13, m11 );

       } else {

         this._x = Math.atan2( - m23, m33 );
         this._y = 0;

       }

     } else {

       console.warn( 'THREE.Euler: .setFromRotationMatrix() given unsupported order: ' + order );

     }

     this._order = order;

     if ( update !== false ) this.onChangeCallback();

     return this;

   },

   setFromQuaternion: function () {

     var matrix = new Matrix4();

     return function setFromQuaternion( q, order, update ) {

       matrix.makeRotationFromQuaternion( q );

       return this.setFromRotationMatrix( matrix, order, update );

     };

   }(),

   onChange: function ( callback ) {

     this.onChangeCallback = callback;

     return this;

   },

   onChangeCallback: function () {}

 } );

 /**
  * @author mrdoob / http://mrdoob.com/
  */

 function Layers() {

   this.mask = 1 | 0;

 }

 Object.assign( Layers.prototype, {

   enable: function ( channel ) {

     this.mask |= 1 << channel | 0;

   },

   test: function ( layers ) {

     return ( this.mask & layers.mask ) !== 0;

   }
 } );

 /**
  * @author mrdoob / http://mrdoob.com/
  * @author mikael emtinger / http://gomo.se/
  * @author alteredq / http://alteredqualia.com/
  * @author WestLangley / http://github.com/WestLangley
  * @author elephantatwork / www.elephantatwork.ch
  */

 var object3DId = 0;

 function Object3D() {

   Object.defineProperty( this, 'id', { value: object3DId ++ } );

   this.uuid = _Math.generateUUID();

   this.name = '';
   this.type = 'Object3D';

   this.parent = null;
   this.children = [];

   this.up = Object3D.DefaultUp.clone();

   var position = new Vector3();
   var rotation = new Euler();
   var quaternion = new Quaternion();
   var scale = new Vector3( 1, 1, 1 );

   function onRotationChange() {

     quaternion.setFromEuler( rotation, false );

   }

   function onQuaternionChange() {

     rotation.setFromQuaternion( quaternion, undefined, false );

   }

   rotation.onChange( onRotationChange );
   quaternion.onChange( onQuaternionChange );

   Object.defineProperties( this, {
     position: {
       configurable: true,
       enumerable: true,
       value: position
     },
     rotation: {
       configurable: true,
       enumerable: true,
       value: rotation
     },
     quaternion: {
       configurable: true,
       enumerable: true,
       value: quaternion
     },
     scale: {
       configurable: true,
       enumerable: true,
       value: scale
     },
     modelViewMatrix: {
       value: new Matrix4()
     },
     normalMatrix: {
       value: new Matrix3()
     }
   } );

   this.matrix = new Matrix4();
   this.matrixWorld = new Matrix4();

   this.matrixAutoUpdate = Object3D.DefaultMatrixAutoUpdate;
   this.matrixWorldNeedsUpdate = false;

   this.layers = new Layers();
   this.visible = true;

   this.castShadow = false;
   this.receiveShadow = false;

   this.frustumCulled = true;
   this.renderOrder = 0;

   this.userData = {};

 }

 Object3D.DefaultUp = new Vector3( 0, 1, 0 );
 Object3D.DefaultMatrixAutoUpdate = true;

 Object3D.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {

   constructor: Object3D,

   isObject3D: true,

   onBeforeRender: function () {},
   onAfterRender: function () {},
   rotateOnAxis: function () {

     // rotate object on axis in object space
     // axis is assumed to be normalized

     var q1 = new Quaternion();

     return function rotateOnAxis( axis, angle ) {

       q1.setFromAxisAngle( axis, angle );

       this.quaternion.multiply( q1 );

       return this;

     };

   }(),

   rotateOnWorldAxis: function () {

     // rotate object on axis in world space
     // axis is assumed to be normalized
     // method assumes no rotated parent

     var q1 = new Quaternion();

     return function rotateOnWorldAxis( axis, angle ) {

       q1.setFromAxisAngle( axis, angle );

       this.quaternion.premultiply( q1 );

       return this;

     };

   }(),

   rotateX: function () {

     var v1 = new Vector3( 1, 0, 0 );

     return function rotateX( angle ) {

       return this.rotateOnAxis( v1, angle );

     };

   }(),

   rotateY: function () {

     var v1 = new Vector3( 0, 1, 0 );

     return function rotateY( angle ) {

       return this.rotateOnAxis( v1, angle );

     };

   }(),

   rotateZ: function () {

     var v1 = new Vector3( 0, 0, 1 );

     return function rotateZ( angle ) {

       return this.rotateOnAxis( v1, angle );

     };

   }(),

   lookAt: function () {

     // This method does not support objects having non-uniformly-scaled parent(s)

     var q1 = new Quaternion();
     var m1 = new Matrix4();
     var target = new Vector3();
     var position = new Vector3();

     return function lookAt( x, y, z ) {

       if ( x.isVector3 ) {

         target.copy( x );

       } else {

         target.set( x, y, z );

       }

       var parent = this.parent;

       this.updateWorldMatrix( true, false );

       position.setFromMatrixPosition( this.matrixWorld );

       if ( this.isCamera ) {

         m1.lookAt( position, target, this.up );

       } else {

         m1.lookAt( target, position, this.up );

       }

       this.quaternion.setFromRotationMatrix( m1 );

       if ( parent ) {

         m1.extractRotation( parent.matrixWorld );
         q1.setFromRotationMatrix( m1 );
         this.quaternion.premultiply( q1.inverse() );

       }

     };

   }(),

   add: function ( object ) {

     if ( arguments.length > 1 ) {

       for ( var i = 0; i < arguments.length; i ++ ) {

         this.add( arguments[ i ] );

       }

       return this;

     }

     if ( object === this ) {

       console.error( "THREE.Object3D.add: object can't be added as a child of itself.", object );
       return this;

     }

     if ( ( object && object.isObject3D ) ) {

       if ( object.parent !== null ) {

         object.parent.remove( object );

       }

       object.parent = this;
       object.dispatchEvent( { type: 'added' } );

       this.children.push( object );

     } else {

       console.error( "THREE.Object3D.add: object not an instance of THREE.Object3D.", object );

     }

     return this;

   },

   remove: function ( object ) {

     if ( arguments.length > 1 ) {

       for ( var i = 0; i < arguments.length; i ++ ) {

         this.remove( arguments[ i ] );

       }

       return this;

     }

     var index = this.children.indexOf( object );

     if ( index !== - 1 ) {

       object.parent = null;

       object.dispatchEvent( { type: 'removed' } );

       this.children.splice( index, 1 );

     }

     return this;

   },

   raycast: function () {},

   traverse: function ( callback ) {

     callback( this );

     var children = this.children;

     for ( var i = 0, l = children.length; i < l; i ++ ) {

       children[ i ].traverse( callback );

     }

   },

   updateMatrix: function () {

     this.matrix.compose( this.position, this.quaternion, this.scale );

     this.matrixWorldNeedsUpdate = true;

   },

   updateMatrixWorld: function ( force ) {

     if ( this.matrixAutoUpdate ) this.updateMatrix();

     if ( this.matrixWorldNeedsUpdate || force ) {

       if ( this.parent === null ) {

         this.matrixWorld.copy( this.matrix );

       } else {

         this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

       }

       this.matrixWorldNeedsUpdate = false;

       force = true;

     }

     // update children

     var children = this.children;

     for ( var i = 0, l = children.length; i < l; i ++ ) {

       children[ i ].updateMatrixWorld( force );

     }

   },

   updateWorldMatrix: function ( updateParents, updateChildren ) {

     var parent = this.parent;

     if ( updateParents === true && parent !== null ) {

       parent.updateWorldMatrix( true, false );

     }

     if ( this.matrixAutoUpdate ) this.updateMatrix();

     if ( this.parent === null ) {

       this.matrixWorld.copy( this.matrix );

     } else {

       this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

     }

     // update children

     if ( updateChildren === true ) {

       var children = this.children;

       for ( var i = 0, l = children.length; i < l; i ++ ) {

         children[ i ].updateWorldMatrix( false, true );

       }

     }

   }
 } );

 /**
  * @author mrdoob / http://mrdoob.com/
  * @author kile / http://kile.stravaganza.org/
  * @author alteredq / http://alteredqualia.com/
  * @author mikael emtinger / http://gomo.se/
  * @author zz85 / http://www.lab4games.net/zz85/blog
  * @author bhouston / http://clara.io
  */

 var geometryId = 0; // Geometry uses even numbers as Id

 function Geometry() {

   Object.defineProperty( this, 'id', { value: geometryId += 2 } );

   this.uuid = _Math.generateUUID();

   this.name = '';
   this.type = 'Geometry';

   this.vertices = [];
   this.colors = [];
   this.faces = [];
   this.faceVertexUvs = [[]];

   this.morphTargets = [];
   this.morphNormals = [];

   this.skinWeights = [];
   this.skinIndices = [];

   this.lineDistances = [];

   this.boundingBox = null;
   this.boundingSphere = null;

   // update flags

   this.elementsNeedUpdate = false;
   this.verticesNeedUpdate = false;
   this.uvsNeedUpdate = false;
   this.normalsNeedUpdate = false;
   this.colorsNeedUpdate = false;
   this.lineDistancesNeedUpdate = false;
   this.groupsNeedUpdate = false;

 }

 Geometry.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {

   constructor: Geometry,

   isGeometry: true,

   applyMatrix: function ( matrix ) {

     var normalMatrix = new THREE.Matrix3().getNormalMatrix( matrix );

     for ( var i = 0, il = this.vertices.length; i < il; i ++ ) {

       var vertex = this.vertices[ i ];
       vertex.applyMatrix4( matrix );

     }

     for ( var i = 0, il = this.faces.length; i < il; i ++ ) {

       var face = this.faces[ i ];
       face.normal.applyMatrix3( normalMatrix ).normalize();

       for ( var j = 0, jl = face.vertexNormals.length; j < jl; j ++ ) {

         face.vertexNormals[ j ].applyMatrix3( normalMatrix ).normalize();

       }

     }

     if ( this.boundingBox !== null ) {

       this.computeBoundingBox();

     }

     if ( this.boundingSphere !== null ) {

       this.computeBoundingSphere();

     }

     this.verticesNeedUpdate = true;
     this.normalsNeedUpdate = true;

     return this;

   },

   fromBufferGeometry: function ( geometry ) {

     var scope = this;

     var indices = geometry.index !== null ? geometry.index.array : undefined;
     var attributes = geometry.attributes;

     var positions = attributes.position.array;
     var normals = attributes.normal !== undefined ? attributes.normal.array : undefined;
     var colors = attributes.color !== undefined ? attributes.color.array : undefined;
     var uvs = attributes.uv !== undefined ? attributes.uv.array : undefined;
     var uvs2 = attributes.uv2 !== undefined ? attributes.uv2.array : undefined;

     if ( uvs2 !== undefined ) this.faceVertexUvs[ 1 ] = [];

     for ( var i = 0, j = 0; i < positions.length; i += 3, j += 2 ) {

       scope.vertices.push( new Vector3().fromArray( positions, i ) );

       if ( colors !== undefined ) {

         scope.colors.push( new Color().fromArray( colors, i ) );

       }

     }

     function addFace( a, b, c, materialIndex ) {

       var vertexColors = ( colors === undefined ) ? [] : [
         scope.colors[ a ].clone(),
         scope.colors[ b ].clone(),
         scope.colors[ c ].clone() ];

       var vertexNormals = ( normals === undefined ) ? [] : [
         new Vector3().fromArray( normals, a * 3 ),
         new Vector3().fromArray( normals, b * 3 ),
         new Vector3().fromArray( normals, c * 3 )
       ];

       var face = new Face3( a, b, c, vertexNormals, vertexColors, materialIndex );

       scope.faces.push( face );

       if ( uvs !== undefined ) {

         scope.faceVertexUvs[ 0 ].push( [
           new Vector2().fromArray( uvs, a * 2 ),
           new Vector2().fromArray( uvs, b * 2 ),
           new Vector2().fromArray( uvs, c * 2 )
         ] );

       }

       if ( uvs2 !== undefined ) {

         scope.faceVertexUvs[ 1 ].push( [
           new Vector2().fromArray( uvs2, a * 2 ),
           new Vector2().fromArray( uvs2, b * 2 ),
           new Vector2().fromArray( uvs2, c * 2 )
         ] );

       }

     }

     var groups = geometry.groups;

     if ( groups.length > 0 ) {

       for ( var i = 0; i < groups.length; i ++ ) {

         var group = groups[ i ];

         var start = group.start;
         var count = group.count;

         for ( var j = start, jl = start + count; j < jl; j += 3 ) {

           if ( indices !== undefined ) {

             addFace( indices[ j ], indices[ j + 1 ], indices[ j + 2 ], group.materialIndex );

           } else {

             addFace( j, j + 1, j + 2, group.materialIndex );

           }

         }

       }

     } else {

       if ( indices !== undefined ) {

         for ( var i = 0; i < indices.length; i += 3 ) {

           addFace( indices[ i ], indices[ i + 1 ], indices[ i + 2 ] );

         }

       } else {

         for ( var i = 0; i < positions.length / 3; i += 3 ) {

           addFace( i, i + 1, i + 2 );

         }

       }

     }

     this.computeFaceNormals();

     if ( geometry.boundingBox !== null ) {

       this.boundingBox = geometry.boundingBox.clone();

     }

     if ( geometry.boundingSphere !== null ) {

       this.boundingSphere = geometry.boundingSphere.clone();

     }

     return this;

   },

   computeFaceNormals: function () {

     var cb = new Vector3(), ab = new Vector3();

     for ( var f = 0, fl = this.faces.length; f < fl; f ++ ) {

       var face = this.faces[ f ];

       var vA = this.vertices[ face.a ];
       var vB = this.vertices[ face.b ];
       var vC = this.vertices[ face.c ];

       cb.subVectors( vC, vB );
       ab.subVectors( vA, vB );
       cb.cross( ab );

       cb.normalize();

       face.normal.copy( cb );

     }

   },

   computeVertexNormals: function ( areaWeighted ) {

     if ( areaWeighted === undefined ) areaWeighted = true;

     var v, vl, f, fl, face, vertices;

     vertices = new Array( this.vertices.length );

     for ( v = 0, vl = this.vertices.length; v < vl; v ++ ) {

       vertices[ v ] = new Vector3();

     }

     if ( areaWeighted ) {

       // vertex normals weighted by triangle areas
       // http://www.iquilezles.org/www/articles/normals/normals.htm

       var vA, vB, vC;
       var cb = new Vector3(), ab = new Vector3();

       for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

         face = this.faces[ f ];

         vA = this.vertices[ face.a ];
         vB = this.vertices[ face.b ];
         vC = this.vertices[ face.c ];

         cb.subVectors( vC, vB );
         ab.subVectors( vA, vB );
         cb.cross( ab );

         vertices[ face.a ].add( cb );
         vertices[ face.b ].add( cb );
         vertices[ face.c ].add( cb );

       }

     } else {

       this.computeFaceNormals();

       for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

         face = this.faces[ f ];

         vertices[ face.a ].add( face.normal );
         vertices[ face.b ].add( face.normal );
         vertices[ face.c ].add( face.normal );

       }

     }

     for ( v = 0, vl = this.vertices.length; v < vl; v ++ ) {

       vertices[ v ].normalize();

     }

     for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

       face = this.faces[ f ];

       var vertexNormals = face.vertexNormals;

       if ( vertexNormals.length === 3 ) {

         vertexNormals[ 0 ].copy( vertices[ face.a ] );
         vertexNormals[ 1 ].copy( vertices[ face.b ] );
         vertexNormals[ 2 ].copy( vertices[ face.c ] );

       } else {

         vertexNormals[ 0 ] = vertices[ face.a ].clone();
         vertexNormals[ 1 ] = vertices[ face.b ].clone();
         vertexNormals[ 2 ] = vertices[ face.c ].clone();

       }

     }

     if ( this.faces.length > 0 ) {

       this.normalsNeedUpdate = true;

     }

   },

   computeBoundingBox: function () {

     if ( this.boundingBox === null ) {

       this.boundingBox = new Box3();

     }

     this.boundingBox.setFromPoints( this.vertices );

   },

   computeBoundingSphere: function () {

     if ( this.boundingSphere === null ) {

       this.boundingSphere = new Sphere();

     }

     this.boundingSphere.setFromPoints( this.vertices );

   },

   merge: function ( geometry, matrix, materialIndexOffset ) {

     if ( ! ( geometry && geometry.isGeometry ) ) {

       console.error( 'THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.', geometry );
       return;

     }

     var normalMatrix,
       vertexOffset = this.vertices.length,
       vertices1 = this.vertices,
       vertices2 = geometry.vertices,
       faces1 = this.faces,
       faces2 = geometry.faces,
       uvs1 = this.faceVertexUvs[ 0 ],
       uvs2 = geometry.faceVertexUvs[ 0 ],
       colors1 = this.colors,
       colors2 = geometry.colors;

     if ( materialIndexOffset === undefined ) materialIndexOffset = 0;

     if ( matrix !== undefined ) {

       normalMatrix = new THREE.Matrix3().getNormalMatrix( matrix );

     }

     // vertices

     for ( var i = 0, il = vertices2.length; i < il; i ++ ) {

       var vertex = vertices2[ i ];

       var vertexCopy = vertex.clone();

       if ( matrix !== undefined ) vertexCopy.applyMatrix4( matrix );

       vertices1.push( vertexCopy );

     }

     // colors

     for ( var i = 0, il = colors2.length; i < il; i ++ ) {

       colors1.push( colors2[ i ].clone() );

     }

     // faces

     for ( i = 0, il = faces2.length; i < il; i ++ ) {

       var face = faces2[ i ], faceCopy, normal, color,
         faceVertexNormals = face.vertexNormals,
         faceVertexColors = face.vertexColors;

       faceCopy = new Face3( face.a + vertexOffset, face.b + vertexOffset, face.c + vertexOffset );
       faceCopy.normal.copy( face.normal );

       if ( normalMatrix !== undefined ) {

         faceCopy.normal.applyMatrix3( normalMatrix ).normalize();

       }

       for ( var j = 0, jl = faceVertexNormals.length; j < jl; j ++ ) {

         normal = faceVertexNormals[ j ].clone();

         if ( normalMatrix !== undefined ) {

           normal.applyMatrix3( normalMatrix ).normalize();

         }

         faceCopy.vertexNormals.push( normal );

       }

       faceCopy.color.copy( face.color );

       for ( var j = 0, jl = faceVertexColors.length; j < jl; j ++ ) {

         color = faceVertexColors[ j ];
         faceCopy.vertexColors.push( color.clone() );

       }

       faceCopy.materialIndex = face.materialIndex + materialIndexOffset;

       faces1.push( faceCopy );

     }

     // uvs

     for ( i = 0, il = uvs2.length; i < il; i ++ ) {

       var uv = uvs2[ i ], uvCopy = [];

       if ( uv === undefined ) {

         continue;

       }

       for ( var j = 0, jl = uv.length; j < jl; j ++ ) {

         uvCopy.push( uv[ j ].clone() );

       }

       uvs1.push( uvCopy );

     }

   },

   /*
    * Checks for duplicate vertices with hashmap.
    * Duplicated vertices are removed
    * and faces' vertices are updated.
    */

   mergeVertices: function () {

     var verticesMap = {}; // Hashmap for looking up vertices by position coordinates (and making sure they are unique)
     var unique = [], changes = [];

     var v, key;
     var precisionPoints = 4; // number of decimal points, e.g. 4 for epsilon of 0.0001
     var precision = Math.pow( 10, precisionPoints );
     var i, il, face;
     var indices, j, jl;

     for ( i = 0, il = this.vertices.length; i < il; i ++ ) {

       v = this.vertices[ i ];
       key = Math.round( v.x * precision ) + '_' + Math.round( v.y * precision ) + '_' + Math.round( v.z * precision );

       if ( verticesMap[ key ] === undefined ) {

         verticesMap[ key ] = i;
         unique.push( this.vertices[ i ] );
         changes[ i ] = unique.length - 1;

       } else {

         //console.log('Duplicate vertex found. ', i, ' could be using ', verticesMap[key]);
         changes[ i ] = changes[ verticesMap[ key ] ];

       }

     }


     // if faces are completely degenerate after merging vertices, we
     // have to remove them from the geometry.
     var faceIndicesToRemove = [];

     for ( i = 0, il = this.faces.length; i < il; i ++ ) {

       face = this.faces[ i ];

       face.a = changes[ face.a ];
       face.b = changes[ face.b ];
       face.c = changes[ face.c ];

       indices = [ face.a, face.b, face.c ];

       // if any duplicate vertices are found in a Face3
       // we have to remove the face as nothing can be saved
       for ( var n = 0; n < 3; n ++ ) {

         if ( indices[ n ] === indices[ ( n + 1 ) % 3 ] ) {

           faceIndicesToRemove.push( i );
           break;

         }

       }

     }

     for ( i = faceIndicesToRemove.length - 1; i >= 0; i -- ) {

       var idx = faceIndicesToRemove[ i ];

       this.faces.splice( idx, 1 );

       for ( j = 0, jl = this.faceVertexUvs.length; j < jl; j ++ ) {

         this.faceVertexUvs[ j ].splice( idx, 1 );

       }

     }

     // Use unique set of vertices

     var diff = this.vertices.length - unique.length;
     this.vertices = unique;
     return diff;

   }
 } );

 /**
  * @author mrdoob / http://mrdoob.com/
  */

 function BufferAttribute( array, itemSize, normalized ) {

   if ( Array.isArray( array ) ) {

     throw new TypeError( 'THREE.BufferAttribute: array should be a Typed Array.' );

   }

   this.name = '';

   this.array = array;
   this.itemSize = itemSize;
   this.count = array !== undefined ? array.length / itemSize : 0;
   this.normalized = normalized === true;

   this.dynamic = false;
   this.updateRange = { offset: 0, count: - 1 };

   this.version = 0;

 }

 Object.defineProperty( BufferAttribute.prototype, 'needsUpdate', {

   set: function ( value ) {

     if ( value === true ) this.version ++;

   }

 } );

 Object.assign( BufferAttribute.prototype, {

   isBufferAttribute: true,

   onUploadCallback: function () {},

   copyColorsArray: function ( colors ) {

     var array = this.array, offset = 0;

     for ( var i = 0, l = colors.length; i < l; i ++ ) {

       var color = colors[ i ];

       if ( color === undefined ) {

         console.warn( 'THREE.BufferAttribute.copyColorsArray(): color is undefined', i );
         color = new Color();

       }

       array[ offset ++ ] = color.r;
       array[ offset ++ ] = color.g;
       array[ offset ++ ] = color.b;

     }

     return this;

   },

   copyVector2sArray: function ( vectors ) {

     var array = this.array, offset = 0;

     for ( var i = 0, l = vectors.length; i < l; i ++ ) {

       var vector = vectors[ i ];

       if ( vector === undefined ) {

         console.warn( 'THREE.BufferAttribute.copyVector2sArray(): vector is undefined', i );
         vector = new Vector2();

       }

       array[ offset ++ ] = vector.x;
       array[ offset ++ ] = vector.y;

     }

     return this;

   },

   copyVector3sArray: function ( vectors ) {

     var array = this.array, offset = 0;

     for ( var i = 0, l = vectors.length; i < l; i ++ ) {

       var vector = vectors[ i ];

       if ( vector === undefined ) {

         console.warn( 'THREE.BufferAttribute.copyVector3sArray(): vector is undefined', i );
         vector = new Vector3();

       }

       array[ offset ++ ] = vector.x;
       array[ offset ++ ] = vector.y;
       array[ offset ++ ] = vector.z;

     }

     return this;

   },

   getX: function ( index ) {

     return this.array[ index * this.itemSize ];

   },

   getY: function ( index ) {

     return this.array[ index * this.itemSize + 1 ];

   },

   getZ: function ( index ) {

     return this.array[ index * this.itemSize + 2 ];

   }
 } );


 var bufferGeometryId = 1; // BufferGeometry uses odd numbers as Id

 function BufferGeometry() {

   Object.defineProperty( this, 'id', { value: bufferGeometryId += 2 } );

   this.uuid = _Math.generateUUID();

   this.name = '';
   this.type = 'BufferGeometry';

   this.index = null;
   this.attributes = {};

   this.morphAttributes = {};

   this.groups = [];

   this.boundingBox = null;
   this.boundingSphere = null;

   this.drawRange = { start: 0, count: Infinity };

   this.userData = {};

 }

 BufferGeometry.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {

   constructor: BufferGeometry,

   isBufferGeometry: true,

   getIndex: function () {

     return this.index;

   },

   setIndex: function ( index ) {

     if ( Array.isArray( index ) ) {

       this.index = new ( arrayMax( index ) > 65535 ? Uint32BufferAttribute : Uint16BufferAttribute )( index, 1 );

     } else {

       this.index = index;

     }

   },

   addAttribute: function ( name, attribute ) {

     if ( ! ( attribute && attribute.isBufferAttribute ) && ! ( attribute && attribute.isInterleavedBufferAttribute ) ) {

       console.warn( 'THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).' );

       return this.addAttribute( name, new BufferAttribute( arguments[ 1 ], arguments[ 2 ] ) );

     }

     if ( name === 'index' ) {

       console.warn( 'THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.' );
       this.setIndex( attribute );

       return this;

     }

     this.attributes[ name ] = attribute;

     return this;

   },
   addGroup: function ( start, count, materialIndex ) {

     this.groups.push( {

       start: start,
       count: count,
       materialIndex: materialIndex !== undefined ? materialIndex : 0

     } );

   },

   rotateX: function () {

     // rotate geometry around world x-axis

     var m1 = new Matrix4();

     return function rotateX( angle ) {

       m1.makeRotationX( angle );

       this.applyMatrix( m1 );

       return this;

     };

   }(),

   rotateY: function () {

     // rotate geometry around world y-axis

     var m1 = new Matrix4();

     return function rotateY( angle ) {

       m1.makeRotationY( angle );

       this.applyMatrix( m1 );

       return this;

     };

   }(),

   rotateZ: function () {

     // rotate geometry around world z-axis

     var m1 = new Matrix4();

     return function rotateZ( angle ) {

       m1.makeRotationZ( angle );

       this.applyMatrix( m1 );

       return this;

     };

   }(),

   translate: function () {

     // translate geometry

     var m1 = new Matrix4();

     return function translate( x, y, z ) {

       m1.makeTranslation( x, y, z );

       this.applyMatrix( m1 );

       return this;

     };

   }(),

   scale: function () {

     // scale geometry

     var m1 = new Matrix4();

     return function scale( x, y, z ) {

       m1.makeScale( x, y, z );

       this.applyMatrix( m1 );

       return this;

     };

   }(),

   lookAt: function () {

     var obj = new Object3D();

     return function lookAt( vector ) {

       obj.lookAt( vector );

       obj.updateMatrix();

       this.applyMatrix( obj.matrix );

     };

   }(),

   center: function () {

     var offset = new Vector3();

     return function center() {

       this.computeBoundingBox();

       this.boundingBox.getCenter( offset ).negate();

       this.translate( offset.x, offset.y, offset.z );

       return this;

     };

   }(),

   setFromObject: function ( object ) {

     // console.log( 'THREE.BufferGeometry.setFromObject(). Converting', object, this );

     var geometry = object.geometry;

     if ( object.isPoints || object.isLine ) {

       var positions = new Float32BufferAttribute( geometry.vertices.length * 3, 3 );
       var colors = new Float32BufferAttribute( geometry.colors.length * 3, 3 );

       this.addAttribute( 'position', positions.copyVector3sArray( geometry.vertices ) );
       this.addAttribute( 'color', colors.copyColorsArray( geometry.colors ) );

       if ( geometry.lineDistances && geometry.lineDistances.length === geometry.vertices.length ) {

         var lineDistances = new Float32BufferAttribute( geometry.lineDistances.length, 1 );

         this.addAttribute( 'lineDistance', lineDistances.copyArray( geometry.lineDistances ) );

       }

       if ( geometry.boundingSphere !== null ) {

         this.boundingSphere = geometry.boundingSphere.clone();

       }

       if ( geometry.boundingBox !== null ) {

         this.boundingBox = geometry.boundingBox.clone();

       }

     } else if ( object.isMesh ) {

       if ( geometry && geometry.isGeometry ) {

         this.fromGeometry( geometry );

       }

     }

     return this;

   },

   setFromPoints: function ( points ) {

     var position = [];

     for ( var i = 0, l = points.length; i < l; i ++ ) {

       var point = points[ i ];
       position.push( point.x, point.y, point.z || 0 );

     }

     this.addAttribute( 'position', new Float32BufferAttribute( position, 3 ) );

     return this;

   },

   updateFromObject: function ( object ) {

     var geometry = object.geometry;

     if ( object.isMesh ) {

       var direct = geometry.__directGeometry;

       if ( geometry.elementsNeedUpdate === true ) {

         direct = undefined;
         geometry.elementsNeedUpdate = false;

       }

       if ( direct === undefined ) {

         return this.fromGeometry( geometry );

       }

       direct.verticesNeedUpdate = geometry.verticesNeedUpdate;
       direct.normalsNeedUpdate = geometry.normalsNeedUpdate;
       direct.colorsNeedUpdate = geometry.colorsNeedUpdate;
       direct.uvsNeedUpdate = geometry.uvsNeedUpdate;
       direct.groupsNeedUpdate = geometry.groupsNeedUpdate;

       geometry.verticesNeedUpdate = false;
       geometry.normalsNeedUpdate = false;
       geometry.colorsNeedUpdate = false;
       geometry.uvsNeedUpdate = false;
       geometry.groupsNeedUpdate = false;

       geometry = direct;

     }

     var attribute;

     if ( geometry.verticesNeedUpdate === true ) {

       attribute = this.attributes.position;

       if ( attribute !== undefined ) {

         attribute.copyVector3sArray( geometry.vertices );
         attribute.needsUpdate = true;

       }

       geometry.verticesNeedUpdate = false;

     }

     if ( geometry.normalsNeedUpdate === true ) {

       attribute = this.attributes.normal;

       if ( attribute !== undefined ) {

         attribute.copyVector3sArray( geometry.normals );
         attribute.needsUpdate = true;

       }

       geometry.normalsNeedUpdate = false;

     }

     if ( geometry.colorsNeedUpdate === true ) {

       attribute = this.attributes.color;

       if ( attribute !== undefined ) {

         attribute.copyColorsArray( geometry.colors );
         attribute.needsUpdate = true;

       }

       geometry.colorsNeedUpdate = false;

     }

     if ( geometry.uvsNeedUpdate ) {

       attribute = this.attributes.uv;

       if ( attribute !== undefined ) {

         attribute.copyVector2sArray( geometry.uvs );
         attribute.needsUpdate = true;

       }

       geometry.uvsNeedUpdate = false;

     }

     if ( geometry.lineDistancesNeedUpdate ) {

       attribute = this.attributes.lineDistance;

       if ( attribute !== undefined ) {

         attribute.copyArray( geometry.lineDistances );
         attribute.needsUpdate = true;

       }

       geometry.lineDistancesNeedUpdate = false;

     }

     if ( geometry.groupsNeedUpdate ) {

       geometry.computeGroups( object.geometry );
       this.groups = geometry.groups;

       geometry.groupsNeedUpdate = false;

     }

     return this;

   },

   fromGeometry: function ( geometry ) {

     geometry.__directGeometry = new DirectGeometry().fromGeometry( geometry );

     return this.fromDirectGeometry( geometry.__directGeometry );

   },

   fromDirectGeometry: function ( geometry ) {

     var positions = new Float32Array( geometry.vertices.length * 3 );
     this.addAttribute( 'position', new BufferAttribute( positions, 3 ).copyVector3sArray( geometry.vertices ) );

     if ( geometry.normals.length > 0 ) {

       var normals = new Float32Array( geometry.normals.length * 3 );
       this.addAttribute( 'normal', new BufferAttribute( normals, 3 ).copyVector3sArray( geometry.normals ) );

     }

     if ( geometry.colors.length > 0 ) {

       var colors = new Float32Array( geometry.colors.length * 3 );
       this.addAttribute( 'color', new BufferAttribute( colors, 3 ).copyColorsArray( geometry.colors ) );

     }

     if ( geometry.uvs.length > 0 ) {

       var uvs = new Float32Array( geometry.uvs.length * 2 );
       this.addAttribute( 'uv', new BufferAttribute( uvs, 2 ).copyVector2sArray( geometry.uvs ) );

     }

     if ( geometry.uvs2.length > 0 ) {

       var uvs2 = new Float32Array( geometry.uvs2.length * 2 );
       this.addAttribute( 'uv2', new BufferAttribute( uvs2, 2 ).copyVector2sArray( geometry.uvs2 ) );

     }

     // groups

     this.groups = geometry.groups;

     // skinning

     if ( geometry.skinIndices.length > 0 ) {

       var skinIndices = new Float32BufferAttribute( geometry.skinIndices.length * 4, 4 );
       this.addAttribute( 'skinIndex', skinIndices.copyVector4sArray( geometry.skinIndices ) );

     }

     if ( geometry.skinWeights.length > 0 ) {

       var skinWeights = new Float32BufferAttribute( geometry.skinWeights.length * 4, 4 );
       this.addAttribute( 'skinWeight', skinWeights.copyVector4sArray( geometry.skinWeights ) );

     }

     //

     if ( geometry.boundingSphere !== null ) {

       this.boundingSphere = geometry.boundingSphere.clone();

     }

     if ( geometry.boundingBox !== null ) {

       this.boundingBox = geometry.boundingBox.clone();

     }

     return this;

   },

   computeBoundingSphere: function () {

     var box = new Box3();
     var vector = new Vector3();

     return function computeBoundingSphere() {

       if ( this.boundingSphere === null ) {

         this.boundingSphere = new Sphere();

       }

       var position = this.attributes.position;

       if ( position ) {

         var center = this.boundingSphere.center;

         box.setFromBufferAttribute( position );
         box.getCenter( center );

         // hoping to find a boundingSphere with a radius smaller than the
         // boundingSphere of the boundingBox: sqrt(3) smaller in the best case

         var maxRadiusSq = 0;

         for ( var i = 0, il = position.count; i < il; i ++ ) {

           vector.x = position.getX( i );
           vector.y = position.getY( i );
           vector.z = position.getZ( i );
           maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( vector ) );

         }

         this.boundingSphere.radius = Math.sqrt( maxRadiusSq );

         if ( isNaN( this.boundingSphere.radius ) ) {

           console.error( 'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this );

         }

       }

     };

   }()

 } );


 /**
  * @author mrdoob / http://mrdoob.com/
  * @author alteredq / http://alteredqualia.com/
  */

 var materialId = 0;

 function Material() {

   Object.defineProperty( this, 'id', { value: materialId ++ } );

   this.uuid = _Math.generateUUID();

   this.name = '';
   this.type = 'Material';

   this.fog = true;
   this.lights = true;

   this.blending = THREE.NormalBlending;
   this.side = THREE.FrontSide;
   this.flatShading = false;
   this.vertexColors = THREE.NoColors, THREE.VertexColors, THREE.FaceColors

   this.opacity = 1;
   this.transparent = false;

   this.blendSrc = SrcAlphaFactor;
   this.blendDst = OneMinusSrcAlphaFactor;
   this.blendEquation = AddEquation;
   this.blendSrcAlpha = null;
   this.blendDstAlpha = null;
   this.blendEquationAlpha = null;

   this.depthFunc = THREE.LessEqualDepth;
   this.depthTest = true;
   this.depthWrite = true;

   this.clippingPlanes = null;
   this.clipIntersection = false;
   this.clipShadows = false;

   this.shadowSide = null;

   this.colorWrite = true;

   this.precision = null; // override the renderer's default precision for this material

   this.polygonOffset = false;
   this.polygonOffsetFactor = 0;
   this.polygonOffsetUnits = 0;

   this.dithering = false;

   this.alphaTest = 0;
   this.premultipliedAlpha = false;

   this.visible = true;

   this.userData = {};

   this.needsUpdate = true;

 }

 Material.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {

   constructor: Material,

   isMaterial: true,

   onBeforeCompile: function () {},

   setValues: function ( values ) {

     if ( values === undefined ) return;

     for ( var key in values ) {

       var newValue = values[ key ];

       if ( newValue === undefined ) {

         console.warn( "THREE.Material: '" + key + "' parameter is undefined." );
         continue;

       }

       // for backward compatability if shading is set in the constructor
       if ( key === 'shading' ) {

         console.warn( 'THREE.' + this.type + ': .shading has been removed. Use the boolean .flatShading instead.' );
         this.flatShading = ( newValue === THREE.FlatShading ) ? true : false;
         continue;

       }

       var currentValue = this[ key ];

       if ( currentValue === undefined ) {

         console.warn( "THREE." + this.type + ": '" + key + "' is not a property of this material." );
         continue;

       }

       if ( currentValue && currentValue.isColor ) {

         currentValue.set( newValue );

       } else if ( ( currentValue && currentValue.isVector3 ) && ( newValue && newValue.isVector3 ) ) {

         currentValue.copy( newValue );

       } else {

         this[ key ] = newValue;

       }

     }

   }
 } );


 /**
  * @author bhouston / http://clara.io
  */

 function Ray( origin, direction ) {

   this.origin = ( origin !== undefined ) ? origin : new Vector3();
   this.direction = ( direction !== undefined ) ? direction : new Vector3();

 }
 Object.assign( Ray.prototype, {

   copy: function ( ray ) {

     this.origin.copy( ray.origin );
     this.direction.copy( ray.direction );

     return this;

   },

   at: function ( t, target ) {

     if ( target === undefined ) {

       console.warn( 'THREE.Ray: .at() target is now required' );
       target = new Vector3();

     }

     return target.copy( this.direction ).multiplyScalar( t ).add( this.origin );

   },

   distanceSqToPoint: function () {

     var v1 = new Vector3();

     return function distanceSqToPoint( point ) {

       var directionDistance = v1.subVectors( point, this.origin ).dot( this.direction );

       // point behind the ray

       if ( directionDistance < 0 ) {

         return this.origin.distanceToSquared( point );

       }

       v1.copy( this.direction ).multiplyScalar( directionDistance ).add( this.origin );

       return v1.distanceToSquared( point );

     };

   }(),

   intersectsSphere: function ( sphere ) {

     return this.distanceSqToPoint( sphere.center ) <= ( sphere.radius * sphere.radius );

   },

   intersectBox: function ( box, target ) {

     var tmin, tmax, tymin, tymax, tzmin, tzmax;

     var invdirx = 1 / this.direction.x,
       invdiry = 1 / this.direction.y,
       invdirz = 1 / this.direction.z;

     var origin = this.origin;

     if ( invdirx >= 0 ) {

       tmin = ( box.min.x - origin.x ) * invdirx;
       tmax = ( box.max.x - origin.x ) * invdirx;

     } else {

       tmin = ( box.max.x - origin.x ) * invdirx;
       tmax = ( box.min.x - origin.x ) * invdirx;

     }

     if ( invdiry >= 0 ) {

       tymin = ( box.min.y - origin.y ) * invdiry;
       tymax = ( box.max.y - origin.y ) * invdiry;

     } else {

       tymin = ( box.max.y - origin.y ) * invdiry;
       tymax = ( box.min.y - origin.y ) * invdiry;

     }

     if ( ( tmin > tymax ) || ( tymin > tmax ) ) return null;

     // These lines also handle the case where tmin or tmax is NaN
     // (result of 0 * Infinity). x !== x returns true if x is NaN

     if ( tymin > tmin || tmin !== tmin ) tmin = tymin;

     if ( tymax < tmax || tmax !== tmax ) tmax = tymax;

     if ( invdirz >= 0 ) {

       tzmin = ( box.min.z - origin.z ) * invdirz;
       tzmax = ( box.max.z - origin.z ) * invdirz;

     } else {

       tzmin = ( box.max.z - origin.z ) * invdirz;
       tzmax = ( box.min.z - origin.z ) * invdirz;

     }

     if ( ( tmin > tzmax ) || ( tzmin > tmax ) ) return null;

     if ( tzmin > tmin || tmin !== tmin ) tmin = tzmin;

     if ( tzmax < tmax || tmax !== tmax ) tmax = tzmax;

     //return point closest to the ray (positive side)

     if ( tmax < 0 ) return null;

     return this.at( tmin >= 0 ? tmin : tmax, target );

   },

   intersectsBox: ( function () {

     var v = new Vector3();

     return function intersectsBox( box ) {

       return this.intersectBox( box, v ) !== null;

     };

   } )(),

   intersectTriangle: function () {

     // Compute the offset origin, edges, and normal.
     var diff = new Vector3();
     var edge1 = new Vector3();
     var edge2 = new Vector3();
     var normal = new Vector3();

     return function intersectTriangle( a, b, c, backfaceCulling, target ) {

       // from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h

       edge1.subVectors( b, a );
       edge2.subVectors( c, a );
       normal.crossVectors( edge1, edge2 );

       // Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
       // E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
       //   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
       //   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
       //   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)
       var DdN = this.direction.dot( normal );
       var sign;

       if ( DdN > 0 ) {

         if ( backfaceCulling ) return null;
         sign = 1;

       } else if ( DdN < 0 ) {

         sign = - 1;
         DdN = - DdN;

       } else {

         return null;

       }

       diff.subVectors( this.origin, a );
       var DdQxE2 = sign * this.direction.dot( edge2.crossVectors( diff, edge2 ) );

       // b1 < 0, no intersection
       if ( DdQxE2 < 0 ) {

         return null;

       }

       var DdE1xQ = sign * this.direction.dot( edge1.cross( diff ) );

       // b2 < 0, no intersection
       if ( DdE1xQ < 0 ) {

         return null;

       }

       // b1+b2 > 1, no intersection
       if ( DdQxE2 + DdE1xQ > DdN ) {

         return null;

       }

       // Line intersects triangle, check if ray does.
       var QdN = - sign * diff.dot( normal );

       // t < 0, no intersection
       if ( QdN < 0 ) {

         return null;

       }

       // Ray intersects triangle.
       return this.at( QdN / DdN, target );

     };

   }(),

   applyMatrix4: function ( matrix4 ) {

     this.origin.applyMatrix4( matrix4 );
     this.direction.transformDirection( matrix4 );

     return this;

   }
 } );

 /**
  * @author bhouston / http://clara.io
  * @author mrdoob / http://mrdoob.com/
  */


 function MeshBasicMaterial( parameters ) {

   Material.call( this );

   this.type = 'MeshBasicMaterial';

   this.color = new Color( 0xffffff ); // emissive

   this.map = null;

   this.lightMap = null;
   this.lightMapIntensity = 1.0;

   this.aoMap = null;
   this.aoMapIntensity = 1.0;

   this.specularMap = null;

   this.alphaMap = null;

   this.envMap = null;
   this.combine = THREE.MultiplyOperation;
   this.reflectivity = 1;
   this.refractionRatio = 0.98;

   this.skinning = false;
   this.morphTargets = false;

   this.lights = false;

   this.setValues( parameters );

 }

 MeshBasicMaterial.prototype = Object.create( Material.prototype );
 MeshBasicMaterial.prototype.constructor = MeshBasicMaterial;

 MeshBasicMaterial.prototype.isMeshBasicMaterial = true;

 /**
  * @author mrdoob / http://mrdoob.com/
  * @author alteredq / http://alteredqualia.com/
  * @author mikael emtinger / http://gomo.se/
  * @author jonobr1 / http://jonobr1.com/
  */

 function Mesh( geometry, material ) {

   Object3D.call( this );

   this.type = 'Mesh';

   this.geometry = geometry !== undefined ? geometry : new BufferGeometry();
   this.material = material !== undefined ? material : new MeshBasicMaterial( { color: Math.random() * 0xffffff } );

   this.drawMode = THREE.TrianglesDrawMode;

   this.updateMorphTargets();

 }

 Mesh.prototype = Object.assign( Object.create( Object3D.prototype ), {

   constructor: Mesh,

   isMesh: true,

   updateMorphTargets: function () {

     var geometry = this.geometry;
     var m, ml, name;

     if ( geometry.isBufferGeometry ) {

       var morphAttributes = geometry.morphAttributes;
       var keys = Object.keys( morphAttributes );

       if ( keys.length > 0 ) {

         var morphAttribute = morphAttributes[ keys[ 0 ] ];

         if ( morphAttribute !== undefined ) {

           this.morphTargetInfluences = [];
           this.morphTargetDictionary = {};

           for ( m = 0, ml = morphAttribute.length; m < ml; m ++ ) {

             name = morphAttribute[ m ].name || String( m );

             this.morphTargetInfluences.push( 0 );
             this.morphTargetDictionary[ name ] = m;

           }

         }

       }

     } else {

       var morphTargets = geometry.morphTargets;

       if ( morphTargets !== undefined && morphTargets.length > 0 ) {

         this.morphTargetInfluences = [];
         this.morphTargetDictionary = {};

         for ( m = 0, ml = morphTargets.length; m < ml; m ++ ) {

           name = morphTargets[ m ].name || String( m );

           this.morphTargetInfluences.push( 0 );
           this.morphTargetDictionary[ name ] = m;

         }

       }

     }

   },

   raycast: ( function () {

     var inverseMatrix = new Matrix4();
     var ray = new Ray();
     var sphere = new Sphere();

     var vA = new Vector3();
     var vB = new Vector3();
     var vC = new Vector3();

     var uvA = new Vector2();
     var uvB = new Vector2();
     var uvC = new Vector2();

     var intersectionPoint = new Vector3();
     var intersectionPointWorld = new Vector3();

     function checkIntersection( object, material, raycaster, ray, pA, pB, pC, point ) {

       var intersect;

       if ( material.side === THREE.BackSide ) {

         intersect = ray.intersectTriangle( pC, pB, pA, true, point );

       } else {

         intersect = ray.intersectTriangle( pA, pB, pC, material.side !== THREE.DoubleSide, point );

       }

       if ( intersect === null ) return null;

       intersectionPointWorld.copy( point );
       intersectionPointWorld.applyMatrix4( object.matrixWorld );

       var distance = raycaster.ray.origin.distanceTo( intersectionPointWorld );

       if ( distance < raycaster.near || distance > raycaster.far ) return null;

       return {
         distance: distance,
         point: intersectionPointWorld.clone(),
         object: object
       };

     }

     return function raycast( raycaster, intersects ) {

         var geometry = this.geometry;
         var material = this.material;
         var matrixWorld = this.matrixWorld;

         if ( material === undefined ) return;

         // Checking boundingSphere distance to ray

         if ( geometry.boundingSphere === null ) geometry.computeBoundingSphere();

         sphere.copy( geometry.boundingSphere );
         sphere.applyMatrix4( matrixWorld );

         if ( raycaster.ray.intersectsSphere( sphere ) === false ) return;

         //

         inverseMatrix.getInverse( matrixWorld );
         ray.copy( raycaster.ray ).applyMatrix4( inverseMatrix );

         // Check boundingBox before continuing

         if ( geometry.boundingBox !== null ) {

           if ( ray.intersectsBox( geometry.boundingBox ) === false ) return;

         }

         var intersection;

         if ( geometry.isBufferGeometry ) {

           var a, b, c;
           var index = geometry.index;
           var position = geometry.attributes.position;
           var uv = geometry.attributes.uv;
           var groups = geometry.groups;
           var drawRange = geometry.drawRange;
           var i, j, il, jl;
           var group, groupMaterial;
           var start, end;

           if ( index !== null ) {

             // indexed buffer geometry

             if ( Array.isArray( material ) ) {

               for ( i = 0, il = groups.length; i < il; i ++ ) {

                 group = groups[ i ];
                 groupMaterial = material[ group.materialIndex ];

                 start = Math.max( group.start, drawRange.start );
                 end = Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) );

                 for ( j = start, jl = end; j < jl; j += 3 ) {

                   a = index.getX( j );
                   b = index.getX( j + 1 );
                   c = index.getX( j + 2 );

                   intersection = checkBufferGeometryIntersection( this, groupMaterial, raycaster, ray, position, uv, a, b, c );

                   if ( intersection ) {

                     intersection.faceIndex = Math.floor( j / 3 ); // triangle number in indexed buffer semantics
                     intersects.push( intersection );

                   }

                 }

               }

             } else {

               start = Math.max( 0, drawRange.start );
               end = Math.min( index.count, ( drawRange.start + drawRange.count ) );

               for ( i = start, il = end; i < il; i += 3 ) {

                 a = index.getX( i );
                 b = index.getX( i + 1 );
                 c = index.getX( i + 2 );

                 intersection = checkBufferGeometryIntersection( this, material, raycaster, ray, position, uv, a, b, c );

                 if ( intersection ) {

                   intersection.faceIndex = Math.floor( i / 3 ); // triangle number in indexed buffer semantics
                   intersects.push( intersection );

                 }

               }

             }

           } else if ( position !== undefined ) {

             // non-indexed buffer geometry

             if ( Array.isArray( material ) ) {

               for ( i = 0, il = groups.length; i < il; i ++ ) {

                 group = groups[ i ];
                 groupMaterial = material[ group.materialIndex ];

                 start = Math.max( group.start, drawRange.start );
                 end = Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) );

                 for ( j = start, jl = end; j < jl; j += 3 ) {

                   a = j;
                   b = j + 1;
                   c = j + 2;

                   intersection = checkBufferGeometryIntersection( this, groupMaterial, raycaster, ray, position, uv, a, b, c );

                   if ( intersection ) {

                     intersection.faceIndex = Math.floor( j / 3 ); // triangle number in non-indexed buffer semantics
                     intersects.push( intersection );

                   }

                 }

               }

             } else {

               start = Math.max( 0, drawRange.start );
               end = Math.min( position.count, ( drawRange.start + drawRange.count ) );

               for ( i = start, il = end; i < il; i += 3 ) {

                 a = i;
                 b = i + 1;
                 c = i + 2;

                 intersection = checkBufferGeometryIntersection( this, material, raycaster, ray, position, uv, a, b, c );

                 if ( intersection ) {

                   intersection.faceIndex = Math.floor( i / 3 ); // triangle number in non-indexed buffer semantics
                   intersects.push( intersection );

                 }

               }

             }

           }

         } else if ( geometry.isGeometry ) {

           var fvA, fvB, fvC;
           var isMultiMaterial = Array.isArray( material );

           var vertices = geometry.vertices;
           var faces = geometry.faces;
           var uvs;

           var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
           if ( faceVertexUvs.length > 0 ) uvs = faceVertexUvs;

           for ( var f = 0, fl = faces.length; f < fl; f ++ ) {

             var face = faces[ f ];
             var faceMaterial = isMultiMaterial ? material[ face.materialIndex ] : material;

             if ( faceMaterial === undefined ) continue;

             fvA = vertices[ face.a ];
             fvB = vertices[ face.b ];
             fvC = vertices[ face.c ];

             if ( faceMaterial.morphTargets === true ) {

               var morphTargets = geometry.morphTargets;
               var morphInfluences = this.morphTargetInfluences;

               vA.set( 0, 0, 0 );
               vB.set( 0, 0, 0 );
               vC.set( 0, 0, 0 );

               for ( var t = 0, tl = morphTargets.length; t < tl; t ++ ) {

                 var influence = morphInfluences[ t ];

                 if ( influence === 0 ) continue;

                 var targets = morphTargets[ t ].vertices;

                 vA.addScaledVector( tempA.subVectors( targets[ face.a ], fvA ), influence );
                 vB.addScaledVector( tempB.subVectors( targets[ face.b ], fvB ), influence );
                 vC.addScaledVector( tempC.subVectors( targets[ face.c ], fvC ), influence );

               }

               vA.add( fvA );
               vB.add( fvB );
               vC.add( fvC );

               fvA = vA;
               fvB = vB;
               fvC = vC;

             }

             intersection = checkIntersection( this, faceMaterial, raycaster, ray, fvA, fvB, fvC, intersectionPoint );

             if ( intersection ) {

               if ( uvs && uvs[ f ] ) {

                 var uvs_f = uvs[ f ];
                 uvA.copy( uvs_f[ 0 ] );
                 uvB.copy( uvs_f[ 1 ] );
                 uvC.copy( uvs_f[ 2 ] );

                 intersection.uv = THREE.Triangle.getUV( intersectionPoint, fvA, fvB, fvC, uvA, uvB, uvC, new Vector2() );

               }

               intersection.face = face;
               intersection.faceIndex = f;
               intersects.push( intersection );

             }

           }

         }

       };

     }() ),

   } );

 function WebGLUtils( gl, extensions, capabilities ) {

   function convert( p ) {

     var extension;

     if ( p === RepeatWrapping ) return 10497;
     if ( p === ClampToEdgeWrapping ) return 33071;
     if ( p === MirroredRepeatWrapping ) return 33648;

     if ( p === NearestFilter ) return 9728;
     if ( p === NearestMipMapNearestFilter ) return 9984;
     if ( p === NearestMipMapLinearFilter ) return 9986;

     if ( p === LinearFilter ) return 9729;
     if ( p === LinearMipMapNearestFilter ) return 9985;
     if ( p === LinearMipMapLinearFilter ) return 9987;

     if ( p === UnsignedByteType ) return 5121;
     if ( p === UnsignedShort4444Type ) return 32819;
     if ( p === UnsignedShort5551Type ) return 32820;
     if ( p === UnsignedShort565Type ) return 33635;

     if ( p === ByteType ) return 5120;
     if ( p === ShortType ) return 5122;
     if ( p === UnsignedShortType ) return 5123;
     if ( p === IntType ) return 5124;
     if ( p === UnsignedIntType ) return 5125;
     if ( p === FloatType ) return 5126;

     if ( p === HalfFloatType ) {

       if ( capabilities.isWebGL2 ) return 5131;

       extension = extensions.get( 'OES_texture_half_float' );

       if ( extension !== null ) return extension.HALF_FLOAT_OES;

     }

     if ( p === AlphaFormat ) return 6406;
     if ( p === RGBFormat ) return 6407;
     if ( p === RGBAFormat ) return 6408;
     if ( p === LuminanceFormat ) return 6409;
     if ( p === LuminanceAlphaFormat ) return 6410;
     if ( p === DepthFormat ) return 6402;
     if ( p === DepthStencilFormat ) return 34041;
     if ( p === RedFormat ) return 6403;

     if ( p === AddEquation ) return 32774;
     if ( p === SubtractEquation ) return 32778;
     if ( p === ReverseSubtractEquation ) return 32779;

     if ( p === ZeroFactor ) return 0;
     if ( p === OneFactor ) return 1;
     if ( p === SrcColorFactor ) return 768;
     if ( p === OneMinusSrcColorFactor ) return 769;
     if ( p === SrcAlphaFactor ) return 770;
     if ( p === OneMinusSrcAlphaFactor ) return 771;
     if ( p === DstAlphaFactor ) return 772;
     if ( p === OneMinusDstAlphaFactor ) return 773;

     if ( p === DstColorFactor ) return 774;
     if ( p === OneMinusDstColorFactor ) return 775;
     if ( p === SrcAlphaSaturateFactor ) return 776;

     if ( p === RGB_S3TC_DXT1_Format || p === RGBA_S3TC_DXT1_Format ||
       p === RGBA_S3TC_DXT3_Format || p === RGBA_S3TC_DXT5_Format ) {

       extension = extensions.get( 'WEBGL_compressed_texture_s3tc' );

       if ( extension !== null ) {

         if ( p === RGB_S3TC_DXT1_Format ) return extension.COMPRESSED_RGB_S3TC_DXT1_EXT;
         if ( p === RGBA_S3TC_DXT1_Format ) return extension.COMPRESSED_RGBA_S3TC_DXT1_EXT;
         if ( p === RGBA_S3TC_DXT3_Format ) return extension.COMPRESSED_RGBA_S3TC_DXT3_EXT;
         if ( p === RGBA_S3TC_DXT5_Format ) return extension.COMPRESSED_RGBA_S3TC_DXT5_EXT;

       }

     }

     if ( p === RGB_PVRTC_4BPPV1_Format || p === RGB_PVRTC_2BPPV1_Format ||
       p === RGBA_PVRTC_4BPPV1_Format || p === RGBA_PVRTC_2BPPV1_Format ) {

       extension = extensions.get( 'WEBGL_compressed_texture_pvrtc' );

       if ( extension !== null ) {

         if ( p === RGB_PVRTC_4BPPV1_Format ) return extension.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
         if ( p === RGB_PVRTC_2BPPV1_Format ) return extension.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
         if ( p === RGBA_PVRTC_4BPPV1_Format ) return extension.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
         if ( p === RGBA_PVRTC_2BPPV1_Format ) return extension.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;

       }

     }

     if ( p === RGB_ETC1_Format ) {

       extension = extensions.get( 'WEBGL_compressed_texture_etc1' );

       if ( extension !== null ) return extension.COMPRESSED_RGB_ETC1_WEBGL;

     }

     if ( p === RGBA_ASTC_4x4_Format || p === RGBA_ASTC_5x4_Format || p === RGBA_ASTC_5x5_Format ||
       p === RGBA_ASTC_6x5_Format || p === RGBA_ASTC_6x6_Format || p === RGBA_ASTC_8x5_Format ||
       p === RGBA_ASTC_8x6_Format || p === RGBA_ASTC_8x8_Format || p === RGBA_ASTC_10x5_Format ||
       p === RGBA_ASTC_10x6_Format || p === RGBA_ASTC_10x8_Format || p === RGBA_ASTC_10x10_Format ||
       p === RGBA_ASTC_12x10_Format || p === RGBA_ASTC_12x12_Format ) {

       extension = extensions.get( 'WEBGL_compressed_texture_astc' );

       if ( extension !== null ) {

         return p;

       }

     }

     if ( p === MinEquation || p === MaxEquation ) {

       if ( capabilities.isWebGL2 ) {

         if ( p === MinEquation ) return 32775;
         if ( p === MaxEquation ) return 32776;

       }

       extension = extensions.get( 'EXT_blend_minmax' );

       if ( extension !== null ) {

         if ( p === MinEquation ) return extension.MIN_EXT;
         if ( p === MaxEquation ) return extension.MAX_EXT;

       }

     }

     if ( p === UnsignedInt248Type ) {

       if ( capabilities.isWebGL2 ) return 34042;

       extension = extensions.get( 'WEBGL_depth_texture' );

       if ( extension !== null ) return extension.UNSIGNED_INT_24_8_WEBGL;

     }

     return 0;

   }

   return { convert: convert };

 }

 //renders scene
 function Scene() {

   Object3D.call( this );

   this.type = 'Scene';

   this.background = null;
   this.fog = null;
   this.overrideMaterial = null;

   this.autoUpdate = true; // checked by the renderer

 }

 Scene.prototype = Object.assign( Object.create( Object3D.prototype ), {

   constructor: Scene,
 } );

 /**
  * @author mrdoob / http://mrdoob.com/
  * @author alteredq / http://alteredqualia.com/
  */

  function JSONLoader( manager ) {}


 Object.assign( JSONLoader.prototype, {

 crossOrigin: 'anonymous',

 load: function ( url, onLoad, onProgress, onError ) {},
 setPath: function ( value ) {},
 setResourcePath: function ( value ) {},
 setCrossOrigin: function ( value ) {},
 parse: function () {}
 } );


 var three_module = /*#__PURE__*/Object.freeze({
   Scene: Scene,
   BufferGeometry: BufferGeometry,
   Object3D: Object3D,
   Layers: Layers,
   EventDispatcher: EventDispatcher,
   Math: _Math,
   Color: Color,
   BufferAttribute: BufferAttribute,
 });
 var COLINEAR = intersectResult('colinear');
 var PARALLEL = intersectResult('parallel');
 var NONE = intersectResult('none');
 /**
 * Check how two line segments intersect eachother. Line segments are represented
 * as (x1, y1)-(x2, y2) and (x3, y3)-(x4, y4).
 *
 *  {number} x1
 *  {number} y1
 *  {number} x2
 *  {number} y2
 *  {number} x3
 *  {number} y3
 *  {number} x4
 *  {number} y4
 * @return {object} Object describing intersection that looks like
 *    {
 *      type: none|parallel|colinear|intersecting,
 *      point: {x, y} - only defined when type == intersecting
 *    }
 */

 /**
  * @author Rich Tibbett / https://github.com/richtr
  * @author mrdoob / http://mrdoob.com/
  * @author Tony Parisi / http://www.tonyparisi.com/
  * @author Takahiro / https://github.com/takahirox
  * @author Don McCurdy / https://www.donmccurdy.com
  */




 var _GLTFLoader = ( function () {

   function GLTFLoader( manager ) {

     this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;
     this.dracoLoader = null;

   }

   GLTFLoader.prototype = {

     constructor: GLTFLoader,

     crossOrigin: 'anonymous',

     load: function ( url, onLoad, onProgress, onError ) {

       var scope = this;

       var resourcePath;

       if ( this.resourcePath !== undefined ) {

         resourcePath = this.resourcePath;

       } else if ( this.path !== undefined ) {

         resourcePath = this.path;

       } else {

         resourcePath = THREE.LoaderUtils.extractUrlBase( url );

       }

       // Tells the LoadingManager to track an extra item, which resolves after
       // the model is fully loaded. This means the count of items loaded will
       // be incorrect, but ensures manager.onLoad() does not fire early.
       scope.manager.itemStart( url );

       var _onError = function ( e ) {

         if ( onError ) {

           onError( e );

         } else {

           console.error( e );

         }

         scope.manager.itemError( url );
         scope.manager.itemEnd( url );

       };

       var loader = new THREE.FileLoader( scope.manager );

       loader.setPath( this.path );
       loader.setResponseType( 'arraybuffer' );

       loader.load( url, function ( data ) {

         try {

           scope.parse( data, resourcePath, function ( gltf ) {

             onLoad( gltf );

             scope.manager.itemEnd( url );

           }, _onError );

         } catch ( e ) {

           _onError( e );

         }

       }, onProgress, _onError );

     },

     setCrossOrigin: function ( value ) {

       this.crossOrigin = value;
       return this;

     },

     setPath: function ( value ) {

       this.path = value;
       return this;

     },

     setResourcePath: function ( value ) {

       this.resourcePath = value;
       return this;

     },

     setDRACOLoader: function ( dracoLoader ) {

       this.dracoLoader = dracoLoader;
       return this;

     },

     parse: function ( data, path, onLoad, onError ) {

       var content;
       var extensions = {};

       if ( typeof data === 'string' ) {

         content = data;

       } else {

         var magic = THREE.LoaderUtils.decodeText( new Uint8Array( data, 0, 4 ) );

         if ( magic === BINARY_EXTENSION_HEADER_MAGIC ) {

           try {

             extensions[ EXTENSIONS.KHR_BINARY_GLTF ] = new GLTFBinaryExtension( data );

           } catch ( error ) {

             if ( onError ) onError( error );
             return;

           }

           content = extensions[ EXTENSIONS.KHR_BINARY_GLTF ].content;

         } else {

           content = THREE.LoaderUtils.decodeText( new Uint8Array( data ) );

         }

       }

       var json = JSON.parse( content );

       if ( json.asset === undefined || json.asset.version[ 0 ] < 2 ) {

         if ( onError ) onError( new Error( 'THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported. Use LegacyGLTFLoader instead.' ) );
         return;

       }

       if ( json.extensionsUsed ) {

         for ( var i = 0; i < json.extensionsUsed.length; ++ i ) {

           var extensionName = json.extensionsUsed[ i ];
           var extensionsRequired = json.extensionsRequired || [];

           switch ( extensionName ) {

             case EXTENSIONS.KHR_LIGHTS_PUNCTUAL:
               extensions[ extensionName ] = new GLTFLightsExtension( json );
               break;

             case EXTENSIONS.KHR_MATERIALS_UNLIT:
               extensions[ extensionName ] = new GLTFMaterialsUnlitExtension( json );
               break;

             case EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
               extensions[ extensionName ] = new GLTFMaterialsPbrSpecularGlossinessExtension( json );
               break;

             case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
               extensions[ extensionName ] = new GLTFDracoMeshCompressionExtension( json, this.dracoLoader );
               break;

             case EXTENSIONS.MSFT_TEXTURE_DDS:
               extensions[ EXTENSIONS.MSFT_TEXTURE_DDS ] = new GLTFTextureDDSExtension( json );
               break;

             case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
               extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] = new GLTFTextureTransformExtension( json );
               break;

             default:

               if ( extensionsRequired.indexOf( extensionName ) >= 0 ) {

                 console.warn( 'THREE.GLTFLoader: Unknown extension "' + extensionName + '".' );

               }

           }

         }

       }

       var parser = new GLTFParser( json, extensions, {

         path: path || this.resourcePath || '',
         crossOrigin: this.crossOrigin,
         manager: this.manager

       } );

       parser.parse( function ( scene, scenes, cameras, animations, json ) {

         var glTF = {
           scene: scene,
           scenes: scenes,
           cameras: cameras,
           animations: animations,
           asset: json.asset,
           parser: parser,
           userData: {}
         };

         addUnknownExtensionsToUserData( extensions, glTF, json );

         onLoad( glTF );

       }, onError );

     }

   };

   /* GLTFREGISTRY */

   function GLTFRegistry() {

     var objects = {};

     return	{

       get: function ( key ) {

         return objects[ key ];

       },

       add: function ( key, object ) {

         objects[ key ] = object;

       },

       remove: function ( key ) {

         delete objects[ key ];

       },

       removeAll: function () {

         objects = {};

       }

     };

   }

   /*********************************/
   /********** EXTENSIONS ***********/
   /*********************************/

   var EXTENSIONS = {
     KHR_BINARY_GLTF: 'KHR_binary_glTF',
     KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
     KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
     KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness',
     KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
     KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
     MSFT_TEXTURE_DDS: 'MSFT_texture_dds'
   };


   function GLTFTextureDDSExtension() {}
   function GLTFLightsExtension( json ) {}
   function GLTFMaterialsUnlitExtension( json ) {}


   var BINARY_EXTENSION_HEADER_MAGIC = 'glTF';
   var BINARY_EXTENSION_HEADER_LENGTH = 12;
   var BINARY_EXTENSION_CHUNK_TYPES = { JSON: 0x4E4F534A, BIN: 0x004E4942 };

   function GLTFBinaryExtension( data ) {

     this.name = EXTENSIONS.KHR_BINARY_GLTF;
     this.content = null;
     this.body = null;

     var headerView = new DataView( data, 0, BINARY_EXTENSION_HEADER_LENGTH );

     this.header = {
       magic: THREE.LoaderUtils.decodeText( new Uint8Array( data.slice( 0, 4 ) ) ),
       version: headerView.getUint32( 4, true ),
       length: headerView.getUint32( 8, true )
     };

     if ( this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC ) {

       throw new Error( 'THREE.GLTFLoader: Unsupported glTF-Binary header.' );

     } else if ( this.header.version < 2.0 ) {

       throw new Error( 'THREE.GLTFLoader: Legacy binary file detected. Use LegacyGLTFLoader instead.' );

     }

     var chunkView = new DataView( data, BINARY_EXTENSION_HEADER_LENGTH );
     var chunkIndex = 0;

     while ( chunkIndex < chunkView.byteLength ) {

       var chunkLength = chunkView.getUint32( chunkIndex, true );
       chunkIndex += 4;

       var chunkType = chunkView.getUint32( chunkIndex, true );
       chunkIndex += 4;

       if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON ) {

         var contentArray = new Uint8Array( data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength );
         this.content = THREE.LoaderUtils.decodeText( contentArray );

       } else if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN ) {

         var byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
         this.body = data.slice( byteOffset, byteOffset + chunkLength );

       }

       // Clients must ignore chunks with unknown types.

       chunkIndex += chunkLength;

     }

     if ( this.content === null ) {

       throw new Error( 'THREE.GLTFLoader: JSON content not found.' );

     }

   }

   function GLTFDracoMeshCompressionExtension( json, dracoLoader ) {}
   function GLTFTextureTransformExtension( json ) {}
   function GLTFMaterialsPbrSpecularGlossinessExtension() {}
   function GLTFCubicSplineInterpolant( parameterPositions, sampleValues, sampleSize, resultBuffer ) {}

   /*********************************/
   /********** INTERNALS ************/
   /*********************************/

   /* CONSTANTS */

   var WEBGL_CONSTANTS = {
     FLOAT: 5126,
     //FLOAT_MAT2: 35674,
     FLOAT_MAT3: 35675,
     FLOAT_MAT4: 35676,
     FLOAT_VEC2: 35664,
     FLOAT_VEC3: 35665,
     FLOAT_VEC4: 35666,
     LINEAR: 9729,
     REPEAT: 10497,
     SAMPLER_2D: 35678,
     POINTS: 0,
     LINES: 1,
     LINE_LOOP: 2,
     LINE_STRIP: 3,
     TRIANGLES: 4,
     TRIANGLE_STRIP: 5,
     TRIANGLE_FAN: 6,
     UNSIGNED_BYTE: 5121,
     UNSIGNED_SHORT: 5123
   };

   var WEBGL_COMPONENT_TYPES = {
     5120: Int8Array,
     5121: Uint8Array,
     5122: Int16Array,
     5123: Uint16Array,
     5125: Uint32Array,
     5126: Float32Array
   };

   var WEBGL_TYPE_SIZES = {
     'SCALAR': 1,
     'VEC2': 2,
     'VEC3': 3,
     'VEC4': 4,
     'MAT2': 4,
     'MAT3': 9,
     'MAT4': 16
   };

   var ATTRIBUTES = {
     POSITION: 'position',
     NORMAL: 'normal',
     TEXCOORD_0: 'uv',
     TEXCOORD_1: 'uv2',
     COLOR_0: 'color',
     WEIGHTS_0: 'skinWeight',
     JOINTS_0: 'skinIndex',
   };

   var PATH_PROPERTIES = {
     scale: 'scale',
     translation: 'position',
     rotation: 'quaternion',
     weights: 'morphTargetInfluences'
   };

   var ALPHA_MODES = {
     OPAQUE: 'OPAQUE',
     MASK: 'MASK',
     BLEND: 'BLEND'
   };


   function resolveURL( url, path ) {}
   function createDefaultMaterial() {}
   function addUnknownExtensionsToUserData( knownExtensions, object, objectDef ) {}
   function assignExtrasToUserData( object, gltfDef ) {}
   function addMorphTargets( geometry, targets, parser ) {}
   function updateMorphTargets( mesh, meshDef ) {}
   function isPrimitiveEqual( a, b ) {}
   function isObjectEqual( a, b ) {

     if ( Object.keys( a ).length !== Object.keys( b ).length ) return false;

     for ( var key in a ) {

       if ( a[ key ] !== b[ key ] ) return false;

     }

     return true;

   }

   function isArrayEqual( a, b ) {}
   function getCachedGeometry( cache, newPrimitive ) {}
   function getCachedCombinedGeometry( cache, geometries ) {}
   function getCachedMultiPassGeometry( cache, geometry, primitives ) {

     for ( var i = 0, il = cache.length; i < il; i ++ ) {

       var cached = cache[ i ];

       if ( geometry === cached.baseGeometry && isArrayEqual( primitives, cached.primitives ) ) return cached.geometry;

     }

     return null;

   }

   /**
    * Checks if we can build a single Mesh with MultiMaterial from multiple primitives.
    * Returns true if all primitives use the same attributes/morphAttributes/mode
    * and also have index. Otherwise returns false.
    *
    *  {Array<GLTF.Primitive>} primitives
    * @return {Boolean}
    */
   function isMultiPassGeometry( primitives ) {

     if ( primitives.length < 2 ) return false;

     var primitive0 = primitives[ 0 ];
     var targets0 = primitive0.targets || [];

     if ( primitive0.indices === undefined ) return false;

     for ( var i = 1, il = primitives.length; i < il; i ++ ) {

       var primitive = primitives[ i ];

       if ( primitive0.mode !== primitive.mode ) return false;
       if ( primitive.indices === undefined ) return false;
       if ( primitive.extensions && primitive.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ] ) return false;
       if ( ! isObjectEqual( primitive0.attributes, primitive.attributes ) ) return false;

       var targets = primitive.targets || [];

       if ( targets0.length !== targets.length ) return false;

       for ( var j = 0, jl = targets0.length; j < jl; j ++ ) {

         if ( ! isObjectEqual( targets0[ j ], targets[ j ] ) ) return false;

       }

     }

     return true;

   }

   /* GLTF PARSER */

   function GLTFParser( json, extensions, options ) {

     this.json = json || {};
     this.extensions = extensions || {};
     this.options = options || {};

     // loader object cache
     this.cache = new GLTFRegistry();

     // BufferGeometry caching
     this.primitiveCache = [];
     this.multiplePrimitivesCache = [];
     this.multiPassGeometryCache = [];

     this.textureLoader = new THREE.TextureLoader( this.options.manager );
     this.textureLoader.setCrossOrigin( this.options.crossOrigin );

     this.fileLoader = new THREE.FileLoader( this.options.manager );
     this.fileLoader.setResponseType( 'arraybuffer' );

   }

   GLTFParser.prototype.parse = function ( onLoad, onError ) {

     var json = this.json;

     // Clear the loader cache
     this.cache.removeAll();

     // Mark the special nodes/meshes in json for efficient parse
     this.markDefs();

     // Fire the callback on complete
     this.getMultiDependencies( [

       'scene',
       'animation',
       'camera'

     ] ).then( function ( dependencies ) {

       var scenes = dependencies.scenes || [];
       var scene = scenes[ json.scene || 0 ];
       var animations = dependencies.animations || [];
       var cameras = dependencies.cameras || [];

       onLoad( scene, scenes, cameras, animations, json );

     } ).catch( onError );

   };

   /**
    * Marks the special nodes/meshes in json for efficient parse.
    */
   GLTFParser.prototype.markDefs = function () {

     var nodeDefs = this.json.nodes || [];
     var skinDefs = this.json.skins || [];
     var meshDefs = this.json.meshes || [];

     var meshReferences = {};
     var meshUses = {};

     // Nothing in the node definition indicates whether it is a Bone or an
     // Object3D. Use the skins' joint references to mark bones.
     for ( var skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex ++ ) {

       var joints = skinDefs[ skinIndex ].joints;

       for ( var i = 0, il = joints.length; i < il; i ++ ) {

         nodeDefs[ joints[ i ] ].isBone = true;

       }

     }

     // Meshes can (and should) be reused by multiple nodes in a glTF asset. To
     // avoid having more than one THREE.Mesh with the same name, count
     // references and rename instances below.
     //
     // Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
     for ( var nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

       var nodeDef = nodeDefs[ nodeIndex ];

       if ( nodeDef.mesh !== undefined ) {

         if ( meshReferences[ nodeDef.mesh ] === undefined ) {

           meshReferences[ nodeDef.mesh ] = meshUses[ nodeDef.mesh ] = 0;

         }

         meshReferences[ nodeDef.mesh ] ++;

         // Nothing in the mesh definition indicates whether it is
         // a SkinnedMesh or Mesh. Use the node's mesh reference
         // to mark SkinnedMesh if node has skin.
         if ( nodeDef.skin !== undefined ) {

           meshDefs[ nodeDef.mesh ].isSkinnedMesh = true;

         }

       }

     }

     this.json.meshReferences = meshReferences;
     this.json.meshUses = meshUses;

   };

   /**
    * Requests the specified dependency asynchronously, with caching.
    *  {string} type
    *  {number} index
    * @return {Promise<THREE.Object3D|THREE.Material|THREE.Texture|THREE.AnimationClip|ArrayBuffer|Object>}
    */
   GLTFParser.prototype.getDependency = function ( type, index ) {

     var cacheKey = type + ':' + index;
     var dependency = this.cache.get( cacheKey );

     if ( ! dependency ) {

       switch ( type ) {

         case 'scene':
           dependency = this.loadScene( index );
           break;

         case 'node':
           dependency = this.loadNode( index );
           break;

         case 'mesh':
           dependency = this.loadMesh( index );
           break;

         case 'accessor':
           dependency = this.loadAccessor( index );
           break;

         case 'bufferView':
           dependency = this.loadBufferView( index );
           break;

         case 'buffer':
           dependency = this.loadBuffer( index );
           break;

         case 'material':
           dependency = this.loadMaterial( index );
           break;

         case 'texture':
           dependency = this.loadTexture( index );
           break;

         case 'skin':
           dependency = this.loadSkin( index );
           break;

         case 'animation':
           dependency = this.loadAnimation( index );
           break;

         case 'camera':
           dependency = this.loadCamera( index );
           break;

         case 'light':
           dependency = this.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ].loadLight( index );
           break

         default:
           throw new Error( 'Unknown type: ' + type );

       }

       this.cache.add( cacheKey, dependency );

     }

     return dependency;

   };

   /**
    * Requests all dependencies of the specified type asynchronously, with caching.
    *  {string} type
    * @return {Promise<Array<Object>>}
    */
   GLTFParser.prototype.getDependencies = function ( type ) {

     var dependencies = this.cache.get( type );

     if ( ! dependencies ) {

       var parser = this;
       var defs = this.json[ type + ( type === 'mesh' ? 'es' : 's' ) ] || [];

       dependencies = Promise.all( defs.map( function ( def, index ) {

         return parser.getDependency( type, index );

       } ) );

       this.cache.add( type, dependencies );

     }

     return dependencies;

   };

   /**
    * Requests all multiple dependencies of the specified types asynchronously, with caching.
    *  {Array<string>} types
    * @return {Promise<Object<Array<Object>>>}
    */
   GLTFParser.prototype.getMultiDependencies = function ( types ) {

     var results = {};
     var pending = [];

     for ( var i = 0, il = types.length; i < il; i ++ ) {

       var type = types[ i ];
       var value = this.getDependencies( type );

       // TODO: Error-prone use of a callback inside a loop.
       value = value.then( function ( key, value ) {

         results[ key ] = value;

       }.bind( this, type + ( type === 'mesh' ? 'es' : 's' ) ) );

       pending.push( value );

     }

     return Promise.all( pending ).then( function () {

       return results;

     } );

   };

   /**
    * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
    *  {number} bufferIndex
    * @return {Promise<ArrayBuffer>}
    */
   GLTFParser.prototype.loadBuffer = function ( bufferIndex ) {

     var bufferDef = this.json.buffers[ bufferIndex ];
     var loader = this.fileLoader;

     if ( bufferDef.type && bufferDef.type !== 'arraybuffer' ) {

       throw new Error( 'THREE.GLTFLoader: ' + bufferDef.type + ' buffer type is not supported.' );

     }

     // If present, GLB container is required to be the first buffer.
     if ( bufferDef.uri === undefined && bufferIndex === 0 ) {

       return Promise.resolve( this.extensions[ EXTENSIONS.KHR_BINARY_GLTF ].body );

     }

     var options = this.options;

     return new Promise( function ( resolve, reject ) {

       loader.load( resolveURL( bufferDef.uri, options.path ), resolve, undefined, function () {

         reject( new Error( 'THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".' ) );

       } );

     } );

   };

   /**
    * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
    *  {number} bufferViewIndex
    * @return {Promise<ArrayBuffer>}
    */
   GLTFParser.prototype.loadBufferView = function ( bufferViewIndex ) {

     var bufferViewDef = this.json.bufferViews[ bufferViewIndex ];

     return this.getDependency( 'buffer', bufferViewDef.buffer ).then( function ( buffer ) {

       var byteLength = bufferViewDef.byteLength || 0;
       var byteOffset = bufferViewDef.byteOffset || 0;
       return buffer.slice( byteOffset, byteOffset + byteLength );

     } );

   };

   /**
    * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
    *  {number} accessorIndex
    * @return {Promise<THREE.BufferAttribute|THREE.InterleavedBufferAttribute>}
    */
   GLTFParser.prototype.loadAccessor = function ( accessorIndex ) {

     var parser = this;
     var json = this.json;

     var accessorDef = this.json.accessors[ accessorIndex ];

     if ( accessorDef.bufferView === undefined && accessorDef.sparse === undefined ) {

       // Ignore empty accessors, which may be used to declare runtime
       // information about attributes coming from another source (e.g. Draco
       // compression extension).
       return Promise.resolve( null );

     }

     var pendingBufferViews = [];

     if ( accessorDef.bufferView !== undefined ) {

       pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.bufferView ) );

     } else {

       pendingBufferViews.push( null );

     }

     if ( accessorDef.sparse !== undefined ) {

       pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.indices.bufferView ) );
       pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.values.bufferView ) );

     }

     return Promise.all( pendingBufferViews ).then( function ( bufferViews ) {

       var bufferView = bufferViews[ 0 ];

       var itemSize = WEBGL_TYPE_SIZES[ accessorDef.type ];
       var TypedArray = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

       // For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
       var elementBytes = TypedArray.BYTES_PER_ELEMENT;
       var itemBytes = elementBytes * itemSize;
       var byteOffset = accessorDef.byteOffset || 0;
       var byteStride = accessorDef.bufferView !== undefined ? json.bufferViews[ accessorDef.bufferView ].byteStride : undefined;
       var normalized = accessorDef.normalized === true;
       var array, bufferAttribute;

       // The buffer is not interleaved if the stride is the item size in bytes.
       if ( byteStride && byteStride !== itemBytes ) {

         var ibCacheKey = 'InterleavedBuffer:' + accessorDef.bufferView + ':' + accessorDef.componentType;
         var ib = parser.cache.get( ibCacheKey );

         if ( ! ib ) {

           // Use the full buffer if it's interleaved.
           array = new TypedArray( bufferView );

           // Integer parameters to IB/IBA are in array elements, not bytes.
           ib = new THREE.InterleavedBuffer( array, byteStride / elementBytes );

           parser.cache.add( ibCacheKey, ib );

         }

         bufferAttribute = new THREE.InterleavedBufferAttribute( ib, itemSize, byteOffset / elementBytes, normalized );

       } else {

         if ( bufferView === null ) {

           array = new TypedArray( accessorDef.count * itemSize );

         } else {

           array = new TypedArray( bufferView, byteOffset, accessorDef.count * itemSize );

         }

         bufferAttribute = new THREE.BufferAttribute( array, itemSize, normalized );

       }
       return bufferAttribute;

     } );

   };

   /**
    * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
    *  {number} materialIndex
    * @return {Promise<THREE.Material>}
    */
   GLTFParser.prototype.loadMaterial = function ( materialIndex ) {

     var parser = this;
     var json = this.json;
     var extensions = this.extensions;
     var materialDef = json.materials[ materialIndex ];

     var materialType;
     var materialParams = {};
     var materialExtensions = materialDef.extensions || {};

     var pending = [];

     if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ] ) {

       var sgExtension = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ];
       materialType = sgExtension.getMaterialType( materialDef );
       pending.push( sgExtension.extendParams( materialParams, materialDef, parser ) );

     } else if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ] ) {

       var kmuExtension = extensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ];
       materialType = kmuExtension.getMaterialType( materialDef );
       pending.push( kmuExtension.extendParams( materialParams, materialDef, parser ) );

     } else {

       // Specification:
       // https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material

       materialType = THREE.MeshStandardMaterial;

       var metallicRoughness = materialDef.pbrMetallicRoughness || {};

       materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
       materialParams.opacity = 1.0;

       if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

         var array = metallicRoughness.baseColorFactor;

         materialParams.color.fromArray( array );
         materialParams.opacity = array[ 3 ];

       }

       if ( metallicRoughness.baseColorTexture !== undefined ) {

         pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

       }

       materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
       materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;

       if ( metallicRoughness.metallicRoughnessTexture !== undefined ) {

         pending.push( parser.assignTexture( materialParams, 'metalnessMap', metallicRoughness.metallicRoughnessTexture ) );
         pending.push( parser.assignTexture( materialParams, 'roughnessMap', metallicRoughness.metallicRoughnessTexture ) );

       }

     }

     if ( materialDef.doubleSided === true ) {

       materialParams.side = THREE.DoubleSide;

     }

     var alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;

     if ( alphaMode === ALPHA_MODES.BLEND ) {

       materialParams.transparent = true;

     } else {

       materialParams.transparent = false;

       if ( alphaMode === ALPHA_MODES.MASK ) {

         materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;

       }

     }
     if ( materialDef.emissiveFactor !== undefined && materialType !== THREE.MeshBasicMaterial ) {

       materialParams.emissive = new THREE.Color().fromArray( materialDef.emissiveFactor );

     }

     if ( materialDef.emissiveTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

       pending.push( parser.assignTexture( materialParams, 'emissiveMap', materialDef.emissiveTexture ) );

     }

     return Promise.all( pending ).then( function () {

       var material;

       if ( materialType === THREE.ShaderMaterial ) {

         material = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].createMaterial( materialParams );

       } else {

         material = new materialType( materialParams );

       }

       if ( materialDef.name !== undefined ) material.name = materialDef.name;

       // Normal map textures use OpenGL conventions:
       // https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#materialnormaltexture
       if ( material.normalScale ) {

         material.normalScale.y = - material.normalScale.y;

       }

       // baseColorTexture, emissiveTexture, and specularGlossinessTexture use sRGB encoding.
       if ( material.map ) material.map.encoding = THREE.sRGBEncoding;
       if ( material.emissiveMap ) material.emissiveMap.encoding = THREE.sRGBEncoding;
       if ( material.specularMap ) material.specularMap.encoding = THREE.sRGBEncoding;

       assignExtrasToUserData( material, materialDef );

       if ( materialDef.extensions ) addUnknownExtensionsToUserData( extensions, material, materialDef );

       return material;

     } );

   };

   /**
    *  {THREE.BufferGeometry} geometry
    *  {GLTF.Primitive} primitiveDef
    *  {GLTFParser} parser
    * @return {Promise<THREE.BufferGeometry>}
    */
   function addPrimitiveAttributes( geometry, primitiveDef, parser ) {

     var attributes = primitiveDef.attributes;

     var pending = [];

     function assignAttributeAccessor( accessorIndex, attributeName ) {

       return parser.getDependency( 'accessor', accessorIndex )
         .then( function ( accessor ) {

           geometry.addAttribute( attributeName, accessor );

         } );

     }

     for ( var gltfAttributeName in attributes ) {

       var threeAttributeName = ATTRIBUTES[ gltfAttributeName ];

       if ( ! threeAttributeName ) continue;

       // Skip attributes already provided by e.g. Draco extension.
       if ( threeAttributeName in geometry.attributes ) continue;

       pending.push( assignAttributeAccessor( attributes[ gltfAttributeName ], threeAttributeName ) );

     }

     if ( primitiveDef.indices !== undefined && ! geometry.index ) {

       var accessor = parser.getDependency( 'accessor', primitiveDef.indices ).then( function ( accessor ) {

         geometry.setIndex( accessor );

       } );

       pending.push( accessor );

     }

     assignExtrasToUserData( geometry, primitiveDef );

     return Promise.all( pending ).then( function () {

       return primitiveDef.targets !== undefined
         ? addMorphTargets( geometry, primitiveDef.targets, parser )
         : geometry;

     } );

   }

   /**
    * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
    *
    * Creates BufferGeometries from primitives.
    * If we can build a single BufferGeometry with .groups from multiple primitives, returns one BufferGeometry.
    * Otherwise, returns BufferGeometries without .groups as many as primitives.
    *
    *  {Array<GLTF.Primitive>} primitives
    * @return {Promise<Array<THREE.BufferGeometry>>}
    */
   GLTFParser.prototype.loadGeometries = function ( primitives ) {

     var parser = this;
     var extensions = this.extensions;
     var cache = this.primitiveCache;

     var isMultiPass = isMultiPassGeometry( primitives );
     var originalPrimitives;

     if ( isMultiPass ) {

       originalPrimitives = primitives; // save original primitives and use later

       // We build a single BufferGeometry with .groups from multiple primitives
       // because all primitives share the same attributes/morph/mode and have indices.

       primitives = [ primitives[ 0 ] ];

       // Sets .groups and combined indices to a geometry later in this method.

     }

     function createDracoPrimitive( primitive ) {}

     var pending = [];

     for ( var i = 0, il = primitives.length; i < il; i ++ ) {

       var primitive = primitives[ i ];

       // See if we've already created this geometry
       var cached = getCachedGeometry( cache, primitive );

       if ( cached ) {

         // Use the cached geometry if it exists
         pending.push( cached );

       } else {

         var geometryPromise;

         if ( primitive.extensions && primitive.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ] ) {

           // Use DRACO geometry if available
           geometryPromise = createDracoPrimitive( primitive );

         } else {

           // Otherwise create a new geometry
           geometryPromise = addPrimitiveAttributes( new THREE.BufferGeometry(), primitive, parser );

         }

         // Cache this geometry
         cache.push( { primitive: primitive, promise: geometryPromise } );

         pending.push( geometryPromise );

       }

     }

     return Promise.all( pending ).then( function ( geometries ) {

       if ( isMultiPass ) {

         var baseGeometry = geometries[ 0 ];

         // See if we've already created this combined geometry
         var cache = parser.multiPassGeometryCache;
         var cached = getCachedMultiPassGeometry( cache, baseGeometry, originalPrimitives );

         if ( cached !== null ) return [ cached.geometry ];

         // Cloning geometry because of index override.
         // Attributes can be reused so cloning by myself here.
         var geometry = new THREE.BufferGeometry();

         geometry.name = baseGeometry.name;
         geometry.userData = baseGeometry.userData;

         for ( var key in baseGeometry.attributes ) geometry.addAttribute( key, baseGeometry.attributes[ key ] );
         for ( var key in baseGeometry.morphAttributes ) geometry.morphAttributes[ key ] = baseGeometry.morphAttributes[ key ];

         var pendingIndices = [];

         for ( var i = 0, il = originalPrimitives.length; i < il; i ++ ) {

           pendingIndices.push( parser.getDependency( 'accessor', originalPrimitives[ i ].indices ) );

         }

         return Promise.all( pendingIndices ).then( function ( accessors ) {

           var indices = [];
           var offset = 0;

           for ( var i = 0, il = originalPrimitives.length; i < il; i ++ ) {

             var accessor = accessors[ i ];

             for ( var j = 0, jl = accessor.count; j < jl; j ++ ) indices.push( accessor.array[ j ] );

             geometry.addGroup( offset, accessor.count, i );

             offset += accessor.count;

           }

           geometry.setIndex( indices );

           cache.push( { geometry: geometry, baseGeometry: baseGeometry, primitives: originalPrimitives } );

           return [ geometry ];

         } );

       } else if ( geometries.length > 1 && THREE.BufferGeometryUtils !== undefined ) {

         // Tries to merge geometries with BufferGeometryUtils if possible

         for ( var i = 1, il = primitives.length; i < il; i ++ ) {

           // can't merge if draw mode is different
           if ( primitives[ 0 ].mode !== primitives[ i ].mode ) return geometries;

         }

         // See if we've already created this combined geometry
         var cache = parser.multiplePrimitivesCache;
         var cached = getCachedCombinedGeometry( cache, geometries );

         if ( cached ) {

           if ( cached.geometry !== null ) return [ cached.geometry ];

         } else {

           var geometry = THREE.BufferGeometryUtils.mergeBufferGeometries( geometries, true );

           cache.push( { geometry: geometry, baseGeometries: geometries } );

           if ( geometry !== null ) return [ geometry ];

         }

       }

       return geometries;

     } );

   };

   /**
    * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
    *  {number} meshIndex
    * @return {Promise<THREE.Group|THREE.Mesh|THREE.SkinnedMesh>}
    */
   GLTFParser.prototype.loadMesh = function ( meshIndex ) {

     var parser = this;
     var json = this.json;
     var extensions = this.extensions;

     var meshDef = json.meshes[ meshIndex ];
     var primitives = meshDef.primitives;

     var pending = [];

     for ( var i = 0, il = primitives.length; i < il; i ++ ) {

       var material = primitives[ i ].material === undefined
         ? createDefaultMaterial()
         : this.getDependency( 'material', primitives[ i ].material );

       pending.push( material );

     }

     return Promise.all( pending ).then( function ( originalMaterials ) {

       return parser.loadGeometries( primitives ).then( function ( geometries ) {

         var isMultiMaterial = geometries.length === 1 && geometries[ 0 ].groups.length > 0;

         var meshes = [];

         for ( var i = 0, il = geometries.length; i < il; i ++ ) {

           var geometry = geometries[ i ];
           var primitive = primitives[ i ];

           // 1. create Mesh

           var mesh;

           var material = isMultiMaterial ? originalMaterials : originalMaterials[ i ];

           if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLES ||
             primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ||
             primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ||
             primitive.mode === undefined ) {

             // .isSkinnedMesh isn't in glTF spec. See .markDefs()
             mesh = meshDef.isSkinnedMesh === true
               ? new THREE.SkinnedMesh( geometry, material )
               : new THREE.Mesh( geometry, material );

             if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ) {

               mesh.drawMode = THREE.TriangleStripDrawMode;

             } else if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ) {

               mesh.drawMode = THREE.TriangleFanDrawMode;

             }

           } else {

             throw new Error( 'THREE.GLTFLoader: Primitive mode unsupported: ' + primitive.mode );

           }

           if ( Object.keys( mesh.geometry.morphAttributes ).length > 0 ) {

             updateMorphTargets( mesh, meshDef );

           }

           mesh.name = meshDef.name || ( 'mesh_' + meshIndex );

           if ( geometries.length > 1 ) mesh.name += '_' + i;

           assignExtrasToUserData( mesh, meshDef );

           meshes.push( mesh );

           // 2. update Material depending on Mesh and BufferGeometry

           var materials = isMultiMaterial ? mesh.material : [ mesh.material ];

           var useVertexColors = geometry.attributes.color !== undefined;
           var useFlatShading = geometry.attributes.normal === undefined;
           var useSkinning = mesh.isSkinnedMesh === true;
           var useMorphTargets = Object.keys( geometry.morphAttributes ).length > 0;
           var useMorphNormals = useMorphTargets && geometry.morphAttributes.normal !== undefined;

           mesh.material = isMultiMaterial ? materials : materials[ 0 ];

         }

         if ( meshes.length === 1 ) {

           return meshes[ 0 ];

         }

       } );

     } );

   };


   /**
    * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
    *  {number} nodeIndex
    * @return {Promise<THREE.Object3D>}
    */
   GLTFParser.prototype.loadNode = function ( nodeIndex ) {

     var json = this.json;
     var extensions = this.extensions;
     var parser = this;

     var meshReferences = json.meshReferences;
     var meshUses = json.meshUses;

     var nodeDef = json.nodes[ nodeIndex ];

     return new Promise( function ( resolve ) {

       // .isBone isn't in glTF spec. See .markDefs
       if ( nodeDef.isBone === true ) {

         resolve( new THREE.Bone() );

       } else if ( nodeDef.mesh !== undefined ) {

         parser.getDependency( 'mesh', nodeDef.mesh ).then( function ( mesh ) {

           var node;

           if ( meshReferences[ nodeDef.mesh ] > 1 ) {

             var instanceNum = meshUses[ nodeDef.mesh ] ++;

             node = mesh.clone();
             node.name += '_instance_' + instanceNum;

             // onBeforeRender copy for Specular-Glossiness
             node.onBeforeRender = mesh.onBeforeRender;

             for ( var i = 0, il = node.children.length; i < il; i ++ ) {

               node.children[ i ].name += '_instance_' + instanceNum;
               node.children[ i ].onBeforeRender = mesh.children[ i ].onBeforeRender;

             }

           } else {

             node = mesh;

           }

           resolve( node );

         } );

       } else if ( nodeDef.camera !== undefined ) {

         parser.getDependency( 'camera', nodeDef.camera ).then( resolve );

       } else if ( nodeDef.extensions
         && nodeDef.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ]
         && nodeDef.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ].light !== undefined ) {

         parser.getDependency( 'light', nodeDef.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ].light ).then( resolve );

       } else {

         resolve( new three_module.Object3D() );

       }

     } ).then( function ( node ) {

       if ( nodeDef.name !== undefined ) {

         node.name = THREE.PropertyBinding.sanitizeNodeName( nodeDef.name );

       }

       assignExtrasToUserData( node, nodeDef );

       if ( nodeDef.extensions ) addUnknownExtensionsToUserData( extensions, node, nodeDef );

       if ( nodeDef.matrix !== undefined ) {

         var matrix = new THREE.Matrix4();
         matrix.fromArray( nodeDef.matrix );
         node.applyMatrix( matrix );

       } else {

         if ( nodeDef.translation !== undefined ) {

           node.position.fromArray( nodeDef.translation );

         }

         if ( nodeDef.rotation !== undefined ) {

           node.quaternion.fromArray( nodeDef.rotation );

         }

         if ( nodeDef.scale !== undefined ) {

           node.scale.fromArray( nodeDef.scale );

         }

       }

       return node;

     } );

   };

   /**
    * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
    *  {number} sceneIndex
    * @return {Promise<THREE.Scene>}
    */
   GLTFParser.prototype.loadScene = function () {

     // scene node hierachy builder

     function buildNodeHierachy( nodeId, parentObject, json, parser ) {

       var nodeDef = json.nodes[ nodeId ];

       return parser.getDependency( 'node', nodeId ).then( function ( node ) {

         if ( nodeDef.skin === undefined ) return node;

       } ).then( function ( node ) {

         // build node hierachy

         parentObject.add( node );

         var pending = [];

         if ( nodeDef.children ) {

           var children = nodeDef.children;

           for ( var i = 0, il = children.length; i < il; i ++ ) {

             var child = children[ i ];
             pending.push( buildNodeHierachy( child, node, json, parser ) );

           }

         }

         return Promise.all( pending );

       } );

     }

     return function loadScene( sceneIndex ) {

       var json = this.json;
       var extensions = this.extensions;
       var sceneDef = this.json.scenes[ sceneIndex ];
       var parser = this;

       var scene = new THREE.Scene();
       if ( sceneDef.name !== undefined ) scene.name = sceneDef.name;

       assignExtrasToUserData( scene, sceneDef );

       if ( sceneDef.extensions ) addUnknownExtensionsToUserData( extensions, scene, sceneDef );

       var nodeIds = sceneDef.nodes || [];

       var pending = [];

       for ( var i = 0, il = nodeIds.length; i < il; i ++ ) {

         pending.push( buildNodeHierachy( nodeIds[ i ], scene, json, parser ) );

       }

       return Promise.all( pending ).then( function () {

         return scene;

       } );

     };

   }();

   return GLTFLoader;

 } )();

 var threeGltfLoader = _GLTFLoader;

 var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

 function createCommonjsModule(fn, module) {
   return module = { exports: {} }, fn(module, module.exports), module.exports;
 }


 var threeObjloader = createCommonjsModule(function (module, exports) {
 /**
 * @author mrdoob / http://mrdoob.com/
 */

 const OBJLoader = ( function () {
 function OBJLoader( manager ) {

   this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

   this.materials = null;

 }
 return OBJLoader;
 } )();

 module.exports = exports.default = OBJLoader;
 });
 function checkIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
 var denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
 var numeA = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
 var numeB = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);

 if (denom == 0) {
   if (numeA == 0 && numeB == 0) {
     return COLINEAR;
   }

   return PARALLEL;
 }

 var uA = numeA / denom;
 var uB = numeB / denom;

 if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
   return intersecting({
     x: x1 + uA * (x2 - x1),
     y: y1 + uA * (y2 - y1)
   });
 }

 return NONE;
 }

 function intersecting(point) {
 var result = intersectResult('intersecting');
 result.point = point;
 return result;
 }

 function intersectResult(type) {
 return {
   type: type
 };
 }

 function Vector2_copy( x, y ) {

 this.x = x || 0;
 this.y = y || 0;

 }

 Object.defineProperties( Vector2_copy.prototype, {

 "width": {

   get: function () {

     return this.x;

   },

   set: function ( value ) {

     this.x = value;

   }

 },

 "height": {

   get: function () {

     return this.y;

   },

   set: function ( value ) {

     this.y = value;

   }

 }

 } );

 Object.assign( Vector2_copy.prototype, {

 isVector2: true,

 set: function ( x, y ) {

   this.x = x;
   this.y = y;

   return this;

 },

 setScalar: function ( scalar ) {

   this.x = scalar;
   this.y = scalar;

   return this;

 },

 setX: function ( x ) {

   this.x = x;

   return this;

 },

 setY: function ( y ) {

   this.y = y;

   return this;

 },

 setComponent: function ( index, value ) {

   switch ( index ) {

     case 0: this.x = value; break;
     case 1: this.y = value; break;
     default: throw new Error( 'index is out of range: ' + index );

   }

   return this;

 },

 getComponent: function ( index ) {

   switch ( index ) {

     case 0: return this.x;
     case 1: return this.y;
     default: throw new Error( 'index is out of range: ' + index );

   }

 },

 clone: function () {

   return new this.constructor( this.x, this.y );

 },

 copy: function ( v ) {

   this.x = v.x;
   this.y = v.y;

   return this;

 },

 add: function ( v, w ) {

   if ( w !== undefined ) {

     console.warn( 'THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
     return this.addVectors( v, w );

   }

   this.x += v.x;
   this.y += v.y;

   return this;

 },

 addScalar: function ( s ) {

   this.x += s;
   this.y += s;

   return this;

 },

 addVectors: function ( a, b ) {

   this.x = a.x + b.x;
   this.y = a.y + b.y;

   return this;

 },

 addScaledVector: function ( v, s ) {

   this.x += v.x * s;
   this.y += v.y * s;

   return this;

 },

 sub: function ( v, w ) {

   if ( w !== undefined ) {

     console.warn( 'THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
     return this.subVectors( v, w );

   }

   this.x -= v.x;
   this.y -= v.y;

   return this;

 },

 subScalar: function ( s ) {

   this.x -= s;
   this.y -= s;

   return this;

 },

 subVectors: function ( a, b ) {

   this.x = a.x - b.x;
   this.y = a.y - b.y;

   return this;

 },

 multiply: function ( v ) {

   this.x *= v.x;
   this.y *= v.y;

   return this;

 },

 multiplyScalar: function ( scalar ) {

   this.x *= scalar;
   this.y *= scalar;

   return this;

 },

 divide: function ( v ) {

   this.x /= v.x;
   this.y /= v.y;

   return this;

 },

 divideScalar: function ( scalar ) {

   return this.multiplyScalar( 1 / scalar );

 },

 applyMatrix3: function ( m ) {

   var x = this.x, y = this.y;
   var e = m.elements;

   this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ];
   this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ];

   return this;

 },

 min: function ( v ) {

   this.x = Math.min( this.x, v.x );
   this.y = Math.min( this.y, v.y );

   return this;

 },

 max: function ( v ) {

   this.x = Math.max( this.x, v.x );
   this.y = Math.max( this.y, v.y );

   return this;

 },

 clamp: function ( min, max ) {

   // assumes min < max, componentwise

   this.x = Math.max( min.x, Math.min( max.x, this.x ) );
   this.y = Math.max( min.y, Math.min( max.y, this.y ) );

   return this;

 },

 clampScalar: function () {

   var min = new Vector2_copy();
   var max = new Vector2_copy();

   return function clampScalar( minVal, maxVal ) {

     min.set( minVal, minVal );
     max.set( maxVal, maxVal );

     return this.clamp( min, max );

   };

 }(),

 clampLength: function ( min, max ) {

   var length = this.length();

   return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

 },

 floor: function () {

   this.x = Math.floor( this.x );
   this.y = Math.floor( this.y );

   return this;

 },

 ceil: function () {

   this.x = Math.ceil( this.x );
   this.y = Math.ceil( this.y );

   return this;

 },

 round: function () {

   this.x = Math.round( this.x );
   this.y = Math.round( this.y );

   return this;

 },

 roundToZero: function () {

   this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
   this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );

   return this;

 },

 negate: function () {

   this.x = - this.x;
   this.y = - this.y;

   return this;

 },

 dot: function ( v ) {

   return this.x * v.x + this.y * v.y;

 },

 cross: function ( v ) {

   return this.x * v.y - this.y * v.x;

 },

 lengthSq: function () {

   return this.x * this.x + this.y * this.y;

 },

 length: function () {

   return Math.sqrt( this.x * this.x + this.y * this.y );

 },

 manhattanLength: function () {

   return Math.abs( this.x ) + Math.abs( this.y );

 },

 normalize: function () {

   return this.divideScalar( this.length() || 1 );

 },

 angle: function () {

   // computes the angle in radians with respect to the positive x-axis

   var angle = Math.atan2( this.y, this.x );

   if ( angle < 0 ) angle += 2 * Math.PI;

   return angle;

 },

 distanceTo: function ( v ) {

   return Math.sqrt( this.distanceToSquared( v ) );

 },

 distanceToSquared: function ( v ) {

   var dx = this.x - v.x, dy = this.y - v.y;
   return dx * dx + dy * dy;

 },

 manhattanDistanceTo: function ( v ) {

   return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y );

 },

 setLength: function ( length ) {

   return this.normalize().multiplyScalar( length );

 },

 lerp: function ( v, alpha ) {

   this.x += ( v.x - this.x ) * alpha;
   this.y += ( v.y - this.y ) * alpha;

   return this;

 },

 lerpVectors: function ( v1, v2, alpha ) {

   return this.subVectors( v2, v1 ).multiplyScalar( alpha ).add( v1 );

 },

 equals: function ( v ) {

   return ( ( v.x === this.x ) && ( v.y === this.y ) );

 },

 fromArray: function ( array, offset ) {

   if ( offset === undefined ) offset = 0;

   this.x = array[ offset ];
   this.y = array[ offset + 1 ];

   return this;

 },

 toArray: function ( array, offset ) {

   if ( array === undefined ) array = [];
   if ( offset === undefined ) offset = 0;

   array[ offset ] = this.x;
   array[ offset + 1 ] = this.y;

   return array;

 },

 fromBufferAttribute: function ( attribute, index, offset ) {

   if ( offset !== undefined ) {

     console.warn( 'THREE.Vector2: offset has been removed from .fromBufferAttribute().' );

   }

   this.x = attribute.getX( index );
   this.y = attribute.getY( index );

   return this;

 },

 rotateAround: function ( center, angle ) {

   var c = Math.cos( angle ), s = Math.sin( angle );

   var x = this.x - center.x;
   var y = this.y - center.y;

   this.x = x * c - y * s + center.x;
   this.y = x * s + y * c + center.y;

   return this;

 }

 } );

 function Matrix4() {

 this.elements = [

   1, 0, 0, 0,
   0, 1, 0, 0,
   0, 0, 1, 0,
   0, 0, 0, 1

 ];

 if ( arguments.length > 0 ) {

   console.error( 'THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.' );

 }

 }

 Object.assign( Matrix4.prototype, {

 isMatrix4: true,

 set: function ( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

   var te = this.elements;

   te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
   te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
   te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
   te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

   return this;

 },

 identity: function () {

   this.set(

     1, 0, 0, 0,
     0, 1, 0, 0,
     0, 0, 1, 0,
     0, 0, 0, 1

   );

   return this;

 },

 clone: function () {

   return new Matrix4().fromArray( this.elements );

 },

 copy: function ( m ) {

   var te = this.elements;
   var me = m.elements;

   te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ]; te[ 3 ] = me[ 3 ];
   te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ]; te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ];
   te[ 8 ] = me[ 8 ]; te[ 9 ] = me[ 9 ]; te[ 10 ] = me[ 10 ]; te[ 11 ] = me[ 11 ];
   te[ 12 ] = me[ 12 ]; te[ 13 ] = me[ 13 ]; te[ 14 ] = me[ 14 ]; te[ 15 ] = me[ 15 ];

   return this;

 },

 copyPosition: function ( m ) {

   var te = this.elements, me = m.elements;

   te[ 12 ] = me[ 12 ];
   te[ 13 ] = me[ 13 ];
   te[ 14 ] = me[ 14 ];

   return this;

 },

 extractBasis: function ( xAxis, yAxis, zAxis ) {

   xAxis.setFromMatrixColumn( this, 0 );
   yAxis.setFromMatrixColumn( this, 1 );
   zAxis.setFromMatrixColumn( this, 2 );

   return this;

 },

 makeBasis: function ( xAxis, yAxis, zAxis ) {

   this.set(
     xAxis.x, yAxis.x, zAxis.x, 0,
     xAxis.y, yAxis.y, zAxis.y, 0,
     xAxis.z, yAxis.z, zAxis.z, 0,
     0, 0, 0, 1
   );

   return this;

 },

 extractRotation: function () {

   var v1 = new Vector3();

   return function extractRotation( m ) {

     // this method does not support reflection matrices

     var te = this.elements;
     var me = m.elements;

     var scaleX = 1 / v1.setFromMatrixColumn( m, 0 ).length();
     var scaleY = 1 / v1.setFromMatrixColumn( m, 1 ).length();
     var scaleZ = 1 / v1.setFromMatrixColumn( m, 2 ).length();

     te[ 0 ] = me[ 0 ] * scaleX;
     te[ 1 ] = me[ 1 ] * scaleX;
     te[ 2 ] = me[ 2 ] * scaleX;
     te[ 3 ] = 0;

     te[ 4 ] = me[ 4 ] * scaleY;
     te[ 5 ] = me[ 5 ] * scaleY;
     te[ 6 ] = me[ 6 ] * scaleY;
     te[ 7 ] = 0;

     te[ 8 ] = me[ 8 ] * scaleZ;
     te[ 9 ] = me[ 9 ] * scaleZ;
     te[ 10 ] = me[ 10 ] * scaleZ;
     te[ 11 ] = 0;

     te[ 12 ] = 0;
     te[ 13 ] = 0;
     te[ 14 ] = 0;
     te[ 15 ] = 1;

     return this;

   };

 }(),

 makeRotationFromEuler: function ( euler ) {

   if ( ! ( euler && euler.isEuler ) ) {

     console.error( 'THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.' );

   }

   var te = this.elements;

   var x = euler.x, y = euler.y, z = euler.z;
   var a = Math.cos( x ), b = Math.sin( x );
   var c = Math.cos( y ), d = Math.sin( y );
   var e = Math.cos( z ), f = Math.sin( z );

   if ( euler.order === 'XYZ' ) {

     var ae = a * e, af = a * f, be = b * e, bf = b * f;

     te[ 0 ] = c * e;
     te[ 4 ] = - c * f;
     te[ 8 ] = d;

     te[ 1 ] = af + be * d;
     te[ 5 ] = ae - bf * d;
     te[ 9 ] = - b * c;

     te[ 2 ] = bf - ae * d;
     te[ 6 ] = be + af * d;
     te[ 10 ] = a * c;

   } else if ( euler.order === 'YXZ' ) {

     var ce = c * e, cf = c * f, de = d * e, df = d * f;

     te[ 0 ] = ce + df * b;
     te[ 4 ] = de * b - cf;
     te[ 8 ] = a * d;

     te[ 1 ] = a * f;
     te[ 5 ] = a * e;
     te[ 9 ] = - b;

     te[ 2 ] = cf * b - de;
     te[ 6 ] = df + ce * b;
     te[ 10 ] = a * c;

   } else if ( euler.order === 'ZXY' ) {

     var ce = c * e, cf = c * f, de = d * e, df = d * f;

     te[ 0 ] = ce - df * b;
     te[ 4 ] = - a * f;
     te[ 8 ] = de + cf * b;

     te[ 1 ] = cf + de * b;
     te[ 5 ] = a * e;
     te[ 9 ] = df - ce * b;

     te[ 2 ] = - a * d;
     te[ 6 ] = b;
     te[ 10 ] = a * c;

   } else if ( euler.order === 'ZYX' ) {

     var ae = a * e, af = a * f, be = b * e, bf = b * f;

     te[ 0 ] = c * e;
     te[ 4 ] = be * d - af;
     te[ 8 ] = ae * d + bf;

     te[ 1 ] = c * f;
     te[ 5 ] = bf * d + ae;
     te[ 9 ] = af * d - be;

     te[ 2 ] = - d;
     te[ 6 ] = b * c;
     te[ 10 ] = a * c;

   } else if ( euler.order === 'YZX' ) {

     var ac = a * c, ad = a * d, bc = b * c, bd = b * d;

     te[ 0 ] = c * e;
     te[ 4 ] = bd - ac * f;
     te[ 8 ] = bc * f + ad;

     te[ 1 ] = f;
     te[ 5 ] = a * e;
     te[ 9 ] = - b * e;

     te[ 2 ] = - d * e;
     te[ 6 ] = ad * f + bc;
     te[ 10 ] = ac - bd * f;

   } else if ( euler.order === 'XZY' ) {

     var ac = a * c, ad = a * d, bc = b * c, bd = b * d;

     te[ 0 ] = c * e;
     te[ 4 ] = - f;
     te[ 8 ] = d * e;

     te[ 1 ] = ac * f + bd;
     te[ 5 ] = a * e;
     te[ 9 ] = ad * f - bc;

     te[ 2 ] = bc * f - ad;
     te[ 6 ] = b * e;
     te[ 10 ] = bd * f + ac;

   }

   // bottom row
   te[ 3 ] = 0;
   te[ 7 ] = 0;
   te[ 11 ] = 0;

   // last column
   te[ 12 ] = 0;
   te[ 13 ] = 0;
   te[ 14 ] = 0;
   te[ 15 ] = 1;

   return this;

 },

 makeRotationFromQuaternion: function () {

   var zero = new Vector3( 0, 0, 0 );
   var one = new Vector3( 1, 1, 1 );

   return function makeRotationFromQuaternion( q ) {

     return this.compose( zero, q, one );

   };

 }(),

 lookAt: function () {

   var x = new Vector3();
   var y = new Vector3();
   var z = new Vector3();

   return function lookAt( eye, target, up ) {

     var te = this.elements;

     z.subVectors( eye, target );

     if ( z.lengthSq() === 0 ) {

       // eye and target are in the same position

       z.z = 1;

     }

     z.normalize();
     x.crossVectors( up, z );

     if ( x.lengthSq() === 0 ) {

       // up and z are parallel

       if ( Math.abs( up.z ) === 1 ) {

         z.x += 0.0001;

       } else {

         z.z += 0.0001;

       }

       z.normalize();
       x.crossVectors( up, z );

     }

     x.normalize();
     y.crossVectors( z, x );

     te[ 0 ] = x.x; te[ 4 ] = y.x; te[ 8 ] = z.x;
     te[ 1 ] = x.y; te[ 5 ] = y.y; te[ 9 ] = z.y;
     te[ 2 ] = x.z; te[ 6 ] = y.z; te[ 10 ] = z.z;

     return this;

   };

 }(),

 multiply: function ( m, n ) {

   if ( n !== undefined ) {

     console.warn( 'THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.' );
     return this.multiplyMatrices( m, n );

   }

   return this.multiplyMatrices( this, m );

 },

 premultiply: function ( m ) {

   return this.multiplyMatrices( m, this );

 },

 multiplyMatrices: function ( a, b ) {

   var ae = a.elements;
   var be = b.elements;
   var te = this.elements;

   var a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
   var a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
   var a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
   var a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

   var b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
   var b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
   var b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
   var b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

   te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
   te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
   te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
   te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

   te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
   te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
   te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
   te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

   te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
   te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
   te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
   te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

   te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
   te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
   te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
   te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

   return this;

 },

 multiplyScalar: function ( s ) {

   var te = this.elements;

   te[ 0 ] *= s; te[ 4 ] *= s; te[ 8 ] *= s; te[ 12 ] *= s;
   te[ 1 ] *= s; te[ 5 ] *= s; te[ 9 ] *= s; te[ 13 ] *= s;
   te[ 2 ] *= s; te[ 6 ] *= s; te[ 10 ] *= s; te[ 14 ] *= s;
   te[ 3 ] *= s; te[ 7 ] *= s; te[ 11 ] *= s; te[ 15 ] *= s;

   return this;

 },

 applyToBufferAttribute: function () {

   var v1 = new Vector3();

   return function applyToBufferAttribute( attribute ) {

     for ( var i = 0, l = attribute.count; i < l; i ++ ) {

       v1.x = attribute.getX( i );
       v1.y = attribute.getY( i );
       v1.z = attribute.getZ( i );

       v1.applyMatrix4( this );

       attribute.setXYZ( i, v1.x, v1.y, v1.z );

     }

     return attribute;

   };

 }(),

 determinant: function () {

   var te = this.elements;

   var n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
   var n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
   var n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
   var n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

   //( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

   return (
     n41 * (
       + n14 * n23 * n32
        - n13 * n24 * n32
        - n14 * n22 * n33
        + n12 * n24 * n33
        + n13 * n22 * n34
        - n12 * n23 * n34
     ) +
     n42 * (
       + n11 * n23 * n34
        - n11 * n24 * n33
        + n14 * n21 * n33
        - n13 * n21 * n34
        + n13 * n24 * n31
        - n14 * n23 * n31
     ) +
     n43 * (
       + n11 * n24 * n32
        - n11 * n22 * n34
        - n14 * n21 * n32
        + n12 * n21 * n34
        + n14 * n22 * n31
        - n12 * n24 * n31
     ) +
     n44 * (
       - n13 * n22 * n31
        - n11 * n23 * n32
        + n11 * n22 * n33
        + n13 * n21 * n32
        - n12 * n21 * n33
        + n12 * n23 * n31
     )

   );

 },

 transpose: function () {

   var te = this.elements;
   var tmp;

   tmp = te[ 1 ]; te[ 1 ] = te[ 4 ]; te[ 4 ] = tmp;
   tmp = te[ 2 ]; te[ 2 ] = te[ 8 ]; te[ 8 ] = tmp;
   tmp = te[ 6 ]; te[ 6 ] = te[ 9 ]; te[ 9 ] = tmp;

   tmp = te[ 3 ]; te[ 3 ] = te[ 12 ]; te[ 12 ] = tmp;
   tmp = te[ 7 ]; te[ 7 ] = te[ 13 ]; te[ 13 ] = tmp;
   tmp = te[ 11 ]; te[ 11 ] = te[ 14 ]; te[ 14 ] = tmp;

   return this;

 },

 setPosition: function ( v ) {

   var te = this.elements;

   te[ 12 ] = v.x;
   te[ 13 ] = v.y;
   te[ 14 ] = v.z;

   return this;

 },

 getInverse: function ( m, throwOnDegenerate ) {

   // based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
   var te = this.elements,
     me = m.elements,

     n11 = me[ 0 ], n21 = me[ 1 ], n31 = me[ 2 ], n41 = me[ 3 ],
     n12 = me[ 4 ], n22 = me[ 5 ], n32 = me[ 6 ], n42 = me[ 7 ],
     n13 = me[ 8 ], n23 = me[ 9 ], n33 = me[ 10 ], n43 = me[ 11 ],
     n14 = me[ 12 ], n24 = me[ 13 ], n34 = me[ 14 ], n44 = me[ 15 ],

     t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
     t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
     t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
     t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

   var det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

   if ( det === 0 ) {

     var msg = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";

     if ( throwOnDegenerate === true ) {

       throw new Error( msg );

     } else {

       console.warn( msg );

     }

     return this.identity();

   }

   var detInv = 1 / det;

   te[ 0 ] = t11 * detInv;
   te[ 1 ] = ( n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44 ) * detInv;
   te[ 2 ] = ( n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44 ) * detInv;
   te[ 3 ] = ( n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43 ) * detInv;

   te[ 4 ] = t12 * detInv;
   te[ 5 ] = ( n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44 ) * detInv;
   te[ 6 ] = ( n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44 ) * detInv;
   te[ 7 ] = ( n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43 ) * detInv;

   te[ 8 ] = t13 * detInv;
   te[ 9 ] = ( n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44 ) * detInv;
   te[ 10 ] = ( n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44 ) * detInv;
   te[ 11 ] = ( n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43 ) * detInv;

   te[ 12 ] = t14 * detInv;
   te[ 13 ] = ( n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34 ) * detInv;
   te[ 14 ] = ( n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34 ) * detInv;
   te[ 15 ] = ( n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33 ) * detInv;

   return this;

 },

 scale: function ( v ) {

   var te = this.elements;
   var x = v.x, y = v.y, z = v.z;

   te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
   te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
   te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
   te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

   return this;

 },

 getMaxScaleOnAxis: function () {

   var te = this.elements;

   var scaleXSq = te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] + te[ 2 ] * te[ 2 ];
   var scaleYSq = te[ 4 ] * te[ 4 ] + te[ 5 ] * te[ 5 ] + te[ 6 ] * te[ 6 ];
   var scaleZSq = te[ 8 ] * te[ 8 ] + te[ 9 ] * te[ 9 ] + te[ 10 ] * te[ 10 ];

   return Math.sqrt( Math.max( scaleXSq, scaleYSq, scaleZSq ) );

 },

 makeTranslation: function ( x, y, z ) {

   this.set(

     1, 0, 0, x,
     0, 1, 0, y,
     0, 0, 1, z,
     0, 0, 0, 1

   );

   return this;

 },

 makeRotationX: function ( theta ) {

   var c = Math.cos( theta ), s = Math.sin( theta );

   this.set(

     1, 0, 0, 0,
     0, c, - s, 0,
     0, s, c, 0,
     0, 0, 0, 1

   );

   return this;

 },

 makeRotationY: function ( theta ) {

   var c = Math.cos( theta ), s = Math.sin( theta );

   this.set(

      c, 0, s, 0,
      0, 1, 0, 0,
     - s, 0, c, 0,
      0, 0, 0, 1

   );

   return this;

 },

 makeRotationZ: function ( theta ) {

   var c = Math.cos( theta ), s = Math.sin( theta );

   this.set(

     c, - s, 0, 0,
     s, c, 0, 0,
     0, 0, 1, 0,
     0, 0, 0, 1

   );

   return this;

 },

 makeRotationAxis: function ( axis, angle ) {

   // Based on http://www.gamedev.net/reference/articles/article1199.asp

   var c = Math.cos( angle );
   var s = Math.sin( angle );
   var t = 1 - c;
   var x = axis.x, y = axis.y, z = axis.z;
   var tx = t * x, ty = t * y;

   this.set(

     tx * x + c, tx * y - s * z, tx * z + s * y, 0,
     tx * y + s * z, ty * y + c, ty * z - s * x, 0,
     tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
     0, 0, 0, 1

   );

    return this;

 },

 makeScale: function ( x, y, z ) {

   this.set(

     x, 0, 0, 0,
     0, y, 0, 0,
     0, 0, z, 0,
     0, 0, 0, 1

   );

   return this;

 },

 makeShear: function ( x, y, z ) {

   this.set(

     1, y, z, 0,
     x, 1, z, 0,
     x, y, 1, 0,
     0, 0, 0, 1

   );

   return this;

 },

 compose: function ( position, quaternion, scale ) {

   var te = this.elements;

   var x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
   var x2 = x + x,	y2 = y + y, z2 = z + z;
   var xx = x * x2, xy = x * y2, xz = x * z2;
   var yy = y * y2, yz = y * z2, zz = z * z2;
   var wx = w * x2, wy = w * y2, wz = w * z2;

   var sx = scale.x, sy = scale.y, sz = scale.z;

         te[ 0 ] = ( 1 - ( yy + zz ) ) * sx;
         te[ 1 ] = ( xy + wz ) * sx;
         te[ 2 ] = ( xz - wy ) * sx;
         te[ 3 ] = 0;

         te[ 4 ] = ( xy - wz ) * sy;
         te[ 5 ] = ( 1 - ( xx + zz ) ) * sy;
         te[ 6 ] = ( yz + wx ) * sy;
         te[ 7 ] = 0;

         te[ 8 ] = ( xz + wy ) * sz;
         te[ 9 ] = ( yz - wx ) * sz;
         te[ 10 ] = ( 1 - ( xx + yy ) ) * sz;
         te[ 11 ] = 0;

         te[ 12 ] = position.x;
         te[ 13 ] = position.y;
         te[ 14 ] = position.z;
         te[ 15 ] = 1;

         return this;

 },

 decompose: function () {

   var vector = new Vector3();
   var matrix = new Matrix4();

   return function decompose( position, quaternion, scale ) {

     var te = this.elements;

     var sx = vector.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
     var sy = vector.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
     var sz = vector.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

     // if determine is negative, we need to invert one scale
     var det = this.determinant();
     if ( det < 0 ) sx = - sx;

     position.x = te[ 12 ];
     position.y = te[ 13 ];
     position.z = te[ 14 ];

     // scale the rotation part
     matrix.copy( this );

     var invSX = 1 / sx;
     var invSY = 1 / sy;
     var invSZ = 1 / sz;

     matrix.elements[ 0 ] *= invSX;
     matrix.elements[ 1 ] *= invSX;
     matrix.elements[ 2 ] *= invSX;

     matrix.elements[ 4 ] *= invSY;
     matrix.elements[ 5 ] *= invSY;
     matrix.elements[ 6 ] *= invSY;

     matrix.elements[ 8 ] *= invSZ;
     matrix.elements[ 9 ] *= invSZ;
     matrix.elements[ 10 ] *= invSZ;

     quaternion.setFromRotationMatrix( matrix );

     scale.x = sx;
     scale.y = sy;
     scale.z = sz;

     return this;

   };

 }(),

 makePerspective: function ( left, right, top, bottom, near, far ) {

   if ( far === undefined ) {

     console.warn( 'THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.' );

   }

   var te = this.elements;
   var x = 2 * near / ( right - left );
   var y = 2 * near / ( top - bottom );

   var a = ( right + left ) / ( right - left );
   var b = ( top + bottom ) / ( top - bottom );
   var c = - ( far + near ) / ( far - near );
   var d = - 2 * far * near / ( far - near );

   te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a;	te[ 12 ] = 0;
   te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b;	te[ 13 ] = 0;
   te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c;	te[ 14 ] = d;
   te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = - 1;	te[ 15 ] = 0;

   return this;

 },

 equals: function ( matrix ) {

   var te = this.elements;
   var me = matrix.elements;

   for ( var i = 0; i < 16; i ++ ) {

     if ( te[ i ] !== me[ i ] ) return false;

   }

   return true;

 },

 fromArray: function ( array, offset ) {

   if ( offset === undefined ) offset = 0;

   for ( var i = 0; i < 16; i ++ ) {

     this.elements[ i ] = array[ i + offset ];

   }

   return this;

 },

 toArray: function ( array, offset ) {

   if ( array === undefined ) array = [];
   if ( offset === undefined ) offset = 0;

   var te = this.elements;

   array[ offset ] = te[ 0 ];
   array[ offset + 1 ] = te[ 1 ];
   array[ offset + 2 ] = te[ 2 ];
   array[ offset + 3 ] = te[ 3 ];

   array[ offset + 4 ] = te[ 4 ];
   array[ offset + 5 ] = te[ 5 ];
   array[ offset + 6 ] = te[ 6 ];
   array[ offset + 7 ] = te[ 7 ];

   array[ offset + 8 ] = te[ 8 ];
   array[ offset + 9 ] = te[ 9 ];
   array[ offset + 10 ] = te[ 10 ];
   array[ offset + 11 ] = te[ 11 ];

   array[ offset + 12 ] = te[ 12 ];
   array[ offset + 13 ] = te[ 13 ];
   array[ offset + 14 ] = te[ 14 ];
   array[ offset + 15 ] = te[ 15 ];

   return array;

 }

 } );

 function Vector3( x, y, z ) {

 this.x = x || 0;
 this.y = y || 0;
 this.z = z || 0;

 }

 /**
 modified version of THREE.OrbitControls
 Contributors:
  * @author qiao / https://github.com/qiao
  * @author mrdoob / http://mrdoob.com
  * @author alteredq / http://alteredqualia.com/
  * @author WestLangley / http://github.com/WestLangley
  * @author erich666 / http://erichaines.com
  */


 // This set of controls performs orbiting, dollying (zooming), and panning.
 // Unlike TrackballControls, it maintains the "up" direction object.up (+Y by
 // default).

 // Orbit - left mouse / touch: one-finger move
 // Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
 // Pan - right mouse, or left mouse + ctrl/metaKey, or arrow keys / touch:
 // two-finger move

 function OrbitControls(object, domElement) {

   this.object = object;

   this.domElement = domElement !== undefined ? domElement : document;

   // Set to false to disable this control
   this.enabled = true;
   this.needsUpdate = true;

   // "target" sets the location of focus, where the object orbits around
   this.target = new THREE.Vector3();

   // How far you can zoom in and out ( PerspectiveCamera only )
   this.minDistance = 0;
   this.maxDistance = 100;


   // How far you can orbit vertically, upper and lower limits.
   // Range is 0 to Math.PI radians.
   this.minPolarAngle = 0; // radians
   this.maxPolarAngle = Math.PI; // radians

   // How far you can orbit horizontally, upper and lower limits.
   // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
   this.minAzimuthAngle = -Infinity; // radians
   this.maxAzimuthAngle = Infinity; // radians

   // Set to true to enable damping (inertia)
   // If damping is enabled, you must call controls.update() in your animation
   // loop
   this.enableDamping = false;
   this.dampingFactor = 0.25;

   // This option actually enables dollying in and out; left as "zoom" for
   // backwards compatibility.
   // Set to false to disable zooming
   this.enableZoom = true;
   this.zoomSpeed = 1.0;

   // Set to false to disable rotating
   this.enableRotate = true;
   this.rotateSpeed = 1.0;

   // Set to false to disable panning
   this.enablePan = true;
   this.panSpeed = 1.0;
   this.screenSpacePanning = false; // if true, pan in screen-space
   this.keyPanSpeed = 7.0; // pixels moved per arrow key push

   // Set to true to automatically rotate around the target
   // If auto-rotate is enabled, you must call controls.update() in your
   // animation loop
   this.autoRotate = false;
   this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

   // Set to false to disable use of the keys
   this.enableKeys = true;

   // The four arrow keys
   this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

   // Mouse buttons
   this.mouseButtons = { LEFT: MOUSE.LEFT, MIDDLE: MOUSE.MIDDLE, RIGHT: MOUSE.RIGHT };

   // for reset
   this.target0 = this.target.clone();
   this.position0 = this.object.position.clone();
   this.zoom0 = this.object.zoom;

   //
   // public methods
   //

   this.getPolarAngle = function () {

     return spherical.phi;
   };

   this.getAzimuthalAngle = function () {

     return spherical.theta;
   };

   this.saveState = function () {

     scope.target0.copy(scope.target);
     scope.position0.copy(scope.object.position);
     scope.zoom0 = scope.object.zoom;
   };

   this.reset = function () {

     scope.target.copy(scope.target0);
     scope.object.position.copy(scope.position0);
     scope.object.zoom = scope.zoom0;

     scope.object.updateProjectionMatrix();
     scope.dispatchEvent(changeEvent);
     scope.dispatchEvent({ type: EVENT_CAMERA_MOVED });

     scope.update();

     state = STATE.NONE;
   };

   // this method is exposed, but perhaps it would be better if we can make it
   // private...
   this.update = function () {
     var offset = new THREE.Vector3();

     // so camera.up is the orbit axis
     var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
     var quatInverse = quat.clone().inverse();

     var lastPosition = new THREE.Vector3();
     var lastQuaternion = new THREE.Quaternion();

     return function update() {

       var position = scope.object.position;

       offset.copy(position).sub(scope.target);

       // rotate offset to "y-axis-is-up" space
       offset.applyQuaternion(quat);

       // angle from z-axis around y-axis
       spherical.setFromVector3(offset);

       if (scope.autoRotate && state === STATE.NONE) {

         rotateLeft(getAutoRotationAngle());
       }

       spherical.theta += sphericalDelta.theta;
       spherical.phi += sphericalDelta.phi;

       // restrict theta to be between desired limits
       spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));

       // restrict phi to be between desired limits
       spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));

       spherical.makeSafe();

       spherical.radius *= scale;

       // restrict radius to be between desired limits
       spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));

       // move target to panned location
       scope.target.add(panOffset);

       offset.setFromSpherical(spherical);

       // rotate offset back to "camera-up-vector-is-up" space
       offset.applyQuaternion(quatInverse);

       position.copy(scope.target).add(offset);

       scope.object.lookAt(scope.target);

       if (scope.enableDamping === true) {

         sphericalDelta.theta *= 1 - scope.dampingFactor;
         sphericalDelta.phi *= 1 - scope.dampingFactor;

         panOffset.multiplyScalar(1 - scope.dampingFactor);
       } else {

         sphericalDelta.set(0, 0, 0);

         panOffset.set(0, 0, 0);
       }

       scale = 1;

       // update condition is:
       // min(camera displacement, camera rotation in radians)^2 > EPS
       // using small-angle approximation cos(x/2) = 1 - x^2 / 8

       if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
         scope.dispatchEvent(changeEvent);
         scope.dispatchEvent({ type: EVENT_CAMERA_MOVED });
         lastPosition.copy(scope.object.position);
         lastQuaternion.copy(scope.object.quaternion);
         zoomChanged = false;
         this.needsUpdate = true;
         return true;
       } else {
         this.needsUpdate = false;
       }

       return false;
     };
   }();

   this.dispose = function () {};

   // internals

   var scope = this;

   var changeEvent = { type: 'change' };
   var startEvent = { type: 'start' };
   var endEvent = { type: 'end' };

   var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY_PAN: 4 };

   var state = STATE.NONE;

   var EPS = 0.000001;

   // current position in spherical coordinates
   var spherical = new THREE.Spherical();
   var sphericalDelta = new THREE.Spherical();

   var scale = 1;
   var panOffset = new THREE.Vector3();
   var zoomChanged = false;

   var rotateStart = new THREE.Vector2();
   var rotateEnd = new THREE.Vector2();
   var rotateDelta = new THREE.Vector2();

   var panStart = new THREE.Vector2();
   var panEnd = new THREE.Vector2();
   var panDelta = new THREE.Vector2();

   var dollyStart = new THREE.Vector2();
   var dollyEnd = new THREE.Vector2();
   var dollyDelta = new THREE.Vector2();

   function getAutoRotationAngle() {

     return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
   }

   function getZoomScale() {

     return Math.pow(0.95, scope.zoomSpeed);
   }

   function rotateLeft(angle) {

     sphericalDelta.theta -= angle;
   }

   function rotateUp(angle) {

     sphericalDelta.phi -= angle;
   }

   var panLeft = function () {

     var v = new THREE.Vector3();

     return function panLeft(distance, objectMatrix) {

       v.setFromMatrixColumn(objectMatrix, 0); // get X column of
       // objectMatrix
       v.multiplyScalar(-distance);

       panOffset.add(v);
     };
   }();

   var panUp = function () {

     var v = new THREE.Vector3();

     return function panUp(distance, objectMatrix) {

       if (scope.screenSpacePanning === true) {

         v.setFromMatrixColumn(objectMatrix, 1);
       } else {

         v.setFromMatrixColumn(objectMatrix, 0);
         v.crossVectors(scope.object.up, v);
       }

       v.multiplyScalar(distance);

       panOffset.add(v);
     };
   }();

   // deltaX and deltaY are in pixels; right and down are positive
   var pan = function () {

     var offset = new THREE.Vector3();

     return function pan(deltaX, deltaY) {

       var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

       if (scope.object.isPerspectiveCamera) {

         // perspective
         var position = scope.object.position;
         offset.copy(position).sub(scope.target);
         var targetDistance = offset.length();

         // half of the fov is center to top of screen
         targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);

         // we use only clientHeight here so aspect ratio does not
         // distort speed
         panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
         panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
       } else {

         // camera not perspective
         console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
         scope.enablePan = false;
       }
     };
   }();

   function dollyIn(dollyScale) {

     if (scope.object.isPerspectiveCamera) {

       scale /= dollyScale;
     } else {

       console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
       scope.enableZoom = false;
     }
   }

   function dollyOut(dollyScale) {

     if (scope.object.isPerspectiveCamera) {

       scale *= dollyScale;
     } else {

       console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
       scope.enableZoom = false;
     }
   }

   //
   // event callbacks - update the object state
   //

   function handleMouseDownRotate(event) {

     // console.log( 'handleMouseDownRotate' );

     rotateStart.set(event.clientX, event.clientY);
   }

   function handleMouseDownDolly(event) {

     // console.log( 'handleMouseDownDolly' );

     dollyStart.set(event.clientX, event.clientY);
   }

   function handleMouseDownPan(event) {

     // console.log( 'handleMouseDownPan' );

     panStart.set(event.clientX, event.clientY);
   }

   function handleMouseMoveRotate(event) {

     // console.log( 'handleMouseMoveRotate' );

     rotateEnd.set(event.clientX, event.clientY);

     rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);

     var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

     rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes,
     // height

     rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);

     rotateStart.copy(rotateEnd);

     scope.update();
   }

   function handleMouseMoveDolly(event) {

     // console.log( 'handleMouseMoveDolly' );

     dollyEnd.set(event.clientX, event.clientY);

     dollyDelta.subVectors(dollyEnd, dollyStart);

     if (dollyDelta.y > 0) {

       dollyIn(getZoomScale());
     } else if (dollyDelta.y < 0) {

       dollyOut(getZoomScale());
     }

     dollyStart.copy(dollyEnd);

     scope.update();
   }

   function handleMouseMovePan(event) {

     // console.log( 'handleMouseMovePan' );

     panEnd.set(event.clientX, event.clientY);

     panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);

     pan(panDelta.x, panDelta.y);

     panStart.copy(panEnd);

     scope.update();
   }

   function handleMouseWheel(event) {

     // console.log( 'handleMouseWheel' );

     if (event.deltaY < 0) {

       dollyOut(getZoomScale());
     } else if (event.deltaY > 0) {

       dollyIn(getZoomScale());
     }

     scope.update();
   }

   function handleKeyDown(event) {

     // console.log( 'handleKeyDown' );

     switch (event.keyCode) {

       case scope.keys.UP:
         pan(0, scope.keyPanSpeed);
         scope.update();
         break;

       case scope.keys.BOTTOM:
         pan(0, -scope.keyPanSpeed);
         scope.update();
         break;

       case scope.keys.LEFT:
         pan(scope.keyPanSpeed, 0);
         scope.update();
         break;

       case scope.keys.RIGHT:
         pan(-scope.keyPanSpeed, 0);
         scope.update();
         break;

     }
   }

   function handleTouchStartRotate(event) {

     // console.log( 'handleTouchStartRotate' );

     rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
   }

   function handleTouchStartDollyPan(event) {

     // console.log( 'handleTouchStartDollyPan' );

     if (scope.enableZoom) {

       var dx = event.touches[0].pageX - event.touches[1].pageX;
       var dy = event.touches[0].pageY - event.touches[1].pageY;

       var distance = Math.sqrt(dx * dx + dy * dy);

       dollyStart.set(0, distance);
     }

     if (scope.enablePan) {

       var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
       var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);

       panStart.set(x, y);
     }
   }

   function handleTouchMoveRotate(event) {

     // console.log( 'handleTouchMoveRotate' );

     rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);

     rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);

     var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

     rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes,
     // height

     rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);

     rotateStart.copy(rotateEnd);

     scope.update();
   }

   function handleTouchMoveDollyPan(event) {

     // console.log( 'handleTouchMoveDollyPan' );

     if (scope.enableZoom) {

       var dx = event.touches[0].pageX - event.touches[1].pageX;
       var dy = event.touches[0].pageY - event.touches[1].pageY;

       var distance = Math.sqrt(dx * dx + dy * dy);

       dollyEnd.set(0, distance);

       dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));

       dollyIn(dollyDelta.y);

       dollyStart.copy(dollyEnd);
     }

     if (scope.enablePan) {

       var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
       var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);

       panEnd.set(x, y);

       panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);

       pan(panDelta.x, panDelta.y);

       panStart.copy(panEnd);
     }

     scope.update();
   }

   // console.log( 'handleTouchEnd' );

   //
   // event handlers - FSM: listen for events and reset state
   //

   function onMouseDown(event) {
     if (scope.enabled === false) return;

     event.preventDefault();

     switch (event.button) {

       case scope.mouseButtons.LEFT:

         if (event.ctrlKey || event.metaKey) {

           if (scope.enablePan === false) return;

           handleMouseDownPan(event);

           state = STATE.PAN;
         } else {

           if (scope.enableRotate === false) return;

           handleMouseDownRotate(event);

           state = STATE.ROTATE;
         }

         break;

       case scope.mouseButtons.MIDDLE:

         if (scope.enableZoom === false) return;

         handleMouseDownDolly(event);

         state = STATE.DOLLY;

         break;

       case scope.mouseButtons.RIGHT:

         if (scope.enablePan === false) return;

         handleMouseDownPan(event);

         state = STATE.PAN;

         break;

     }

     if (state !== STATE.NONE) {
       document.addEventListener('mousemove', onMouseMove, false);
       document.addEventListener('mouseup', onMouseUp, false);

       scope.dispatchEvent(startEvent);
     }
   }

   function onMouseMove(event) {
     if (scope.enabled === false) return;

     event.preventDefault();

     switch (state) {

       case STATE.ROTATE:

         if (scope.enableRotate === false) return;

         handleMouseMoveRotate(event);

         break;

       case STATE.DOLLY:

         if (scope.enableZoom === false) return;

         handleMouseMoveDolly(event);

         break;

       case STATE.PAN:

         if (scope.enablePan === false) return;

         handleMouseMovePan(event);

         break;

     }
   }

   function onMouseUp(event) {

     if (scope.enabled === false) return;

     document.removeEventListener('mousemove', onMouseMove, false);
     document.removeEventListener('mouseup', onMouseUp, false);

     scope.dispatchEvent(endEvent);

     state = STATE.NONE;
   }

   function onMouseWheel(event) {

     if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;

     event.preventDefault();
     event.stopPropagation();

     scope.dispatchEvent(startEvent);

     handleMouseWheel(event);

     scope.dispatchEvent(endEvent);
   }

   function onKeyDown(event) {

     if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;

     handleKeyDown(event);
   }

   function onTouchStart(event) {

     if (scope.enabled === false) return;

     event.preventDefault();

     switch (event.touches.length) {

       case 1:
         // one-fingered touch: rotate

         if (scope.enableRotate === false) return;

         handleTouchStartRotate(event);

         state = STATE.TOUCH_ROTATE;

         break;

       case 2:
         // two-fingered touch: dolly-pan

         if (scope.enableZoom === false && scope.enablePan === false) return;

         handleTouchStartDollyPan(event);

         state = STATE.TOUCH_DOLLY_PAN;

         break;

       default:

         state = STATE.NONE;

     }

     if (state !== STATE.NONE) {

       scope.dispatchEvent(startEvent);
     }
   }

   function onTouchMove(event) {

     if (scope.enabled === false) return;

     event.preventDefault();
     event.stopPropagation();

     switch (event.touches.length) {

       case 1:
         // one-fingered touch: rotate

         if (scope.enableRotate === false) return;
         if (state !== STATE.TOUCH_ROTATE) return; // is this needed?

         handleTouchMoveRotate(event);

         break;

       case 2:
         // two-fingered touch: dolly-pan

         if (scope.enableZoom === false && scope.enablePan === false) return;
         if (state !== STATE.TOUCH_DOLLY_PAN) return; // is this
         // needed?

         handleTouchMoveDollyPan(event);

         break;

       default:

         state = STATE.NONE;

     }
   }

   function onTouchEnd(event) {

     if (scope.enabled === false) return;

     scope.dispatchEvent(endEvent);

     state = STATE.NONE;
   }

   function onContextMenu(event) {

     if (scope.enabled === false) return;

     event.preventDefault();
   }

   //

   scope.domElement.addEventListener('contextmenu', onContextMenu, false);

   scope.domElement.addEventListener('mousedown', onMouseDown, false);
   scope.domElement.addEventListener('wheel', onMouseWheel, false);

   scope.domElement.addEventListener('touchstart', onTouchStart, false);
   scope.domElement.addEventListener('touchend', onTouchEnd, false);
   scope.domElement.addEventListener('touchmove', onTouchMove, false);

   window.addEventListener('keydown', onKeyDown, false);

   // force an update at start

   this.update();
 }

 OrbitControls.prototype = Object.assign(Object.create(EventDispatcher.prototype), {
   constructor: OrbitControls,
   center: {
     get: function get() {
       console.warn('OrbitControls: .center has been renamed to .target');
       return this.target;
     }
   },

   // backward compatibility
   noZoom: {
     get: function get() {
       console.warn('OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
       return !this.enableZoom;
     },
     set: function set(value) {
       console.warn('OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
       this.enableZoom = !value;
     }

   },

   noRotate: {
     get: function get() {
       console.warn('OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
       return !this.enableRotate;
     },

     set: function set(value) {
       console.warn('OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
       this.enableRotate = !value;
     }
   },

   noPan: {

     get: function get() {
       console.warn('OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
       return !this.enablePan;
     },

     set: function set(value) {
       console.warn('OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
       this.enablePan = !value;
     }
   },

   noKeys: {
     get: function get() {
       console.warn('OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
       return !this.enableKeys;
     },
     set: function set(value) {
       console.warn('OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
       this.enableKeys = !value;
     }
   },

   staticMoving: {
     get: function get() {
       console.warn('OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
       return !this.enableDamping;
     },

     set: function set(value) {
       console.warn('OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
       this.enableDamping = !value;
     }
   },

   dynamicDampingFactor: {
     get: function get() {
       console.warn('OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
       return this.dampingFactor;
     },

     set: function set(value) {
       console.warn('OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
       this.dampingFactor = value;
     }
   }
 });


 const ReflectorShader = {
   uniforms: UniformsUtils.merge( [
   UniformsLib[ 'ambient' ],
   UniformsLib['lights'],
     UniformsLib[ 'fog'],{
     'color':
     {
       type: 'c',
       value: null
     },
     'tDiffuse':
     {
       type: 't',
       value: null
     },
     'textureMatrix':
     {
       type: 'm4',
       value: null
     },
     'intensity':
     {
       type: 'f',
       value: 0.5
     },
     'tOneWrapX':
     {
       type: 'f',
       value: 1.0
     },
     'tOneWrapY':
     {
       type: 'f',
       value: 1.0
     },
     'tTwoWrapX':
     {
       type: 'f',
       value: 1.0
     },
     'tTwoWrapY':
     {
       type: 'f',
       value: 1.0
     },
     'tOne':
     {
       type: 't',
       value: null
     },
     'tSec':
     {
       type: 't',
       value: null
     },
     'tOneFlag':
     {
       type: 'b',
       value: false
     },
     'tTwoFlag':
     {
       type: 'b',
       value: false
     },
     'invertedUV':
     {
       type: 'b',
       value: false
     }
   }]),

   vertexShader: [
   '#ifdef GL_ES',
         'precision highp float;',
       '#endif',

       'uniform bool invertedUV;',

       'uniform mat4 textureMatrix;',
       'varying vec2 vUv;',
       'varying vec4 vUv2;',

       'void main()',
       '{',
         'vUv = uv;',
         'vUv2 = textureMatrix * vec4( position, 1.0 );',
         'if(invertedUV)',
         '{',
           'vUv[0] = uv[0];',
           'vUv[1] = 1.0 - uv[1];',
         '}',
         'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
       '}',
   ].join( '\n' ),

   fragmentShader: [
     '// All variables related to Texture one and two',
       '//Is Texture One available',
       'uniform bool tOneFlag;',
       '//Is Texture Two available',
       'uniform bool tTwoFlag;',
       '//If the model is GLTF sometimes the uv is inverted',
       'uniform bool invertedUV;',
       '//The wrap repeat x and y for texture one',
       'uniform float tOneWrapX;',
       'uniform float tOneWrapY;',
       '//The wrap repeat x and y for texture two',
       'uniform float tTwoWrapX;',
       'uniform float tTwoWrapY;',
       '//The textures themselves',
       'uniform sampler2D tOne;',
       'uniform sampler2D tSec;',
       '//The tDiffuse holds the texture of the scene reflection',
       'uniform sampler2D tDiffuse;  '   ,
       '//The intensity of the reflection',
       'uniform float intensity;',
       '//The color of the material incase of two textures arent available',
       'uniform vec3 color;',
       '//vUv2 and vUv is coming from uv coordinates and texture matrix projection',
       'varying vec2 vUv;',
       'varying vec4 vUv2;',
       ShaderChunk[ "common" ],
       ShaderChunk[ "fog_pars_fragment" ],
       'void main() ',
       '{',
             'vec3 c;',
             'vec3 tcolors;',
             'vec4 reflection = texture2DProj( tDiffuse, vUv2 );',
             'vec4 Ca;',
             'vec4 Cb;',

             'if(!tOneFlag && !tTwoFlag)',
             '{',
                 'c = (reflection.rgb * (reflection.a * intensity)) + (color.rgb * (1.0 - (reflection.a * intensity)));',
             '}',
             'if(tOneFlag && tTwoFlag)',
             '{',
               'Ca = texture2D(tOne, vec2(vUv[0] * tOneWrapX, vUv[1] * tOneWrapY));',
             'Cb = texture2D(tSec, vec2(vUv[0] * tTwoWrapY, vUv[1] * tTwoWrapY));',

                 'tcolors = (Ca.rgb * 0.5) + (Cb.rgb * 0.5);',
                 'c = (reflection.rgb * (reflection.a * intensity)) + (tcolors.rgb * (1.0 - (reflection.a * intensity)));',
             '}',
             'else if(tOneFlag && !tTwoFlag)',
             '{',
               'Ca = texture2D(tOne, vec2(vUv[0] * tOneWrapX, vUv[1] * tOneWrapY));',
                 'tcolors = (Ca.rgb * 1.0);',
                 'c = (reflection.rgb * (reflection.a * intensity)) + (tcolors.rgb * (1.0 - (reflection.a * intensity)));',
             '}',
             'else if(!tOneFlag && tTwoFlag)',
             '{',
               'Cb = texture2D(tSec, vec2(vUv[0] * tTwoWrapY, vUv[1] * tTwoWrapY));',
                 'tcolors = (Cb.rgb * 1.0);',
                 'c = (reflection.rgb * (reflection.a * intensity)) + (tcolors.rgb * (1.0 - (reflection.a * intensity)));',
             '}',
             'gl_FragColor += vec4(c, 1.0);',
             ShaderChunk[ "fog_fragment" ],
       '}',
   ].join( '\n' ),
 };

/** END OF LIBRARY **/

/**
MathUtilities function provided by Blueprint3d

functions return important math algorithms required to constructs lines/walls in Application
	 * @author furnishup /
   * https://github.com/furnishup/blueprint3ds
   */
var MathUtilities = function () {
  function MathUtilities() {
    classCallCheck(this, MathUtilities);
  }

  createClass(MathUtilities, null, [{
    reference: 'pointDistanceFromLine',

    /** Determines the distance of a point from a line.
   *  point The Point coordinates as THREE.Vector2
   *  start The starting coordinates of the line as THREE.Vector2
   *  end The ending coordinates of the line as THREE.Vector2
   * returns The distance value (number).
   */
    value: function pointDistanceFromLine(point, start, end) {
      var tPoint = MathUtilities.closestPointOnLine(point, start, end);
      var tDx = point.x - tPoint.x;
      var tDy = point.y - tPoint.y;
      return Math.sqrt(tDx * tDx + tDy * tDy);
    }

    /** Gets the projection of a point onto a line.
   *  point the point
   *  start the starting coordinates of the line as THREE.Vector2
   *  end the ending coordinates of the line as THREE.Vector2
   * returns The point as THREE.Vector2.
   */

  }, {
    reference: 'closestPointOnLine',
    value: function closestPointOnLine(point, start, end) {
      // Inspired by: http://stackoverflow.com/a/6853926
      var a = point.x - start.x;
      var b = point.y - start.y;
      var c = end.x - start.x;
      var d = end.y - start.y;

      var dot = a * c + b * d;
      var lengthSquared = c * c + d * d;
      var param = dot / lengthSquared;

      var xx, yy;

      if (param < 0 || start.x == end.x && start.y == end.y) {
        xx = start.x;
        yy = start.y;
      } else if (param > 1) {
        xx = end.x;
        yy = end.y;
      } else {
        xx = start.x + param * c;
        yy = start.y + param * d;
      }

      return new THREE.Vector2(xx, yy);
    }

    /** Gets the distance of two points.
   *  start the starting coordinate of the line as Vector2
   *  end the ending coordinate of the line as Vector2
   * returns The distance.
   */

  }, {
    reference: 'distance',
    value: function distance(start, end) {
      return Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
    }

    /**  Gets the angle between point1 -> start and 0,0 -> point2 (-pi to pi)
   * returns The angle.
   */

  }, {
    reference: 'angle',
    value: function angle(start, end) {
      var dot = start.x * end.x + start.y * end.y;
      var det = start.x * end.y - start.y * end.x;
      var angle = -Math.atan2(det, dot);
      return angle;
    }

    /** shifts angle to be 0 to 2pi */

  }, {
    reference: 'angle2pi',
    value: function angle2pi(start, end) {
      var theta = MathUtilities.angle(start, end);
      if (theta < 0) {
        theta += 2.0 * Math.PI;
      }
      return theta;
    }

    /** Checks if an array of points is clockwise.
   *  points Is array of points with x,y attributes
   * returns True if clockwise.
   */

  }, {
    reference: 'isClockwise',
    value: function isClockwise(points) {
      // make positive
      var tSubX = Math.min(0, Math.min.apply(null, MathUtilities.map(points, function (p) {
        return p.x;
      })));
      var tSubY = Math.min(0, Math.min.apply(null, MathUtilities.map(points, function (p) {
        return p.x;
      })));

      var newPoints = MathUtilities.map(points, function (p) {
        return {
          x: p.x - tSubX,
          y: p.y - tSubY
        };
      });

      // determine CW/CCW, based on:
      // http://stackoverflow.com/questions/1165647
      var sum = 0;
      for (var tI = 0; tI < newPoints.length; tI++) {
        var c1 = newPoints[tI];
        var c2;
        if (tI == newPoints.length - 1) {
          c2 = newPoints[0];
        } else {
          c2 = newPoints[tI + 1];
        }
        sum += (c2.x - c1.x) * (c2.y + c1.y);
      }
      return sum >= 0;
    }

    /** Creates a Guide.
   * returns A new Guide.
   */

  }, {
    reference: 'guide',
    value: function guide() {
      var tS4 = function tS4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      };
      return tS4() + tS4() + '-' + tS4() + '-' + tS4() + '-' + tS4() + '-' + tS4() + tS4() + tS4();
    }

    /** both arguments are arrays of corners with x,y attributes */

  }, {
    reference: 'polygonPolygonIntersect',
    value: function polygonPolygonIntersect(firstCorners, secondCorners) {
      for (var tI = 0; tI < firstCorners.length; tI++) {
        var tFirstCorner = firstCorners[tI],
            tSecondCorner;
        if (tI == firstCorners.length - 1) {
          tSecondCorner = firstCorners[0];
        } else {
          tSecondCorner = firstCorners[tI + 1];
        }
        if (MathUtilities.linePolygonIntersect(tFirstCorner.x, tFirstCorner.y, tSecondCorner.x, tSecondCorner.y, secondCorners)) {
          return true;
        }
      }
      return false;
    }

    /** Corners is an array of points with x,y attributes */

  }, {
    reference: 'linePolygonIntersect',
    value: function linePolygonIntersect(point, point2, corners) {
      for (var tI = 0; tI < corners.length; tI++) {
        var tFirstCorner = corners[tI],
            tSecondCorner;
        if (tI == corners.length - 1) {
          tSecondCorner = corners[0];
        } else {
          tSecondCorner = corners[tI + 1];
        }
        if (MathUtilities.lineLineIntersect(point, point2, { x: tFirstCorner.x, y: tFirstCorner.y }, { x: tSecondCorner.x, y: tSecondCorner.y })) {
          return true;
        }
      }
      return false;
    }



  }, {
    reference: 'lineLineIntersectPoint',
    value: function lineLineIntersectPoint(aStart, aEnd, bStart, bEnd) {
      var result = checkIntersection(aStart.x, aStart.y, aEnd.x, aEnd.y, bStart.x, bStart.y, bEnd.x, bEnd.y);
      if (result.point) {
        return new THREE.Vector2(result.point.x, result.point.y);
      }
      return undefined;
    }



  }, {
    reference: 'lineLineIntersect',
    value: function lineLineIntersect(lineAStart, lineAEnd, lineBStart, lineBEnd) {
      function tCCW(p1, p2, p3) {
        var a = p1.x,
            b = p1.y,
            c = p2.x,
            d = p2.y,
            e = p3.x,
            f = p3.y;
        return (f - b) * (c - a) > (d - b) * (e - a);
      }
      var tP1 = lineAStart,
          tP2 = lineAEnd,
          tP3 = lineBStart,
          tP4 = lineBEnd;
      return tCCW(tP1, tP3, tP4) != tCCW(tP2, tP3, tP4) && tCCW(tP1, tP2, tP3) != tCCW(tP1, tP2, tP4);
    }

    /**
       corners Is an array of points with x,y attributes
        startX X start coord for raycast
        startY Y start coord for raycast
   */

  }, {
    reference: 'pointInPolygon',
    value: function pointInPolygon(point, corners, start) {
      start = start || new THREE.Vector2(0, 0);
      var startX = start.x || 0;
      var startY = start.y || 0;

      //ensure that point(startX, startY) is outside the polygon consists of corners
      var tMinX = 0,
          tMinY = 0;
      var tI = 0;

      if (startX === undefined || startY === undefined) {
        for (tI = 0; tI < corners.length; tI++) {
          tMinX = Math.min(tMinX, corners[tI].x);
          tMinY = Math.min(tMinX, corners[tI].y);
        }
        startX = tMinX - 10;
        startY = tMinY - 10;
      }

      var tIntersects = 0;
      for (tI = 0; tI < corners.length; tI++) {
        var tFirstCorner = corners[tI],
            tSecondCorner;
        if (tI == corners.length - 1) {
          tSecondCorner = corners[0];
        } else {
          tSecondCorner = corners[tI + 1];
        }

        if (MathUtilities.lineLineIntersect(start, point, tFirstCorner.x, tFirstCorner.y, tSecondCorner.x, tSecondCorner.y)) {
          tIntersects++;
        }
      }
      // odd intersections means the point is in the polygon
      return tIntersects % 2 == 1;
    }

    /** Checks if all corners of insideCorners are inside the polygon described by outsideCorners */

  }, {
    reference: 'polygonInsidePolygon',
    value: function polygonInsidePolygon(insideCorners, outsideCorners, start) {
      start.x = start.x || 0;
      start.y = start.y || 0;

      for (var tI = 0; tI < insideCorners.length; tI++) {
        if (!MathUtilities.pointInPolygon(insideCorners[tI].x, insideCorners[tI].y, outsideCorners, start)) {
          return false;
        }
      }
      return true;
    }

    /** Checks if any corners of firstCorners is inside the polygon described by secondCorners */

  }, {
    reference: 'polygonOutsidePolygon',
    value: function polygonOutsidePolygon(insideCorners, outsideCorners, start) {
      start.x = start.x || 0;
      start.y = start.y || 0;

      for (var tI = 0; tI < insideCorners.length; tI++) {
        if (MathUtilities.pointInPolygon(insideCorners[tI].x, insideCorners[tI].y, outsideCorners, start)) {
          return false;
        }
      }
      return true;
    }

    // arrays

  }, {
    reference: 'forEach',
    value: function forEach(array, action) {
      for (var tI = 0; tI < array.length; tI++) {
        action(array[tI]);
      }
    }
  }, {
    reference: 'forEachIndexed',
    value: function forEachIndexed(array, action) {
      for (var tI = 0; tI < array.length; tI++) {
        action(tI, array[tI]);
      }
    }
  }, {
    reference: 'map',
    value: function map(array, func) {
      var tResult = [];
      array.forEach(function (element) {
        tResult.push(func(element));
      });
      return tResult;
    }

    /** Remove elements in array if func(element) returns true */

  }, {
    reference: 'removeIf',
    value: function removeIf(array, func) {
      var tResult = [];
      array.forEach(function (element) {
        if (!func(element)) {
          tResult.push(element);
        }
      });
      return tResult;
    }

    /** Shift the items in an array by shift (positive integer) */

  }, {
    reference: 'cycle',
    value: function cycle(arr, shift) {
      var tReturn = arr.slice(0);
      for (var tI = 0; tI < shift; tI++) {
        var tmp = tReturn.shift();
        tReturn.push(tmp);
      }
      return tReturn;
    }

    /** Returns in the unique elemnts in arr */

  }, {
    reference: 'unique',
    value: function unique(arr, hashFunc) {
      var tResults = [];
      var tMap = {};
      for (var tI = 0; tI < arr.length; tI++) {
        if (!tMap.hasOwnProperty(arr[tI])) {
          tResults.push(arr[tI]);
          tMap[hashFunc(arr[tI])] = true;
        }
      }
      return tResults;
    }

    /** Remove value from array, if it is present */

  }, {
    reference: 'removeValue',
    value: function removeValue(array, value) {
      for (var tI = array.length - 1; tI >= 0; tI--) {
        if (array[tI] === value) {
          array.splice(tI, 1);
        }
      }
    }

    /** Checks if value is in array */

  }, {
    reference: 'hasValue',
    value: function hasValue(array, value) {
      for (var tI = 0; tI < array.length; tI++) {
        if (array[tI] === value) {
          return true;
        }
      }
      return false;
    }

    /** Subtracts the elements in subArray from array */

  }, {
    reference: 'subtract',
    value: function subtract(array, subArray) {
      return MathUtilities.removeIf(array, function (el) {
        return MathUtilities.hasValue(subArray, el);
      });
    }
  }]);
  return MathUtilities;
}();

/**


[KITCHEN KREATION CODE STARTS HERE]


**/

// GENERAL:
/** The dimensioning unit for 2D floorplan measurements. */
var configDimUnit = 'dimensionUnit';
// WALL:
/** The initial wall height in cm. */
var configWallHeight = 'wallHeight';
/** The initial wall thickness in cm. */
var configWallThickness = 'wallThickness';

var config = { dimUnit: dimCentiMeter, wallHeight: 200, wallThickness: 24 };

/** Global configuration to customize the whole system.  */
var Configuration = function () {
  function Configuration() {
    classCallCheck(this, Configuration);
  }

  createClass(Configuration, null, [{
    reference: 'getData',
    value: function getData() {
      return config;
    }

    /** Set a configuration parameter. */

  }, {
    reference: 'setValue',
    value: function setValue(reference, value) {
      config[reference] = value;
    }

    /** Get a string configuration parameter. */

  }, {
    reference: 'getStringValue',
    value: function getStringValue(reference) {
      switch (reference) {
        case configDimUnit:
          //			return String(this.data[reference]);
          return String(Configuration.getData()[reference]);
      }
    }

    /** Get a numeric configuration parameter. */

  }, {
    reference: 'getNumericValue',
    value: function getNumericValue(reference) {
      switch (reference) {
        case configWallHeight:
        case configWallThickness:
          //			return Number(this.data[reference]);
          return Number(Configuration.getData()[reference]);
      }
    }
  }]);
  return Configuration;
}();

/** Dimensioning in Inch. */
var dimInch = 'inch';
/** Dimensioning in Inches and Feet */
var dimFeetAndInch = 'feetAndInch';
/** Dimensioning in Meter. */
var dimMeter = 'm';
/** Dimensioning in Centimetres. */
var dimCentiMeter = 'cm';
/** Dimensioning in Millimetres. */
var dimMilliMeter = 'mm';

var decimals = 10;

var cmPerFoot = 30.48;
var pixelsPerFoot = 15.0;
var cmPerPixel = cmPerFoot * (1.0 / pixelsPerFoot);
var pixelsPerCm = 1.0 / cmPerPixel;

/** Dimensioning functions. */
var Dimensioning = function () {
  function Dimensioning() {
    classCallCheck(this, Dimensioning);
  }

  createClass(Dimensioning, null, [{
    reference: 'cmFromMeasureInt',

    /** Converts cm to dimensioning number.
   *  cm Centi meter value to be converted.
   * returns Number representation.
   */
    value: function cmFromMeasureInt(measure) {
      switch (Configuration.getStringValue(configDimUnit)) {
        case dimFeetAndInch:
          return Math.round(decimals * (measure * 30.48)) / decimals;
        case dimInch:
          return Math.round(decimals * (measure * 2.54)) / decimals;
        case dimMilliMeter:
          return Math.round(decimals * (measure * 0.10)) / decimals;
        case dimCentiMeter:
          return measure;
        case dimMeter:
        default:
          return Math.round(decimals * 100 * measure) / decimals;
      }
    }

  }, {
    reference: 'cmToMeasureInt',
    value: function cmToMeasureInt(cm) {
      switch (Configuration.getStringValue(configDimUnit)) {
        case dimFeetAndInch:
          // dimFeetAndInch returns only the feet
          var allInFeet = cm * 0.03;
          return allInFeet;
        case dimInch:
          var inches = Math.round(decimals * (cm * 0.39)) / decimals;
          return inches;
        case dimMilliMeter:
          var mm = Math.round(decimals * (10 * cm)) / decimals;
          return mm;
        case dimCentiMeter:
          return Math.round(decimals * cm) / decimals;
        case dimMeter:
        default:
          var m = Math.round(decimals * (0.01 * cm)) / decimals;
          return m;
      }
    }

    /** Converts cm to dimensioning string.
   *  cm Centi meter value to be converted.
   * returns String representation.
   */

  }, {
    reference: 'cmToMeasureString',
    value: function cmToMeasureString(cm) {
      switch (Configuration.getStringValue(configDimUnit)) {
        case dimFeetAndInch:
          var allInFeet = cm * 0.03;
          var floorFeet = Math.floor(allInFeet);
          var remainingFeet = allInFeet - floorFeet;
          var remainingInches = Math.round(remainingFeet * 12);
          return floorFeet + '\'' + remainingInches + '"';
        case dimInch:
          var inches = Math.round(decimals * (cm * 0.39)) / decimals;
          return inches + '\'';
        case dimMilliMeter:
          var mm = Math.round(decimals * (10 * cm)) / decimals;
          return '' + mm + 'mm';
        case dimCentiMeter:
          return '' + Math.round(decimals * cm) / decimals + 'cm';
        case dimMeter:
        default:
          var m = Math.round(decimals * (cm * 0.01)) / decimals;
          return '' + m + 'm';
      }
    }
  }]);
  return Dimensioning;
}();


/**
 * interior walls are created by Room.
 *
 * Once rooms have been identified, interior walls are created for each wall.
 *
 * A wall can have two interior walls if it is visible from both sides.
 */
var InnerWall = function (_EventDispatcher) {
  inherits(InnerWall, _EventDispatcher);

  /**
  * Constructs a interior walls.
  *  room The associated room. Instance of Room
  *  wall The corresponding wall. Instance of Wall
  *  front True if front side. Boolean value
  */
  function InnerWall(room, wall, front) {
    classCallCheck(this, InnerWall);

    var this_ = possibleConstructorReturn(this, (InnerWall.__proto__ || Object.getPrototypeOf(InnerWall)).call(this));

    this_.min = null;
    this_.max = null;
    this_.center = null;

    this_.room = room;
    this_.wall = wall;
    this_.next = null;
    this_.prev = null;
    this_.offset = 0.0;
    this_.height = 0.0;
    this_.plane = null;
    this_.interiorTransform = new THREE.Matrix4();
    this_.invInteriorTransform = new THREE.Matrix4();
    this_.exteriorTransform = new THREE.Matrix4();
    this_.invExteriorTransform = new THREE.Matrix4();
    this_.redrawCallbacks = null;

    this_.front = front || false;

    this_.offset = wall.thickness / 2.0;
    this_.height = wall.height;

    if (this_.front) {
      this_.wall.frontEdge = this_;
    } else {
      this_.wall.backEdge = this_;
    }

    return this_;
  }

  createClass(InnerWall, [{
    reference: 'getTexture',
    value: function getTexture() {
      if (this.front) {
        return this.wall.frontTexture;
      } else {
        return this.wall.backTexture;
      }
    }

  }, {
    reference: 'setTexture',
    value: function setTexture(textureUrl, textureStretch, textureScale) {
      var texture = { url: textureUrl, stretch: textureStretch, scale: textureScale };
      if (this.front) {
        this.wall.frontTexture = texture;
      } else {
        this.wall.backTexture = texture;
      }

      //this.redrawCallbacks.fire();
      this.dispatchEvent({ type: EVENT_REDRAW, item: this });
    }
  }, {
    reference: 'dispatchRedrawEvent',
    value: function dispatchRedrawEvent() {
      this.dispatchEvent({ type: EVENT_REDRAW, item: this });
    }
  }, {
    reference: 'transformCorner',
    value: function transformCorner(corner) {
      return new THREE.Vector3(corner.x, 0, corner.y);
    }

  }, {
    reference: 'generatePlane',
    value: function generatePlane() {
      var geometry = new THREE.Geometry();
      var v1 = this.transformCorner(this.interiorStart());
      var v2 = this.transformCorner(this.interiorEnd());
      var v3 = v2.clone();
      var v4 = v1.clone();
      v3.y = this.wall.height;
      v4.y = this.wall.height;

      geometry.vertices = [v1, v2, v3, v4];
      geometry.faces.push(new THREE.Face3(0, 1, 2));
      geometry.faces.push(new THREE.Face3(0, 2, 3));
      geometry.computeFaceNormals();
      geometry.computeBoundingBox();

      this.plane = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ visible: false }));
      //The below line was originally setting the plane visibility to false
      //Now its setting visibility to true. This is necessary to be detected
      //with the raycaster objects to click walls and floors.
      this.plane.visible = true;
      this.plane.edge = this; // js monkey patch

      this.computeTransforms(this.interiorTransform, this.invInteriorTransform, this.interiorStart(), this.interiorEnd());
      this.computeTransforms(this.exteriorTransform, this.invExteriorTransform, this.exteriorStart(), this.exteriorEnd());

      var b3 = new THREE.Box3();
      b3.setFromObject(this.plane);
      this.min = b3.min.clone();
      this.max = b3.max.clone();
      this.center = this.max.clone().sub(this.min).multiplyScalar(0.5).add(this.min);
    }
  }, {
    reference: 'interiorDistance',
    value: function interiorDistance() {
      var start = this.interiorStart();
      var end = this.interiorEnd();
      return MathUtilities.distance(start, end);
    }
  }, {
    reference: 'computeTransforms',
    value: function computeTransforms(transform, invTransform, start, end) {
      var v1 = start;
      var v2 = end;

      var angle = MathUtilities.angle(new THREE.Vector2(1, 0), new THREE.Vector2(v2.x - v1.x, v2.y - v1.y));

      var tt = new THREE.Matrix4();
      var tr = new THREE.Matrix4();

      tt.makeTranslation(-v1.x, 0, -v1.y);
      tr.makeRotationY(-angle);
      transform.multiplyMatrices(tr, tt);
      invTransform.getInverse(transform);
    }

    /** Gets the distance from specified point.
   *  x X coordinate of the point.
   *  y Y coordinate of the point.
   * returns The distance.
   */

  }, {
    reference: 'distanceTo',
    value: function distanceTo(x, y) {
      // x, y, x1, y1, x2, y2
      return MathUtilities.pointDistanceFromLine(new THREE.Vector2(x, y), this.interiorStart(), this.interiorEnd());
    }
  }, {
    reference: 'getStart',
    value: function getStart() {
      if (this.front) {
        return this.wall.getStart();
      } else {
        return this.wall.getEnd();
      }
    }
  }, {
    reference: 'getEnd',
    value: function getEnd() {
      if (this.front) {
        return this.wall.getEnd();
      } else {
        return this.wall.getStart();
      }
    }
  }, {
    reference: 'getOppositeEdge',
    value: function getOppositeEdge() {
      if (this.front) {
        return this.wall.backEdge;
      } else {
        return this.wall.frontEdge;
      }
    }

    // these return an object with attributes x, y

  }, {
    reference: 'interiorEnd',
    value: function interiorEnd() {
      var vec = this.halfAngleVector(this, this.next);
      //		return new THREE.Vector2(this.getEnd().x + vec.x, this.getEnd().y + vec.y);
      return { x: this.getEnd().x + vec.x, y: this.getEnd().y + vec.y };
    }
  }, {
    reference: 'interiorStart',
    value: function interiorStart() {
      var vec = this.halfAngleVector(this.prev, this);
      //		return new THREE.Vector2(this.getStart().x + vec.x, this.getStart().y + vec.y);
      return { x: this.getStart().x + vec.x, y: this.getStart().y + vec.y };
    }
  }, {
    reference: 'interiorCenter',
    value: function interiorCenter() {
      return new THREE.Vector2((this.interiorStart().x + this.interiorEnd().x) / 2.0, (this.interiorStart().y + this.interiorEnd().y) / 2.0);
    }
  }, {
    reference: 'exteriorEnd',
    value: function exteriorEnd() {
      var vec = this.halfAngleVector(this, this.next);
      return new THREE.Vector2(this.getEnd().x - vec.x, this.getEnd().y - vec.y);
    }
  }, {
    reference: 'exteriorStart',
    value: function exteriorStart() {
      var vec = this.halfAngleVector(this.prev, this);
      return new THREE.Vector2(this.getStart().x - vec.x, this.getStart().y - vec.y);
    }

    /** Get the corners of the interior walls.
   * returns An array of x,y pairs.
   */

  }, {
    reference: 'corners',
    value: function corners() {
      return [this.interiorStart(), this.interiorEnd(), this.exteriorEnd(), this.exteriorStart()];
    }

    /**
   * Gets CCW angle from v1 to v2
   */

  }, {
    reference: 'halfAngleVector',
    value: function halfAngleVector(v1, v2) {
      var v1startX = 0.0,
          v1startY = 0.0,
          v1endX = 0.0,
          v1endY = 0.0;
      var v2startX = 0.0,
          v2startY = 0.0,
          v2endX = 0.0,
          v2endY = 0.0;

      // make the best of things if we dont have prev or next
      if (!v1) {
        v1startX = v2.getStart().x - (v2.getEnd().x - v2.getStart().x);
        v1startY = v2.getStart().y - (v2.getEnd().y - v2.getStart().y);

        v1endX = v2.getStart().x;
        v1endY = v2.getStart().y;
      } else {
        v1startX = v1.getStart().x;
        v1startY = v1.getStart().y;
        v1endX = v1.getEnd().x;
        v1endY = v1.getEnd().y;
      }

      if (!v2) {
        v2startX = v1.getEnd().x;
        v2startY = v1.getEnd().y;
        v2endX = v1.getEnd().x + (v1.getEnd().x - v1.getStart().x);
        v2endY = v1.getEnd().y + (v1.getEnd().y - v1.getStart().y);
      } else {
        v2startX = v2.getStart().x;
        v2startY = v2.getStart().y;
        v2endX = v2.getEnd().x;
        v2endY = v2.getEnd().y;
      }

      // CCW angle between edges
      var theta = MathUtilities.angle2pi(new THREE.Vector2(v1startX - v1endX, v1startY - v1endY), new THREE.Vector2(v2endX - v1endX, v2endY - v1endY));

      // cosine and sine of half angle
      var cs = Math.cos(theta / 2.0);
      var sn = Math.sin(theta / 2.0);

      // rotate v2
      var v2dx = v2endX - v2startX;
      var v2dy = v2endY - v2startY;

      var vx = v2dx * cs - v2dy * sn;
      var vy = v2dx * sn + v2dy * cs;

      // normalize
      var mag = MathUtilities.distance(new THREE.Vector2(0, 0), new THREE.Vector2(vx, vy));
      var desiredMag = this.offset / sn;
      var scalar = desiredMag / mag;

      var halfAngleVector = { x: vx * scalar, y: vy * scalar }; //new THREE.Vector2(vx * scalar, vy * scalar);
      return halfAngleVector;
    }
  }]);
  return InnerWall;
}(EventDispatcher);
var cornerTolerance = 20;

/**
 * Corners are used to define Multiple Walls.
 */
var Corner = function (_EventDispatcher) {
  inherits(Corner, _EventDispatcher);

  /** Constructs a corner.
  *  floorplan The associated floorplan.
  *  x X coordinate.
  *  y Y coordinate.
  *  id An optional unique id. If not set, created internally.
  */
  function Corner(floorplan, x, y, id) {
    classCallCheck(this, Corner);

    var this_ = possibleConstructorReturn(this, (Corner.__proto__ || Object.getPrototypeOf(Corner)).call(this));

    this_.wallStarts = [];
    this_.wallEnds = [];
    this_.moved_callbacks = null;
    this_.deleted_callbacks = null;
    this_.action_callbacks = null;
    this_.floorplan = floorplan;
    this_.x = x;
    this_.y = y;
    this_.id = id || MathUtilities.guide();
    this_.attachedRooms = [];
    return this_;
  }

  createClass(Corner, [{
    reference: 'attachRoom',
    value: function attachRoom(room) {
      if (room) {
        this.attachedRooms.push(room);
      }
    }
  }, {
    reference: 'getAttachedRooms',
    value: function getAttachedRooms() {
      return this.attachedRooms;
    }
  }, {
    reference: 'clearAttachedRooms',
    value: function clearAttachedRooms() {
      this.attachedRooms = [];
    }
  }, {
    reference: 'fireOnMove',
    value: function fireOnMove(func) {
      this.moved_callbacks.add(func);
    }

  }, {
    reference: 'fireOnDelete',
    value: function fireOnDelete(func) {
      this.deleted_callbacks.add(func);
    }

  }, {
    reference: 'fireOnAction',
    value: function fireOnAction(func) {
      this.action_callbacks.add(func);
    }
  }, {
    reference: 'fireAction',
    value: function fireAction(action) {
      this.dispatchEvent({ type: EVENT_ACTION, item: this, action: action });
    }

    /**
   * returns
   * @deprecated
   */

  }, {
    reference: 'getX',
    value: function getX() {
      return this.x;
    }

    /**
   * returns
   * @deprecated
   */

  }, {
    reference: 'getY',
    value: function getY() {
      return this.y;
    }

    /**
   *
   */

  }, {
    reference: 'snapToAxis',
    value: function snapToAxis(tolerance) {
      // try to snap this corner to an axis
      var snapped = { x: false, y: false };
      var local = this;

      this.adjacentCorners().forEach(function (corner) {
        if (Math.abs(corner.x - local.x) < tolerance) {
          local.x = corner.x;
          snapped.x = true;
        }
        if (Math.abs(corner.y - local.y) < tolerance) {
          local.y = corner.y;
          snapped.y = true;
        }
      });
      return snapped;
    }

    /** Moves corner relatively to new position.
   *  dx The delta x.
   *  dy The delta y.
   */

  }, {
    reference: 'relativeMove',
    value: function relativeMove(dx, dy) {
      this.move(this.x + dx, this.y + dy);
    }

    /** Remove callback. Fires the delete callbacks. */

  }, {
    reference: 'remove',
    value: function remove() {
      this.dispatchEvent({ type: EVENT_DELETED, item: this });
      //      this.deleted_callbacks.fire(this);
    }

    /** Removes all walls. */

  }, {
    reference: 'removeAll',
    value: function removeAll() {
      var i = 0;
      for (i = 0; i < this.wallStarts.length; i++) {
        this.wallStarts[i].remove();
      }
      for (i = 0; i < this.wallEnds.length; i++) {
        this.wallEnds[i].remove();
      }
      this.remove();
    }

    /** Moves corner to new position.
   *  newX The new x position.
   *  newY The new y position.
   */

  }, {
    reference: 'move',
    value: function move(newX, newY) {
      this.x = newX;
      this.y = newY;
      this.mergeWithIntersected();

      this.dispatchEvent({ type: EVENT_MOVED, item: this, position: new THREE.Vector2(this.x, this.y) });
      //      this.moved_callbacks.fire(this.x, this.y);

      this.wallStarts.forEach(function (wall) {
        wall.fireMoved();
      });

      this.wallEnds.forEach(function (wall) {
        wall.fireMoved();
      });
    }

    /** Gets the adjacent corners.
   * returns Array of corners.
   */

  }, {
    reference: 'adjacentCorners',
    value: function adjacentCorners() {
      var retArray = [];
      var i = 0;
      for (i = 0; i < this.wallStarts.length; i++) {
        retArray.push(this.wallStarts[i].getEnd());
      }
      for (i = 0; i < this.wallEnds.length; i++) {
        retArray.push(this.wallEnds[i].getStart());
      }
      return retArray;
    }

    /** Checks if a wall is connected.
   *  wall A wall.
   * returns True in case of connection.
   */

  }, {
    reference: 'isWallConnected',
    value: function isWallConnected(wall) {
      var i = 0;
      for (i = 0; i < this.wallStarts.length; i++) {
        if (this.wallStarts[i] == wall) {
          return true;
        }
      }
      for (i = 0; i < this.wallEnds.length; i++) {
        if (this.wallEnds[i] == wall) {
          return true;
        }
      }
      return false;
    }

    /**
   *
   */

  }, {
    reference: 'distanceFrom',
    value: function distanceFrom(point) {
      var distance = MathUtilities.distance(point, new THREE.Vector2(this.x, this.y));
      //console.log('x,y ' + x + ',' + y + ' to ' + this.getX() + ',' + this.getY() + ' is ' + distance);
      return distance;
    }

    /** Gets the distance from a wall.
   *  wall A wall.
   * returns The distance.
   */

  }, {
    reference: 'distanceFromWall',
    value: function distanceFromWall(wall) {
      return wall.distanceFrom(new THREE.Vector2(this.x, this.y));
    }

    /** Gets the distance from a corner.
   *  corner A corner.
   * returns The distance.
   */

  }, {
    reference: 'distanceFromCorner',
    value: function distanceFromCorner(corner) {
      return this.distanceFrom(new THREE.Vector2(corner.x, corner.y));
    }

    /** Detaches a wall.
   *  wall A wall.
   */

  }, {
    reference: 'detachWall',
    value: function detachWall(wall) {
      MathUtilities.removeValue(this.wallStarts, wall);
      MathUtilities.removeValue(this.wallEnds, wall);

      if (this.wallStarts.length == 0 && this.wallEnds.length == 0) {
        this.remove();
      }
    }

    /** Attaches a start wall.
   *  wall A wall.
   */

  }, {
    reference: 'attachStart',
    value: function attachStart(wall) {
      this.wallStarts.push(wall);
    }

    /** Attaches an end wall.
   *  wall A wall.
   */

  }, {
    reference: 'attachEnd',
    value: function attachEnd(wall) {
      this.wallEnds.push(wall);
    }

    /** Get wall to corner.
   *  corner A corner.
   * @return The associated wall or null.
   */

  }, {
    reference: 'wallTo',
    value: function wallTo(corner) {
      for (var i = 0; i < this.wallStarts.length; i++) {
        if (this.wallStarts[i].getEnd() === corner) {
          return this.wallStarts[i];
        }
      }
      return null;
    }

    /** Get wall from corner.
   *  corner A corner.
   * @return The associated wall or null.
   */

  }, {
    reference: 'wallFrom',
    value: function wallFrom(corner) {
      for (var i = 0; i < this.wallEnds.length; i++) {
        if (this.wallEnds[i].getStart() === corner) {
          return this.wallEnds[i];
        }
      }
      return null;
    }

    /** Get wall to or from corner.
   *  corner A corner.
   * @return The associated wall or null.
   */

  }, {
    reference: 'wallToOrFrom',
    value: function wallToOrFrom(corner) {
      return this.wallTo(corner) || this.wallFrom(corner);
    }

    /**
   *
   */

  }, {
    reference: 'combineWithCorner',
    value: function combineWithCorner(corner) {
      var i = 0;
      // update position to other corner's
      this.x = corner.x;
      this.y = corner.y;
      // absorb the other corner's wallStarts and wallEnds
      for (i = corner.wallStarts.length - 1; i >= 0; i--) {
        corner.wallStarts[i].setStart(this);
      }
      for (i = corner.wallEnds.length - 1; i >= 0; i--) {
        corner.wallEnds[i].setEnd(this);
      }
      // delete the other corner
      corner.removeAll();
      this.removeDuplicateWalls();
      this.floorplan.update();
    }
  }, {
    reference: 'mergeWithIntersected',
    value: function mergeWithIntersected() {
      var i = 0;
      //console.log('mergeWithIntersected for object: ' + this.type);
      // check corners
      for (i = 0; i < this.floorplan.getCorners().length; i++) {
        var corner = this.floorplan.getCorners()[i];
        if (this.distanceFromCorner(corner) < cornerTolerance && corner != this) {
          this.combineWithCorner(corner);
          return true;
        }
      }
      // check walls
      for (i = 0; i < this.floorplan.getWalls().length; i++) {
        var wall = this.floorplan.getWalls()[i];
        if (this.distanceFromWall(wall) < cornerTolerance && !this.isWallConnected(wall)) {
          // update position to be on wall
          var intersection = MathUtilities.closestPointOnLine(new THREE.Vector2(this.x, this.y), wall.getStart(), wall.getEnd());
          this.x = intersection.x;
          this.y = intersection.y;
          // merge this corner into wall by breaking wall into two parts
          this.floorplan.newWall(this, wall.getEnd());
          wall.setEnd(this);
          this.floorplan.update();
          return true;
        }
      }
      return false;
    }

    /** Ensure we do not have duplicate walls (i.e. same start and end points) */

  }, {
    reference: 'removeDuplicateWalls',
    value: function removeDuplicateWalls() {
      var i = 0;
      // delete the wall between these corners, if it exists
      var wallEndpoints = {};
      var wallStartpoints = {};
      for (i = this.wallStarts.length - 1; i >= 0; i--) {
        if (this.wallStarts[i].getEnd() === this) {
          // remove zero length wall
          this.wallStarts[i].remove();
        } else if (this.wallStarts[i].getEnd().id in wallEndpoints) {
          // remove duplicated wall
          this.wallStarts[i].remove();
        } else {
          wallEndpoints[this.wallStarts[i].getEnd().id] = true;
        }
      }
      for (i = this.wallEnds.length - 1; i >= 0; i--) {
        if (this.wallEnds[i].getStart() === this) {
          // removed zero length wall
          this.wallEnds[i].remove();
        } else if (this.wallEnds[i].getStart().id in wallStartpoints) {
          // removed duplicated wall
          this.wallEnds[i].remove();
        } else {
          wallStartpoints[this.wallEnds[i].getStart().id] = true;
        }
      }
    }
  }]);
  return Corner;
}(EventDispatcher);

/** The default wall texture. */
var defaultWallTexture = { url: 'rooms/textures/walls/wallmap.png', stretch: true, scale: 0 };

/**
 * A Wall is the basic element to create Rooms.
 *
 * Walls consists of two interior walls.
 */
var Wall = function (_EventDispatcher) {
  inherits(Wall, _EventDispatcher);

  /**
  * Constructs a new wall.
  *  start Start corner.
  *  end End corner.
  */
  function Wall(start, end) {
    classCallCheck(this, Wall);

    var this_ = possibleConstructorReturn(this, (Wall.__proto__ || Object.getPrototypeOf(Wall)).call(this));

    this_.start = start;
    this_.end = end;
    this_.name = 'wall';

    this_.id = this_.getUuid();

    this_.start.attachStart(this_);
    this_.end.attachEnd(this_);

    /** Front is the plane from start to end. */
    this_.frontEdge = null;

    /** Back is the plane from end to start. */
    this_.backEdge = null;


    this_.orphan = false;

    /** Items attached to this wall */
    this_.items = [];


    this_.onItems = [];

    /** The front-side texture. */
    this_.frontTexture = defaultWallTexture;

    /** The back-side texture. */
    this_.backTexture = defaultWallTexture;

    /** Wall thickness. */
    this_.thickness = Configuration.getNumericValue(configWallThickness);

    /** Wall height. */
    this_.height = Configuration.getNumericValue(configWallHeight);

    /** Actions to be applied after movement. */
    this_.moved_callbacks = null;

    /** Actions to be applied on removal. */
    this_.deleted_callbacks = null;

    /** Actions to be applied explicitly. */
    this_.action_callbacks = null;
    return this_;
  }

  createClass(Wall, [{
    reference: 'getUuid',
    value: function getUuid() {
      return [this.start.id, this.end.id].join();
    }
  }, {
    reference: 'resetFrontBack',
    value: function resetFrontBack() {
      this.frontEdge = null;
      this.backEdge = null;
      this.orphan = false;
    }
  }, {
    reference: 'snapToAxis',
    value: function snapToAxis(tolerance) {
      // order here is important, but unfortunately arbitrary
      this.start.snapToAxis(tolerance);
      this.end.snapToAxis(tolerance);
    }
  }, {
    reference: 'fireOnMove',
    value: function fireOnMove(func) {
      this.moved_callbacks.add(func);
    }
  }, {
    reference: 'fireOnDelete',
    value: function fireOnDelete(func) {
      this.deleted_callbacks.add(func);
    }
  }, {
    reference: 'dontFireOnDelete',
    value: function dontFireOnDelete(func) {
      this.deleted_callbacks.remove(func);
    }
  }, {
    reference: 'fireOnAction',
    value: function fireOnAction(func) {
      this.action_callbacks.add(func);
    }
  }, {
    reference: 'fireAction',
    value: function fireAction(action) {
      this.dispatchEvent({ type: EVENT_ACTION, action: action });
      //this.action_callbacks.fire(action);
    }
  }, {
    reference: 'relativeMove',
    value: function relativeMove(dx, dy) {
      this.start.relativeMove(dx, dy);
      this.end.relativeMove(dx, dy);
    }
  }, {
    reference: 'fireMoved',
    value: function fireMoved() {
      this.dispatchEvent({ type: EVENT_MOVED, position: null });
    }
  }, {
    reference: 'fireRedraw',
    value: function fireRedraw() {
      if (this.frontEdge) {
        //			this.frontEdge.dispatchEvent({type: EVENT_REDRAW});
        this.frontEdge.dispatchRedrawEvent();
        //this.frontEdge.redrawCallbacks.fire();
      }
      if (this.backEdge) {
        //			this.backEdge.dispatchEvent({type: EVENT_REDRAW});
        this.backEdge.dispatchRedrawEvent();
        //this.backEdge.redrawCallbacks.fire();
      }
    }
  }, {
    reference: 'getStart',
    value: function getStart() {
      return this.start;
    }
  }, {
    reference: 'getEnd',
    value: function getEnd() {
      return this.end;
    }
  }, {
    reference: 'getStartX',
    value: function getStartX() {
      return this.start.getX();
    }
  }, {
    reference: 'getEndX',
    value: function getEndX() {
      return this.end.getX();
    }
  }, {
    reference: 'getStartY',
    value: function getStartY() {
      return this.start.getY();
    }
  }, {
    reference: 'getEndY',
    value: function getEndY() {
      return this.end.getY();
    }
  }, {
    reference: 'remove',
    value: function remove() {
      this.start.detachWall(this);
      this.end.detachWall(this);
      this.dispatchEvent({ type: EVENT_DELETED, item: this });
      //this.deleted_callbacks.fire(this);
    }
  }, {
    reference: 'setStart',
    value: function setStart(corner) {
      this.start.detachWall(this);
      corner.attachStart(this);
      this.start = corner;
      this.fireMoved();
    }
  }, {
    reference: 'setEnd',
    value: function setEnd(corner) {
      this.end.detachWall(this);
      corner.attachEnd(this);
      this.end = corner;
      this.fireMoved();
    }
  }, {
    reference: 'distanceFrom',
    value: function distanceFrom(point) {
      return MathUtilities.pointDistanceFromLine(point, new THREE.Vector2(this.getStartX(), this.getStartY()), new THREE.Vector2(this.getEndX(), this.getEndY()));
    }

    /** Return the corner opposite of the one provided.
   *  corner The given corner.
   * returns The opposite corner.
   */

  }, {
    reference: 'oppositeCorner',
    value: function oppositeCorner(corner) {
      if (this.start === corner) {
        return this.end;
      } else if (this.end === corner) {
        return this.start;
      } else {
        console.log('Wall does not connect to corner');
        return null;
      }
    }
  }]);
  return Wall;
}(EventDispatcher);

/** Default texture to be used if nothing is provided. */
var defaultRoomTexture = { url: 'rooms/textures/floor/Nero-Riven-Slate.jpg', scale: 400 };

/**
 * A Room is the combination of a Floorplan with a floor plane.
 */
var Room = function (_EventDispatcher) {
  inherits(Room, _EventDispatcher);

  function Room(floorplan, corners) {
    classCallCheck(this, Room);

    var this_ = possibleConstructorReturn(this, (Room.__proto__ || Object.getPrototypeOf(Room)).call(this));

    this_.min = null;
    this_.max = null;
    this_.center = null;

    this_.floorplan = floorplan;
    this_.corners = corners;
    this_.interiorCorners = [];
    this_.edgePointer = null;
    this_.floorPlane = null;
    this_.customTexture = false;
    this_.floorChangeCallbacks = null;
    this_.updateWalls();
    this_.updateInteriorCorners();
    this_.generatePlane();

    this_.corners.forEach(function (corner) {
      corner.attachRoom(this_);
    });

    return this_;
  }

  createClass(Room, [{
    reference: 'getUuid',
    value: function getUuid() {
      var cornerUuids = MathUtilities.map(this.corners, function (c) {
        return c.id;
      });
      cornerUuids.sort();
      return cornerUuids.join();
    }
  }, {
    reference: 'fireOnFloorChange',
    value: function fireOnFloorChange(callback) {
      this.floorChangeCallbacks.add(callback);
    }
  }, {
    reference: 'getTexture',
    value: function getTexture() {
      var uuid = this.getUuid();
      var tex = this.floorplan.getFloorTexture(uuid);
      return tex || defaultRoomTexture;
    }
  }, {
    reference: 'setRoomWallsTexture',
    value: function setRoomWallsTexture(textureUrl, textureStretch, textureScale) {
      var edge = this.edgePointer;
      var iterateWhile = true;
      edge.setTexture(textureUrl, textureStretch, textureScale);
      console.log("texture updated");
      while (iterateWhile) {
        if (edge.next === this.edgePointer) {
          break;
        } else {
          edge = edge.next;
        }
        edge.setTexture(textureUrl, textureStretch, textureScale);
      }
    }
  }, {
    reference: 'setTexture',
    value: function setTexture(textureUrl, textureStretch, textureScale) {
      var uuid = this.getUuid();
      this.floorplan.setFloorTexture(uuid, textureUrl, textureScale);
      this.dispatchEvent({ type: EVENT_CHANGED, item: this });
      //		this.floorChangeCallbacks.fire();
    }
  }, {
    reference: 'generatePlane',
    value: function generatePlane() {
      var points = [];
      this.interiorCorners.forEach(function (corner) {
        points.push(new THREE.Vector2(corner.x, corner.y));
      });
      var shape = new THREE.Shape(points);
      var geometry = new THREE.ShapeGeometry(shape);
      this.floorPlane = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, visible: false }));
      //The below line was originally setting the plane visibility to false
      //Now its setting visibility to true. This is necessary to be detected
      //with the raycaster objects to click walls and floors.
      this.floorPlane.visible = true;
      this.floorPlane.rotation.set(Math.PI / 2, 0, 0);
      this.floorPlane.room = this; // js monkey patch

      var b3 = new THREE.Box3();
      b3.setFromObject(this.floorPlane);
      this.min = b3.min.clone();
      this.max = b3.max.clone();
      this.center = this.max.clone().sub(this.min).multiplyScalar(0.5).add(this.min);
    }
  }, {
    reference: 'cycleIndex',
    value: function cycleIndex(index) {
      if (index < 0) {
        return index += this.corners.length;
      } else {
        return index % this.corners.length;
      }
    }
  }, {
    reference: 'updateInteriorCorners',
    value: function updateInteriorCorners() {
      var edge = this.edgePointer;
      var iterateWhile = true;
      while (iterateWhile) {
        this.interiorCorners.push(edge.interiorStart());
        edge.generatePlane();
        if (edge.next === this.edgePointer) {
          break;
        } else {
          edge = edge.next;
        }
      }
    }

    /**
   * Populates each wall's interior walls relating to this room
   * this creates a fancy doubly connected edge list (DCEL)
   */

  }, {
    reference: 'updateWalls',
    value: function updateWalls() {

      var prevEdge = null;
      var firstEdge = null;

      for (var i = 0; i < this.corners.length; i++) {

        var firstCorner = this.corners[i];
        var secondCorner = this.corners[(i + 1) % this.corners.length];

        // find if wall is heading in that direction
        var wallTo = firstCorner.wallTo(secondCorner);
        var wallFrom = firstCorner.wallFrom(secondCorner);
        var edge = null;
        if (wallTo) {
          edge = new InnerWall(this, wallTo, true);
        } else if (wallFrom) {
          edge = new InnerWall(this, wallFrom, false);
        } else {
          console.log('corners arent connected by a wall');
        }

        if (i == 0) {
          firstEdge = edge;
        } else {
          edge.prev = prevEdge;
          prevEdge.next = edge;
          if (i + 1 == this.corners.length) {
            firstEdge.prev = edge;
            edge.next = firstEdge;
          }
        }
        prevEdge = edge;
      }

      // hold on to an edge reference
      this.edgePointer = firstEdge;
    }
  }]);
  return Room;
}(EventDispatcher);


var defaultFloorPlanTolerance = 10.0;

/**
 * A Floorplan represents a number of Walls, Corners and Rooms. This is an
 * abstract that keeps the 2d and 3d in sync
 */
var Floorplans = function (_EventDispatcher) {
  inherits(Floorplans, _EventDispatcher);

  /** Constructs a floorplan. */
  function Floorplans() {
    classCallCheck(this, Floorplans);

    // List of elements of Wall instance
    var this_ = possibleConstructorReturn(this, (Floorplans.__proto__ || Object.getPrototypeOf(Floorplans)).call(this));

    this_.walls = [];
    // List of elements of Corner instance
    this_.corners = [];
    // List of elements of Room instance
    this_.rooms = [];
    // List with reference to callback on a new wall insert event
    this_.new_wall_callbacks = [];
    // List with reference to callbacks on a new corner insert event
    this_.new_corner_callbacks = [];
    // List with reference to callbacks on redraw event
    this_.redraw_callbacks = [];
    // List with reference to callbacks for updated_rooms event
    this_.updated_rooms = [];
    // List with reference to callbacks for roomLoaded event
    this_.roomLoadedCallbacks = [];
    this_.floorTextures = {};

    this_._frame = null;
    return this_;
  }

  createClass(Floorplans, [{
    reference: 'wallEdges',


    // hack
    value: function wallEdges() {
      var edges = [];
      this.walls.forEach(function (wall) {
        if (wall.frontEdge) {
          edges.push(wall.frontEdge);
        }
        if (wall.backEdge) {
          edges.push(wall.backEdge);
        }
      });
      return edges;
    }

    // hack

  }, {
    reference: 'wallEdgePlanes',
    value: function wallEdgePlanes() {
      var planes = [];
      this.walls.forEach(function (wall) {
        if (wall.frontEdge) {
          planes.push(wall.frontEdge.plane);
        }
        if (wall.backEdge) {
          planes.push(wall.backEdge.plane);
        }
      });
      return planes;
    }
  }, {
    reference: 'floorPlanes',
    value: function floorPlanes() {
      return MathUtilities.map(this.rooms, function (room) {
        return room.floorPlane;
      });
    }
  }, {
    reference: 'fireOnNewWall',
    value: function fireOnNewWall(callback) {
      this.new_wall_callbacks.add(callback);
    }
  }, {
    reference: 'fireOnNewCorner',
    value: function fireOnNewCorner(callback) {
      this.new_corner_callbacks.add(callback);
    }
  }, {
    reference: 'fireOnRedraw',
    value: function fireOnRedraw(callback) {
      this.redraw_callbacks.add(callback);
    }
  }, {
    reference: 'fireOnUpdatedRooms',
    value: function fireOnUpdatedRooms(callback) {
      this.updated_rooms.add(callback);
    }

    // This method needs to be called from the 2d floorplan whenever
    // the other method newWall is called.
    // This is to ensure that there are no floating walls going across
    // other walls. If two walls are intersecting then the intersection point
    // has to create a new wall.

  }, {
    reference: 'newWallsForIntersections',
    value: function newWallsForIntersections(start, end) {
      var intersections = false;
      // This is a bug in the logic
      // When creating a new wall with a start and end
      // it needs to be checked if it is cutting other walls
      // If it cuts then all those walls have to removed and introduced as
      // new walls along with this new wall
      var cStart = new THREE.Vector2(start.getX(), start.getY());
      var cEnd = new THREE.Vector2(end.getX(), end.getY());

      for (var i = 0; i < this.walls.length; i++) {
        var twall = this.walls[i];
        var bstart = { x: twall.getStartX(), y: twall.getStartY() };
        var bend = { x: twall.getEndX(), y: twall.getEndY() };
        var iPoint = MathUtilities.lineLineIntersectPoint(cStart, cEnd, bstart, bend);
        if (iPoint) {
          var nCorner = this.newCorner(iPoint.x, iPoint.y);
          intersections = true;
        }
      }
      for (i = 0; i < this.corners.length; i++) {
        var aCorner = this.corners[i];
        if (aCorner) {
          aCorner.relativeMove(0, 0);
          aCorner.snapToAxis(25);
        }
      }
      this.update();
      for (i = 0; i < this.corners.length; i++) {
        aCorner = this.corners[i];
        if (aCorner) {
          aCorner.relativeMove(0, 0);
          aCorner.snapToAxis(25);
        }
      }

      this.update();
      return intersections;
    }

    /**
   * Creates a new wall.
   *
   *  start
   *            The start corner.
   *  end
   *            he end corner.
   * returns The new wall.
   */

  }, {
    reference: 'newWall',
    value: function newWall(start, end) {
      var wall = new Wall(start, end);
      this.walls.push(wall);
      var local = this;
      wall.addEventListener(EVENT_DELETED, function (o) {
        local.removeWall(o.item);
      });
      this.dispatchEvent({ type: EVENT_NEW, item: this, newItem: wall });
      this.update();
      return wall;
    }

    /**
   * Creates a new corner.
   *
   *  x
   *            The x coordinate.
   *  y
   *            The y coordinate.
   *  id
   *            An optional id. If unspecified, the id will be created
   *            internally.
   * returns The new corner.
   */

  }, {
    reference: 'newCorner',
    value: function newCorner(x, y, id) {
      var corner = new Corner(this, x, y, id);
      var local = this;
      this.corners.push(corner);

      corner.addEventListener(EVENT_DELETED, function (o) {
        local.removeCorner(o.item);
      });
      this.dispatchEvent({ type: EVENT_NEW, item: this, newItem: corner });

      // This code has been added by #0K. There should be an update whenever a
      // new corner is inserted
      // this.update();

      return corner;
    }

    /**
   * Removes a wall.
   *
   *  wall
   *            The wall to be removed.
   */

  }, {
    reference: 'removeWall',
    value: function removeWall(wall) {
      MathUtilities.removeValue(this.walls, wall);
      this.update();
    }

    /**
   * Removes a corner.
   *
   *  corner
   *            The corner to be removed.
   */

  }, {
    reference: 'removeCorner',
    value: function removeCorner(corner) {
      MathUtilities.removeValue(this.corners, corner);
    }

    /** Gets the walls. */

  }, {
    reference: 'getWalls',
    value: function getWalls() {
      return this.walls;
    }

    /** Gets the corners. */

  }, {
    reference: 'getCorners',
    value: function getCorners() {
      return this.corners;
    }

    /** Gets the rooms. */

  }, {
    reference: 'getRooms',
    value: function getRooms() {
      return this.rooms;
    }
  }, {
    reference: 'overlappedCorner',
    value: function overlappedCorner(x, y, tolerance) {
      tolerance = tolerance || defaultFloorPlanTolerance;
      for (var i = 0; i < this.corners.length; i++) {
        if (this.corners[i].distanceFrom(new THREE.Vector2(x, y)) < tolerance) {
          return this.corners[i];
        }
      }
      return null;
    }
  }, {
    reference: 'overlappedWall',
    value: function overlappedWall(x, y, tolerance) {
      tolerance = tolerance || defaultFloorPlanTolerance;
      for (var i = 0; i < this.walls.length; i++) {
        if (this.walls[i].distanceFrom(new THREE.Vector2(x, y)) < tolerance) {
          return this.walls[i];
        }
      }
      return null;
    }

    // import and export -- cleanup

  }, {
    reference: 'loadFloorplan',
    value: function loadFloorplan(floorplan) {
      this.reset();

      var corners = {};
      if (floorplan == null || !('corners' in floorplan) || !('walls' in floorplan)) {
        return;
      }
      for (var id in floorplan.corners) {
        var corner = floorplan.corners[id];
        corners[id] = this.newCorner(corner.x, corner.y, id);
      }
      var local = this;
      floorplan.walls.forEach(function (wall) {
        var newWall = local.newWall(corners[wall.corner1], corners[wall.corner2]);
        if (wall.frontTexture) {
          newWall.frontTexture = wall.frontTexture;
        }
        if (wall.backTexture) {
          newWall.backTexture = wall.backTexture;
        }
      });

      if ('newFloorTextures' in floorplan) {
        this.floorTextures = floorplan.newFloorTextures;
      }

      this.update();
      this.dispatchEvent({ type: EVENT_LOADED, item: this });
      if ('frame' in floorplan) {
        this.frame.clear();
        this.frame.maintainProportion = false;
        this.frame.x = floorplan.frame['x'];
        this.frame.y = floorplan.frame['y'];
        this.frame.transparency = floorplan.frame['transparency'];
        this.frame.anchorX = floorplan.frame['anchorX'];
        this.frame.anchorY = floorplan.frame['anchorY'];
        this.frame.width = floorplan.frame['width'];
        this.frame.height = floorplan.frame['height'];
        this.frame.url = floorplan.frame['url'];
        this.frame.maintainProportion = true;
      }
    }
  }, {
    reference: 'getFloorTexture',
    value: function getFloorTexture(uuid) {
      if (uuid in this.floorTextures) {
        return this.floorTextures[uuid];
      }
      return null;
    }
  }, {
    reference: 'setFloorTexture',
    value: function setFloorTexture(uuid, url, scale) {
      this.floorTextures[uuid] = { url: url, scale: scale };
    }

    /** clear out obsolete floor textures */

  }, {
    reference: 'updateFloorTextures',
    value: function updateFloorTextures() {
      var uuids = MathUtilities.map(this.rooms, function (room) {
        return room.getUuid();
      });
      for (var uuid in this.floorTextures) {
        if (!MathUtilities.hasValue(uuids, uuid)) {
          delete this.floorTextures[uuid];
        }
      }
    }



  }, {
    reference: 'reset',
    value: function reset() {
      var tmpCorners = this.corners.slice(0);
      var tmpWalls = this.walls.slice(0);
      tmpCorners.forEach(function (corner) {
        corner.remove();
      });
      tmpWalls.forEach(function (wall) {
        wall.remove();
      });
      this.corners = [];
      this.walls = [];
    }

    /**
   * Update rooms
   */

  }, {
    reference: 'update',
    value: function update() {
      this.walls.forEach(function (wall) {
        wall.resetFrontBack();
      });

      var roomCorners = this.findRooms(this.corners);
      this.rooms = [];
      var local = this;

      this.corners.forEach(function (corner) {
        corner.clearAttachedRooms();
      });

      roomCorners.forEach(function (corners) {
        local.rooms.push(new Room(local, corners));
      });

      this.assignOrphanEdges();
      this.updateFloorTextures();
      this.dispatchEvent({ type: EVENT_UPDATED, item: this });
      // this.updated_rooms.fire();
    }

    /**
   * Returns the center of the floorplan in the y plane
   */

  }, {
    reference: 'getCenter',
    value: function getCenter() {
      return this.getDimensions(true);
    }
  }, {
    reference: 'getSize',
    value: function getSize() {
      return this.getDimensions(false);
    }
  }, {
    reference: 'getDimensions',
    value: function getDimensions(center) {
      center = center || false; // otherwise, get size

      var xMin = Infinity;
      var xMax = -Infinity;
      var zMin = Infinity;
      var zMax = -Infinity;
      this.corners.forEach(function (corner) {
        if (corner.x < xMin) xMin = corner.x;
        if (corner.x > xMax) xMax = corner.x;
        if (corner.y < zMin) zMin = corner.y;
        if (corner.y > zMax) zMax = corner.y;
      });
      var ret;
      if (xMin == Infinity || xMax == -Infinity || zMin == Infinity || zMax == -Infinity) {
        ret = new THREE.Vector3();
      } else {
        if (center) {
          // center
          ret = new THREE.Vector3((xMin + xMax) * 0.5, 0, (zMin + zMax) * 0.5);
        } else {
          // size
          ret = new THREE.Vector3(xMax - xMin, 0, zMax - zMin);
        }
      }
      return ret;
    }
  }, {
    reference: 'assignOrphanEdges',
    value: function assignOrphanEdges() {
      this.walls.forEach(function (wall) {
        if (!wall.backEdge && !wall.frontEdge) {
          wall.orphan = true;
          var back = new InnerWall(null, wall, false);
          var front = new InnerWall(null, wall, true);
          back.generatePlane();
          front.generatePlane();
        }
      });
    }

    /*
   * Find the "rooms" in our planar straight-line graph. Rooms are set of the
   * smallest (by area) possible cycles in this graph.  corners The
   * corners of the floorplan. returns The rooms, each room as an array of
   * corners.
   */

  }, {
    reference: 'findRooms',
    value: function findRooms(corners) {

      function _calculateTheta(previousCorner, currentCorner, nextCorner) {
        var theta = MathUtilities.angle2pi(new THREE.Vector2(previousCorner.x - currentCorner.x, previousCorner.y - currentCorner.y), new THREE.Vector2(nextCorner.x - currentCorner.x, nextCorner.y - currentCorner.y));
        return theta;
      }

      function _removeDuplicateRooms(roomArray) {
        var results = [];
        var lookup = {};
        var hashFunc = function hashFunc(corner) {
          return corner.id;
        };
        var sep = '-';
        for (var i = 0; i < roomArray.length; i++) {
          // rooms are cycles, shift it around to check uniqueness
          var add = true;
          var room = roomArray[i];
          for (var j = 0; j < room.length; j++) {
            var roomShift = MathUtilities.cycle(room, j);
            var str = MathUtilities.map(roomShift, hashFunc).join(sep);
            if (lookup.hasOwnProperty(str)) {
              add = false;
            }
          }
          if (add) {
            results.push(roomArray[i]);
            lookup[str] = true;
          }
        }
        return results;
      }

      function _findTightestCycle(firstCorner, secondCorner) {
        var stack = [];
        var next = { corner: secondCorner, previousCorners: [firstCorner] };
        var visited = {};
        visited[firstCorner.id] = true;

        while (next) {
          // update previous corners, current corner, and visited corners
          var currentCorner = next.corner;
          visited[currentCorner.id] = true;

          // did we make it back to the startCorner?
          if (next.corner === firstCorner && currentCorner !== secondCorner) {
            return next.previousCorners;
          }

          var addToStack = [];
          var adjacentCorners = next.corner.adjacentCorners();
          for (var i = 0; i < adjacentCorners.length; i++) {
            var nextCorner = adjacentCorners[i];

            // is this where we came from?
            // give an exception if its the first corner and we aren't
            // at the second corner
            if (nextCorner.id in visited && !(nextCorner === firstCorner && currentCorner !== secondCorner)) {
              continue;
            }

            // nope, throw it on the queue
            addToStack.push(nextCorner);
          }

          var previousCorners = next.previousCorners.slice(0);
          previousCorners.push(currentCorner);
          if (addToStack.length > 1) {
            // visit the ones with smallest theta first
            var previousCorner = next.previousCorners[next.previousCorners.length - 1];
            addToStack.sort(function (a, b) {
              return _calculateTheta(previousCorner, currentCorner, b) - _calculateTheta(previousCorner, currentCorner, a);
            });
          }

          if (addToStack.length > 0) {
            // add to the stack
            addToStack.forEach(function (corner) {
              stack.push({ corner: corner, previousCorners: previousCorners });
            });
          }

          // pop off the next one
          next = stack.pop();
        }
        return [];
      }

      var loops = [];

      corners.forEach(function (firstCorner) {
        firstCorner.adjacentCorners().forEach(function (secondCorner) {
          loops.push(_findTightestCycle(firstCorner, secondCorner));
        });
      });

      // remove duplicates
      var uniqueLoops = _removeDuplicateRooms(loops);
      // remove CW loops
      var uniqueCCWLoops = MathUtilities.removeIf(uniqueLoops, MathUtilities.isClockwise);
      return uniqueCCWLoops;
    }
  }, {
    reference: 'frame',
    set: function set_1(val) {
      this._frame = val;
    },
    get: function get_1() {
      return this._frame;
    }
  }]);
  return Floorplans;
}(EventDispatcher);


/**
 * An Item is an entity for all things placed in the scene, e.g. at
 * walls or on the floor.
 */
var Item = function (_Mesh) {
  inherits(Item, _Mesh);

// HELPS TO LOAD OBJECTS
  function Item(model, metadata, geometry, material, position, rotation, scale) {
    classCallCheck(this, Item);

    var this_ = possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

    this_.model = model;
    this_.metadata = metadata;
    this_.errorGlow = new THREE.Mesh();
    this_.hover = false;
    this_.selected = false;
    this_.highlighted = false;
    this_.error = false;
    this_.emissiveColor = 0x444444;
    /** Does this object affect other floor items */
    this_.obstructFloorMoves = true;
    this_.position_set = false;
    /** Show rotate option in context menu */
    this_.allowRotate = true;
    this_.fixed = false;
    /** dragging */
    this_.dragOffset = new THREE.Vector3();
    this_.halfSize = new THREE.Vector3(0, 0, 0);
    this_.bhelper = null;

    this_.scene = this_.model.scene;
    this_.geometry = geometry;
    this_.material = material;
    if (!this_.material.color) {
      this_.material.color = new THREE.Color('#FFFFFF');
    }

    this_.errorColor = 0xff0000;

    this_.resizable = metadata.resizable;

    this_.castShadow = true;
    this_.receiveShadow = false;

    this_.geometry = geometry;
    this_.material = material;
    this_.originalmaterial = material;
    this_.texture = this_.material.texture;

    this_.position_set = false;
    if (position) {
      this_.position.copy(position);
      this_.position_set = true;
    }

    // center in its boundingbox
    this_.geometry.computeBoundingBox();
    this_.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-0.5 * (this_.geometry.boundingBox.max.x + this_.geometry.boundingBox.min.x), -0.5 * (this_.geometry.boundingBox.max.y + this_.geometry.boundingBox.min.y), -0.5 * (this_.geometry.boundingBox.max.z + this_.geometry.boundingBox.min.z)));
    this_.geometry.computeBoundingBox();
    this_.halfSize = this_.objectHalfSize();

    this_.canvasWH = document.createElement('canvas');
    this_.canvasWH.width = this_.getWidth() + 1.0;
    this_.canvasWH.height = this_.getHeight() + 1.0;

    this_.canvascontextWH = this_.canvasWH.getContext('2d');
    this_.canvasTextureWH = new THREE.CanvasTexture(this_.canvasWH);
    this_.canvasMaterialWH = new THREE.MeshBasicMaterial({ map: this_.canvasTextureWH, side: THREE.DoubleSide, transparent: true });
    this_.canvasPlaneWH = new THREE.Mesh(new THREE.PlaneGeometry(this_.getWidth(), this_.getHeight(), 1, 1), this_.canvasMaterialWH);
    this_.canvasPlaneWH.scale.set(1, 1, 1);
    this_.canvasPlaneWH.position.set(0, 0, this_.getDepth() * 0.5 + 0.3);
    this_.add(this_.canvasPlaneWH);

    this_.canvasWD = document.createElement('canvas');
    this_.canvasWD.width = this_.getWidth() + 1.0;
    this_.canvasWD.height = this_.getDepth() + 1.0;

    this_.canvascontextWD = this_.canvasWD.getContext('2d');
    this_.canvasTextureWD = new THREE.CanvasTexture(this_.canvasWD);
    this_.canvasMaterialWD = new THREE.MeshBasicMaterial({ map: this_.canvasTextureWD, side: THREE.DoubleSide, transparent: true });
    this_.canvasPlaneWD = new THREE.Mesh(new THREE.PlaneGeometry(this_.getWidth(), this_.getDepth(), 1, 1), this_.canvasMaterialWD);
    this_.canvasPlaneWD.rotateX(-Math.PI * 0.5);
    this_.canvasPlaneWD.scale.set(1, 1, 1);
    this_.canvasPlaneWD.position.set(0, this_.getHeight() * 0.5 + 0.3, 0);
    this_.add(this_.canvasPlaneWD);

    this_.canvasPlaneWH.visible = this_.canvasPlaneWD.visible = false;

    this_.resizeProportionally = true;

    if (rotation) {
      this_.rotation.y = rotation;
    }

    if (scale != null) {
      this_.setScale(scale.x, scale.y, scale.z);
    }

    if (this_.metadata.materialColors) {
      if (this_.metadata.materialColors.length) {
        if (this_.material.length) {
          for (var i = 0; i < this_.metadata.materialColors.length; i++) {
            this_.material[i].color = new THREE.Color(this_.metadata.materialColors[i]);
          }
        } else {
          this_.material.color = new THREE.Color(this_.metadata.materialColors[0]);
        }
      }
    }
    return this_;
  }

  createClass(Item, [{
    reference: 'updateCanvasTexture',
    value: function updateCanvasTexture(canvas, context, material, w, h, wPrefix, hPrefix) {
      if (w < 1 || h < 1) {
        return;
      }

      wPrefix = wPrefix ? wPrefix : 'w:';
      hPrefix = hPrefix ? hPrefix : 'h:';

      w *= 3;
      h *= 3;

      canvas.width = w;
      canvas.height = h;
      canvas.style.letterSpacing = '-22.5px';

      context.font = 'bold 45pt Aldrich';
      context.fillStyle = '#DADADA33';
      context.fillRect(0, 0, w, h);
      context.textAlign = 'center';
      context.textBaseline = 'middle';

      context.lineWidth = 3;
      context.setLineDash([1, 2]);
      context.strokeStyle = '#000000';

      context.beginPath();
      context.moveTo(0, h * 0.5);
      context.lineTo(w, h * 0.5);
      context.closePath();
      context.stroke();

      context.beginPath();
      context.moveTo(w * 0.125, 0);
      context.lineTo(w * 0.125, h);
      context.closePath();
      context.stroke();

      context.lineWidth = 1;
      context.setLineDash([0]);
      context.strokeStyle = '#0000FF';
      context.strokeText(wPrefix + Dimensioning.cmToMeasureString(w / 3), w * 0.5, h * 0.5);

      context.fillStyle = '#FF0000';
      context.fillText(wPrefix + Dimensioning.cmToMeasureString(w / 3), w * 0.5, h * 0.5);

      context.translate(w * 0.125, 0);
      context.rotate(Math.PI * 0.5);
      context.strokeStyle = '#0000FF';
      context.strokeText(hPrefix + Dimensioning.cmToMeasureString(h / 3), h * 0.5, 0);

      context.fillStyle = '#FF0000';
      context.fillText(hPrefix + Dimensioning.cmToMeasureString(h / 3), h * 0.5, 0);
      context.restore();
      material.map.needsUpdate = true;
    }
  },  {
    reference: 'remove',
    value: function remove() {
      this.scene.removeItem(this);
    }



  }, {
    reference: 'resize',
    value: function resize(height, width, depth) {
      var x = width / this.getWidth();
      var y = height / this.getHeight();
      var z = depth / this.getDepth();

      if (this.resizeProportionally) {
        if (Math.abs(width - this.getWidth()) > 0.1) {
          this.setScale(x, x, x);
        } else if (Math.abs(height - this.getHeight()) > 0.1) {
          this.setScale(y, y, y);
        } else {
          this.setScale(z, z, z);
        }
        return;
      }
      this.setScale(x, y, z);
    }
  }, {
    reference: 'getMaterial',
    value: function getMaterial() {
      return this.material;
    }
  }, {
    reference: 'getMaterialColor',
    value: function getMaterialColor(index) {
      index = index ? index : 0;
      if (this.material.length) {
        return '#' + this.material[index].color.getHexString();
      }
      return '#' + this.material.color.getHexString();
    }

    // Always send an hexadecimal string value for color - ex. '#FFFFFF'

  }, {
    reference: 'setMaterialColor',
    value: function setMaterialColor(color, index) {
      var c = new THREE.Color(color);
      if (this.material.length) {
        index = index ? index : 0;
        this.material[index].color = c;
        return;
      }
      this.material.color = c;
    }

  }, {
    reference: 'setScale',
    value: function setScale(x, y, z) {
      var scaleVec = new THREE.Vector3(x, y, z);
      this.halfSize.multiply(scaleVec);
      scaleVec.multiply(this.scale);
      this.scale.set(scaleVec.x, scaleVec.y, scaleVec.z);
      this.resized();
      if (this.bhelper) {
        this.bhelper.update();
      }
      this.updateCanvasTexture(this.canvasWH, this.canvascontextWH, this.canvasMaterialWH, this.getWidth(), this.getHeight(), 'w:', 'h:');
      this.updateCanvasTexture(this.canvasWD, this.canvascontextWD, this.canvasMaterialWD, this.getWidth(), this.getDepth(), 'w:', 'd:');

      this.scene.needsUpdate = true;
    }
  }, {
    reference: 'getProportionalResize',
    value: function getProportionalResize() {
      return this.resizeProportionally;
    }
  }, {
    reference: 'setProportionalResize',
    value: function setProportionalResize(flag) {
      this.resizeProportionally = flag;
    }

  }, {
    reference: 'setFixed',
    value: function setFixed(fixed) {
      this.fixed = fixed;
    }


  }, {
    reference: 'resized',
    value: function resized() {}

  }, {
    reference: 'getHeight',
    value: function getHeight() {
      return this.halfSize.y * 2.0;
    }



  }, {
    reference: 'getWidth',
    value: function getWidth() {
      return this.halfSize.x * 2.0;
    }



  }, {
    reference: 'getDepth',
    value: function getDepth() {
      return this.halfSize.z * 2.0;
    }



  }, {
    reference: 'placeInRoom',
    value: function placeInRoom() {}



  }, {
    reference: 'initObject',
    value: function initObject() {
      this.placeInRoom();
      //resize loaded objects
      if (this.halfSize.x < 1.0) {
        this.resize(this.getHeight() * 140, this.getWidth() * 140, this.getDepth() * 140);
      }
      this.bhelper = new THREE.BoxHelper(this);
      this.scene.add(this.bhelper);
      this.bhelper.visible = false;
      // select and stuff
      this.scene.needsUpdate = true;
    }



  }, {
    reference: 'removed',
    value: function removed() {}

    /** on is a bool */

  }, {
    reference: 'updateHighlight',
    value: function updateHighlight() {
      var this_2 = this;

      var on = this.hover || this.selected;
      this.highlighted = on;
      var hex = on ? this.emissiveColor : 0x000000;
      if (this.material) {
        if (this.material.length) {
          this.material.forEach(function (material) {
            material.emissive.setHex(hex);
            this_2.material.emissive = new THREE.Color(hex);
          });
        } else {
          this.material.emissive.setHex(hex);
          this.material.emissive = new THREE.Color(hex);
        }
      }
    }



  }, {
    reference: 'mouseOver',
    value: function mouseOver() {
      this.hover = true;
      this.updateHighlight();
    }



  }, {
    reference: 'mouseOff',
    value: function mouseOff() {
      this.hover = false;
      this.updateHighlight();
    }



  }, {
    reference: 'setSelected',
    value: function setSelected() {
      this.setScale(1, 1, 1);
      this.selected = true;
      this.bhelper.visible = true;
      this.canvasPlaneWH.visible = this.canvasPlaneWD.visible = true;
      this.updateHighlight();
    }



  }, {
    reference: 'setUnselected',
    value: function setUnselected() {
      this.selected = false;
      this.bhelper.visible = false;
      this.canvasPlaneWH.visible = this.canvasPlaneWD.visible = false;
      this.updateHighlight();
    }

    /** intersection has attributes point (vec3) and object (THREE.Mesh) */

  }, {
    reference: 'clickPressed',
    value: function clickPressed(intersection) {
      this.dragOffset.copy(intersection.point).sub(this.position);
    }



  }, {
    reference: 'clickDragged',
    value: function clickDragged(intersection) {
      if (intersection) {
        this.moveToPosition(intersection.point.sub(this.dragOffset), intersection);
      }
    }



  }, {
    reference: 'rotate',
    value: function rotate(intersection) {
      if (intersection) {
        var angle = MathUtilities.angle(new THREE.Vector2(0, 1), new THREE.Vector2(intersection.point.x - this.position.x, intersection.point.z - this.position.z));
        var snapTolerance = Math.PI / 16.0;
        // snap to intervals near Math.PI/2
        for (var i = -4; i <= 4; i++) {
          if (Math.abs(angle - i * (Math.PI / 2)) < snapTolerance) {
            angle = i * (Math.PI / 2);
            break;
          }
        }
        this.rotation.y = angle;
      }
    }



  }, {
    reference: 'moveToPosition',
    value: function moveToPosition(vec3) {
      this.position.copy(vec3);
      if (this.bhelper) {
        this.bhelper.update();
      }
    }



  }, {
    reference: 'clickReleased',
    value: function clickReleased() {
      if (this.error) {
        this.hideError();
      }
    }

    /**
   * Returns an array of planes to use other than the ground plane for passing
   * intersection to clickPressed and clickDragged
   */

  }, {
    reference: 'customIntersectionPlanes',
    value: function customIntersectionPlanes() {
      return [];
    }

    /**
   * returns the 2d corners of the bounding polygon
   *
   * offset is Vector3 (used for getting corners of object at a new position)
   *
   */

  }, {
    reference: 'getCorners',
    value: function getCorners(xDim, yDim, position) {
      position = position || this.position;
      var halfSize = this.halfSize.clone();
      var c1 = new THREE.Vector3(-halfSize.x, 0, -halfSize.z);
      var c2 = new THREE.Vector3(halfSize.x, 0, -halfSize.z);
      var c3 = new THREE.Vector3(halfSize.x, 0, halfSize.z);
      var c4 = new THREE.Vector3(-halfSize.x, 0, halfSize.z);

      var transform = new THREE.Matrix4();
      // console.log(this.rotation.y);
      transform.makeRotationY(this.rotation.y); // + Math.PI/2)

      c1.applyMatrix4(transform);
      c2.applyMatrix4(transform);
      c3.applyMatrix4(transform);
      c4.applyMatrix4(transform);

      c1.add(position);
      c2.add(position);
      c3.add(position);
      c4.add(position);

      // halfSize.applyMatrix4(transform);

      // var min = position.clone().sub(halfSize);
      // var max = position.clone().add(halfSize);

      var corners = [{ x: c1.x, y: c1.z }, { x: c2.x, y: c2.z }, { x: c3.x, y: c3.z }, { x: c4.x, y: c4.z }];
      return corners;
    }



  }, {
    reference: 'isValidPosition',
    value: function isValidPosition() {
      return false;
    }



  }, {
    reference: 'hideError',
    value: function hideError() {
      if (this.error) {
        this.error = false;
        this.scene.remove(this.errorGlow);
      }
    }



  }, {
    reference: 'objectHalfSize',
    value: function objectHalfSize() {
      var objectBox = new THREE.Box3();
      objectBox.setFromObject(this);
      return objectBox.max.clone().sub(objectBox.min).divideScalar(2);
    }



  }, {
    reference: 'createGlow',
    value: function createGlow(color, opacity, ignoreDepth) {
      ignoreDepth = ignoreDepth || false;
      opacity = opacity || 0.2;
      var glowMaterial = new THREE.MeshBasicMaterial({ color: color, blending: THREE.AdditiveBlending, opacity: 0.2, transparent: true, depthTest: !ignoreDepth });
      var glow = new THREE.Mesh(this.geometry.clone(), glowMaterial);
      glow.position.copy(this.position);
      glow.rotation.copy(this.rotation);
      glow.scale.copy(this.scale);
      return glow;
    }
  }, {
    reference: 'getMetaData',
    value: function getMetaData() {
      var matattribs = [];
      if (this.material.length) {
        this.material.forEach(function (mat) {
          matattribs.push('#' + mat.color.getHexString());
        });
      } else {
        matattribs.push('#' + this.material.color.getHexString());
      }
      return { item_name: this.metadata.itemName,
        item_type: this.metadata.itemType, model_url: this.metadata.modelUrl,
        xpos: this.position.x, ypos: this.position.y, zpos: this.position.z,
        rotation: this.rotation.y,
        scale_x: this.scale.x, scale_y: this.scale.y, scale_z: this.scale.z, fixed: this.fixed,
        material_colors: matattribs };
    }
  }]);
  return Item;
}(Mesh);

/**
 * A Floor Item is an entity to be placed related to a floor.
 */
var FloorItem = function (_Item) {
  inherits(FloorItem, _Item);

  function FloorItem(model, metadata, geometry, material, position, rotation, scale) {
    classCallCheck(this, FloorItem);
    return possibleConstructorReturn(this, (FloorItem.__proto__ || Object.getPrototypeOf(FloorItem)).call(this, model, metadata, geometry, material, position, rotation, scale));
  }

  createClass(FloorItem, [{
    reference: 'placeInRoom',
    value: function placeInRoom() {
      if (!this.position_set) {
        var center = this.model.floorplan.getCenter();
        this.position.x = center.x;
        this.position.z = center.z;
        this.position.y = 0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y);
      }
    }

    /** Take action after a resize */

  }, {
    reference: 'resized',
    value: function resized() {
      this.position.y = this.halfSize.y;
    }
  }, {
    reference: 'moveToPosition',
    value: function moveToPosition(vec3) {
      // keeps the position in the room and on the floor
      if (!this.isValidPosition(vec3)) {
        this.showError(vec3);
        return;
      } else {
        vec3.y = this.position.y; // keep it on the floor!
        //			this.position.copy(vec3);
        get(FloorItem.prototype.__proto__ || Object.getPrototypeOf(FloorItem.prototype), 'moveToPosition', this).call(this, vec3);
      }
    }
  }, {
    reference: 'isValidPosition',
    value: function isValidPosition(vec3) {
      var corners = this.getCorners('x', 'z', vec3);
      // check if we are in a room
      var rooms = this.model.floorplan.getRooms();
      var isInARoom = false;
      for (var i = 0; i < rooms.length; i++) {
        if (MathUtilities.pointInPolygon(new THREE.Vector2(vec3.x, vec3.z), rooms[i].interiorCorners) && !MathUtilities.polygonPolygonIntersect(corners, rooms[i].interiorCorners)) {
          isInARoom = true;
        }
      }
      if (!isInARoom) {
        //We do not want to check if the object is in room or not
        //It is upto the user to place it anywhere he/she wants however
        //			return false;
        return true;
      }
      return true;
    }
  }]);
  return FloorItem;
}(Item);

/**
 * A Wall Item is an entity to be placed related to a wall.
 */
var WallItem = function (_Item) {
  inherits(WallItem, _Item);

  function WallItem(model, metadata, geometry, material, position, rotation, scale) {
    classCallCheck(this, WallItem);

    /** The currently applied wall edge. */
    var this_ = possibleConstructorReturn(this, (WallItem.__proto__ || Object.getPrototypeOf(WallItem)).call(this, model, metadata, geometry, material, position, rotation, scale));

    this_.currentWallEdge = null;
    /** used for finding rotations */
    this_.refVec = new THREE.Vector2(0, 1.0);
    this_.wallOffsetScalar = 0;
    this_.sizeX = 0;
    this_.sizeY = 0;
    this_.addToWall = false;
    this_.boundToFloor = false;
    this_.frontVisible = false;
    this_.backVisible = false;
    this_.allowRotate = false;
    return this_;
  }

  /** Get the closet wall edge.
  * returns The wall edge.
  */

  createClass(WallItem, [{
    reference: 'closestWallEdge',
    value: function closestWallEdge() {
      var wallEdges = this.model.floorplan.wallEdges();
      var wallEdge = null;
      var minDistance = null;
      var itemX = this.position.x;
      var itemZ = this.position.z;
      wallEdges.forEach(function (edge) {
        var distance = edge.distanceTo(itemX, itemZ);
        if (minDistance === null || distance < minDistance) {
          minDistance = distance;
          wallEdge = edge;
        }
      });
      return wallEdge;
    }
  }, {
    reference: 'removed',
    value: function removed() {
      if (this.currentWallEdge != null && this.addToWall) {
        MathUtilities.removeValue(this.currentWallEdge.wall.items, this);
        this.redrawWall();
      }
    }
  }, {
    reference: 'redrawWall',
    value: function redrawWall() {
      if (this.addToWall) {
        this.currentWallEdge.wall.fireRedraw();
      }
    }

  }, {
    reference: 'updateEdgeVisibility',
    value: function updateEdgeVisibility(visible, front) {
      if (front) {
        this.frontVisible = visible;
      } else {
        this.backVisible = visible;
      }
      this.visible = this.frontVisible || this.backVisible;
    }
  }, {
    reference: 'updateSize',
    value: function updateSize() {
      this.wallOffsetScalar = (this.geometry.boundingBox.max.z - this.geometry.boundingBox.min.z) * this.scale.z / 2.0;
      this.sizeX = (this.geometry.boundingBox.max.x - this.geometry.boundingBox.min.x) * this.scale.x;
      this.sizeY = (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y) * this.scale.y;
    }

  }, {
    reference: 'resized',
    value: function resized() {
      if (this.boundToFloor) {
        this.position.y = 0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y) * this.scale.y + 0.01;
      }
      this.updateSize();
      this.redrawWall();
    }

  }, {
    reference: 'placeInRoom',
    value: function placeInRoom() {
      var closestWallEdge = this.closestWallEdge();
      this.changeWallEdge(closestWallEdge);
      this.updateSize();

      if (!this.position_set) {
        // position not set
        var center = closestWallEdge.interiorCenter();
        var newPos = new THREE.Vector3(center.x, closestWallEdge.wall.height / 2.0, center.y);
        this.boundMove(newPos);
        this.position.copy(newPos);
        this.redrawWall();
      }
    }

  }, {
    reference: 'moveToPosition',
    value: function moveToPosition(vec3, intersection) {
      var intersectionEdge = intersection ? intersection.object ? intersection.object.edge : intersection : this.closestWallEdge();
      this.changeWallEdge(intersectionEdge);
      this.boundMove(vec3);
      //		this.position.copy(vec3);
      get(WallItem.prototype.__proto__ || Object.getPrototypeOf(WallItem.prototype), 'moveToPosition', this).call(this, vec3);
      this.redrawWall();
    }


  }, {
    reference: 'getWallOffset',
    value: function getWallOffset() {
      return this.wallOffsetScalar;
    }


  }, {
    reference: 'changeWallEdge',
    value: function changeWallEdge(wallEdge) {
      if (this.currentWallEdge != null) {
        if (this.addToWall) {
          MathUtilities.removeValue(this.currentWallEdge.wall.items, this);
          this.redrawWall();
        } else {
          MathUtilities.removeValue(this.currentWallEdge.wall.onItems, this);
        }
      }

      var local = this;

      function __remove(event) {
        local.remove(event.item);
      }

      // handle subscription to wall being removed
      if (this.currentWallEdge != null) {
        //			this.currentWallEdge.wall.dontFireOnDelete(this.remove.bind(this));
        this.currentWallEdge.wall.removeEventListener(EVENT_DELETED, __remove);
      }
      //		wallEdge.wall.fireOnDelete(this.remove.bind(this));
      wallEdge.wall.addEventListener(EVENT_DELETED, __remove);

      // find angle between wall normals
      var normal2 = new THREE.Vector2();
      var normal3 = wallEdge.plane.geometry.faces[0].normal;
      normal2.x = normal3.x;
      normal2.y = normal3.z;

      var angle = MathUtilities.angle(new THREE.Vector2(this.refVec.x, this.refVec.y), new THREE.Vector2(normal2.x, normal2.y));
      this.rotation.y = angle;
      // update currentWall
      this.currentWallEdge = wallEdge;
      if (this.addToWall) {
        wallEdge.wall.items.push(this);
        this.redrawWall();
      } else {
        wallEdge.wall.onItems.push(this);
      }
    }


  }, {
    reference: 'customIntersectionPlanes',
    value: function customIntersectionPlanes() {
      return this.model.floorplan.wallEdgePlanes();
    }

  }, {
    reference: 'boundMove',
    value: function boundMove(vec3) {
      var tolerance = 1;
      var edge = this.currentWallEdge;
      vec3.applyMatrix4(edge.interiorTransform);
      if (vec3.x < this.sizeX / 2.0 + tolerance) {
        vec3.x = this.sizeX / 2.0 + tolerance;
      } else if (vec3.x > edge.interiorDistance() - this.sizeX / 2.0 - tolerance) {
        vec3.x = edge.interiorDistance() - this.sizeX / 2.0 - tolerance;
      }

      if (this.boundToFloor) {
        vec3.y = 0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y) * this.scale.y + 0.01;
      } else {
        if (vec3.y < this.sizeY / 2.0 + tolerance) {
          vec3.y = this.sizeY / 2.0 + tolerance;
        } else if (vec3.y > edge.height - this.sizeY / 2.0 - tolerance) {
          vec3.y = edge.height - this.sizeY / 2.0 - tolerance;
        }
      }
      vec3.z = this.getWallOffset();
      vec3.applyMatrix4(edge.invInteriorTransform);
    }
  }]);
  return WallItem;
}(Item);


var InWallItem = function (_WallItem) {
  inherits(InWallItem, _WallItem);

  function InWallItem(model, metadata, geometry, material, position, rotation, scale) {
    classCallCheck(this, InWallItem);

    var this_ = possibleConstructorReturn(this, (InWallItem.__proto__ || Object.getPrototypeOf(InWallItem)).call(this, model, metadata, geometry, material, position, rotation, scale));

    this_.addToWall = true;
    return this_;
  }
  createClass(InWallItem, [{
    reference: 'getWallOffset',
    value: function getWallOffset() {
      // fudge factor so it saves to the right wall
      return -this.currentWallEdge.offset + 0.5;
    }
  }]);
  return InWallItem;
}(WallItem);
(FloorItem);


var item_types = { 1: FloorItem, 2: WallItem, 3: InWallItem};

/** Catalogue class to create items. */
var Catalogue = function () {
  function Catalogue() {
    classCallCheck(this, Catalogue);
  }

  createClass(Catalogue, null, [{
    reference: 'getClass',

    /** Gets the class for the specified item. */
    value: function getClass(itemType) {
      return item_types[itemType];
    }
  }]);
  return Catalogue;
}();

/**
 * The Scene is a manager of Items and also links to a ThreeJS scene.
 */
var Scene_copy = function (_EventDispatcher) {
  inherits(SceneItems, _EventDispatcher);

  /**
  * Constructs a scene.
  *  model The associated model.
  *  textureDir The directory from which to load the textures.
  */
  function SceneItems(model, textureDir) {
    classCallCheck(this, SceneItems);

    var this_ = possibleConstructorReturn(this, (SceneItems.__proto__ || Object.getPrototypeOf(SceneItems)).call(this));

    this_.model = model;
    this_.textureDir = textureDir;

    this_.scene = new THREE.Scene();
    this_.scene.background = new THREE.Color(0xededed);

    this_.items = [];
    this_.needsUpdate = false;
    // init item loader
    this_.loader = new JSONLoader();
    this_.loader.setCrossOrigin('');

    this_.gltfloader = new threeGltfLoader();
    this_.objloader = new threeObjloader();
    this_.gltfloader.setCrossOrigin('');

    this_.itemLoadingCallbacks = null;
    this_.itemLoadedCallbacks = null;
    this_.itemRemovedCallbacks = null;
    //		this.add(grid);

    return this_;
  }

  /** Adds a non-item, basically a mesh, to the scene.
  *  mesh The mesh to be added.
  */


  createClass(SceneItems, [{
    reference: 'add',
    value: function add(mesh) {
      this.scene.add(mesh);
    }

    /** Removes a non-item, basically a mesh, from the scene.
   *  mesh The mesh to be removed.
   */

  }, {
    reference: 'remove',
    value: function remove(mesh) {
      this.scene.remove(mesh);
      MathUtilities.removeValue(this.items, mesh);
    }

    /** Gets the scene.
   * returns The scene.
   */

  }, {
    reference: 'getScene',
    value: function getScene() {
      return this.scene;
    }

    /** Gets the items.
   * returns The items.
   */

  }, {
    reference: 'getItems',
    value: function getItems() {
      return this.items;
    }

    /** Gets the count of items.
   * returns The count.
   */

  }, {
    reference: 'itemCount',
    value: function itemCount() {
      return this.items.length;
    }

    /** Removes all items. */

  }, {
    reference: 'clearItems',
    value: function clearItems() {
      var local = this;
      this.items.forEach(function (item) {
        local.removeItem(item, true);
      });
      this.items = [];
    }

    /**
   * Removes an item.
   *  item The item to be removed.
   *  dontRemove If not set, also remove the item from the items list.
   */

  }, {
    reference: 'removeItem',
    value: function removeItem(item, keepInList) {
      keepInList = keepInList || false;
      this.dispatchEvent({ type: EVENT_ITEM_DELETED, item: item });
      item.removed();
      this.scene.remove(item);
      if (!keepInList) {
        MathUtilities.removeValue(this.items, item);
      }
    }
  },{

    /**
   * Creates an item and adds it to the scene.
   *  itemType The type of the item given by an enumerator.
   *  fileName The name of the file to load.
   *  position The initial position.
   *  rotation The initial rotation around the y axis.
   *  scale The initial scaling.
   *  fixed True if fixed.
   *  newItemDefinitions - Object with position and 'edge' attribute if it is a wall item
   */
    reference: 'addItem',
    value: function addItem(itemType, fileName, metadata, position, rotation, scale, fixed, newItemDefinitions) {
      itemType = itemType || 1;
      var local = this;

      function addToMaterials(materials, newmaterial) {
        for (var i = 0; i < materials.length; i++) {
          var mat = materials[i];
          if (mat.name == newmaterial.name) {
            return [materials, i];
          }
        }
        materials.push(newmaterial);
        return [materials, materials.length - 1];
      }

      var loaderCallback = function loaderCallback(geometry, materials) {
        //			var item = new (Catalogue.getClass(itemType))(local.model, metadata, geometry, new MeshFaceMaterial(materials), position, rotation, scale);
        var item = new (Catalogue.getClass(itemType))(local.model, metadata, geometry, materials, position, rotation, scale);
        item.fixed = fixed || false;
        local.items.push(item);
        local.add(item);
        item.initObject();
        local.dispatchEvent({ type: EVENT_ITEM_LOADED, item: item });
        if (newItemDefinitions) {
          item.moveToPosition(newItemDefinitions.position, newItemDefinitions.edge);
          item.placeInRoom();
        }
      };
      var gltfCallback = function gltfCallback(gltfModel) {
        var newmaterials = [];
        var newGeometry = new THREE.Geometry();

        gltfModel.scene.traverse(function (child) {
          if (child.type == 'Mesh') {
            var materialindices = [];
            if (child.material.length) {
              for (var k = 0; k < child.material.length; k++) {
                var newItems = addToMaterials(newmaterials, child.material[k]);
                newmaterials = newItems[0];
                materialindices.push(newItems[1]);
              }
            } else {
              newItems = addToMaterials(newmaterials, child.material); //materials.push(child.material);
              newmaterials = newItems[0];
              materialindices.push(newItems[1]);
            }

            if (child.geometry.isBufferGeometry) {
              var tGeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
              tGeometry.faces.forEach(function (face) {
                //							face.materialIndex = face.materialIndex + newmaterials.length;
                face.materialIndex = materialindices[face.materialIndex];
              });
              child.updateMatrix();
              newGeometry.merge(tGeometry, child.matrix);
            } else {
              child.geometry.faces.forEach(function (face) {
                //							face.materialIndex = face.materialIndex + newmaterials.length;
                face.materialIndex = materialindices[face.materialIndex];
              });
              child.updateMatrix();
              newGeometry.mergeMesh(child);
            }
          }
        });
        loaderCallback(newGeometry, newmaterials);
      };

      var objCallback = function objCallback(object) {
        var materials = [];
        var newGeometry = new THREE.Geometry();
        object.traverse(function (child) {
          if (child.type == 'Mesh') {
            if (child.material.length) {
              materials = materials.concat(child.material);
            } else {
              materials.push(child.material);
            }
            if (child.geometry.isBufferGeometry) {
              var tGeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
              child.updateMatrix();
              newGeometry.merge(tGeometry, child.matrix);
            } else {
              child.updateMatrix();
              newGeometry.mergeMesh(child);
            }
          }
        });
        loaderCallback(newGeometry, materials);
      };

      this.dispatchEvent({ type: EVENT_ITEM_LOADING });
      if (!metadata.format) {
        this.loader.load(fileName, loaderCallback, undefined);
      } else if (metadata.format == 'gltf') {
        this.gltfloader.load(fileName, gltfCallback, null, null);
      } else if (metadata.format == 'obj') {
        this.objloader.load(fileName, objCallback, null, null);
      }
    }
  }]);
  return SceneItems;}(EventDispatcher);


var Model = function (_EventDispatcher) {
  inherits(Model, _EventDispatcher);

  /** Constructs a new model.
  *  textureDir The directory containing the textures.
  */
  function Model(textureDir) {
    classCallCheck(this, Model);

    var this_ = possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this));

    this_.floorplan = new Floorplans();
    this_.scene = new Scene_copy(this_, textureDir);
    this_.roomLoadingCallbacks = null;
    this_.roomLoadedCallbacks = null;
    this_.roomSavedCallbacks = null;
    this_.roomDeletedCallbacks = null;

    return this_;
  }

  createClass(Model, [{
    reference: 'loadSerialized',
    value: function loadSerialized(json) {
      this.dispatchEvent({ type: EVENT_LOADING, item: this });

      var data = JSON.parse(json);
      this.newRoom(data.floorplan, data.items);

      this.dispatchEvent({ type: EVENT_LOADED, item: this });
    }
  }, {
    reference: 'newRoom',
    value: function newRoom(floorplan, items) {
      var this_2 = this;

      this.scene.clearItems();
      this.floorplan.loadFloorplan(floorplan);
      items.forEach(function (item) {
        var matColors = item.material_colors ? item.material_colors : [];
        var position = new THREE.Vector3(item.xpos, item.ypos, item.zpos);
        var metadata = { itemName: item.item_name, resizable: item.resizable, itemType: item.item_type, modelUrl: item.model_url, materialColors: matColors };
        var scale = new THREE.Vector3(item.scale_x, item.scale_y, item.scale_z);
        this_2.scene.addItem(item.item_type, item.model_url, metadata, position, item.rotation, scale, item.fixed);
      });
    }
  }]);
  return Model;}(EventDispatcher);

/**
 * used by the Floorplanner to render in/interact with.
 */
var Frame = function (_EventDispatcher) {
  inherits(Frame, _EventDispatcher);

  function Frame(floorplan, viewmodel, canvas) {
    classCallCheck(this, Frame);

    var this_ = possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this));

    this_.canvasElement = document.getElementById(canvas);
    this_.canvas = canvas;
    this_.context = this_.canvasElement.getContext('2d');
    this_.floorplan = floorplan;
    this_.viewmodel = viewmodel;

    this_._url = '';

    this_._loaded = false;
    this_._transparency = 1.0;
    this_._x = this_._y = 0.0;
    this_._anchorX = 0;
    this_._anchorY = 0;
    //The values in pixels for width and height that will reflect the image's original size
    this_._rawWidthPixels = this_._rawHeightPixels = 1.0;
    //The values in cms for width and height that will reflect the images's original size
    this_._rawWidth = this_._rawHeight = 1.0;

    //The values in pixels for widht and height that will reflect the scaling of user to floorplan system
    this_._widthPixels = this_._heightPixels = 1.0;
    //		The values in cms for widht and height that will reflect the scaling of user to floorplan system
    this_._width = this_._height = 1.0;

    this_._drawWidthPixels = this_._drawHeightPixels = 1.0;

    this_._scaleX = this_._scaleY = 1.0;
    this_._maintainProportion = true;
    this_._widthByHeightRatio = 1.0;
    return this_;
  }

  createClass(Frame, [{
    reference: '_calibrate',
    value: function _calibrate() {
      if (!this._loaded) {
        return;
      }
      this._scaleX = this._widthPixels / this._rawWidthPixels;
      this._scaleY = this._heightPixels / this._rawHeightPixels;
      this._drawWidthPixels = this._rawWidthPixels * this._scaleX;
      this._drawHeightPixels = this._rawHeightPixels * this._scaleY;
    }
  }, {
    reference: '_updated',
    value: function _updated() {
      this.dispatchEvent({ type: EVENT_UPDATED });
    }
  }, {
    reference: 'clear',
    value: function clear() {
      this._loaded = false;
      this._transparency = 1.0;
      this._x = this._y = 0.0;
      this._anchorX = 0.0;
      this._anchorY = 0.0;
      this._rawWidthPixels = this._rawHeightPixels = 1.0;
      this._rawWidth = this._rawHeight = 1.0;
      this._widthPixels = this._heightPixels = 1.0;
      this._width = this._height = 1.0;
      this._scaleX = this._scaleY = 1.0;
      this._drawWidthPixels = this._drawHeightPixels = 1.0;
    }
  },{
    reference: 'draw',
    value: function draw() {
      if (this._loaded) {
        var conX = this.viewmodel.convertX(this._x);
        var conY = this.viewmodel.convertY(this._y);
        this.context.translate(conX, conY);

        this.context.globalAlpha = this._transparency;
        this.context.drawImage(this._image, -this._anchorX * this._scaleX, -this._anchorY * this._scaleY, this._drawWidthPixels, this._drawHeightPixels);
        this.context.globalAlpha = 1.0;

        this.context.beginPath();
        this.context.fillStyle = 'blue';
        this.context.arc(0, 0, 5, 0, 6.28);
        this.context.fill();
        this.context.closePath();
        this.context.translate(-conX, -conY);
      }
    }
  }, {
    reference: 'url',
    set: function set_1(val) {
      if (!val || val == null) {
        return;
      }
      var local = this;
      this._url = val;
      this._loaded = false;
      this._image.onload = function () {
        local._rawWidthPixels = this.width;
        local._rawHeightPixels = this.height;
        local._rawWidth = local._rawWidthPixels * cmPerPixel;
        local._rawHeight = local._rawHeightPixels * cmPerPixel;

        local._widthByHeightRatio = this.width / this.height;

        if (local._widthPixels < 2.0) {
          local._widthPixels = local._rawWidthPixels;
          local.width = Dimensioning.cmToMeasureInt(local._rawWidth);
        }
        if (local._heightPixels < 2.0) {
          local._heightPixels = local._rawHeightPixels;
          local.height = Dimensioning.cmToMeasureInt(local._rawHeight);
        }
        local._loaded = true;
        local._calibrate();
        local._updated();
      };
      this._image.onerror = function () {
        local._loaded = false;
        local._url = '';
      };
      this._image.src = this._url;
    },
    get: function get_1() {
      return this._url;
    }
  }, {
    reference: 'maintainProportion',
    set: function set_1(flag) {
      this._maintainProportion = flag;
      this._updated();
    },
    get: function get_1() {
      return this._maintainProportion;
    }
  }, {
    reference: 'loaded',
    get: function get_1() {
      return this._loaded;
    }
  }, {
    reference: 'transparency',
    set: function set_1(val) {
      this._transparency = val;
      this._updated();
    },
    get: function get_1() {
      return this._transparency;
    }
  }, {
    reference: 'x',
    set: function set_1(val) {
      this._x = val;
      //		this._anchorX = val;
      this._updated();
    },
    get: function get_1() {
      return this._x;
    }
  }, {
    reference: 'y',
    set: function set_1(val) {
      this._y = val;
      //		this._anchorY = val;
      this._updated();
    },
    get: function get_1() {
      return this._y;
    }
  }, {
    reference: 'anchorX',
    set: function set_1(val) {
      this._anchorX = val;
      this._updated();
    },
    get: function get_1() {
      return this._anchorX;
    }
  }, {
    reference: 'anchorY',
    set: function set_1(val) {
      this._anchorY = val;
      this._updated();
    },
    get: function get_1() {
      return this._anchorY;
    }
  }, {
    reference: 'width',
    set: function set_1(val) {
      this._width = Dimensioning.cmFromMeasureInt(val);
      this._widthPixels = this._width * pixelsPerCm;

      if (this._maintainProportion) {
        this._height = this._width / this._widthByHeightRatio;
        this._heightPixels = this._height * pixelsPerCm;
      }

      this._calibrate();
      this._updated();
    },
    get: function get_1() {
      return Dimensioning.cmToMeasureInt(this._width);
    }
  }, {
    reference: 'height',
    set: function set_1(val) {
      this._height = Dimensioning.cmFromMeasureInt(val);
      this._heightPixels = this._height * pixelsPerCm;

      if (this._maintainProportion) {
        this._width = this._height * this._widthByHeightRatio;
        this._widthPixels = this._width * pixelsPerCm;
      }

      this._calibrate();
      this._updated();
    },
    get: function get_1() {
      return Dimensioning.cmToMeasureInt(this._height);
    }
  }]);
  return Frame;
}(EventDispatcher);


var floorplannerModes = { MOVE: 0, DRAW: 1, DELETE: 2};

// grid parameters
var gridSpacing = 50; // pixels
var gridWidth = 1;
var gridColor = '#f1f1f1';

// room config
var roomColor = 'lightgrey';

// wall config
var wallWidth = 5;
var wallWidthHover = 7;
var wallColor = 'lightgrey';
var wallColorHover = 'lightblue';
var edgeColor = 'grey';
var edgeColorHover = 'lightblue';
var edgeWidth = 1.5;

var deleteColor = 'red';

// corner config
var cornerRadius = 0;
var cornerRadiusHover = 7;
var cornerColor = 'lightskyblue';
var cornerColorHover = 'lightskyblue';
/**
 * The View to be used by a Floorplanner to render in/interact with.
 */
var FloorplannerView = function () {
  function FloorplannerView(floorplan, viewmodel, canvas) {
    classCallCheck(this, FloorplannerView);

    this.canvasElement = document.getElementById(canvas);
    this.canvas = canvas;
    this.context = this.canvasElement.getContext('2d');
    this.floorplan = floorplan;
    this.viewmodel = viewmodel;

    var local = this;
    this._carbonsheet = new Frame(floorplan, viewmodel, canvas);
    this._carbonsheet.addEventListener(EVENT_UPDATED, function () {
      local.draw();
    });

    this.floorplan.frame = this._carbonsheet;

    this.handleWindowResize();
  }

  createClass(FloorplannerView, [{
    reference: 'handleWindowResize',



    value: function handleWindowResize() {
      var canvasSel = $('#' + this.canvas);
      var parent = canvasSel.parent();
      canvasSel.height(parent.innerHeight());
      canvasSel.width(parent.innerWidth());
      this.canvasElement.height = parent.innerHeight();
      this.canvasElement.width = parent.innerWidth();
      this.draw();
    }
  }, {
    reference: 'draw',
    value: function draw() {
      var this_ = this;

      this.context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);

      this._carbonsheet.draw();
      this.drawGrid();

      this.context.globalAlpha = 0.3;
      this.floorplan.getRooms().forEach(function (room) {
        this_.drawRoom(room);
      });
      this.context.globalAlpha = 1.0;

      this.floorplan.getWalls().forEach(function (wall) {
        this_.drawWall(wall);
      });
      this.floorplan.getCorners().forEach(function (corner) {
        this_.drawCorner(corner);
      });
      if (this.viewmodel.mode == floorplannerModes.DRAW) {
        this.drawTarget(this.viewmodel.targetX, this.viewmodel.targetY, this.viewmodel.lastNode);
      }
      this.floorplan.getWalls().forEach(function (wall) {
        this_.drawWallLabels(wall);
      });
    }
  }, {
    reference: 'drawWallLabels',
    value: function drawWallLabels(wall) {
      // we'll just draw the shorter label... idk
      if (wall.backEdge && wall.frontEdge) {
        if (wall.backEdge.interiorDistance() < wall.frontEdge.interiorDistance()) {
          this.drawEdgeLabel(wall.backEdge);
        } else {
          this.drawEdgeLabel(wall.frontEdge);
        }
      } else if (wall.backEdge) {
        this.drawEdgeLabel(wall.backEdge);
      } else if (wall.frontEdge) {
        this.drawEdgeLabel(wall.frontEdge);
      }
    }
  }, {
    reference: 'drawWall',
    value: function drawWall(wall) {
      var hover = wall === this.viewmodel.activeWall;
      var color = wallColor;
      if (hover && this.viewmodel.mode == floorplannerModes.DELETE) {
        color = deleteColor;
      } else if (hover) {
        color = wallColorHover;
      }
      this.drawLine(this.viewmodel.convertX(wall.getStartX()), this.viewmodel.convertY(wall.getStartY()), this.viewmodel.convertX(wall.getEndX()), this.viewmodel.convertY(wall.getEndY()), hover ? wallWidthHover : wallWidth, color);
      if (!hover && wall.frontEdge) {
        this.drawEdge(wall.frontEdge, hover);
      }
      if (!hover && wall.backEdge) {
        this.drawEdge(wall.backEdge, hover);
      }
    }
  }, {
    reference: 'drawEdgeLabel',
    value: function drawEdgeLabel(edge) {
      var pos = edge.interiorCenter();
      var length = edge.interiorDistance();
      if (length < 60) {
        // dont draw labels on walls this short
        return;
      }
      this.context.font = 'normal 16px Aldrich';
      this.context.fillStyle = '#000000';
      this.context.textBaseline = 'middle';
      this.context.textAlign = 'center';
      this.context.strokeStyle = '#ffffff';
      this.context.lineWidth = 4;

      this.context.strokeText(Dimensioning.cmToMeasureString(length), this.viewmodel.convertX(pos.x), this.viewmodel.convertY(pos.y));
      this.context.fillText(Dimensioning.cmToMeasureString(length), this.viewmodel.convertX(pos.x), this.viewmodel.convertY(pos.y));
    }
  }, {
    reference: 'drawEdge',
    value: function drawEdge(edge, hover) {
      var color = edgeColor;
      if (hover && this.viewmodel.mode == floorplannerModes.DELETE) {
        color = deleteColor;
      } else if (hover) {
        color = edgeColorHover;
      }
      var corners = edge.corners();

      var local = this;
      this.drawPolygon(MathUtilities.map(corners, function (corner) {
        return local.viewmodel.convertX(corner.x);
      }), MathUtilities.map(corners, function (corner) {
        return local.viewmodel.convertY(corner.y);
      }), false, null, true, color, edgeWidth);
    }
  }, {
    reference: 'drawRoom',
    value: function drawRoom(room) {
      var local = this;
      this.drawPolygon(MathUtilities.map(room.corners, function (corner) {
        return local.viewmodel.convertX(corner.x);
      }), MathUtilities.map(room.corners, function (corner) {
        return local.viewmodel.convertY(corner.y);
      }), true, roomColor);
    }
  }, {
    reference: 'drawCorner',
    value: function drawCorner(corner) {
      var hover = corner === this.viewmodel.activeCorner;
      var color = cornerColor;
      if (hover && this.viewmodel.mode == floorplannerModes.DELETE) {
        color = deleteColor;
      } else if (hover) {
        color = cornerColorHover;
      }
      this.drawCircle(this.viewmodel.convertX(corner.x), this.viewmodel.convertY(corner.y), hover ? cornerRadiusHover : cornerRadius, color);
    }
  }, {
    reference: 'drawTarget',
    value: function drawTarget(x, y, lastNode) {
      this.drawCircle(this.viewmodel.convertX(x), this.viewmodel.convertY(y), cornerRadiusHover, cornerColorHover);
      if (this.viewmodel.lastNode) {
        this.drawLine(this.viewmodel.convertX(lastNode.x), this.viewmodel.convertY(lastNode.y), this.viewmodel.convertX(x), this.viewmodel.convertY(y), wallWidthHover, wallColorHover);
      }
    }
  }, {
    reference: 'drawLine',
    value: function drawLine(startX, startY, endX, endY, width, color) {
      this.context.beginPath();
      this.context.moveTo(startX, startY);
      this.context.lineTo(endX, endY);
      this.context.lineWidth = width;
      this.context.strokeStyle = color;
      this.context.stroke();
    }
  }, {
    reference: 'drawPolygon',
    value: function drawPolygon(xArr, yArr, fill, fillColor, stroke, strokeColor, strokeWidth) {
      // fillColor is a hex string, i.e. #ff0000
      fill = fill || false;
      stroke = stroke || false;
      this.context.beginPath();
      this.context.moveTo(xArr[0], yArr[0]);
      for (var i = 1; i < xArr.length; i++) {
        this.context.lineTo(xArr[i], yArr[i]);
      }
      this.context.closePath();
      if (fill) {
        this.context.fillStyle = fillColor;
        this.context.fill();
      }
      if (stroke) {
        this.context.lineWidth = strokeWidth;
        this.context.strokeStyle = strokeColor;
        this.context.stroke();
      }
    }
  }, {
    reference: 'drawCircle',
    value: function drawCircle(centerX, centerY, radius, fillColor) {
      this.context.beginPath();
      this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      this.context.fillStyle = fillColor;
      this.context.fill();
    }
  }, {
    reference: 'calculateGridOffset',
    value: function calculateGridOffset(n) {
      if (n >= 0) {
        return (n + gridSpacing / 2.0) % gridSpacing - gridSpacing / 2.0;
      } else {
        return (n - gridSpacing / 2.0) % gridSpacing + gridSpacing / 2.0;
      }
    }

  }, {
    reference: 'drawGrid',
    value: function drawGrid() {
      var offsetX = this.calculateGridOffset(-this.viewmodel.originX);
      var offsetY = this.calculateGridOffset(-this.viewmodel.originY);
      var width = this.canvasElement.width;
      var height = this.canvasElement.height;
      for (var x = 0; x <= width / gridSpacing; x++) {
        this.drawLine(gridSpacing * x + offsetX, 0, gridSpacing * x + offsetX, height, gridWidth, gridColor);
      }
      for (var y = 0; y <= height / gridSpacing; y++) {
        this.drawLine(0, gridSpacing * y + offsetY, width, gridSpacing * y + offsetY, gridWidth, gridColor);
      }
    }
  }, {
    reference: 'frame',
    get: function get_1() {
      return this._carbonsheet;
    }
  }]);
  return FloorplannerView;
}();

/** how much will we move a corner to make a wall axis aligned (cm) */
var snapTolerance = 10;
/**
 * The Floorplanner implements an interactive tool for creation of floorplans in
 * 2D.
 */
var Floorplanner = function (_EventDispatcher) {
  inherits(Floorplanner, _EventDispatcher);

  function Floorplanner(canvas, floorplan) {
    classCallCheck(this, Floorplanner);

    var this_ = possibleConstructorReturn(this, (Floorplanner.__proto__ || Object.getPrototypeOf(Floorplanner)).call(this));

    this_.mode = 0;

    this_.activeWall = null;

    this_.activeCorner = null;

    this_.originX = 0;

    this_.originY = 0;
    /** drawing state */
    this_.targetX = 0;
    /** drawing state */
    this_.targetY = 0;
    /** drawing state */
    this_.lastNode = null;
    this_.wallWidth = 0;

    this_.modeResetCallbacks = null;
    this_.mouseDown = false;

    this_.mouseMoved = false;
    /** in ThreeJS coords */
    this_.mouseX = 0;
    /** in ThreeJS coords */
    this_.mouseY = 0;
    /** in ThreeJS coords */
    this_.rawMouseX = 0;
    /** in ThreeJS coords */
    this_.rawMouseY = 0;
    /** mouse position at last click */
    this_.lastX = 0;
    /** mouse position at last click */
    this_.lastY = 0;

    this_.canvas = canvas;
    this_.floorplan = floorplan;
    this_.canvasElement = $('#' + canvas);
    this_.view = new FloorplannerView(this_.floorplan, this_, canvas);


    this_.cmPerPixel = cmPerPixel;
    this_.pixelsPerCm = pixelsPerCm;

    this_.wallWidth = 10.0 * this_.pixelsPerCm;
    this_.gridsnapmode = false;
    this_.shiftkey = false;
    // Initialization:

    this_.setMode(floorplannerModes.MOVE);

    var local = this_;

    this_.canvasElement.bind('touchstart mousedown', function (event) {
      local.mousedown(event);
    });
    this_.canvasElement.bind('touchmove mousemove', function (event) {
      local.mousemove(event);
    });
    this_.canvasElement.bind('touchend mouseup', function (event) {
      local.mouseup(event);
    });
    this_.canvasElement.bind('mouseleave', function (event) {
      local.mouseleave(event);
    });

    floorplan.addEventListener(EVENT_LOADED, function () {
      local.reset();
    });
    return this_;
  }

  createClass(Floorplanner, [{
    reference: 'escapeKey',



    value: function escapeKey() {
      this.setMode(floorplannerModes.MOVE);
    }
  }, {
    reference: 'updateTarget',
    value: function updateTarget() {
      if (this.mode == floorplannerModes.DRAW && this.lastNode) {
        if (Math.abs(this.mouseX - this.lastNode.x) < snapTolerance) {
          this.targetX = this.lastNode.x;
        } else {
          this.targetX = this.mouseX;
        }
        if (Math.abs(this.mouseY - this.lastNode.y) < snapTolerance) {
          this.targetY = this.lastNode.y;
        } else {
          this.targetY = this.mouseY;
        }
      } else {
        this.targetX = this.mouseX;
        this.targetY = this.mouseY;
      }

      this.view.draw();
    }
  }, {
    reference: 'mousedown',
    value: function mousedown(event) {
      this.mouseDown = true;
      this.mouseMoved = false;
      if (event.touches) {
        this.rawMouseX = event.touches[0].clientX;
        this.rawMouseY = event.touches[0].clientY;
      }

      this.lastX = this.rawMouseX;
      this.lastY = this.rawMouseY;

      // delete
      if (this.mode == floorplannerModes.DELETE) {
        if (this.activeCorner) {
          this.activeCorner.removeAll();
        } else if (this.activeWall) {
          this.activeWall.remove();
        }
      }
    }
  }, {
    reference: 'mousemove',
    value: function mousemove(event) {
      this.mouseMoved = true;

      if (event.touches) {
        event = event.touches[0];
      }

      // update mouse
      this.rawMouseX = event.clientX;
      this.rawMouseY = event.clientY;

      this.mouseX = (event.clientX - this.canvasElement.offset().left) * this.cmPerPixel + this.originX * this.cmPerPixel;
      this.mouseY = (event.clientY - this.canvasElement.offset().top) * this.cmPerPixel + this.originY * this.cmPerPixel;

      // update target (snapped position of actual mouse)
      if (this.mode == floorplannerModes.DRAW || this.mode == floorplannerModes.MOVE && this.mouseDown) {
        this.updateTarget();
      }

      // update object target
      if (this.mode != floorplannerModes.DRAW && !this.mouseDown) {
        var hoverCorner = this.floorplan.overlappedCorner(this.mouseX, this.mouseY);
        var hoverWall = this.floorplan.overlappedWall(this.mouseX, this.mouseY);
        var draw = false;
        if (hoverCorner != this.activeCorner) {
          this.activeCorner = hoverCorner;
          draw = true;
        }
        // corner takes precendence
        if (this.activeCorner == null) {
          if (hoverWall != this.activeWall) {
            this.activeWall = hoverWall;
            draw = true;
          }
        } else {
          this.activeWall = null;
        }
        if (draw) {
          this.view.draw();
        }
      }

      // panning
      if (this.mouseDown && !this.activeCorner && !this.activeWall) {
        this.originX += this.lastX - this.rawMouseX;
        this.originY += this.lastY - this.rawMouseY;
        this.lastX = this.rawMouseX;
        this.lastY = this.rawMouseY;
        this.view.draw();
      }

      // dragging
      if (this.mode == floorplannerModes.MOVE && this.mouseDown) {
        if (this.activeCorner) {
          this.activeCorner.move(this.mouseX, this.mouseY);
        } else if (this.activeWall) {
          this.activeWall.relativeMove((this.rawMouseX - this.lastX) * this.cmPerPixel, (this.rawMouseY - this.lastY) * this.cmPerPixel);
          this.lastX = this.rawMouseX;
          this.lastY = this.rawMouseY;
        }
        this.view.draw();
      }
    }
  }, {
    reference: 'mouseup',
    value: function mouseup() {
      this.mouseDown = false;

      // drawing
      if (this.mode == floorplannerModes.DRAW && !this.mouseMoved) {
        // This creates the corner already
        var corner = this.floorplan.newCorner(this.targetX, this.targetY);

        // further create a newWall based on the newly inserted corners
        // (one in the above line and the other in the previous mouse action
        // of start drawing a new wall)
        if (this.lastNode != null) {
          this.floorplan.newWall(this.lastNode, corner);
          this.floorplan.newWallsForIntersections(this.lastNode, corner);
          this.view.draw();
        }
        if (corner.mergeWithIntersected() && this.lastNode != null) {
          this.setMode(floorplannerModes.MOVE);
        }
        this.lastNode = corner;
      }
    }
  }, {
    reference: 'mouseleave',
    value: function mouseleave() {
      this.mouseDown = false;
      // local.setMode(local.modes.MOVE);
    }

  }, {
    reference: 'reset',
    value: function reset() {
      this.view.frame.clear();
      this.resizeView();
      this.setMode(floorplannerModes.MOVE);
      this.resetOrigin();
      this.view.draw();
    }
  }, {
    reference: 'resizeView',
    value: function resizeView() {
      this.view.handleWindowResize();
    }

  }, {
    reference: 'setMode',
    value: function setMode(mode) {
      this.lastNode = null;
      this.mode = mode;
      this.dispatchEvent({ type: EVENT_MODE_RESET, mode: mode });
      // this.modeResetCallbacks.fire(mode);
      this.updateTarget();
    }

    /** Sets the origin so that floorplan is centered */

  }, {
    reference: 'resetOrigin',
    value: function resetOrigin() {
      var centerX = this.canvasElement.innerWidth() / 2.0;
      var centerY = this.canvasElement.innerHeight() / 2.0;
      var centerFloorplan = this.floorplan.getCenter();
      this.originX = centerFloorplan.x * this.pixelsPerCm - centerX;
      this.originY = centerFloorplan.z * this.pixelsPerCm - centerY;
    }

    /** Convert from THREEjs coords to canvas coords. */

  }, {
    reference: 'convertX',
    value: function convertX(x) {
      return (x - this.originX * this.cmPerPixel) * this.pixelsPerCm;
    }

    /** Convert from THREEjs coords to canvas coords. */

  }, {
    reference: 'convertY',
    value: function convertY(y) {
      return (y - this.originY * this.cmPerPixel) * this.pixelsPerCm;
    }
  }, {
    reference: 'frame',
    get: function get_1() {
      return this.view.frame;
    }
  }]);
  return Floorplanner;
}(EventDispatcher);

/** Meta data for items. */
var Metadata = function Metadata() {
  classCallCheck(this, Metadata);

  this.itemName = '';
  this.itemType = -1;
  this.modelUrl = '';
  this.resizable = false;
};

var states = { UNSELECTED: 0, SELECTED: 1, DRAGGING: 2, ROTATING: 3, ROTATING_FREE: 4, PANNING: 5 };

// Controller is the class that maintains the items, floors, walls selection in the 3d scene
var Controller = function (_EventDispatcher) {
  inherits(Controller, _EventDispatcher);

  function Controller(three, model, camera, element, controls, hud) {
    classCallCheck(this, Controller);

    var this_ = possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

    this_.three = three;
    this_.model = model;
    this_.camera = camera;
    this_.element = element;
    this_.controls = controls;
    this_.hud = hud;

    this_.enabled = true;
    this_.scene = model.scene;

    this_.plane = null;
    this_.mouse = new THREE.Vector2(0, 0);
    this_.alternateMouse = new THREE.Vector2(0, 0);

    this_.intersectedObject = null;
    this_.mouseoverObject = null;
    this_.selectedObject = null;

    this_.mouseDown = false;
    this_.mouseMoved = false; // has mouse moved since down click
    this_.rotateMouseOver = false;

    this_.state = states.UNSELECTED;
    this_.needsUpdate = true;

    var local = this_;
    this_.itemremovedevent = function (o) {
      local.itemRemoved(o.item);
    };
    this_.itemloadedevent = function (o) {
      local.itemLoaded(o.item);
    };

    this_.mousedownevent = function (event) {
      local.mouseDownEvent(event);
    };
    this_.mouseupevent = function (event) {
      local.mouseUpEvent(event);
    };
    this_.mousemoveevent = function (event) {
      local.mouseMoveEvent(event);
    };
    this_.init();
    return this_;
  }

  createClass(Controller, [{
    reference: 'init',
    value: function init() {

      this.element.bind('touchstart mousedown', this.mousedownevent);
      this.element.bind('touchmove mousemove', this.mousemoveevent);
      this.element.bind('touchend mouseup', this.mouseupevent);

      this.scene.addEventListener(EVENT_ITEM_DELETED, this.itemremovedevent);
      this.scene.addEventListener(EVENT_ITEM_LOADED, this.itemloadedevent);
      this.setGroundPlane();
    }
  }, {
    reference: 'itemRemoved',
    value: function itemRemoved(item) {
      // invoked as a callback to event in Scene
      if (item === this.selectedObject) {
        this.selectedObject.setUnselected();
        this.selectedObject.mouseOff();
        this.setSelectedObject(null);
      }
    }

    // invoked via callback when item is loaded

  }, {
    reference: 'itemLoaded',
    value: function itemLoaded(item) {
      var local = this;
      if (!item.position_set) {
        local.setSelectedObject(item);
        local.switchState(states.DRAGGING);
        var pos = item.position.clone();
        pos.y = 0;
        var vec = local.three.projectVector(pos);
        local.clickPressed(vec);
      }
      item.position_set = true;
    }
  }, {
    reference: 'clickPressed',
    value: function clickPressed(vec2) {
      this.mouse = vec2 || this.mouse;
      var intersection = this.itemIntersection(this.mouse, this.selectedObject);
      if (intersection) {
        this.selectedObject.clickPressed(intersection);
      }
    }
  }, {
    reference: 'clickDragged',
    value: function clickDragged(vec2) {
      var local = this;
      this.mouse = vec2 || this.mouse;
      var intersection = local.itemIntersection(this.mouse, this.selectedObject);
      if (intersection) {
        if (local.isRotating()) {
          this.selectedObject.rotate(intersection);
        } else {
          this.selectedObject.clickDragged(intersection);
        }
      }
    }
  }, {
    reference: 'showGroundPlane',
    value: function showGroundPlane(flag) {
      this.plane.visible = flag;
    }
  }, {
    reference: 'setGroundPlane',
    value: function setGroundPlane() {
      // ground plane used to find intersections
      var size = 1000;

      // The below line was originally setting the plane visibility to false
      // Now its setting visibility to true. This is necessary to be detected
      // with the raycaster objects to click walls and floors.
      this.plane = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({ visible: false }));
      this.plane.rotation.x = -Math.PI / 2;
      this.plane.visible = true;
      this.scene.add(this.plane);
    }
  }, {
    reference: 'checkWallsAndFloors',
    value: function checkWallsAndFloors() {
      // double click on a wall or floor brings up texture change modal
      if (this.state == states.UNSELECTED && this.mouseoverObject == null) {
        // check walls
        var wallEdgePlanes = this.model.floorplan.wallEdgePlanes();
        var wallIntersects = this.getIntersections(this.mouse, wallEdgePlanes, true);
        if (wallIntersects.length > 0) {
          var wall = wallIntersects[0].object.edge;
          this.three.wallIsClicked(wall);
          return;
        }

        // check floors
        var floorPlanes = this.model.floorplan.floorPlanes();
        var floorIntersects = this.getIntersections(this.mouse, floorPlanes, false);
        if (floorIntersects.length > 0) {
          var room = floorIntersects[0].object.room;
          this.three.floorIsClicked(room);
          return;
        }

        this.three.nothingIsClicked();
      }
    }
  }, {
    reference: 'isRotating',
    value: function isRotating() {
      return this.state == states.ROTATING || this.state == states.ROTATING_FREE;
    }
  }, {
    reference: 'mouseDownEvent',
    value: function mouseDownEvent(event) {
      if (this.enabled) {
        event.preventDefault();

        this.mouseMoved = false;
        this.mouseDown = true;

        if (event.touches) {
          //In case if this is a touch device do the necessary to click and drag items
          this.mouse.x = event.touches[0].clientX;
          this.mouse.y = event.touches[0].clientY;
          this.alternateMouse.x = event.touches[0].clientX;
          this.alternateMouse.y = event.touches[0].clientY;
          this.updateIntersections();
          this.checkWallsAndFloors();
        }

        switch (this.state) {
          case states.SELECTED:
            if (this.rotateMouseOver) {
              this.switchState(states.ROTATING);
            } else if (this.intersectedObject != null) {
              this.setSelectedObject(this.intersectedObject);
              if (!this.intersectedObject.fixed) {
                this.switchState(states.DRAGGING);
              }
            }
            break;
          case states.UNSELECTED:
            if (this.intersectedObject != null) {
              this.setSelectedObject(this.intersectedObject);
              if (!this.intersectedObject.fixed) {
                this.switchState(states.DRAGGING);
              }
            }
            break;
          case states.DRAGGING:
          case states.ROTATING:
            break;
          case states.ROTATING_FREE:
            this.switchState(states.SELECTED);
            break;
        }
      }
    }
  }, {
    reference: 'mouseMoveEvent',
    value: function mouseMoveEvent(event) {
      if (this.enabled) {
        event.preventDefault();
        this.mouseMoved = true;

        this.mouse.x = event.clientX;
        this.mouse.y = event.clientY;
        this.alternateMouse.x = event.clientX;
        this.alternateMouse.y = event.clientY;

        if (event.touches) {
          this.mouse.x = event.touches[0].clientX;
          this.mouse.y = event.touches[0].clientY;
          this.alternateMouse.x = event.touches[0].clientX;
          this.alternateMouse.y = event.touches[0].clientY;
        }

        if (!this.mouseDown) {
          this.updateIntersections();
        }

        switch (this.state) {
          case states.UNSELECTED:
            this.updateMouseover();
            break;
          case states.SELECTED:
            this.updateMouseover();
            break;
          case states.DRAGGING:
          case states.ROTATING:
          case states.ROTATING_FREE:
            this.clickDragged();
            this.hud.update();
            this.needsUpdate = true;
            break;
        }
      }
    }
  }, {
    reference: 'mouseUpEvent',
    value: function mouseUpEvent() {
      if (this.enabled) {
        this.mouseDown = false;

        switch (this.state) {
          case states.DRAGGING:
            this.selectedObject.clickReleased();
            this.switchState(states.SELECTED);
            break;
          case states.ROTATING:
            if (!this.mouseMoved) {
              this.switchState(states.ROTATING_FREE);
            } else {
              this.switchState(states.SELECTED);
            }
            break;
          case states.UNSELECTED:
            if (!this.mouseMoved) {
              this.checkWallsAndFloors();
            }
            break;
          case states.SELECTED:
            if (this.intersectedObject == null && !this.mouseMoved) {
              this.switchState(states.UNSELECTED);
              this.checkWallsAndFloors();
            }
            break;
          case states.ROTATING_FREE:
            break;
        }
      }
    }
  }, {
    reference: 'switchState',
    value: function switchState(newState) {
      if (newState != this.state) {
        this.onExit(this.state);
        this.onEntry(newState);
      }
      this.state = newState;
      this.hud.setRotating(this.isRotating());
    }
  }, {
    reference: 'onEntry',
    value: function onEntry(state) {
      switch (state) {
        case states.UNSELECTED:
          this.setSelectedObject(null);
          break;
        case states.SELECTED:
          this.controls.enabled = true;
          break;
        case states.ROTATING:
        case states.ROTATING_FREE:
          this.controls.enabled = false;
          break;
        case states.DRAGGING:
          this.three.setCursorStyle('move');
          this.clickPressed();
          this.controls.enabled = false;
          break;
      }
    }
  }, {
    reference: 'onExit',
    value: function onExit(state) {
      switch (state) {
        case states.UNSELECTED:
        case states.SELECTED:
          break;
        case states.DRAGGING:
          if (this.mouseoverObject) {
            this.three.setCursorStyle('pointer');
          } else {
            this.three.setCursorStyle('auto');
          }
          break;
        case states.ROTATING:
        case states.ROTATING_FREE:
          break;
      }
    }
  }, {
    reference: 'selectedObject',
    value: function selectedObject() {
      return this.selectedObject;
    }

    // updates the vector of the intersection with the plane of a given
    // mouse position, and the intersected object
    // both may be set to null if no intersection found

  }, {
    reference: 'updateIntersections',
    value: function updateIntersections() {
      // check the rotate arrow
      var hudObject = this.hud.getObject();
      if (hudObject != null) {
        var hudIntersects = this.getIntersections(this.mouse, hudObject, false, false, true);
        if (hudIntersects.length > 0) {
          this.rotateMouseOver = true;
          this.hud.setMouseover(true);
          this.intersectedObject = null;
          return;
        }
      }
      this.rotateMouseOver = false;
      this.hud.setMouseover(false);

      // check objects
      var items = this.model.scene.getItems();
      var intersects = this.getIntersections(this.mouse, items, false, true);
      if (intersects.length > 0) {
        this.intersectedObject = intersects[0].object;
      } else {
        this.intersectedObject = null;
      }
    }

    // returns the first intersection object

  }, {
    reference: 'itemIntersection',
    value: function itemIntersection(vec2, item) {
      var customIntersections = item.customIntersectionPlanes();
      var intersections = null;
      if (customIntersections && customIntersections.length > 0) {
        intersections = this.getIntersections(vec2, customIntersections, true);
      } else {
        intersections = this.getIntersections(vec2, this.plane);
      }
      if (intersections.length > 0) {
        return intersections[0];
      } else {
        return null;
      }
    }

    // sets coords to -1 to 1

  }, {
    reference: 'normalizeVector2',
    value: function normalizeVector2(vec2) {
      var retVec = new THREE.Vector2();
      retVec.x = (vec2.x - this.three.widthMargin) / (window.innerWidth - this.three.widthMargin) * 2 - 1;
      retVec.y = -((vec2.y - this.three.heightMargin) / (window.innerHeight - this.three.heightMargin)) * 2 + 1;
      return retVec;
    }

    //

  }, {
    reference: 'mouseToVec3',
    value: function mouseToVec3(vec2) {
      var normVec2 = this.normalizeVector2(vec2);
      var vector = new THREE.Vector3(normVec2.x, normVec2.y, 0.5);
      vector.unproject(this.camera);
      return vector;
    }

    // filter by normals will only return objects facing the camera
    // objects can be an array of objects or a single object

  }, {
    reference: 'getIntersections',
    value: function getIntersections(vec2, objects, filterByNormals, onlyVisible, recursive, linePrecision) {
      var vector = this.mouseToVec3(vec2);
      onlyVisible = onlyVisible || false;
      filterByNormals = filterByNormals || false;
      recursive = recursive || false;
      linePrecision = linePrecision || 20;

      var direction = vector.sub(this.camera.position).normalize();
      var raycaster = new THREE.Raycaster(this.camera.position, direction);
      raycaster.linePrecision = linePrecision;

      raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(this.normalizeVector2(this.alternateMouse), this.camera);

      var intersections;

      if (objects instanceof Array) {
        intersections = raycaster.intersectObjects(objects, recursive);
      } else {
        intersections = raycaster.intersectObject(objects, recursive);
      }
      // filter by visible, if true
      if (onlyVisible) {
        intersections = MathUtilities.removeIf(intersections, function (intersection) {
          return !intersection.object.visible;
        });
      }

      // filter by normals, if true
      if (filterByNormals) {
        intersections = MathUtilities.removeIf(intersections, function (intersection) {
          var dot = intersection.face.normal.dot(direction);return dot > 0;
        });
      }
      return intersections;
    }

    // manage the selected object

  }, {
    reference: 'setSelectedObject',
    value: function setSelectedObject(object) {
      if (this.state === states.UNSELECTED) {
        this.switchState(states.SELECTED);
      }
      if (this.selectedObject != null) {
        this.selectedObject.setUnselected();
      }
      if (object != null) {
        this.selectedObject = object;
        this.selectedObject.setSelected();
        // three.itemSelectedCallbacks.fire(object);
        this.three.itemIsSelected(object);
      } else {
        this.selectedObject = null;
        // three.itemUnselectedCallbacks.fire();
        this.three.itemIsUnselected();
      }
      this.needsUpdate = true;
    }

  }, {
    reference: 'updateMouseover',
    value: function updateMouseover() {
      if (this.intersectedObject != null) {
        if (this.mouseoverObject != null) {
          if (this.mouseoverObject !== this.intersectedObject) {
            this.mouseoverObject.mouseOff();
            this.mouseoverObject = this.intersectedObject;
            this.mouseoverObject.mouseOver();
            this.needsUpdate = true;
          }
        } else {
          this.mouseoverObject = this.intersectedObject;
          this.mouseoverObject.mouseOver();
          this.three.setCursorStyle('pointer');
          this.needsUpdate = true;
        }
      } else if (this.mouseoverObject != null) {
        this.mouseoverObject.mouseOff();
        this.three.setCursorStyle('auto');
        this.mouseoverObject = null;
        this.needsUpdate = true;
      }
    }
  }, {
    reference: 'changeCamera',
    value: function changeCamera(newCamera) {
      this.camera = newCamera;
    }
  }]);
  return Controller;
}(EventDispatcher);


var STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM: 4, TOUCH_PAN: 5 };
var CameraControls = function (_EventDispatcher) {
  inherits(CameraControls, _EventDispatcher);

  function CameraControls(object, domElement) {
    classCallCheck(this, CameraControls);

    var this_ = possibleConstructorReturn(this, (CameraControls.__proto__ || Object.getPrototypeOf(CameraControls)).call(this));

    this_.object = object;
    this_.domElement = domElement !== undefined ? domElement : $(document);
    // Set to false to disable this control
    this_.enabled = true;
    // "target" sets the location of focus, where the control orbits around
    // and where it pans with respect to.
    this_.target = new THREE.Vector3();
    // center is old, deprecated; use "target" instead
    this_.center = this_.target;
    // This option actually enables zoom in and out; left as "zoom" for
    // backwards compatibility
    this_.noZoom = false;
    this_.zoomSpeed = 2.0;
    // Limits to how far you can zoom in and out
    this_.minDistance = 0;
    this_.maxDistance = 2500;
    // Set to true to disable this control
    this_.noRotate = false;
    this_.rotateSpeed = 0.2;
    // Set to true to disable this control
    this_.noPan = false;
    this_.keyPanSpeed = 40.0; // pixels moved per arrow reference push
    // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.
    this_.minPolarAngle = 0; // radians
    this_.maxPolarAngle = Math.PI / 2; // radians
    // Set to true to disable use of the keys
    this_.noKeys = false;
    // The four arrow keys
    this_.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };
    this_.cameraMovedCallbacks = $.Callbacks();
    this_.needsUpdate = true;

    // internals
    //		var window = $(window);

    this_.EPS = 0.000001;
    this_.rotateStart = new THREE.Vector2();
    this_.rotateEnd = new THREE.Vector2();
    this_.rotateDelta = new THREE.Vector2();
    this_.panStart = new THREE.Vector2();
    this_.panEnd = new THREE.Vector2();
    this_.panDelta = new THREE.Vector2();
    this_.touchStart = new THREE.Vector2();
    this_.touchEnd = new THREE.Vector2();
    this_.touch = new THREE.Vector2();

    this_.phiDelta = 0;
    this_.thetaDelta = 0;
    this_.scale = 1;
    this_.pan = new THREE.Vector3();
    this_.state = STATE.NONE;

    this_.mouseupevent = function (event) {
      this_.onMouseUp(event);
    };
    this_.mousemoveevent = function (event) {
      this_.onMouseMove(event);
    };
    this_.mousedownevent = function (event) {
      this_.onMouseDown(event);
    };
    this_.mousewheelevent = function (event) {
      this_.onMouseWheel(event);
    };
    this_.touchstartevent = function (event) {
      this_.touchstart(event);
    };
    this_.touchendevent = function (event) {
      this_.touchend(event);
    };
    this_.touchmoveevent = function (event) {
      this_.touchmove(event);
    };
    this_.keydownevent = function (event) {
      this_.onKeyDown(event);
    };

    this_.domElement.addEventListener('contextmenu', function (event) {
      event.preventDefault();
    }, false);
    this_.domElement.addEventListener('mousedown', this_.mousedownevent, false);
    this_.domElement.addEventListener('mousewheel', this_.mousewheelevent, false);
    this_.domElement.addEventListener('DOMMouseScroll', this_.mousewheelevent, false); // firefox
    this_.domElement.addEventListener('touchstart', this_.touchstartevent, false);
    this_.domElement.addEventListener('touchend', this_.touchendevent, false);
    this_.domElement.addEventListener('touchmove', this_.touchmoveevent, false);
    window.addEventListener('keydown', this_.keydownevent, false);
    return this_;
  }

  createClass(CameraControls, [{
    reference: 'controlsActive',
    value: function controlsActive() {
      return this.state === STATE.NONE;
    }
  }, {
    reference: 'setPan',
    value: function setPan(vec3) {
      this.pan = vec3;
    }
  }, {
    reference: 'panTo',
    value: function panTo(vec3) {
      var newTarget = new THREE.Vector3(vec3.x, this.target.y, vec3.z);
      var delta = this.target.clone().sub(newTarget);
      this.pan.sub(delta);
      this.update();
    }
  }, {
    reference: 'rotateLeft',
    value: function rotateLeft(angle) {
      if (angle === undefined) {
        angle = this.getAutoRotationAngle();
      }
      this.thetaDelta -= angle;
    }
  }, {
    reference: 'rotateUp',
    value: function rotateUp(angle) {
      if (angle === undefined) {
        angle = this.getAutoRotationAngle();
      }
      this.phiDelta -= angle;
    }

    // pass in distance in world space to move left

  }, {
    reference: 'panLeft',
    value: function panLeft(distance) {

      var panOffset = new THREE.Vector3();
      var te = this.object.matrix.elements;
      // get X column of matrix
      panOffset.set(te[0], 0, te[2]);
      panOffset.normalize();
      panOffset.multiplyScalar(-distance);
      this.pan.add(panOffset);
    }

    // pass in distance in world space to move up

  }, {
    reference: 'panUp',
    value: function panUp(distance) {
      var panOffset = new THREE.Vector3();
      var te = this.object.matrix.elements;
      // get Y column of matrix
      panOffset.set(te[4], 0, te[6]);
      panOffset.normalize();
      panOffset.multiplyScalar(distance);
      this.pan.add(panOffset);
    }

  }, {
    reference: 'updatePan',
    value: function updatePan(delta) {
      var element = this.domElement === $(document) ? this.domElement.body : this.domElement;
      if (this.object.fov !== undefined) {
        // perspective
        var position = this.object.position;
        var offset = position.clone().sub(this.target);
        var targetDistance = offset.length();
        // half of the fov is center to top of screen
        targetDistance *= Math.tan(this.object.fov / 2 * Math.PI / 180.0);
        // dont use screenWidth, perspective camera is fixed to screen height
        this.panLeft(2 * delta.x * targetDistance / element.clientHeight);
        this.panUp(2 * delta.y * targetDistance / element.clientHeight);
      } else {
        // camera perspective - warn user
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
      }

      this.update();
    }
  }, {
    reference: 'panXY',
    value: function panXY(x, y) {
      //		this.pan(new THREE.Vector2(x, y));
      this.updatePan(new THREE.Vector2(x, y));
    }
  }, {
    reference: 'zoomIn',
    value: function zoomIn(zoomScale) {
      if (zoomScale === undefined) {
        zoomScale = this.getZoomScale();
      }
      this.scale /= zoomScale;
    }
  }, {
    reference: 'zoomOut',
    value: function zoomOut(zoomScale) {
      if (zoomScale === undefined) {
        zoomScale = this.getZoomScale();
      }
      this.scale *= zoomScale;
    }
  }, {
    reference: 'update',
    value: function update() {
      var position = this.object.position;
      var offset = position.clone().sub(this.target);

      // angle from z-axis around y-axis
      var theta = Math.atan2(offset.x, offset.z);
      // angle from y-axis
      var phi = Math.atan2(Math.sqrt(offset.x * offset.x + offset.z * offset.z), offset.y);

      theta += this.thetaDelta;
      phi += this.phiDelta;

      // restrict phi to be between desired limits
      phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, phi));

      // restrict phi to be betwee EPS and PI-EPS
      phi = Math.max(this.EPS, Math.min(Math.PI - this.EPS, phi));

      var radius = offset.length() * this.scale;

      // restrict radius to be between desired limits
      radius = Math.max(this.minDistance, Math.min(this.maxDistance, radius));

      // move target to panned location
      this.target.add(this.pan);

      offset.x = radius * Math.sin(phi) * Math.sin(theta);
      offset.y = radius * Math.cos(phi);
      offset.z = radius * Math.sin(phi) * Math.cos(theta);

      position.copy(this.target).add(offset);

      this.object.lookAt(this.target);

      this.thetaDelta = 0;
      this.phiDelta = 0;
      this.scale = 1;
      this.pan.set(0, 0, 0);

      //		this.cameraMovedCallbacks.fire();
      this.dispatchEvent({ type: EVENT_CAMERA_MOVED });
      this.needsUpdate = true;
    }
  }, {
    reference: 'getZoomScale',
    value: function getZoomScale() {
      return Math.pow(0.95, this.zoomSpeed);
    }
  }, {
    reference: 'onMouseDown',
    value: function onMouseDown(event) {
      if (this.enabled === false) {
        return;
      }
      event.preventDefault();

      if (event.button === 0) {
        if (this.noRotate === true) {
          return;
        }
        this.state = STATE.ROTATE;
        this.rotateStart.set(event.clientX, event.clientY);
      } else if (event.button === 1) {
        if (this.noZoom === true) {
          return;
        }
        this.state = STATE.ZOOM;
        this.touchStart.set(event.clientX, event.clientY);
      } else if (event.button === 2) {
        if (this.noPan === true) {
          return;
        }
        this.state = STATE.PAN;
        this.panStart.set(event.clientX, event.clientY);
      }
      // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
      this.domElement.addEventListener('mousemove', this.mousemoveevent, false);
      this.domElement.addEventListener('mouseup', this.mouseupevent, false);
    }
  }, {
    reference: 'onMouseMove',
    value: function onMouseMove(event) {
      if (this.enabled === false) {
        return;
      }

      event.preventDefault();
      var element = this.domElement === $(document) ? this.domElement.body : this.domElement;
      if (this.state === STATE.ROTATE) {
        if (this.noRotate === true) {
          return;
        }
        this.rotateEnd.set(event.clientX, event.clientY);
        this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);
        // rotating across whole screen goes 360 degrees around
        this.rotateLeft( Math.PI * this.rotateDelta.x / element.clientWidth * this.rotateSpeed);
        // rotating up and down along whole screen attempts to go 360, but limited to 180
        this.rotateUp( Math.PI * this.rotateDelta.y / element.clientHeight * this.rotateSpeed);
        this.rotateStart.copy(this.rotateEnd);
      } else if (this.state === STATE.ZOOM) {
        if (this.noZoom === true) {
          return;
        }
        this.touchEnd.set(event.clientX, event.clientY);
        this.touch.subVectors(this.touchEnd, this.touchStart);
        if (this.touch.y > 0) {
          this.zoomIn();
        } else {
          this.zoomOut();
        }
        this.touchStart.copy(this.touchEnd);
      } else if (this.state === STATE.PAN) {
        if (this.noPan === true) {
          return;
        }
        this.panEnd.set(event.clientX, event.clientY);
        this.panDelta.subVectors(this.panEnd, this.panStart);
        //			this.pan(this.panDelta);
        this.updatePan(this.panDelta);
        this.panStart.copy(this.panEnd);
      }
      // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
      this.update();
    }
  }, {
    reference: 'onMouseUp',
    value: function onMouseUp() /* event */{
      if (this.enabled === false) {
        return;
      }
      // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
      this.domElement.removeEventListener('mousemove', this.mousemoveevent, false);
      this.domElement.removeEventListener('mouseup', this.mouseupevent, false);
      this.state = STATE.NONE;
    }
  }, {
    reference: 'onMouseWheel',
    value: function onMouseWheel(event) {
      if (this.enabled === false || this.noZoom === true) {
        return;
      }

      var delta = 0;
      if (event.wheelDelta) {
        // WebKit / Opera / Explorer 9
        delta = event.wheelDelta;
      } else if (event.detail) {
        // Firefox
        delta = -event.detail;
      }

      if (delta > 0) {
        this.zoomOut();
      } else {
        this.zoomIn();
      }
      this.update();
    }
  }, {
    reference: 'onKeyDown',
    value: function onKeyDown(event) {

      if (this.enabled === false) {
        return;
      }
      if (this.noKeys === true) {
        return;
      }
      if (this.noPan === true) {
        return;
      }

      switch (event.keyCode) {
        case this.keys.UP:
          //			this.pan(new THREE.Vector2(0, this.keyPanSpeed));
          this.updatePan(new THREE.Vector2(0, this.keyPanSpeed));
          break;
        case this.keys.BOTTOM:
          //			this.pan(new THREE.Vector2(0, -this.keyPanSpeed));
          this.updatePan(new THREE.Vector2(0, -this.keyPanSpeed));
          break;
        case this.keys.LEFT:
          //			this.pan(new THREE.Vector2(this.keyPanSpeed, 0));
          this.updatePan(new THREE.Vector2(this.keyPanSpeed, 0));
          break;
        case this.keys.RIGHT:
          //			this.pan(new THREE.Vector2(-this.keyPanSpeed, 0));
          this.updatePan(new THREE.Vector2(-this.keyPanSpeed, 0));
          break;
      }
    }
  }, {
    reference: 'touchstart',
    value: function touchstart(event) {
      if (this.enabled === false) {
        return;
      }
      switch (event.touches.length) {

        case 1:
          // one-fingered touch: rotate
          if (this.noRotate === true) {
            return;
          }
          this.state = STATE.TOUCH_ROTATE;
          this.rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
          break;
        case 2:
          // two-fingered touch: zoomIn
          if (this.noZoom === true) {
            return;
          }
          this.state = STATE.TOUCH_ZOOM;
          var dx = event.touches[0].pageX - event.touches[1].pageX;
          var dy = event.touches[0].pageY - event.touches[1].pageY;
          var distance = Math.sqrt(dx * dx + dy * dy);
          this.touchStart.set(0, distance);
          break;

        case 3:
          // three-fingered touch: pan
          if (this.noPan === true) {
            return;
          }
          this.state = STATE.TOUCH_PAN;
          this.panStart.set(event.touches[0].pageX, event.touches[0].pageY);
          break;
        default:
          this.state = STATE.NONE;
      }
    }
  }, {
    reference: 'touchmove',
    value: function touchmove(event) {
      if (this.enabled === false) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      var element = this.domElement === $(document) ? this.domElement.body : this.domElement;

      switch (event.touches.length) {
        case 1:
          // one-fingered touch: rotate
          if (this.noRotate === true) {
            return;
          }
          if (this.state !== STATE.TOUCH_ROTATE) {
            return;
          }
          this.rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
          this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);
          // rotating across whole screen goes 360 degrees around
          this.rotateLeft(Math.PI * this.rotateDelta.x / element.clientWidth * this.rotateSpeed);
          // rotating up and down along whole screen attempts to go 360, but limited to 180
          this.rotateUp(Math.PI * this.rotateDelta.y / element.clientHeight * this.rotateSpeed);
          this.rotateStart.copy(this.rotateEnd);
          break;

        case 2:
          if (this.noZoom === true) {
            return;
          }
          if (this.state !== STATE.TOUCH_ZOOM) {
            return;
          }
          var dx = event.touches[0].pageX - event.touches[1].pageX;
          var dy = event.touches[0].pageY - event.touches[1].pageY;
          var distance = Math.sqrt(dx * dx + dy * dy);
          this.touchEnd.set(0, distance);
          this.touch.subVectors(this.touchEnd, this.touchStart);
          if (this.touch.y > 0) {
            this.zoomOut();
          } else {
            this.zoomIn();
          }
          this.touchStart.copy(this.touchEnd);
          break;

        case 3:
          // three-fingered touch: pan
          if (this.noPan === true) {
            return;
          }
          if (this.state !== STATE.TOUCH_PAN) {
            return;
          }
          this.panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
          this.panDelta.subVectors(this.panEnd, this.panStart);
          this.pan(this.panDelta);
          this.panStart.copy(this.panEnd);
          break;
        default:
          this.state = STATE.NONE;
      }
    }
  }, {
    reference: 'touchend',
    value: function touchend() /* event */{
      if (this.enabled === false) {
        return;
      }
      this.state = STATE.NONE;
    }
  }]);
  return CameraControls;
}(EventDispatcher);

/** @author furnishup -blueprint3d
*   https://github.com/furnishup/blueprint3d
**/
var Edge = function (_EventDispatcher) {
  inherits(Edge, _EventDispatcher);

  function Edge(scene, edge, controls) {
    classCallCheck(this, Edge);

    var this_ = possibleConstructorReturn(this, (Edge.__proto__ || Object.getPrototypeOf(Edge)).call(this));

    this_.name = 'edge';
    this_.scene = scene;
    this_.edge = edge;
    this_.controls = controls;

    this_.wall = edge.wall;
    this_.front = edge.front;

    this_.planes = [];
    this_.phantomPlanes = [];
    this_.basePlanes = []; // always visible
    this_.texture = new THREE.TextureLoader();

    this_.lightMap = new THREE.TextureLoader().load('rooms/textures/walls/walllightmap.png');
    this_.visible = false;

    var local = this_;

    this_.redrawevent = function () {
      local.redraw();
    };
    this_.visibilityevent = function () {
      local.updateVisibility();
    };
    this_.showallevent = function () {
      local.showAll();
    };

    this_.visibilityfactor = true;
    this_.init();
    return this_;
  }

  createClass(Edge, [{
    reference: 'remove',
    value: function remove() {
      this.edge.removeEventListener(EVENT_REDRAW, this.redrawevent);
      this.controls.removeEventListener(EVENT_CAMERA_MOVED, this.visibilityevent);
      this.controls.removeEventListener(EVENT_CAMERA_ACTIVE, this.showallevent);
      this.removeFromScene();
    }
  }, {
    reference: 'init',
    value: function init() {
      this.edge.addEventListener(EVENT_REDRAW, this.redrawevent);
      this.controls.addEventListener(EVENT_CAMERA_MOVED, this.visibilityevent);
      this.controls.addEventListener(EVENT_CAMERA_ACTIVE, this.showallevent);

      this.updateTexture();
      this.updatePlanes();
      this.addToScene();
    }
  }, {
    reference: 'redraw',
    value: function redraw() {
      this.removeFromScene();
      this.updateTexture();
      this.updatePlanes();
      this.addToScene();
    }
  }, {
    reference: 'removeFromScene',
    value: function removeFromScene() {
      var local = this;
      local.planes.forEach(function (plane) {
        local.scene.remove(plane);
      });
      local.basePlanes.forEach(function (plane) {
        local.scene.remove(plane);
      });
      local.planes = [];
      local.basePlanes = [];
    }
  }, {
    reference: 'addToScene',
    value: function addToScene() {
      var local = this;
      this.planes.forEach(function (plane) {
        local.scene.add(plane);
      });
      this.basePlanes.forEach(function (plane) {
        local.scene.add(plane);
      });
      this.updateVisibility();
    }
  }, {
    reference: 'showAll',
    value: function showAll() {
      var local = this;
      local.visible = true;
      local.planes.forEach(function (plane) {
        plane.material.transparent = !local.visible;
        plane.material.opacity = 1.0;
        plane.visible = local.visible;
      });

      this.wall.items.forEach(function (item) {
        item.updateEdgeVisibility(local.visible, local.front);
      });
      this.wall.onItems.forEach(function (item) {
        item.updateEdgeVisibility(local.visible, local.front);
      });
    }
  }, {
    reference: 'updateVisibility',
    value: function updateVisibility() {
      var local = this;
      // finds the normal from the specified edge
      var start = local.edge.interiorStart();
      var end = local.edge.interiorEnd();
      var x = end.x - start.x;
      var y = end.y - start.y;
      // rotate 90 degrees CCW
      var normal = new THREE.Vector3(-y, 0, x);
      normal.normalize();

      // setup camera: local.controls.object refers to the camera of the scene
      var position = local.controls.object.position.clone();
      var focus = new THREE.Vector3((start.x + end.x) / 2.0, 0, (start.y + end.y) / 2.0);
      var direction = position.sub(focus).normalize();

      // find dot
      var dot = normal.dot(direction);
      // update visible
      local.visible = dot >= 0;
      // show or hide planes
      local.planes.forEach(function (plane) {
        plane.material.transparent = !local.visible;
        plane.material.opacity = local.visible ? 1.0 : 0.3;
        //			plane.visible = local.visible;
      });
      local.updateObjectVisibility();
    }
  }, {
    reference: 'updateObjectVisibility',
    value: function updateObjectVisibility() {
    }
  }, {
    reference: 'updateTexture',
    value: function updateTexture(callback) {
      var local = this;
      // callback is fired when texture loads
      callback = callback || function () {
        local.scene.needsUpdate = true;
      };
      var textureData = this.edge.getTexture();
      var stretch = textureData.stretch;
      var url = textureData.url;
      var scale = textureData.scale;
      this.texture = new THREE.TextureLoader().load(url, callback);

      if (!stretch) {
        var height = this.wall.height;
        var width = this.edge.interiorDistance();
        this.texture.wrapT = THREE.RepeatWrapping;
        this.texture.wrapS = THREE.RepeatWrapping;
        this.texture.repeat.set(width / scale, height / scale);
        this.texture.needsUpdate = true;
      }
    }
  }, {
    reference: 'updatePlanes',
    value: function updatePlanes() {
      var color = 0xFFFFFF;
      var wallMaterial = new THREE.MeshBasicMaterial({
        color: color,
        side: THREE.FrontSide,
        map: this.texture,
        transparent: true,
        lightMap: this.lightMap,
        opacity: 1.0,
      });

      var fillerMaterial = new THREE.MeshBasicMaterial({
        color: this.fillerColor,
        side: THREE.DoubleSide,
        map: this.texture,
        transparent: true,
        opacity: 1.0,
      });

      // exterior plane for real exterior walls
      //If the walls have corners that have more than one room attached
      //Then there is no need to construct an exterior wall
      if (this.edge.wall.start.getAttachedRooms().length < 2 || this.edge.wall.end.getAttachedRooms().length < 2) {
        this.planes.push(this.makeWall(this.edge.exteriorStart(), this.edge.exteriorEnd(), this.edge.exteriorTransform, this.edge.invExteriorTransform, fillerMaterial));
      }
      // interior plane
      this.planes.push(this.makeWall(this.edge.interiorStart(), this.edge.interiorEnd(), this.edge.interiorTransform, this.edge.invInteriorTransform, wallMaterial));
      // bottom
      // put into basePlanes since this is always visible
      this.basePlanes.push(this.buildFiller(this.edge, 0, THREE.BackSide, this.baseColor));

      if (this.edge.wall.start.getAttachedRooms().length < 2 || this.edge.wall.end.getAttachedRooms().length < 2) {
        // top
        this.planes.push(this.buildFiller(this.edge, this.wall.height, THREE.DoubleSide, this.fillerColor));
      }

      // sides
      this.planes.push(this.buildSideFillter(this.edge.interiorStart(), this.edge.exteriorStart(), this.wall.height, this.sideColor));
      this.planes.push(this.buildSideFillter(this.edge.interiorEnd(), this.edge.exteriorEnd(), this.wall.height, this.sideColor));
    }

    // start, end have x and y attributes (i.e. corners)

  }, {
    reference: 'makeWall',
    value: function makeWall(start, end, transform, invTransform, material) {
      var v1 = this.toVec3(start);
      var v2 = this.toVec3(end);
      var v3 = v2.clone();
      v3.y = this.wall.height;
      var v4 = v1.clone();
      v4.y = this.wall.height;

      var points = [v1.clone(), v2.clone(), v3.clone(), v4.clone()];

      points.forEach(function (p) {
        p.applyMatrix4(transform);
      });

      var spoints = [new THREE.Vector2(points[0].x, points[0].y), new THREE.Vector2(points[1].x, points[1].y), new THREE.Vector2(points[2].x, points[2].y), new THREE.Vector2(points[3].x, points[3].y)];
      var shape = new THREE.Shape(spoints);

      // add holes for each wall item
      this.wall.items.forEach(function (item) {
        var pos = item.position.clone();
        pos.applyMatrix4(transform);
        var halfSize = item.halfSize;
        var min = halfSize.clone().multiplyScalar(-1);
        var max = halfSize.clone();
        min.add(pos);
        max.add(pos);

        var holePoints = [new THREE.Vector2(min.x, min.y), new THREE.Vector2(max.x, min.y), new THREE.Vector2(max.x, max.y), new THREE.Vector2(min.x, max.y)];
        shape.holes.push(new THREE.Path(holePoints));
      });

      var geometry = new THREE.ShapeGeometry(shape);
      geometry.vertices.forEach(function (v) {
        v.applyMatrix4(invTransform);
      });

      // make UVs
      var totalDistance = MathUtilities.distance(new THREE.Vector2(v1.x, v1.z), new THREE.Vector2(v2.x, v2.z));
      var height = this.wall.height;
      geometry.faceVertexUvs[0] = [];

      geometry.faces.forEach(function (face) {
        var vertA = geometry.vertices[face.a];
        var vertB = geometry.vertices[face.b];
        var vertC = geometry.vertices[face.c];
        geometry.faceVertexUvs[0].push([vertexToUv(vertA), vertexToUv(vertB), vertexToUv(vertC)]);
      });

      geometry.faceVertexUvs[1] = geometry.faceVertexUvs[0];
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();

      function vertexToUv(vertex) {
        var x = MathUtilities.distance(new THREE.Vector2(v1.x, v1.z), new THREE.Vector2(vertex.x, vertex.z)) / totalDistance;
        var y = vertex.y / height;
        return new THREE.Vector2(x, y);
      }

      var mesh = new THREE.Mesh(geometry, material);
      mesh.name = 'wall';
      return mesh;
    }
  }, {
    reference: 'buildSideFillter',
    value: function buildSideFillter(p1, p2, height, color) {
      var points = [this.toVec3(p1), this.toVec3(p2), this.toVec3(p2, height), this.toVec3(p1, height)];

      var geometry = new THREE.Geometry();
      points.forEach(function (p) {
        geometry.vertices.push(p);
      });
      geometry.faces.push(new THREE.Face3(0, 1, 2));
      geometry.faces.push(new THREE.Face3(0, 2, 3));

      var fillerMaterial = new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide });
      var filler = new THREE.Mesh(geometry, fillerMaterial);
      return filler;
    }
  }, {
    reference: 'buildFiller',
    value: function buildFiller(edge, height, side, color) {
      var points = [this.toVec2(edge.exteriorStart()), this.toVec2(edge.exteriorEnd()), this.toVec2(edge.interiorEnd()), this.toVec2(edge.interiorStart())];

      var fillerMaterial = new THREE.MeshBasicMaterial({ color: color, side: side });
      var shape = new THREE.Shape(points);
      var geometry = new THREE.ShapeGeometry(shape);
      var filler = new THREE.Mesh(geometry, fillerMaterial);
      filler.rotation.set(Math.PI / 2, 0, 0);
      filler.position.y = height;
      return filler;
    }
  }, {
    reference: 'toVec2',
    value: function toVec2(pos) {
      return new THREE.Vector2(pos.x, pos.y);
    }
  }, {
    reference: 'toVec3',
    value: function toVec3(pos, height) {
      height = height || 0;
      return new THREE.Vector3(pos.x, height, pos.y);
    }
  }]);
  return Edge;
}(EventDispatcher);

var Floor = function (_EventDispatcher) {
  inherits(Floor, _EventDispatcher);

  function Floor(scene, room) {
    classCallCheck(this, Floor);

    var this_ = possibleConstructorReturn(this, (Floor.__proto__ || Object.getPrototypeOf(Floor)).call(this));

    this_.scene = scene;
    this_.room = room;
    this_.floorPlane = null;
    this_.roofPlane = null;
    this_.changedevent = function () {
      this_.redraw();
    };
    this_.init();
    return this_;
  }

  createClass(Floor, [ {
    reference: 'init',
    value: function init() {
      //		this.room.fireOnFloorChange(redraw);
      this.room.addEventListener(EVENT_CHANGED, this.changedevent);

      this.floorPlane = this.buildFloor();
      // roofs look weird, so commented out
      this.roofPlane = this.buildRoof();
    }
  }, {
    reference: 'redraw',
    value: function redraw() {
      this.removeFromScene();
      this.floorPlane = this.buildFloor();
      this.addToScene();
    }
  }, {
    reference: 'buildFloor',
    value: function buildFloor() {
      var textureSettings = this.room.getTexture();
      var floorTexture = new THREE.TextureLoader().load(textureSettings.url);
      floorTexture.wrapS = THREE.RepeatWrapping;
      floorTexture.wrapT = THREE.RepeatWrapping;
      floorTexture.repeat.set(1, 1);
      var floorMaterialTop = new THREE.MeshPhongMaterial({
        map: floorTexture,
        side: THREE.DoubleSide,
        color: 0xcccccc,
        specular: 0x0a0a0a
      });

      var textureScale = textureSettings.scale;
      // http://stackoverflow.com/questions/19182298/how-to-texture-a-three-js-mesh-created-with-shapegeometry
      // scale down coords to fit 0 -> 1, then rescale

      var points = [];
      this.room.interiorCorners.forEach(function (corner) {
        points.push(new THREE.Vector2(corner.x / textureScale, corner.y / textureScale));
      });
      var shape = new THREE.Shape(points);
      var geometry = new THREE.ShapeGeometry(shape);
      var floor = new THREE.Mesh(geometry, floorMaterialTop);

      floor.rotation.set(Math.PI / 2, 0, 0);
      floor.scale.set(textureScale, textureScale, textureScale);
      floor.receiveShadow = true;
      floor.castShadow = false;
      return floor;
    }
  }, {
    reference: 'buildRoof',
    value: function buildRoof() {
      // setup texture
      var roofMaterial = new THREE.MeshBasicMaterial({ side: THREE.FrontSide, color: 0xe5e5e5 });
      var points = [];
      this.room.interiorCorners.forEach(function (corner) {
        points.push(new THREE.Vector2(corner.x, corner.y));
      });
      var shape = new THREE.Shape(points);
      var geometry = new THREE.ShapeGeometry(shape);
      var roof = new THREE.Mesh(geometry, roofMaterial);
      roof.rotation.set(Math.PI / 2, 0, 0);
      roof.position.y = Configuration.getNumericValue(configWallHeight);
      return roof;
    }
  }, {
    reference: 'addToScene',
    value: function addToScene() {
      this.scene.add(this.floorPlane);
      this.scene.add(this.roofPlane);
      //scene.add(roofPlane);
      // hack so we can do intersect testing
      this.scene.add(this.room.floorPlane);
    }
  }, {
    reference: 'removeFromScene',
    value: function removeFromScene() {
      this.scene.remove(this.floorPlane);
      this.scene.remove(this.roofPlane);
      this.scene.remove(this.room.floorPlane);
    }
  }, {
    reference: 'showRoof',
    value: function showRoof(flag) {
      this.roofPlane.visible = flag;
    }
  }]);
  return Floor;
}(EventDispatcher);

var Floorplan = function (_EventDispatcher) {
  inherits(Floorplan, _EventDispatcher);

  function Floorplan(scene, floorPlan, controls) {
    classCallCheck(this, Floorplan);

    var this_ = possibleConstructorReturn(this, (Floorplan.__proto__ || Object.getPrototypeOf(Floorplan)).call(this));

    this_.scene = scene;
    this_.floorplan = floorPlan;
    this_.controls = controls;
    this_.floors = [];
    this_.edges = [];
    var local = this_;
    // floorPlan.fireOnUpdatedRooms(redraw);
    this_.updatedroomsevent = function () {
      local.redraw();
    };
    this_.floorplan.addEventListener(EVENT_UPDATED, this_.updatedroomsevent);
    return this_;
  }

  createClass(Floorplan, [ {
    reference: 'redraw',
    value: function redraw() {
      var this_ = this;

      var local = this;
      // clear scene
      this.floors.forEach(function (floor) {
        floor.removeFromScene();
      });

      this.edges.forEach(function (edge) {
        edge.remove();
      });
      this.floors = [];
      this.edges = [];

      // draw floor
      this.floorplan.getRooms().forEach(function (room) {
        var threeFloor = new Floor(this_.scene, room);
        this_.floors.push(threeFloor);
        threeFloor.addToScene();
      });

      var eindex = 0;
      // draw edges
      this.floorplan.wallEdges().forEach(function (edge) {
        var threeEdge = new Edge(local.scene, edge, local.controls);
        threeEdge.name = 'edge_' + eindex;
        this_.edges.push(threeEdge);
        eindex += 1;
      });
    }
  }, {
    reference: 'showRoof',
    value: function showRoof(flag) {
      // draw floor
      this.floors.forEach(function (threeFloor) {
        threeFloor.showRoof(flag);
      });
    }
  }]);
  return Floorplan;
}(EventDispatcher);

//
var ReturnItem = function (_EventDispatcher) {
  inherits(ReturnItem, _EventDispatcher);

  function ReturnItem(three, scene) {
    classCallCheck(this, ReturnItem);

    var this_ = possibleConstructorReturn(this, (ReturnItem.__proto__ || Object.getPrototypeOf(ReturnItem)).call(this));

    this_.three = three;
    if (!scene) {
      this_.scene = new THREE.Scene();
    } else {
      this_.scene = scene;
    }

    this_.selectedItem = null;

    this_.rotating = false;
    this_.mouseover = false;

    this_.tolerance = 10;
    this_.height = 5;
    this_.distance = 20;

    this_.color = '#ffffff';
    this_.hoverColor = '#ff70db';

    this_.activeObject = null;

    var local = this_;
    this_.itemselectedevent = function (o) {
      local.itemSelected(o.item);
    };
    this_.itemunselectedevent = function () {
      local.itemUnselected();
    };

    this_.init();
    return this_;
  }

  createClass(ReturnItem, [{
    reference: 'init',
    value: function init() {
      this.three.addEventListener(EVENT_ITEM_SELECTED, this.itemselectedevent);
      this.three.addEventListener(EVENT_ITEM_UNSELECTED, this.itemunselectedevent);
    }
  }, {
    reference: 'getScene',
    value: function getScene() {
      return this.scene;
    }
  }, {
    reference: 'getObject',
    value: function getObject() {
      return this.activeObject;
    }
  }, {
    reference: 'resetSelectedItem',
    value: function resetSelectedItem() {
      this.selectedItem = null;
      if (this.activeObject) {
        this.scene.remove(this.activeObject);
        this.activeObject = null;
      }
    }
  }, {
    reference: 'itemSelected',
    value: function itemSelected(item) {
      if (this.selectedItem != item) {
        this.resetSelectedItem();
        if (item.allowRotate && !item.fixed) {
          this.selectedItem = item;
          this.activeObject = this.makeObject(this.selectedItem);
          this.scene.add(this.activeObject);
        }
      }
    }
  }, {
    reference: 'itemUnselected',
    value: function itemUnselected() {
      this.resetSelectedItem();
    }
  }, {
    reference: 'setRotating',
    value: function setRotating(isRotating) {
      this.rotating = isRotating;
      this.setColor();
    }
  }, {
    reference: 'setMouseover',
    value: function setMouseover(isMousedOver) {
      this.mouseover = isMousedOver;
      this.setColor();
    }
  }, {
    reference: 'setColor',
    value: function setColor() {
      var local = this;
      if (local.activeObject) {
        local.activeObject.children.forEach(function (obj) {
          obj.material.color.set(local.getColor());
        });
      }
      local.three.ensureNeedsUpdate();
    }
  }, {
    reference: 'getColor',
    value: function getColor() {
      return this.mouseover || this.rotating ? this.hoverColor : this.color;
    }
  }, {
    reference: 'update',
    value: function update() {
      if (this.activeObject) {
        this.activeObject.rotation.y = this.selectedItem.rotation.y;
        this.activeObject.position.x = this.selectedItem.position.x;
        this.activeObject.position.z = this.selectedItem.position.z;
      }
    }
  }, {
    reference: 'makeLineGeometry',
    value: function makeLineGeometry(item) {
      var geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(0, 0, 0), this.rotateVector(item));
      return geometry;
    }
  }, {
    reference: 'rotateVector',
    value: function rotateVector(item) {
      var vec = new THREE.Vector3(0, 0, Math.max(item.halfSize.x, item.halfSize.z) + 1.4 + this.distance);
      return vec;
    }
  }, {
    reference: 'makeLineMaterial',
    value: function makeLineMaterial() {
      var mat = new THREE.LineBasicMaterial({ color: this.getColor(), linewidth: 1 });
      return mat;
    }
  }, {
    reference: 'makeCone',
    value: function makeCone(item) {
      var coneGeo = new THREE.CylinderGeometry(12, 2, 10);
      var coneMat = new THREE.MeshBasicMaterial({ color: this.getColor() });
      var cone = new THREE.Mesh(coneGeo, coneMat);
      cone.position.copy(this.rotateVector(item));
      cone.rotation.x = -Math.PI / 2.0;
      return cone;
    }
  }, {
    reference: 'makeSphere',
    value: function makeSphere() {
      var geometry = new THREE.CylinderGeometry(4, 16, 16);
      var material = new THREE.MeshBasicMaterial({ color: this.getColor() });
      var sphere = new THREE.Mesh(geometry, material);
      return sphere;
    }
  }, {
    reference: 'makeObject',
    value: function makeObject(item) {
      var object = new THREE.Object3D();
      var line = new THREE.LineSegments(this.makeLineGeometry(item), this.makeLineMaterial(this.rotating));
      var cone = this.makeCone(item);
      var sphere = this.makeSphere(item);
      object.add(line);
      object.add(cone);
      object.add(sphere);
      object.rotation.y = item.rotation.y;
      object.position.x = item.position.x;
      object.position.z = item.position.z;
      object.position.y = this.height;
      return object;
    }
  }]);
  return ReturnItem;
}(EventDispatcher);

var Lights = function (_EventDispatcher) {
  inherits(Lights, _EventDispatcher);

  function Lights(scene, floorplan) {
    classCallCheck(this, Lights);

    var this_ = possibleConstructorReturn(this, (Lights.__proto__ || Object.getPrototypeOf(Lights)).call(this));

    this_.scene = scene;
    this_.floorplan = floorplan;
    this_.tol = 1;
    this_.height = 300;
    this_.dirLight = null;
    this_.updatedroomsevent = function () {
      this_.updateShadowCamera();
    };
    this_.init();
    return this_;
  }

  createClass(Lights, [{
    reference: 'getDirLight',
    value: function getDirLight() {
      return this.dirLight;
    }
  }, {
    reference: 'init',
    value: function init() {
      var light = new THREE.HemisphereLight(0xffffff, 0x888888, 1.1);
      light.position.set(0, this.height, 0);
      this.scene.add(light);

      this.dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
      this.dirLight.color.setHSL(1, 1, 0.1);

      this.dirLight.castShadow = true;

      this.dirLight.shadow.mapSize.width = 1024;
      this.dirLight.shadow.mapSize.height = 1024;

      this.dirLight.shadow.camera.far = this.height + this.tol;
      this.dirLight.shadow.bias = -0.0001;
      this.dirLight.shadowDarkness = 0.2;
      this.dirLight.visible = true;
      this.dirLight.shadowCameraVisible = false;

      this.scene.add(this.dirLight);
      this.scene.add(this.dirLight.target);

      this.floorplan.addEventListener(EVENT_UPDATED, this.updatedroomsevent);
    }
  }, {
    reference: 'updateShadowCamera',
    value: function updateShadowCamera() {
      var size = this.floorplan.getSize();
      var d = (Math.max(size.z, size.x) + this.tol) / 2.0;
      var center = this.floorplan.getCenter();
      var pos = new THREE.Vector3(center.x, this.height, center.z);
      this.dirLight.position.copy(pos);
      this.dirLight.target.position.copy(center);
      this.dirLight.shadow.camera.left = -d;
      this.dirLight.shadow.camera.right = d;
      this.dirLight.shadow.camera.top = d;
      this.dirLight.shadow.camera.bottom = -d;
      // this is necessary for updates
      if (this.dirLight.shadowCamera) {
        this.dirLight.shadow.camera.left = this.dirLight.shadowCameraLeft;
        this.dirLight.shadow.camera.right = this.dirLight.shadowCameraRight;
        this.dirLight.shadow.camera.top = this.dirLight.shadowCameraTop;
        this.dirLight.shadow.camera.bottom = this.dirLight.shadowCameraBottom;
        this.dirLight.shadowCamera.updateProjectionMatrix();
      }
    }
  }]);
  return Lights;
}(EventDispatcher);

class Reflector{
  constructor(meshobject, renderer, scene, data)
  {
      var mirrorObj = meshobject;

      if(!mirrorObj)
      {
        return;
      }

      this.renderer = renderer;
      this.data = (data) ? data : {};
      // this.renderer.alpha = true;

      this.data.textureWidth = (this.data.textureWidth)? this.data.textureWidth : 256;
      this.data.textureHeight = (this.data.textureHeight)? this.data.textureHeight : 256;
      this.data.intensity = (this.data.intensity)? this.data.intensity : 0.5;
      this.data.invertedUV = (this.data.invertedUV)? this.data.invertedUV : false;
      this.data.wrapOne = (this.data.wrapOne)? this.data.wrapOne : {x:1, y: 1};
      this.data.wrapTwo = (this.data.wrapTwo)? this.data.wrapTwo : {x:1, y: 1};
      this.data.color = (this.data.color)? this.data.color : '#848485';


    var reflectorPlane = new THREE.Plane();
    var normal = new THREE.Vector3();
    var reflectorWorldPosition = new THREE.Vector3();
    var cameraWorldPosition = new THREE.Vector3();
    var rotationMatrix = new THREE.Matrix4();
    var lookAtPosition = new THREE.Vector3( 0, 0, - 1 );
    var clipPlane = new THREE.Vector4();
    var viewport = new THREE.Vector4();

    var view = new THREE.Vector3();
    var target = new THREE.Vector3();
    var q = new THREE.Vector4();

    var textureMatrix = new THREE.Matrix4();
    var virtualCamera = new THREE.PerspectiveCamera();
      var renderTarget = new THREE.WebGLRenderTarget(this.data.textureWidth, this.data.textureHeight, {minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat, } );


      if ( ! _Math.isPowerOfTwo( this.data.textureWidth ) || ! _Math.isPowerOfTwo( this.data.textureHeight ) )
      {
      renderTarget.texture.generateMipmaps = false;
    }

    var local = mirrorObj;
    var color = this.data.color;
    var textureWidth = this.data.textureWidth;
    var textureHeight = this.data.textureHeight;
    var clipBias = 0;
    var shader = ReflectorShader;
    var recursion = 0;

    var material = undefined;
    mirrorObj.material = undefined;
    if(!mirrorObj.material)
    {
      material = new THREE.ShaderMaterial( {
      uniforms: UniformsUtils.clone( shader.uniforms ),
      fragmentShader: shader.fragmentShader,
      vertexShader: shader.vertexShader,
      side: THREE.DoubleSide,
      transparent: true,
      lights: true,
      });

      material.uniforms.intensity.value = this.data.intensity;
      material.uniforms.tDiffuse.value  = renderTarget.texture;
      material.uniforms.color.value = new THREE.Color(this.data.color);
      material.uniforms.invertedUV.value = this.data.invertedUV;
      material.uniforms.textureMatrix.value = textureMatrix;

      if(this.data.textureOne)
      {
        var texture = new THREE.TextureLoader().load(this.data.textureOne);
        texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set( this.data.wrapOne.x, this.data.wrapOne.y );
            material.uniforms.tOneFlag.value = true;
            material.uniforms.tOne.value = texture;
            material.uniforms.tOneWrapX.value = texture.repeat.x;
            material.uniforms.tOneWrapY.value = texture.repeat.y;
      }

      if(this.data.textureTwo)
      {
        var texture = new THREE.TextureLoader().load(this.data.textureTwo);
        texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set( this.data.wrapTwo.x, this.data.wrapTwo.y );
            material.uniforms.tTwoFlag.value = true;
            material.uniforms.tSec.value = texture;
            material.uniforms.tTwoWrapX.value = texture.repeat.x;
            material.uniforms.tTwoWrapY.value = texture.repeat.y;
      }
      mirrorObj.material = material;
      this.material = material;
    }

      mirrorObj.onBeforeRender = function(renderer, scene, camera)
      {
        if ( 'recursion' in camera.userData )
        {
        if ( camera.userData.recursion === recursion ) return;
        camera.userData.recursion ++;
      }

      reflectorWorldPosition.setFromMatrixPosition( local.matrixWorld );
      cameraWorldPosition.setFromMatrixPosition( camera.matrixWorld );
      rotationMatrix.extractRotation( local.matrixWorld );
      normal.set( 0, 0, 1 );
      normal.applyMatrix4( rotationMatrix );
      view.subVectors( reflectorWorldPosition, cameraWorldPosition );
      // Avoid rendering when reflector is facing away

      // if ( view.dot( normal ) > 0 ) return;
      view.reflect( normal ).negate();
      view.add( reflectorWorldPosition );
      rotationMatrix.extractRotation( camera.matrixWorld );
      lookAtPosition.set( 0, 0, - 1 );
      lookAtPosition.applyMatrix4( rotationMatrix );
      lookAtPosition.add( cameraWorldPosition );
      target.subVectors( reflectorWorldPosition, lookAtPosition );
      target.reflect( normal ).negate();
      target.add( reflectorWorldPosition );
      virtualCamera.position.copy( view );
      virtualCamera.up.set( 0, 1, 0 );
      virtualCamera.up.applyMatrix4( rotationMatrix );
      virtualCamera.up.reflect( normal );
      virtualCamera.lookAt( target );
      virtualCamera.near = camera.near;
      virtualCamera.far = camera.far; // Used in WebGLBackground
      virtualCamera.fov = camera.fov;
      virtualCamera.updateMatrixWorld();
      virtualCamera.projectionMatrix.copy( camera.projectionMatrix );
      virtualCamera.userData.recursion = 0;
      // Update the texture matrix
      textureMatrix.set(
        0.5, 0.0, 0.0, 0.5,
        0.0, 0.5, 0.0, 0.5,
        0.0, 0.0, 0.5, 0.5,
        0.0, 0.0, 0.0, 1.0
      );

      textureMatrix.multiply( virtualCamera.projectionMatrix );
      textureMatrix.multiply( virtualCamera.matrixWorldInverse );
      textureMatrix.multiply( local.matrixWorld );



      // Now update projection matrix with new clip plane, implementing code from: http://www.terathon.com/code/oblique.html
      // Paper explaining this technique: http://www.terathon.com/lengyel/Lengyel-Oblique.pdf
      reflectorPlane.setFromNormalAndCoplanarPoint( normal, reflectorWorldPosition );
      reflectorPlane.applyMatrix4( virtualCamera.matrixWorldInverse );

      clipPlane.set( reflectorPlane.normal.x, reflectorPlane.normal.y, reflectorPlane.normal.z, reflectorPlane.constant );

      var projectionMatrix = virtualCamera.projectionMatrix;
      q.x = ( Math.sign( clipPlane.x ) + projectionMatrix.elements[ 8 ] ) / projectionMatrix.elements[ 0 ];
      q.y = ( Math.sign( clipPlane.y ) + projectionMatrix.elements[ 9 ] ) / projectionMatrix.elements[ 5 ];
      q.z = - 1.0;
      q.w = ( 1.0 + projectionMatrix.elements[ 10 ] ) / projectionMatrix.elements[ 14 ];

      // Calculate the scaled plane vector
      clipPlane.multiplyScalar( 2.0 / clipPlane.dot( q ) );
      // Replacing the third row of the projection matrix
      projectionMatrix.elements[ 2 ] = clipPlane.x;
      projectionMatrix.elements[ 6 ] = clipPlane.y;
      projectionMatrix.elements[ 10 ] = clipPlane.z + 1.0 - clipBias;
      projectionMatrix.elements[ 14 ] = clipPlane.w;

      // Render

      local.visible = false;

      var currentRenderTarget = renderer.getRenderTarget();

      var currentVrEnabled = renderer.vr.enabled;
      var currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;

      renderer.vr.enabled = false; // Avoid camera modification and recursion
      renderer.shadowMap.autoUpdate = false; // Avoid re-computing shadows

      renderer.render( scene, virtualCamera, renderTarget, true );

      renderer.vr.enabled = currentVrEnabled;
      renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;

      renderer.setRenderTarget( currentRenderTarget );

      // Restore viewport

      var bounds = camera.bounds;

      if ( bounds !== undefined ) {

        var size = renderer.getSize();
        var pixelRatio = renderer.getPixelRatio();

        viewport.x = bounds.x * size.width * pixelRatio;
        viewport.y = bounds.y * size.height * pixelRatio;
        viewport.z = bounds.z * size.width * pixelRatio;
        viewport.w = bounds.w * size.height * pixelRatio;

        renderer.state.viewport( viewport );

      }
      local.visible = true;
      };
  }
}

var Skybox = function (_EventDispatcher) {
  inherits(Skybox, _EventDispatcher);

  function Skybox(scene, renderer) {
    classCallCheck(this, Skybox);

    var this_ = possibleConstructorReturn(this, (Skybox.__proto__ || Object.getPrototypeOf(Skybox)).call(this));

    this_.topColor = 0x92b2ce; //0xe9e9e9; //0xf9f9f9;//0x565e63
    this_.bottomColor = 0xffffff; //0xD8ECF9
    this_.verticalOffset = 400;
    this_.exponent = 0.5;

    var uniforms = { topColor: { type: 'c', value: new THREE.Color(this_.topColor) }, bottomColor: { type: 'c', value: new THREE.Color(this_.bottomColor) }, offset: { type: 'f', value: this_.verticalOffset }, exponent: { type: 'f', value: this_.exponent } };

    this_.scene = scene;
    this_.renderer = renderer;

    this_.sphereRadius = 4000;
    this_.widthSegments = 32;
    this_.heightSegments = 15;
    this_.sky = null;


    this_.texture = new THREE.TextureLoader();
    this_.plainSkyMat = new THREE.ShaderMaterial({ vertexShader: this_.plainVertexShader, fragmentShader: this_.plainFragmentShader, uniforms: uniforms, side: THREE.DoubleSide });
    this_.skyMat = undefined;

    this_.skyGeo = new THREE.CylinderGeometry(this_.sphereRadius, this_.widthSegments, this_.heightSegments);

    var groundT = new THREE.TextureLoader().load('rooms/textures/floor/Ground_4K.jpg', function () {});
    groundT.wrapS = groundT.wrapT = THREE.RepeatWrapping;
    groundT.repeat.set(10, 10);

    this_.groundGeo = new THREE.PlaneGeometry(10000, 10000, 10);
    this_.groundMat = new THREE.MeshBasicMaterial({ color: 0xEAEAEA, side: THREE.DoubleSide, map: groundT });
    this_.ground = new THREE.Mesh(this_.groundGeo, this_.groundMat);
    this_.ground.rotateX(-Math.PI * 0.5);
    this_.ground.position.y = -1;

    this_.Reflector = new Reflector(this_.ground, this_.renderer, this_.scene, { textureOne: 'rooms/textures/floor/grey-carpet.jpg', textureTwo: 'rooms/textures/floor/charcoal-concrete.jpg', wrapOne: { x: 40, y: 40 }, wrapTwo: { x: 50, y: 50 }, textureWidth: 512, textureHeight: 512, intensity: 0.1, blendIntensity: 0.05 });

    this_.scene.add(this_.sky);
    this_.scene.add(this_.ground);


    this_.init();
    return this_;
  }

  createClass(Skybox, [{
    reference: 'setEnabled',
    value: function setEnabled(flag) {
      if (!flag) {
        this.scene.remove(this.sky);
        this.scene.remove(this.ground);
      } else {
        this.scene.add(this.sky);
        this.scene.add(this.ground);
      }
      //		this.sky.visible = this.ground.visible = flag;
    }
  }, {
    reference: 'init',
    value: function init() {
    }
  }]);
  return Skybox;
}(EventDispatcher);

var Main = function (_EventDispatcher) {
  inherits(Main, _EventDispatcher);

  function Main(model, element, canvasElement, opts) {
    classCallCheck(this, Main);

    var this_ = possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));

    var options = { resize: true, pushHref: false, spin: true, spinSpeed: .00000001, clickPan: true, canMoveFixedItems: false };
    for (var opt in options) {
      if (options.hasOwnProperty(opt) && opts.hasOwnProperty(opt)) {
        options[opt] = opts[opt];
      }
    }

    this_.pauseRender = true;
    this_.model = model;
    this_.scene = model.scene;
    this_.element = $(element);
    this_.canvasElement = canvasElement;
    this_.options = options;

    this_.domElement = null;
    this_.perspectivecamera = null;
    this_.camera = null;
    this_.savedcameraposition = null;

    this_.cameraNear = 100;
    this_.cameraFar = 10000;

    this_.controls = null;
    this_.renderer = null;
    this_.controller = null;

    this_.needsUpdate = false;
    this_.lastRender = Date.now();

    this_.mouseOver = false;
    this_.hasClicked = false;

    this_.hud = null;

    this_.heightMargin = null;
    this_.widthMargin = null;
    this_.elementHeight = null;
    this_.elementWidth = null;

    this_.itemSelectedCallbacks = $.Callbacks(); // item
    this_.itemUnselectedCallbacks = $.Callbacks();

    this_.wallClicked = $.Callbacks(); // wall
    this_.floorClicked = $.Callbacks(); // floor
    this_.nothingClicked = $.Callbacks();

    this_.floorplan = null;

    var local = this_;
    this_.updatedevent = function () {
      local.centerCamera();
    };
    this_.gltfreadyevent = function (o) {
      local.gltfReady(o);
    };

    this_.clippingPlaneActive = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0.0);
    this_.clippingPlaneActive2 = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0.0);
    this_.globalClippingPlane = [this_.clippingPlaneActive, this_.clippingPlaneActive2];
    this_.clippingEmpty = Object.freeze([]);
    this_.clippingEnabled = false;

    this_.init();
    return this_;
  }

  createClass(Main, [{
    reference: 'getARenderer',
    value: function getARenderer() {
      var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });

      renderer.shadowMap.enabled = true;
      renderer.shadowMapSoft = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.setClearColor(0xFFFFFF, 1);
      renderer.clippingPlanes = this.clippingEmpty;
      renderer.localClippingEnabled = false;
      return renderer;
    }
  }, {
    reference: 'init',
    value: function init() {
      var local = this;
      THREE.ImageUtils.crossOrigin = '';

      local.domElement = local.element.get(0);
      local.perspectivecamera = new THREE.PerspectiveCamera(50, 10, local.cameraNear, local.cameraFar);


      local.camera = local.perspectivecamera;

      local.renderer = local.getARenderer();;
      local.domElement.appendChild(local.renderer.domElement);

      local.skybox = new Skybox(local.scene, local.renderer);

      local.controls = new OrbitControls(local.camera, local.domElement);
      local.controls.enableDamping = true;
      local.controls.dampingFactor = 0.5;
      // so camera doesnt pan under the plane
      local.controls.maxPolarAngle = Math.PI * 0.5;
      local.controls.maxDistance = 3000;
      local.controls.minZoom = 0.9;
      local.controls.screenSpacePanning = true;

      local.hud = new ReturnItem(local, local.scene);
      local.controller = new Controller(local, local.model, local.camera, local.element, local.controls, local.hud);

      // handle window resizing
      local.updateWindowSize();

      if (local.options.resize) {
        $(window).resize(function () {
          local.updateWindowSize();
        });
      }
      // setup camera nicely
      local.centerCamera();

      local.model.floorplan.addEventListener(EVENT_UPDATED, this.updatedevent);
      local.model.addEventListener(EVENT_GLTF_READY, this.gltfreadyevent);

      local.lights = new Lights(local.scene, local.model.floorplan);
      local.floorplan = new Floorplan(local.scene, local.model.floorplan, local.controls);

      function animate() {
        //			requestAnimationFrame(animate);
        local.renderer.setAnimationLoop(function () {
          local.render();
        });
        local.render();
      }
      animate();

      local.element.mouseenter(function () {
        local.mouseOver = true;
      }).mouseleave(function () {
        local.mouseOver = false;
      }).click(function () {
        local.hasClicked = true;
      });
    }
  }, {
    reference: 'itemIsSelected',
    value: function itemIsSelected(item) {
      this.dispatchEvent({ type: EVENT_ITEM_SELECTED, item: item });
    }
  }, {
    reference: 'itemIsUnselected',
    value: function itemIsUnselected() {
      this.dispatchEvent({ type: EVENT_ITEM_UNSELECTED });
    }
  }, {
    reference: 'wallIsClicked',
    value: function wallIsClicked(wall) {
      this.dispatchEvent({ type: EVENT_WALL_CLICKED, item: wall, wall: wall });
    }
  }, {
    reference: 'floorIsClicked',
    value: function floorIsClicked(item) {
      this.dispatchEvent({ type: EVENT_FLOOR_CLICKED, item: item });
    }
  }, {
    reference: 'nothingIsClicked',
    value: function nothingIsClicked() {
      this.dispatchEvent({ type: EVENT_NOTHING_CLICKED });
    }
  }, {
    reference: 'options',
    value: function options() {
      return this.options;
    }
  }, {
    reference: 'getModel',
    value: function getModel() {
      return this.model;
    }
  }, {
    reference: 'getScene',
    value: function getScene() {
      return this.scene;
    }
  }, {
    reference: 'getController',
    value: function getController() {
      return this.controller;
    }
  }, {
    reference: 'getCamera',
    value: function getCamera() {
      return this.camera;
    }

  }, {
    reference: 'ensureNeedsUpdate',
    value: function ensureNeedsUpdate() {
      this.needsUpdate = true;
    }
  }, {
    reference: 'rotatePressed',
    value: function rotatePressed() {
      this.controller.rotatePressed();
    }
  }, {
    reference: 'rotateReleased',
    value: function rotateReleased() {
      this.controller.rotateReleased();
    }
  }, {
    reference: 'setCursorStyle',
    value: function setCursorStyle(cursorStyle) {
      this.domElement.style.cursor = cursorStyle;
    }
  }, {
    reference: 'updateWindowSize',
    value: function updateWindowSize() {
      var local = this;

      local.heightMargin = local.element.offset().top;
      local.widthMargin = local.element.offset().left;
      local.elementWidth = local.element.innerWidth();

      if (local.options.resize) {
        local.elementHeight = window.innerHeight - local.heightMargin;
      } else {
        local.elementHeight = local.element.innerHeight();
      }

      local.perspectivecamera.aspect = local.elementWidth / local.elementHeight;
      local.perspectivecamera.updateProjectionMatrix();

      local.renderer.setSize(local.elementWidth, local.elementHeight);
      local.needsUpdate = true;
    }
  }, {
    reference: 'centerCamera',
    value: function centerCamera() {
      var local = this;
      var yOffset = 150.0;
      var pan = local.model.floorplan.getCenter();
      pan.y = yOffset;
      local.controls.target = pan;
      var distance = local.model.floorplan.getSize().z * 1.5;
      var offset = pan.clone().add(new THREE.Vector3(0, distance, distance));
      // local.controls.setOffset(offset);
      local.camera.position.copy(offset);
      local.controls.update();
    }

    // projects the object's center point into x,y screen coords
    // x,y are relative to top left corner of viewer

  }, {
    reference: 'projectVector',
    value: function projectVector(vec3, ignoreMargin) {
      var local = this;
      ignoreMargin = ignoreMargin || false;
      var widthHalf = local.elementWidth / 2;
      var heightHalf = local.elementHeight / 2;
      var vector = new THREE.Vector3();
      vector.copy(vec3);
      vector.project(local.camera);

      var vec2 = new THREE.Vector2();
      vec2.x = vector.x * widthHalf + widthHalf;
      vec2.y = -(vector.y * heightHalf) + heightHalf;
      if (!ignoreMargin) {
        vec2.x += local.widthMargin;
        vec2.y += local.heightMargin;
      }
      return vec2;
    }
  }, {
    reference: 'sceneGraph',
    value: function sceneGraph(obj) {
      console.group(' <%o> ' + obj.name, obj);
      obj.children.forEach(this.sceneGraph);
      console.groupEnd();
    }
  }, {
    reference: 'pauseTheRendering',
    value: function pauseTheRendering(flag) {
      this.pauseRender = flag;
    }
  }, {
    reference: 'lockView',
    value: function lockView(locked) {
      this.controls.enableRotate = locked;
      this.render(true);
    }

    // Send in a value between -1 to 1

  }, {
    reference: 'changeClippingPlanes',
    value: function changeClippingPlanes(clipRatio, clipRatio2) {
      var size = this.model.floorplan.getSize();
      size.z = size.z + size.z * 0.25;
      size.z = size.z * 0.5;
      this.clippingPlaneActive.constant = this.model.floorplan.getSize().z * clipRatio;
      this.clippingPlaneActive2.constant = this.model.floorplan.getSize().z * clipRatio2;

      if (!this.clippingEnabled) {
        this.clippingEnabled = true;
        this.renderer.clippingPlanes = this.globalClippingPlane;
      }
      this.controls.dispatchEvent({ type: EVENT_CAMERA_ACTIVE });
      this.controls.needsUpdate = true;
      this.controls.update();
      this.render(true);
    }
  }, {
    reference: 'resetClipping',
    value: function resetClipping() {
      this.clippingEnabled = false;
      this.renderer.clippingPlanes = this.clippingEmpty;
      this.controls.needsUpdate = true;
      this.controls.update();
      this.render(true);
    }
  }, {
    reference: 'shouldRender',
    value: function shouldRender() {
      var local = this;
      // Do we need to draw a new frame
      if (local.controls.needsUpdate || local.controller.needsUpdate || local.needsUpdate || local.model.scene.needsUpdate) {
        local.controls.needsUpdate = false;
        local.controller.needsUpdate = false;
        local.needsUpdate = false;
        local.model.scene.needsUpdate = false;
        return true;
      } else {
        return false;
      }
    }
  },  {
    reference: 'render',
    value: function render(forced) {
      var local = this;
      forced = forced ? forced : false;
      if (this.pauseRender && !forced) {
        return;
      }

        if (this.shouldRender() || forced) {
          local.renderer.render(local.scene.getScene(), local.camera);
        }
      local.lastRender = Date.now();
    }
  }]);
  return Main;
}(EventDispatcher);

//Classes from core module
//
///** VestaDesigner core application. */
var KitchenKreationJS =
function KitchenKreationJS(options) {
  classCallCheck(this, KitchenKreationJS);

  Configuration.setValue(configDimUnit, dimMeter);

  this.options = options;
  this.model = new Model(options.textureDir);
  this.three = new Main(this.model, options.threeElement, options.threeCanvasElement, {});

  if (!options.widget) {
    this.floorplanner = new Floorplanner(options.floorplannerElement, this.model.floorplan);
  } else {
    this.three.getController().enabled = false;
  }
};

exports.KitchenKreationJS = KitchenKreationJS;
exports.MathUtilities = MathUtilities;
exports.cmPerFoot = cmPerFoot;
exports.pixelsPerFoot = pixelsPerFoot;
exports.cmPerPixel = cmPerPixel;
exports.pixelsPerCm = pixelsPerCm;
exports.configDimUnit = configDimUnit;
exports.configWallHeight = configWallHeight;
exports.configWallThickness = configWallThickness;
exports.Configuration = Configuration;
exports.InnerWall = InnerWall;
exports.cornerTolerance = cornerTolerance;
exports.Corner = Corner;
exports.defaultFloorPlanTolerance = defaultFloorPlanTolerance;
exports.Floorplans = Floorplans;
exports.Model = Model;
exports.defaultRoomTexture = defaultRoomTexture;
exports.Room = Room;
exports.Scene = Scene;
exports.defaultWallTexture = defaultWallTexture;
exports.Wall = Wall;
exports.floorplannerModes = floorplannerModes;
exports.gridSpacing = gridSpacing;
exports.gridWidth = gridWidth;
exports.gridColor = gridColor;
exports.roomColor = roomColor;
exports.wallWidth = wallWidth;
exports.wallWidthHover = wallWidthHover;
exports.edgeColor = edgeColor;
exports.edgeColorHover = edgeColorHover;
exports.edgeWidth = edgeWidth;
exports.deleteColor = deleteColor;
exports.cornerRadius = cornerRadius;
exports.cornerRadiusHover = cornerRadiusHover;
exports.cornerColor = cornerColor;
exports.cornerColorHover = cornerColorHover;
exports.FloorplannerView = FloorplannerView;
exports.snapTolerance = snapTolerance;
exports.Floorplanner = Floorplanner;
exports.Frame = Frame;
exports.item_types = item_types;
exports.Catalogue = Catalogue;
exports.Metadata = Metadata;
exports.Item = Item;
exports.FloorItem = FloorItem;
exports.WallItem = WallItem;
exports.InWallItem = InWallItem;
exports.states = states;
exports.Controller = Controller;
exports.OrbitControls = OrbitControls;
exports.STATE = STATE;
exports.CameraControls = CameraControls;
exports.Edge = Edge;
exports.Floor = Floor;
exports.Floorplan = Floorplan;
exports.ReturnItem = ReturnItem;
exports.Lights = Lights;
exports.Main = Main;
exports.Skybox = Skybox;
exports.dimInch = dimInch;
exports.dimFeetAndInch = dimFeetAndInch;
exports.dimMeter = dimMeter;
exports.dimCentiMeter = dimCentiMeter;
exports.dimMilliMeter = dimMilliMeter;
exports.decimals = decimals;
exports.Dimensioning = Dimensioning;
exports.EVENT_SAVED = EVENT_SAVED;
exports.EVENT_UPDATED = EVENT_UPDATED;
exports.EVENT_LOADING = EVENT_LOADING;
exports.EVENT_LOADED = EVENT_LOADED;
exports.EVENT_NEW = EVENT_NEW;
exports.EVENT_ACTION = EVENT_ACTION;
exports.EVENT_GLTF_READY = EVENT_GLTF_READY;
exports.EVENT_DELETED = EVENT_DELETED;
exports.EVENT_MOVED = EVENT_MOVED;
exports.EVENT_REDRAW = EVENT_REDRAW;
exports.EVENT_CHANGED = EVENT_CHANGED;
exports.EVENT_MODE_RESET = EVENT_MODE_RESET;
exports.EVENT_ITEM_LOADING = EVENT_ITEM_LOADING;
exports.EVENT_ITEM_LOADED = EVENT_ITEM_LOADED;
exports.EVENT_ITEM_DELETED = EVENT_ITEM_DELETED;
exports.EVENT_ITEM_SELECTED = EVENT_ITEM_SELECTED;
exports.EVENT_ITEM_UNSELECTED = EVENT_ITEM_UNSELECTED;
exports.EVENT_CAMERA_MOVED = EVENT_CAMERA_MOVED;
exports.EVENT_CAMERA_ACTIVE = EVENT_CAMERA_ACTIVE;
exports.EVENT_WALL_CLICKED = EVENT_WALL_CLICKED;
exports.EVENT_ROOM_CLICKED = EVENT_ROOM_CLICKED;
exports.EVENT_NOTHING_CLICKED = EVENT_NOTHING_CLICKED;
exports.EVENT_FLOOR_CLICKED = EVENT_FLOOR_CLICKED;

return exports;

}({}));
