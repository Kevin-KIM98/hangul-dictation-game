const Ph="modulepreload",Lh=function(i){return"/hangul-dictation-game/"+i},El={},ci=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let a=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");s=a(e.map(c=>{if(c=Lh(c),c in El)return;El[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Ph,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((p,_)=>{h.addEventListener("load",p),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ke="srgb",aa="srgb-linear",oa="linear",fe="srgb";const Tl="300 es";function Ih(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function la(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dh(){const i=la("canvas");return i.style.display="block",i}const wl={};function ca(...i){const t="THREE."+i.shift();console.log(t,...i)}function su(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $t(...i){i=su(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function se(...i){i=su(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ls(...i){const t=i.join(" ");t in wl||(wl[t]=!0,$t(...i))}function Nh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Uh={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Al=1234567;const Hs=Math.PI/180,Ks=180/Math.PI;function Dn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Fo(i,t){return(i%t+t)%t}function Fh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Oh(i,t,e){return i!==t?(e-i)/(t-i):0}function Ws(i,t,e){return(1-e)*i+e*t}function Bh(i,t,e,n){return Ws(i,t,1-Math.exp(-e*n))}function kh(i,t=1){return t-Math.abs(Fo(i,t*2)-t)}function zh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Vh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Hh(i,t){return i+Math.random()*(t-i)}function Wh(i){return i*(.5-Math.random())}function Xh(i){i!==void 0&&(Al=i);let t=Al+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $h(i){return i*Hs}function qh(i){return i*Ks}function Yh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Kh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),p=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*p,o*u,o*c);break;default:$t("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ms={DEG2RAD:Hs,RAD2DEG:Ks,generateUUID:Dn,clamp:te,euclideanModulo:Fo,mapLinear:Fh,inverseLerp:Oh,lerp:Ws,damp:Bh,pingpong:kh,smoothstep:zh,smootherstep:Gh,randInt:Vh,randFloat:Hh,randFloatSpread:Wh,seededRandom:Xh,degToRad:$h,radToDeg:qh,isPowerOfTwo:Yh,ceilPowerOfTwo:Kh,floorPowerOfTwo:Jh,setQuaternionFromProperEuler:Zh,normalize:pe,denormalize:mn};class ut{static{ut.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],p=r[a+1],_=r[a+2],S=r[a+3];if(d!==S||l!==h||c!==p||u!==_){let m=l*h+c*p+u*_+d*S;m<0&&(h=-h,p=-p,_=-_,S=-S,m=-m);let f=1-o;if(m<.9995){const E=Math.acos(m),A=Math.sin(E);f=Math.sin(f*E)/A,o=Math.sin(o*E)/A,l=l*f+h*o,c=c*f+p*o,u=u*f+_*o,d=d*f+S*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+_*o,d=d*f+S*o;const E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+u*d+l*p-c*h,t[e+1]=l*_+u*h+c*d-o*p,t[e+2]=c*_+u*p+o*h-l*d,t[e+3]=u*_-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"YZX":this._x=h*u*d+c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d-h*p*_;break;case"XZY":this._x=h*u*d-c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d+h*p*_;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ca.copy(this).projectOnVector(t),this.sub(Ca)}reflect(t){return this.sub(Ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new P,Cl=new Nn;class Yt{static{Yt.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],_=n[8],S=s[0],m=s[3],f=s[6],E=s[1],A=s[4],v=s[7],y=s[2],b=s[5],L=s[8];return r[0]=a*S+o*E+l*y,r[3]=a*m+o*A+l*b,r[6]=a*f+o*v+l*L,r[1]=c*S+u*E+d*y,r[4]=c*m+u*A+d*b,r[7]=c*f+u*v+d*L,r[2]=h*S+p*E+_*y,r[5]=h*m+p*A+_*b,r[8]=h*f+p*v+_*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,_=e*d+n*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=d*S,t[1]=(s*c-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=h*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=p*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ra.makeScale(t,e)),this}rotate(t){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ra.makeRotation(-t)),this}translate(t,e){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new Yt,Rl=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qh(){const i={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[aa]:{primaries:t,whitePoint:n,transfer:oa,toXYZ:Rl,fromXYZ:Pl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:Rl,fromXYZ:Pl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),i}const re=Qh();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class jh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ui===void 0&&(Ui=la("canvas")),Ui.width=t.width,Ui.height=t.height;const s=Ui.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=la("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let td=0;class Oo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Pa(s[a].image)):r.push(Pa(s[a]))}else r=Pa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}let ed=0;const La=new P;class Ve extends Pi{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=1001,s=1001,r=1006,a=1008,o=1023,l=1009,c=Ve.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Dn(),this.name="",this.source=new Oo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(La).x}get height(){return this.source.getSize(La).y}get depth(){return this.source.getSize(La).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=300;Ve.DEFAULT_ANISOTROPY=1;class Se{static{Se.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],_=l[9],S=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,v=(p+1)/2,y=(f+1)/2,b=(u+h)/4,L=(d+S)/4,x=(_+m)/4;return A>v&&A>y?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=b/n,r=L/n):v>y?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=x/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=L/r,s=x/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(d-S)/E,this.z=(h-u)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nd extends Pi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Ve(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Oo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends nd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ru extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class id extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class ue{static{ue.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,u,d,h,p,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,p,_,S,m)}set(t,e,n,s,r,a,o,l,c,u,d,h,p,_,S,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),a=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,p=a*d,_=o*u,S=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+_*c,e[5]=h-S*c,e[9]=-o*l,e[2]=S-h*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,p=l*d,_=c*u,S=c*d;e[0]=h+S*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=S+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,p=l*d,_=c*u,S=c*d;e[0]=h-S*o,e[4]=-a*d,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,p=a*d,_=o*u,S=o*d;e[0]=l*u,e[4]=_*c-p,e[8]=h*c+S,e[1]=l*d,e[5]=S*c+h,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*c,_=o*l,S=o*c;e[0]=l*u,e[4]=S-h*d,e[8]=_*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*d+_,e[10]=h-S*d}else if(t.order==="XZY"){const h=a*l,p=a*c,_=o*l,S=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+S,e[5]=a*u,e[9]=p*d-_,e[2]=_*d-p,e[6]=o*u,e[10]=S*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sd,t,rd)}lookAt(t,e,n){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),ti.crossVectors(n,en),ti.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ti.crossVectors(n,en)),ti.normalize(),_r.crossVectors(en,ti),s[0]=ti.x,s[4]=_r.x,s[8]=en.x,s[1]=ti.y,s[5]=_r.y,s[9]=en.y,s[2]=ti.z,s[6]=_r.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],_=n[2],S=n[6],m=n[10],f=n[14],E=n[3],A=n[7],v=n[11],y=n[15],b=s[0],L=s[4],x=s[8],T=s[12],C=s[1],D=s[5],O=s[9],z=s[13],N=s[2],k=s[6],Y=s[10],q=s[14],at=s[3],$=s[7],tt=s[11],it=s[15];return r[0]=a*b+o*C+l*N+c*at,r[4]=a*L+o*D+l*k+c*$,r[8]=a*x+o*O+l*Y+c*tt,r[12]=a*T+o*z+l*q+c*it,r[1]=u*b+d*C+h*N+p*at,r[5]=u*L+d*D+h*k+p*$,r[9]=u*x+d*O+h*Y+p*tt,r[13]=u*T+d*z+h*q+p*it,r[2]=_*b+S*C+m*N+f*at,r[6]=_*L+S*D+m*k+f*$,r[10]=_*x+S*O+m*Y+f*tt,r[14]=_*T+S*z+m*q+f*it,r[3]=E*b+A*C+v*N+y*at,r[7]=E*L+A*D+v*k+y*$,r[11]=E*x+A*O+v*Y+y*tt,r[15]=E*T+A*z+v*q+y*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],_=t[3],S=t[7],m=t[11],f=t[15],E=l*p-c*h,A=o*p-c*d,v=o*h-l*d,y=a*p-c*u,b=a*h-l*u,L=a*d-o*u;return e*(S*E-m*A+f*v)-n*(_*E-m*y+f*b)+s*(_*A-S*y+f*L)-r*(_*v-S*b+m*L)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],_=t[12],S=t[13],m=t[14],f=t[15],E=e*o-n*a,A=e*l-s*a,v=e*c-r*a,y=n*l-s*o,b=n*c-r*o,L=s*c-r*l,x=u*S-d*_,T=u*m-h*_,C=u*f-p*_,D=d*m-h*S,O=d*f-p*S,z=h*f-p*m,N=E*z-A*O+v*D+y*C-b*T+L*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/N;return t[0]=(o*z-l*O+c*D)*k,t[1]=(s*O-n*z-r*D)*k,t[2]=(S*L-m*b+f*y)*k,t[3]=(h*b-d*L-p*y)*k,t[4]=(l*C-a*z-c*T)*k,t[5]=(e*z-s*C+r*T)*k,t[6]=(m*v-_*L-f*A)*k,t[7]=(u*L-h*v+p*A)*k,t[8]=(a*O-o*C+c*x)*k,t[9]=(n*C-e*O-r*x)*k,t[10]=(_*b-S*v+f*E)*k,t[11]=(d*v-u*b-p*E)*k,t[12]=(o*T-a*D-l*x)*k,t[13]=(e*D-n*T+s*x)*k,t[14]=(S*A-_*y-m*E)*k,t[15]=(u*y-d*A+h*E)*k,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,_=r*d,S=a*u,m=a*d,f=o*d,E=l*c,A=l*u,v=l*d,y=n.x,b=n.y,L=n.z;return s[0]=(1-(S+f))*y,s[1]=(p+v)*y,s[2]=(_-A)*y,s[3]=0,s[4]=(p-v)*b,s[5]=(1-(h+f))*b,s[6]=(m+E)*b,s[7]=0,s[8]=(_+A)*L,s[9]=(m-E)*L,s[10]=(1-(h+S))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Fi.set(s[0],s[1],s[2]).length();const o=Fi.set(s[4],s[5],s[6]).length(),l=Fi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),dn.copy(this);const c=1/a,u=1/o,d=1/l;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,e.setFromRotationMatrix(dn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=2e3,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s);let _,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===2e3)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===2001)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=2e3,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s);let _,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===2e3)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===2001)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fi=new P,dn=new ue,sd=new P(0,0,0),rd=new P(1,1,1),ti=new P,_r=new P,en=new P,Ll=new ue,Il=new Nn;class yn{constructor(t=0,e=0,n=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ll,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Il.setFromEuler(this),this.setFromQuaternion(Il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Bo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ad=0;const Dl=new P,Oi=new Nn,Bn=new ue,xr=new P,Ss=new P,od=new P,ld=new Nn,Nl=new P(1,0,0),Ul=new P(0,1,0),Fl=new P(0,0,1),Ol={type:"added"},cd={type:"removed"},Bi={type:"childadded",child:null},Ia={type:"childremoved",child:null};class Re extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new P,e=new yn,n=new Nn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Yt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Nl,t)}rotateY(t){return this.rotateOnAxis(Ul,t)}rotateZ(t){return this.rotateOnAxis(Fl,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nl,t)}translateY(t){return this.translateOnAxis(Ul,t)}translateZ(t){return this.translateOnAxis(Fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Ss,xr,this.up):Bn.lookAt(xr,Ss,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ol),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cd),Ia.child=t,this.dispatchEvent(Ia),Ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ol),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,od),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Re.DEFAULT_UP=new P(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class li extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ud={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),f=this._getHandJoint(c,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ud)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Na(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Fo(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Na(a,r,t+1/3),this.g=Na(a,r,t),this.b=Na(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=au[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return re.workingToColorSpace(ke.copy(this),t),Math.round(te(ke.r*255,0,255))*65536+Math.round(te(ke.g*255,0,255))*256+Math.round(te(ke.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(ke.copy(this),e);const n=ke.r,s=ke.g,r=ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ke){re.workingToColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,s=ke.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(vr);const n=Ws(ei.h,vr.h,e),s=Ws(ei.s,vr.s,e),r=Ws(ei.l,vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Zt;Zt.NAMES=au;class hd extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const fn=new P,kn=new P,Ua=new P,zn=new P,ki=new P,zi=new P,Bl=new P,Fa=new P,Oa=new P,Ba=new P,ka=new Se,za=new Se,Ga=new Se;class ln{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fn.subVectors(t,e),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fn.subVectors(s,e),kn.subVectors(n,e),Ua.subVectors(t,e);const a=fn.dot(fn),o=fn.dot(kn),l=fn.dot(Ua),c=kn.dot(kn),u=kn.dot(Ua),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ka.setScalar(0),za.setScalar(0),Ga.setScalar(0),ka.fromBufferAttribute(t,e),za.fromBufferAttribute(t,n),Ga.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ka,r.x),a.addScaledVector(za,r.y),a.addScaledVector(Ga,r.z),a}static isFrontFacing(t,e,n,s){return fn.subVectors(n,e),kn.subVectors(t,e),fn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),fn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ki.subVectors(s,n),zi.subVectors(r,n),Fa.subVectors(t,n);const l=ki.dot(Fa),c=zi.dot(Fa);if(l<=0&&c<=0)return e.copy(n);Oa.subVectors(t,s);const u=ki.dot(Oa),d=zi.dot(Oa);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ki,a);Ba.subVectors(t,r);const p=ki.dot(Ba),_=zi.dot(Ba);if(_>=0&&p<=_)return e.copy(r);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(zi,o);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return Bl.subVectors(r,s),o=(d-u)/(d-u+(p-_)),e.copy(s).addScaledVector(Bl,o);const f=1/(m+S+h);return a=S*f,o=h*f,e.copy(n).addScaledVector(ki,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Li{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(t.matrixWorld),this.union(Mr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),Sr.subVectors(this.max,ys),Gi.subVectors(t.a,ys),Vi.subVectors(t.b,ys),Hi.subVectors(t.c,ys),ni.subVectors(Vi,Gi),ii.subVectors(Hi,Vi),pi.subVectors(Gi,Hi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-pi.z,pi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,pi.z,0,-pi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-pi.y,pi.x,0];return!Va(e,Gi,Vi,Hi,Sr)||(e=[1,0,0,0,1,0,0,0,1],!Va(e,Gi,Vi,Hi,Sr))?!1:(yr.crossVectors(ni,ii),e=[yr.x,yr.y,yr.z],Va(e,Gi,Vi,Hi,Sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Gn=[new P,new P,new P,new P,new P,new P,new P,new P],pn=new P,Mr=new Li,Gi=new P,Vi=new P,Hi=new P,ni=new P,ii=new P,pi=new P,ys=new P,Sr=new P,yr=new P,mi=new P;function Va(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);const o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ce=new P,br=new ut;let dd=0;class tn extends Pi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class ou extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lu extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const fd=new Li,bs=new P,Ha=new P;class ps{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Ha)),this.expandByPoint(bs.copy(t.center).sub(Ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let pd=0;const an=new ue,Wa=new Re,Wi=new P,nn=new Li,Es=new Li,Ne=new P;class Ee extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ih(t)?lu:ou)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Wa.lookAt(t),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(nn.min,Es.min),nn.expandByPoint(Ne),Ne.addVectors(nn.max,Es.max),nn.expandByPoint(Ne)):(nn.expandByPoint(Es.min),nn.expandByPoint(Es.max))}nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ne.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),Ne.add(Wi)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new P,l[x]=new P;const c=new P,u=new P,d=new P,h=new ut,p=new ut,_=new ut,S=new P,m=new P;function f(x,T,C){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,C),u.sub(c),d.sub(c),p.sub(h),_.sub(h);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),o[x].add(S),o[T].add(S),o[C].add(S),l[x].add(m),l[T].add(m),l[C].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,T=E.length;x<T;++x){const C=E[x],D=C.start,O=C.count;for(let z=D,N=D+O;z<N;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const A=new P,v=new P,y=new P,b=new P;function L(x){y.fromBufferAttribute(s,x),b.copy(y);const T=o[x];A.copy(T),A.sub(y.multiplyScalar(y.dot(T))).normalize(),v.crossVectors(b,T);const D=v.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,D)}for(let x=0,T=E.length;x<T;++x){const C=E[x],D=C.start,O=C.count;for(let z=D,N=D+O;z<N;z+=3)L(t.getX(z+0)),L(t.getX(z+1)),L(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(t)for(let h=0,p=t.count;h<p;h+=3){const _=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let f=0;f<u;f++)h[_++]=c[p++]}return new tn(h,u,d)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class md{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const Xe=new P;class ua{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ua(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Xa=new P,gd=new P,_d=new Yt;class ai{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Xa.subVectors(n,e).cross(gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Xa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||_d.getNormalMatrix(t),s=this.coplanarPoint(Xa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let xd=0;class di extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ai().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class oi extends di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Xi;const Ts=new P,$i=new P,qi=new P,Yi=new ut,ws=new ut,cu=new ue,Er=new P,As=new P,Tr=new P,kl=new ut,$a=new ut,zl=new ut;class Si extends Re{constructor(t=new oi){if(super(),this.isSprite=!0,this.type="Sprite",Xi===void 0){Xi=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new md(e,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new ua(n,3,0,!1)),Xi.setAttribute("uv",new ua(n,2,3,!1))}this.geometry=Xi,this.material=t,this.center=new ut(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),cu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-qi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;wr(Er.set(-.5,-.5,0),qi,a,$i,s,r),wr(As.set(.5,-.5,0),qi,a,$i,s,r),wr(Tr.set(.5,.5,0),qi,a,$i,s,r),kl.set(0,0),$a.set(1,0),zl.set(1,1);let o=t.ray.intersectTriangle(Er,As,Tr,!1,Ts);if(o===null&&(wr(As.set(-.5,.5,0),qi,a,$i,s,r),$a.set(0,1),o=t.ray.intersectTriangle(Er,Tr,As,!1,Ts),o===null))return;const l=t.ray.origin.distanceTo(Ts);l<t.near||l>t.far||e.push({distance:l,point:Ts.clone(),uv:ln.getInterpolation(Ts,Er,As,Tr,kl,$a,zl,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function wr(i,t,e,n,s,r){Yi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ws.x=r*Yi.x-s*Yi.y,ws.y=s*Yi.x+r*Yi.y):ws.copy(Yi),i.copy(t),i.x+=ws.x,i.y+=ws.y,i.applyMatrix4(cu)}const Vn=new P,qa=new P,Ar=new P,Cr=new P;class ko{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qa.copy(t).add(e).multiplyScalar(.5),Ar.copy(e).sub(t).normalize(),Cr.copy(this.origin).sub(qa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ar),o=Cr.dot(this.direction),l=-Cr.dot(Ar),c=Cr.lengthSq(),u=Math.abs(1-a*a);let d,h,p,_;if(u>0)if(d=a*l-o,h=a*o-l,_=r*u,d>=0)if(h>=-_)if(h<=_){const S=1/u;d*=S,h*=S,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(qa).addScaledVector(Ar,h),p}intersectSphere(t,e){if(t.radius<0)return null;Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,p=t.z-a.z,_=e.x-a.x,S=e.y-a.y,m=e.z-a.z,f=n.x-a.x,E=n.y-a.y,A=n.z-a.z,v=Math.abs(l),y=Math.abs(c),b=Math.abs(u);let L,x,T,C,D,O,z,N,k,Y,q,at;if(v>=y&&v>=b?(T=l,O=d,k=_,at=f,l>=0?(L=c,x=u,C=h,D=p,z=S,N=m,Y=E,q=A):(L=u,x=c,C=p,D=h,z=m,N=S,Y=A,q=E)):y>=b?(T=c,O=h,k=S,at=E,c>=0?(L=u,x=l,C=p,D=d,z=m,N=_,Y=A,q=f):(L=l,x=u,C=d,D=p,z=_,N=m,Y=f,q=A)):(T=u,O=p,k=m,at=A,u>=0?(L=l,x=c,C=d,D=h,z=_,N=S,Y=f,q=E):(L=c,x=l,C=h,D=d,z=S,N=_,Y=E,q=f)),T===0)return null;const $=L/T,tt=x/T,it=1/T,Nt=C-$*O,Ct=D-tt*O,ae=z-$*k,Kt=N-tt*k,ee=Y-$*at,K=q-tt*at,j=ee*Kt-K*ae,pt=Nt*K-Ct*ee,Gt=ae*Ct-Kt*Nt;if(s){if(j<0||pt<0||Gt<0)return null}else if((j<0||pt<0||Gt<0)&&(j>0||pt>0||Gt>0))return null;const Tt=j+pt+Gt;if(Tt===0)return null;const Wt=it*(j*O+pt*k+Gt*at);return(Tt>0?Wt<0:Wt>0)?null:this.at(Wt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bi extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Gl=new ue,gi=new ko,Rr=new ps,Vl=new P,Pr=new P,Lr=new P,Ir=new P,Ya=new P,Dr=new P,Hl=new P,Nr=new P;class we extends Re{constructor(t=new Ee,e=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Ya.fromBufferAttribute(d,t),a?Dr.addScaledVector(Ya,u):Dr.addScaledVector(Ya.sub(e),u))}e.add(Dr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(Rr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Rr,Vl)===null||gi.origin.distanceToSquared(Vl)>(t.far-t.near)**2))&&(Gl.copy(r).invert(),gi.copy(t.ray).applyMatrix4(Gl),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const m=h[_],f=a[m.materialIndex],E=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,y=A;v<y;v+=3){const b=o.getX(v),L=o.getX(v+1),x=o.getX(v+2);s=Ur(this,f,t,n,c,u,d,b,L,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,f=S;m<f;m+=3){const E=o.getX(m),A=o.getX(m+1),v=o.getX(m+2);s=Ur(this,a,t,n,c,u,d,E,A,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const m=h[_],f=a[m.materialIndex],E=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,y=A;v<y;v+=3){const b=v,L=v+1,x=v+2;s=Ur(this,f,t,n,c,u,d,b,L,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,f=S;m<f;m+=3){const E=m,A=m+1,v=m+2;s=Ur(this,a,t,n,c,u,d,E,A,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function vd(i,t,e,n,s,r,a,o){let l;if(t.side===1?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===0,o),l===null)return null;Nr.copy(o),Nr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Nr);return c<e.near||c>e.far?null:{distance:c,point:Nr.clone(),object:i}}function Ur(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Pr),i.getVertexPosition(l,Lr),i.getVertexPosition(c,Ir);const u=vd(i,t,e,n,Pr,Lr,Ir,Hl);if(u){const d=new P;ln.getBarycoord(Hl,Pr,Lr,Ir,d),s&&(u.uv=ln.getInterpolatedAttribute(s,o,l,c,d,new ut)),r&&(u.uv1=ln.getInterpolatedAttribute(r,o,l,c,d,new ut)),a&&(u.normal=ln.getInterpolatedAttribute(a,o,l,c,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};ln.getNormal(Pr,Lr,Ir,h.normal),u.face=h,u.barycoord=d}return u}class uu extends Ve{constructor(t=null,e=1,n=1,s,r,a,o,l,c=1003,u=1003,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wl extends tn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ki=new ue,Xl=new ue,Fr=[],$l=new Li,Md=new ue,Cs=new we,Rs=new ps;class $e extends we{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Md)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),$l.copy(t.boundingBox).applyMatrix4(Ki),this.boundingBox.union($l)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ps),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),Rs.copy(t.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Rs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),t.ray.intersectsSphere(Rs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ki),Xl.multiplyMatrices(n,Ki),Cs.matrixWorld=Xl,Cs.raycast(t,Fr);for(let a=0,o=Fr.length;a<o;a++){const l=Fr[a];l.instanceId=r,l.object=this,e.push(l)}Fr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Wl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new uu(new Float32Array(s*this.count),s,this.count,1028,1015));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _i=new ps,Sd=new ut(.5,.5),Or=new P;class zo{constructor(t=new ai,e=new ai,n=new ai,s=new ai,r=new ai,a=new ai){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],_=r[8],S=r[9],m=r[10],f=r[11],E=r[12],A=r[13],v=r[14],y=r[15];if(s[0].setComponents(c-a,p-u,f-_,y-E).normalize(),s[1].setComponents(c+a,p+u,f+_,y+E).normalize(),s[2].setComponents(c+o,p+d,f+S,y+A).normalize(),s[3].setComponents(c-o,p-d,f-S,y-A).normalize(),n)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,p-h,f-m,y-v).normalize();else if(s[4].setComponents(c-l,p-h,f-m,y-v).normalize(),e===2e3)s[5].setComponents(c+l,p+h,f+m,y+v).normalize();else if(e===2001)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){_i.center.set(0,0,0);const e=Sd.distanceTo(t.center);return _i.radius=.7071067811865476+e,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Or.x=s.normal.x>0?t.max.x:t.min.x,Or.y=s.normal.y>0?t.max.y:t.min.y,Or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Go extends di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ql=new ue,fo=new ko,Br=new ps,kr=new P;class hu extends Re{constructor(t=new Ee,e=new Go){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),Br.radius+=r,t.ray.intersectsSphere(Br)===!1)return;ql.copy(s).invert(),fo.copy(t.ray).applyMatrix4(ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=h,S=p;_<S;_++){const m=c.getX(_);kr.fromBufferAttribute(d,m),Yl(kr,m,l,s,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=h,S=p;_<S;_++)kr.fromBufferAttribute(d,_),Yl(kr,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Yl(i,t,e,n,s,r,a){const o=fo.distanceSqToPoint(i);if(o<e){const l=new P;fo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class du extends Ve{constructor(t=[],e=301,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ii extends Ve{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Js extends Ve{constructor(t,e,n=1014,s,r,a,o=1003,l=1003,c,u=1026,d=1){if(u!==1026&&u!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Oo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class yd extends Js{constructor(t,e=1014,n=301,s,r,a=1003,o=1003,l,c=1026){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class fu extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ms extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(d,2));function _(S,m,f,E,A,v,y,b,L,x,T){const C=v/L,D=y/x,O=v/2,z=y/2,N=b/2,k=L+1,Y=x+1;let q=0,at=0;const $=new P;for(let tt=0;tt<Y;tt++){const it=tt*D-z;for(let Nt=0;Nt<k;Nt++){const Ct=Nt*C-O;$[S]=Ct*E,$[m]=it*A,$[f]=N,c.push($.x,$.y,$.z),$[S]=0,$[m]=0,$[f]=b>0?1:-1,u.push($.x,$.y,$.z),d.push(Nt/L),d.push(1-tt/x),q+=1}}for(let tt=0;tt<x;tt++)for(let it=0;it<L;it++){const Nt=h+it+k*tt,Ct=h+it+k*(tt+1),ae=h+(it+1)+k*(tt+1),Kt=h+(it+1)+k*tt;l.push(Nt,Ct,Kt),l.push(Ct,ae,Kt),at+=6}o.addGroup(p,at,T),p+=at,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ss extends Ee{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=e/2,d=Math.PI/2*t,h=e,p=2*d+h,_=n*2+r,S=s+1,m=new P,f=new P;for(let E=0;E<=_;E++){let A=0,v=0,y=0,b=0;if(E<=n){const T=E/n,C=T*Math.PI/2;v=-u-t*Math.cos(C),y=t*Math.sin(C),b=-t*Math.cos(C),A=T*d}else if(E<=n+r){const T=(E-n)/r;v=-u+T*e,y=t,b=0,A=d+T*h}else{const T=(E-n-r)/n,C=T*Math.PI/2;v=u+t*Math.sin(C),y=t*Math.cos(C),b=t*Math.sin(C),A=d+h+T*d}const L=Math.max(0,Math.min(1,A/p));let x=0;E===0?x=.5/s:E===_&&(x=-.5/s);for(let T=0;T<=s;T++){const C=T/s,D=C*Math.PI*2,O=Math.sin(D),z=Math.cos(D);f.x=-y*z,f.y=v,f.z=y*O,o.push(f.x,f.y,f.z),m.set(-y*z,b,y*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+x,L)}if(E>0){const T=(E-1)*S;for(let C=0;C<s;C++){const D=T+C,O=T+C+1,z=E*S+C,N=E*S+C+1;a.push(D,O,z),a.push(O,N,z)}}}this.setIndex(a),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Vo extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,u=new ut;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const p=n+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Je extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let _=0;const S=[],m=n/2;let f=0;E(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(p,2));function E(){const v=new P,y=new P;let b=0;const L=(e-t)/n;for(let x=0;x<=r;x++){const T=[],C=x/r,D=C*(e-t)+t;for(let O=0;O<=s;O++){const z=O/s,N=z*l+o,k=Math.sin(N),Y=Math.cos(N);y.x=D*k,y.y=-C*n+m,y.z=D*Y,d.push(y.x,y.y,y.z),v.set(k,L,Y).normalize(),h.push(v.x,v.y,v.z),p.push(z,1-C),T.push(_++)}S.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const C=S[T][x],D=S[T+1][x],O=S[T+1][x+1],z=S[T][x+1];(t>0||T!==0)&&(u.push(C,D,z),b+=3),(e>0||T!==r-1)&&(u.push(D,O,z),b+=3)}c.addGroup(f,b,0),f+=b}function A(v){const y=_,b=new ut,L=new P;let x=0;const T=v===!0?t:e,C=v===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*C,0),h.push(0,C,0),p.push(.5,.5),_++;const D=_;for(let O=0;O<=s;O++){const N=O/s*l+o,k=Math.cos(N),Y=Math.sin(N);L.x=T*Y,L.y=m*C,L.z=T*k,d.push(L.x,L.y,L.z),h.push(0,C,0),b.x=k*.5+.5,b.y=Y*.5*C+.5,p.push(b.x,b.y),_++}for(let O=0;O<s;O++){const z=y+O,N=D+O;v===!0?u.push(N,N+1,z):u.push(N+1,N,z),x+=3}c.addGroup(f,x,v===!0?1:2),f+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lr extends Je{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new lr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ho extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const A=new P,v=new P,y=new P;for(let b=0;b<e.length;b+=3)p(e[b+0],A),p(e[b+1],v),p(e[b+2],y),l(A,v,y,E)}function l(E,A,v,y){const b=y+1,L=[];for(let x=0;x<=b;x++){L[x]=[];const T=E.clone().lerp(v,x/b),C=A.clone().lerp(v,x/b),D=b-x;for(let O=0;O<=D;O++)O===0&&x===b?L[x][O]=T:L[x][O]=T.clone().lerp(C,O/D)}for(let x=0;x<b;x++)for(let T=0;T<2*(b-x)-1;T++){const C=Math.floor(T/2);T%2===0?(h(L[x][C+1]),h(L[x+1][C]),h(L[x][C])):(h(L[x][C+1]),h(L[x+1][C+1]),h(L[x+1][C]))}}function c(E){const A=new P;for(let v=0;v<r.length;v+=3)A.x=r[v+0],A.y=r[v+1],A.z=r[v+2],A.normalize().multiplyScalar(E),r[v+0]=A.x,r[v+1]=A.y,r[v+2]=A.z}function u(){const E=new P;for(let A=0;A<r.length;A+=3){E.x=r[A+0],E.y=r[A+1],E.z=r[A+2];const v=m(E)/2/Math.PI+.5,y=f(E)/Math.PI+.5;a.push(v,1-y)}_(),d()}function d(){for(let E=0;E<a.length;E+=6){const A=a[E+0],v=a[E+2],y=a[E+4],b=Math.max(A,v,y),L=Math.min(A,v,y);b>.9&&L<.1&&(A<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),y<.2&&(a[E+4]+=1))}}function h(E){r.push(E.x,E.y,E.z)}function p(E,A){const v=E*3;A.x=t[v+0],A.y=t[v+1],A.z=t[v+2]}function _(){const E=new P,A=new P,v=new P,y=new P,b=new ut,L=new ut,x=new ut;for(let T=0,C=0;T<r.length;T+=9,C+=6){E.set(r[T+0],r[T+1],r[T+2]),A.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),b.set(a[C+0],a[C+1]),L.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),y.copy(E).add(A).add(v).divideScalar(3);const D=m(y);S(b,C+0,E,D),S(L,C+2,A,D),S(x,C+4,v,D)}}function S(E,A,v,y){y<0&&E.x===1&&(a[A]=E.x-1),v.x===0&&v.z===0&&(a[A]=y/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.vertices,t.indices,t.radius,t.detail)}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,p=(a-u)/h;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ut:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new ue;for(let p=0;p<=t;p++){const _=p/t;s[p]=this.getTangentAt(_,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(te(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(te(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wo extends On{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bd extends Wo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Xo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,p*=u,s(a,o,h,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Kl=new P,Jl=new P,Ka=new Xo,Ja=new Xo,Za=new Xo;class Ed extends On{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Jl.subVectors(s[0],s[1]).add(s[0]),c=Jl);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Kl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Kl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),p),S=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),Ka.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,_,S,m),Ja.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,_,S,m),Za.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,_,S,m)}else this.curveType==="catmullrom"&&(Ka.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Ja.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Za.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Ka.calc(l),Ja.calc(l),Za.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Zl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Td(i,t){const e=1-i;return e*e*t}function wd(i,t){return 2*(1-i)*i*t}function Ad(i,t){return i*i*t}function Xs(i,t,e,n){return Td(i,t)+wd(i,e)+Ad(i,n)}function Cd(i,t){const e=1-i;return e*e*e*t}function Rd(i,t){const e=1-i;return 3*e*e*i*t}function Pd(i,t){return 3*(1-i)*i*i*t}function Ld(i,t){return i*i*i*t}function $s(i,t,e,n,s){return Cd(i,t)+Rd(i,e)+Pd(i,n)+Ld(i,s)}class pu extends On{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($s(t,s.x,r.x,a.x,o.x),$s(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Id extends On{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($s(t,s.x,r.x,a.x,o.x),$s(t,s.y,r.y,a.y,o.y),$s(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mu extends On{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dd extends On{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gu extends On{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Xs(t,s.x,r.x,a.x),Xs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nd extends On{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Xs(t,s.x,r.x,a.x),Xs(t,s.y,r.y,a.y),Xs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _u extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Zl(o,l.x,c.x,u.x,d.x),Zl(o,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var po=Object.freeze({__proto__:null,ArcCurve:bd,CatmullRomCurve3:Ed,CubicBezierCurve:pu,CubicBezierCurve3:Id,EllipseCurve:Wo,LineCurve:mu,LineCurve3:Dd,QuadraticBezierCurve:gu,QuadraticBezierCurve3:Nd,SplineCurve:_u});class Ud extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new po[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new po[s.type]().fromJSON(s))}return this}}class Ql extends Ud{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mu(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new gu(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new pu(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _u(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Wo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class xu extends Ql{constructor(t){super(t),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ql().fromJSON(s))}return this}}function Fd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=vu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Gd(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,d=l;for(let h=e;h<s;h+=e){const p=i[h],_=i[h+1];p<o&&(o=p),_<l&&(l=_),p>u&&(u=p),_>d&&(d=_)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Zs(r,a,e,o,l,c,0),a}function vu(i,t,e,n,s){let r;if(s===Qd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=jl(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=jl(a/n|0,i[a],i[a+1],r);return r&&hs(r,r.next)&&(js(r),r=r.next),r}function Ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(hs(e,e.next)||ye(e.prev,e,e.next)===0)){if(js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Zs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&$d(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Bd(i,n,s,r):Od(i)){t.push(l.i,i.i,c.i),js(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=kd(Ci(i),t),Zs(i,t,e,n,s,r,2)):a===2&&zd(i,t,e,n,s,r):Zs(Ci(i),t,e,n,s,r,1);break}}}function Od(i){const t=i.prev,e=i,n=i.next;if(ye(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),p=Math.max(o,l,c);let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=h&&_.y>=d&&_.y<=p&&Bs(s,o,r,l,a,c,_.x,_.y)&&ye(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Bd(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ye(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,p=Math.min(o,l,c),_=Math.min(u,d,h),S=Math.max(o,l,c),m=Math.max(u,d,h),f=mo(p,_,t,e,n),E=mo(S,m,t,e,n);let A=i.prevZ,v=i.nextZ;for(;A&&A.z>=f&&v&&v.z<=E;){if(A.x>=p&&A.x<=S&&A.y>=_&&A.y<=m&&A!==s&&A!==a&&Bs(o,u,l,d,c,h,A.x,A.y)&&ye(A.prev,A,A.next)>=0||(A=A.prevZ,v.x>=p&&v.x<=S&&v.y>=_&&v.y<=m&&v!==s&&v!==a&&Bs(o,u,l,d,c,h,v.x,v.y)&&ye(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;A&&A.z>=f;){if(A.x>=p&&A.x<=S&&A.y>=_&&A.y<=m&&A!==s&&A!==a&&Bs(o,u,l,d,c,h,A.x,A.y)&&ye(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;v&&v.z<=E;){if(v.x>=p&&v.x<=S&&v.y>=_&&v.y<=m&&v!==s&&v!==a&&Bs(o,u,l,d,c,h,v.x,v.y)&&ye(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function kd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!hs(n,s)&&Su(n,e,e.next,s)&&Qs(n,s)&&Qs(s,n)&&(t.push(n.i,e.i,s.i),js(e),js(e.next),e=i=s),e=e.next}while(e!==i);return Ci(e)}function zd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Kd(a,o)){let l=yu(a,o);a=Ci(a,a.next),l=Ci(l,l.next),Zs(a,t,e,n,s,r,0),Zs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Gd(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=vu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Yd(c))}s.sort(Vd);for(let r=0;r<s.length;r++)e=Hd(s[r],e);return e}function Vd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Hd(i,t){const e=Wd(i,t);if(!e)return t;const n=yu(e,i);return Ci(n,n.next),Ci(e,e.next)}function Wd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(hs(i,e))return e;do{if(hs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Mu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);Qs(e,i)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&Xd(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function Xd(i,t){return ye(i.prev,i,t.prev)<0&&ye(t.next,i,i.next)<0}function $d(i,t,e,n){let s=i;do s.z===0&&(s.z=mo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qd(s)}function qd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function mo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Yd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Mu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Bs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Mu(i,t,e,n,s,r,a,o)}function Kd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jd(i,t)&&(Qs(i,t)&&Qs(t,i)&&Zd(i,t)&&(ye(i.prev,i,t.prev)||ye(i,t.prev,t))||hs(i,t)&&ye(i.prev,i,i.next)>0&&ye(t.prev,t,t.next)>0)}function ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function hs(i,t){return i.x===t.x&&i.y===t.y}function Su(i,t,e,n){const s=Gr(ye(i,t,e)),r=Gr(ye(i,t,n)),a=Gr(ye(e,n,i)),o=Gr(ye(e,n,t));return!!(s!==r&&a!==o||s===0&&zr(i,e,t)||r===0&&zr(i,n,t)||a===0&&zr(e,i,n)||o===0&&zr(e,t,n))}function zr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Gr(i){return i>0?1:i<0?-1:0}function Jd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Su(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qs(i,t){return ye(i.prev,i,i.next)<0?ye(i,t,i.next)>=0&&ye(i,i.prev,t)>=0:ye(i,t,i.prev)<0||ye(i,i.next,t)<0}function Zd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function yu(i,t){const e=go(i.i,i.x,i.y),n=go(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function jl(i,t,e,n){const s=go(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function go(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class jd{static triangulate(t,e,n=2){return Fd(t,e,n)}}class rs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return rs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];tc(t),ec(n,t);let a=t.length;e.forEach(tc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,ec(n,e[l]);const o=jd.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function tc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ec(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class $o extends Ee{constructor(t=new xu([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:p-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:tf;let A,v=!1,y,b,L,x;if(f){A=f.getSpacedPoints(u),v=!0,h=!1;const nt=f.isCatmullRomCurve3?f.closed:!1;y=f.computeFrenetFrames(u,nt),b=new P,L=new P,x=new P}h||(m=0,p=0,_=0,S=0);const T=o.extractPoints(c);let C=T.shape;const D=T.holes;if(!rs.isClockWise(C)){C=C.reverse();for(let nt=0,rt=D.length;nt<rt;nt++){const lt=D[nt];rs.isClockWise(lt)&&(D[nt]=lt.reverse())}}function z(nt){const lt=10000000000000001e-36;let ct=nt[0];for(let ft=1;ft<=nt.length;ft++){const Vt=ft%nt.length,Ot=nt[Vt],X=Ot.x-ct.x,Q=Ot.y-ct.y,R=X*X+Q*Q,At=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(ct.x),Math.abs(ct.y)),Rt=lt*At*At;if(R<=Rt){nt.splice(Vt,1),ft--;continue}ct=Ot}}z(C),D.forEach(z);const N=D.length,k=C;for(let nt=0;nt<N;nt++){const rt=D[nt];C=C.concat(rt)}function Y(nt,rt,lt){return rt||se("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(rt,lt)}const q=C.length;function at(nt,rt,lt){let ct,ft,Vt;const Ot=nt.x-rt.x,X=nt.y-rt.y,Q=lt.x-nt.x,R=lt.y-nt.y,At=Ot*Ot+X*X,Rt=Ot*R-X*Q;if(Math.abs(Rt)>Number.EPSILON){const w=Math.sqrt(At),g=Math.sqrt(Q*Q+R*R),B=rt.x-X/w,H=rt.y+Ot/w,J=lt.x-R/g,ht=lt.y+Q/g,mt=((J-B)*R-(ht-H)*Q)/(Ot*R-X*Q);ct=B+Ot*mt-nt.x,ft=H+X*mt-nt.y;const Z=ct*ct+ft*ft;if(Z<=2)return new ut(ct,ft);Vt=Math.sqrt(Z/2)}else{let w=!1;Ot>Number.EPSILON?Q>Number.EPSILON&&(w=!0):Ot<-Number.EPSILON?Q<-Number.EPSILON&&(w=!0):Math.sign(X)===Math.sign(R)&&(w=!0),w?(ct=-X,ft=Ot,Vt=Math.sqrt(At)):(ct=Ot,ft=X,Vt=Math.sqrt(At/2))}return new ut(ct/Vt,ft/Vt)}const $=[];for(let nt=0,rt=k.length,lt=rt-1,ct=nt+1;nt<rt;nt++,lt++,ct++)lt===rt&&(lt=0),ct===rt&&(ct=0),$[nt]=at(k[nt],k[lt],k[ct]);const tt=[];let it,Nt=$.concat();for(let nt=0,rt=N;nt<rt;nt++){const lt=D[nt];it=[];for(let ct=0,ft=lt.length,Vt=ft-1,Ot=ct+1;ct<ft;ct++,Vt++,Ot++)Vt===ft&&(Vt=0),Ot===ft&&(Ot=0),it[ct]=at(lt[ct],lt[Vt],lt[Ot]);tt.push(it),Nt=Nt.concat(it)}let Ct;if(m===0)Ct=rs.triangulateShape(k,D);else{const nt=[],rt=[];for(let lt=0;lt<m;lt++){const ct=lt/m,ft=p*Math.cos(ct*Math.PI/2),Vt=_*Math.sin(ct*Math.PI/2)+S;for(let Ot=0,X=k.length;Ot<X;Ot++){const Q=Y(k[Ot],$[Ot],Vt);pt(Q.x,Q.y,-ft),ct===0&&nt.push(Q)}for(let Ot=0,X=N;Ot<X;Ot++){const Q=D[Ot];it=tt[Ot];const R=[];for(let At=0,Rt=Q.length;At<Rt;At++){const w=Y(Q[At],it[At],Vt);pt(w.x,w.y,-ft),ct===0&&R.push(w)}ct===0&&rt.push(R)}}Ct=rs.triangulateShape(nt,rt)}const ae=Ct.length,Kt=_+S;for(let nt=0;nt<q;nt++){const rt=h?Y(C[nt],Nt[nt],Kt):C[nt];v?(L.copy(y.normals[0]).multiplyScalar(rt.x),b.copy(y.binormals[0]).multiplyScalar(rt.y),x.copy(A[0]).add(L).add(b),pt(x.x,x.y,x.z)):pt(rt.x,rt.y,0)}for(let nt=1;nt<=u;nt++)for(let rt=0;rt<q;rt++){const lt=h?Y(C[rt],Nt[rt],Kt):C[rt];v?(L.copy(y.normals[nt]).multiplyScalar(lt.x),b.copy(y.binormals[nt]).multiplyScalar(lt.y),x.copy(A[nt]).add(L).add(b),pt(x.x,x.y,x.z)):pt(lt.x,lt.y,d/u*nt)}for(let nt=m-1;nt>=0;nt--){const rt=nt/m,lt=p*Math.cos(rt*Math.PI/2),ct=_*Math.sin(rt*Math.PI/2)+S;for(let ft=0,Vt=k.length;ft<Vt;ft++){const Ot=Y(k[ft],$[ft],ct);pt(Ot.x,Ot.y,d+lt)}for(let ft=0,Vt=D.length;ft<Vt;ft++){const Ot=D[ft];it=tt[ft];for(let X=0,Q=Ot.length;X<Q;X++){const R=Y(Ot[X],it[X],ct);v?pt(R.x,R.y+A[u-1].y,A[u-1].x+lt):pt(R.x,R.y,d+lt)}}}ee(),K();function ee(){const nt=s.length/3;if(h){let rt=0,lt=q*rt;for(let ct=0;ct<ae;ct++){const ft=Ct[ct];Gt(ft[2]+lt,ft[1]+lt,ft[0]+lt)}rt=u+m*2,lt=q*rt;for(let ct=0;ct<ae;ct++){const ft=Ct[ct];Gt(ft[0]+lt,ft[1]+lt,ft[2]+lt)}}else{for(let rt=0;rt<ae;rt++){const lt=Ct[rt];Gt(lt[2],lt[1],lt[0])}for(let rt=0;rt<ae;rt++){const lt=Ct[rt];Gt(lt[0]+q*u,lt[1]+q*u,lt[2]+q*u)}}n.addGroup(nt,s.length/3-nt,0)}function K(){const nt=s.length/3;let rt=0;j(k,rt),rt+=k.length;for(let lt=0,ct=D.length;lt<ct;lt++){const ft=D[lt];j(ft,rt),rt+=ft.length}n.addGroup(nt,s.length/3-nt,1)}function j(nt,rt){let lt=nt.length;for(;--lt>=0;){const ct=lt;let ft=lt-1;ft<0&&(ft=nt.length-1);for(let Vt=0,Ot=u+m*2;Vt<Ot;Vt++){const X=q*Vt,Q=q*(Vt+1),R=rt+ct+X,At=rt+ft+X,Rt=rt+ft+Q,w=rt+ct+Q;Tt(R,At,Rt,w)}}}function pt(nt,rt,lt){l.push(nt),l.push(rt),l.push(lt)}function Gt(nt,rt,lt){Wt(nt),Wt(rt),Wt(lt);const ct=s.length/3,ft=E.generateTopUV(n,s,ct-3,ct-2,ct-1);ie(ft[0]),ie(ft[1]),ie(ft[2])}function Tt(nt,rt,lt,ct){Wt(nt),Wt(rt),Wt(ct),Wt(rt),Wt(lt),Wt(ct);const ft=s.length/3,Vt=E.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);ie(Vt[0]),ie(Vt[1]),ie(Vt[3]),ie(Vt[1]),ie(Vt[2]),ie(Vt[3])}function Wt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function ie(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ef(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new po[s.type]().fromJSON(s)),new $o(n,t.options)}}const tf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new ut(r,a),new ut(o,l),new ut(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],p=t[s*3+1],_=t[s*3+2],S=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ut(a,1-l),new ut(c,1-d),new ut(h,1-_),new ut(S,1-f)]:[new ut(o,1-l),new ut(u,1-d),new ut(p,1-_),new ut(m,1-f)]}};function ef(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class qo extends Ho{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new qo(t.radius,t.detail)}}class cr extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,p=[],_=[],S=[],m=[];for(let f=0;f<u;f++){const E=f*h-a;for(let A=0;A<c;A++){const v=A*d-r;_.push(v,-E,0),S.push(0,0,1),m.push(A/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const A=E+c*f,v=E+c*(f+1),y=E+1+c*(f+1),b=E+1+c*f;p.push(A,v,b),p.push(v,y,b)}this.setIndex(p),this.setAttribute("position",new ce(_,3)),this.setAttribute("normal",new ce(S,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Yo extends Ee{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=t;const h=(e-t)/s,p=new P,_=new ut;for(let S=0;S<=s;S++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,u.push(_.x,_.y)}d+=h}for(let S=0;S<s;S++){const m=S*(n+1);for(let f=0;f<n;f++){const E=f+m,A=E,v=E+n+1,y=E+n+2,b=E+1;o.push(A,v,b),o.push(v,y,b)}}this.setIndex(o),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Cn extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new P,h=new P,p=[],_=[],S=[],m=[];for(let f=0;f<=n;f++){const E=[],A=f/n,v=a+A*o,y=t*Math.cos(v),b=Math.sqrt(t*t-y*y);let L=0;f===0&&a===0?L=.5/e:f===n&&l===Math.PI&&(L=-.5/e);for(let x=0;x<=e;x++){const T=x/e,C=s+T*r;d.x=-b*Math.cos(C),d.y=y,d.z=b*Math.sin(C),_.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),m.push(T+L,1-A),E.push(c++)}u.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){const A=u[f][E+1],v=u[f][E],y=u[f+1][E],b=u[f+1][E+1];(f!==0||a>0)&&p.push(A,v,b),(f!==n-1||l<Math.PI)&&p.push(v,y,b)}this.setIndex(p),this.setAttribute("position",new ce(_,3)),this.setAttribute("normal",new ce(S,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ei extends Ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new P,p=new P,_=new P;for(let S=0;S<=n;S++){const m=a+S/n*o;for(let f=0;f<=s;f++){const E=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(E),p.y=(t+e*Math.cos(m))*Math.sin(E),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),h.x=t*Math.cos(E),h.y=t*Math.sin(E),_.subVectors(p,h).normalize(),u.push(_.x,_.y,_.z),d.push(f/s),d.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){const f=(s+1)*S+m-1,E=(s+1)*(S-1)+m-1,A=(s+1)*(S-1)+m,v=(s+1)*S+m;l.push(f,E,v),l.push(E,A,v)}this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function ds(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(nc(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(nc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=ds(i[e]);for(const s in n)t[s]=n[s]}return t}function nc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function nf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const sf={clone:ds,merge:Ye};var rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rf,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=nf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class of extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zr extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qr extends di{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lf extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cf extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Eu extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class uf extends Eu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Qa=new ue,ic=new P,sc=new P;class hf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zo,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(ic),sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Qa,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===2001||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Vr=new P,Hr=new Nn,Tn=new P;class Tu extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vr,Hr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vr,Hr,Tn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Vr,Hr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vr,Hr,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new P,rc=new ut,ac=new ut;class on extends Tu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,rc,ac),e.subVectors(ac,rc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ko extends Tu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class df extends hf{constructor(){super(new Ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ff extends Eu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new df}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ji=-90,Zi=1;class pf extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(Ji,Zi,t,e);s.layers=this.layers,this.add(s);const r=new on(Ji,Zi,t,e);r.layers=this.layers,this.add(r);const a=new on(Ji,Zi,t,e);a.layers=this.layers,this.add(a);const o=new on(Ji,Zi,t,e);o.layers=this.layers,this.add(o);const l=new on(Ji,Zi,t,e);l.layers=this.layers,this.add(l);const c=new on(Ji,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class mf extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const oc=new ue;class gf{constructor(t,e,n=0,s=1/0){this.ray=new ko(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return oc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(oc),this}intersectObject(t,e=!0,n=[]){return _o(t,this,n,e),n.sort(lc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)_o(t[s],this,n,e);return n.sort(lc),n}}function lc(i,t){return i.distance-t.distance}function _o(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)_o(r[a],t,e,!0)}}class wu{static{wu.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}}function cc(i,t,e,n){const s=_f(n);switch(e){case 1021:return i*t;case 1028:return i*t/s.components*s.byteLength;case 1029:return i*t/s.components*s.byteLength;case 1030:return i*t*2/s.components*s.byteLength;case 1031:return i*t*2/s.components*s.byteLength;case 1022:return i*t*3/s.components*s.byteLength;case 1023:return i*t*4/s.components*s.byteLength;case 1033:return i*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _f(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Au(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xf(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){const _=d[h],S=d[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,d[h]=S)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){const S=d[p];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,If=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Df=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ap=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,up=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_p=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,am=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Am=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:vf,alphahash_pars_fragment:Mf,alphamap_fragment:Sf,alphamap_pars_fragment:yf,alphatest_fragment:bf,alphatest_pars_fragment:Ef,aomap_fragment:Tf,aomap_pars_fragment:wf,batching_pars_vertex:Af,batching_vertex:Cf,begin_vertex:Rf,beginnormal_vertex:Pf,bsdfs:Lf,iridescence_fragment:If,bumpmap_pars_fragment:Df,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:Of,color_fragment:Bf,color_pars_fragment:kf,color_pars_vertex:zf,color_vertex:Gf,common:Vf,cube_uv_reflection_fragment:Hf,defaultnormal_vertex:Wf,displacementmap_pars_vertex:Xf,displacementmap_vertex:$f,emissivemap_fragment:qf,emissivemap_pars_fragment:Yf,colorspace_fragment:Kf,colorspace_pars_fragment:Jf,envmap_fragment:Zf,envmap_common_pars_fragment:Qf,envmap_pars_fragment:jf,envmap_pars_vertex:tp,envmap_physical_pars_fragment:hp,envmap_vertex:ep,fog_vertex:np,fog_pars_vertex:ip,fog_fragment:sp,fog_pars_fragment:rp,gradientmap_pars_fragment:ap,lightmap_pars_fragment:op,lights_lambert_fragment:lp,lights_lambert_pars_fragment:cp,lights_pars_begin:up,lights_toon_fragment:dp,lights_toon_pars_fragment:fp,lights_phong_fragment:pp,lights_phong_pars_fragment:mp,lights_physical_fragment:gp,lights_physical_pars_fragment:_p,lights_fragment_begin:xp,lights_fragment_maps:vp,lights_fragment_end:Mp,lightprobes_pars_fragment:Sp,logdepthbuf_fragment:yp,logdepthbuf_pars_fragment:bp,logdepthbuf_pars_vertex:Ep,logdepthbuf_vertex:Tp,map_fragment:wp,map_pars_fragment:Ap,map_particle_fragment:Cp,map_particle_pars_fragment:Rp,metalnessmap_fragment:Pp,metalnessmap_pars_fragment:Lp,morphinstance_vertex:Ip,morphcolor_vertex:Dp,morphnormal_vertex:Np,morphtarget_pars_vertex:Up,morphtarget_vertex:Fp,normal_fragment_begin:Op,normal_fragment_maps:Bp,normal_pars_fragment:kp,normal_pars_vertex:zp,normal_vertex:Gp,normalmap_pars_fragment:Vp,clearcoat_normal_fragment_begin:Hp,clearcoat_normal_fragment_maps:Wp,clearcoat_pars_fragment:Xp,iridescence_pars_fragment:$p,opaque_fragment:qp,packing:Yp,premultiplied_alpha_fragment:Kp,project_vertex:Jp,dithering_fragment:Zp,dithering_pars_fragment:Qp,roughnessmap_fragment:jp,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:em,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:sm,skinbase_vertex:rm,skinning_pars_vertex:am,skinning_vertex:om,skinnormal_vertex:lm,specularmap_fragment:cm,specularmap_pars_fragment:um,tonemapping_fragment:hm,tonemapping_pars_fragment:dm,transmission_fragment:fm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:_m,worldpos_vertex:xm,background_vert:vm,background_frag:Mm,backgroundCube_vert:Sm,backgroundCube_frag:ym,cube_vert:bm,cube_frag:Em,depth_vert:Tm,depth_frag:wm,distance_vert:Am,distance_frag:Cm,equirect_vert:Rm,equirect_frag:Pm,linedashed_vert:Lm,linedashed_frag:Im,meshbasic_vert:Dm,meshbasic_frag:Nm,meshlambert_vert:Um,meshlambert_frag:Fm,meshmatcap_vert:Om,meshmatcap_frag:Bm,meshnormal_vert:km,meshnormal_frag:zm,meshphong_vert:Gm,meshphong_frag:Vm,meshphysical_vert:Hm,meshphysical_frag:Wm,meshtoon_vert:Xm,meshtoon_frag:$m,points_vert:qm,points_frag:Ym,shadow_vert:Km,shadow_frag:Jm,sprite_vert:Zm,sprite_frag:Qm},yt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Rn={basic:{uniforms:Ye([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ye([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ye([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ye([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ye([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ye([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ye([yt.points,yt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ye([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ye([yt.common,yt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ye([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ye([yt.sprite,yt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:Ye([yt.common,yt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:Ye([yt.lights,yt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Rn.physical={uniforms:Ye([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Wr={r:0,b:0,g:0},jm=new ue,Cu=new Yt;Cu.set(-1,0,0,0,1,0,0,0,1);function tg(i,t,e,n,s,r){const a=new Zt(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function p(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){const v=E.backgroundBlurriness>0;A=t.get(A,v)}return A}function _(E){let A=!1;const v=p(E);v===null?m(a,o):v&&v.isColor&&(m(v,1),A=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(E,A){const v=p(A);v&&(v.isCubeTexture||v.mapping===306)?(c===void 0&&(c=new we(new ms(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:ds(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jm.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cu),c.material.toneMapped=re.getTransfer(v.colorSpace)!==fe,(u!==v||d!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new we(new cr(2,2),new Un({name:"BackgroundMaterial",uniforms:ds(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=re.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,A){E.getRGB(Wr,bu(i)),e.buffers.color.setClear(Wr.r,Wr.g,Wr.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:_,addToRenderList:S,dispose:f}}function eg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(D,O,z,N,k){let Y=!1;const q=d(D,N,z,O);r!==q&&(r=q,c(r.object)),Y=p(D,N,z,k),Y&&_(D,N,z,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(D,O,z,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function d(D,O,z,N){const k=N.wireframe===!0;let Y=n[O.id];Y===void 0&&(Y={},n[O.id]=Y);const q=D.isInstancedMesh===!0?D.id:0;let at=Y[q];at===void 0&&(at={},Y[q]=at);let $=at[z.id];$===void 0&&($={},at[z.id]=$);let tt=$[k];return tt===void 0&&(tt=h(l()),$[k]=tt),tt}function h(D){const O=[],z=[],N=[];for(let k=0;k<e;k++)O[k]=0,z[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:N,object:D,attributes:{},index:null}}function p(D,O,z,N){const k=r.attributes,Y=O.attributes;let q=0;const at=z.getAttributes();for(const $ in at)if(at[$].location>=0){const it=k[$];let Nt=Y[$];if(Nt===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(Nt=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(Nt=D.instanceColor)),it===void 0||it.attribute!==Nt||Nt&&it.data!==Nt.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function _(D,O,z,N){const k={},Y=O.attributes;let q=0;const at=z.getAttributes();for(const $ in at)if(at[$].location>=0){let it=Y[$];it===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(it=D.instanceColor));const Nt={};Nt.attribute=it,it&&it.data&&(Nt.data=it.data),k[$]=Nt,q++}r.attributes=k,r.attributesNum=q,r.index=N}function S(){const D=r.newAttributes;for(let O=0,z=D.length;O<z;O++)D[O]=0}function m(D){f(D,0)}function f(D,O){const z=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;z[D]=1,N[D]===0&&(i.enableVertexAttribArray(D),N[D]=1),k[D]!==O&&(i.vertexAttribDivisor(D,O),k[D]=O)}function E(){const D=r.newAttributes,O=r.enabledAttributes;for(let z=0,N=O.length;z<N;z++)O[z]!==D[z]&&(i.disableVertexAttribArray(z),O[z]=0)}function A(D,O,z,N,k,Y,q){q===!0?i.vertexAttribIPointer(D,O,z,k,Y):i.vertexAttribPointer(D,O,z,N,k,Y)}function v(D,O,z,N){S();const k=N.attributes,Y=z.getAttributes(),q=O.defaultAttributeValues;for(const at in Y){const $=Y[at];if($.location>=0){let tt=k[at];if(tt===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),tt!==void 0){const it=tt.normalized,Nt=tt.itemSize,Ct=t.get(tt);if(Ct===void 0)continue;const ae=Ct.buffer,Kt=Ct.type,ee=Ct.bytesPerElement,K=Kt===i.INT||Kt===i.UNSIGNED_INT||tt.gpuType===1013;if(tt.isInterleavedBufferAttribute){const j=tt.data,pt=j.stride,Gt=tt.offset;if(j.isInstancedInterleavedBuffer){for(let Tt=0;Tt<$.locationSize;Tt++)f($.location+Tt,j.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Tt=0;Tt<$.locationSize;Tt++)m($.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Tt=0;Tt<$.locationSize;Tt++)A($.location+Tt,Nt/$.locationSize,Kt,it,pt*ee,(Gt+Nt/$.locationSize*Tt)*ee,K)}else{if(tt.isInstancedBufferAttribute){for(let j=0;j<$.locationSize;j++)f($.location+j,tt.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let j=0;j<$.locationSize;j++)m($.location+j);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let j=0;j<$.locationSize;j++)A($.location+j,Nt/$.locationSize,Kt,it,Nt*ee,Nt/$.locationSize*j*ee,K)}}else if(q!==void 0){const it=q[at];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv($.location,it);break;case 3:i.vertexAttrib3fv($.location,it);break;case 4:i.vertexAttrib4fv($.location,it);break;default:i.vertexAttrib1fv($.location,it)}}}}E()}function y(){T();for(const D in n){const O=n[D];for(const z in O){const N=O[z];for(const k in N){const Y=N[k];for(const q in Y)u(Y[q].object),delete Y[q];delete N[k]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;const O=n[D.id];for(const z in O){const N=O[z];for(const k in N){const Y=N[k];for(const q in Y)u(Y[q].object),delete Y[q];delete N[k]}}delete n[D.id]}function L(D){for(const O in n){const z=n[O];for(const N in z){const k=z[N];if(k[D.id]===void 0)continue;const Y=k[D.id];for(const q in Y)u(Y[q].object),delete Y[q];delete k[D.id]}}}function x(D){for(const O in n){const z=n[O],N=D.isInstancedMesh===!0?D.id:0,k=z[N];if(k!==void 0){for(const Y in k){const q=k[Y];for(const at in q)u(q[at].object),delete q[at];delete k[Y]}delete z[N],Object.keys(z).length===0&&delete n[O]}}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:L,initAttributes:S,enableAttribute:m,disableUnusedAttributes:E}}function ng(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ig(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==1023&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const x=L===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==1009&&L!==1015&&!x&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&($t("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:v,maxSamples:y,samples:b}}function sg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ai,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||s;return s=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const E=r?0:n,A=E*4;let v=f.clippingState||null;l.value=v,v=u(_,h,A,p);for(let y=0;y!==A;++y)v[y]=e[y];f.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,p,_){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const f=p+S*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,v=p;A!==S;++A,v+=4)a.copy(d[A]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const as=4,rg=6,ag=20,og=256,Ps=new Ko,uc=new Zt;let ja=null,to=0,eo=0,no=!1;const lg=new P,xi=new P;class hc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=lg}=r;ja=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ja,to,eo),this._renderer.xr.enabled=no,t.scissorTest=!1,Qi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ja=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:aa,depthBuffer:!1},s=dc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cg(r)),this._blurMaterial=hg(r,t,e),this._ggxMaterial=ug(r,t,e)}return s}_compileMaterial(t){const e=new we(new Ee,t);this._renderer.compile(e,Ps)}_sceneToCubeUV(t,e,n,s,r){const l=new on(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(uc),d.toneMapping=0,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new ms,new bi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let f=!1;const E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,f=!0):(m.color.copy(uc),f=!0);for(let A=0;A<6;A++){const v=A%3;v===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):v===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const y=this._cubeSize;Qi(s,v*y,A>2?y:0,y,y),d.setRenderTarget(s),f&&d.render(S,l),d.render(t,l)}d.toneMapping=p,d.autoClear=h,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===301||t.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Qi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ps)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,p=d*h,{_lodMax:_}=this,S=this._sizeLods[n],m=3*S*(n>_-as?n-_+as:0),f=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-e,Qi(r,m,f,3*S,2*S),s.setRenderTarget(r),s.render(o,Ps),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Qi(t,m,f,3*S,2*S),s.setRenderTarget(t),s.render(o,Ps)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],d=3*u*(s>this._lodMax-as?s-this._lodMax+as:0),h=4*(this._cubeSize-u);Qi(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Ps)}}function cg(i){const t=[],e=[];let n=i;const s=i-as+1+rg;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,p=3,_=new Float32Array(p*h*d),S=new Float32Array(p*h*d);for(let f=0;f<d;f++){const E=f%3*2/3-1,A=f>2?0:-1,v=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];_.set(v,p*h*f);for(let y=0;y<h;y++){const b=u[y*2]*2-1,L=u[y*2+1]*2-1;f===0?xi.set(1,L,b):f===1?xi.set(-b,1,-L):f===2?xi.set(-b,L,1):f===3?xi.set(-1,L,-b):f===4?xi.set(-b,-1,L):xi.set(b,L,-1),xi.toArray(S,(f*h+y)*p)}}const m=new Ee;m.setAttribute("position",new tn(_,p)),m.setAttribute("outputDirection",new tn(S,p)),e.push(new we(m,null)),n>as&&n--}return{lodMeshes:e,sizeLods:t}}function dc(i,t,e){const n=new xn(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ug(i,t,e){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:og,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ma(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function hg(i,t,e){return new Un({name:"SphericalGaussianBlur",defines:{SAMPLES:ag,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ma(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function fc(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function pc(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ma(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ru extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new du(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ms(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const a=new we(s,r),o=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new pf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function dg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===303||p===304)if(t.has(h)){const _=t.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const S=new Ru(_.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,_=p===303||p===304,S=p===301||p===302;if(_||S){let m=e.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new hc(i)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const E=h.image;return _&&E&&E.height>0||S&&E&&l(E)?(n===null&&(n=new hc(i)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===303?h.mapping=301:p===304&&(h.mapping=302),h}function l(h){let p=0;const _=6;for(let S=0;S<_;S++)h[S]!==void 0&&p++;return p===_}function c(h){const p=h.target;p.removeEventListener("dispose",c);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function fg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ls("WebGLRenderer: "+n+" extension not supported."),s}}}function pg(i,t,e,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)t.update(h[p],i.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,_=d.attributes.position;let S=0;if(_===void 0)return;if(p!==null){const E=p.array;S=p.version;for(let A=0,v=E.length;A<v;A+=3){const y=E[A+0],b=E[A+1],L=E[A+2];h.push(y,b,b,L,L,y)}}else{const E=_.array;S=_.version;for(let A=0,v=E.length/3-1;A<v;A+=3){const y=A+0,b=A+1,L=A+2;h.push(y,b,b,L,L,y)}}const m=new(_.count>=65535?lu:ou)(h,1);m.version=S;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function mg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,d*a,p),e.update(h,n,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,p);let S=0;for(let m=0;m<p;m++)S+=h[m];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function gg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:se("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _g(i,t,e){const n=new WeakMap,s=new Se;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let T=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let A=0;p===!0&&(A=1),_===!0&&(A=2),S===!0&&(A=3);let v=o.attributes.position.count*A,y=1;v>t.maxTextureSize&&(y=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const b=new Float32Array(v*y*4*d),L=new ru(b,v,y,d);L.type=1015,L.needsUpdate=!0;const x=A*4;for(let C=0;C<d;C++){const D=m[C],O=f[C],z=E[C],N=v*y*4*C;for(let k=0;k<D.count;k++){const Y=k*x;p===!0&&(s.fromBufferAttribute(D,k),b[N+Y+0]=s.x,b[N+Y+1]=s.y,b[N+Y+2]=s.z,b[N+Y+3]=0),_===!0&&(s.fromBufferAttribute(O,k),b[N+Y+4]=s.x,b[N+Y+5]=s.y,b[N+Y+6]=s.z,b[N+Y+7]=0),S===!0&&(s.fromBufferAttribute(z,k),b[N+Y+8]=s.x,b[N+Y+9]=s.y,b[N+Y+10]=s.z,b[N+Y+11]=z.itemSize===4?s.w:1)}}h={count:d,texture:L,size:new ut(v,y)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function xg(i,t,e,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const vg={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Mg(i,t,e,n,s,r){const a=new xn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ee;c.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ce([0,2,0,0,2,0],2));const u=new of({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new we(c,u),h=new Ko(-1,1,1,-1,0,1);let p=null,_=null,S=!1,m,f=null,E=[],A=!1;this.setSize=function(v,y){a.setSize(v,y),o!==null&&o.setSize(v,y),l!==null&&l.setSize(v,y);for(let b=0;b<E.length;b++){const L=E[b];L.setSize&&L.setSize(v,y)}},this.setEffects=function(v){E=v,A=E.length>0&&E[0].isRenderPass===!0;const y=a.width,b=a.height;E.length>0&&o===null&&(o=new xn(y,b,{type:1016,depthBuffer:!1,stencilBuffer:!1}),l=new xn(y,b,{type:1016,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<E.length;L++){const x=E[L];x.setSize&&x.setSize(y,b)}},this.begin=function(v,y){if(S||v.toneMapping===0&&E.length===0)return!1;if(f=y,y!==null){const b=y.width,L=y.height;(a.width!==b||a.height!==L)&&this.setSize(b,L)}return A===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=0,!0},this.hasRenderPass=function(){return A},this.end=function(v,y){v.toneMapping=m,S=!0;let b=a,L=o;for(let x=0;x<E.length;x++){const T=E[x];T.enabled!==!1&&(T.render(v,L,b,y),T.needsSwap!==!1&&(b=L,L=L===o?l:o))}if(p!==v.outputColorSpace||_!==v.toneMapping){p=v.outputColorSpace,_=v.toneMapping,u.defines={},re.getTransfer(p)===fe&&(u.defines.SRGB_TRANSFER="");const x=vg[_];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(f),v.render(d,h),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Pu=new Ve,xo=new Js(1,1),Lu=new ru,Iu=new id,Du=new du,mc=[],gc=[],_c=new Float32Array(16),xc=new Float32Array(9),vc=new Float32Array(4);function gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=mc[s];if(r===void 0&&(r=new Float32Array(s),mc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ga(i,t){let e=gc[t];e===void 0&&(e=new Int32Array(t),gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function Tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;vc.set(n),i.uniformMatrix2fv(this.addr,!1,vc),Ie(e,n)}}function wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;xc.set(n),i.uniformMatrix3fv(this.addr,!1,xc),Ie(e,n)}}function Ag(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;_c.set(n),i.uniformMatrix4fv(this.addr,!1,_c),Ie(e,n)}}function Cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function Ig(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function Ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function Ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function Fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xo.compareFunction=e.isReversedDepthBuffer()?518:515,r=xo):r=Pu,e.setTexture2D(t||r,s)}function Og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Iu,s)}function Bg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Du,s)}function kg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Lu,s)}function zg(i){switch(i){case 5126:return Sg;case 35664:return yg;case 35665:return bg;case 35666:return Eg;case 35674:return Tg;case 35675:return wg;case 35676:return Ag;case 5124:case 35670:return Cg;case 35667:case 35671:return Rg;case 35668:case 35672:return Pg;case 35669:case 35673:return Lg;case 5125:return Ig;case 36294:return Dg;case 36295:return Ng;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return kg}}function Gg(i,t){i.uniform1fv(this.addr,t)}function Vg(i,t){const e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function Hg(i,t){const e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function Wg(i,t){const e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function Xg(i,t){const e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $g(i,t){const e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qg(i,t){const e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yg(i,t){i.uniform1iv(this.addr,t)}function Kg(i,t){i.uniform2iv(this.addr,t)}function Jg(i,t){i.uniform3iv(this.addr,t)}function Zg(i,t){i.uniform4iv(this.addr,t)}function Qg(i,t){i.uniform1uiv(this.addr,t)}function jg(i,t){i.uniform2uiv(this.addr,t)}function t0(i,t){i.uniform3uiv(this.addr,t)}function e0(i,t){i.uniform4uiv(this.addr,t)}function n0(i,t,e){const n=this.cache,s=t.length,r=ga(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=xo:a=Pu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function i0(i,t,e){const n=this.cache,s=t.length,r=ga(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Iu,r[a])}function s0(i,t,e){const n=this.cache,s=t.length,r=ga(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Du,r[a])}function r0(i,t,e){const n=this.cache,s=t.length,r=ga(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Lu,r[a])}function a0(i){switch(i){case 5126:return Gg;case 35664:return Vg;case 35665:return Hg;case 35666:return Wg;case 35674:return Xg;case 35675:return $g;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return Kg;case 35668:case 35672:return Jg;case 35669:case 35673:return Zg;case 5125:return Qg;case 36294:return jg;case 36295:return t0;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}class o0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}}class l0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a0(e.type)}}class c0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const io=/(\w+)(\])?(\[|\.)?/g;function Mc(i,t){i.seq.push(t),i.map[t.id]=t}function u0(i,t,e){const n=i.name,s=n.length;for(io.lastIndex=0;;){const r=io.exec(n),a=io.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Mc(e,c===void 0?new o0(o,i,t):new l0(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new c0(o),Mc(e,d)),e=d}}}class jr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);u0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Sc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const h0=37297;let d0=0;function f0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const yc=new Yt;function p0(i){re._getMatrix(yc,re.workingColorSpace,i);const t=`mat3( ${yc.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case oa:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+f0(i.getShaderSource(t),o)}else return r}function m0(i,t){const e=p0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const g0={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function _0(i,t){const e=g0[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xr=new P;function x0(){re.getLuminanceCoefficients(Xr);const i=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function M0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ks(i){return i!==""}function Ec(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(i){return i.replace(y0,E0)}const b0=new Map;function E0(i,t){let e=jt[t];if(e===void 0){const n=b0.get(t);if(n!==void 0)e=jt[n],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vo(e)}const T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(i){return i.replace(T0,w0)}function w0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ac(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const A0={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function C0(i){return A0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R0={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function P0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":R0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const L0={302:"ENVMAP_MODE_REFRACTION"};function I0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":L0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const D0={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function N0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":D0[i.combine]||"ENVMAP_BLENDING_NONE"}function U0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function F0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=C0(e),c=P0(e),u=I0(e),d=N0(e),h=U0(e),p=v0(e),_=M0(r),S=s.createProgram();let m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ks).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ks).join(`
`),f.length>0&&(f+=`
`)):(m=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),f=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?jt.tonemapping_pars_fragment:"",e.toneMapping!==0?_0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,m0("linearToOutputTexel",e.outputColorSpace),x0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ks).join(`
`)),a=vo(a),a=Ec(a,e),a=Tc(a,e),o=vo(o),o=Ec(o,e),o=Tc(o,e),a=wc(a),o=wc(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const A=E+m+a,v=E+f+o,y=Sc(s,s.VERTEX_SHADER,A),b=Sc(s,s.FRAGMENT_SHADER,v);s.attachShader(S,y),s.attachShader(S,b),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function L(D){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(S)||"",z=s.getShaderInfoLog(y)||"",N=s.getShaderInfoLog(b)||"",k=O.trim(),Y=z.trim(),q=N.trim();let at=!0,$=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,y,b);else{const tt=bc(s,y,"vertex"),it=bc(s,b,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+tt+`
`+it)}else k!==""?$t("WebGLProgram: Program Info Log:",k):(Y===""||q==="")&&($=!1);$&&(D.diagnostics={runnable:at,programLog:k,vertexShader:{log:Y,prefix:m},fragmentShader:{log:q,prefix:f}})}s.deleteShader(y),s.deleteShader(b),x=new jr(s,S),T=S0(s,S)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(S,h0)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d0++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=y,this.fragmentShader=b,this}let O0=0;class B0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new k0(t),e.set(t,n)),n}}class k0{constructor(t){this.id=O0++,this.code=t,this.usedTimes=0}}function z0(i){return i===1030||i===37490||i===36285}function G0(i,t,e,n,s,r){const a=new Bo,o=new B0,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,T,C,D,O,z){const N=D.fog,k=O.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,at=t.get(x.envMap||Y,q),$=at&&at.mapping===306?at.image.height:null,tt=p[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&$t("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const it=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Nt=it!==void 0?it.length:0;let Ct=0;k.morphAttributes.position!==void 0&&(Ct=1),k.morphAttributes.normal!==void 0&&(Ct=2),k.morphAttributes.color!==void 0&&(Ct=3);let ae,Kt,ee,K;if(tt){const _e=Rn[tt];ae=_e.vertexShader,Kt=_e.fragmentShader}else{ae=x.vertexShader,Kt=x.fragmentShader;const _e=o.getVertexShaderStage(x),he=o.getFragmentShaderStage(x);o.update(x,_e,he),ee=_e.id,K=he.id}const j=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Gt=O.isInstancedMesh===!0,Tt=O.isBatchedMesh===!0,Wt=!!x.map,ie=!!x.matcap,nt=!!at,rt=!!x.aoMap,lt=!!x.lightMap,ct=!!x.bumpMap&&x.wireframe===!1,ft=!!x.normalMap,Vt=!!x.displacementMap,Ot=!!x.emissiveMap,X=!!x.metalnessMap,Q=!!x.roughnessMap,R=x.anisotropy>0,At=x.clearcoat>0,Rt=x.dispersion>0,w=x.retroreflectivity>0,g=x.iridescence>0,B=x.sheen>0,H=x.transmission>0,J=R&&!!x.anisotropyMap,ht=At&&!!x.clearcoatMap,mt=At&&!!x.clearcoatNormalMap,Z=At&&!!x.clearcoatRoughnessMap,st=g&&!!x.iridescenceMap,gt=g&&!!x.iridescenceThicknessMap,kt=B&&!!x.sheenColorMap,St=B&&!!x.sheenRoughnessMap,_t=!!x.specularMap,zt=!!x.specularColorMap,Xt=!!x.specularIntensityMap,Jt=H&&!!x.transmissionMap,F=H&&!!x.thicknessMap,xt=!!x.gradientMap,et=!!x.alphaMap,vt=x.alphaTest>0,wt=!!x.alphaHash,ot=!!x.extensions;let Ht=0;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ht=i.toneMapping);const Ut={shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:ae,fragmentShader:Kt,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Tt,batchingColor:Tt&&O._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&O.instanceColor!==null,instancingMorph:Gt&&O.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Wt,matcap:ie,envMap:nt,envMapMode:nt&&at.mapping,envMapCubeUVHeight:$,aoMap:rt,lightMap:lt,bumpMap:ct,normalMap:ft,displacementMap:Vt,emissiveMap:Ot,normalMapObjectSpace:ft&&x.normalMapType===1,normalMapTangentSpace:ft&&x.normalMapType===0,packedNormalMap:ft&&x.normalMapType===0&&z0(x.normalMap.format),metalnessMap:X,roughnessMap:Q,anisotropy:R,anisotropyMap:J,clearcoat:At,clearcoatMap:ht,clearcoatNormalMap:mt,clearcoatRoughnessMap:Z,dispersion:Rt,retroreflection:w,iridescence:g,iridescenceMap:st,iridescenceThicknessMap:gt,sheen:B,sheenColorMap:kt,sheenRoughnessMap:St,specularMap:_t,specularColorMap:zt,specularIntensityMap:Xt,transmission:H,transmissionMap:Jt,thicknessMap:F,gradientMap:xt,opaque:x.transparent===!1&&x.blending===1&&x.alphaToCoverage===!1,alphaMap:et,alphaTest:vt,alphaHash:wt,combine:x.combine,mapUv:Wt&&_(x.map.channel),aoMapUv:rt&&_(x.aoMap.channel),lightMapUv:lt&&_(x.lightMap.channel),bumpMapUv:ct&&_(x.bumpMap.channel),normalMapUv:ft&&_(x.normalMap.channel),displacementMapUv:Vt&&_(x.displacementMap.channel),emissiveMapUv:Ot&&_(x.emissiveMap.channel),metalnessMapUv:X&&_(x.metalnessMap.channel),roughnessMapUv:Q&&_(x.roughnessMap.channel),anisotropyMapUv:J&&_(x.anisotropyMap.channel),clearcoatMapUv:ht&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:mt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:St&&_(x.sheenRoughnessMap.channel),specularMapUv:_t&&_(x.specularMap.channel),specularColorMapUv:zt&&_(x.specularColorMap.channel),specularIntensityMapUv:Xt&&_(x.specularIntensityMap.channel),transmissionMapUv:Jt&&_(x.transmissionMap.channel),thicknessMapUv:F&&_(x.thicknessMap.channel),alphaMapUv:et&&_(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ft||R),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(Wt||et),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&ft===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:Ct,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Wt&&x.map.isVideoTexture===!0&&re.getTransfer(x.map.colorSpace)===fe,decodeVideoTextureEmissive:Ot&&x.emissiveMap.isVideoTexture===!0&&re.getTransfer(x.emissiveMap.colorSpace)===fe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===1,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ot&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&x.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(f(T,x),E(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function f(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){const T=p[x.type];let C;if(T){const D=Rn[T];C=sf.clone(D.uniforms)}else C=x.uniforms;return C}function v(x,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new F0(i,T,x,s),c.push(C),u.set(T,C)),C}function y(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function L(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:A,acquireProgram:v,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:L}}function V0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function H0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Cc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,S,m,f){let E=i[t];return E===void 0?(E={id:h.id,object:h,geometry:p,material:_,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:f},i[t]=E):(E.id=h.id,E.object=h,E.geometry=p,E.material=_,E.materialVariant=a(h),E.groupOrder=S,E.renderOrder=h.renderOrder,E.z=m,E.group=f),t++,E}function l(h,p,_,S,m,f,E){E.reversedDepth===!0&&(m=-m);const A=o(h,p,_,S,m,f);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):e.push(A)}function c(h,p,_,S,m,f){const E=o(h,p,_,S,m,f);_.transmission>0?n.unshift(E):_.transparent===!0?s.unshift(E):e.unshift(E)}function u(h,p){e.length>1&&e.sort(h||H0),n.length>1&&n.sort(p||Cc),s.length>1&&s.sort(p||Cc)}function d(){for(let h=t,p=i.length;h<p;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function W0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Rc,i.set(n,[a])):s>=r.length?(a=new Rc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function X0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Zt};break;case"SpotLight":e={position:new P,direction:new P,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function $0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let q0=0;function Y0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function K0(i){const t=new X0,e=$0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new ue,a=new ue;function o(c){let u=0,d=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let p=0,_=0,S=0,m=0,f=0,E=0,A=0,v=0,y=0,b=0,L=0,x=0,T=0,C=0;c.sort(Y0);for(let O=0,z=c.length;O<z;O++){const N=c[O],k=N.color,Y=N.intensity,q=N.distance;let at=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===1030?at=N.shadow.map.texture:at=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=k.r*Y,d+=k.g*Y,h+=k.b*Y;else if(N.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(N.sh.coefficients[$],Y);C++}else if(N.isSunLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const tt=N.shadow,it=e.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[_]=it,n.sunShadowMap[_]=at;const Nt=tt.getViewportCount();for(let Ct=0;Ct<Nt;Ct++)n.sunShadowMatrix[S+Ct]=tt.getMatrix(Ct),n.sunShadowCascade[S+Ct]=tt._cascadeData[Ct];S+=Nt,_++}n.sun[p]=$,p++}else if(N.isDirectionalLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const tt=N.shadow,it=e.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,n.directionalShadow[m]=it,n.directionalShadowMap[m]=at,n.directionalShadowMatrix[m]=N.shadow.matrix,y++}n.directional[m]=$,m++}else if(N.isSpotLight){const $=t.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(k).multiplyScalar(Y),$.distance=q,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,n.spot[E]=$;const tt=N.shadow;if(N.map&&(n.spotLightMap[x]=N.map,x++,tt.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[E]=tt.matrix,N.castShadow){const it=e.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,n.spotShadow[E]=it,n.spotShadowMap[E]=at,L++}E++}else if(N.isRectAreaLight){const $=t.get(N);$.color.copy(k).multiplyScalar(Y),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),n.rectArea[A]=$,A++}else if(N.isPointLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),$.distance=N.distance,$.decay=N.decay,N.castShadow){const tt=N.shadow,it=e.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,it.shadowCameraNear=tt.camera.near,it.shadowCameraFar=tt.camera.far,n.pointShadow[f]=it,n.pointShadowMap[f]=at,n.pointShadowMatrix[f]=N.shadow.matrix,b++}n.point[f]=$,f++}else if(N.isHemisphereLight){const $=t.get(N);$.skyColor.copy(N.color).multiplyScalar(Y),$.groundColor.copy(N.groundColor).multiplyScalar(Y),n.hemi[v]=$,v++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==f||D.spotLength!==E||D.rectAreaLength!==A||D.hemiLength!==v||D.numSunShadows!==_||D.numDirectionalShadows!==y||D.numPointShadows!==b||D.numSpotShadows!==L||D.numSpotMaps!==x||D.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=E,n.rectArea.length=A,n.point.length=f,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,D.sunLength=p,D.directionalLength=m,D.pointLength=f,D.spotLength=E,D.rectAreaLength=A,D.hemiLength=v,D.numSunShadows=_,D.numDirectionalShadows=y,D.numPointShadows=b,D.numSpotShadows=L,D.numSpotMaps=x,D.numLightProbes=C,n.version=q0++)}function l(c,u){let d=0,h=0,p=0,_=0,S=0,m=0;const f=u.matrixWorldInverse;for(let E=0,A=c.length;E<A;E++){const v=c[E];if(v.isSunLight){const y=n.sun[d];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(f),d++}else if(v.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),h++}else if(v.isSpotLight){const y=n.spot[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),_++}else if(v.isRectAreaLight){const y=n.rectArea[S];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),a.identity(),r.copy(v.matrixWorld),r.premultiply(f),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),S++}else if(v.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function Pc(i){const t=new K0(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function J0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Pc(i),t.set(s,[o])):r>=a.length?(o=new Pc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,j0=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],t_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Lc=new ue,Ls=new P,so=new P;function e_(i,t,e){let n=new zo;const s=new ut,r=new ut,a=new Se,o=new lf,l=new cf,c={},u=e.maxTextureSize,d={0:1,1:0,2:2},h=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Z0,fragmentShader:Q0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ee;_.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new we(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(b,L,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===2&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=1);const T=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(0),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=f!==this.type;z&&L.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=b.length;N<k;N++){const Y=b[N],q=Y.shadow;if(q===void 0){$t("WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const at=q.getFrameExtents();s.multiply(at),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/at.x),s.x=r.x*at.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/at.y),s.y=r.y*at.y,q.mapSize.y=r.y));const $=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=$,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===3){if(Y.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new xn(s.x,s.y,{format:1030,type:1016,minFilter:1006,magFilter:1006,generateMipmaps:!1}),q.map.texture.name=Y.name+".shadowMap",q.map.depthTexture=new Js(s.x,s.y,1015),q.map.depthTexture.name=Y.name+".shadowMapDepth",q.map.depthTexture.format=1026,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=1003,q.map.depthTexture.magFilter=1003}else Y.isPointLight?(q.map=new Ru(s.x),q.map.depthTexture=new yd(s.x,1014)):(q.map=new xn(s.x,s.y),q.map.depthTexture=new Js(s.x,s.y,1014)),q.map.depthTexture.name=Y.name+".shadowMap",q.map.depthTexture.format=1026,this.type===1?(q.map.depthTexture.compareFunction=$?518:515,q.map.depthTexture.minFilter=1006,q.map.depthTexture.magFilter=1006):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=1003,q.map.depthTexture.magFilter=1003);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);const tt=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Y.isPointLight!==!0&&q.updateMatrices(Y,x);for(let it=0;it<tt;it++){const Nt=q.getCamera(it);if(Y.isPointLight){const Ct=q.camera,ae=q.matrix,Kt=Y.distance||Ct.far;Kt!==Ct.far&&(Ct.far=Kt,Ct.updateProjectionMatrix()),Ls.setFromMatrixPosition(Y.matrixWorld),Ct.position.copy(Ls),so.copy(Ct.position),so.add(j0[it]),Ct.up.copy(t_[it]),Ct.lookAt(so),Ct.updateMatrixWorld(),ae.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Lc.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Lc,Ct.coordinateSystem,Ct.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,it),i.clear();else{it===0&&(i.setRenderTarget(q.map),i.clear());const Ct=q.getViewport(it);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),O.viewport(a)}n=q.getFrustum(it),v(L,x,Nt,Y,this.type)}q.isPointLightShadow!==!0&&this.type===3&&E(q,x),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,C,D)};function E(b,L){const x=t.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new xn(s.x,s.y,{format:1030,type:1016}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(L,null,x,h,S,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(L,null,x,p,S,null)}function A(b,L,x,T){let C=null;const D=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)C=D;else if(C=x.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const O=C.uuid,z=L.uuid;let N=c[O];N===void 0&&(N={},c[O]=N);let k=N[z];k===void 0&&(k=C.clone(),N[z]=k,L.addEventListener("dispose",y)),C=k}if(C.visible=L.visible,C.wireframe=L.wireframe,T===3?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:d[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const O=i.properties.get(C);O.light=x}return C}function v(b,L,x,T,C){if(b.visible===!1)return;if(b.layers.test(L.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===3)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const z=t.update(b),N=b.material;if(Array.isArray(N)){const k=z.groups;for(let Y=0,q=k.length;Y<q;Y++){const at=k[Y],$=N[at.materialIndex];if($&&$.visible){const tt=A(b,$,T,C);b.onBeforeShadow(i,b,L,x,z,tt,at),i.renderBufferDirect(x,null,z,tt,b,at),b.onAfterShadow(i,b,L,x,z,tt,at)}}}else if(N.visible){const k=A(b,N,T,C);b.onBeforeShadow(i,b,L,x,z,k,null),i.renderBufferDirect(x,null,z,k,b,null),b.onAfterShadow(i,b,L,x,z,k,null)}}const O=b.children;for(let z=0,N=O.length;z<N;z++)v(O[z],L,x,T,C)}function y(b){b.target.removeEventListener("dispose",y);for(const x in c){const T=c[x],C=b.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function n_(i,t){function e(){let F=!1;const xt=new Se;let et=null;const vt=new Se(0,0,0,0);return{setMask:function(wt){et!==wt&&!F&&(i.colorMask(wt,wt,wt,wt),et=wt)},setLocked:function(wt){F=wt},setClear:function(wt,ot,Ht,Ut,_e){_e===!0&&(wt*=Ut,ot*=Ut,Ht*=Ut),xt.set(wt,ot,Ht,Ut),vt.equals(xt)===!1&&(i.clearColor(wt,ot,Ht,Ut),vt.copy(xt))},reset:function(){F=!1,et=null,vt.set(-1,0,0,0)}}}function n(){let F=!1,xt=!1,et=null,vt=null,wt=null;return{setReversed:function(ot){if(xt!==ot){const Ht=t.get("EXT_clip_control");ot?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),xt=ot;const Ut=wt;wt=null,this.setClear(Ut)}},getReversed:function(){return xt},setTest:function(ot){ot?j(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(ot){et!==ot&&!F&&(i.depthMask(ot),et=ot)},setFunc:function(ot){if(xt&&(ot=Uh[ot]),vt!==ot){switch(ot){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=ot}},setLocked:function(ot){F=ot},setClear:function(ot){wt!==ot&&(wt=ot,xt&&(ot=1-ot),i.clearDepth(ot))},reset:function(){F=!1,et=null,vt=null,wt=null,xt=!1}}}function s(){let F=!1,xt=null,et=null,vt=null,wt=null,ot=null,Ht=null,Ut=null,_e=null;return{setTest:function(he){F||(he?j(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(he){xt!==he&&!F&&(i.stencilMask(he),xt=he)},setFunc:function(he,hn,bn){(et!==he||vt!==hn||wt!==bn)&&(i.stencilFunc(he,hn,bn),et=he,vt=hn,wt=bn)},setOp:function(he,hn,bn){(ot!==he||Ht!==hn||Ut!==bn)&&(i.stencilOp(he,hn,bn),ot=he,Ht=hn,Ut=bn)},setLocked:function(he){F=he},setClear:function(he){_e!==he&&(i.clearStencil(he),_e=he)},reset:function(){F=!1,xt=null,et=null,vt=null,wt=null,ot=null,Ht=null,Ut=null,_e=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},p=new WeakMap,_=[],S=null,m=!1,f=null,E=null,A=null,v=null,y=null,b=null,L=null,x=new Zt(0,0,0),T=0,C=!1,D=null,O=null,z=null,N=null,k=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,at=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec($)[1]),q=at>=1):$.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=at>=2);let tt=null,it={};const Nt=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),ae=new Se().fromArray(Nt),Kt=new Se().fromArray(Ct);function ee(F,xt,et,vt){const wt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(F,ot),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<et;Ht++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(xt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return ot}const K={};K[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(3),ct(!1),ft(1),j(i.CULL_FACE),rt(0);function j(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function pt(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Gt(F,xt){return h[F]!==xt?(i.bindFramebuffer(F,xt),h[F]=xt,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xt),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Tt(F,xt){let et=_,vt=!1;if(F){et=p.get(xt),et===void 0&&(et=[],p.set(xt,et));const wt=F.textures;if(et.length!==wt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Ht=wt.length;ot<Ht;ot++)et[ot]=i.COLOR_ATTACHMENT0+ot;et.length=wt.length,vt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,vt=!0);vt&&i.drawBuffers(et)}function Wt(F){return S!==F?(i.useProgram(F),S=F,!0):!1}const ie={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};ie[103]=i.MIN,ie[104]=i.MAX;const nt={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function rt(F,xt,et,vt,wt,ot,Ht,Ut,_e,he){if(F===0){m===!0&&(pt(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),F!==5){if(F!==f||he!==C){if((E!==100||y!==100)&&(i.blendEquation(i.FUNC_ADD),E=100,y=100),he)switch(F){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:se("WebGLState: Invalid blending: ",F);break}else switch(F){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",F);break}A=null,v=null,b=null,L=null,x.set(0,0,0),T=0,f=F,C=he}return}wt=wt||xt,ot=ot||et,Ht=Ht||vt,(xt!==E||wt!==y)&&(i.blendEquationSeparate(ie[xt],ie[wt]),E=xt,y=wt),(et!==A||vt!==v||ot!==b||Ht!==L)&&(i.blendFuncSeparate(nt[et],nt[vt],nt[ot],nt[Ht]),A=et,v=vt,b=ot,L=Ht),(Ut.equals(x)===!1||_e!==T)&&(i.blendColor(Ut.r,Ut.g,Ut.b,_e),x.copy(Ut),T=_e),f=F,C=!1}function lt(F,xt){F.side===2?pt(i.CULL_FACE):j(i.CULL_FACE);let et=F.side===1;xt&&(et=!et),ct(et),F.blending===1&&F.transparent===!1?rt(0):rt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const vt=F.stencilWrite;o.setTest(vt),vt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(F){D!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),D=F)}function ft(F){F!==0?(j(i.CULL_FACE),F!==O&&(F===1?i.cullFace(i.BACK):F===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),O=F}function Vt(F){F!==z&&(q&&i.lineWidth(F),z=F)}function Ot(F,xt,et){F?(j(i.POLYGON_OFFSET_FILL),(N!==xt||k!==et)&&(N=xt,k=et,a.getReversed()&&(xt=-xt),i.polygonOffset(xt,et))):pt(i.POLYGON_OFFSET_FILL)}function X(F){F?j(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function Q(F){F===void 0&&(F=i.TEXTURE0+Y-1),tt!==F&&(i.activeTexture(F),tt=F)}function R(F,xt,et){et===void 0&&(tt===null?et=i.TEXTURE0+Y-1:et=tt);let vt=it[et];vt===void 0&&(vt={type:void 0,texture:void 0},it[et]=vt),(vt.type!==F||vt.texture!==xt)&&(tt!==et&&(i.activeTexture(et),tt=et),i.bindTexture(F,xt||K[F]),vt.type=F,vt.texture=xt)}function At(){const F=it[tt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Rt(){try{i.compressedTexImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function g(){try{i.texSubImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function B(){try{i.texSubImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function ht(){try{i.texStorage2D(...arguments)}catch(F){se("WebGLState:",F)}}function mt(){try{i.texStorage3D(...arguments)}catch(F){se("WebGLState:",F)}}function Z(){try{i.texImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function st(){try{i.texImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function gt(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function kt(F,xt){d[F]!==xt&&(i.pixelStorei(F,xt),d[F]=xt)}function St(F){ae.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ae.copy(F))}function _t(F){Kt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Kt.copy(F))}function zt(F,xt){let et=c.get(xt);et===void 0&&(et=new WeakMap,c.set(xt,et));let vt=et.get(F);vt===void 0&&(vt=i.getUniformBlockIndex(xt,F.name),et.set(F,vt))}function Xt(F,xt){const vt=c.get(xt).get(F);l.get(xt)!==vt&&(i.uniformBlockBinding(xt,vt,F.__bindingPointIndex),l.set(xt,vt))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},tt=null,it={},h={},p=new WeakMap,_=[],S=null,m=!1,f=null,E=null,A=null,v=null,y=null,b=null,L=null,x=new Zt(0,0,0),T=0,C=!1,D=null,O=null,z=null,N=null,k=null,ae.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:pt,bindFramebuffer:Gt,drawBuffers:Tt,useProgram:Wt,setBlending:rt,setMaterial:lt,setFlipSided:ct,setCullFace:ft,setLineWidth:Vt,setPolygonOffset:Ot,setScissorTest:X,activeTexture:Q,bindTexture:R,unbindTexture:At,compressedTexImage2D:Rt,compressedTexImage3D:w,texImage2D:Z,texImage3D:st,pixelStorei:kt,getParameter:gt,updateUBOMapping:zt,uniformBlockBinding:Xt,texStorage2D:ht,texStorage3D:mt,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:H,compressedTexSubImage3D:J,scissor:St,viewport:_t,reset:Jt}}function i_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap,d=new Set;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,g){return _?new OffscreenCanvas(w,g):la("canvas")}function m(w,g,B){let H=1;const J=Rt(w);if((J.width>B||J.height>B)&&(H=B/Math.max(J.width,J.height)),H<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ht=Math.floor(H*J.width),mt=Math.floor(H*J.height);h===void 0&&(h=S(ht,mt));const Z=g?S(ht,mt):h;return Z.width=ht,Z.height=mt,Z.getContext("2d").drawImage(w,0,0,ht,mt),$t("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ht+"x"+mt+")."),Z}else return"data"in w&&$t("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function f(w){return w.generateMipmaps}function E(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(w,g,B,H,J,ht=!1){if(w!==null){if(i[w]!==void 0)return i[w];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let mt;H&&(mt=t.get("EXT_texture_norm16"),mt||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=g;if(g===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8),B===i.UNSIGNED_SHORT&&mt&&(Z=mt.R16_EXT),B===i.SHORT&&mt&&(Z=mt.R16_SNORM_EXT)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),g===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8),B===i.UNSIGNED_SHORT&&mt&&(Z=mt.RG16_EXT),B===i.SHORT&&mt&&(Z=mt.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_SHORT&&mt&&(Z=mt.RGB16_EXT),B===i.SHORT&&mt&&(Z=mt.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),g===i.RGBA){const st=ht?oa:re.getTransfer(J);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=st===fe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&mt&&(Z=mt.RGBA16_EXT),B===i.SHORT&&mt&&(Z=mt.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(w,g){let B;return w?g===null||g===1014||g===1020?B=i.DEPTH24_STENCIL8:g===1015?B=i.DEPTH32F_STENCIL8:g===1012&&(B=i.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===1014||g===1020?B=i.DEPTH_COMPONENT24:g===1015?B=i.DEPTH_COMPONENT32F:g===1012&&(B=i.DEPTH_COMPONENT16),B}function b(w,g){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==1003&&w.minFilter!==1006?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function L(w){const g=w.target;g.removeEventListener("dispose",L),T(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function x(w){const g=w.target;g.removeEventListener("dispose",x),D(g)}function T(w){const g=n.get(w);if(g.__webglInit===void 0)return;const B=w.source,H=p.get(B);if(H){const J=H[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(w),Object.keys(H).length===0&&p.delete(B)}n.remove(w)}function C(w){const g=n.get(w);i.deleteTexture(g.__webglTexture);const B=w.source,H=p.get(B);delete H[g.__cacheKey],a.memory.textures--}function D(w){const g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let J=0;J<g.__webglFramebuffer[H].length;J++)i.deleteFramebuffer(g.__webglFramebuffer[H][J]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=w.textures;for(let H=0,J=B.length;H<J;H++){const ht=n.get(B[H]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(B[H])}n.remove(w)}let O=0;function z(){O=0}function N(){return O}function k(w){O=w}function Y(){const w=O;return w>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,w}function q(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function at(w,g){const B=n.get(w);if(w.isVideoTexture&&R(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){const H=w.image;if(H===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(B,w,g);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function $(w,g){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){pt(B,w,g);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function tt(w,g){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){pt(B,w,g);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function it(w,g){const B=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&B.__version!==w.version){Gt(B,w,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}const Nt={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Ct={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},ae={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Kt(w,g){if(g.type===1015&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===1006||g.magFilter===1007||g.magFilter===1005||g.magFilter===1008||g.minFilter===1006||g.minFilter===1007||g.minFilter===1005||g.minFilter===1008)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Nt[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Nt[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Nt[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Ct[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Ct[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ae[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===1003||g.minFilter!==1005&&g.minFilter!==1008||g.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ee(w,g){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",L));const H=g.source;let J=p.get(H);J===void 0&&(J={},p.set(H,J));const ht=q(g);if(ht!==w.__cacheKey){J[ht]===void 0&&(J[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[ht].usedTimes++;const mt=J[w.__cacheKey];mt!==void 0&&(J[w.__cacheKey].usedTimes--,mt.usedTimes===0&&C(g)),w.__cacheKey=ht,w.__webglTexture=J[ht].texture}return B}function K(w,g,B){return Math.floor(Math.floor(w/B)/g)}function j(w,g,B,H){const ht=w.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,H,g.data);else{ht.sort((kt,St)=>kt.start-St.start);let mt=0;for(let kt=1;kt<ht.length;kt++){const St=ht[mt],_t=ht[kt],zt=St.start+St.count,Xt=K(_t.start,g.width,4),Jt=K(St.start,g.width,4);_t.start<=zt+1&&Xt===Jt&&K(_t.start+_t.count-1,g.width,4)===Xt?St.count=Math.max(St.count,_t.start+_t.count-St.start):(++mt,ht[mt]=_t)}ht.length=mt+1;const Z=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let kt=0,St=ht.length;kt<St;kt++){const _t=ht[kt],zt=Math.floor(_t.start/4),Xt=Math.ceil(_t.count/4),Jt=zt%g.width,F=Math.floor(zt/g.width),xt=Xt,et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Jt,F,xt,et,B,H,g.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function pt(w,g,B){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);const J=ee(w,g),ht=g.source;e.bindTexture(H,w.__webglTexture,i.TEXTURE0+B);const mt=n.get(ht);if(ht.version!==mt.__version||J===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const et=re.getPrimaries(re.workingColorSpace),vt=g.colorSpace===""?null:re.getPrimaries(g.colorSpace),wt=g.colorSpace===""||et===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let st=m(g.image,!1,s.maxTextureSize);st=At(g,st);const gt=r.convert(g.format,g.colorSpace),kt=r.convert(g.type);let St=v(g.internalFormat,gt,kt,g.normalized,g.colorSpace,g.isVideoTexture);Kt(H,g);let _t;const zt=g.mipmaps,Xt=g.isVideoTexture!==!0,Jt=mt.__version===void 0||J===!0,F=ht.dataReady,xt=b(g,st);if(g.isDepthTexture)St=y(g.format===1027,g.type),Jt&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,St,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,St,st.width,st.height,0,gt,kt,null));else if(g.isDataTexture)if(zt.length>0){Xt&&Jt&&e.texStorage2D(i.TEXTURE_2D,xt,St,zt[0].width,zt[0].height);for(let et=0,vt=zt.length;et<vt;et++)_t=zt[et],Xt?F&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,_t.width,_t.height,gt,kt,_t.data):e.texImage2D(i.TEXTURE_2D,et,St,_t.width,_t.height,0,gt,kt,_t.data);g.generateMipmaps=!1}else Xt?(Jt&&e.texStorage2D(i.TEXTURE_2D,xt,St,st.width,st.height),F&&j(g,st,gt,kt)):e.texImage2D(i.TEXTURE_2D,0,St,st.width,st.height,0,gt,kt,st.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Xt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,St,zt[0].width,zt[0].height,st.depth);for(let et=0,vt=zt.length;et<vt;et++)if(_t=zt[et],g.format!==1023)if(gt!==null)if(Xt){if(F)if(g.layerUpdates.size>0){const wt=cc(_t.width,_t.height,g.format,g.type);for(const ot of g.layerUpdates){const Ht=_t.data.subarray(ot*wt/_t.data.BYTES_PER_ELEMENT,(ot+1)*wt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,ot,_t.width,_t.height,1,gt,Ht)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,_t.width,_t.height,st.depth,gt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,St,_t.width,_t.height,st.depth,0,_t.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,_t.width,_t.height,st.depth,gt,kt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,St,_t.width,_t.height,st.depth,0,gt,kt,_t.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Xt&&Jt&&e.texStorage2D(i.TEXTURE_2D,xt,St,zt[0].width,zt[0].height);for(let et=0,vt=zt.length;et<vt;et++)_t=zt[et],g.format!==1023?gt!==null?Xt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,et,St,_t.width,_t.height,0,_t.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?F&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,_t.width,_t.height,gt,kt,_t.data):e.texImage2D(i.TEXTURE_2D,et,St,_t.width,_t.height,0,gt,kt,_t.data)}else if(g.isDataArrayTexture)if(Xt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,St,st.width,st.height,st.depth),F)if(g.layerUpdates.size>0){const et=cc(st.width,st.height,g.format,g.type);for(const vt of g.layerUpdates){const wt=st.data.subarray(vt*et/st.data.BYTES_PER_ELEMENT,(vt+1)*et/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,st.width,st.height,1,gt,kt,wt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,gt,kt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,st.width,st.height,st.depth,0,gt,kt,st.data);else if(g.isData3DTexture)Xt?(Jt&&e.texStorage3D(i.TEXTURE_3D,xt,St,st.width,st.height,st.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,gt,kt,st.data)):e.texImage3D(i.TEXTURE_3D,0,St,st.width,st.height,st.depth,0,gt,kt,st.data);else if(g.isFramebufferTexture){if(Jt)if(Xt)e.texStorage2D(i.TEXTURE_2D,xt,St,st.width,st.height);else{let et=st.width,vt=st.height;for(let wt=0;wt<xt;wt++)e.texImage2D(i.TEXTURE_2D,wt,St,et,vt,0,gt,kt,null),et>>=1,vt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const et=i.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),st.parentNode!==et){et.appendChild(st),d.add(g),et.onpaint=vt=>{const wt=vt.changedElements;for(const ot of d)wt.includes(ot.image)&&(ot.needsUpdate=!0)},et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{const wt=i.RGBA,ot=i.RGBA,Ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,wt,ot,Ht,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Xt&&Jt){const et=Rt(zt[0]);e.texStorage2D(i.TEXTURE_2D,xt,St,et.width,et.height)}for(let et=0,vt=zt.length;et<vt;et++)_t=zt[et],Xt?F&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,gt,kt,_t):e.texImage2D(i.TEXTURE_2D,et,St,gt,kt,_t);g.generateMipmaps=!1}else if(Xt){if(Jt){const et=Rt(st);e.texStorage2D(i.TEXTURE_2D,xt,St,et.width,et.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,kt,st)}else e.texImage2D(i.TEXTURE_2D,0,St,gt,kt,st);f(g)&&E(H),mt.__version=ht.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Gt(w,g,B){if(g.image.length!==6)return;const H=ee(w,g),J=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const ht=n.get(J);if(J.version!==ht.__version||H===!0){e.activeTexture(i.TEXTURE0+B);const mt=re.getPrimaries(re.workingColorSpace),Z=g.colorSpace===""?null:re.getPrimaries(g.colorSpace),st=g.colorSpace===""||mt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const gt=g.isCompressedTexture||g.image[0].isCompressedTexture,kt=g.image[0]&&g.image[0].isDataTexture,St=[];for(let ot=0;ot<6;ot++)!gt&&!kt?St[ot]=m(g.image[ot],!0,s.maxCubemapSize):St[ot]=kt?g.image[ot].image:g.image[ot],St[ot]=At(g,St[ot]);const _t=St[0],zt=r.convert(g.format,g.colorSpace),Xt=r.convert(g.type),Jt=v(g.internalFormat,zt,Xt,g.normalized,g.colorSpace),F=g.isVideoTexture!==!0,xt=ht.__version===void 0||H===!0,et=J.dataReady;let vt=b(g,_t);Kt(i.TEXTURE_CUBE_MAP,g);let wt;if(gt){F&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Jt,_t.width,_t.height);for(let ot=0;ot<6;ot++){wt=St[ot].mipmaps;for(let Ht=0;Ht<wt.length;Ht++){const Ut=wt[Ht];g.format!==1023?zt!==null?F?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht,0,0,Ut.width,Ut.height,zt,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht,Jt,Ut.width,Ut.height,0,Ut.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht,0,0,Ut.width,Ut.height,zt,Xt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht,Jt,Ut.width,Ut.height,0,zt,Xt,Ut.data)}}}else{if(wt=g.mipmaps,F&&xt){wt.length>0&&vt++;const ot=Rt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Jt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(kt){F?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,St[ot].width,St[ot].height,zt,Xt,St[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Jt,St[ot].width,St[ot].height,0,zt,Xt,St[ot].data);for(let Ht=0;Ht<wt.length;Ht++){const _e=wt[Ht].image[ot].image;F?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht+1,0,0,_e.width,_e.height,zt,Xt,_e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht+1,Jt,_e.width,_e.height,0,zt,Xt,_e.data)}}else{F?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,zt,Xt,St[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Jt,zt,Xt,St[ot]);for(let Ht=0;Ht<wt.length;Ht++){const Ut=wt[Ht];F?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht+1,0,0,zt,Xt,Ut.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ht+1,Jt,zt,Xt,Ut.image[ot])}}}f(g)&&E(i.TEXTURE_CUBE_MAP),ht.__version=J.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Tt(w,g,B,H,J,ht){const mt=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),st=v(B.internalFormat,mt,Z,B.normalized,B.colorSpace),gt=n.get(g),kt=n.get(B);if(kt.__renderTarget=g,!gt.__hasExternalTextures){const St=Math.max(1,g.width>>ht),_t=Math.max(1,g.height>>ht);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,ht,st,St,_t,g.depth,0,mt,Z,null):e.texImage2D(J,ht,st,St,_t,0,mt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Q(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,J,kt.__webglTexture,0,X(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,J,kt.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(w,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){const H=g.depthTexture,J=H&&H.isDepthTexture?H.type:null,ht=y(g.stencilBuffer,J),mt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Q(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,X(g),ht,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,X(g),ht,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ht,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,w)}else{const H=g.textures;for(let J=0;J<H.length;J++){const ht=H[J],mt=r.convert(ht.format,ht.colorSpace),Z=r.convert(ht.type),st=v(ht.internalFormat,mt,Z,ht.normalized,ht.colorSpace);Q(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,X(g),st,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,X(g),st,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,st,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ie(w,g,B){const H=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(g.depthTexture);if(J.__renderTarget=g,(!J.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(J.__webglInit===void 0&&(J.__webglInit=!0,g.depthTexture.addEventListener("dispose",L)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,g.depthTexture);const gt=r.convert(g.depthTexture.format),kt=r.convert(g.depthTexture.type);let St;g.depthTexture.format===1026?St=i.DEPTH_COMPONENT24:g.depthTexture.format===1027&&(St=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,St,g.width,g.height,0,gt,kt,null)}}else at(g.depthTexture,0);const ht=J.__webglTexture,mt=X(g),Z=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,st=g.depthTexture.format===1027?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===1026)Q(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,Z,ht,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,st,Z,ht,0);else if(g.depthTexture.format===1027)Q(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,Z,ht,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,st,Z,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(w){const g=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const H=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",J)};H.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=H}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let H=0;H<6;H++)ie(g.__webglFramebuffer[H],w,H);else{const H=w.texture.mipmaps;H&&H.length>0?ie(g.__webglFramebuffer[0],w,0):ie(g.__webglFramebuffer,w,0)}else if(B){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),Wt(g.__webglDepthbuffer[H],w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ht)}}else{const H=w.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Wt(g.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(w,g,B){const H=n.get(w);g!==void 0&&Tt(H.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&nt(w)}function lt(w){const g=w.texture,B=n.get(w),H=n.get(g);w.addEventListener("dispose",x);const J=w.textures,ht=w.isWebGLCubeRenderTarget===!0,mt=J.length>1;if(mt||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,a.memory.textures++),ht){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let st=0;st<g.mipmaps.length;st++)B.__webglFramebuffer[Z][st]=i.createFramebuffer()}else B.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<g.mipmaps.length;Z++)B.__webglFramebuffer[Z]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(mt)for(let Z=0,st=J.length;Z<st;Z++){const gt=n.get(J[Z]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Q(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<J.length;Z++){const st=J[Z];B.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);const gt=r.convert(st.format,st.colorSpace),kt=r.convert(st.type),St=v(st.internalFormat,gt,kt,st.normalized,st.colorSpace,w.isXRRenderTarget===!0),_t=X(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,St,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,g);for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0)for(let st=0;st<g.mipmaps.length;st++)Tt(B.__webglFramebuffer[Z][st],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st);else Tt(B.__webglFramebuffer[Z],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(g)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let Z=0,st=J.length;Z<st;Z++){const gt=J[Z],kt=n.get(gt);let St=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(St=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,kt.__webglTexture),Kt(St,gt),Tt(B.__webglFramebuffer,w,gt,i.COLOR_ATTACHMENT0+Z,St,0),f(gt)&&E(St)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,H.__webglTexture),Kt(Z,g),g.mipmaps&&g.mipmaps.length>0)for(let st=0;st<g.mipmaps.length;st++)Tt(B.__webglFramebuffer[st],w,g,i.COLOR_ATTACHMENT0,Z,st);else Tt(B.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,Z,0);f(g)&&E(Z),e.unbindTexture()}w.depthBuffer&&nt(w)}function ct(w){const g=w.textures;for(let B=0,H=g.length;B<H;B++){const J=g[B];if(f(J)){const ht=A(w),mt=n.get(J).__webglTexture;e.bindTexture(ht,mt),E(ht),e.unbindTexture()}}}const ft=[],Vt=[];function Ot(w){if(w.samples>0){if(Q(w)===!1){const g=w.textures,B=w.width,H=w.height;let J=i.COLOR_BUFFER_BIT;const ht=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(w),Z=g.length>1;if(Z)for(let gt=0;gt<g.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);const st=w.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let gt=0;gt<g.length;gt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);const kt=n.get(g[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,B,H,0,0,B,H,J,i.NEAREST),l===!0&&(ft.length=0,Vt.length=0,ft.push(i.COLOR_ATTACHMENT0+gt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(ft.push(ht),Vt.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let gt=0;gt<g.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);const kt=n.get(g[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function X(w){return Math.min(s.maxSamples,w.samples)}function Q(w){const g=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function R(w){const g=a.render.frame;u.get(w)!==g&&(u.set(w,g),w.update())}function At(w,g){const B=w.colorSpace,H=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==aa&&B!==""&&(re.getTransfer(B)===fe?(H!==1023||J!==1009)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",B)),g}function Rt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=z,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=at,this.setTexture2DArray=$,this.setTexture3D=tt,this.setTextureCube=it,this.rebindTextures=rt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Q,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function s_(i,t){function e(n,s=""){let r;const a=re.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return r.COMPRESSED_R11_EAC;if(n===37489)return r.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return r.COMPRESSED_RG11_EAC;if(n===37491)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===36283)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const r_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class o_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new fu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Un({vertexShader:r_,fragmentShader:a_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new cr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l_ extends Pi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",m=new o_,f={},E=e.getContextAttributes();let A=null,v=null;const y=[],b=[],L=new ut;let x=null,T=null;const C=new on;C.viewport=new Se;const D=new on;D.viewport=new Se;const O=[C,D],z=new mf;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=y[K];return j===void 0&&(j=new Da,y[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=y[K];return j===void 0&&(j=new Da,y[K]=j),j.getGripSpace()},this.getHand=function(K){let j=y[K];return j===void 0&&(j=new Da,y[K]=j),j.getHandSpace()};function Y(K){const j=b.indexOf(K.inputSource);if(j===-1)return;const pt=y[j];pt!==void 0&&(pt.update(K.inputSource,K.frame,c||a),pt.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",at);for(let K=0;K<y.length;K++){const j=b[K];j!==null&&(b[K]=null,y[K].disconnect(j))}N=null,k=null,m.reset();for(const K in f)delete f[K];if(t.setRenderTarget(A),p=null,h=null,d=null,s=null,v=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(L.width,L.height,!1),T!==null){const K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",q),s.addEventListener("inputsourceschange",at),E.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(L),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Gt=null,Tt=null;E.depth&&(Tt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=E.stencil?1027:1026,Gt=E.stencil?1020:1014);const Wt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Wt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new xn(h.textureWidth,h.textureHeight,{format:1023,type:1009,depthTexture:new Js(h.textureWidth,h.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const pt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new xn(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(K){for(let j=0;j<K.removed.length;j++){const pt=K.removed[j],Gt=b.indexOf(pt);Gt>=0&&(b[Gt]=null,y[Gt].disconnect(pt))}for(let j=0;j<K.added.length;j++){const pt=K.added[j];let Gt=b.indexOf(pt);if(Gt===-1){for(let Wt=0;Wt<y.length;Wt++)if(Wt>=b.length){b.push(pt),Gt=Wt;break}else if(b[Wt]===null){b[Wt]=pt,Gt=Wt;break}if(Gt===-1)break}const Tt=y[Gt];Tt&&Tt.connect(pt)}}const $=new P,tt=new P;function it(K,j,pt){$.setFromMatrixPosition(j.matrixWorld),tt.setFromMatrixPosition(pt.matrixWorld);const Gt=$.distanceTo(tt),Tt=j.projectionMatrix.elements,Wt=pt.projectionMatrix.elements,ie=Tt[14]/(Tt[10]-1),nt=Tt[14]/(Tt[10]+1),rt=(Tt[9]+1)/Tt[5],lt=(Tt[9]-1)/Tt[5],ct=(Tt[8]-1)/Tt[0],ft=(Wt[8]+1)/Wt[0],Vt=ie*ct,Ot=ie*ft,X=Gt/(-ct+ft),Q=X*-ct;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Q),K.translateZ(X),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Tt[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const R=ie+X,At=nt+X,Rt=Vt-Q,w=Ot+(Gt-Q),g=rt*nt/At*R,B=lt*nt/At*R;K.projectionMatrix.makePerspective(Rt,w,g,B,R,At),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Nt(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let j=K.near,pt=K.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),z.near=D.near=C.near=j,z.far=D.far=C.far=pt,(N!==z.near||k!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),N=z.near,k=z.far),z.layers.mask=K.layers.mask|6,C.layers.mask=z.layers.mask&-5,D.layers.mask=z.layers.mask&-3;const Gt=K.parent,Tt=z.cameras;Nt(z,Gt);for(let Wt=0;Wt<Tt.length;Wt++)Nt(Tt[Wt],Gt);Tt.length===2?it(z,C,D):z.projectionMatrix.copy(C.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),Ct(K,z,Gt)};function Ct(K,j,pt){pt===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(pt.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ks*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(K){return f[K]};let ae=null;function Kt(K,j){if(u=j.getViewerPose(c||a),_=j,u!==null){const pt=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Gt=!1;pt.length!==z.cameras.length&&(z.cameras.length=0,Gt=!0);for(let nt=0;nt<pt.length;nt++){const rt=pt[nt];let lt=null;if(p!==null)lt=p.getViewport(rt);else{const ft=d.getViewSubImage(h,rt);lt=ft.viewport,nt===0&&(t.setRenderTargetTextures(v,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(v))}let ct=O[nt];ct===void 0&&(ct=new on,ct.layers.enable(nt),ct.viewport=new Se,O[nt]=ct),ct.matrix.fromArray(rt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(rt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(lt.x,lt.y,lt.width,lt.height),nt===0&&(z.matrix.copy(ct.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Gt===!0&&z.cameras.push(ct)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const nt=d.getDepthInformation(pt[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,s.renderState)}if(Tt&&Tt.includes("camera-access")&&S){t.state.unbindTexture(),d=n.getBinding();for(let nt=0;nt<pt.length;nt++){const rt=pt[nt].camera;if(rt){let lt=f[rt];lt||(lt=new fu,f[rt]=lt);const ct=d.getCameraImage(rt);lt.sourceTexture=ct}}}}for(let pt=0;pt<y.length;pt++){const Gt=b[pt],Tt=y[pt];Gt!==null&&Tt!==void 0&&Tt.update(Gt,j,c||a)}ae&&ae(K,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}const ee=new Au;ee.setAnimationLoop(Kt),this.setAnimationLoop=function(K){ae=K},this.dispose=function(){}}}const c_=new ue,Nu=new Yt;Nu.set(-1,0,0,0,1,0,0,0,1);function u_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,bu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,A,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),S(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,E,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===1&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===1&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=t.get(f),A=E.envMap,v=E.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(c_.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Nu),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=A*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function h_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const b=y.program;n.uniformBlockBinding(v,b)}function c(v,y){let b=s[v.id];b===void 0&&(m(v),b=u(v),s[v.id]=b,v.addEventListener("dispose",E));const L=y.program;n.updateUBOMapping(v,L);const x=t.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){const y=d();v.__bindingPointIndex=y;const b=i.createBuffer(),L=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=s[v.id],b=v.uniforms,L=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let x=0,T=b.length;x<T;x++){const C=b[x];if(Array.isArray(C))for(let D=0,O=C.length;D<O;D++)p(C[D],x,D,L);else p(C,x,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,y,b,L){if(S(v,y,b,L)===!0){const x=v.__offset,T=v.value;if(Array.isArray(T)){let C=0;for(let D=0;D<T.length;D++){const O=T[D],z=f(O);_(O,v.__data,C),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function _(v,y,b){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,b)}function S(v,y,b,L){const x=v.value,T=y+"_"+b;if(L[T]===void 0)return typeof x=="number"||typeof x=="boolean"?L[T]=x:ArrayBuffer.isView(x)?L[T]=x.slice():L[T]=x.clone(),!0;{const C=L[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return L[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(v){const y=v.uniforms;let b=0;const L=16;for(let T=0,C=y.length;T<C;T++){const D=Array.isArray(y[T])?y[T]:[y[T]];for(let O=0,z=D.length;O<z;O++){const N=D[O],k=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,q=k.length;Y<q;Y++){const at=k[Y],$=f(at),tt=b%L,it=tt%$.boundary,Nt=tt+it;b+=it,Nt!==0&&L-Nt<$.storage&&(b+=L-Nt),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=$.storage}}}const x=b%L;return x>0&&(b+=L-x),v.__size=b,v.__cache={},this}function f(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",v),y}function E(v){const y=v.target;y.removeEventListener("dispose",E);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function A(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}const d_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function f_(){return wn===null&&(wn=new uu(d_,16,16,1030,1016),wn.name="DFG_LUT",wn.minFilter=1006,wn.magFilter=1006,wn.wrapS=1001,wn.wrapT=1001,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class p_{constructor(t={}){const{canvas:e=Dh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=1009}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=p,m=new Set([1033,1031,1029]),f=new Set([1009,1014,1012,1020,1017,1018]),E=new Uint32Array(4),A=new Int32Array(4),v=new P;let y=null,b=null;const L=[],x=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,O=null,z=null,N=null,k=null;this._outputColorSpace=Ke;let Y=0,q=0,at=null,$=-1,tt=null;const it=new Se,Nt=new Se;let Ct=null;const ae=new Zt(0);let Kt=0,ee=e.width,K=e.height,j=1,pt=null,Gt=null;const Tt=new Se(0,0,ee,K),Wt=new Se(0,0,ee,K);let ie=!1;const nt=new zo;let rt=!1,lt=!1;const ct=new ue,ft=new P,Vt=new Se,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let X=!1;function Q(){return at===null?j:1}let R=n;function At(M,U){return e.getContext(M,U)}let Rt,w,g,B,H,J,ht,mt,Z,st,gt,kt,St,_t,zt,Xt,Jt,F,xt,et,vt,wt,ot;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r186"),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",hn,!1),R===null){const U="webgl2";if(R=At(U,M),R===null)throw At(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(M){throw e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",hn,!1),se("WebGLRenderer: "+M.message),M}function Ht(){Rt=new fg(R),Rt.init(),vt=new s_(R,Rt),w=new ig(R,Rt,t,vt),g=new n_(R,Rt),w.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),z=R.createFramebuffer(),N=R.createFramebuffer(),k=R.createFramebuffer(),B=new gg(R),H=new V0,J=new i_(R,Rt,g,H,w,vt,B),ht=new dg(C),mt=new xf(R),wt=new eg(R,mt),Z=new pg(R,mt,B,wt),st=new xg(R,Z,mt,wt,B),F=new _g(R,w,J),zt=new sg(H),gt=new G0(C,ht,Rt,w,wt,zt),kt=new u_(C,H),St=new W0,_t=new J0(Rt),Jt=new tg(C,ht,g,st,_,l),Xt=new e_(C,st,w),ot=new h_(R,B,w,g),xt=new ng(R,Rt,B),et=new mg(R,Rt,B),B.programs=gt.programs,C.capabilities=w,C.extensions=Rt,C.properties=H,C.renderLists=St,C.shadowMap=Xt,C.state=g,C.info=B}S!==1009&&(T=new Mg(S,e.width,e.height,o,s,r));const Ut=new l_(C,R);this.xr=Ut,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Rt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Rt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(ee,K,!1))},this.getSize=function(M){return M.set(ee,K)},this.setSize=function(M,U,W=!0){if(Ut.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=M,K=U,e.width=Math.floor(M*j),e.height=Math.floor(U*j),W===!0&&(e.style.width=M+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(ee*j,K*j).floor()},this.setDrawingBufferSize=function(M,U,W){ee=M,K=U,j=W,e.width=Math.floor(M*W),e.height=Math.floor(U*W),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(S===1009){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(it)},this.getViewport=function(M){return M.copy(Tt)},this.setViewport=function(M,U,W,G){M.isVector4?Tt.set(M.x,M.y,M.z,M.w):Tt.set(M,U,W,G),g.viewport(it.copy(Tt).multiplyScalar(j).round())},this.getScissor=function(M){return M.copy(Wt)},this.setScissor=function(M,U,W,G){M.isVector4?Wt.set(M.x,M.y,M.z,M.w):Wt.set(M,U,W,G),g.scissor(Nt.copy(Wt).multiplyScalar(j).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(M){g.setScissorTest(ie=M)},this.setOpaqueSort=function(M){pt=M},this.setTransparentSort=function(M){Gt=M},this.getClearColor=function(M){return M.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,W=!0){let G=0;if(M){let V=!1;if(at!==null){const Et=at.texture.format;V=m.has(Et)}if(V){const Et=at.texture.type,Lt=f.has(Et),bt=Jt.getClearColor(),It=Jt.getClearAlpha(),Ft=bt.r,Qt=bt.g,ne=bt.b;Lt?(E[0]=Ft,E[1]=Qt,E[2]=ne,E[3]=It,R.clearBufferuiv(R.COLOR,0,E)):(A[0]=Ft,A[1]=Qt,A[2]=ne,A[3]=It,R.clearBufferiv(R.COLOR,0,A))}else G|=R.COLOR_BUFFER_BIT}U&&(G|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",hn,!1),Jt.dispose(),St.dispose(),_t.dispose(),H.dispose(),ht.dispose(),st.dispose(),wt.dispose(),ot.dispose(),gt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",ml),Ut.removeEventListener("sessionend",gl),fi.stop()};function _e(M){M.preventDefault(),ca("WebGLRenderer: Context Lost."),D=!0}function he(){ca("WebGLRenderer: Context Restored."),D=!1;const M=B.autoReset,U=Xt.enabled,W=Xt.autoUpdate,G=Xt.needsUpdate,V=Xt.type;Ht(),B.autoReset=M,Xt.enabled=U,Xt.autoUpdate=W,Xt.needsUpdate=G,Xt.type=V}function hn(M){se("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function bn(M){const U=M.target;U.removeEventListener("dispose",bn),bh(U)}function bh(M){Eh(M),H.remove(M)}function Eh(M){const U=H.get(M).programs;U!==void 0&&(U.forEach(function(W){gt.releaseProgram(W)}),M.isShaderMaterial&&gt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,W,G,V,Et){U===null&&(U=Ot);const Lt=V.isMesh&&V.matrixWorld.determinantAffine()<0,bt=Ah(M,U,W,G,V);g.setMaterial(G,Lt);let It=W.index,Ft=1;if(G.wireframe===!0){if(It=Z.getWireframeAttribute(W),It===void 0)return;Ft=2}const Qt=W.drawRange,ne=W.attributes.position;let Dt=Qt.start*Ft,de=(Qt.start+Qt.count)*Ft;Et!==null&&(Dt=Math.max(Dt,Et.start*Ft),de=Math.min(de,(Et.start+Et.count)*Ft)),It!==null?(Dt=Math.max(Dt,0),de=Math.min(de,It.count)):ne!=null&&(Dt=Math.max(Dt,0),de=Math.min(de,ne.count));const Ae=de-Dt;if(Ae<0||Ae===1/0)return;wt.setup(V,G,bt,W,It);let ve,ge=xt;if(It!==null&&(ve=mt.get(It),ge=et,ge.setIndex(ve)),V.isMesh)G.wireframe===!0?(g.setLineWidth(G.wireframeLinewidth*Q()),ge.setMode(R.LINES)):ge.setMode(R.TRIANGLES);else if(V.isLine){let Oe=G.linewidth;Oe===void 0&&(Oe=1),g.setLineWidth(Oe*Q()),V.isLineSegments?ge.setMode(R.LINES):V.isLineLoop?ge.setMode(R.LINE_LOOP):ge.setMode(R.LINE_STRIP)}else V.isPoints?ge.setMode(R.POINTS):V.isSprite&&ge.setMode(R.TRIANGLES);if(V.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))ge.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Oe=V._multiDrawStarts,Pt=V._multiDrawCounts,We=V._multiDrawCount,oe=It?mt.get(It).bytesPerElement:1,rn=H.get(G).currentProgram.getUniforms();for(let En=0;En<We;En++)rn.setValue(R,"_gl_DrawID",En),ge.render(Oe[En]/oe,Pt[En])}else if(V.isInstancedMesh)ge.renderInstances(Dt,Ae,V.count);else if(W.isInstancedBufferGeometry){const Oe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pt=Math.min(W.instanceCount,Oe);ge.renderInstances(Dt,Ae,Pt)}else ge.render(Dt,Ae)};function pl(M,U,W,G){O!==null&&M.isNodeMaterial&&O.setObject(G,M),rt===!0&&zt.setState(M,W,!1),M.transparent===!0&&M.side===2&&M.forceSinglePass===!1?(M.side=1,M.needsUpdate=!0,gr(M,U,G),M.side=0,M.needsUpdate=!0,gr(M,U,G),M.side=2):gr(M,U,G)}this.compile=function(M,U,W=null){W===null&&(W=M),O!==null&&O.renderStart(M,U,W),b=_t.get(W),b.init(U),x.push(b),W.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),M!==W&&M.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),lt=this.localClippingEnabled,rt=zt.init(this.clippingPlanes,lt),rt===!0&&zt.setGlobalState(this.clippingPlanes,U),O!==null&&Xt.render(b.state.shadowsArray,W,U);const G=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Et=V.material;if(Et)if(Array.isArray(Et))for(let Lt=0;Lt<Et.length;Lt++){const bt=Et[Lt];pl(bt,W,U,V),G.add(bt)}else pl(Et,W,U,V),G.add(Et)}),b=x.pop(),O!==null&&O.renderEnd(),G},this.compileAsync=function(M,U,W=null){const G=this.compile(M,U,W);return new Promise(V=>{function Et(){if(G.forEach(function(Lt){const It=H.get(Lt).currentProgram;(It===void 0||It.isReady())&&G.delete(Lt)}),G.size===0){V(M);return}setTimeout(Et,10)}Rt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let wa=null;function Th(M){wa&&wa(M)}function ml(){fi.stop()}function gl(){fi.start()}const fi=new Au;fi.setAnimationLoop(Th),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(M){wa=M,Ut.setAnimationLoop(M),M===null?fi.stop():fi.start()},Ut.addEventListener("sessionstart",ml),Ut.addEventListener("sessionend",gl),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(M,U);const W=Ut.enabled===!0&&Ut.isPresenting===!0,G=T!==null&&(at===null||W)&&T.begin(C,at);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(U),U=Ut.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,U,at),b=_t.get(M,x.length),b.init(U),b.state.textureUnits=J.getTextureUnits(),x.push(b),ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),nt.setFromProjectionMatrix(ct,2e3,U.reversedDepth),lt=this.localClippingEnabled,rt=zt.init(this.clippingPlanes,lt),y=St.get(M,L.length),y.init(),L.push(y),Ut.enabled===!0&&Ut.isPresenting===!0){const Lt=C.xr.getDepthSensingMesh();Lt!==null&&Aa(Lt,U,-1/0,C.sortObjects)}Aa(M,U,0,C.sortObjects),y.finish(),O!==null&&O.updateLights(b.state.lightsArray),C.sortObjects===!0&&y.sort(pt,Gt),X=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,X&&Jt.addToRenderList(y,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&zt.beginShadows();const V=b.state.shadowsArray;if(Xt.render(V,M,U),rt===!0&&zt.endShadows(),(G&&T.hasRenderPass())===!1){const Lt=y.opaque,bt=y.transmissive;if(b.setupLights(),U.isArrayCamera){const It=U.cameras;if(bt.length>0)for(let Ft=0,Qt=It.length;Ft<Qt;Ft++){const ne=It[Ft];xl(Lt,bt,M,ne)}X&&Jt.render(M);for(let Ft=0,Qt=It.length;Ft<Qt;Ft++){const ne=It[Ft];_l(y,M,ne,ne.viewport)}}else bt.length>0&&xl(Lt,bt,M,U),X&&Jt.render(M),_l(y,M,U)}at!==null&&q===0&&(J.updateMultisampleRenderTarget(at),J.updateRenderTargetMipmap(at)),G&&T.end(C),M.isScene===!0&&M.onAfterRender(C,M,U),wt.resetDefaultState(),$=-1,tt=null,x.pop(),x.length>0?(b=x[x.length-1],J.setTextureUnits(b.state.textureUnits),rt===!0&&zt.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,L.pop(),L.length>0?y=L[L.length-1]:y=null,O!==null&&O.renderEnd()};function Aa(M,U,W,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(nt)){G&&Vt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ct);const Lt=st.update(M),bt=M.material;bt.visible&&y.push(M,Lt,bt,W,Vt.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(nt))){const Lt=st.update(M),bt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Vt.copy(M.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Vt.copy(Lt.boundingSphere.center)),Vt.applyMatrix4(M.matrixWorld).applyMatrix4(ct)),Array.isArray(bt)){const It=Lt.groups;for(let Ft=0,Qt=It.length;Ft<Qt;Ft++){const ne=It[Ft],Dt=bt[ne.materialIndex];Dt&&Dt.visible&&y.push(M,Lt,Dt,W,Vt.z,ne,U)}}else bt.visible&&y.push(M,Lt,bt,W,Vt.z,null,U)}}const Et=M.children;for(let Lt=0,bt=Et.length;Lt<bt;Lt++)Aa(Et[Lt],U,W,G)}function _l(M,U,W,G){const{opaque:V,transmissive:Et,transparent:Lt}=M;b.setupLightsView(W),rt===!0&&zt.setGlobalState(C.clippingPlanes,W),G&&g.viewport(it.copy(G)),V.length>0&&mr(V,U,W),Et.length>0&&mr(Et,U,W),Lt.length>0&&mr(Lt,U,W),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function xl(M,U,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){const Dt=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new xn(1,1,{generateMipmaps:!0,type:Dt?1016:1009,minFilter:1008,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}const Et=b.state.transmissionRenderTarget[G.id],Lt=G.viewport||it;Et.setSize(Lt.z*C.transmissionResolutionScale,Lt.w*C.transmissionResolutionScale);const bt=C.getRenderTarget(),It=C.getActiveCubeFace(),Ft=C.getActiveMipmapLevel();C.setRenderTarget(Et),C.getClearColor(ae),Kt=C.getClearAlpha(),Kt<1&&C.setClearColor(16777215,.5),C.clear(),X&&Jt.render(W);const Qt=C.toneMapping;C.toneMapping=0;const ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),rt===!0&&zt.setGlobalState(C.clippingPlanes,G),mr(M,W,G),J.updateMultisampleRenderTarget(Et),J.updateRenderTargetMipmap(Et),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let de=0,Ae=U.length;de<Ae;de++){const ve=U[de],{object:ge,geometry:Oe,material:Pt,group:We}=ve;if(Pt.side===2&&ge.layers.test(G.layers)){const oe=Pt.side;Pt.side=1,Pt.needsUpdate=!0,vl(ge,W,G,Oe,Pt,We),Pt.side=oe,Pt.needsUpdate=!0,Dt=!0}}Dt===!0&&(J.updateMultisampleRenderTarget(Et),J.updateRenderTargetMipmap(Et))}C.setRenderTarget(bt,It,Ft),C.setClearColor(ae,Kt),ne!==void 0&&(G.viewport=ne),C.toneMapping=Qt}function mr(M,U,W){const G=U.isScene===!0?U.overrideMaterial:null;for(let V=0,Et=M.length;V<Et;V++){const Lt=M[V],{object:bt,geometry:It,group:Ft}=Lt;let Qt=Lt.material;Qt.allowOverride===!0&&G!==null&&(Qt=G),bt.layers.test(W.layers)&&vl(bt,U,W,It,Qt,Ft)}}function vl(M,U,W,G,V,Et){O!==null&&V.isNodeMaterial&&O.setObject(M,V),M.onBeforeRender(C,U,W,G,V,Et),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(C,U,W,G,M,Et),V.transparent===!0&&V.side===2&&V.forceSinglePass===!1?(V.side=1,V.needsUpdate=!0,C.renderBufferDirect(W,U,G,V,M,Et),V.side=0,V.needsUpdate=!0,C.renderBufferDirect(W,U,G,V,M,Et),V.side=2):C.renderBufferDirect(W,U,G,V,M,Et),M.onAfterRender(C,U,W,G,V,Et)}function gr(M,U,W){U.isScene!==!0&&(U=Ot);const G=H.get(M),V=b.state.lights,Et=b.state.shadowsArray,Lt=V.state.version,bt=gt.getParameters(M,V.state,Et,U,W,b.state.lightProbeGridArray),It=gt.getProgramCacheKey(bt);let Ft=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const Qt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=ht.get(M.envMap||G.environment,Qt),G.envMapRotation=G.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ft===void 0&&(M.addEventListener("dispose",bn),Ft=new Map,G.programs=Ft);let ne=Ft.get(It);if(ne!==void 0){if(G.currentProgram===ne&&G.lightsStateVersion===Lt)return Sl(M,bt),ne}else bt.uniforms=gt.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,W,bt),M.onBeforeCompile(bt,C),ne=gt.acquireProgram(bt,It),Ft.set(It,ne),G.uniforms=bt.uniforms;const Dt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Dt.clippingPlanes=zt.uniform),Sl(M,bt),G.needsLights=Rh(M),G.lightsStateVersion=Lt,G.needsLights&&(Dt.ambientLightColor.value=V.state.ambient,Dt.lightProbe.value=V.state.probe,Dt.sunLights.value=V.state.sun,Dt.sunLightShadows.value=V.state.sunShadow,Dt.directionalLights.value=V.state.directional,Dt.directionalLightShadows.value=V.state.directionalShadow,Dt.spotLights.value=V.state.spot,Dt.spotLightShadows.value=V.state.spotShadow,Dt.rectAreaLights.value=V.state.rectArea,Dt.ltc_1.value=V.state.rectAreaLTC1,Dt.ltc_2.value=V.state.rectAreaLTC2,Dt.pointLights.value=V.state.point,Dt.pointLightShadows.value=V.state.pointShadow,Dt.hemisphereLights.value=V.state.hemi,Dt.sunShadowMatrix.value=V.state.sunShadowMatrix,Dt.sunShadowCascade.value=V.state.sunShadowCascade,Dt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Dt.spotLightMatrix.value=V.state.spotLightMatrix,Dt.spotLightMap.value=V.state.spotLightMap,Dt.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=ne,G.uniformsList=null,ne}function Ml(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=jr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Sl(M,U){const W=H.get(M);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function wh(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let W=0,G=M.length;W<G;W++){const V=M[W];if(V.texture!==null&&V.boundingBox.containsPoint(v))return V}return null}function Ah(M,U,W,G,V){U.isScene!==!0&&(U=Ot),J.resetTextureUnits();const Et=U.fog,Lt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,bt=at===null?C.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:re.workingColorSpace,It=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ft=ht.get(G.envMap||Lt,It),Qt=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ne=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Dt=!!W.morphAttributes.position,de=!!W.morphAttributes.normal,Ae=!!W.morphAttributes.color;let ve=0;G.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ve=C.toneMapping);const ge=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Oe=ge!==void 0?ge.length:0,Pt=H.get(G),We=b.state.lights;if(rt===!0&&(lt===!0||M!==tt)){const xe=M===tt&&G.id===$;zt.setState(G,M,xe)}let oe=!1;G.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==We.state.version||Pt.outputColorSpace!==bt||V.isBatchedMesh&&Pt.batching===!1||!V.isBatchedMesh&&Pt.batching===!0||V.isBatchedMesh&&Pt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Pt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Pt.instancing===!1||!V.isInstancedMesh&&Pt.instancing===!0||V.isSkinnedMesh&&Pt.skinning===!1||!V.isSkinnedMesh&&Pt.skinning===!0||V.isInstancedMesh&&Pt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Pt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Pt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Pt.instancingMorph===!1&&V.morphTexture!==null||Pt.envMap!==Ft||G.fog===!0&&Pt.fog!==Et||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==zt.numPlanes||Pt.numIntersection!==zt.numIntersection)||Pt.vertexAlphas!==Qt||Pt.vertexTangents!==ne||Pt.morphTargets!==Dt||Pt.morphNormals!==de||Pt.morphColors!==Ae||Pt.toneMapping!==ve||Pt.morphTargetsCount!==Oe||!!Pt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Pt.__version=G.version);let rn=Pt.currentProgram;oe===!0&&(rn=gr(G,U,V),O&&G.isNodeMaterial&&O.onUpdateProgram(G,rn,Pt));let En=!1,Zn=!1,Di=!1;const me=rn.getUniforms(),Te=Pt.uniforms;if(g.useProgram(rn.program)&&(En=!0,Zn=!0,Di=!0),G.id!==$&&($=G.id,Zn=!0),Pt.needsLights){const xe=wh(b.state.lightProbeGridArray,V);Pt.lightProbeGrid!==xe&&(Pt.lightProbeGrid=xe,Zn=!0)}if(En||tt!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),me.setValue(R,"projectionMatrix",M.projectionMatrix),me.setValue(R,"viewMatrix",M.matrixWorldInverse);const jn=me.map.cameraPosition;jn!==void 0&&jn.setValue(R,ft.setFromMatrixPosition(M.matrixWorld)),w.logarithmicDepthBuffer&&me.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&me.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),tt!==M&&(tt=M,Zn=!0,Di=!0)}if(Pt.needsLights&&(We.state.sunShadowMap.length>0&&me.setValue(R,"sunShadowMap",We.state.sunShadowMap,J),We.state.directionalShadowMap.length>0&&me.setValue(R,"directionalShadowMap",We.state.directionalShadowMap,J),We.state.spotShadowMap.length>0&&me.setValue(R,"spotShadowMap",We.state.spotShadowMap,J),We.state.pointShadowMap.length>0&&me.setValue(R,"pointShadowMap",We.state.pointShadowMap,J)),V.isSkinnedMesh){me.setOptional(R,V,"bindMatrix"),me.setOptional(R,V,"bindMatrixInverse");const xe=V.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),me.setValue(R,"boneTexture",xe.boneTexture,J))}V.isBatchedMesh&&(me.setOptional(R,V,"batchingTexture"),me.setValue(R,"batchingTexture",V._matricesTexture,J),me.setOptional(R,V,"batchingIdTexture"),me.setValue(R,"batchingIdTexture",V._indirectTexture,J),me.setOptional(R,V,"batchingColorTexture"),V._colorsTexture!==null&&me.setValue(R,"batchingColorTexture",V._colorsTexture,J));const Qn=W.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&F.update(V,W,rn),(Zn||Pt.receiveShadow!==V.receiveShadow)&&(Pt.receiveShadow=V.receiveShadow,me.setValue(R,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Te.envMapIntensity.value=U.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=f_()),Zn){if(me.setValue(R,"toneMappingExposure",C.toneMappingExposure),Pt.needsLights&&Ch(Te,Di),Et&&G.fog===!0&&kt.refreshFogUniforms(Te,Et),kt.refreshMaterialUniforms(Te,G,j,K,b.state.transmissionRenderTarget[M.id]),Pt.needsLights&&Pt.lightProbeGrid){const xe=Pt.lightProbeGrid;Te.probesSH.value=xe.texture,Te.probesMin.value.copy(xe.boundingBox.min),Te.probesMax.value.copy(xe.boundingBox.max),Te.probesResolution.value.copy(xe.resolution)}jr.upload(R,Ml(Pt),Te,J)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(jr.upload(R,Ml(Pt),Te,J),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&me.setValue(R,"center",V.center),me.setValue(R,"modelViewMatrix",V.modelViewMatrix),me.setValue(R,"normalMatrix",V.normalMatrix),me.setValue(R,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const xe=G.uniformsGroups;for(let jn=0,Ni=xe.length;jn<Ni;jn++){const bl=xe[jn];ot.update(bl,rn),ot.bind(bl,rn)}}return rn}function Ch(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Rh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(M,U,W){const G=H.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=U,H.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const W=H.get(M);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,W=0){at=M,Y=U,q=W;let G=null,V=!1,Et=!1;if(M){const bt=H.get(M);if(bt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(R.FRAMEBUFFER,bt.__webglFramebuffer),it.copy(M.viewport),Nt.copy(M.scissor),Ct=M.scissorTest,g.viewport(it),g.scissor(Nt),g.setScissorTest(Ct),$=-1;return}else if(bt.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(bt.__hasExternalTextures)J.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Qt=M.depthTexture;if(bt.__boundDepthTexture!==Qt){if(Qt!==null&&H.has(Qt)&&(M.width!==Qt.image.width||M.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}const It=M.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Et=!0);const Ft=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?G=Ft[U][W]:G=Ft[U],V=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?G=H.get(M).__webglMultisampledFramebuffer:Array.isArray(Ft)?G=Ft[W]:G=Ft,it.copy(M.viewport),Nt.copy(M.scissor),Ct=M.scissorTest}else it.copy(Tt).multiplyScalar(j).floor(),Nt.copy(Wt).multiplyScalar(j).floor(),Ct=ie;if(W!==0&&(G=z),g.bindFramebuffer(R.FRAMEBUFFER,G)&&g.drawBuffers(M,G),g.viewport(it),g.scissor(Nt),g.setScissorTest(Ct),V){const bt=H.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt.__webglTexture,W)}else if(Et){const bt=U;for(let It=0;It<M.textures.length;It++){const Ft=H.get(M.textures[It]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+It,Ft.__webglTexture,W,bt)}}else if(M!==null&&W!==0){const bt=H.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,bt.__webglTexture,W)}$=-1};function yl(M){const U=H.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=w.textureFormatReadable(M.format),U.__typeReadable=w.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,W,G,V,Et,Lt,bt=0){if(!(M&&M.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Lt!==void 0&&(It=It[Lt]),It){g.bindFramebuffer(R.FRAMEBUFFER,It);try{const Ft=M.textures[bt],Qt=Ft.format,ne=Ft.type;M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+bt);const Dt=yl(Ft);if(Dt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&W>=0&&W<=M.height-V&&R.readPixels(U,W,G,V,vt.convert(Qt),vt.convert(ne),Et)}finally{const Ft=at!==null?H.get(at).__webglFramebuffer:null;g.bindFramebuffer(R.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(M,U,W,G,V,Et,Lt,bt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Lt!==void 0&&(It=It[Lt]),It)if(U>=0&&U<=M.width-G&&W>=0&&W<=M.height-V){g.bindFramebuffer(R.FRAMEBUFFER,It);const Ft=M.textures[bt],Qt=Ft.format,ne=Ft.type;M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+bt);const Dt=yl(Ft);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,de),R.bufferData(R.PIXEL_PACK_BUFFER,Et.byteLength,R.STREAM_READ),R.readPixels(U,W,G,V,vt.convert(Qt),vt.convert(ne),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);const Ae=at!==null?H.get(at).__webglFramebuffer:null;g.bindFramebuffer(R.FRAMEBUFFER,Ae);const ve=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Nh(R,ve,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,de),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Et),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(de),R.deleteSync(ve),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,W=0){const G=Math.pow(2,-W),V=Math.floor(M.image.width*G),Et=Math.floor(M.image.height*G),Lt=U!==null?U.x:0,bt=U!==null?U.y:0;J.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,W,0,0,Lt,bt,V,Et),g.unbindTexture()},this.copyTextureToTexture=function(M,U,W=null,G=null,V=0,Et=0){let Lt,bt,It,Ft,Qt,ne,Dt,de,Ae;const ve=M.isCompressedTexture?M.mipmaps[Et]:M.image;if(W!==null)Lt=W.max.x-W.min.x,bt=W.max.y-W.min.y,It=W.isBox3?W.max.z-W.min.z:1,Ft=W.min.x,Qt=W.min.y,ne=W.isBox3?W.min.z:0;else{const Te=Math.pow(2,-V);Lt=Math.floor(ve.width*Te),bt=Math.floor(ve.height*Te),M.isDataArrayTexture?It=ve.depth:M.isData3DTexture?It=Math.floor(ve.depth*Te):It=1,Ft=0,Qt=0,ne=0}G!==null?(Dt=G.x,de=G.y,Ae=G.z):(Dt=0,de=0,Ae=0);const ge=vt.convert(U.format),Oe=vt.convert(U.type);let Pt;U.isData3DTexture?(J.setTexture3D(U,0),Pt=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),Pt=R.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),Pt=R.TEXTURE_2D),g.activeTexture(R.TEXTURE0),g.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const We=g.getParameter(R.UNPACK_ROW_LENGTH),oe=g.getParameter(R.UNPACK_IMAGE_HEIGHT),rn=g.getParameter(R.UNPACK_SKIP_PIXELS),En=g.getParameter(R.UNPACK_SKIP_ROWS),Zn=g.getParameter(R.UNPACK_SKIP_IMAGES);g.pixelStorei(R.UNPACK_ROW_LENGTH,ve.width),g.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ve.height),g.pixelStorei(R.UNPACK_SKIP_PIXELS,Ft),g.pixelStorei(R.UNPACK_SKIP_ROWS,Qt),g.pixelStorei(R.UNPACK_SKIP_IMAGES,ne);const Di=M.isDataArrayTexture||M.isData3DTexture,me=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const Te=H.get(M),Qn=H.get(U),xe=H.get(Te.__renderTarget),jn=H.get(Qn.__renderTarget);g.bindFramebuffer(R.READ_FRAMEBUFFER,xe.__webglFramebuffer),g.bindFramebuffer(R.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Ni=0;Ni<It;Ni++)Di&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,H.get(M).__webglTexture,V,ne+Ni),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,H.get(U).__webglTexture,Et,Ae+Ni)),R.blitFramebuffer(Ft,Qt,Lt,bt,Dt,de,Lt,bt,R.DEPTH_BUFFER_BIT,R.NEAREST);g.bindFramebuffer(R.READ_FRAMEBUFFER,null),g.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||H.has(M)){const Te=H.get(M),Qn=H.get(U);g.bindFramebuffer(R.READ_FRAMEBUFFER,N),g.bindFramebuffer(R.DRAW_FRAMEBUFFER,k);for(let xe=0;xe<It;xe++)Di?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Te.__webglTexture,V,ne+xe):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Te.__webglTexture,V),me?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Qn.__webglTexture,Et,Ae+xe):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Qn.__webglTexture,Et),V!==0?R.blitFramebuffer(Ft,Qt,Lt,bt,Dt,de,Lt,bt,R.COLOR_BUFFER_BIT,R.NEAREST):me?R.copyTexSubImage3D(Pt,Et,Dt,de,Ae+xe,Ft,Qt,Lt,bt):R.copyTexSubImage2D(Pt,Et,Dt,de,Ft,Qt,Lt,bt);g.bindFramebuffer(R.READ_FRAMEBUFFER,null),g.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else me?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(Pt,Et,Dt,de,Ae,Lt,bt,It,ge,Oe,ve.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Pt,Et,Dt,de,Ae,Lt,bt,It,ge,ve.data):R.texSubImage3D(Pt,Et,Dt,de,Ae,Lt,bt,It,ge,Oe,ve):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Et,Dt,de,Lt,bt,ge,Oe,ve.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Et,Dt,de,ve.width,ve.height,ge,ve.data):R.texSubImage2D(R.TEXTURE_2D,Et,Dt,de,Lt,bt,ge,Oe,ve);g.pixelStorei(R.UNPACK_ROW_LENGTH,We),g.pixelStorei(R.UNPACK_IMAGE_HEIGHT,oe),g.pixelStorei(R.UNPACK_SKIP_PIXELS,rn),g.pixelStorei(R.UNPACK_SKIP_ROWS,En),g.pixelStorei(R.UNPACK_SKIP_IMAGES,Zn),Et===0&&U.generateMipmaps&&R.generateMipmap(Pt),g.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){Y=0,q=0,at=null,g.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const ji=[16739179,16763196,4054167,5090295,11832575,16748487];function ta(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"));const s=new Ii(n);return s.colorSpace=Ke,s}function ro(i,t,e){const n=ta(64,8,s=>{s.fillStyle=i,s.fillRect(0,0,64,8),s.fillStyle=t,s.fillRect(0,0,32,8)});return n.wrapS=1e3,n.repeat.x=e,n}const je=(i,t={})=>new Qr({color:i,...t});function m_(i){let t=i;return()=>(t=t*16807%2147483647,t/2147483647)}const $r=[{name:"봄 놀이공원",sky:"linear-gradient(#3d9df0 0%, #8fd3ff 48%, #e3f6ff 78%, #bdeeb0 100%)",ground:9429116,path:16771248,wash:[16777215,0],cloud:16777215,sun:{color:16777215,size:90,angle:.55,height:120},rainbow:!0,flowers:!0,hemi:[16777215,10937249,2.1],dir:[16774102,1.6],ambient:"petal",fireworks:!1},{name:"노을 놀이공원",sky:"linear-gradient(#5b4b9e 0%, #ff8e72 46%, #ffd08a 78%, #c9d68a 100%)",ground:12175722,path:16175002,wash:[16751964,.35],cloud:16765117,sun:{color:16753229,size:130,angle:-.3,height:38},rainbow:!1,flowers:!0,hemi:[16767416,13213808,1.9],dir:[16751964,1.8],ambient:"firefly",fireworks:!1},{name:"별빛 밤 축제",sky:"linear-gradient(#0b1033 0%, #1d2b6b 55%, #3a4a9c 84%, #2c5a4a 100%)",ground:3107669,path:9406136,wash:[2572427,.55],cloud:5924520,sun:{color:15265535,size:55,angle:.5,height:110},rainbow:!1,flowers:!0,hemi:[11452671,2771546,1.7],dir:[13621503,1.1],ambient:"star",fireworks:!0},{name:"눈 내리는 겨울",sky:"linear-gradient(#7fb2e6 0%, #cfe6ff 55%, #f4fbff 80%, #ffffff 100%)",ground:16055295,path:13886192,wash:[16777215,.82],cloud:16777215,sun:{color:16777215,size:70,angle:.55,height:120},rainbow:!1,flowers:!1,hemi:[16777215,14675711,2.2],dir:[16777215,1.3],ambient:"snow",fireworks:!1},{name:"달나라 우주",sky:"linear-gradient(#070616 0%, #1b1147 50%, #4a2a7a 85%, #6b4aa0 100%)",ground:9142208,path:12169440,wash:[8019920,.75],cloud:4865418,sun:{color:10217471,size:120,angle:-.45,height:95},rainbow:!0,flowers:!1,hemi:[13944575,4864634,1.8],dir:[16770815,1.3],ambient:"star",fireworks:!0}];function g_(i){const t=m_(7),e=new ue,n=new Nn,s=new yn,r=new Zt,a=[],o=[],l=(X,Q,R=0)=>new P(Math.sin(X)*Q,R,-Math.cos(X)*Q),c=new we(new Vo(220,48).rotateX(-Math.PI/2),je(9429116));i.add(c);const u=new we(new cr(5,70).rotateX(-Math.PI/2),je(16771248));u.position.set(0,.02,-42),i.add(u);const d=new $e(new Cn(1,24,14),je(16777215),11),h=[7984778,6539647,10216331,5421434];for(let X=0;X<11;X++){const Q=-1.5+X/10*3+(t()-.5)*.1,R=85+X%3*22,At=20+t()*16;e.compose(l(Q,R,-At*.5),n,new P(At*1.7,At,At)),d.setMatrixAt(X,e),d.setColorAt(X,r.set(h[X%h.length])),a.push(r.clone())}i.add(d);const p=30,_=new $e(new Je(.22,.3,1.6,6),je(10251071),p),S=new $e(new qo(1,1),je(16777215,{flatShading:!0}),p*2),m=[3978097,3123302,5818747,16752331,4635018];for(let X=0;X<p;X++){const R=(X%2?1:-1)*(.22+t()*1.25),At=26+t()*42,Rt=1+t()*.9,w=l(R,At);e.compose(w.clone().setY(.8*Rt),n,new P(Rt,Rt,Rt)),_.setMatrixAt(X,e);const g=m[Math.floor(t()*m.length)];e.compose(w.clone().setY(2.3*Rt),n,new P(1.5*Rt,1.4*Rt,1.5*Rt)),S.setMatrixAt(X*2,e),S.setColorAt(X*2,r.set(g)),o.push(r.clone()),e.compose(w.clone().add(new P(.5*Rt,3.3*Rt,.2)),n,new P(Rt,Rt,Rt)),S.setMatrixAt(X*2+1,e),S.setColorAt(X*2+1,r.set(g).offsetHSL(0,0,.05)),o.push(r.clone())}i.add(_,S);const f=90,E=new $e(new Cn(.16,6,5),je(16777215),f);for(let X=0;X<f;X++){const Q=(t()-.5)*2.2,R=6+t()*24,At=l(Q,R,.14);Math.abs(At.x)<4&&(At.x+=Math.sign(At.x||1)*4),e.compose(At,n,new P(1,.7,1)),E.setMatrixAt(X,e),E.setColorAt(X,r.set(X%5===0?16777215:ji[X%ji.length]))}i.add(E);const A=new Si(new oi({map:ta(256,256,X=>{const Q=X.createRadialGradient(128,128,0,128,128,128);Q.addColorStop(0,"rgba(255,255,240,1)"),Q.addColorStop(.28,"rgba(255,236,130,1)"),Q.addColorStop(.36,"rgba(255,225,110,0.45)"),Q.addColorStop(1,"rgba(255,225,110,0)"),X.fillStyle=Q,X.fillRect(0,0,256,256)}),depthWrite:!1,transparent:!0}));A.position.copy(l(.55,190,120)),A.scale.setScalar(90),i.add(A);const v=new we(new Yo(62,80,64,1,0,Math.PI),new bi({map:ta(512,512,X=>{["#ff6b6b","#ff9f43","#ffd23f","#3ddc97","#4dabf7","#b48cff"].forEach((R,At)=>{X.beginPath(),X.arc(256,256,253-At*9.6,0,Math.PI*2),X.fillStyle=R,X.fill()})}),transparent:!0,opacity:.6,depthWrite:!1,side:2}));v.position.set(-30,-6,-170),i.add(v);const y=new $e(new Cn(1,12,8),new bi({color:16777215}),40);for(let X=0;X<40;X++){const Q=Math.floor(X/4),R=Q/10*Math.PI*2+.3,At=110+Q%3*25,Rt=5+t()*5,w=X%4-1.5;e.compose(l(R,At,42+Q%4*9+Math.abs(w)*-2).add(new P(w*7,0,0)),n,new P(Rt*1.5,Rt*.75,Rt)),y.setMatrixAt(X,e)}const b=new li().add(y);i.add(b);const L=new P(-44,21,-82),x=17,T=new li;T.add(new we(new Ei(x,.45,8,48),je(16735631))),T.add(new we(new Ei(x*.45,.25,6,32),je(16765503)));const C=10,D=new $e(new Je(.16,.16,x,5),je(16777215),C),O=new $e(new Cn(1.9,12,8),je(16777215),C);for(let X=0;X<C;X++){const Q=X/C*Math.PI*2,R=new P(Math.cos(Q),Math.sin(Q),0);e.compose(R.clone().multiplyScalar(x/2),n.setFromEuler(s.set(0,0,Q-Math.PI/2)),new P(1,1,1)),D.setMatrixAt(X,e),e.compose(R.multiplyScalar(x),n.identity(),new P(1,.85,1)),O.setMatrixAt(X,e),O.setColorAt(X,r.set(ji[X%ji.length]))}T.add(D,O),T.position.copy(L),T.rotation.y=.35,i.add(T);const z=new $e(new Je(.5,.7,24,6),je(8228822),2);for(let X=0;X<2;X++){const Q=X?.32:-.32;e.compose(L.clone().add(new P(Math.sin(Q)*11,-11,0)),n.setFromEuler(s.set(0,0,-Q)),new P(1,1,1)),z.setMatrixAt(X,e)}n.identity(),i.add(z);const N=[{p:new P(36,0,-62),s:1},{p:new P(60,0,-92),s:1.35},{p:new P(-22,0,-70),s:.7}],k=new $e(new lr(9,7,20,1,!0),new Qr({map:ro("#ff5d5d","#fff8e7",10),side:2}),N.length),Y=new $e(new Je(8.4,8.4,5,20,1,!0),new Qr({map:ro("#ffd23f","#fff8e7",10),side:2}),N.length),q=new $e(new Cn(.8,8,6),je(16765503),N.length);N.forEach(({p:X,s:Q},R)=>{const At=new P(Q,Q,Q);e.compose(X.clone().setY(8.5*Q),n,At),k.setMatrixAt(R,e),e.compose(X.clone().setY(2.5*Q),n,At),Y.setMatrixAt(R,e),e.compose(X.clone().setY(12.3*Q),n,At),q.setMatrixAt(R,e)}),i.add(k,Y,q);const at=new Ee;at.setAttribute("position",new ce([-.5,0,0,.5,0,0,0,-1.1,0],3)),at.computeVertexNormals();const $=[{from:new P(-34,10,-50),to:new P(-5,11.5,-64)},{from:new P(5,11.5,-64),to:new P(34,10,-50)}],tt=14,it=new $e(at,new bi({color:16777215,side:2}),tt*$.length),Nt=[];$.forEach(({from:X,to:Q},R)=>{for(let At=0;At<tt;At++){const Rt=(At+.5)/tt,w=X.clone().lerp(Q,Rt);w.y-=Math.sin(Rt*Math.PI)*2.2,Nt.push(w),it.setColorAt(R*tt+At,r.set(ji[At%ji.length]))}}),i.add(it);const Ct=new $e(new Je(.14,.18,13,6),je(16775399),4);[$[0].from,$[0].to,$[1].from,$[1].to].forEach((X,Q)=>{e.compose(new P(X.x,X.y/2,X.z),n,new P(1,X.y/13,1)),Ct.setMatrixAt(Q,e)}),i.add(Ct);const ae=3,Kt=new $e(new Cn(1,16,12),new Qr({map:ro("#ffffff","#ffd9a0",6)}),ae),ee=new $e(new ms(.5,.4,.5),je(11104319),ae),K=[{a:-.95,d:120,y:52,s:8,c:16739179},{a:.35,d:170,y:105,s:7,c:5090295},{a:1.05,d:110,y:44,s:7,c:11832575}];K.forEach((X,Q)=>Kt.setColorAt(Q,r.set(X.c))),i.add(Kt,ee);const j=150,pt=new Float32Array(j*3),Gt=new Float32Array(j*3),Tt=new Float32Array(j),Wt=new Ee;Wt.setAttribute("position",new tn(Gt,3));const ie=new Go({size:.3,transparent:!0,alphaTest:.05,depthWrite:!1,map:ta(64,64,X=>{const Q=X.createRadialGradient(32,32,0,32,32,32);Q.addColorStop(0,"rgba(255,255,255,1)"),Q.addColorStop(.5,"rgba(255,255,255,0.9)"),Q.addColorStop(1,"rgba(255,255,255,0)"),X.fillStyle=Q,X.fillRect(0,0,64,64)})}),nt=new hu(Wt,ie);nt.frustumCulled=!1,i.add(nt);let rt="none";const lt={none:{color:16777215,size:.1},petal:{color:16758741,size:.36},snow:{color:16777215,size:.32},firefly:{color:16773754,size:.3},star:{color:16777215,size:2.8}},ct=()=>{for(let X=0;X<j;X++){Tt[X]=Math.random();let Q;if(rt==="star"){const R=.15+Math.random()*1.2;Q=l((Math.random()-.5)*3.6,Math.cos(R)*240,Math.sin(R)*240)}else Q=new P((Math.random()-.5)*56,Math.random()*24,-6-Math.random()*42);pt.set([Q.x,Q.y,Q.z],X*3)}Gt.set(pt),ie.color.set(lt[rt].color),ie.size=lt[rt].size,ie.opacity=1,nt.visible=rt!=="none",Wt.attributes.position.needsUpdate=!0},ft=X=>{if(rt==="none")return;if(rt==="star"){ie.opacity=.75+Math.sin(X*2.2)*.25;return}const Q=rt==="snow"?1.6:rt==="petal"?1:0;for(let R=0;R<j;R++){const At=R*3,Rt=Tt[R];Q?(Gt[At]=pt[At]+Math.sin(X*.8+Rt*20)*.9,Gt[At+1]=((pt[At+1]-X*Q*(.6+Rt*.8))%24+24)%24):(Gt[At]=pt[At]+Math.sin(X*.5+Rt*30)*2,Gt[At+1]=.8+pt[At+1]*.3+Math.sin(X*.7+Rt*17)*.8)}Q||(ie.opacity=.65+Math.sin(X*3)*.35),Wt.attributes.position.needsUpdate=!0},Vt=new P,Ot=new P;return{setTheme(X){const Q=$r[(X%$r.length+$r.length)%$r.length];c.material.color.set(Q.ground),u.material.color.set(Q.path);const R=new Zt(Q.wash[0]);return a.forEach((At,Rt)=>d.setColorAt(Rt,r.copy(At).lerp(R,Q.wash[1]))),o.forEach((At,Rt)=>S.setColorAt(Rt,r.copy(At).lerp(R,Q.wash[1]))),d.instanceColor.needsUpdate=!0,S.instanceColor.needsUpdate=!0,y.material.color.set(Q.cloud),A.material.color.set(Q.sun.color),A.scale.setScalar(Q.sun.size),A.position.copy(l(Q.sun.angle,190,Q.sun.height)),v.visible=Q.rainbow,E.visible=Q.flowers,rt=Q.ambient,ct(),Q},update(X){ft(X),b.rotation.y=X*.004,T.rotation.z=X*.12,K.forEach((Q,R)=>{Vt.copy(l(Q.a+X*.004*(R%2?1:-1),Q.d,Q.y+Math.sin(X*.3+R*2)*2)),e.compose(Vt,n.identity(),Ot.set(Q.s,Q.s*1.15,Q.s)),Kt.setMatrixAt(R,e),Vt.y-=Q.s*1.5,e.compose(Vt,n,Ot.setScalar(Q.s*.55)),ee.setMatrixAt(R,e)}),Kt.instanceMatrix.needsUpdate=!0,ee.instanceMatrix.needsUpdate=!0,Nt.forEach((Q,R)=>{e.compose(Q,n.setFromEuler(s.set(Math.sin(X*3+R*.7)*.25,0,0)),Ot.setScalar(1.5)),it.setMatrixAt(R,e)}),it.instanceMatrix.needsUpdate=!0}}}const ao={"skin.basic":{body:16735581,barrel:16765503,accent:4054167,grip:2832999},"skin.mini":{body:16755021,barrel:16774374,accent:7651580,grip:6044928},"skin.ocean":{body:3120127,barrel:14939903,accent:6087142,grip:1194603},"skin.berry":{body:16744118,barrel:16773366,accent:16731501,grip:10886733},"skin.forest":{body:3120708,barrel:14218658,accent:9234842,grip:6044190},"skin.galaxy":{body:6241732,barrel:2275535,accent:16221100,grip:1708083,glow:.25},"skin.gold":{body:16763196,barrel:16774079,accent:16749099,grip:6044928,metal:.75},"skin.rainbow":{body:16735581,barrel:16777215,accent:4054167,grip:2832999,rainbow:!0},"skin.cannon":{body:3422784,barrel:16739179,accent:16766011,grip:2172201,metal:.5},"skin.dragon":{body:16766011,barrel:16749099,accent:9926138,grip:8003359,metal:.85,rainbow:!0,glow:.45,aura:1}};function __(){const i=new li,t=(v,y={})=>new Zr({color:v,roughness:.35,metalness:.05,...y}),e=(v,y,b,L,x)=>{const T=new we(v,y);return T.position.set(b,L,x),i.add(T),T},n=v=>v.rotateX(Math.PI/2),s=t(16735581),r=t(16765503),a=t(4054167),o=t(2832999),l=t(16777215);e(n(new ss(.1,.42,6,14)),s,0,0,0),e(n(new Je(.105,.105,.05,16)),l,0,0,-.12),e(n(new Je(.105,.105,.05,16)),l,0,0,.14),e(n(new Je(.05,.065,.42,14)),r,0,.02,-.5),e(n(new Je(.075,.06,.09,14)),a,0,.02,-.72),e(new Ei(.07,.018,8,18),l,0,.02,-.765);const c=e(n(new ss(.045,.14,4,10)),a,0,-.09,-.42);e(new ss(.115,.1,6,14),t(12577279,{transparent:!0,opacity:.45,roughness:.1}),0,.2,.06);const u=e(new Cn(.095,14,10),t(3120127,{roughness:.15}),0,.17,.06);e(new Je(.06,.06,.04,14),r,0,.345,.06);const d=e(new ss(.055,.18,4,10),o,0,-.2,.2);d.rotation.x=.35,e(new Ei(.06,.014,6,14,Math.PI),o,0,-.11,.05).rotation.set(0,Math.PI/2,Math.PI);const p=e(new Ei(.03,.01,6,14),l,0,.115,-.3);p.rotation.y=0;const _=new xu;for(let v=0;v<10;v++){const y=v%2?.022:.05,b=v/10*Math.PI*2+Math.PI/2;v===0?_.moveTo(Math.cos(b)*y,Math.sin(b)*y):_.lineTo(Math.cos(b)*y,Math.sin(b)*y)}const S=new $o(_,{depth:.012,bevelEnabled:!1}).rotateY(-Math.PI/2);e(S,r,-.098,.01,.02);const m=(()=>{const v=document.createElement("canvas");v.width=v.height=128;const y=v.getContext("2d"),b=y.createRadialGradient(64,64,4,64,64,64);return b.addColorStop(0,"rgba(255,255,255,0.95)"),b.addColorStop(.3,"rgba(255,220,120,0.6)"),b.addColorStop(1,"rgba(255,120,60,0)"),y.fillStyle=b,y.fillRect(0,0,128,128),new Ii(v)})(),f=new Si(new oi({map:m,transparent:!0,depthWrite:!1,depthTest:!1,opacity:.9}));f.position.set(0,.02,-.8),f.visible=!1,i.add(f);const E=[];for(let v=0;v<4;v++){const y=e(new lr(.03,.12,6),a,0,.13,.12-v*.12);y.rotation.x=-.5,y.visible=!1,E.push(y)}let A=ao["skin.basic"];return{group:i,muzzle:new P(0,.02,-.78),setSkin(v){const y=A=ao[v]??ao["skin.basic"];s.color.set(y.body),r.color.set(y.barrel),a.color.set(y.accent),o.color.set(y.grip);for(const b of[s,r,a])b.metalness=y.metal??.05,b.emissive.set(y.glow?b.color:0),b.emissiveIntensity=y.glow??0;f.visible=!!y.aura;for(const b of E)b.visible=!!y.aura},animate(v,y){if(A.rainbow){const b=A.aura?.35:.12;if(s.color.setHSL(y*b%1,.9,A.aura?.55:.62),a.color.setHSL((y*b+.33)%1,.8,.58),A.aura||r.color.setHSL((y*b+.66)%1,.9,.7),A.glow)for(const L of[s,a])L.emissive.copy(L.color)}A.aura&&(f.scale.setScalar(.28+Math.sin(y*6)*.05+v*.4),f.material.rotation=y*2,f.material.opacity=.7+Math.sin(y*9)*.2),c.position.z=-.42+v*.1,u.position.y=.17+Math.sin(y*2.2)*.008-v*.015,u.scale.set(1+v*.08,1-v*.1,1+v*.08)}}}const ri=new P(0,1.6,0),vi=[16739179,16763196,4054167,5090295,11832575,16752451],ts=320,x_=8,v_='"Jua", "Malgun Gothic", "Apple SD Gothic Neo", sans-serif';function M_(i){const t=document.createElement("canvas");t.width=t.height=192;const e=t.getContext("2d");e.font=`150px ${v_}`,e.textAlign="center",e.textBaseline="middle",e.lineJoin="round",e.lineWidth=22,e.strokeStyle="#ffffff",e.strokeText(i,96,104),e.fillStyle="#1d2b53",e.fillText(i,96,104);const n=new Ii(t);return n.colorSpace=Ke,n}function Ic(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,20,64,64,64);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.55,"rgba(255,244,150,0.95)"),e.addColorStop(1,"rgba(255,244,150,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Ii(i)}function S_(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.7,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Ii(i)}function y_(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,8,64,64,64);return e.addColorStop(0,"rgba(255,255,255,0.95)"),e.addColorStop(.45,"rgba(170,228,255,0.7)"),e.addColorStop(.75,"rgba(120,205,255,0.35)"),e.addColorStop(1,"rgba(120,205,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Ii(i)}const b_=new Nn,E_=new yn,T_=.2;function oo(i,t=64){const e=document.createElement("canvas");e.width=e.height=t;const n=e.getContext("2d");n.font=`${Math.round(t*.78)}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(i,t/2,t*.56);const s=new Ii(e);return s.colorSpace=Ke,s}const qr={"pop.drop":{count:1,power:1,size:.36},"pop.star":{emoji:"⭐",count:.8,power:1.1,size:.75},"pop.heart":{emoji:"💖",count:.8,power:1.1,size:.75},"pop.flower":{emoji:"🌸",count:1,power:.8,size:.7},"pop.confetti":{count:1.6,power:1.3,party:!0,size:.4},"pop.firework":{count:2.3,power:1.8,party:!0,size:.44,ring:!0},"pop.galaxy":{emoji:"✨",count:2.4,power:1.5,size:.8,ring:!0,fireworks:1},"pop.dragon":{emoji:"🔥",count:3,power:2.3,party:!0,size:.85,ring:!0,fireworks:3,shake:.9}},lo={"stream.water":{color:13955583,width:1},"stream.lemon":{color:16773754,width:1},"stream.berry":{color:16757713,width:1},"stream.mint":{color:10484976,width:1.15},"stream.lava":{color:16742938,width:1.7},"stream.rainbow":{color:16777215,width:1.2,rainbow:!0},"stream.dragon":{color:16777215,width:2.1,rainbow:!0,sparkle:!0}},w_=24;class A_{portrait=!1;balloons=[];bonus=null;speaker=null;renderer;scene=new hd;camera=new on(58,1,.1,400);canvas;raycaster=new gf;time=0;yaw=0;pitch=0;basePitch=0;yawSpread=.7;pitchMin=.02;pitchMax=.5;radius=1.25;sphereGeo=new Cn(1,24,18);knotGeo=new lr(.14,.2,8);stringGeo=new Je(.012,.012,1.6,4);balloonMats=vi.map(t=>new Zr({color:t,roughness:.3,metalness:.05,emissive:t,emissiveIntensity:.22}));stringMat=new bi({color:16777215});haloMat=new oi({map:Ic(),depthWrite:!1,transparent:!0});gunModel=__();gun=this.gunModel.group;world;hemi=new uf(16777215,10937249,2.1);sunLight=new ff(16774102,1.6);nightShow=!1;drift=1;popId="pop.drop";stream=lo["stream.water"];gunSize=1;rings=[];ringLife=[];stickers=[];pMat;pTextures=new Map;goldMat=new Zr({color:16765503,roughness:.2,metalness:.3,emissive:9067008});speakerMat=new Zr({color:16777215,roughness:.35,emissive:14674431,emissiveIntensity:.3});fireworks=[];recoil=0;aimNdc=new ut;aimHold=0;gunQuat=new Nn;gunRest=new P;kick=0;shaking=0;beam;shotT=-1;shotEnd=new P;splash;splashLife=0;pGeo=new Ee;pPos=new Float32Array(ts*3);pCol=new Float32Array(ts*3);pVel=new Float32Array(ts*3);pLife=new Float32Array(ts);pNext=0;constructor(t){this.canvas=t,this.renderer=new p_({canvas:t,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.camera.rotation.order="YXZ",this.camera.position.copy(ri),this.scene.add(this.camera),this.sunLight.position.set(6,12,8),this.scene.add(this.hemi,this.sunLight),this.world=g_(this.scene),this.camera.add(this.gun),this.beam=new we(new Je(.11,.02,1,10,1,!0).rotateX(Math.PI/2),new bi({color:13955583,transparent:!0,opacity:.9,depthWrite:!1})),this.beam.visible=!1,this.beam.frustumCulled=!1,this.scene.add(this.beam),this.splash=new Si(new oi({map:y_(),transparent:!0,depthWrite:!1,depthTest:!1})),this.splash.position.copy(this.gunModel.muzzle),this.splash.visible=!1,this.gun.add(this.splash);const e=new oi({map:Ic(),transparent:!0,depthWrite:!1,opacity:0});for(let s=0;s<4;s++){const r=new Si(e.clone());r.visible=!1,this.scene.add(r),this.rings.push(r),this.ringLife.push(0)}this.pPos.fill(-999),this.pGeo.setAttribute("position",new tn(this.pPos,3)),this.pGeo.setAttribute("color",new tn(this.pCol,3)),this.pTextures.set("pop.drop",S_()),this.pMat=new Go({size:.36,map:this.pTextures.get("pop.drop"),vertexColors:!0,transparent:!0,alphaTest:.2,depthWrite:!1});const n=new hu(this.pGeo,this.pMat);n.frustumCulled=!1,this.scene.add(n),this.resize()}resize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(t,e,!1);const n=t/e;this.portrait=n<1,this.camera.aspect=n,this.camera.fov=this.portrait?72:58,this.camera.updateProjectionMatrix();const s=Ms.degToRad(this.camera.fov/2),r=Math.atan(Math.tan(s)*n);this.yawSpread=Ms.clamp(r*.82,.2,.8),this.pitchMax=this.portrait?.6:.46,this.basePitch=(this.pitchMin+this.pitchMax)/2+s*.06,this.radius=this.portrait?.88:1.25,this.applyGunSize(),this.gun.position.copy(this.gunRest),this.yaw=0,this.pitch=this.basePitch;for(const a of this.balloons)this.place(a);this.speaker&&this.placeSpeaker(this.speaker)}placeSpeaker(t){const e=-this.yawSpread*(this.portrait?.8:.95),n=this.pitchMin-.1,s=11;t.base.set(Math.sin(e)*Math.cos(n)*s,ri.y+Math.sin(n)*s,-Math.cos(e)*Math.cos(n)*s),t.group.position.copy(t.base)}setSpeaker(t){if(!t){this.speaker&&this.remove(this.speaker);return}if(this.speaker)return;const e=this.spawn("🔊");this.balloons=this.balloons.filter(n=>n!==e),e.group.children[1].material=this.speakerMat,e.group.children[2].material=this.speakerMat,e.label.material.map?.dispose(),e.label.material.map=oo("🔊",192),e.label.material.needsUpdate=!0,e.label.scale.setScalar(1.6),e.halo.visible=!0,e.color=13955583,e.size=.85,e.speaker=!0,e.phase=0,this.placeSpeaker(e),this.speaker=e}nudge(t){t.wobble=.5,t.age=.2,this.burst(t.group.position,10217471,12,.8),this.ring(t.group.position,13955583)}setTheme(t){const e=this.world.setTheme(t);return this.hemi.color.set(e.hemi[0]),this.hemi.groundColor.set(e.hemi[1]),this.hemi.intensity=e.hemi[2],this.sunLight.color.set(e.dir[0]),this.sunLight.intensity=e.dir[1],this.nightShow=e.fireworks,e}setDrift(t){this.drift=t}applyGunSize(){this.gun.scale.setScalar((this.portrait?.38:.5)*this.gunSize);const t=Math.max(0,this.gunSize-1);this.gunRest.set((this.portrait?.16:.34)+t*.3,-.34-t*.36,-.8)}setLoadout(t,e=1){this.gunModel.setSkin(t.skin),this.gunSize=e,this.applyGunSize(),this.stream=lo[t.stream]??lo["stream.water"],this.popId=qr[t.pop]?t.pop:"pop.drop";const n=qr[this.popId],s=n.emoji?this.popId:"pop.drop";this.pTextures.has(s)||this.pTextures.set(s,oo(n.emoji)),this.pMat.map=this.pTextures.get(s),this.pMat.size=n.size,this.pMat.needsUpdate=!0,this.beam.material.color.set(this.stream.color)}setStickers(t){for(const n of this.stickers)this.scene.remove(n.sprite),n.sprite.material.map?.dispose(),n.sprite.material.dispose();this.stickers=[];const e=[...new Set(t)].slice(0,w_);e.forEach((n,s)=>{const r=[...n].reduce((d,h)=>(d*31+h.codePointAt(0))%9973,7),a=(s/Math.max(1,e.length)*2-1)*1.15+(r%100/100-.5)*.25,o=5.5+r%7*.8,l=new Si(new oi({map:oo(n),transparent:!0,depthWrite:!1})),c=1.1+r%5*.12;l.scale.set(c,c,1);const u=new P(Math.sin(a)*o,c*.5+.05,-Math.cos(a)*o);l.position.copy(u),this.scene.add(l),this.stickers.push({sprite:l,base:u,phase:r})})}ring(t,e){const n=this.ringLife.findIndex(r=>r<=0);if(n<0)return;const s=this.rings[n];s.position.copy(t),s.material.color.set(e),s.visible=!0,this.ringLife[n]=1}aim(t){this.aimNdc.set(t.x,t.y),this.aimHold=1.2}shake(t){this.shaking=Math.max(this.shaking,t)}orientGun(t){const e=Math.tan(Ms.degToRad(this.camera.fov/2)),n=new P(this.aimNdc.x*e*this.camera.aspect,this.aimNdc.y*e,-1).multiplyScalar(13),s=new Nn().setFromRotationMatrix(new ue().lookAt(this.gunRest,n,Re.DEFAULT_UP));this.gunQuat.slerp(s,t)}look(t,e){const n=this.yawSpread+.25;this.yaw=Ms.clamp(this.yaw+t,-n,n),this.pitch=Ms.clamp(this.pitch+e,this.pitchMin-.2,this.pitchMax+.2)}place(t){const e=this.radius*2.4;let n=new P,s=-1;for(let r=0;r<40;r++){const a=(Math.random()*2-1)*this.yawSpread,o=this.pitchMin+Math.random()*(this.pitchMax-this.pitchMin),l=12.5+Math.random()*3,c=new P(Math.sin(a)*Math.cos(o)*l,ri.y+Math.sin(o)*l,-Math.cos(a)*Math.cos(o)*l),u=c.clone().sub(ri).setLength(14);let d=1/0;for(const h of this.speaker?[...this.balloons,this.speaker]:this.balloons)h!==t&&(d=Math.min(d,h.base.clone().sub(ri).setLength(14).distanceTo(u)));if(d>s&&(s=d,n=c),d>=e)break}t.base.copy(n),t.group.position.copy(n)}spawn(t){const e=Math.floor(Math.random()*vi.length),n=new li,s=new we(this.sphereGeo,this.balloonMats[e]);s.scale.set(1,1.12,1);const r=new we(this.knotGeo,this.balloonMats[e]);r.position.y=-1.18;const a=new we(this.stringGeo,this.stringMat);a.position.y=-2.05;const o=new Si(new oi({map:M_(t),transparent:!0}));o.scale.setScalar(1.85);const l=new Si(this.haloMat);l.scale.setScalar(3.6),l.visible=!1,n.add(l,s,r,a,o),n.scale.setScalar(.001),this.scene.add(n);const c={ch:t,group:n,base:new P,label:o,halo:l,color:vi[e],phase:Math.random()*Math.PI*2,age:0,wobble:0,hint:!1,size:1,bonus:!1,speaker:!1};return this.place(c),this.balloons.push(c),c}remove(t){t===this.bonus&&(this.bonus=null),t===this.speaker&&(this.speaker=null),this.scene.remove(t.group),t.label.material.map?.dispose(),t.label.material.dispose(),this.balloons=this.balloons.filter(e=>e!==t)}pop(t){const e=qr[this.popId];this.burst(t.group.position,e.emoji?16777215:t.color,Math.round((t.bonus?60:26)*e.count),(t.bonus?1.8:1)*e.power,e.party),e.ring&&this.ring(t.group.position,e.party?16777215:t.color),e.fireworks&&this.celebrate(e.fireworks),e.shake&&this.shake(e.shake),this.remove(t)}wobble(t){t.wobble=.45}clearBalloons(){for(const t of this.balloons.slice())this.remove(t);this.bonus&&this.remove(this.bonus)}spawnBonus(){if(this.bonus)return;const t=this.spawn("⭐");this.balloons=this.balloons.filter(e=>e!==t),t.group.children[1].material=this.goldMat,t.group.children[2].material=this.goldMat,t.halo.visible=!0,t.color=16765503,t.size=.72,t.bonus=!0,t.phase=Math.random()<.5?1:-1,this.bonus=t}celebrate(t=7){for(let e=0;e<t;e++){const n=this.yaw+(Math.random()*2-1)*this.yawSpread*1.1,s=this.pitchMin+.1+Math.random()*this.pitchMax,r=16+Math.random()*5;this.fireworks.push({at:this.time+e*.22,pos:new P(Math.sin(-n)*Math.cos(s)*r,ri.y+Math.sin(s)*r,-Math.cos(n)*Math.cos(s)*r)})}}setHint(t){for(const e of this.balloons)e.hint=t!==null&&e.ch===t}targets(){const t=this.balloons.slice();return this.bonus&&t.push(this.bonus),this.speaker&&t.push(this.speaker),t}screenPos(t){this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.updateMatrixWorld();const e=t.group.position.clone().project(this.camera),n=this.canvas.getBoundingClientRect();return{x:n.left+(e.x+1)/2*n.width,y:n.top+(1-e.y)/2*n.height}}fire(t,e){this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.updateMatrixWorld();const n=new ut(t?.x??0,t?.y??0);this.raycaster.setFromCamera(n,this.camera);const{origin:s,direction:r}=this.raycaster.ray;let a=null,o=e;const l=new P;for(const u of this.targets()){l.copy(u.group.position).sub(s);const d=l.dot(r);if(d<=0)continue;const p=Math.sqrt(Math.max(0,l.lengthSq()-d*d))/(this.radius*u.size);p<o&&(o=p,a=u)}const c=a?a.group.position.clone():s.clone().addScaledVector(r,40);return this.aim(n),this.orientGun(1),this.gun.quaternion.copy(this.gunQuat),this.kick=1,this.shotEnd.copy(c),this.shotT=0,this.splashLife=1,this.recoil=1,a||this.burst(c,10217471,6),a}burst(t,e,n,s=1,r=!1){const a=new Zt(e);for(let o=0;o<n;o++){r&&a.set(vi[Math.floor(Math.random()*vi.length)]);const l=this.pNext;this.pNext=(this.pNext+1)%ts,this.pPos.set([t.x,t.y,t.z],l*3);const c=new P(Math.random()-.5,Math.random()-.3,Math.random()-.5).normalize();c.multiplyScalar((2+Math.random()*4)*s),this.pVel.set([c.x,c.y,c.z],l*3),this.pCol.set([a.r,a.g,a.b],l*3),this.pLife[l]=.5+Math.random()*.3}this.pGeo.attributes.color.needsUpdate=!0}update(t){this.time+=t;const e=this.time;this.kick=Math.max(0,this.kick-t*9),this.shaking=Math.max(0,this.shaking-t*5),this.camera.rotation.set(this.pitch+this.kick*.012+Math.sin(e*71)*.004*this.shaking,this.yaw+Math.sin(e*57)*.004*this.shaking,0),this.world.update(e),this.nightShow&&Math.random()<t*.3&&this.celebrate(1),this.stream.rainbow&&this.beam.material.color.setHSL(e*1.5%1,.9,.72);for(let r=0;r<this.rings.length;r++){if(this.ringLife[r]<=0)continue;this.ringLife[r]=Math.max(0,this.ringLife[r]-t*1.8);const a=1-this.ringLife[r],o=this.rings[r];o.scale.setScalar(this.radius*(1.5+a*7)),o.material.opacity=this.ringLife[r]*.9,o.visible=this.ringLife[r]>0}for(const r of this.stickers)r.sprite.position.y=r.base.y+Math.sin(e*1.6+r.phase)*.06,r.sprite.material.rotation=Math.sin(e*1.1+r.phase)*.08;for(;this.fireworks.length&&this.fireworks[0].at<=e;){const r=this.fireworks.shift();this.burst(r.pos,qr[this.popId].emoji?16777215:vi[Math.floor(Math.random()*vi.length)],36,1.6)}if(this.bonus){const r=this.bonus,a=r.age/x_;if(a>=1)this.remove(r);else{const o=r.phase*(a*2-1)*(this.yawSpread+.25),l=this.pitchMax*.8+Math.sin(e*2.2)*.05;r.base.set(Math.sin(o)*Math.cos(l)*11,ri.y+Math.sin(l)*11,-Math.cos(o)*Math.cos(l)*11)}}const n=new P;for(const r of this.targets()){r.age+=t;const a=Math.min(1,r.age/.35);let o=this.radius*r.size*(1-Math.pow(1-a,3))*(1+.12*Math.sin(a*Math.PI));r.hint&&(o*=1+.08*Math.sin(e*7)),r.group.scale.setScalar(Math.max(o,.001)),r.halo.visible=r.hint||r.bonus||r.speaker,r.bonus&&(r.group.rotation.z=Math.sin(e*5)*.15);const l=.45+(this.drift-1)*.3;let c=r.base.x+(r.bonus||r.speaker?0:Math.sin(e*.55*this.drift+r.phase)*l);const u=r.base.y+(r.speaker?Math.sin(e*1.4)*.12:Math.sin(e*.8*this.drift+r.phase*2)*(.35+(this.drift-1)*.15));r.wobble>0&&(r.wobble-=t,c+=Math.sin(e*45)*.3*Math.max(r.wobble,0)),r.group.position.set(c,u,r.base.z),n.copy(ri).sub(r.group.position).normalize(),r.label.position.copy(n).multiplyScalar(1.12)}this.aimHold>0?this.aimHold-=t:this.aimNdc.multiplyScalar(Math.max(0,1-t*4)),this.orientGun(1-Math.exp(-t*20)),this.recoil=Math.max(0,this.recoil-t*5.5);const s=this.recoil*this.recoil;if(this.gun.quaternion.copy(this.gunQuat).multiply(b_.setFromEuler(E_.set(s*.28,0,s*-.05))),this.gun.position.set(this.gunRest.x,this.gunRest.y+Math.sin(e*1.6)*.006-s*.02,this.gunRest.z+s*.13),this.gunModel.animate(this.recoil,e),this.shotT>=0)if(this.shotT+=t/T_,this.shotT>=1)this.shotT=-1,this.beam.visible=!1;else{this.gun.updateWorldMatrix(!0,!1);const r=this.gun.localToWorld(this.gunModel.muzzle.clone()),a=Math.min(1,this.shotT/.45),o=Math.max(0,(this.shotT-.4)/.6),l=r.clone().lerp(this.shotEnd,o),c=r.clone().lerp(this.shotEnd,a);this.beam.position.copy(l).lerp(c,.5),this.beam.lookAt(c);const u=this.stream.width*(.8+.2*this.gunSize);this.beam.scale.set(u,u,Math.max(l.distanceTo(c),.01)),this.beam.visible=!0,this.stream.sparkle&&this.burst(l.clone().lerp(c,Math.random()),16777215,2,.5,!0)}if(this.splashLife>0){this.splashLife=Math.max(0,this.splashLife-t*6);const r=1-this.splashLife;this.splash.visible=this.splashLife>0,this.splash.scale.setScalar(.12+r*.3),this.splash.material.opacity=this.splashLife}for(let r=0;r<ts;r++){if(this.pLife[r]<=0)continue;this.pLife[r]-=t;const a=r*3;if(this.pLife[r]<=0){this.pPos[a+1]=-999;continue}this.pVel[a+1]-=9*t,this.pPos[a]+=this.pVel[a]*t,this.pPos[a+1]+=this.pVel[a+1]*t,this.pPos[a+2]+=this.pVel[a+2]*t}this.pGeo.attributes.position.needsUpdate=!0,this.renderer.render(this.scene,this.camera)}get drawCalls(){return this.renderer.info.render.calls}}const Jo=44032,C_=55203;function ha(i){const t=i.charCodeAt(0);return t>=Jo&&t<=C_}function hi(i){const t=i.charCodeAt(0)-Jo;return[Math.floor(t/588),Math.floor(t%588/28),t%28]}function Mi(i,t,e){return String.fromCharCode(Jo+i*588+t*28+e)}const R_=[[1,5],[3,7],[10,11,15],[19,20],[19,5]],P_=[[4,8],[13,18],[0,2],[4,6],[8,12],[13,17]],L_=[[1,2,24],[4,6],[7,19,20,22,23,25,27],[8,15,9],[16,10],[17,26,18]],I_=[[4,21],[4,16],[1,9]],D_=[[0,1,15],[3,4,16],[7,8,17],[9,10],[12,13,14]];function Is(i,t){const e=[];for(const n of i)if(n.includes(t))for(const s of n)s!==t&&e.push(s);return e}function Uu(i){if(!ha(i))return{strong:[],weak:[]};const[t,e,n]=hi(i),s=new Set,r=new Set;for(const a of Is(R_,e))s.add(Mi(t,a,n));for(const a of Is(L_,n))s.add(Mi(t,e,a));for(const a of Is(P_,e))r.add(Mi(t,a,n));for(const a of Is(I_,n))r.add(Mi(t,e,a));for(const a of Is(D_,t))r.add(Mi(a,e,n));if(n===0)for(const a of[4,21,8])r.add(Mi(t,e,a));else r.add(Mi(t,e,0));s.delete(i),r.delete(i);for(const a of s)r.delete(a);return{strong:[...s],weak:[...r]}}function N_(i,t=Math.random){const e=i.slice();for(let n=e.length-1;n>0;n--){const s=Math.floor(t()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}function U_(i,t,e,n=[],s=Math.random){const r=new Set(t),a=[],o=c=>{for(const u of N_(c,s)){if(a.length>=e)return;r.has(u)||(r.add(u),a.push(u))}},l=i.map(Uu);return o(l.flatMap(c=>c.strong)),o(l.flatMap(c=>c.weak)),o(n),a}const zv={cho:"첫 자음",jung:"모음",jong:"받침"};function Fu(i,t){if(!ha(i)||!ha(t))return["cho","jung","jong"];const e=hi(i),n=hi(t),s=[];return e[0]!==n[0]&&s.push("cho"),e[1]!==n[1]&&s.push("jung"),e[2]!==n[2]&&s.push("jong"),s}const F_=[[0,1,15],[2,3,4],[5,6,16],[7,8,17],[9,10,12,13,14],[11]],O_=[],B_=[[0],[1,2,24,3],[4,5,6],[7,19,20,22,23,25,27],[8,9,10,11,12,13,14,15],[16,17,18,26],[21]];function co(i,t,e){return t===e||i.some(n=>n.includes(t)&&n.includes(e))}function Gv(i,t){const e=Fu(i,t);if(e.length!==1)return e.length===0;const[n,s]=[hi(i),hi(t)];return e[0]==="cho"?co(F_,n[0],s[0]):e[0]==="jung"?co(O_,n[1],s[1]):co(B_,n[2],s[2])}function Vv(i,t=10){const{strong:e,weak:n}=Uu(i);return[...new Set([...e,...n])].slice(0,t)}const k_={9:[8,0],10:[8,1],11:[8,20],14:[13,4],15:[13,5],16:[13,20],19:[18,20]};function Hv(i,t){if(Fu(i,t).join()!=="jung")return!1;const e=hi(i)[1],n=hi(t)[1];return(k_[e]??[]).includes(n)}const $n=3,z_=/[가-힣ㄱ-ㅎㅏ-ㅣA-Za-z0-9]/;class Mo{text;cells;hearts=$n;misses=0;wrong=[];constructor(t){this.text=t.trim().replace(/\s+/g," "),this.cells=[...this.text].map(e=>e===" "?{ch:e,kind:"space",filled:!0}:z_.test(e)?{ch:e,kind:"target",filled:!1}:{ch:e,kind:"auto",filled:!0})}blankOut(t,e=Math.random){const n=this.cells.filter(a=>a.kind==="target"),s=n.map(a=>({c:a,key:(ha(a.ch)&&hi(a.ch)[2]!==0?1:0)+e()})).sort((a,o)=>o.key-a.key),r=new Set(s.slice(0,Math.max(1,t)).map(a=>a.c));for(const a of n)r.has(a)||(a.filled=!0,a.given=!0)}restorePartial(t){for(const e of this.cells)e.kind==="target"&&(e.filled=!1,e.given=!1);for(const e of t.given)this.cells[e]?.kind==="target"&&(this.cells[e].filled=!0,this.cells[e].given=!0);for(const e of t.filled)this.cells[e]?.kind==="target"&&(this.cells[e].filled=!0);this.hearts=Math.min($n,Math.max(0,t.hearts)),this.misses=Math.max(0,t.misses),this.wrong=t.wrong.slice()}get partial(){const t=[],e=[];return this.cells.forEach((n,s)=>{n.kind!=="target"||!n.filled||(n.given?e:t).push(s)}),{filled:t,given:e,hearts:this.hearts,misses:this.misses,wrong:this.wrong.slice()}}get failed(){return this.misses>=$n}get nextIndex(){return this.cells.findIndex(t=>!t.filled)}get nextChar(){const t=this.nextIndex;return t<0?null:this.cells[t].ch}get done(){return this.nextIndex<0}get hintMode(){return this.hearts<=0}get targetCount(){return this.cells.filter(t=>t.kind==="target").length}upcoming(t){return this.cells.filter(e=>!e.filled).slice(0,t).map(e=>e.ch)}get stars(){return this.hintMode?1:this.misses===0?3:this.misses<=2?2:1}penalize(){this.misses++,this.hearts=Math.max(0,this.hearts-1)}hit(t){const e=this.nextIndex;return e<0?{ok:!1,index:-1}:this.cells[e].ch===t?(this.cells[e].filled=!0,{ok:!0,index:e}):(this.misses++,this.hearts=Math.max(0,this.hearts-1),this.wrong.includes(t)||this.wrong.push(t),{ok:!1,index:e})}}class Ou{questions;index=-1;score=0;combo=0;round;results=[];blanks;constructor(t,e=()=>0){this.questions=t,this.blanks=e}get wrongShots(){return this.results.reduce((t,e)=>t+e.misses,0)}get finished(){return this.index>=this.questions.length}get totalStars(){return this.results.reduce((t,e)=>t+e.stars,0)}restore(t){return!Number.isInteger(t.index)||t.index<0||t.index>=this.questions.length||t.results.length!==t.index?!1:(this.index=t.index-1,this.score=Math.max(0,t.score),this.combo=0,this.results=t.results.map(e=>({...e,wrong:e.wrong.slice()})),!0)}nextQuestion(){if(this.index++,this.index>=this.questions.length)return!1;this.round=new Mo(this.questions[this.index]);const t=this.blanks(this.round.targetCount);return t>0&&this.round.blankOut(t),!0}penalize(){this.round.penalize(),this.combo=0}hit(t){const e=this.round.hit(t);let n=0;e.ok?(n=10+Math.min(10,this.combo*2),this.combo++,this.score+=n):this.combo=0;const s=this.round.done;if(e.ok&&s){const{text:r,stars:a,misses:o,wrong:l}=this.round;this.results.push({text:r,stars:a,misses:o,wrong:l.slice()})}return{...e,points:n,done:s}}}const G_=[{id:"set-7",title:"7회 [4. 감동을 나누어요]",questions:["만화 영화","골고루 잘 먹는구나.","신기한 맷돌","궁궐","쌓여 갔습니다.","움푹하게","인물의 생각","외워서 말한다.","밥을 먹습니다.","차례"]},{id:"set-8",title:"8회 [4. 감동을 나누어요]",questions:["미역도 맛있어.","먹기 싫어했다.","고약한 마음","바닷물","어느 날 아침","맨 나중에","떠오르는 장면","느낌을 말한다.","얼굴을 씻습니다.","감동"]},{id:"set-9",title:"9회 [5. 생각을 키워요]",questions:["책이야.","충전해 놓을게.","금방 뚝 떨어진다.","칭찬해 주셨다.","노력하는 모습","응원해 주고 싶었어.","다람쥐","종이 한 장","수박 한 통","항아리"]},{id:"set-10",title:"10회 [5. 생각을 키워요]",questions:["넘기면 돼.","훌라후프","이리저리 움직였다.","잘 돌리면 좋겠다.","재치 있어.","선생님 말씀","술래잡기","연필 한 자루","신발 한 켤레","꽉 움켜쥐고"]},{id:"set-11",title:"11회 [6. 문장을 읽고 써요]",questions:["영화관","그걸 이제 보았네.","반짝반짝","별이 되고 싶니?","빛날 수 있는 때","꽃향기를 맡습니다.","출동해야 합니다.","숫자를 세었어요.","꼬불꼬불 말았어요.","깨끗하다."]},{id:"set-12",title:"12회 [6. 문장을 읽고 써요]",questions:["눈곱만큼도요!","새로 만들었어.","빛나고 싶니?","여럿이 함께","별자리","위험에 처한 사람들","괜찮은데?","세 개씩 묶었어요.","머리카락을 땋았어요.","하면 안 돼요."]}],Zo="dictation.sets.v1",So="dictation.questions.v1",V_=30,yo=40,H_=40,W_=30,X_=/^\s*(?:제\s*)?\d{1,3}\s*(?:회|회차|급|단계|주차|과)(?:\s|\[|$)/;function $_(i){return[...String(i).replace(/^\s*\d{1,2}\s*(?:[.)번:]\s*|\s+)/,"").replace(/\s+/g," ").trim()].slice(0,H_).join("")}function bo(i){return Bu(i).map($_).filter(e=>/[가-힣A-Za-z0-9]/.test(e)).slice(0,V_)}function Bu(i){const t=i.replace(/^﻿/,"").trim();if(t.startsWith("[")||t.startsWith("{"))try{const e=JSON.parse(t),n=Array.isArray(e)?e:Array.isArray(e?.questions)?e.questions:null;if(n)return n.map(s=>typeof s=="string"?s:String(s?.text??""))}catch{}return t.split(/\r?\n/)}function qs(i){return[...i.replace(/\s+/g," ").trim()].slice(0,W_).join("")}function Dc(){return`custom-${Date.now().toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`}function ku(i,t){const e=i.replace(/^﻿/,"").trim();if(e.startsWith("[")||e.startsWith("{"))try{const s=JSON.parse(e),r=Array.isArray(s)?s:Array.isArray(s?.sets)?s.sets:null;if(r&&r.length&&r.every(a=>a&&typeof a=="object"&&Array.isArray(a.questions)))return r.map((a,o)=>({id:Dc()+o,title:qs(String(a.title??`${t} ${o+1}`)),questions:bo(JSON.stringify(a.questions)),custom:!0})).filter(a=>a.questions.length).slice(0,yo)}catch{}const n=[];for(const s of Bu(e)){if(X_.test(s)){n.push({title:qs(s),lines:[]});continue}n.length||n.push({title:qs(t),lines:[]}),n[n.length-1].lines.push(s)}return n.map((s,r)=>({id:Dc()+r,title:s.title,questions:bo(s.lines.join(`
`)),custom:!0})).filter(s=>s.questions.length).slice(0,yo)}function _a(){try{const i=JSON.parse(localStorage.getItem(Zo)??"null");if(Array.isArray(i))return i.filter(e=>e&&typeof e.id=="string"&&typeof e.title=="string"&&Array.isArray(e.questions)).map(e=>({id:e.id,title:qs(e.title),questions:e.questions.filter(n=>typeof n=="string"),custom:!0})).filter(e=>e.questions.length);const t=JSON.parse(localStorage.getItem(So)??"null");if(Array.isArray(t)&&t.length&&t.every(e=>typeof e=="string")){const e={id:"custom-legacy",title:"내 문제",questions:t,custom:!0};return xa([e]),localStorage.removeItem(So),[e]}}catch{}return[]}function xa(i){try{localStorage.setItem(Zo,JSON.stringify(i.map(({id:t,title:e,questions:n})=>({id:t,title:e,questions:n}))))}catch{}}function tr(){return[...G_,..._a()]}function zu(i){const t=_a();for(const e of i){const n=t.findIndex(s=>s.title===e.title);n>=0?t[n]={...e,id:t[n].id}:t.push(e)}return xa(t.slice(-yo)),i.map(e=>t.find(n=>n.title===e.title)??e)}function q_(i,t,e){const n=_a(),s=n.findIndex(r=>r.id===i);return s<0?null:(n[s]={...n[s],title:qs(t),questions:e},xa(n),n[s])}function Y_(i){xa(_a().filter(t=>t.id!==i))}function K_(){try{localStorage.removeItem(Zo),localStorage.removeItem(So)}catch{}}let Ue=null,Gu=null;function ui(){try{Ue??=new AudioContext,Ue.state==="suspended"&&Ue.resume()}catch{Ue=null}Q_()}function qe(i,t,e,n,s,r=0){if(!Ue)return;const a=Ue.currentTime+r,o=Ue.createOscillator(),l=Ue.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(s,a+t),l.gain.setValueAtTime(n,a),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l).connect(Ue.destination),o.start(a),o.stop(a+t+.02)}let Yr=null;function Ds(i,t,e,n){if(!Ue)return;if(!Yr){Yr=Ue.createBuffer(1,Ue.sampleRate*.5,Ue.sampleRate);const l=Yr.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1}const s=Ue.currentTime,r=Ue.createBufferSource();r.buffer=Yr;const a=Ue.createBiquadFilter();a.type="bandpass",a.Q.value=.9,a.frequency.setValueAtTime(t,s),a.frequency.exponentialRampToValueAtTime(e,s+i);const o=Ue.createGain();o.gain.setValueAtTime(n,s),o.gain.exponentialRampToValueAtTime(1e-4,s+i),r.connect(a).connect(o).connect(Ue.destination),r.start(s),r.stop(s+i+.02)}const Pe={shoot:()=>{Ds(.16,2600,700,.22),qe(170,.11,"sine",.22,55),qe(900,.05,"triangle",.05,300)},pop:(i=0)=>{const t=520*Math.pow(2,Math.min(i,12)/12);qe(t,.12,"square",.06,t*2.6),Ds(.07,3800,1500,.2)},bonus:()=>[784,988,1175,1568].forEach((i,t)=>qe(i,.14,"square",.07,void 0,t*.07)),wrong:()=>qe(210,.2,"sawtooth",.05,130),clear:()=>[523,659,784,1047].forEach((i,t)=>qe(i,.18,"triangle",.12,void 0,t*.11)),roar:()=>{qe(95,.9,"sawtooth",.16,38),qe(140,.7,"square",.05,60,.05),Ds(.8,900,120,.25)},bossHit:(i=0)=>{const t=330*Math.pow(2,Math.min(i,12)/12);qe(t,.16,"square",.08,t*.5),qe(t*2,.1,"triangle",.06,t*3,.04),Ds(.12,3e3,800,.2)},attack:()=>{qe(130,.35,"sine",.3,35),qe(220,.18,"sawtooth",.07,90),Ds(.25,500,80,.3)},tick:()=>qe(1500,.04,"square",.05,1100),victory:()=>{[523,659,784,1047,784,1047,1319].forEach((i,t)=>qe(i,t>=5?.5:.17,"triangle",.13,void 0,t*.13)),[262,330,392,523].forEach((i,t)=>qe(i,.6,"sine",.08,void 0,.65+t*.02))}};function J_(){return speechSynthesis.getVoices().find(i=>i.lang.replace("_","-").toLowerCase().startsWith("ko"))}function Z_(i){return!("speechSynthesis"in window)||speechSynthesis.getVoices().length?Promise.resolve():new Promise(t=>{const e=()=>{speechSynthesis.removeEventListener("voiceschanged",e),t()};speechSynthesis.addEventListener("voiceschanged",e),setTimeout(e,i)})}let Nc=!1;function Q_(){if(!(Nc||!("speechSynthesis"in window))){Nc=!0;try{const i=new SpeechSynthesisUtterance(" ");i.volume=0,speechSynthesis.speak(i)}catch{}}}function j_(i,t=3e3){return"speechSynthesis"in window?Z_(800).then(()=>new Promise(e=>{let n=!1,s=0;const r=a=>{n||(n=!0,clearTimeout(s),e(a))};try{speechSynthesis.cancel();const a=new SpeechSynthesisUtterance(i);a.lang="ko-KR";const o=J_();o&&(a.voice=o),a.rate=.75,a.onstart=()=>r(!0),a.onerror=l=>{if(l.error==="canceled"||l.error==="interrupted")return r(n);r(!1)},a.onend=()=>r(!0),Gu=a,speechSynthesis.paused&&speechSynthesis.resume(),speechSynthesis.speak(a),s=window.setTimeout(()=>r(!1),t)}catch{r(!1)}})):Promise.resolve(!1)}let yi=null,ea=null;function na(){yi&&(yi.pause(),yi.src="",yi=null),ea&&(URL.revokeObjectURL(ea),ea=null)}function Uc(i,t=!1,e=6e3){return new Promise(n=>{na(),t&&(ea=i);const s=new Audio;yi=s;let r=!1;const a=l=>{r||(r=!0,clearTimeout(o),!l&&yi===s&&na(),n(l))};s.preload="auto",s.onplaying=()=>a(!0),s.onerror=()=>a(!1),s.onended=()=>yi===s&&na(),s.src=i;const o=setTimeout(()=>a(!1),e);s.play().then(()=>a(!0),()=>a(!1))})}function tx(i){return`https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ko&q=${encodeURIComponent(i)}`}let Kr=0;async function Vu(i,t,e){const n=++Kr;if(ur(),e){if(await Uc(URL.createObjectURL(e),!0))return"recording";if(n!==Kr)return null}return await j_(i)?"web":n!==Kr?null:navigator.onLine!==!1&&await Uc(tx(i))?"online":(n!==Kr||t(),null)}function ur(){"speechSynthesis"in window&&speechSynthesis.cancel(),Gu=null,na()}typeof window<"u"&&"speechSynthesis"in window&&speechSynthesis.getVoices();const ex="dictation-audio",Eo="clips";function nx(){return new Promise((i,t)=>{if(typeof indexedDB>"u")return t(new Error("no indexedDB"));const e=indexedDB.open(ex,1);e.onupgradeneeded=()=>e.result.createObjectStore(Eo),e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)})}function va(i,t){return nx().then(e=>new Promise((n,s)=>{const r=e.transaction(Eo,i),a=t(r.objectStore(Eo));a.onsuccess=()=>n(a.result),a.onerror=()=>s(a.error),r.oncomplete=()=>e.close()}))}function us(i){return i.replace(/\s+/g," ").trim()}async function Hu(i){try{const t=await va("readonly",e=>e.get(us(i)));return t instanceof Blob?t:null}catch{return null}}function ix(i,t){return va("readwrite",e=>e.put(t,us(i))).then(()=>{})}function sx(i){return va("readwrite",t=>t.delete(us(i))).then(()=>{})}async function rx(){try{const i=await va("readonly",t=>t.getAllKeys());return new Set(i.map(String))}catch{return new Set}}function ax(){return typeof MediaRecorder<"u"&&!!navigator.mediaDevices?.getUserMedia}function ox(i){for(const t of["audio/webm;codecs=opus","audio/webm","audio/mp4","audio/ogg;codecs=opus","audio/aac"])if(i(t))return t;return""}async function lx(i=8e3,t){const e=await navigator.mediaDevices.getUserMedia({audio:!0}),n=ox(l=>MediaRecorder.isTypeSupported(l)),s=new MediaRecorder(e,n?{mimeType:n}:void 0),r=[];s.ondataavailable=l=>l.data.size&&r.push(l.data);const a=new Promise(l=>{s.onstop=()=>{e.getTracks().forEach(c=>c.stop()),l(new Blob(r,{type:s.mimeType||n||"audio/webm"}))}});s.start();const o=setTimeout(()=>{s.state==="recording"&&(s.stop(),t?.())},i);return{stop(){return clearTimeout(o),s.state==="recording"&&s.stop(),a},cancel(){clearTimeout(o),s.state==="recording"&&s.stop()}}}function Qo(i){const t=i.toLowerCase();return t.includes("kakaotalk")?"kakao":t.includes("naver(inapp")||t.includes("naver/")?"naver":t.includes("line/")?"line":t.includes("instagram")?"instagram":t.includes("fbav")||t.includes("fban")?"facebook":t.includes("daumapps")?"daum":/android/.test(t)&&/; wv\)/.test(t)?"other":null}const Wu={kakao:"카카오톡",naver:"네이버",line:"라인",instagram:"인스타그램",facebook:"페이스북",daum:"다음",other:"앱 안의 브라우저"};function cx(i,t){if(i==="kakao")return`kakaotalk://web/openExternal?url=${encodeURIComponent(t)}`;if(i==="line"){const e=new URL(t);return e.searchParams.set("openExternalBrowser","1"),e.href}if(/android/i.test(typeof navigator>"u"?"":navigator.userAgent)){const e=new URL(t);return`intent://${e.host}${e.pathname}${e.search}${e.hash}#Intent;scheme=${e.protocol.replace(":","")};package=com.android.chrome;end`}return null}const He=[{mode:"full",name:"받아쓰기",emoji:"🎧",desc:"잘 듣고 글자를 순서대로 모두 쏴요",needPerfect:!0},{mode:"blank",name:"빈칸 채우기",emoji:"🧩",desc:"빠진 글자만 찾아서 쏴요",needPerfect:!1},{mode:"speed",name:"번개 받아쓰기",emoji:"⚡",desc:"시간 안에 끝내면 코인을 더 받아요",needPerfect:!1},{mode:"boss",name:"최종 시험",emoji:"🐉",desc:"글자 도둑 대왕! 글자를 직접 써서 되찾아요",needPerfect:!1}];He.findIndex(i=>i.mode==="boss");const ux=5,hr=1,_s=5,xs=[{id:"skin.basic",kind:"skin",name:"기본 물총",emoji:"🔫",price:0,size:1,desc:"보통 크기"},{id:"skin.mini",kind:"skin",name:"꼬마 물총",emoji:"🧃",price:120,size:.7,desc:"작고 귀여워요"},{id:"skin.ocean",kind:"skin",name:"바다 물총",emoji:"🌊",price:200,size:1,desc:"파란 바다색"},{id:"skin.berry",kind:"skin",name:"딸기 물총",emoji:"🍓",price:260,size:1,desc:"분홍 딸기색"},{id:"skin.forest",kind:"skin",name:"숲속 물총",emoji:"🌲",price:340,size:1.1,desc:"조금 커요"},{id:"skin.galaxy",kind:"skin",name:"우주 물총",emoji:"🪐",price:520,size:1.15,desc:"보라빛 우주"},{id:"skin.gold",kind:"skin",name:"황금 물총",emoji:"🏅",price:800,size:1.2,desc:"반짝이는 금속"},{id:"skin.rainbow",kind:"skin",name:"무지개 물총",emoji:"🌈",price:1200,size:1.3,desc:"색이 계속 바뀌어요"},{id:"skin.cannon",kind:"skin",name:"왕대포 물총",emoji:"💣",price:1700,size:1.6,desc:"아주 커요!"},{id:"skin.dragon",kind:"skin",name:"전설의 용 물총",emoji:"🐲",price:3e3,size:1.85,desc:"가장 크고 빛나요",final:!0},{id:"stream.water",kind:"stream",name:"맑은 물",emoji:"💧",price:0,desc:"기본 물줄기"},{id:"stream.lemon",kind:"stream",name:"레몬 주스",emoji:"🍋",price:150,desc:"노란 물줄기"},{id:"stream.berry",kind:"stream",name:"딸기 우유",emoji:"🥤",price:150,desc:"분홍 물줄기"},{id:"stream.mint",kind:"stream",name:"민트 소다",emoji:"🧊",price:240,desc:"시원한 민트색"},{id:"stream.lava",kind:"stream",name:"용암 물줄기",emoji:"🔥",price:520,desc:"굵고 뜨거워요"},{id:"stream.rainbow",kind:"stream",name:"무지개 물줄기",emoji:"🌈",price:760,desc:"색이 바뀌어요"},{id:"stream.dragon",kind:"stream",name:"용의 숨결",emoji:"🐉",price:2e3,desc:"반짝이가 날려요",final:!0},{id:"pop.drop",kind:"pop",name:"물방울",emoji:"💦",price:0,desc:"기본 효과"},{id:"pop.star",kind:"pop",name:"별 팡팡",emoji:"⭐",price:200,desc:"별이 튀어요"},{id:"pop.heart",kind:"pop",name:"하트 팡팡",emoji:"💖",price:200,desc:"하트가 튀어요"},{id:"pop.flower",kind:"pop",name:"꽃잎 팡팡",emoji:"🌸",price:420,desc:"꽃잎이 흩날려요"},{id:"pop.confetti",kind:"pop",name:"색종이",emoji:"🎊",price:420,desc:"알록달록 색종이"},{id:"pop.firework",kind:"pop",name:"왕폭죽",emoji:"🎆",price:850,desc:"크게 터져요"},{id:"pop.galaxy",kind:"pop",name:"은하수",emoji:"✨",price:1300,desc:"별빛이 쏟아져요"},{id:"pop.dragon",kind:"pop",name:"용의 불꽃",emoji:"🐲",price:2500,desc:"불꽃 고리 + 불꽃놀이",final:!0}];function Xu(i){if(!i||typeof i!="object")return null;const t=i,e=(l,c=0)=>typeof l=="number"&&Number.isFinite(l)?l:c;if(typeof t.setKey!="string"||!Array.isArray(t.results))return null;const n=t.results.filter(l=>!!l&&typeof l=="object"&&typeof l.text=="string").map(l=>({text:l.text,stars:e(l.stars,1),misses:e(l.misses),wrong:Array.isArray(l.wrong)?l.wrong.filter(c=>typeof c=="string"):[]})),s=Math.floor(e(t.index));if(s<0||n.length!==s)return null;const r=t.partial,a=l=>Array.isArray(l)?l.filter(c=>Number.isInteger(c)&&c>=0):[],o=r&&typeof r=="object"?{filled:a(r.filled),given:a(r.given),hearts:e(r.hearts,3),misses:e(r.misses),wrong:Array.isArray(r.wrong)?r.wrong.filter(l=>typeof l=="string"):[]}:null;return s===0&&!o?null:{setKey:t.setKey,stage:Math.floor(e(t.stage)),lap:Math.floor(e(t.lap)),index:s,score:Math.max(0,e(t.score)),results:n,earned:Array.isArray(t.earned)?t.earned.filter(l=>typeof l=="string"):[],lapCoins:e(t.lapCoins),lapWarnings:Math.floor(e(t.lapWarnings)),savedAt:e(t.savedAt),partial:o}}function jo(i,t){const e=i.resume;return!!e&&e.setKey===i.setKey&&e.stage===i.stage&&e.lap===i.lap&&e.index<t}const da=["S","A","B","C"];function Ma(){return{coins:0,owned:["skin.basic","stream.water","pop.drop"],equipped:{skin:"skin.basic",stream:"stream.water",pop:"pop.drop"},setKey:"",stage:0,lap:0,totalLaps:0,level:2,lastWrong:null,crowns:0,best:0,stickers:[],bossBest:0,bossClears:0,bossGrade:"",runLaps:0,wins:[],warnings:0,resume:null,setId:"",sets:{},retry:[],bossWrong:0}}function tl(i){if(!i||typeof i!="object")return null;const t=i,e=s=>typeof s=="number"&&Number.isFinite(s)&&s>=0?Math.floor(s):0;if(!da.includes(t.grade))return null;const n={nth:e(t.nth),laps:Math.max(1,e(t.laps)),grade:t.grade,score:e(t.score),at:e(t.at)};return typeof t.set=="string"&&t.set&&(n.set=t.set.slice(0,30)),n}function hx(i){if(!i||typeof i!="object")return null;const t=i,e=(n,s)=>typeof n=="number"&&Number.isFinite(n)?n:s;return{stage:Math.min(He.length-1,Math.max(0,Math.floor(e(t.stage,0)))),lap:Math.max(0,Math.floor(e(t.lap,0))),level:Math.min(_s,Math.max(hr,Math.floor(e(t.level,2)))),lastWrong:typeof t.lastWrong=="number"?t.lastWrong:null,runLaps:Math.max(0,Math.floor(e(t.runLaps,0))),resume:Xu(t.resume),retry:Array.isArray(t.retry)?t.retry.filter(n=>typeof n=="string"):[],bossWrong:Math.max(0,Math.floor(e(t.bossWrong,0)))}}function Fc(i){const t=Ma();if(!i||typeof i!="object")return t;const e=i,n=(o,l)=>typeof o=="number"&&Number.isFinite(o)?o:l,s=new Set(xs.map(o=>o.id)),r=Array.isArray(e.owned)?e.owned.filter(o=>s.has(o)):[],a={...t,coins:Math.max(0,Math.floor(n(e.coins,0))),owned:[...new Set([...t.owned,...r])],setKey:typeof e.setKey=="string"?e.setKey:"",stage:Math.min(He.length-1,Math.max(0,Math.floor(n(e.stage,0)))),lap:Math.max(0,Math.floor(n(e.lap,0))),totalLaps:Math.max(0,Math.floor(n(e.totalLaps,0))),level:Math.min(_s,Math.max(hr,Math.floor(n(e.level,2)))),lastWrong:typeof e.lastWrong=="number"?e.lastWrong:null,crowns:Math.max(0,Math.floor(n(e.crowns,0))),best:Math.max(0,n(e.best,0)),stickers:Array.isArray(e.stickers)?e.stickers.filter(o=>typeof o=="string"):[],bossBest:Math.max(0,n(e.bossBest,0)),bossClears:Math.max(0,Math.floor(n(e.bossClears,0))),bossGrade:da.includes(e.bossGrade)?e.bossGrade:"",runLaps:Math.max(0,Math.floor(n(e.runLaps,0))),wins:Array.isArray(e.wins)?e.wins.map(tl).filter(o=>!!o):[],warnings:Math.max(0,Math.floor(n(e.warnings,0))),resume:Xu(e.resume),setId:typeof e.setId=="string"?e.setId:"",sets:{},retry:Array.isArray(e.retry)?e.retry.filter(o=>typeof o=="string"):[],bossWrong:Math.max(0,Math.floor(n(e.bossWrong,0)))};if(e.sets&&typeof e.sets=="object")for(const[o,l]of Object.entries(e.sets)){const c=hx(l);c&&(a.sets[o]=c)}for(const o of["skin","stream","pop"]){const l=e.equipped?.[o];typeof l=="string"&&a.owned.includes(l)&&l.startsWith(o)&&(a.equipped[o]=l)}return a}function $u(i){let t=5381;for(const e of i.join(`
`))t=(t<<5)+t+e.codePointAt(0)|0;return`${i.length}:${t>>>0}`}function dx(i,t){const e=$u(t);if(i.setKey===e)return!1;i.setKey&&(i.sets[i.setKey]={stage:i.stage,lap:i.lap,level:i.level,lastWrong:i.lastWrong,runLaps:i.runLaps,resume:i.resume,retry:i.retry,bossWrong:i.bossWrong});const n=i.setKey==="",s=i.sets[e];return i.setKey=e,i.stage=s?.stage??0,i.lap=s?.lap??0,i.level=s?.level??2,i.lastWrong=s?.lastWrong??null,i.runLaps=s?.runLaps??0,i.resume=s?.resume??null,i.retry=s?.retry??[],i.bossWrong=s?.bossWrong??0,!n}function fx(i,t){if(!i.retry.length)return t;const e=t.filter(n=>i.retry.includes(n));return e.length?e:t}const px=[{balloons:[5,6],drift:.6,hintMs:8e3},{balloons:[6,8],drift:1,hintMs:15e3},{balloons:[7,9],drift:1.3,hintMs:22e3},{balloons:[7,10],drift:1.6,hintMs:3e4},{balloons:[8,10],drift:2,hintMs:0}];function el(i,t){const e={...px[Math.min(_s,Math.max(hr,i))-1]};return t==="speed"&&(e.drift*=1.4),e}function mx(i,t){const e=.25+t*.07;return Math.max(1,Math.min(i,Math.round(i*e)))}function gx(i,t){return 5+i*(4.2-t*.4)}function _x(i){return i.totalLaps%ux}function xx(i,t,e,n=[]){const s=He[i.stage],r=t===0,a=n.length===0,o=[{label:"끝까지 해냈어요",amount:10}];i.lap>0&&o.push({label:`끈기 보상 (${i.lap+1}바퀴째)`,amount:Math.min(i.lap,10)*5}),!r&&i.lastWrong!==null&&t<i.lastWrong&&o.push({label:`지난번보다 ${i.lastWrong-t}개 덜 틀렸어요`,amount:10}),r&&o.push({label:"하나도 안 틀렸어요!",amount:50});const l=i.level;r?i.level=Math.min(_s,i.level+1):t>=8&&(i.level=Math.max(hr,i.level-1));const c=a||!s.needPerfect;let u=!1;i.totalLaps++,i.runLaps++,i.best=Math.max(i.best,e),c?(i.lap=0,i.lastWrong=null,i.retry=[],i.stage++,i.stage>=He.length&&(i.stage=0,i.crowns++,u=!0,o.push({label:"모든 단계 완료 왕관",amount:100}))):(i.lap++,i.lastWrong=t,i.retry=n.slice());const d=o.reduce((h,p)=>h+p.amount,0);return i.coins+=d,{perfect:r,advanced:c,crowned:u,coins:o,total:d,levelChange:i.level-l}}function vx(i,t){const e=xs.find(n=>n.id===t);return!e||i.owned.includes(t)||i.coins<e.price?!1:(i.coins-=e.price,i.owned.push(t),i.equipped[e.kind]=t,!0)}function Mx(i,t){const e=xs.find(n=>n.id===t);return!e||!i.owned.includes(t)?!1:(i.equipped[e.kind]=t,!0)}function Sx(i,t){const e=30-Math.min(_s,Math.max(hr,i))*2,n=nl(t);return Math.max(8,Math.round(e*[1,.8,.65][n]))}function nl(i){return i<=.25?2:i<=.5?1:0}function Oc(i){return i===0?"S":i<=3?"A":i<=8?"B":"C"}function yx(i,t){return i?t?da.indexOf(i)<=da.indexOf(t)?i:t:i:t}const er=He.length,bx={S:300,A:200,B:100,C:0};function nr(i){return Math.max(500,5e3-500*Math.max(0,i.laps-er))+bx[i.grade]+Math.min(99,Math.floor(i.score/20))}function Ex(i,t,e,n=Date.now(),s="",r=[]){const a=t===0,o=r.length===0;if(i.totalLaps++,i.runLaps++,i.best=Math.max(i.best,e),i.bossWrong+=t,!o){i.lap++,i.lastWrong=t,i.retry=r.slice();const S=[{label:"보스에게 끝까지 맞섰어요",amount:30}];i.lap>1&&S.push({label:`끈기 보상 (${i.lap}번째 도전)`,amount:Math.min(i.lap-1,10)*5});const m=S.reduce((f,E)=>f+E.amount,0);return i.coins+=m,{cleared:!1,grade:Oc(i.bossWrong),perfect:a,newBest:!1,win:null,coins:S,total:m,levelChange:0,retryCount:r.length}}const l=Oc(i.bossWrong),c=i.bossWrong===0,u=[{label:"글자 도둑 대왕을 물리쳤어요",amount:100}];c?u.push({label:"한 글자도 안 틀렸어요! (S)",amount:100}):l==="A"?u.push({label:"거의 완벽해요 (A)",amount:50}):l==="B"&&u.push({label:"끝까지 버텼어요 (B)",amount:20}),u.push({label:"모든 단계 완료 왕관",amount:100});const d=i.level;c&&(i.level=Math.min(_s,i.level+1));const h=e>i.bossBest;i.bossBest=Math.max(i.bossBest,e),i.bossClears++,i.bossGrade=yx(i.bossGrade,l),i.crowns++;const p={nth:i.bossClears,laps:Math.max(er,i.runLaps),grade:l,score:e,at:n};s&&(p.set=s),i.wins.push(p),p.laps===er&&u.push({label:"⚡ 한 번에 우승!",amount:150}),i.runLaps=0,i.bossWrong=0,i.retry=[],i.stage=0,i.lap=0,i.lastWrong=null;const _=u.reduce((S,m)=>S+m.amount,0);return i.coins+=_,{cleared:!0,grade:l,perfect:a,newBest:h,win:p,coins:u,total:_,levelChange:i.level-d,retryCount:0}}const Tx=6e3,wx=6,Ax=3e3,Cx=5;function Rx(i,t){for(i.push(t);i.length&&t-i[0]>Tx;)i.shift();return i.length<wx?!1:(i.length=0,!0)}function Px(i){if(i.warnings++,i.warnings<2)return 0;const t=Math.min(i.coins,Cx);return i.coins-=t,t}const Lx=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),An=(i,t)=>i>>>t|i<<32-t;function il(i){const t=new TextEncoder().encode(i),e=t.length*8,n=new Uint8Array(t.length+9+63>>6<<6);n.set(t),n[t.length]=128;const s=new DataView(n.buffer);s.setUint32(n.length-8,Math.floor(e/4294967296)),s.setUint32(n.length-4,e>>>0);const r=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),a=new Uint32Array(64);for(let o=0;o<n.length;o+=64){for(let m=0;m<16;m++)a[m]=s.getUint32(o+m*4);for(let m=16;m<64;m++){const f=An(a[m-15],7)^An(a[m-15],18)^a[m-15]>>>3,E=An(a[m-2],17)^An(a[m-2],19)^a[m-2]>>>10;a[m]=a[m-16]+f+a[m-7]+E>>>0}let[l,c,u,d,h,p,_,S]=r;for(let m=0;m<64;m++){const f=An(h,6)^An(h,11)^An(h,25),E=h&p^~h&_,A=S+f+E+Lx[m]+a[m]>>>0,v=An(l,2)^An(l,13)^An(l,22),y=l&c^l&u^c&u,b=v+y>>>0;S=_,_=p,p=h,h=d+A>>>0,d=u,u=c,c=l,l=A+b>>>0}r[0]+=l,r[1]+=c,r[2]+=u,r[3]+=d,r[4]+=h,r[5]+=p,r[6]+=_,r[7]+=S}return[...r].map(o=>o.toString(16).padStart(8,"0")).join("")}const uo="dictation.users.v1",Bc="dictation.users.backup",qu="dictation.friends.v1",Ix="dictation.save.v2",kc=2,To=12,zc=10,Gc=20,Vc=2,Hc=20;function Pn(i){return i.replace(/\s+/g," ").trim()}function _n(i){return i.replace(/\s+/g,"").trim()}function Hn(i){return _n(i).toLowerCase()}function fa(i){const t=_n(i);return t?[...t].length<kc?`아이디는 ${kc}글자 이상이에요.`:[...t].length>To?`아이디는 ${To}자까지예요.`:/^[가-힣ㄱ-ㅎㅏ-ㅣA-Za-z0-9_]+$/.test(t)?null:"아이디는 한글·영어·숫자로 적어요(띄어쓰기 없이).":"아이디를 적어 주세요."}function wo(i){const t=Pn(i);return t?[...t].length>zc?`이름은 ${zc}자까지예요.`:/^[가-힣ㄱ-ㅎㅏ-ㅣA-Za-z0-9 ]+$/.test(t)?null:"이름은 한글·영어·숫자로 적어요.":null}function Ao(i){return[...Pn(i)].length>Gc?`학교 이름은 ${Gc}자까지예요.`:null}function Ti(i){return i.name||i.id}function sl(i){const t=i.name?`${i.name} (@${i.id})`:`@${i.id}`;return i.school?`${t} · ${i.school}`:t}function Yu(i){return i.length<Vc?`비밀번호는 ${Vc}글자 이상이에요.`:i.length>Hc?`비밀번호는 ${Hc}글자까지예요.`:null}function Wc(i,t){return il(`${i}:${t}`)}function Dx(i=Math.random){let t="";for(let e=0;e<16;e++)t+=Math.floor(i()*36).toString(36);return t}function Ku(i,t,e){return{id:i.id,name:i.name,school:i.school,crowns:t.crowns,best:t.best,bossBest:t.bossBest,bossGrade:t.bossGrade,bossClears:t.bossClears,totalLaps:t.totalLaps,stickers:t.stickers.length,updated:e,wins:t.wins.slice(-12)}}function Nx(i){const t=[];for(const e of i)for(const n of e.wins)t.push({...n,id:e.id,name:e.name,school:e.school,friend:e.friend,points:nr(n),rank:0,tied:!1});t.sort((e,n)=>n.points-e.points||e.at-n.at);for(let e=0;e<t.length;e++)t[e].rank=e>0&&t[e-1].points===t[e].points?t[e-1].rank:e+1;for(let e=0;e<t.length;e++)t[e].tied=t.some((n,s)=>s!==e&&n.rank===t[e].rank);return t}function ir(i){return i.crowns*500+i.bossBest+i.best}function Ux(i){return i.slice().sort((t,e)=>ir(e)-ir(t)||e.updated-t.updated)}class os{store;storage;now;rnd;constructor(t,e=Date.now,n=Math.random){this.storage=t,this.now=e,this.rnd=n,this.store=this.load()}writeFailed=!1;static reviveAccount(t,e){if(!e||typeof e!="object"||typeof e.hash!="string"||typeof e.salt!="string")return null;const n=typeof e.id!="string",s=_n(n?String(e.name??t):e.id)||_n(t);return s?{id:s,name:typeof e.name=="string"?Pn(e.name):"",school:typeof e.school=="string"?Pn(e.school):"",salt:e.salt,hash:e.hash,created:typeof e.created=="number"?e.created:0,updated:typeof e.updated=="number"?e.updated:0,save:Fc(e.save)}:null}static parseStore(t){try{const e=JSON.parse(t??"null");if(!e||typeof e!="object"||typeof e.accounts!="object"||!e.accounts)return null;const n={};for(const[r,a]of Object.entries(e.accounts)){const o=os.reviveAccount(r,a);o&&(n[Hn(o.id)]=o)}const s=typeof e.current=="string"?Hn(e.current):null;return{v:2,current:s&&n[s]?s:null,accounts:n}}catch{return null}}load(){const t={v:2,current:null,accounts:{}};let e=null,n=null;try{e=os.parseStore(this.storage.getItem(uo)),n=os.parseStore(this.storage.getItem(Bc))}catch{}if(!e&&!n)return t;const s=e??n;if(e&&n)for(const[r,a]of Object.entries(n.accounts))s.accounts[r]||(s.accounts[r]=a);return s}write(){try{const t=os.parseStore(this.storage.getItem(uo));if(t)for(const[n,s]of Object.entries(t.accounts))this.store.accounts[n]||(this.store.accounts[n]=s);const e=JSON.stringify(this.store);this.storage.setItem(uo,e),this.writeFailed=!1;try{this.storage.setItem(Bc,e)}catch{}}catch{this.writeFailed=!0}}get count(){return Object.keys(this.store.accounts).length}list(){return Object.values(this.store.accounts).sort((t,e)=>e.updated-t.updated)}has(t){return Hn(t)in this.store.accounts}suggestId(t){const e=_n(t).slice(0,To-2)||"친구";if(!this.has(e)&&!fa(e))return e;for(let n=2;n<1e3;n++){const s=`${e}${n}`;if(!this.has(s))return s}return`${e}${Date.now()%1e4}`}current(){return this.store.current?this.store.accounts[this.store.current]??null:null}register(t,e,n={}){const s=fa(t)??Yu(e)??wo(n.name??"")??Ao(n.school??"");if(s)return{error:s};const r=_n(t),a=Hn(r);if(this.store.accounts[a])return{error:`'${r}'은(는) 이미 쓰는 아이디예요. 다른 아이디를 골라요.`};let o=Ma();if(this.count===0)try{const d=JSON.parse(this.storage.getItem(Ix)??"null");d&&(o=Fc(d))}catch{}const l=Dx(this.rnd),c=this.now(),u={id:r,name:Pn(n.name??""),school:Pn(n.school??""),salt:l,hash:Wc(l,e),created:c,updated:c,save:o};return this.store.accounts[a]=u,this.store.current=a,this.write(),u}login(t,e){const n=Hn(t),s=this.store.accounts[n];return s?Wc(s.salt,e)!==s.hash?{error:"비밀번호가 달라요."}:(this.store.current=n,s.updated=this.now(),this.write(),s):{error:"없는 아이디예요. 처음이면 [새로 만들기]를 눌러요."}}logout(){this.store.current=null,this.write()}updateProfile(t){const e=this.current();if(!e)return"먼저 들어와야 해요.";const n=wo(t.name)??Ao(t.school);return n||(e.name=Pn(t.name),e.school=Pn(t.school),e.updated=this.now(),this.write(),null)}persist(){const t=this.current();t&&(t.updated=this.now(),this.write())}records(){const t=this.list().map(s=>Ku(s,s.save,s.updated)),e=new Set(t.map(s=>Hn(s.id))),n=Zu(this.storage).filter(s=>!e.has(Hn(s.id)));return Ux([...t,...n])}winners(){return Nx(this.records())}}function Fx(i){const t=new TextEncoder().encode(i);let e="";for(const n of t)e+=String.fromCharCode(n);return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Ox(i){const t=atob(i.replace(/-/g,"+").replace(/_/g,"/")+"=".repeat((4-i.length%4)%4)),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new TextDecoder().decode(e)}function Bx(i){return Ju([i])}function kx(i){return[i.name,i.crowns,i.best,i.bossBest,i.bossGrade,i.bossClears,i.totalLaps,i.stickers,i.updated,i.wins.slice(-12).map(t=>t.set?[t.nth,t.laps,t.grade,t.score,t.at,t.set]:[t.nth,t.laps,t.grade,t.score,t.at]),i.id,i.school]}function zx(i){if(!Array.isArray(i)||i.length<9)return null;const[t,e,n,s,r,a,o,l,c,u,d,h]=i,p=_n(typeof d=="string"?d:String(t??""));if(fa(p)||typeof t!="string"||wo(t))return null;const _=S=>typeof S=="number"&&Number.isFinite(S)&&S>=0?S:0;return{id:p,name:Pn(t),school:typeof h=="string"&&!Ao(h)?Pn(h):"",crowns:_(e),best:_(n),bossBest:_(s),bossGrade:["S","A","B","C"].includes(r)?r:"",bossClears:_(a),totalLaps:_(o),stickers:_(l),updated:_(c),wins:Array.isArray(u)?u.map(S=>Array.isArray(S)?tl({nth:S[0],laps:S[1],grade:S[2],score:S[3],at:S[4],set:S[5]}):null).filter(S=>!!S):[],friend:!0}}function Ju(i){const t=JSON.stringify(i.map(kx));return Fx(`${il(t).slice(0,6)}${t}`)}function Gx(i){try{const t=Ox(i),e=t.slice(0,6),n=t.slice(6);if(il(n).slice(0,6)!==e)return null;const s=JSON.parse(n);if(!Array.isArray(s))return null;const r=s.map(zx).filter(a=>!!a);return r.length?r:null}catch{return null}}function Zu(i){try{const t=JSON.parse(i.getItem(qu)??"null");return Array.isArray(t)?t.filter(e=>e&&(typeof e.id=="string"||typeof e.name=="string")).map(e=>({...e,id:_n(typeof e.id=="string"?e.id:e.name),name:typeof e.name=="string"?e.name:"",school:typeof e.school=="string"?e.school:"",wins:Array.isArray(e.wins)?e.wins.map(tl).filter(n=>!!n):[],friend:!0})).filter(e=>!fa(e.id)):[]}catch{return[]}}function Vx(i,t){const e=Zu(i),n=e.findIndex(s=>Hn(s.id)===Hn(t.id));if(n>=0&&e[n].updated>=t.updated)return!1;n>=0?e[n]={...t,friend:!0}:e.push({...t,friend:!0});try{i.setItem(qu,JSON.stringify(e.slice(-50)))}catch{}return!0}function Hx(i){let t=null;for(const e of i)(!t||nr(e)>nr(t))&&(t=e);return t}function Wx(i,t){const e=[`🏆 ${sl(i)}의 받아쓰기 풍선 사격 기록!`];e.push(`👑 왕관 ${i.crowns} · ⭐ 최고 ${i.best}점`);const n=Hx(i.wins);return n?e.push(`🏅 ${n.nth}회차 우승 · ${n.laps}바퀴 만에 ${n.grade}등급 · 우승 점수 ${nr(n)}점`):i.bossClears&&e.push(`🐉 최종 시험 ${i.bossGrade}등급 · ${i.bossBest}점`),e.push(`명예 점수 ${ir(i)}점 — 나도 도전하기 👉 ${t}`),e.join(`
`)}const Xc='"Jua", "Malgun Gothic", "Apple SD Gothic Neo", sans-serif';class Xx{strokes=[];trace=null;onChange=null;enabled=!0;canvas;g;active=null;dpr=1;constructor(t){this.canvas=t,this.g=t.getContext("2d"),t.addEventListener("pointerdown",e=>this.down(e)),t.addEventListener("pointermove",e=>this.move(e)),t.addEventListener("pointerup",e=>this.up(e)),t.addEventListener("pointercancel",e=>this.up(e)),t.addEventListener("pointerleave",e=>this.up(e)),this.resize()}get isEmpty(){return this.strokes.length===0&&!this.active}resize(){this.dpr=Math.min(2,window.devicePixelRatio||1);const t=this.canvas.clientWidth||260,e=Math.round(t*this.dpr),n=this.canvas.width;if(n&&n!==e){const s=e/n;for(const r of this.strokes)for(const a of r)a.x*=s,a.y*=s}this.canvas.width=e,this.canvas.height=e,this.draw()}clear(){this.strokes=[],this.active=null,this.draw(),this.onChange?.()}undo(){this.strokes.pop(),this.draw(),this.onChange?.()}setTrace(t){this.trace=t,this.draw()}pos(t){const e=this.canvas.getBoundingClientRect();return{x:(t.clientX-e.left)/e.width*this.canvas.width,y:(t.clientY-e.top)/e.height*this.canvas.height}}down(t){!this.enabled||this.active||t.pointerType==="mouse"&&t.button!==0||(t.preventDefault(),this.canvas.setPointerCapture?.(t.pointerId),this.active={id:t.pointerId,points:[this.pos(t)]},this.draw())}move(t){if(!this.active||this.active.id!==t.pointerId)return;t.preventDefault();const e=this.pos(t),n=this.active.points[this.active.points.length-1];Math.hypot(e.x-n.x,e.y-n.y)<1.5*this.dpr||(this.active.points.push(e),this.draw())}up(t){!this.active||this.active.id!==t.pointerId||(this.strokes.push(this.active.points),this.active=null,this.draw(),this.onChange?.())}stroke(t,e,n){if(t.lineWidth=n,t.lineCap="round",t.lineJoin="round",t.beginPath(),e.length===1){t.arc(e[0].x,e[0].y,n/2,0,Math.PI*2),t.fill();return}t.moveTo(e[0].x,e[0].y);for(let s=1;s<e.length;s++)t.lineTo(e[s].x,e[s].y);t.stroke()}draw(){const{g:t,canvas:e}=this,n=e.width;t.clearRect(0,0,n,n),t.save(),t.strokeStyle="rgba(29, 43, 83, 0.18)",t.lineWidth=2*this.dpr,t.setLineDash([8*this.dpr,8*this.dpr]),t.beginPath(),t.moveTo(n/2,0),t.lineTo(n/2,n),t.moveTo(0,n/2),t.lineTo(n,n/2),t.stroke(),t.restore(),this.trace&&(t.save(),t.font=`${n*.72}px ${Xc}`,t.textAlign="center",t.textBaseline="middle",t.fillStyle="rgba(77, 171, 247, 0.35)",t.fillText(this.trace,n/2,n*.54),t.restore()),t.strokeStyle=t.fillStyle="#1d2b53";const s=n*.045;for(const r of this.strokes)this.stroke(t,r,s);this.active&&this.stroke(t,this.active.points,s)}toImage(){if(!this.strokes.length)return null;const t=this.canvas.width,e=document.createElement("canvas");e.width=e.height=t;const n=e.getContext("2d");n.fillStyle="#fff",n.fillRect(0,0,t,t),n.strokeStyle=n.fillStyle="#000";for(const s of this.strokes)this.stroke(n,s,t*.045);return e}stamp(t){const e=this.canvas.width,n=36,s=document.createElement("canvas");s.width=s.height=e;const r=s.getContext("2d");r.font=`${e*.7}px ${Xc}`,r.textAlign="center",r.textBaseline="middle",r.fillStyle="#000",r.fillText(t,e/2,e*.54);const a=r.getImageData(0,0,e,e).data,o=Math.max(2,Math.round(e/n)),l=[];for(let c=0;c<e;c+=o){let u=[];for(let d=0;d<e;d+=o)a[(c*e+d)*4+3]>128?u.push({x:d,y:c}):u.length&&(l.push(u),u=[]);u.length&&l.push(u)}this.strokes=l,this.draw(),this.onChange?.()}}const Ns=i=>document.getElementById(i),$x="글자 도둑 대왕",qx=["👹","😈","🔥"],es={intro:["크하하! 글자는 전부 내 거다!","글자를 되찾고 싶으면 직접 써 봐라!"],hurt:["으악!","아야!","이, 이럴 수가!","크윽… 제법인데?","내 글자가!"],wrong:["흥! 그건 다른 글자잖아!","크하하, 틀렸다!","그 정도로는 어림없지!","다시 잘 들어 봐라!"],unread:["뭐라고 쓴 거야? 크게 또박또박!","글자가 안 보이는데? 더 크게!"],timeout:["시간 끝! 내 차례다!","느려 터졌군! 받아라!"],rage:["이제 진짜 화났다!!","시간을 더 줄여 주마!"],beaten:["으아아악… 글자를 돌려주마…!"]};function ns(i){return i[Math.floor(Math.random()*i.length)]}class Yx{root=Ns("boss");sprite=Ns("boss-sprite");bar=Ns("boss-hp-bar");hp=Ns("boss-hp-text");bubble=Ns("boss-say");sayTimer=0;phase=0;show(t){this.root.hidden=!t,t&&this.setPhase(0,!0)}setHp(t,e){const n=e?t/e:0;this.bar.style.width=`${Math.max(0,n)*100}%`,this.hp.textContent=`${$x}  ${t} / ${e}`}setPhase(t,e=!1){if(t===this.phase&&!e)return;const n=t>this.phase;this.phase=t,this.root.dataset.phase=String(t),this.sprite.textContent=qx[t],n&&!e&&this.say(ns(es.rage),1800)}animate(t,e){this.sprite.classList.remove("hurt","attack","beaten","intro"),this.sprite.offsetWidth,this.sprite.classList.add(t),setTimeout(()=>this.sprite.classList.remove(t),e)}intro(){this.animate("intro",1500),this.say(ns(es.intro),2600)}hurt(){this.animate("hurt",450),this.say(ns(es.hurt),1200)}attack(t){this.animate("attack",650),this.say(ns(es[t]),1800)}unread(){this.say(ns(es.unread),1800)}beaten(){this.animate("beaten",1600),this.say(ns(es.beaten),2200)}say(t,e){this.bubble.textContent=t,this.bubble.classList.add("show"),clearTimeout(this.sayTimer),this.sayTimer=window.setTimeout(()=>this.bubble.classList.remove("show"),e)}}const Us='"Jua", "Malgun Gothic", "Apple SD Gothic Neo", sans-serif';function Kx(i){const t=new URL(location.href);return t.search="",t.hash=`brag=${Bx(i)}`,t.href}function $c(i,t,e,n,s,r){i.beginPath(),i.roundRect(t,e,n,s,r)}function Jx(i,t){i.width=720,i.height=420;const s=i.getContext("2d"),r=s.createLinearGradient(0,0,0,420);r.addColorStop(0,"#3d9df0"),r.addColorStop(1,"#bdeeb0"),s.fillStyle=r,s.fillRect(0,0,720,420);const a=["#ff6b6b","#ffc93c","#3ddc97","#b48cff","#ff9f43"];for(let l=0;l<9;l++){const c=40+l*97%640,u=30+l*61%120;s.fillStyle=a[l%a.length],s.beginPath(),s.ellipse(c,u,16,20,0,0,Math.PI*2),s.fill()}s.fillStyle="#fff8e7",s.strokeStyle="#1d2b53",s.lineWidth=6,$c(s,36,70,648,314,28),s.fill(),s.stroke(),s.fillStyle="#1d2b53",s.textAlign="center",s.font=`22px ${Us}`,s.fillStyle="#ff5d5d",s.fillText("받아쓰기 풍선 사격",720/2,112),s.fillStyle="#1d2b53",s.font=`46px ${Us}`,s.fillText(`🏆 ${Ti(t)}의 기록`,720/2,166),s.font=`18px ${Us}`,s.fillStyle="#5a6a92",s.fillText(`@${t.id}${t.school?` · ${t.school}`:""}`,720/2,192),s.fillStyle="#1d2b53",s.font=`30px ${Us}`;const o=[`👑 왕관 ${t.crowns}개   ⭐ 최고 ${t.best}점`];o.push(t.bossClears?`🐉 최종 시험 ${t.bossGrade}등급 · ${t.bossBest}점`:"🐉 최종 시험 도전 중!"),o.forEach((l,c)=>s.fillText(l,720/2,236+c*42)),s.fillStyle="#ff5d5d",$c(s,720/2-150,300,300,56,18),s.fill(),s.fillStyle="#fff",s.font=`30px ${Us}`,s.fillText(`명예 점수 ${ir(t)}점`,720/2,339)}async function Zx(i,t){const e=Kx(t),n=Wx(t,e),s=navigator;if(typeof s.share=="function")try{const r=await new Promise(l=>i.toBlob(l,"image/png")),a=r?[new File([r],`${t.name}-받아쓰기-기록.png`,{type:"image/png"})]:[],o=a.length&&s.canShare?.({files:a})?{files:a,text:n}:{text:n,url:e};return await s.share(o),{how:"shared",url:e,text:n}}catch(r){if(r?.name==="AbortError")return{how:"none",url:e,text:n}}try{return await navigator.clipboard.writeText(n),{how:"copied",url:e,text:n}}catch{return{how:"none",url:e,text:n}}}const qc=["괜찮아! 다시 잘 들어 봐 💪","거의 다 왔어, 한 번 더! 🌟","천천히 또박또박 해 보자 😊","틀려도 괜찮아, 배우는 중이야!","좋아, 다음엔 맞힐 수 있어! ✨","잘하고 있어! 한 번만 더 들어 봐 🎧","힘내! 넌 할 수 있어 🙌"];function Qx(i,t=Math.random){if(i<=0)return"힌트를 켤게! 연한 글자를 따라 하면 돼 🌟";const e=qc[Math.floor(t()*qc.length)];return i===1?`${e} (하트 1개 남았어)`:e}function Qu(i,t){if(i===0)return"모두 통과! 정말 대단해요 🎉";const e=t-i;return e===0?"처음은 원래 어려워요. 한 번 더 하면 분명 늘어요 💪":`${t}문제 중 ${e}문제를 해냈어요! 남은 ${i}문제만 다시 해 보면 돼요 🌈`}const I=i=>document.getElementById(i),In=I("stage"),wi=I("board"),jx=300,tv=3,ev=90,nv=700,iv=30,Yc=["좋아요!","멋져요!","잘한다!","최고예요!","대단해요!","받아쓰기 천재!"],Kc=["🐶","🐱","🐰","🐻","🐼","🦊","🐯","🦁","🐸","🐵","🐧","🦄","🐳","🦖","🐝","🦋","🚀","🌈","🍭","🎈"],sv=2,rv=5,Jc=5;function av(){try{return localStorage.getItem("dictation.probe"),localStorage}catch{const i=new Map;return{getItem:t=>i.get(t)??null,setItem:(t,e)=>void i.set(t,e),removeItem:t=>void i.delete(t)}}}const ju=av(),Me=new os(ju);function Jn(){Me.persist()}let Bt,Mt,qt="menu",Fe=tr(),ze=Fe[0];const zs={get list(){return ze.questions},get custom(){return!!ze.custom}};function Sa(){return fx(dt,ze.questions)}function th(){return ze=Fe.find(i=>i.id===dt.setId)??Fe[0],ze}let Zc=0,ya=0,Ys=!1,sn=null,Qc=0,Fn=0,Co=!1,vn=[],dt=Me.current()?.save??Ma(),Qe="full",fs=el(dt.level,Qe),Mn=0,Yn=0,Ge=0,eh="menu",nh="menu",Ro="playing",sr=null,be;const Ze=new Yx;let Wn=0,gn=0,un=!1,cn=!1,Po=0;const ih=[];let rr=0,Ri=0,jc=0;const Gs=()=>document.pointerLockElement===In;function De(i){qt=i,document.body.dataset.state=i,i!=="playing"&&i!=="boss"&&(clearTimeout(Lo),I("peek").classList.remove("show"))}function le(i,t=2600){const e=I("toast");e.textContent=i,e.classList.add("show"),clearTimeout(Qc),Qc=window.setTimeout(()=>e.classList.remove("show"),t)}function sh(){wi.replaceChildren();let i=document.createElement("div");i.className="word",Mt.round.cells.forEach((t,e)=>{if(t.kind==="space"){wi.append(i),i=document.createElement("div"),i.className="word";return}const n=document.createElement("span");n.className=`cell ${t.kind}`,n.dataset.i=String(e),i.append(n)}),wi.append(i),rl(),ba()}function ba(){if(qt!=="boss")return;const i=I("timer"),t=(i.hidden?wi:i).getBoundingClientRect().bottom;I("boss").style.paddingTop=`${Math.round(t+6)}px`}function rl(){const i=Mt.round.nextIndex;wi.querySelectorAll(".cell").forEach(t=>{const e=Number(t.dataset.i),n=Mt.round.cells[e];t.textContent=n.filled?n.ch:"",t.classList.toggle("filled",n.filled),t.classList.toggle("given",!!n.given),t.classList.toggle("next",e===i)})}function Kn(){const i=Mt.round;if(I("coins").textContent=String(dt.coins),I("score").textContent=String(Mt.score),!i){I("qnum").textContent=`${He[dt.stage].emoji} 0 / ${Mt.questions.length}`,I("hearts").textContent="❤️".repeat($n),I("combo").textContent="",I("hint").hidden=!0;return}I("qnum").textContent=`${He[dt.stage].emoji} ${Mt.index+1} / ${Mt.questions.length}`,I("coins").textContent=String(dt.coins),I("hearts").textContent="❤️".repeat(i.hearts)+"🤍".repeat($n-i.hearts),I("score").textContent=String(Mt.score);const t=I("combo");t.textContent=Mt.combo>=2?`${Mt.combo} 연속!`:"",I("hint").hidden=!i.hintMode}function rh(){I("set-pick").textContent=`📚 ${ze.title} ▾`,I("qstatus").textContent=`${zs.custom?"올린 문제":"급수표"} · ${zs.list.length}문제`,I("reset").hidden=!Fe.some(l=>l.custom),dx(dt,zs.list),dt.setId=ze.id,Jn();const i=He[dt.stage],t=Me.current();I("player-name").textContent=t?`👤 ${Ti(t)}`:"👤",I("player-name").title=t?sl(t):"";const e=i.mode==="boss"?`${i.emoji} ${i.name} 도전!`:`${i.emoji} ${i.name} ${dt.lap+1}바퀴째`,n=dt.bossClears?` · 🐉 ${dt.bossGrade}`:"";I("record").textContent=`${e} · 🪙 ${dt.coins}${dt.crowns?` · 👑 ${dt.crowns}`:""}${n}`;const s=Sa(),r=s.length<zs.list.length;r&&(I("record").textContent+=` · 🔁 틀린 ${s.length}문제부터`);const a=jo(dt,s.length);a||(dt.resume=null);const o=I("continue");o.hidden=!a,a&&(o.textContent=`▶ 이어하기 (${dt.resume.index+1}번 문제부터 · ${dt.resume.score}점)`),I("start").textContent=a?"처음부터 다시":i.mode==="boss"?r?`🐉 보스전 다시 (틀린 ${s.length}문제)`:"🐉 최종 시험 시작":r?`🔁 틀린 ${s.length}문제 다시`:"게임 시작"}function ah(i=!0){if(!Mt?.round)return;const t={setKey:dt.setKey,stage:dt.stage,lap:dt.lap,index:i?Mt.index+1:Mt.index,partial:i?null:Mt.round.partial,score:Mt.score,results:Mt.results.map(e=>({...e,wrong:e.wrong.slice()})),earned:vn.slice(),lapCoins:Mn,lapWarnings:Ri,savedAt:Date.now()};dt.resume=t.index<Mt.questions.length?t:null,Jn()}function dr(){(qt==="playing"||qt==="boss"||qt==="paused")&&ah(!1)}let ia=null;function ov(){ia&&(Mt.round.restorePartial(ia),ia=null)}function oh(){const i=dt.resume;return!i||!jo(dt,Mt.questions.length)||!Mt.restore(i)?!1:(vn=i.earned.slice(),Mn=i.lapCoins,Ri=i.lapWarnings,ia=i.partial??null,!0)}function ar(i){dt.coins+=i,Mn+=i}function al(){return xs.find(i=>i.id===dt.equipped.skin)?.size??1}function ol(){const i=Bt.setTheme(_x(dt));return document.body.style.background=i.sky,Bt.setLoadout(dt.equipped,al()),Bt.setStickers(dt.stickers),i.name}function fr(){I("timer").hidden=Qe!=="speed"&&Qe!=="boss",I("timer-bar").style.width=`${Yn?Ge/Yn*100:0}%`}function lv(i){Qe!=="speed"||Ge<=0||(Ge=Math.max(0,Ge-i),fr())}function Ln(i,t,e,n=""){const s=document.createElement("div");s.className=`pop ${n}`,s.textContent=i,s.style.left=`${t}px`,s.style.top=`${e}px`,document.body.append(s),setTimeout(()=>s.remove(),n==="cheer"?1800:1e3)}function lh(){const i=Yc[Math.min(Yc.length-1,Math.floor(Mt.combo/2)-1)];Ln(i,window.innerWidth/2,window.innerHeight*.42,"praise")}function ll(){clearTimeout(Fn),Fn=window.setTimeout(()=>{qt==="playing"&&(le("🔊 다시 잘 들어 보세요",1600),qn())},nv)}function ch(){const i=Mt.round,t=fs.balloons[Bt.portrait?0:1],e=i.upcoming(tv),n=Bt.balloons.map(r=>r.ch);for(const r of e){const a=n.indexOf(r);a>=0?n.splice(a,1):Bt.spawn(r)}const s=t-Bt.balloons.length;if(s>0){const r=Bt.balloons.map(o=>o.ch),a=i.cells.filter(o=>o.kind==="target"&&!e.includes(o.ch)).map(o=>o.ch);for(const o of U_(e,[...e,...r],s,a))Bt.spawn(o)}cl()}function cl(){const i=Mt.round,t=i.hintMode||fs.hintMs>0&&performance.now()-ya>fs.hintMs;Bt.setHint(t?i.nextChar:null)}let uh=null,Lo=0,hh=0;function qn(){const i=Mt.round.text,t=Mt.round;hh++,Hu(i).then(e=>{if(Mt.round===t)return Vu(i,()=>cv(i),e).then(n=>{n&&(uh=n,I("peek").classList.remove("show"))})})}function cv(i){const t=I("peek");I("peek-text").textContent=i;const e=Qo(navigator.userAgent);I("peek-hint").textContent=e?`${Wu[e]} 안에서는 소리가 안 나요. 처음 화면의 [크롬·사파리로 열기]를 눌러요`:"이 기기에서 소리를 낼 수 없어요. 문제 만들기에서 🎙️ 녹음해 두면 어디서나 들려요",t.classList.add("show"),clearTimeout(Lo),Lo=window.setTimeout(()=>t.classList.remove("show"),4e3)}function dh(i=!1){const t=He[dt.stage];if(t.mode==="boss")return void dv(i);Qe=t.mode,fs=el(dt.level,Qe);const e=Sa();Mt=new Ou(e,Qe==="blank"?a=>mx(a,dt.level):void 0),vn=[],Mn=0,Ri=0,ih.length=0,rr=0;const n=i&&oh();n||(dt.resume=null,Jn());const s=ol();Bt.setDrift(fs.drift),Bt.clearBalloons(),Bt.setSpeaker(!0),De("playing");const r=e.length<zs.list.length;I("lap-title").textContent=n?`▶ ${Mt.index+2}번 문제부터 이어서`:r?`🔁 틀린 문제 ${e.length}개 다시`:`${t.emoji} ${t.name}`,I("lap-sub").textContent=`${t.emoji} ${t.name} ${dt.lap+1}바퀴 · ${s} · 난이도 ${"★".repeat(dt.level)}`,I("lap-desc").textContent=r?"지난번에 틀린 문제만 다시 해요. 다 맞히면 다음 단계!":t.desc,I("lap").classList.add("show"),setTimeout(()=>I("lap").classList.remove("show"),2e3),ul()}function ul(){if(!Mt.nextQuestion())return Qe==="boss"?_v():hv();if(Bt.clearBalloons(),clearTimeout(Fn),Co=!1,ya=performance.now(),ov(),Qe==="boss")return pv();Yn=Ge=Qe==="speed"?gx(Mt.round.targetCount,dt.level):0,fr(),sh(),Kn(),ch(),De("playing"),qn()}function uv(i,t){const e=wi.querySelector(`.cell[data-i="${t}"]`);if(!e)return;const n=Bt.screenPos(i),s=e.getBoundingClientRect(),r=document.createElement("div");r.className="fly",r.textContent=i.ch,r.style.left=`${n.x}px`,r.style.top=`${n.y}px`,document.body.append(r),requestAnimationFrame(()=>{r.style.left=`${s.left+s.width/2}px`,r.style.top=`${s.top+s.height/2}px`,r.style.fontSize=`${s.height*.7}px`}),setTimeout(()=>{r.remove(),rl()},330)}function fh(i){const t=Bt.screenPos(i);if(i.speaker){Pe.bonus(),Bt.nudge(i),Ln("🔊 다시 들어요",t.x,t.y-30,"bonus"),qn();return}if(i.bonus){Mt.score+=iv,ar(5),Pe.bonus(),Ln("보너스 🪙+5",t.x,t.y,"bonus"),Bt.pop(i),Bt.celebrate(),Kn();return}const e=Mt.hit(i.ch);e.ok?(ya=performance.now(),clearTimeout(Fn),Pe.pop(Mt.combo),ar(Mt.combo%5===0?3:1),Ln(`+${e.points}`,t.x,t.y-30),Mt.combo>=2&&Mt.combo%2===0&&lh(),uv(i,e.index),Bt.pop(i),Bt.shake(.6),Mt.round.misses>0&&Mt.round.hearts>0&&Ln("좋아, 바로 그거야! 👍",window.innerWidth/2,window.innerHeight*.3,"cheer"),!e.done&&!Co&&Math.random()<.4&&(Co=!0,Bt.spawnBonus()),e.done?(clearTimeout(Fn),De("between"),Bt.setHint(null),setTimeout(mh,500)):ch()):(Pe.wrong(),Bt.wobble(i),navigator.vibrate?.(60),I("hearts").classList.remove("shake"),I("hearts").offsetWidth,I("hearts").classList.add("shake"),Ln("앗!",t.x,t.y-30,"oops"),hl(Mt.round.hearts),cl(),ll(),ph()),Kn(),dr()}function hl(i){Ln(Qx(i),window.innerWidth/2,window.innerHeight*.3,"cheer")}function ph(){if(!Rx(ih,performance.now()))return;Ri++;const i=Px(dt);Jn(),rr=performance.now()+Ax,clearTimeout(Fn),ur(),Pe.attack(),navigator.vibrate?.([120,60,120]);const t=I("warn");I("warn-sub").textContent=i?`🪙 -${i} · 경고 ${dt.warnings}번째`:`경고 ${dt.warnings}번째 · 다음부터는 코인을 잃어요`,t.classList.add("show");const e=()=>{const n=Math.ceil((rr-performance.now())/1e3);if(n<=0||qt!=="playing"){t.classList.remove("show"),qt==="playing"&&qn();return}I("warn-count").textContent=`${n}초 뒤에 다시 쏠 수 있어요`,jc=window.setTimeout(e,250)};clearTimeout(jc),e(),Kn()}function mh(){const i=Mt.results[Mt.results.length-1];Pe.clear(),Bt.celebrate();const t=Kc.filter(s=>!vn.includes(s)),e=t[Math.floor(Math.random()*t.length)]??Kc[0];vn.push(e),Bt.setStickers([...new Set([...dt.stickers,...vn])]),I("clear-text").textContent=i.text,I("clear-stars").textContent="⭐".repeat(i.stars);let n="";if(Qe==="speed"&&Ge>0){const s=2+Math.ceil(Ge/Yn*8);ar(s),n=` · ⚡🪙+${s}`}else if(Qe==="boss"){const s=2+Math.max(0,$n-i.misses)*2;ar(s),n=` · 🐉🪙+${s}`}I("clear-sticker").textContent=`스티커 선물 ${e}${n}`,ah(!0),I("clear").classList.add("show"),setTimeout(()=>{I("clear").classList.remove("show"),ul()},2300)}function hv(){De("result"),Bt.setSpeaker(!1),Bt.clearBalloons(),vs();const i=He[dt.stage],t=dt.lap+1,e=Mt.results.filter(l=>l.misses>=$n).map(l=>l.text),n=e.length,s=xx(dt,Mt.wrongShots,Mt.score,e);Mn+=s.total,dt.stickers=[...new Set([...dt.stickers,...vn])],dt.resume=null,Jn();const r=He[dt.stage];I("result-title").textContent=s.crowned?"👑 모든 단계 완료!":s.perfect?"💯 하나도 안 틀렸어요!":s.advanced?"🎉 도전 성공!":"💪 거의 다 왔어요!",I("result-score").textContent=`${i.emoji} ${i.name} ${t}바퀴 · ${Mt.score}점`;let a;s.crowned?a="왕관을 받았어요! 처음 단계부터 새 배경에서 또 도전해요.":s.advanced?a=`다음 단계가 열렸어요: ${r.emoji} ${r.name}`:a=`${Qu(n,Mt.results.length)} 틀린 ${n}문제만 다시 하고, 하트가 남으면 통과예요!`,s.levelChange>0&&(a+=" (난이도 ⬆)"),s.levelChange<0&&(a+=" (조금 쉽게 해 줄게요)"),Ri&&(a+=` ⚠️ 아무 데나 쏘기 경고 ${Ri}번 — 잘 듣고 겨눠서 쏴요!`),I("result-stars").textContent=a;const o=[{label:"맞힌 글자·보너스",amount:Mn-s.total},...s.coins];I("result-coins").replaceChildren(...o.map(l=>{const c=document.createElement("li"),u=document.createElement("span");u.textContent=l.label;const d=document.createElement("b");return d.textContent=`🪙 +${l.amount}`,c.append(u,d),c})),I("result-total").textContent=`이번 바퀴 🪙 +${Mn} · 가진 코인 🪙 ${dt.coins}`,I("result-stickers").textContent=vn.join(" "),I("again").textContent=s.advanced?`${r.emoji} ${r.name} 시작`:`🔁 틀린 ${n}문제 다시 (${dt.lap+1}바퀴)`,I("result-share").hidden=!0,Bt.celebrate(s.perfect?16:5),s.perfect&&Pe.bonus(),Io()}function Io(){I("result-list").replaceChildren(...Mt.results.map(i=>{const t=document.createElement("li"),e=document.createElement("span");e.className="r-text",e.textContent=i.text;const n=document.createElement("span");if(n.className="r-stars",n.textContent=i.misses>=$n?"❌":i.misses?"🟡":"⭕",t.append(e,n),i.wrong.length){const s=document.createElement("span");s.className="r-wrong",s.textContent=`헷갈린 글자: ${i.wrong.join(" ")}`,t.append(s)}return t}))}function dl(){document.body.classList.remove("quake"),document.body.offsetWidth,document.body.classList.add("quake"),Bt.shake(1.2),navigator.vibrate?.([80,40,80])}async function dv(i=!1){Qe="boss",fs=el(dt.level,"full"),Mt=new Ou(Sa()),vn=[],Mn=0,Ri=0;const t=i&&oh();t||(dt.resume=null,Jn()),un=!0,vs();const e=Bt.setTheme(sv);document.body.style.background=e.sky,Bt.setLoadout(dt.equipped,al()),Bt.setStickers(dt.stickers),Bt.setSpeaker(!1),Bt.clearBalloons(),gn=Mt.questions.reduce((a,o)=>a+new Mo(o).targetCount,0),Wn=gn-Mt.results.reduce((a,o)=>a+new Mo(o.text).targetCount,0)-(t&&dt.resume?.partial?dt.resume.partial.filled.length:0),De("boss"),Ze.show(!0),Ze.setHp(Wn,gn),Ze.setPhase(nl(gn?Wn/gn:1),!0),wi.replaceChildren(),Yn=Ge=0,fr(),Kn(),be.enabled=!1,be.clear(),be.setTrace(null),I("pad-title").textContent="🐉 준비하세요…";const n=I("boss-load"),s=I("boss-load-sub");s.textContent="손글씨 인식 준비 중 0%",n.classList.add("show"),Pe.roar(),dl();const{loadHandwriting:r}=await ci(async()=>{const{loadHandwriting:a}=await import("./ocr.C9mz7ut4.js");return{loadHandwriting:a}},[]);try{await r(a=>s.textContent=`손글씨 인식 준비 중 ${Math.round(a*100)}%`),cn=!1}catch{cn=!0}qt==="boss"&&(n.classList.remove("show"),fv(),cn&&le("손글씨 인식을 쓸 수 없어 키보드로 글자를 적어요",3200),Ze.intro(),Pe.roar(),setTimeout(()=>qt==="boss"&&ul(),1400))}function fv(){I("pad").hidden=cn,I("pad-undo").hidden=cn,I("pad-clear").hidden=cn,I("pad-type").hidden=!cn,be.resize()}function pv(){un=!1,be.enabled=!0,be.clear(),be.setTrace(null),I("pad-type").value="",sh(),Kn(),gh(),Ea(),De("boss"),qn(),cn&&I("pad-type").focus()}function gh(){const t=Mt.round.cells.filter(e=>!e.filled).length;I("pad-title").textContent=`${cn?"⌨️":"✏️"} ${Mt.index+1}번 · 빨간 칸의 글자를 ${cn?"적어요":"써요"} (${t}글자 남음)`}function Ea(){Yn=Ge=Sx(dt.level,gn?Wn/gn:1),Po=Math.ceil(Ge),document.body.classList.remove("hurry"),fr(),ba()}function mv(i){if(un||Yn<=0)return;Ge=Math.max(0,Ge-i),fr();const t=Math.ceil(Ge);t<=rv&&(document.body.classList.add("hurry"),t<Po&&t>0&&Pe.tick()),Po=t,Ge<=0&&_h()}function fl(){be.setTrace(Mt.round.hintMode?Mt.round.nextChar:null),Mt.round.hintMode&&(I("pad-title").textContent="💡 연한 글자를 따라 써요")}function _h(){Mt.penalize(),Pe.attack(),Ze.attack("timeout"),dl(),I("hearts").classList.remove("shake"),I("hearts").offsetWidth,I("hearts").classList.add("shake"),Ln("⏰ 시간 끝!",window.innerWidth/2,window.innerHeight*.4,"oops"),hl(Mt.round.hearts),Kn(),fl(),Ea(),ll(),dr()}async function Do(){if(qt!=="boss"||un)return;ui();let i;if(cn){const t=I("pad-type");if(i=t.value.replace(/[^가-힣]/g,""),t.value="",!i)return le("글자를 적어 주세요")}else{const t=be.toImage();if(!t)return le("먼저 글자를 써 보세요 ✏️",1600);const{normalizeHandwriting:e,judgeHandwriting:n}=await ci(async()=>{const{normalizeHandwriting:l,judgeHandwriting:c}=await import("./ocr.C9mz7ut4.js");return{normalizeHandwriting:l,judgeHandwriting:c}},[]),s=e(t);if(!s)return le("먼저 글자를 써 보세요 ✏️",1600);const r=Mt.round.nextChar;if(!r)return;const a=I("pad-ok");un=!0,I("pad-panel").classList.add("busy"),a.disabled=!0,a.textContent="👀 읽는 중…";let o=null;try{o=await n(s,r)}catch{le("글자를 읽지 못했어요. 다시 써 볼까요?",2e3)}finally{un=!1,I("pad-panel").classList.remove("busy"),a.disabled=!1,a.textContent="✔ 다 썼어요"}if(qt!=="boss"||!o)return;sa=o.hint,i=o.ok?r:o.read}xh(i)}let sa="";function xh(i){const t=Mt.round.nextChar;if(!t||un)return;if(i.includes(t))return gv(t);if(be.clear(),!i){Pe.wrong(),Ze.unread();return}Mt.hit([...i][0]),Pe.attack(),Ze.attack("wrong"),dl(),I("hearts").classList.remove("shake"),I("hearts").offsetWidth,I("hearts").classList.add("shake");const e=sa?` ${sa}을(를) 또박또박!`:"";sa="",le(`'${i}'(으)로 읽혔어요.${e} 다시 잘 듣고 써요!`,2800),hl(Mt.round.hearts),Kn(),fl(),Ea(),ll(),dr()}function gv(i){const t=Mt.hit(i);if(!t.ok)return;clearTimeout(Fn),Wn=Math.max(0,Wn-1);const e=Yn>0&&Ge>Yn/2;e&&(Mt.score+=Jc),ar(Mt.combo%5===0?3:1);const n=I("boss-sprite").getBoundingClientRect(),s=n.left+n.width/2,r=n.top+n.height/2;Pe.bossHit(Mt.combo),Ze.hurt(),Ze.setHp(Wn,gn),Ze.setPhase(nl(gn?Wn/gn:0)),Bt.shake(.5),Bt.celebrate(2),Ln(`${i} +${t.points+(e?Jc:0)}`,s,r-30),e&&Ln("⚡ 빠른 공격!",s,r+30,"bonus"),Mt.combo>=2&&Mt.combo%2===0&&lh(),be.clear(),be.setTrace(null),rl(),Kn(),t.done||dr(),t.done?(un=!0,be.enabled=!1,setTimeout(mh,500)):(gh(),fl(),Ea())}function _v(){De("result"),un=!1,document.body.classList.remove("hurry"),Bt.clearBalloons(),vs();const i=Mt.results.filter(a=>a.misses>=$n).map(a=>a.text),t=Ex(dt,Mt.wrongShots,Mt.score,Date.now(),ze.title,i);Mn+=t.total,dt.stickers=[...new Set([...dt.stickers,...vn])],dt.resume=null,Jn();const e=[{label:"되찾은 글자·보너스",amount:Mn-t.total},...t.coins];if(I("result-coins").replaceChildren(...e.map(a=>{const o=document.createElement("li"),l=document.createElement("span");l.textContent=a.label;const c=document.createElement("b");return c.textContent=`🪙 +${a.amount}`,o.append(l,c),o})),I("result-total").textContent=`이번 시험 🪙 +${Mn} · 가진 코인 🪙 ${dt.coins}`,I("result-stickers").textContent=vn.join(" "),!t.cleared){Ze.say("크하하! 아직이다! 틀린 글자를 다시 써 봐라!",3e3),Pe.attack(),setTimeout(()=>Ze.show(!1),2e3),I("result-title").textContent=`💪 아직이야! 틀린 ${t.retryCount}문제`,I("result-score").textContent=`🐉 ${Mt.wrongShots}번 틀렸어요 · ${Mt.score}점`,I("result-stars").textContent=`${Qu(t.retryCount,Mt.results.length)} 하트를 다 잃은 ${t.retryCount}문제만 다시 쓰면 보스를 물리쳐요! (지금까지 ${dt.bossWrong}번 틀림 → ${t.grade}등급)`,I("again").textContent=`🐉 보스전 다시 (틀린 ${t.retryCount}문제)`,I("result-share").hidden=!0,Io();return}Ze.beaten(),Pe.victory(),Bt.celebrate(24),ci(()=>import("./ocr.C9mz7ut4.js"),[]).then(a=>a.releaseHandwriting()),setTimeout(()=>Ze.show(!1),1800);const n=t.win,s=Me.winners().find(a=>!a.friend&&a.at===n.at&&a.id===Me.current()?.id);I("result-title").textContent=`🏆 ${n.nth}회차 우승! ${t.grade}등급`,I("result-score").textContent=`🐉 글자 도둑 대왕 격파 · ${Mt.score}점${t.newBest?" · 🆕 최고 기록!":""}`;let r=n.laps===er?`⚡ ${n.laps}바퀴 만에 한 번에 우승했어요! `:`${n.laps}바퀴 만에 우승했어요. `;r+=`우승 점수 ${nr(n)}점`,s&&(r+=s.tied?` · 명예의 전당 공동 ${s.rank}위!`:` · 명예의 전당 ${s.rank}위!`),r+=t.grade==="S"?" 한 글자도 안 틀렸어요!":` (${t.grade}등급: 보스전에서 틀린 횟수로 정해요)`,t.levelChange>0&&(r+=" (난이도 ⬆)"),I("result-stars").textContent=r,I("again").textContent=`${He[0].emoji} 새 배경에서 처음부터 다시`,I("result-share").hidden=!1,Io()}function xv(){const i=Qo(navigator.userAgent),t=I("inapp");t.hidden=!i,i&&(I("inapp-text").textContent=`${Wu[i]} 안에서는 소리가 안 나올 수 있어요.`)}function vv(){I("inapp-open").addEventListener("click",async()=>{const i=location.href,t=cx(Qo(navigator.userAgent),i);if(t){location.href=t;return}try{await navigator.clipboard.writeText(i),le("주소를 복사했어요. 크롬이나 사파리에 붙여 넣어 열어요",3200)}catch{le('오른쪽 위 메뉴에서 "다른 브라우저로 열기"를 눌러요',3200)}})}function vh(){clearTimeout(Fn),ur(),vs(),De("login"),I("login-form").hidden=!1,I("login-new").hidden=!0,I("login-msg").textContent="",I("new-msg").textContent="",I("login-id").value="",I("login-pw").value="",I("login-known").replaceChildren(...Me.list().slice(0,8).map(t=>{const e=document.createElement("button");return e.type="button",e.className="chip-btn",e.textContent=t.name?`👤 ${t.name} (@${t.id})`:`👤 @${t.id}`,e.title=sl(t),e.addEventListener("click",()=>{I("login-id").value=t.id,I("login-pw").focus()}),e}))}function tu(i,t){dt=i.save,th(),ui(),Sn();const e=Ti(i);t?le(`🌟 ${e} 친구, 환영해요! 아이디는 @${i.id}예요`,3e3):jo(dt,Sa().length)?le(`👋 ${e} 친구, 어서 와요! 하던 바퀴를 이어서 할 수 있어요`,3e3):le(`👋 ${e} 친구, 어서 와요!`,2600),Me.writeFailed&&setTimeout(()=>le("⚠️ 이 브라우저는 저장이 안 돼요(시크릿 모드?). 기록이 남지 않을 수 있어요",4e3),2800),sr&&(sr=null,pa())}function Mv(){const i=I("login-id").value,t=I("new-id");t.value=i.trim()?Me.suggestId(i):"",I("new-pw").value=I("login-pw").value,I("new-name").value="",I("new-school").value="",I("new-msg").textContent=i.trim()&&Me.has(i)?`'${_n(i)}'은(는) 이미 있어서 '${t.value}'을(를) 제안해요.`:"",I("login-form").hidden=!0,I("login-new").hidden=!1,(t.value?I("new-pw"):t).focus()}function Sv(){const i=I("login-id"),t=I("login-pw"),e=I("login-msg");I("login-form").addEventListener("submit",n=>{n.preventDefault();const s=(_n(i.value)?null:"아이디를 적어 주세요.")??Yu(t.value);if(s)return void(e.textContent=s);if(!Me.has(i.value)){e.textContent="없는 아이디예요. 처음이면 아래 [새로 만들기]를 눌러요.";return}const r=Me.login(i.value,t.value);if("error"in r)return void(e.textContent=r.error);tu(r,!1)}),I("login-first").addEventListener("click",Mv),I("login-create").addEventListener("click",()=>{const n=I("new-id").value,s=I("new-pw").value,r=I("new-name").value,a=I("new-school").value,o=I("new-msg");if(Me.has(n)){const c=Me.suggestId(n);o.textContent=`'${_n(n)}'은(는) 이미 쓰는 아이디예요. '${c}'은(는) 어때요?`,I("new-id").value=c;return}const l=Me.register(n,s,{name:r,school:a});if("error"in l)return void(o.textContent=l.error);I("login-form").hidden=!1,I("login-new").hidden=!0,tu(l,!0)}),I("login-back").addEventListener("click",()=>{I("login-form").hidden=!1,I("login-new").hidden=!0,i.focus()}),I("logout").addEventListener("click",()=>{Jn(),Me.logout(),dt=Ma(),vh()}),I("player-name").addEventListener("click",yv),I("profile-save").addEventListener("click",()=>{const n=I("profile-name").value,s=I("profile-school").value,r=Me.updateProfile({name:n,school:s});if(r)return void(I("profile-msg").textContent=r);le("내 정보를 저장했어요",1600),Sn()}),I("profile-cancel").addEventListener("click",Sn)}function yv(){const i=Me.current();!i||qt!=="menu"||(I("profile-id").textContent=`아이디 @${i.id}`,I("profile-name").value=i.name,I("profile-school").value=i.school,I("profile-msg").textContent="",De("profile"))}function pa(){qt!=="fame"&&(nh=qt),Ev(),I("share-box").hidden=!0,De("fame")}function bv(i){if(!i)return"";const t=new Date(i);return`${t.getFullYear()}.${t.getMonth()+1}.${t.getDate()}`}function Ev(){const i=Me.current(),t=["🥇","🥈","🥉"];I("fame-share").hidden=!i;const e=Me.winners();I("hall-share").hidden=!e.length,I("winners-list").replaceChildren(...e.map(n=>{const s=document.createElement("li");i&&!n.friend&&n.id===i.id&&s.classList.add("me"),n.rank===1&&s.classList.add("top");const r=document.createElement("span");r.className="f-rank",r.textContent=n.rank<=3?t[n.rank-1]:`${n.rank}위`,n.tied&&(r.textContent=`공동 ${r.textContent}`);const a=document.createElement("span");a.className="f-name",a.textContent=`${Ti(n)}${n.friend?" 👫":""} · ${n.nth}회차 우승`;const o=document.createElement("span");o.className="f-fame",o.textContent=`${n.points}점`;const l=document.createElement("span");l.className="f-detail";const c=n.laps===er?`⚡ ${n.laps}바퀴 만에 한 번에!`:`${n.laps}바퀴 만에`;return l.textContent=`@${n.id}${n.school?` · ${n.school}`:""} · ${c} · ${n.grade}등급 · 시험 ${n.score}점 · ${bv(n.at)}`,s.append(r,a,o,l),s})),I("fame-list").replaceChildren(...Me.records().map((n,s)=>{const r=document.createElement("li");i&&!n.friend&&n.id===i.id&&r.classList.add("me");const a=document.createElement("span");a.className="f-rank",a.textContent=t[s]??`${s+1}`;const o=document.createElement("span");o.className="f-name",o.textContent=n.friend?`${Ti(n)} 👫`:Ti(n);const l=document.createElement("span");l.className="f-fame",l.textContent=`${ir(n)}점`;const c=document.createElement("span");c.className="f-detail";const u=n.bossClears?`${n.bossGrade}등급 ${n.bossBest}점`:"도전 중";return c.textContent=`@${n.id}${n.school?` · ${n.school}`:""} · 👑 ${n.crowns} · ⭐ ${n.best} · 🐉 ${u}${n.friend?" · 링크로 받은 친구":""}`,r.append(a,o,l,c),r}))}async function eu(){const i=Me.current();if(!i)return;const t=Ku(i,dt,Date.now()),e=I("share-card");Jx(e,t);const n=I("share-box");n.hidden=!1;const s=I("share-status");s.textContent="자랑 카드를 만들었어요…";const r=await Zx(e,t);I("share-text").value=r.text;try{I("share-download").href=e.toDataURL("image/png")}catch{I("share-download").hidden=!0}s.textContent=r.how==="shared"?"친구에게 보냈어요! 링크를 열면 친구의 명예의 전당에 내 기록이 들어가요.":r.how==="copied"?"자랑 글을 복사했어요. 메신저에 붙여 넣어 친구에게 보내요!":"아래 글을 복사해서 친구에게 보내요. 링크를 열면 내 기록이 친구 화면에 나와요.",n.scrollIntoView({behavior:"smooth",block:"nearest"})}function Tv(){I("fame-open").addEventListener("click",pa),I("result-share").addEventListener("click",()=>{pa(),eu()}),I("fame-share").addEventListener("click",()=>void eu()),I("hall-share").addEventListener("click",async()=>{const i=Me.records().filter(s=>s.wins.length),t=new URL(location.href);t.search="",t.hash=`hall=${Ju(i)}`;const e=`🏆 우리 명예의 전당! 우승자 ${i.length}명 — 구경하기 👉 ${t.href}`,n=navigator;try{typeof n.share=="function"?await n.share({text:e}):(await navigator.clipboard.writeText(e),le("명예의 전당 링크를 복사했어요. 친구·선생님께 보내요!",2600))}catch{I("share-box").hidden=!1,I("share-text").value=e,I("share-status").textContent="아래 링크를 복사해서 보내요"}}),I("share-copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(I("share-text").value),le("복사했어요! 친구에게 붙여 넣어요",1800)}catch{I("share-text").select(),le("글을 길게 눌러 복사해요",1800)}}),I("fame-close").addEventListener("click",()=>{nh==="result"?De("result"):Sn()})}function wv(){const i=location.hash.match(/(brag|hall)=([A-Za-z0-9_-]+)/);if(!i)return;history.replaceState(null,"",location.pathname+location.search);const t=Gx(i[2]);if(!t)return le("링크를 읽을 수 없어요",2600);for(const e of t)Vx(ju,e);sr=t[0],le(t.length===1?`👫 ${Ti(t[0])} 친구의 기록이 도착했어요! 명예의 전당에서 비교해 봐요`:`🏆 친구 ${t.length}명의 우승 기록이 도착했어요! 명예의 전당을 열어요`,4e3)}const Av={skin:"물총 (크기가 달라요)",stream:"물줄기",pop:"터지는 효과"};function Cv(i){return i<=.8?"아주 작음":i<1?"작음":i===1?"보통":i<1.3?"큼":i<1.6?"아주 큼":"거대!"}function nu(){qt!=="shop"&&(eh=qt),Mh(),De("shop")}function Mh(){I("shop-coins").textContent=`🪙 ${dt.coins}`;const i=I("shop-list");i.replaceChildren();for(const t of["skin","stream","pop"]){const e=document.createElement("h3");e.textContent=Av[t];const n=document.createElement("div");n.className="shop-grid";for(const s of xs.filter(r=>r.kind===t)){const r=dt.owned.includes(s.id),a=dt.equipped[t]===s.id,o=document.createElement("button");o.type="button",o.className=`item${a?" on":""}${r?" owned":""}${s.final?" final":""}${!r&&dt.coins<s.price?" locked":""}`;const l=document.createElement("span");l.className="item-icon",l.textContent=s.emoji,s.size&&(l.style.fontSize=`${Math.round(22+s.size*12)}px`);const c=document.createElement("span");c.className="item-name",c.textContent=s.final?`👑 ${s.name}`:s.name;const u=document.createElement("span");u.className="item-desc",u.textContent=s.kind==="skin"&&s.size?`${Cv(s.size)} · ${s.desc}`:s.desc;const d=document.createElement("span");d.className="item-tag",d.textContent=a?"사용 중":r?"바꾸기":`🪙 ${s.price}`,o.append(l,c,u,d),o.addEventListener("click",()=>Rv(s.id)),n.append(o)}i.append(e,n)}}function Rv(i){const t=xs.find(e=>e.id===i);if(ui(),dt.owned.includes(i))Mx(dt,i);else if(vx(dt,i))Pe.bonus(),le(`${t.emoji} ${t.name}을(를) 샀어요!`,1800);else return le(`코인이 ${t.price-dt.coins}개 더 필요해요. 받아쓰기로 모아요!`,2200);Jn(),Bt.setLoadout(dt.equipped,al()),Pe.shoot(),Bt.fire({x:0,y:.25},0),Bt.celebrate(2),Mh()}function Fs(){qt!=="playing"&&qt!=="boss"||qt==="boss"&&un||(Ro=qt,De("paused"),clearTimeout(Fn),ur(),vs(),dr())}function iu(){qt==="paused"&&(De(Ro),ya=performance.now(),Ro==="boss"&&ba())}function Pv(){eh==="result"?De("result"):Sn()}function Sn(){clearTimeout(Fn),ur(),vs(),Qe==="boss"&&(un=!1,Ze.show(!1),document.body.classList.remove("hurry"),ci(()=>import("./ocr.C9mz7ut4.js"),[]).then(i=>i.releaseHandwriting())),Qe="full",De("menu"),ol(),Sh(),rh()}function Sh(){Bt.setSpeaker(!1),Bt.clearBalloons();for(const i of"받아쓰기풍선")Bt.spawn(i)}function Ta(i){ze=i,dt.setId=i.id,Sn()}function Lv(){yh(),De("rounds")}function yh(){I("rounds-list").replaceChildren(...Fe.map(t=>{const e=document.createElement("li");e.className=`round${t.id===ze.id?" on":""}`;const n=document.createElement("button");n.type="button",n.className="round-main";const s=document.createElement("span");s.className="round-title",s.textContent=`${t.custom?"✏️ ":""}${t.title}`;const r=document.createElement("span");r.className="round-detail";const a=$u(t.questions),o=t.id===ze.id?{stage:dt.stage,lap:dt.lap,resume:dt.resume}:dt.sets[a],l=dt.wins.filter(u=>u.set===t.title).length,c=[`${t.questions.length}문제`];if(o?c.push(`${He[o.stage].emoji} ${He[o.stage].name} ${o.lap+1}바퀴째`):c.push("아직 안 했어요"),o?.resume&&c.push(`▶ ${o.resume.index+1}번부터 이어하기`),l&&c.push(`🏆 우승 ${l}회`),r.textContent=c.join(" · "),n.append(s,r),n.addEventListener("click",()=>Ta(t)),e.append(n),t.custom){const u=document.createElement("button");u.type="button",u.className="round-btn",u.textContent="✏️",u.title="고치기",u.addEventListener("click",()=>ra(t,!1));const d=document.createElement("button");d.type="button",d.className="round-btn",d.textContent="🗑",d.title="지우기",d.addEventListener("click",()=>{Y_(t.id),Fe=tr(),ze.id===t.id&&(ze=Fe[0]),le(`'${t.title}' 회차를 지웠어요`,1800),yh()}),e.append(u,d)}return e}))}let No=null,is=null,Os=0;function ra(i,t){No=i?.custom?i.id:null,I("ed-title").value=i?i.custom?i.title:`${i.title} (내 문제)`:t?"사진 문제":"내 문제",I("ed-text").value=i?i.questions.join(`
`):"",I("ed-photo").hidden=!t,I("ed-status").textContent=t?"글자가 똑바로 보이게 돌린 뒤 [글자 읽기]를 눌러요.":i&&!i.custom?"급수표 문제예요. 🎙️ 녹음만 할 거면 녹음 뒤 [취소], 고쳐서 저장하면 내 회차로 복사돼요.":'한 줄에 한 문제씩 적어요. "7회 [제목]" 같은 줄을 넣으면 여러 회차로 나뉘어요.',De("editor"),pr()}function Iv(){const i=I("ed-text").value,t=I("ed-title").value.trim()||"내 문제",e=ku(i,t);if(!e.length)return le("문제가 없어요. 한 줄에 한 문제씩 적어 주세요.");let n;No&&e.length===1&&(n=q_(No,t,e[0].questions)??void 0),n||(e.length===1&&(e[0].title=t),n=zu(e)[0]),Fe=tr(),is=null,Ta(Fe.find(s=>s.id===n.id)??Fe[0]),le(e.length>1?`회차 ${e.length}개를 저장했어요!`:`'${n.title}' ${n.questions.length}문제를 저장했어요!`)}let Ai=null,or=null,Dv=0;async function pr(){const i=I("ed-rec"),t=bo(I("ed-text").value);if(i.hidden=!t.length,!t.length)return;const e=await rx(),n=ax();I("ed-rec-title").textContent=`🎙️ 내 목소리로 녹음 (${t.filter(s=>e.has(us(s))).length}/${t.length})`,I("ed-rec-note").textContent=n?"녹음해 두면 소리가 안 나는 기기에서도 내 목소리로 문제를 들려줘요. 한 줄에 8초까지.":"이 브라우저는 녹음을 지원하지 않아요. 크롬이나 사파리에서 녹음해요.",I("ed-rec-list").replaceChildren(...t.map(s=>{const r=document.createElement("div");r.className="rec-row";const a=document.createElement("span");a.className="rec-text",a.textContent=(e.has(us(s))?"✅ ":"")+s;const o=(l,c,u)=>{const d=document.createElement("button");return d.type="button",d.className=`rec-btn ${c}`,d.textContent=l,d.addEventListener("click",u),d};return r.append(a),or===s?(r.classList.add("recording"),r.append(o("⏹ 끝","stop",()=>void Uo(s)))):(n&&r.append(o("🎙️","rec",()=>void Nv(s))),e.has(us(s))&&(r.append(o("▶","play",()=>void Uv(s))),r.append(o("🗑","del",()=>sx(s).then(pr))))),r}))}async function Nv(i){Ai&&await Uo(or),ui();try{Ai=await lx(8e3,()=>void Uo(i))}catch{return le("마이크를 쓸 수 없어요. 마이크 사용을 허용해 주세요",3e3)}or=i,le(`🎙️ 녹음 중… "${i}" 을(를) 또박또박 읽어요`,8e3),pr()}async function Uo(i){const t=Ai;if(!t)return;Ai=null,or=null,clearTimeout(Dv);const e=await t.stop();e.size<200?le("녹음이 너무 짧아요. 다시 해 봐요",2e3):(await ix(i,e),le("녹음했어요! ▶ 로 들어 봐요",1800)),pr()}async function Uv(i){ui();const t=await Hu(i);t&&await Vu(i,()=>le("재생할 수 없어요",1600),t)}function Fv(){const i=I("ed-canvas"),t=I("ed-text"),e=I("ed-scan");I("photo").addEventListener("change",async s=>{const r=s.target,a=r.files?.[0];if(r.value="",!a)return;try{is=await createImageBitmap(a)}catch{return le("사진을 열 수 없어요.")}Os=0;const{drawRotated:o}=await ci(async()=>{const{drawRotated:l}=await import("./ocr.C9mz7ut4.js");return{drawRotated:l}},[]);o(i,is,Os),ra(null,!0)}),I("ed-rotate").addEventListener("click",async()=>{if(!is)return;Os=(Os+1)%4;const{drawRotated:s}=await ci(async()=>{const{drawRotated:r}=await import("./ocr.C9mz7ut4.js");return{drawRotated:r}},[]);s(i,is,Os)}),e.addEventListener("click",async()=>{if(!is||e.disabled)return;e.disabled=!0;const s=I("ed-status");s.textContent="글자를 읽을 준비를 하고 있어요…";try{const{cleanForOcr:r,recognize:a}=await ci(async()=>{const{cleanForOcr:l,recognize:c}=await import("./ocr.C9mz7ut4.js");return{cleanForOcr:l,recognize:c}},[]),o=await a(r(i),l=>{s.textContent=`글자를 읽고 있어요… ${Math.round(l*100)}%`});o.length?(t.value=o.join(`
`),s.textContent=`${o.length}줄을 읽었어요. 틀린 글자·띄어쓰기를 고치고, 필요 없는 줄은 지운 뒤 저장해요.`):s.textContent="글자를 찾지 못했어요. 사진을 돌려 보거나 아래에 직접 적어 주세요."}catch{s.textContent="글자 읽기에 실패했어요. 아래에 직접 적어 주세요."}finally{e.disabled=!1}}),I("write").addEventListener("click",()=>ra(ze,!1)),I("set-pick").addEventListener("click",Lv),I("rounds-close").addEventListener("click",Sn),I("rounds-write").addEventListener("click",()=>ra(null,!1));let n=0;t.addEventListener("input",()=>{clearTimeout(n),n=window.setTimeout(()=>void pr(),500)}),I("ed-cancel").addEventListener("click",()=>{Ai&&Ai.cancel(),Ai=null,or=null,Sn()}),I("ed-save").addEventListener("click",Iv)}function ho(){if(!(Ys||!In.requestPointerLock))try{In.requestPointerLock()?.catch?.(()=>Ys=!0)}catch{Ys=!0}}function vs(){Gs()&&document.exitPointerLock()}function Jr(i){const t=In.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-((i.clientY-t.top)/t.height*2-1)}}function Vs(i){if(qt!=="playing")return;const t=performance.now();if(t<rr||t-Zc<jx)return;Zc=t,Pe.shoot(),navigator.vibrate?.(18);const e=Bt.fire(i,i?1.35:1.15);if(Ov(i??{x:0,y:0},!!e),!e)return ph();setTimeout(()=>{qt==="playing"&&(Bt.balloons.includes(e)||Bt.bonus===e||Bt.speaker===e)&&fh(e)},ev)}function Ov(i,t){const e=In.getBoundingClientRect(),n=document.createElement("div");n.className=t?"marker hit":"marker",n.style.left=`${e.left+(i.x+1)/2*e.width}px`,n.style.top=`${e.top+(1-i.y)/2*e.height}px`,document.body.append(n),setTimeout(()=>n.remove(),320)}function Bv(){In.addEventListener("pointerdown",e=>{if(ui(),qt==="playing"){if(e.pointerType==="mouse"){if(e.button!==0)return;Gs()?Vs(null):Ys?Vs(Jr(e)):ho();return}sn={id:e.pointerId,x:e.clientX,y:e.clientY,moved:!1},Bt.aim(Jr(e))}}),In.addEventListener("pointermove",e=>{if(qt!=="playing")return;if(Gs())return Bt.look(-e.movementX*.0022,-e.movementY*.0022);if(e.pointerType==="mouse")return Bt.aim(Jr(e));if(!sn||sn.id!==e.pointerId)return;const n=e.clientX-sn.x,s=e.clientY-sn.y;!sn.moved&&Math.hypot(n,s)<14||(sn.moved=!0,sn.x=e.clientX,sn.y=e.clientY,Bt.look(n*.003,s*.003))});const i=(e,n)=>{!sn||sn.id!==e.pointerId||(n&&!sn.moved&&Vs(Jr(e)),sn=null)};In.addEventListener("pointerup",e=>i(e,!0)),In.addEventListener("pointercancel",e=>i(e,!1)),document.addEventListener("pointerlockerror",()=>Ys=!0),document.addEventListener("pointerlockchange",()=>{document.body.classList.toggle("locked",Gs()),!Gs()&&qt==="playing"&&Fs()}),window.addEventListener("keydown",e=>{const n=e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement;e.code==="Space"&&qt==="playing"?(e.preventDefault(),Vs(null)):e.code==="Enter"&&qt==="boss"?(e.preventDefault(),Do()):e.code==="KeyR"&&(qt==="playing"||qt==="boss")&&!n?qn():(e.code==="Escape"||e.code==="KeyP"&&!n)&&(qt==="playing"||qt==="boss"?Fs():qt==="paused"&&iu())});const t=(e,n=!1)=>{ui();const s=He[dt.stage].mode==="boss";dh(n),!s&&e.pointerType==="mouse"&&ho()};I("start").addEventListener("click",e=>t(e)),I("continue").addEventListener("click",e=>t(e,!0)),I("again").addEventListener("click",e=>t(e)),I("home").addEventListener("click",Sn),I("shop-open").addEventListener("click",nu),I("result-shop").addEventListener("click",nu),I("shop-close").addEventListener("click",Pv),I("quit").addEventListener("click",Sn),I("replay").addEventListener("click",()=>qt==="playing"&&qn()),I("pause").addEventListener("click",Fs),I("resume").addEventListener("click",e=>{iu(),qt==="playing"&&e.pointerType==="mouse"&&ho()}),be=new Xx(I("pad")),I("pad-ok").addEventListener("click",()=>void Do()),I("pad-undo").addEventListener("click",()=>be.undo()),I("pad-clear").addEventListener("click",()=>be.clear()),I("pad-replay").addEventListener("click",()=>qt==="boss"&&qn()),I("pad-pause").addEventListener("click",Fs),I("pad").addEventListener("pointerdown",ui),Fv(),Sv(),Tv(),vv(),xv(),I("file").addEventListener("change",async e=>{const n=e.target,s=n.files?.[0];if(n.value="",!s)return;const r=ku(await s.text(),s.name.replace(/\.[^.]+$/,"")||"올린 문제");if(!r.length)return le("문제를 찾지 못했어요. 한 줄에 한 문제씩 적어 주세요.");const a=zu(r);Fe=tr(),Ta(Fe.find(o=>o.id===a[0].id)??Fe[0]),le(r.length>1?`회차 ${r.length}개를 올렸어요! 회차를 골라 시작해요`:`'${a[0].title}' ${a[0].questions.length}문제를 올렸어요!`,3e3)}),I("reset").addEventListener("click",()=>{K_(),Fe=tr(),ze=Fe[0],Sn(),le("올린 문제를 지우고 급수표만 남겼어요",2200)}),document.addEventListener("visibilitychange",()=>document.hidden&&Fs()),window.addEventListener("resize",()=>{Bt.resize(),be.resize(),ba()}),document.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("dblclick",e=>e.preventDefault())}async function kv(){await Promise.race([document.fonts.load("150px Jua","한글"),new Promise(s=>setTimeout(s,1500))]).catch(()=>{}),Bt=new A_(In),Bv(),wv(),ol(),Sh(),Me.current()?(th(),De("menu"),rh(),sr&&(sr=null,pa())):vh();let t=performance.now(),e=0;const n=s=>{const r=Math.min(.05,(s-t)/1e3);t=s,qt==="playing"&&lv(r),qt==="boss"&&mv(r),qt==="playing"&&(e+=r)>.5&&(e=0,cl()),Bt.update(qt==="paused"?0:r),requestAnimationFrame(n)};requestAnimationFrame(n),window.__game={get state(){return qt},get game(){return Mt},get stage(){return Bt},get save(){return dt},get users(){return Me},get pad(){return be},get boss(){return{hp:Wn,max:gn,busy:un,fallback:cn,timeLeft:Ge}},get calm(){return performance.now()<rr},get lastSpeak(){return uh},get reads(){return hh},get sets(){return Fe},get current(){return ze},chooseSet(s){const r=Fe.find(a=>a.id===s);return r&&Ta(r),!!r},startGame:dh,readQuestion:qn,shootAt(s,r){Vs({x:s,y:r})},hitChar(s){const r=Bt.balloons.find(a=>a.ch===s);return r&&qt==="playing"&&fh(r),!!r},write(s){return qt!=="boss"?Promise.resolve(!1):(be.stamp(s),Do().then(()=>!0))},written(s){return qt!=="boss"?!1:(xh(s),!0)},timeout(){qt==="boss"&&_h()},async judge(s,r){be.stamp(s);const{normalizeHandwriting:a,judgeHandwriting:o}=await ci(async()=>{const{normalizeHandwriting:c,judgeHandwriting:u}=await import("./ocr.C9mz7ut4.js");return{normalizeHandwriting:c,judgeHandwriting:u}},[]),l=a(be.toImage());return be.clear(),l?o(l,r):null}}}kv();export{zv as J,ci as _,hi as a,Mi as c,Vv as d,ha as i,Fu as j,Gv as l,Hv as m};
