import{r as ct}from"./index.DLkBFFtG.js";var jr={exports:{}},Li={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka;function Uc(){if(Ka)return Li;Ka=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(n,r,s){var a=null;if(s!==void 0&&(a=""+s),r.key!==void 0&&(a=""+r.key),"key"in r){s={};for(var o in r)o!=="key"&&(s[o]=r[o])}else s=r;return r=s.ref,{$$typeof:i,type:n,key:a,ref:r!==void 0?r:null,props:s}}return Li.Fragment=e,Li.jsx=t,Li.jsxs=t,Li}var Qa;function Fc(){return Qa||(Qa=1,jr.exports=Uc()),jr.exports}var v=Fc();const Dr={flash:{name:"Flash",kelvin:"5500K",label:"⚡ Flash (5500K)",tintColor:"#ffffff",tintOpacity:0,description:"Padrão Ouro Odonto: luz branca neutra calibrada (5500K). Cores 100% fiéis para resina e cerâmica."},cloudy:{name:"Nublado / Sombra",kelvin:"6500K",label:"☁️ Nublado (6500K)",tintColor:"#d97706",tintOpacity:.24,description:"Tom quente e amarelado. Perigo: induz o dentista a escolher uma cor de resina mais escura (ex: A3 ao invés de A1)."},tungsten:{name:"Tungstênio",kelvin:"3200K",label:"💡 Tungstênio (3200K)",tintColor:"#0284c7",tintOpacity:.24,description:"Tom frio e azulado. Acinzenta o dente e apaga a leitura natural do halo incisal e da opalescência."},custom:{name:"Cartão Cinza 18%",kelvin:"Custom 5500K",label:"🎯 Cinza 18%",tintColor:"#ffffff",tintOpacity:0,description:"Calibração milimétrica personalizada feita com cartão cinza 18% no plano de foco."}};function al(i){const e=i.split("/");return e.length===2?1/parseFloat(e[1]):parseFloat(i)}const Aa={60:{name:"60mm f/2.8 Macro",label:"60mm",workingDistanceCm:15,magnification:"1:1",perspective:"Ligeira distorção convexa nos dentes anteriores pelo ângulo aberto próximo.",clinicalAdvantage:"Muito próximo à boca do paciente. Risco de encostar no afastador labial e assustar o paciente.",fieldOfView:39},85:{name:"85mm f/2.8 Macro",label:"85mm",workingDistanceCm:22,magnification:"1:1.5",perspective:"Excelente para fotografia de face e sorriso completo (1:2).",clinicalAdvantage:"Boa distância para fotografia de sorriso e lábios em repouso.",fieldOfView:28},100:{name:"100mm f/2.8L Macro",label:"100mm (Padrão Ouro)",workingDistanceCm:32,magnification:"1:1",perspective:"Zero distorção. Proporções anatômicas reais dos incisivos e caninos.",clinicalAdvantage:"Distância perfeita (~32cm). Espaço ideal para posicionar flashes Twin e espelhos oclusais sem colidir.",fieldOfView:24},180:{name:"180mm f/3.5 Tele-Macro",label:"180mm (Cirúrgico)",workingDistanceCm:55,magnification:"1:1",perspective:"Alta compressão de planos e fundo totalmente isolado.",clinicalAdvantage:"Excelente para cirurgias periodontais e implantes: dentista fica a 55cm sem contaminar o campo cirúrgico.",fieldOfView:13}};function Oc(i){const{focalLength:e,shutterSpeed:t,iso:n,aperture:r,flashMode:s,whiteBalance:a}=i,o=al(t),l=o<1/220&&s!=="off";let c=0;s==="off"?o>1/100&&(c=o/(1/30)*14):o>1/40?c=3.5:o>1/80?c=1:c=0;let u=0;r<=2.8?u=16:r<=4?u=11:r<=5.6?u=7.5:r<=8?u=4.5:r<=11?u=2.5:r<=16?u=1:r<=22?u=0:u=.4;let h=0;n===100?h=0:n===200?h=.04:n===400?h=.12:n===800?h=.25:n===1600?h=.45:n===3200?h=.7:h=.92;let d=0;if(s==="off"){const A=7.5-(Math.log2(r*r/o)-Math.log2(n/100));d=Math.max(-3,Math.min(3,A))}else{let S=0;const A={2.8:6,4:5,5.6:4,8:3,11:2,16:1,22:0,32:-1}[r],y=Math.log2(n/100);S=A+y,l&&(S-=1.5),d=Math.max(-3,Math.min(3,S))}let f=0;s==="off"?f=.85:o>1/40?f=.6:o>1/80?f=.25:f=0;const x=[],b=[];let m=100;e===100?(b.push({text:"Distância Focal Ouro (100mm)",type:"success"}),x.push("A lente 100mm Macro proporciona a distância de trabalho ergonômica ideal (~32cm), sem deformação anatômica dos incisivos.")):e===60?(m-=10,b.push({text:"60mm: Distância Muito Curta",type:"warning"}),x.push("Lente 60mm obriga o dentista a fotografar a 15cm da boca. Risco de assustar o paciente, bater no espelho oclusal e distorcer a linha média.")):e===180?(m-=5,b.push({text:"180mm: Macro Teleobjetiva",type:"info"}),x.push("Distância de 55cm excelente para cirurgia/periodontia, mas lente é pesada e exige muita estabilização manual.")):e===85&&(b.push({text:"85mm: Ideal para Retrato/Face",type:"info"}),x.push("Ótima distância para fotografias de sorriso completo (1:2) e terço inferior da face.")),l?(m-=40,b.push({text:"Erro de Sincronismo do Flash",type:"danger"}),x.push("ALERTA: Velocidade muito alta ("+t+"s)! A cortina do obturador fechou antes do flash terminar, gerando faixa preta na foto.")):o>1/60?(m-=25,b.push({text:"Velocidade Lenta (Tremor)",type:"danger"}),x.push("Velocidade lenta ("+t+"s) causa foto tremida pelo tremor natural das mãos e respiração do paciente, além de captar luz amarelada do consultório.")):o>=1/200&&o<=1/125&&(b.push({text:"Velocidade de Sincronismo Perfeita ("+t+")",type:"success"}),x.push("Velocidade ideal ("+t+"s): congela movimentos e anula completamente a luz espúria do consultório.")),n===100?(b.push({text:"ISO 100: Máxima Fidelidade de Cor",type:"success"}),x.push("ISO 100 garante ruído zero, permitindo mapeamento de mamelos, opalescência e halo incisal para estratificação de resinas.")):n<=400?(m-=8,b.push({text:"ISO Moderado",type:"info"}),x.push("Leve textura digital aceitável, mas ISO 100 é preferível para documentação estética.")):(m-=30,b.push({text:"ISO Elevado: Ruído Destrutivo",type:"danger"}),x.push("ISO muito alto ("+n+") gera granulação pesada. Impossibilita diagnóstico refinado de trincas de esmalte e seleção de cor VITA.")),r>=22&&r<=25?(b.push({text:"f/22: Profundidade Total de Arco",type:"success"}),x.push("Abertura f/22 garante foco cravado desde os incisivos centrais até os caninos e papilas gengivais na escala 1:1.")):r<=4?(m-=35,b.push({text:"Abertura Muito Aberta (f/"+r+")",type:"danger"}),x.push("Abertura excessivamente aberta em macro resulta em profundidade de campo milimétrica (< 1mm). Apenas a ponta do dente fica nítida!")):r<=8?(m-=15,b.push({text:"f/"+r+": Foco Raso",type:"warning"}),x.push("f/"+r+" é bom para retrato de rosto, mas insuficiente para foto intraoral de arco completo (caninos desfocados).")):r===32&&(m-=5,b.push({text:"f/32: Leve Difração Óptica",type:"info"}),x.push("f/32 dá máxima profundidade, mas a difração óptica da lente reduz sutilmente o micro-contraste do esmalte.")),s==="off"?(m=Math.min(m,30),b.push({text:"Sem Flash Estroboscópico",type:"danger"}),x.push("Fotografia macro intraoral sem flash depende da luz ambiente do consultório, que contamina as cores dentárias com tons amarelados (3000K).")):s==="twin"?(b.push({text:"Flash Twin (Estética & Textura)",type:"success"}),x.push("Flash Twin lateral cria micro-sombras ideais para destacar as periquimáceas e linhas de desenvolvimento vestibular do esmalte.")):s==="studio"?(b.push({text:"Flash de Estúdio (Softbox)",type:"success"}),x.push("Flash de Estúdio com Softbox/Stripbox: Luz suave e difusa com reflexos alongados nas arestas de transição dos dentes. Padrão nobre para fotografia de protocolo estético e cursos odontológicos.")):s==="ring"&&(b.push({text:"Flash Ring (Luz Circular Plana)",type:"info"}),x.push('Flash Circular ilumina fundo de boca e molares sem sombras, ideal para ortodontia e oclusal, embora "achate" um pouco a textura vestibular.')),a==="flash"?(b.push({text:"WB Flash (5500K Neutro)",type:"success"}),x.push("Balanço de Branco em 5500K (Flash): Temperatura neutra ideal, garantindo fidelidade de cor para seleção de resinas e cerâmicas.")):a==="custom"?(b.push({text:"WB Cartão Cinza 18%",type:"success"}),x.push("Calibração personalizada com cartão cinza 18%: Precisão laboratorial máxima para tomada de cor e envio ao protético.")):a==="cloudy"?(m-=20,b.push({text:"WB Nublado: Tom Amarelado",type:"warning"}),x.push("ALERTA WB (6500K): Imagem excessivamente quente/amarelada. Risco de induzir o dentista a escolher uma resina mais escura que o dente real.")):a==="tungsten"&&(m-=25,b.push({text:"WB Tungstênio: Tom Frio/Azulado",type:"danger"}),x.push("ALERTA WB (3200K): A câmera aplica filtro azul, deixando os dentes acinzentados e destruindo a leitura da opalescência incisal.")),m=Math.max(10,Math.min(100,m));let p="Excelente Configuração Clínica";m<40?p="Foto Inadequada para Documentação":m<75&&(p="Configuração com Restrições Clínicas");let w="good",R="Exposição correta (luz equilibrada)";return d<-1?(w="under",R="Subexposta (escura, perda de detalhes nas sombras)"):d>1.2&&(w="over",R="Superexposta (estourada, reflexos brancos no esmalte)"),{evDiff:d,exposureDescription:R,exposureStatus:w,blurAmountPx:c,dofBlurCaninesPx:u,noiseOpacity:h,hasFlashCurtainArtifact:l,ambientLightContamination:f,clinicalScore:m,clinicalTitle:p,clinicalFeedback:x,clinicalBadges:b}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ta="186",Bc=0,$a=1,zc=2,wr=1,kc=2,ki=3,qn=0,zt=1,_n=2,Sn=0,Gi=1,eo=2,to=3,no=4,Vc=5,mi=100,Hc=101,Gc=102,Wc=103,Xc=104,qc=200,jc=201,Yc=202,Zc=203,ol=204,ll=205,Jc=206,Kc=207,Qc=208,$c=209,ed=210,td=211,nd=212,id=213,rd=214,Ls=0,Ds=1,Is=2,qi=3,Us=4,Fs=5,Os=6,Bs=7,cl=0,sd=1,ad=2,cn=0,dl=1,ul=2,hl=3,wa=4,fl=5,pl=6,ml=7,gl=300,jn=301,bi=302,Yr=303,Zr=304,Hr=306,zs=1e3,Mn=1001,ks=1002,Ct=1003,od=1004,ir=1005,Rt=1006,Jr=1007,Wn=1008,Gt=1009,xl=1010,vl=1011,yi=1012,Ra=1013,dn=1014,on=1015,un=1016,Ca=1017,Pa=1018,ji=1020,_l=35902,Ml=35899,Sl=1021,bl=1022,Zt=1023,En=1026,Xn=1027,yl=1028,Na=1029,Yn=1030,La=1031,Da=1033,Rr=33776,Cr=33777,Pr=33778,Nr=33779,Vs=35840,Hs=35841,Gs=35842,Ws=35843,Xs=36196,qs=37492,js=37496,Ys=37488,Zs=37489,Ir=37490,Js=37491,Ks=37808,Qs=37809,$s=37810,ea=37811,ta=37812,na=37813,ia=37814,ra=37815,sa=37816,aa=37817,oa=37818,la=37819,ca=37820,da=37821,ua=36492,ha=36494,fa=36495,pa=36283,ma=36284,Ur=36285,ga=36286,ld=3200,xa=0,cd=1,In="",Yt="srgb",Fr="srgb-linear",Or="linear",ut="srgb",Kr=7680,dd=519,ud=512,hd=513,fd=514,Ia=515,pd=516,md=517,Ua=518,gd=519,xd=35044,io="300 es",ln=2e3,Yi=2001;function vd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _d(){const i=Br("canvas");return i.style.display="block",i}const ro={};function so(...i){const e="THREE."+i.shift();console.log(e,...i)}function El(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=El(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ot(...i){i=El(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Mi(...i){const e=i.join(" ");e in ro||(ro[e]=!0,Xe(...i))}function Md(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Sd={[Ls]:Ds,[Is]:Os,[Us]:Bs,[qi]:Fs,[Ds]:Ls,[Os]:Is,[Bs]:Us,[Fs]:qi};class Kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qr=Math.PI/180,va=180/Math.PI;function wi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function bd(i,e){return(i%e+e)%e}function $r(i,e,t){return(1-t)*i+t*e}function Di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class xe{static{xe.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ri{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],d=s[a+0],f=s[a+1],x=s[a+2],b=s[a+3];if(h!==b||l!==d||c!==f||u!==x){let m=l*d+c*f+u*x+h*b;m<0&&(d=-d,f=-f,x=-x,b=-b,m=-m);let p=1-o;if(m<.9995){const w=Math.acos(m),R=Math.sin(w);p=Math.sin(p*w)/R,o=Math.sin(o*w)/R,l=l*p+d*o,c=c*p+f*o,u=u*p+x*o,h=h*p+b*o}else{l=l*p+d*o,c=c*p+f*o,u=u*p+x*o,h=h*p+b*o;const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],f=s[a+2],x=s[a+3];return e[t]=o*x+u*h+l*f-c*d,e[t+1]=l*x+u*d+c*h-o*f,e[t+2]=c*x+u*f+o*d-l*h,e[t+3]=u*x-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),f=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*x,this._y=c*f*h-d*u*x,this._z=c*u*x+d*f*h,this._w=c*u*h-d*f*x;break;case"YXZ":this._x=d*u*h+c*f*x,this._y=c*f*h-d*u*x,this._z=c*u*x-d*f*h,this._w=c*u*h+d*f*x;break;case"ZXY":this._x=d*u*h-c*f*x,this._y=c*f*h+d*u*x,this._z=c*u*x+d*f*h,this._w=c*u*h-d*f*x;break;case"ZYX":this._x=d*u*h-c*f*x,this._y=c*f*h+d*u*x,this._z=c*u*x-d*f*h,this._w=c*u*h+d*f*x;break;case"YZX":this._x=d*u*h+c*f*x,this._y=c*f*h+d*u*x,this._z=c*u*x-d*f*h,this._w=c*u*h-d*f*x;break;case"XZY":this._x=d*u*h-c*f*x,this._y=c*f*h-d*u*x,this._z=c*u*x+d*f*h,this._w=c*u*h+d*f*x;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ao.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ao.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return es.copy(this).projectOnVector(e),this.sub(es)}reflect(e){return this.sub(es.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const es=new P,ao=new Ri;class je{static{je.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],x=n[8],b=r[0],m=r[3],p=r[6],w=r[1],R=r[4],S=r[7],A=r[2],y=r[5],C=r[8];return s[0]=a*b+o*w+l*A,s[3]=a*m+o*R+l*y,s[6]=a*p+o*S+l*C,s[1]=c*b+u*w+h*A,s[4]=c*m+u*R+h*y,s[7]=c*p+u*S+h*C,s[2]=d*b+f*w+x*A,s[5]=d*m+f*R+x*y,s[8]=d*p+f*S+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,x=t*h+n*d+r*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=h*b,e[1]=(r*c-u*n)*b,e[2]=(o*n-r*a)*b,e[3]=d*b,e[4]=(u*t-r*l)*b,e[5]=(r*s-o*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Mi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ts.makeScale(e,t)),this}rotate(e){return Mi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ts.makeRotation(-e)),this}translate(e,t){return Mi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ts.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ts=new je,oo=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lo=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yd(){const i={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ut&&(r.r=bn(r.r),r.g=bn(r.g),r.b=bn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===In?Or:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Mi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Mi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fr]:{primaries:e,whitePoint:n,transfer:Or,toXYZ:oo,fromXYZ:lo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:oo,fromXYZ:lo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),i}const it=yd();function bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ni;class Ed{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ni===void 0&&(ni=Br("canvas")),ni.width=e.width,ni.height=e.height;const r=ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=bn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bn(t[n]/255)*255):t[n]=bn(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ad=0;class Fa{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ns(r[a].image)):s.push(ns(r[a]))}else s=ns(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ns(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ed.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let Td=0;const is=new P;class Ft extends Kn{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=Mn,r=Mn,s=Rt,a=Wn,o=Zt,l=Gt,c=Ft.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=wi(),this.name="",this.source=new Fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(is).x}get height(){return this.source.getSize(is).y}get depth(){return this.source.getSize(is).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zs:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zs:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=gl;Ft.DEFAULT_ANISOTROPY=1;class xt{static{xt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],x=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,S=(f+1)/2,A=(p+1)/2,y=(u+d)/4,C=(h+b)/4,_=(x+m)/4;return R>S&&R>A?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=y/n,s=C/n):S>A?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=y/r,s=_/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=C/s,r=_/s),this.set(n,r,s,t),this}let w=Math.sqrt((m-x)*(m-x)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-x)/w,this.y=(h-b)/w,this.z=(d-u)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wd extends Kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Ft(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Fa(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jt extends wd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Al extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rd extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class gt{static{gt.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,o,l,c,u,h,d,f,x,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,f,x,b,m)}set(e,t,n,r,s,a,o,l,c,u,h,d,f,x,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=x,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/ii.setFromMatrixColumn(e,0).length(),s=1/ii.setFromMatrixColumn(e,1).length(),a=1/ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,x=o*u,b=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+x*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,x=c*u,b=c*h;t[0]=d+b*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-x,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,x=c*u,b=c*h;t[0]=d-b*o,t[4]=-a*h,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*u,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,x=o*u,b=o*h;t[0]=l*u,t[4]=x*c-f,t[8]=d*c+b,t[1]=l*h,t[5]=b*c+d,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,x=o*l,b=o*c;t[0]=l*u,t[4]=b-d*h,t[8]=x*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+x,t[10]=d-b*h}else if(e.order==="XZY"){const d=a*l,f=a*c,x=o*l,b=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+b,t[5]=a*u,t[9]=f*h-x,t[2]=x*h-f,t[6]=o*u,t[10]=b*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cd,e,Pd)}lookAt(e,t,n){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Rn.crossVectors(n,kt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Rn.crossVectors(n,kt)),Rn.normalize(),rr.crossVectors(kt,Rn),r[0]=Rn.x,r[4]=rr.x,r[8]=kt.x,r[1]=Rn.y,r[5]=rr.y,r[9]=kt.y,r[2]=Rn.z,r[6]=rr.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],x=n[2],b=n[6],m=n[10],p=n[14],w=n[3],R=n[7],S=n[11],A=n[15],y=r[0],C=r[4],_=r[8],T=r[12],L=r[1],D=r[5],B=r[9],X=r[13],I=r[2],z=r[6],V=r[10],q=r[14],te=r[3],j=r[7],$=r[11],ie=r[15];return s[0]=a*y+o*L+l*I+c*te,s[4]=a*C+o*D+l*z+c*j,s[8]=a*_+o*B+l*V+c*$,s[12]=a*T+o*X+l*q+c*ie,s[1]=u*y+h*L+d*I+f*te,s[5]=u*C+h*D+d*z+f*j,s[9]=u*_+h*B+d*V+f*$,s[13]=u*T+h*X+d*q+f*ie,s[2]=x*y+b*L+m*I+p*te,s[6]=x*C+b*D+m*z+p*j,s[10]=x*_+b*B+m*V+p*$,s[14]=x*T+b*X+m*q+p*ie,s[3]=w*y+R*L+S*I+A*te,s[7]=w*C+R*D+S*z+A*j,s[11]=w*_+R*B+S*V+A*$,s[15]=w*T+R*X+S*q+A*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],x=e[3],b=e[7],m=e[11],p=e[15],w=l*f-c*d,R=o*f-c*h,S=o*d-l*h,A=a*f-c*u,y=a*d-l*u,C=a*h-o*u;return t*(b*w-m*R+p*S)-n*(x*w-m*A+p*y)+r*(x*R-b*A+p*C)-s*(x*S-b*y+m*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],x=e[12],b=e[13],m=e[14],p=e[15],w=t*o-n*a,R=t*l-r*a,S=t*c-s*a,A=n*l-r*o,y=n*c-s*o,C=r*c-s*l,_=u*b-h*x,T=u*m-d*x,L=u*p-f*x,D=h*m-d*b,B=h*p-f*b,X=d*p-f*m,I=w*X-R*B+S*D+A*L-y*T+C*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=(o*X-l*B+c*D)*z,e[1]=(r*B-n*X-s*D)*z,e[2]=(b*C-m*y+p*A)*z,e[3]=(d*y-h*C-f*A)*z,e[4]=(l*L-a*X-c*T)*z,e[5]=(t*X-r*L+s*T)*z,e[6]=(m*S-x*C-p*R)*z,e[7]=(u*C-d*S+f*R)*z,e[8]=(a*B-o*L+c*_)*z,e[9]=(n*L-t*B-s*_)*z,e[10]=(x*y-b*S+p*w)*z,e[11]=(h*S-u*y-f*w)*z,e[12]=(o*T-a*D-l*_)*z,e[13]=(t*D-n*T+r*_)*z,e[14]=(b*R-x*A-m*w)*z,e[15]=(u*A-h*R+d*w)*z,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,x=s*h,b=a*u,m=a*h,p=o*h,w=l*c,R=l*u,S=l*h,A=n.x,y=n.y,C=n.z;return r[0]=(1-(b+p))*A,r[1]=(f+S)*A,r[2]=(x-R)*A,r[3]=0,r[4]=(f-S)*y,r[5]=(1-(d+p))*y,r[6]=(m+w)*y,r[7]=0,r[8]=(x+R)*C,r[9]=(m-w)*C,r[10]=(1-(d+b))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ii.set(r[0],r[1],r[2]).length();const o=ii.set(r[4],r[5],r[6]).length(),l=ii.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Kt.copy(this);const c=1/a,u=1/o,h=1/l;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=h,Kt.elements[9]*=h,Kt.elements[10]*=h,t.setFromRotationMatrix(Kt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=ln,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let x,b;if(l)x=s/(a-s),b=a*s/(a-s);else if(o===ln)x=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===Yi)x=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ln,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r);let x,b;if(l)x=1/(a-s),b=a/(a-s);else if(o===ln)x=-2/(a-s),b=-(a+s)/(a-s);else if(o===Yi)x=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ii=new P,Kt=new gt,Cd=new P(0,0,0),Pd=new P(1,1,1),Rn=new P,rr=new P,kt=new P,co=new gt,uo=new Ri;class Un{constructor(e=0,t=0,n=0,r=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return co.makeRotationFromQuaternion(e),this.setFromRotationMatrix(co,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uo.setFromEuler(this),this.setFromQuaternion(uo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Tl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nd=0;const ho=new P,ri=new Ri,pn=new gt,sr=new P,Ii=new P,Ld=new P,Dd=new Ri,fo=new P(1,0,0),po=new P(0,1,0),mo=new P(0,0,1),go={type:"added"},Id={type:"removed"},si={type:"childadded",child:null},rs={type:"childremoved",child:null};class Dt extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new P,t=new Un,n=new Ri,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new je}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(fo,e)}rotateY(e){return this.rotateOnAxis(po,e)}rotateZ(e){return this.rotateOnAxis(mo,e)}translateOnAxis(e,t){return ho.copy(e).applyQuaternion(this.quaternion),this.position.add(ho.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fo,e)}translateY(e){return this.translateOnAxis(po,e)}translateZ(e){return this.translateOnAxis(mo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sr.copy(e):sr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Ii,sr,this.up):pn.lookAt(sr,Ii,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),ri.setFromRotationMatrix(pn),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(go),si.child=e,this.dispatchEvent(si),si.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Id),rs.child=e,this.dispatchEvent(rs),rs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(go),si.child=e,this.dispatchEvent(si),si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,e,Ld),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,Dd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Dt.DEFAULT_UP=new P(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jt extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ud={type:"move"};class ss{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ud)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},ar={h:0,s:0,l:0};function as(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=bd(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=as(a,s,e+1/3),this.g=as(a,s,e),this.b=as(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=wl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return it.workingToColorSpace(Lt.copy(this),e),Math.round($e(Lt.r*255,0,255))*65536+Math.round($e(Lt.g*255,0,255))*256+Math.round($e(Lt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Lt.copy(this),t);const n=Lt.r,r=Lt.g,s=Lt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Yt){it.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,r=Lt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(ar);const n=$r(Cn.h,ar.h,t),r=$r(Cn.s,ar.s,t),s=$r(Cn.l,ar.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Be;Be.NAMES=wl;class xo extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qt=new P,mn=new P,os=new P,gn=new P,ai=new P,oi=new P,vo=new P,ls=new P,cs=new P,ds=new P,us=new xt,hs=new xt,fs=new xt;class en{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Qt.subVectors(e,t),r.cross(Qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Qt.subVectors(r,t),mn.subVectors(n,t),os.subVectors(e,t);const a=Qt.dot(Qt),o=Qt.dot(mn),l=Qt.dot(os),c=mn.dot(mn),u=mn.dot(os),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-f-x,x,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(o,gn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return us.setScalar(0),hs.setScalar(0),fs.setScalar(0),us.fromBufferAttribute(e,t),hs.fromBufferAttribute(e,n),fs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(us,s.x),a.addScaledVector(hs,s.y),a.addScaledVector(fs,s.z),a}static isFrontFacing(e,t,n,r){return Qt.subVectors(n,t),mn.subVectors(e,t),Qt.cross(mn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Qt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return en.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ai.subVectors(r,n),oi.subVectors(s,n),ls.subVectors(e,n);const l=ai.dot(ls),c=oi.dot(ls);if(l<=0&&c<=0)return t.copy(n);cs.subVectors(e,r);const u=ai.dot(cs),h=oi.dot(cs);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ai,a);ds.subVectors(e,s);const f=ai.dot(ds),x=oi.dot(ds);if(x>=0&&f<=x)return t.copy(s);const b=f*c-l*x;if(b<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(oi,o);const m=u*x-f*h;if(m<=0&&h-u>=0&&f-x>=0)return vo.subVectors(s,r),o=(h-u)/(h-u+(f-x)),t.copy(r).addScaledVector(vo,o);const p=1/(m+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(ai,a).addScaledVector(oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(s,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ui),lr.subVectors(this.max,Ui),li.subVectors(e.a,Ui),ci.subVectors(e.b,Ui),di.subVectors(e.c,Ui),Pn.subVectors(ci,li),Nn.subVectors(di,ci),On.subVectors(li,di);let t=[0,-Pn.z,Pn.y,0,-Nn.z,Nn.y,0,-On.z,On.y,Pn.z,0,-Pn.x,Nn.z,0,-Nn.x,On.z,0,-On.x,-Pn.y,Pn.x,0,-Nn.y,Nn.x,0,-On.y,On.x,0];return!ps(t,li,ci,di,lr)||(t=[1,0,0,0,1,0,0,0,1],!ps(t,li,ci,di,lr))?!1:(cr.crossVectors(Pn,Nn),t=[cr.x,cr.y,cr.z],ps(t,li,ci,di,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xn=[new P,new P,new P,new P,new P,new P,new P,new P],$t=new P,or=new Qi,li=new P,ci=new P,di=new P,Pn=new P,Nn=new P,On=new P,Ui=new P,lr=new P,cr=new P,Bn=new P;function ps(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Bn.fromArray(i,s);const o=r.x*Math.abs(Bn.x)+r.y*Math.abs(Bn.y)+r.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const yt=new P,dr=new xe;let Fd=0;class yn extends Kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xd,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Rl extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cl extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Od=new Qi,Fi=new P,ms=new P;class Oa{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Od.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Fi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ms.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(ms)),this.expandByPoint(Fi.copy(e.center).sub(ms))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Bd=0;const qt=new gt,gs=new Dt,ui=new P,Vt=new Qi,Oi=new Qi,wt=new P;class Wt extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vd(e)?Cl:Rl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return gs.lookAt(e),gs.updateMatrix(),this.applyMatrix4(gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Oi.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Vt.min,Oi.min),Vt.expandByPoint(wt),wt.addVectors(Vt.max,Oi.max),Vt.expandByPoint(wt)):(Vt.expandByPoint(Oi.min),Vt.expandByPoint(Oi.max))}Vt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)wt.fromBufferAttribute(o,c),l&&(ui.fromBufferAttribute(e,c),wt.add(ui)),r=Math.max(r,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new yn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;const c=new P,u=new P,h=new P,d=new xe,f=new xe,x=new xe,b=new P,m=new P;function p(_,T,L){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,L),d.fromBufferAttribute(s,_),f.fromBufferAttribute(s,T),x.fromBufferAttribute(s,L),u.sub(c),h.sub(c),f.sub(d),x.sub(d);const D=1/(f.x*x.y-x.x*f.y);isFinite(D)&&(b.copy(u).multiplyScalar(x.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(D),o[_].add(b),o[T].add(b),o[L].add(b),l[_].add(m),l[T].add(m),l[L].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let _=0,T=w.length;_<T;++_){const L=w[_],D=L.start,B=L.count;for(let X=D,I=D+B;X<I;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const R=new P,S=new P,A=new P,y=new P;function C(_){A.fromBufferAttribute(r,_),y.copy(A);const T=o[_];R.copy(T),R.sub(A.multiplyScalar(A.dot(T))).normalize(),S.crossVectors(y,T);const D=S.dot(l[_])<0?-1:1;a.setXYZW(_,R.x,R.y,R.z,D)}for(let _=0,T=w.length;_<T;++_){const L=w[_],D=L.start,B=L.count;for(let X=D,I=D+B;X<I;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new P,s=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const x=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,x=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*u;for(let p=0;p<u;p++)d[x++]=c[f++]}return new yn(d,u,h)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xs=new P,zd=new P,kd=new je;class Dn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=xs.subVectors(n,t).cross(zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(xs),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kd.getNormalMatrix(e),r=this.coplanarPoint(xs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Vd=0;class $i extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Gi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=ll,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Dn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vn=new P,vs=new P,ur=new P,hr=new P;class Hd{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){vs.copy(e).add(t).multiplyScalar(.5),ur.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(vs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ur),o=hr.dot(this.direction),l=-hr.dot(ur),c=hr.lengthSq(),u=Math.abs(1-a*a);let h,d,f,x;if(u>0)if(h=a*l-o,d=a*o-l,x=s*u,h>=0)if(d>=-x)if(d<=x){const b=1/u;h*=b,d*=b,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(vs).addScaledVector(ur,d),f}intersectSphere(e,t){if(e.radius<0)return null;vn.subVectors(e.center,this.origin);const n=vn.dot(this.direction),r=vn.dot(vn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,x=t.x-a.x,b=t.y-a.y,m=t.z-a.z,p=n.x-a.x,w=n.y-a.y,R=n.z-a.z,S=Math.abs(l),A=Math.abs(c),y=Math.abs(u);let C,_,T,L,D,B,X,I,z,V,q,te;if(S>=A&&S>=y?(T=l,B=h,z=x,te=p,l>=0?(C=c,_=u,L=d,D=f,X=b,I=m,V=w,q=R):(C=u,_=c,L=f,D=d,X=m,I=b,V=R,q=w)):A>=y?(T=c,B=d,z=b,te=w,c>=0?(C=u,_=l,L=f,D=h,X=m,I=x,V=R,q=p):(C=l,_=u,L=h,D=f,X=x,I=m,V=p,q=R)):(T=u,B=f,z=m,te=R,u>=0?(C=l,_=c,L=h,D=d,X=x,I=b,V=p,q=w):(C=c,_=l,L=d,D=h,X=b,I=x,V=w,q=p)),T===0)return null;const j=C/T,$=_/T,ie=1/T,Ce=L-j*B,Te=D-$*B,rt=X-j*z,Je=I-$*z,nt=V-j*te,K=q-$*te,re=nt*Je-K*rt,_e=Ce*K-Te*nt,ke=rt*Te-Je*Ce;if(r){if(re<0||_e<0||ke<0)return null}else if((re<0||_e<0||ke<0)&&(re>0||_e>0||ke>0))return null;const Me=re+_e+ke;if(Me===0)return null;const Ve=ie*(re*B+_e*z+ke*te);return(Me>0?Ve<0:Ve>0)?null:this.at(Ve/Me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pl extends $i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _o=new gt,zn=new Hd,fr=new Oa,Mo=new P,pr=new P,mr=new P,gr=new P,_s=new P,xr=new P,So=new P,vr=new P;class St extends Dt{constructor(e=new Wt,t=new Pl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(_s.fromBufferAttribute(h,e),a?xr.addScaledVector(_s,u):xr.addScaledVector(_s.sub(t),u))}t.add(xr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),zn.copy(e.ray).recast(e.near),!(fr.containsPoint(zn.origin)===!1&&(zn.intersectSphere(fr,Mo)===null||zn.origin.distanceToSquared(Mo)>(e.far-e.near)**2))&&(_o.copy(s).invert(),zn.copy(e.ray).applyMatrix4(_o),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=d.length;x<b;x++){const m=d[x],p=a[m.materialIndex],w=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,A=R;S<A;S+=3){const y=o.getX(S),C=o.getX(S+1),_=o.getX(S+2);r=_r(this,p,e,n,c,u,h,y,C,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=x,p=b;m<p;m+=3){const w=o.getX(m),R=o.getX(m+1),S=o.getX(m+2);r=_r(this,a,e,n,c,u,h,w,R,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,b=d.length;x<b;x++){const m=d[x],p=a[m.materialIndex],w=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,A=R;S<A;S+=3){const y=S,C=S+1,_=S+2;r=_r(this,p,e,n,c,u,h,y,C,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let m=x,p=b;m<p;m+=3){const w=m,R=m+1,S=m+2;r=_r(this,a,e,n,c,u,h,w,R,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Gd(i,e,t,n,r,s,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===qn,o),l===null)return null;vr.copy(o),vr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vr);return c<t.near||c>t.far?null:{distance:c,point:vr.clone(),object:i}}function _r(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,pr),i.getVertexPosition(l,mr),i.getVertexPosition(c,gr);const u=Gd(i,e,t,n,pr,mr,gr,So);if(u){const h=new P;en.getBarycoord(So,pr,mr,gr,h),r&&(u.uv=en.getInterpolatedAttribute(r,o,l,c,h,new xe)),s&&(u.uv1=en.getInterpolatedAttribute(s,o,l,c,h,new xe)),a&&(u.normal=en.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};en.getNormal(pr,mr,gr,d.normal),u.face=d,u.barycoord=h}return u}class Wd extends Ft{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Ct,u=Ct,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kn=new Oa,Xd=new xe(.5,.5),Mr=new P;class Ba{constructor(e=new Dn,t=new Dn,n=new Dn,r=new Dn,s=new Dn,a=new Dn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],x=s[8],b=s[9],m=s[10],p=s[11],w=s[12],R=s[13],S=s[14],A=s[15];if(r[0].setComponents(c-a,f-u,p-x,A-w).normalize(),r[1].setComponents(c+a,f+u,p+x,A+w).normalize(),r[2].setComponents(c+o,f+h,p+b,A+R).normalize(),r[3].setComponents(c-o,f-h,p-b,A-R).normalize(),n)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,f-d,p-m,A-S).normalize();else if(r[4].setComponents(c-l,f-d,p-m,A-S).normalize(),t===ln)r[5].setComponents(c+l,f+d,p+m,A+S).normalize();else if(t===Yi)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){kn.center.set(0,0,0);const t=Xd.distanceTo(e.center);return kn.radius=.7071067811865476+t,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Mr.x=r.normal.x>0?e.max.x:e.min.x,Mr.y=r.normal.y>0?e.max.y:e.min.y,Mr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nl extends Ft{constructor(e=[],t=jn,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ei extends Ft{constructor(e,t,n=dn,r,s,a,o=Ct,l=Ct,c,u=En,h=1){if(u!==En&&u!==Xn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class qd extends Ei{constructor(e,t=dn,n=jn,r,s,a=Ct,o=Ct,l,c=En){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ll extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zn extends Wt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(h,2));function x(b,m,p,w,R,S,A,y,C,_,T){const L=S/C,D=A/_,B=S/2,X=A/2,I=y/2,z=C+1,V=_+1;let q=0,te=0;const j=new P;for(let $=0;$<V;$++){const ie=$*D-X;for(let Ce=0;Ce<z;Ce++){const Te=Ce*L-B;j[b]=Te*w,j[m]=ie*R,j[p]=I,c.push(j.x,j.y,j.z),j[b]=0,j[m]=0,j[p]=y>0?1:-1,u.push(j.x,j.y,j.z),h.push(Ce/C),h.push(1-$/_),q+=1}}for(let $=0;$<_;$++)for(let ie=0;ie<C;ie++){const Ce=d+ie+z*$,Te=d+ie+z*($+1),rt=d+(ie+1)+z*($+1),Je=d+(ie+1)+z*$;l.push(Ce,Te,Je),l.push(Te,rt,Je),te+=6}o.addGroup(f,te,T),f+=te,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class za extends Wt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let x=0;const b=[],m=n/2;let p=0;w(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(f,2));function w(){const S=new P,A=new P;let y=0;const C=(t-e)/n;for(let _=0;_<=s;_++){const T=[],L=_/s,D=L*(t-e)+e;for(let B=0;B<=r;B++){const X=B/r,I=X*l+o,z=Math.sin(I),V=Math.cos(I);A.x=D*z,A.y=-L*n+m,A.z=D*V,h.push(A.x,A.y,A.z),S.set(z,C,V).normalize(),d.push(S.x,S.y,S.z),f.push(X,1-L),T.push(x++)}b.push(T)}for(let _=0;_<r;_++)for(let T=0;T<s;T++){const L=b[T][_],D=b[T+1][_],B=b[T+1][_+1],X=b[T][_+1];(e>0||T!==0)&&(u.push(L,D,X),y+=3),(t>0||T!==s-1)&&(u.push(D,B,X),y+=3)}c.addGroup(p,y,0),p+=y}function R(S){const A=x,y=new xe,C=new P;let _=0;const T=S===!0?e:t,L=S===!0?1:-1;for(let B=1;B<=r;B++)h.push(0,m*L,0),d.push(0,L,0),f.push(.5,.5),x++;const D=x;for(let B=0;B<=r;B++){const I=B/r*l+o,z=Math.cos(I),V=Math.sin(I);C.x=T*V,C.y=m*L,C.z=T*z,h.push(C.x,C.y,C.z),d.push(0,L,0),y.x=z*.5+.5,y.y=V*.5*L+.5,f.push(y.x,y.y),x++}for(let B=0;B<r;B++){const X=A+B,I=D+B;S===!0?u.push(I,I+1,X):u.push(I+1,I,X),_+=3}c.addGroup(p,_,S===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,f=(a-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new xe:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,r=[],s=[],a=[],o=new P,l=new gt;for(let f=0;f<=e;f++){const x=f/e;r[f]=this.getTangentAt(x,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos($e(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos($e(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],f*x)),a[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ka extends hn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new xe){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jd extends ka{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Va(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,r(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const bo=new P,yo=new P,Ms=new Va,Ss=new Va,bs=new Va;class gi extends hn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new P){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(yo.subVectors(r[0],r[1]).add(r[0]),c=yo);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(bo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=bo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(h),f),b=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);b<1e-4&&(b=1),x<1e-4&&(x=b),m<1e-4&&(m=b),Ms.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,x,b,m),Ss.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,x,b,m),bs.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,x,b,m)}else this.curveType==="catmullrom"&&(Ms.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ss.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),bs.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Ms.calc(l),Ss.calc(l),bs.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Eo(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function Yd(i,e){const t=1-i;return t*t*e}function Zd(i,e){return 2*(1-i)*i*e}function Jd(i,e){return i*i*e}function Wi(i,e,t,n){return Yd(i,e)+Zd(i,t)+Jd(i,n)}function Kd(i,e){const t=1-i;return t*t*t*e}function Qd(i,e){const t=1-i;return 3*t*t*i*e}function $d(i,e){return 3*(1-i)*i*i*e}function eu(i,e){return i*i*i*e}function Xi(i,e,t,n,r){return Kd(i,e)+Qd(i,t)+$d(i,n)+eu(i,r)}class Dl extends hn{constructor(e=new xe,t=new xe,n=new xe,r=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new xe){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Xi(e,r.x,s.x,a.x,o.x),Xi(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tu extends hn{constructor(e=new P,t=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new P){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Xi(e,r.x,s.x,a.x,o.x),Xi(e,r.y,s.y,a.y,o.y),Xi(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Il extends hn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nu extends hn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ul extends hn{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Wi(e,r.x,s.x,a.x),Wi(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fl extends hn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Wi(e,r.x,s.x,a.x),Wi(e,r.y,s.y,a.y),Wi(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ol extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(Eo(o,l.x,c.x,u.x,h.x),Eo(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new xe().fromArray(r))}return this}}var zr=Object.freeze({__proto__:null,ArcCurve:jd,CatmullRomCurve3:gi,CubicBezierCurve:Dl,CubicBezierCurve3:tu,EllipseCurve:ka,LineCurve:Il,LineCurve3:nu,QuadraticBezierCurve:Ul,QuadraticBezierCurve3:Fl,SplineCurve:Ol});class iu extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new zr[r.type]().fromJSON(r))}return this}}class Ao extends iu{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Il(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Ul(this.currentPoint.clone(),new xe(e,t),new xe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new Dl(this.currentPoint.clone(),new xe(e,t),new xe(n,r),new xe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ol(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new ka(e,t,n,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Bl extends Ao{constructor(e){super(e),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Ao().fromJSON(r))}return this}}function ru(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=zl(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=cu(i,e,s,t)),i.length>80*t){o=i[0],l=i[1];let u=o,h=l;for(let d=t;d<r;d+=t){const f=i[d],x=i[d+1];f<o&&(o=f),x<l&&(l=x),f>u&&(u=f),x>h&&(h=x)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return Zi(s,a,t,o,l,c,0),a}function zl(i,e,t,n,r){let s;if(r===Mu(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=To(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=To(a/n|0,i[a],i[a+1],s);return s&&Ai(s,s.next)&&(Ki(s),s=s.next),s}function Jn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ai(t,t.next)||vt(t.prev,t,t.next)===0)){if(Ki(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zi(i,e,t,n,r,s,a){if(!i)return;!a&&s&&pu(i,n,r,s);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?au(i,n,r,s):su(i)){e.push(l.i,i.i,c.i),Ki(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=ou(Jn(i),e),Zi(i,e,t,n,r,s,2)):a===2&&lu(i,e,t,n,r,s):Zi(Jn(i),e,t,n,r,s,1);break}}}function su(i){const e=i.prev,t=i,n=i.next;if(vt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(r,s,a),h=Math.min(o,l,c),d=Math.max(r,s,a),f=Math.max(o,l,c);let x=n.next;for(;x!==e;){if(x.x>=u&&x.x<=d&&x.y>=h&&x.y<=f&&Vi(r,o,s,l,a,c,x.x,x.y)&&vt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function au(i,e,t,n){const r=i.prev,s=i,a=i.next;if(vt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,d=a.y,f=Math.min(o,l,c),x=Math.min(u,h,d),b=Math.max(o,l,c),m=Math.max(u,h,d),p=_a(f,x,e,t,n),w=_a(b,m,e,t,n);let R=i.prevZ,S=i.nextZ;for(;R&&R.z>=p&&S&&S.z<=w;){if(R.x>=f&&R.x<=b&&R.y>=x&&R.y<=m&&R!==r&&R!==a&&Vi(o,u,l,h,c,d,R.x,R.y)&&vt(R.prev,R,R.next)>=0||(R=R.prevZ,S.x>=f&&S.x<=b&&S.y>=x&&S.y<=m&&S!==r&&S!==a&&Vi(o,u,l,h,c,d,S.x,S.y)&&vt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;R&&R.z>=p;){if(R.x>=f&&R.x<=b&&R.y>=x&&R.y<=m&&R!==r&&R!==a&&Vi(o,u,l,h,c,d,R.x,R.y)&&vt(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;S&&S.z<=w;){if(S.x>=f&&S.x<=b&&S.y>=x&&S.y<=m&&S!==r&&S!==a&&Vi(o,u,l,h,c,d,S.x,S.y)&&vt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function ou(i,e){let t=i;do{const n=t.prev,r=t.next.next;!Ai(n,r)&&Vl(n,t,t.next,r)&&Ji(n,r)&&Ji(r,n)&&(e.push(n.i,t.i,r.i),Ki(t),Ki(t.next),t=i=r),t=t.next}while(t!==i);return Jn(t)}function lu(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xu(a,o)){let l=Hl(a,o);a=Jn(a,a.next),l=Jn(l,l.next),Zi(a,e,t,n,r,s,0),Zi(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function cu(i,e,t,n){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=zl(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(gu(c))}r.sort(du);for(let s=0;s<r.length;s++)t=uu(r[s],t);return t}function du(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function uu(i,e){const t=hu(i,e);if(!t)return e;const n=Hl(t,i);return Jn(n,n.next),Jn(t,t.next)}function hu(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;if(Ai(i,t))return t;do{if(Ai(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&kl(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){const h=Math.abs(r-t.y)/(n-t.x);Ji(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&fu(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function fu(i,e){return vt(i.prev,i,e.prev)<0&&vt(e.next,i,i.next)<0}function pu(i,e,t,n){let r=i;do r.z===0&&(r.z=_a(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,mu(r)}function mu(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function _a(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function gu(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function kl(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Vi(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&kl(i,e,t,n,r,s,a,o)}function xu(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!vu(i,e)&&(Ji(i,e)&&Ji(e,i)&&_u(i,e)&&(vt(i.prev,i,e.prev)||vt(i,e.prev,e))||Ai(i,e)&&vt(i.prev,i,i.next)>0&&vt(e.prev,e,e.next)>0)}function vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ai(i,e){return i.x===e.x&&i.y===e.y}function Vl(i,e,t,n){const r=br(vt(i,e,t)),s=br(vt(i,e,n)),a=br(vt(t,n,i)),o=br(vt(t,n,e));return!!(r!==s&&a!==o||r===0&&Sr(i,t,e)||s===0&&Sr(i,n,e)||a===0&&Sr(t,i,n)||o===0&&Sr(t,e,n))}function Sr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function br(i){return i>0?1:i<0?-1:0}function vu(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ji(i,e){return vt(i.prev,i,i.next)<0?vt(i,e,i.next)>=0&&vt(i,i.prev,e)>=0:vt(i,e,i.prev)<0||vt(i,i.next,e)<0}function _u(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Hl(i,e){const t=Ma(i.i,i.x,i.y),n=Ma(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function To(i,e,t,n){const r=Ma(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ki(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ma(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mu(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Su{static triangulate(e,t,n=2){return ru(e,t,n)}}class vi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return vi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];wo(e),Ro(n,e);let a=e.length;t.forEach(wo);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Ro(n,t[l]);const o=Su.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function wo(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ro(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ha extends Wt{constructor(e=new Bl([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Et(r,3)),this.setAttribute("uv",new Et(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:bu;let R,S=!1,A,y,C,_;if(p){R=p.getSpacedPoints(u),S=!0,d=!1;const Q=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(u,Q),y=new P,C=new P,_=new P}d||(m=0,f=0,x=0,b=0);const T=o.extractPoints(c);let L=T.shape;const D=T.holes;if(!vi.isClockWise(L)){L=L.reverse();for(let Q=0,se=D.length;Q<se;Q++){const oe=D[Q];vi.isClockWise(oe)&&(D[Q]=oe.reverse())}}function X(Q){const oe=10000000000000001e-36;let le=Q[0];for(let he=1;he<=Q.length;he++){const ze=he%Q.length,Fe=Q[ze],He=Fe.x-le.x,We=Fe.y-le.y,N=He*He+We*We,st=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(le.x),Math.abs(le.y)),Ke=oe*st*st;if(N<=Ke){Q.splice(ze,1),he--;continue}le=Fe}}X(L),D.forEach(X);const I=D.length,z=L;for(let Q=0;Q<I;Q++){const se=D[Q];L=L.concat(se)}function V(Q,se,oe){return se||ot("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(se,oe)}const q=L.length;function te(Q,se,oe){let le,he,ze;const Fe=Q.x-se.x,He=Q.y-se.y,We=oe.x-Q.x,N=oe.y-Q.y,st=Fe*Fe+He*He,Ke=Fe*N-He*We;if(Math.abs(Ke)>Number.EPSILON){const E=Math.sqrt(st),g=Math.sqrt(We*We+N*N),O=se.x-He/E,H=se.y+Fe/E,Z=oe.x-N/g,ce=oe.y+We/g,de=((Z-O)*N-(ce-H)*We)/(Fe*N-He*We);le=O+Fe*de-Q.x,he=H+He*de-Q.y;const J=le*le+he*he;if(J<=2)return new xe(le,he);ze=Math.sqrt(J/2)}else{let E=!1;Fe>Number.EPSILON?We>Number.EPSILON&&(E=!0):Fe<-Number.EPSILON?We<-Number.EPSILON&&(E=!0):Math.sign(He)===Math.sign(N)&&(E=!0),E?(le=-He,he=Fe,ze=Math.sqrt(st)):(le=Fe,he=He,ze=Math.sqrt(st/2))}return new xe(le/ze,he/ze)}const j=[];for(let Q=0,se=z.length,oe=se-1,le=Q+1;Q<se;Q++,oe++,le++)oe===se&&(oe=0),le===se&&(le=0),j[Q]=te(z[Q],z[oe],z[le]);const $=[];let ie,Ce=j.concat();for(let Q=0,se=I;Q<se;Q++){const oe=D[Q];ie=[];for(let le=0,he=oe.length,ze=he-1,Fe=le+1;le<he;le++,ze++,Fe++)ze===he&&(ze=0),Fe===he&&(Fe=0),ie[le]=te(oe[le],oe[ze],oe[Fe]);$.push(ie),Ce=Ce.concat(ie)}let Te;if(m===0)Te=vi.triangulateShape(z,D);else{const Q=[],se=[];for(let oe=0;oe<m;oe++){const le=oe/m,he=f*Math.cos(le*Math.PI/2),ze=x*Math.sin(le*Math.PI/2)+b;for(let Fe=0,He=z.length;Fe<He;Fe++){const We=V(z[Fe],j[Fe],ze);_e(We.x,We.y,-he),le===0&&Q.push(We)}for(let Fe=0,He=I;Fe<He;Fe++){const We=D[Fe];ie=$[Fe];const N=[];for(let st=0,Ke=We.length;st<Ke;st++){const E=V(We[st],ie[st],ze);_e(E.x,E.y,-he),le===0&&N.push(E)}le===0&&se.push(N)}}Te=vi.triangulateShape(Q,se)}const rt=Te.length,Je=x+b;for(let Q=0;Q<q;Q++){const se=d?V(L[Q],Ce[Q],Je):L[Q];S?(C.copy(A.normals[0]).multiplyScalar(se.x),y.copy(A.binormals[0]).multiplyScalar(se.y),_.copy(R[0]).add(C).add(y),_e(_.x,_.y,_.z)):_e(se.x,se.y,0)}for(let Q=1;Q<=u;Q++)for(let se=0;se<q;se++){const oe=d?V(L[se],Ce[se],Je):L[se];S?(C.copy(A.normals[Q]).multiplyScalar(oe.x),y.copy(A.binormals[Q]).multiplyScalar(oe.y),_.copy(R[Q]).add(C).add(y),_e(_.x,_.y,_.z)):_e(oe.x,oe.y,h/u*Q)}for(let Q=m-1;Q>=0;Q--){const se=Q/m,oe=f*Math.cos(se*Math.PI/2),le=x*Math.sin(se*Math.PI/2)+b;for(let he=0,ze=z.length;he<ze;he++){const Fe=V(z[he],j[he],le);_e(Fe.x,Fe.y,h+oe)}for(let he=0,ze=D.length;he<ze;he++){const Fe=D[he];ie=$[he];for(let He=0,We=Fe.length;He<We;He++){const N=V(Fe[He],ie[He],le);S?_e(N.x,N.y+R[u-1].y,R[u-1].x+oe):_e(N.x,N.y,h+oe)}}}nt(),K();function nt(){const Q=r.length/3;if(d){let se=0,oe=q*se;for(let le=0;le<rt;le++){const he=Te[le];ke(he[2]+oe,he[1]+oe,he[0]+oe)}se=u+m*2,oe=q*se;for(let le=0;le<rt;le++){const he=Te[le];ke(he[0]+oe,he[1]+oe,he[2]+oe)}}else{for(let se=0;se<rt;se++){const oe=Te[se];ke(oe[2],oe[1],oe[0])}for(let se=0;se<rt;se++){const oe=Te[se];ke(oe[0]+q*u,oe[1]+q*u,oe[2]+q*u)}}n.addGroup(Q,r.length/3-Q,0)}function K(){const Q=r.length/3;let se=0;re(z,se),se+=z.length;for(let oe=0,le=D.length;oe<le;oe++){const he=D[oe];re(he,se),se+=he.length}n.addGroup(Q,r.length/3-Q,1)}function re(Q,se){let oe=Q.length;for(;--oe>=0;){const le=oe;let he=oe-1;he<0&&(he=Q.length-1);for(let ze=0,Fe=u+m*2;ze<Fe;ze++){const He=q*ze,We=q*(ze+1),N=se+le+He,st=se+he+He,Ke=se+he+We,E=se+le+We;Me(N,st,Ke,E)}}}function _e(Q,se,oe){l.push(Q),l.push(se),l.push(oe)}function ke(Q,se,oe){Ve(Q),Ve(se),Ve(oe);const le=r.length/3,he=w.generateTopUV(n,r,le-3,le-2,le-1);tt(he[0]),tt(he[1]),tt(he[2])}function Me(Q,se,oe,le){Ve(Q),Ve(se),Ve(le),Ve(se),Ve(oe),Ve(le);const he=r.length/3,ze=w.generateSideWallUV(n,r,he-6,he-3,he-2,he-1);tt(ze[0]),tt(ze[1]),tt(ze[3]),tt(ze[1]),tt(ze[2]),tt(ze[3])}function Ve(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function tt(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return yu(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new zr[r.type]().fromJSON(r)),new Ha(n,e.options)}}const bu={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new xe(s,a),new xe(o,l),new xe(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],f=e[r*3+1],x=e[r*3+2],b=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new xe(a,1-l),new xe(c,1-h),new xe(d,1-x),new xe(b,1-p)]:[new xe(o,1-l),new xe(u,1-h),new xe(f,1-x),new xe(m,1-p)]}};function yu(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class er extends Wt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,f=[],x=[],b=[],m=[];for(let p=0;p<u;p++){const w=p*d-a;for(let R=0;R<c;R++){const S=R*h-s;x.push(S,-w,0),b.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const R=w+c*p,S=w+c*(p+1),A=w+1+c*(p+1),y=w+1+c*p;f.push(R,S,y),f.push(S,A,y)}this.setIndex(f),this.setAttribute("position",new Et(x,3)),this.setAttribute("normal",new Et(b,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.widthSegments,e.heightSegments)}}class kr extends Wt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],u=[],h=[],d=new P,f=new P,x=new P;for(let b=0;b<=n;b++){const m=a+b/n*o;for(let p=0;p<=r;p++){const w=p/r*s;f.x=(e+t*Math.cos(m))*Math.cos(w),f.y=(e+t*Math.cos(m))*Math.sin(w),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),x.subVectors(f,d).normalize(),u.push(x.x,x.y,x.z),h.push(p/r),h.push(b/n)}}for(let b=1;b<=n;b++)for(let m=1;m<=r;m++){const p=(r+1)*b+m-1,w=(r+1)*(b-1)+m-1,R=(r+1)*(b-1)+m,S=(r+1)*b+m;l.push(p,w,S),l.push(w,R,S)}this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Gn extends Wt{constructor(e=new Fl(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new xe;let u=new P;const h=[],d=[],f=[],x=[];b(),this.setIndex(x),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(f,2));function b(){for(let R=0;R<t;R++)m(R);m(s===!1?t:0),w(),p()}function m(R){u=e.getPointAt(R/t,u);const S=a.normals[R],A=a.binormals[R];for(let y=0;y<=r;y++){const C=y/r*Math.PI*2,_=Math.sin(C),T=-Math.cos(C);l.x=T*S.x+_*A.x,l.y=T*S.y+_*A.y,l.z=T*S.z+_*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let R=1;R<=t;R++)for(let S=1;S<=r;S++){const A=(r+1)*(R-1)+(S-1),y=(r+1)*R+(S-1),C=(r+1)*R+S,_=(r+1)*(R-1)+S;x.push(A,y,_),x.push(y,C,_)}}function w(){for(let R=0;R<=t;R++)for(let S=0;S<=r;S++)c.x=R/t,c.y=S/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Gn(new zr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ti(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Co(r))r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Co(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Ut(i){const e={};for(let t=0;t<i.length;t++){const n=Ti(i[t]);for(const r in n)e[r]=n[r]}return e}function Co(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Eu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Au={clone:Ti,merge:Ut};var Tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends $i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tu,this.fragmentShader=wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=Eu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(r.value);break;case"v2":this.uniforms[n].value=new xe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new P().fromArray(r.value);break;case"v4":this.uniforms[n].value=new xt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new je().fromArray(r.value);break;case"m4":this.uniforms[n].value=new gt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ru extends tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xi extends $i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Po extends xi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Cu extends $i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pu extends $i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ga extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ys=new gt,No=new P,Lo=new P;class Wl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=Gt,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;No.setFromMatrixPosition(e.matrixWorld),t.position.copy(No),Lo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ys.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ys,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Yi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ys)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yr=new P,Er=new Ri,rn=new P;let Xl=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yr,Er,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yr,Er,rn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yr,Er,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yr,Er,rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Ln=new P,Do=new xe,Io=new xe;class Ht extends Xl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,Do,Io),t.subVectors(Io,Do)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Nu extends Wl{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}}class Lu extends Ga{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Nu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Gr extends Xl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Du extends Wl{constructor(){super(new Gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uo extends Ga{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Du}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Iu extends Ga{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const hi=-90,fi=1;class Uu extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ht(hi,fi,e,t);r.layers=this.layers,this.add(r);const s=new Ht(hi,fi,e,t);s.layers=this.layers,this.add(s);const a=new Ht(hi,fi,e,t);a.layers=this.layers,this.add(a);const o=new Ht(hi,fi,e,t);o.layers=this.layers,this.add(o);const l=new Ht(hi,fi,e,t);l.layers=this.layers,this.add(l);const c=new Ht(hi,fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yi)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Fu extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ql{static{ql.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}}function Fo(i,e,t,n){const r=Ou(n);switch(t){case Sl:return i*e;case yl:return i*e/r.components*r.byteLength;case Na:return i*e/r.components*r.byteLength;case Yn:return i*e*2/r.components*r.byteLength;case La:return i*e*2/r.components*r.byteLength;case bl:return i*e*3/r.components*r.byteLength;case Zt:return i*e*4/r.components*r.byteLength;case Da:return i*e*4/r.components*r.byteLength;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pr:case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hs:case Ws:return Math.max(i,16)*Math.max(e,8)/4;case Vs:case Gs:return Math.max(i,8)*Math.max(e,8)/2;case Xs:case qs:case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case js:case Ir:case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $s:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ta:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case na:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ia:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case aa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case la:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ua:case ha:case fa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case pa:case ma:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ur:case ga:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ou(i){switch(i){case Gt:case xl:return{byteLength:1,components:1};case yi:case vl:case un:return{byteLength:2,components:1};case Ca:case Pa:return{byteLength:2,components:4};case dn:case Ra:case on:return{byteLength:4,components:1};case _l:case Ml:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jl(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Bu(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<h.length;f++){const x=h[d],b=h[f];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++d,h[d]=b)}h.length=d+1;for(let f=0,x=h.length;f<x;f++){const b=h[f];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var zu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ku=`#ifdef USE_ALPHAHASH
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
#endif`,Vu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xu=`#ifdef USE_AOMAP
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
#endif`,qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ju=`#ifdef USE_BATCHING
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
#endif`,Yu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ku=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qu=`#ifdef USE_IRIDESCENCE
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
#endif`,$u=`#ifdef USE_BUMPMAP
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
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ah=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lh=`#define PI 3.141592653589793
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
} // validated`,ch=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dh=`vec3 transformedNormal = objectNormal;
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
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ph=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mh="gl_FragColor = linearToOutputTexel( gl_FragColor );",gh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xh=`#ifdef USE_ENVMAP
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
#endif`,vh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
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
#endif`,Mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
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
#endif`,bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ah=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Th=`#ifdef USE_GRADIENTMAP
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
}`,wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ph=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Lh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ih=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fh=`PhysicalMaterial material;
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
#endif`,Oh=`uniform sampler2D dfgLUT;
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
}`,Bh=`
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
#endif`,zh=`#if defined( RE_IndirectDiffuse )
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
#endif`,kh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vh=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Hh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zh=`#if defined( USE_POINTS_UV )
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
#endif`,Jh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$h=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`#ifdef USE_MORPHTARGETS
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
#endif`,nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cf=`#ifdef USE_NORMALMAP
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
#endif`,df=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_f=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ef=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Af=`float getShadowMask() {
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
}`,Tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wf=`#ifdef USE_SKINNING
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
#endif`,Rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cf=`#ifdef USE_SKINNING
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
#endif`,Pf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,If=`#ifdef USE_TRANSMISSION
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
#endif`,Uf=`#ifdef USE_TRANSMISSION
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vf=`uniform sampler2D t2D;
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`#include <common>
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
}`,jf=`#if DEPTH_PACKING == 3200
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
}`,Yf=`#define DISTANCE
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
}`,Zf=`#define DISTANCE
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
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`uniform float scale;
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
}`,$f=`uniform vec3 diffuse;
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
}`,ep=`#include <common>
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
}`,tp=`uniform vec3 diffuse;
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
}`,np=`#define LAMBERT
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
}`,ip=`#define LAMBERT
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
}`,rp=`#define MATCAP
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
}`,sp=`#define MATCAP
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
}`,ap=`#define NORMAL
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
}`,op=`#define NORMAL
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
}`,lp=`#define PHONG
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
}`,cp=`#define PHONG
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
}`,dp=`#define STANDARD
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
}`,up=`#define STANDARD
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
}`,hp=`#define TOON
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
}`,fp=`#define TOON
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
}`,pp=`uniform float size;
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
}`,mp=`uniform vec3 diffuse;
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
}`,gp=`#include <common>
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
}`,xp=`uniform vec3 color;
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
}`,vp=`uniform float rotation;
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
}`,_p=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:zu,alphahash_pars_fragment:ku,alphamap_fragment:Vu,alphamap_pars_fragment:Hu,alphatest_fragment:Gu,alphatest_pars_fragment:Wu,aomap_fragment:Xu,aomap_pars_fragment:qu,batching_pars_vertex:ju,batching_vertex:Yu,begin_vertex:Zu,beginnormal_vertex:Ju,bsdfs:Ku,iridescence_fragment:Qu,bumpmap_pars_fragment:$u,clipping_planes_fragment:eh,clipping_planes_pars_fragment:th,clipping_planes_pars_vertex:nh,clipping_planes_vertex:ih,color_fragment:rh,color_pars_fragment:sh,color_pars_vertex:ah,color_vertex:oh,common:lh,cube_uv_reflection_fragment:ch,defaultnormal_vertex:dh,displacementmap_pars_vertex:uh,displacementmap_vertex:hh,emissivemap_fragment:fh,emissivemap_pars_fragment:ph,colorspace_fragment:mh,colorspace_pars_fragment:gh,envmap_fragment:xh,envmap_common_pars_fragment:vh,envmap_pars_fragment:_h,envmap_pars_vertex:Mh,envmap_physical_pars_fragment:Nh,envmap_vertex:Sh,fog_vertex:bh,fog_pars_vertex:yh,fog_fragment:Eh,fog_pars_fragment:Ah,gradientmap_pars_fragment:Th,lightmap_pars_fragment:wh,lights_lambert_fragment:Rh,lights_lambert_pars_fragment:Ch,lights_pars_begin:Ph,lights_toon_fragment:Lh,lights_toon_pars_fragment:Dh,lights_phong_fragment:Ih,lights_phong_pars_fragment:Uh,lights_physical_fragment:Fh,lights_physical_pars_fragment:Oh,lights_fragment_begin:Bh,lights_fragment_maps:zh,lights_fragment_end:kh,lightprobes_pars_fragment:Vh,logdepthbuf_fragment:Hh,logdepthbuf_pars_fragment:Gh,logdepthbuf_pars_vertex:Wh,logdepthbuf_vertex:Xh,map_fragment:qh,map_pars_fragment:jh,map_particle_fragment:Yh,map_particle_pars_fragment:Zh,metalnessmap_fragment:Jh,metalnessmap_pars_fragment:Kh,morphinstance_vertex:Qh,morphcolor_vertex:$h,morphnormal_vertex:ef,morphtarget_pars_vertex:tf,morphtarget_vertex:nf,normal_fragment_begin:rf,normal_fragment_maps:sf,normal_pars_fragment:af,normal_pars_vertex:of,normal_vertex:lf,normalmap_pars_fragment:cf,clearcoat_normal_fragment_begin:df,clearcoat_normal_fragment_maps:uf,clearcoat_pars_fragment:hf,iridescence_pars_fragment:ff,opaque_fragment:pf,packing:mf,premultiplied_alpha_fragment:gf,project_vertex:xf,dithering_fragment:vf,dithering_pars_fragment:_f,roughnessmap_fragment:Mf,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:bf,shadowmap_pars_vertex:yf,shadowmap_vertex:Ef,shadowmask_pars_fragment:Af,skinbase_vertex:Tf,skinning_pars_vertex:wf,skinning_vertex:Rf,skinnormal_vertex:Cf,specularmap_fragment:Pf,specularmap_pars_fragment:Nf,tonemapping_fragment:Lf,tonemapping_pars_fragment:Df,transmission_fragment:If,transmission_pars_fragment:Uf,uv_pars_fragment:Ff,uv_pars_vertex:Of,uv_vertex:Bf,worldpos_vertex:zf,background_vert:kf,background_frag:Vf,backgroundCube_vert:Hf,backgroundCube_frag:Gf,cube_vert:Wf,cube_frag:Xf,depth_vert:qf,depth_frag:jf,distance_vert:Yf,distance_frag:Zf,equirect_vert:Jf,equirect_frag:Kf,linedashed_vert:Qf,linedashed_frag:$f,meshbasic_vert:ep,meshbasic_frag:tp,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:rp,meshmatcap_frag:sp,meshnormal_vert:ap,meshnormal_frag:op,meshphong_vert:lp,meshphong_frag:cp,meshphysical_vert:dp,meshphysical_frag:up,meshtoon_vert:hp,meshtoon_frag:fp,points_vert:pp,points_frag:mp,shadow_vert:gp,shadow_frag:xp,sprite_vert:vp,sprite_frag:_p},Se={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},an={basic:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Ut([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Ut([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Ut([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Ut([Se.points,Se.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Ut([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Ut([Se.common,Se.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Ut([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Ut([Se.sprite,Se.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Ut([Se.common,Se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Ut([Se.lights,Se.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};an.physical={uniforms:Ut([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Ar={r:0,b:0,g:0},Mp=new gt,Yl=new je;Yl.set(-1,0,0,0,1,0,0,0,1);function Sp(i,e,t,n,r,s){const a=new Be(0);let o=r===!0?0:1,l,c,u=null,h=0,d=null;function f(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){const S=w.backgroundBlurriness>0;R=e.get(R,S)}return R}function x(w){let R=!1;const S=f(w);S===null?m(a,o):S&&S.isColor&&(m(S,1),R=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(w,R){const S=f(R);S&&(S.isCubeTexture||S.mapping===Hr)?(c===void 0&&(c=new St(new Zn(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Ti(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,y,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Mp.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yl),c.material.toneMapped=it.getTransfer(S.colorSpace)!==ut,(u!==S||h!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new St(new er(2,2),new tn({name:"BackgroundMaterial",uniforms:Ti(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=it.getTransfer(S.colorSpace)!==ut,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,d=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,R){w.getRGB(Ar,Gl(i)),t.buffers.color.setClear(Ar.r,Ar.g,Ar.b,R,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,R=1){a.set(w),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:x,addToRenderList:b,dispose:p}}function bp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(D,B,X,I,z){let V=!1;const q=h(D,I,X,B);s!==q&&(s=q,c(s.object)),V=f(D,I,X,z),V&&x(D,I,X,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,S(D,B,X,I),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function h(D,B,X,I){const z=I.wireframe===!0;let V=n[B.id];V===void 0&&(V={},n[B.id]=V);const q=D.isInstancedMesh===!0?D.id:0;let te=V[q];te===void 0&&(te={},V[q]=te);let j=te[X.id];j===void 0&&(j={},te[X.id]=j);let $=j[z];return $===void 0&&($=d(l()),j[z]=$),$}function d(D){const B=[],X=[],I=[];for(let z=0;z<t;z++)B[z]=0,X[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,B,X,I){const z=s.attributes,V=B.attributes;let q=0;const te=X.getAttributes();for(const j in te)if(te[j].location>=0){const ie=z[j];let Ce=V[j];if(Ce===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(Ce=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(Ce=D.instanceColor)),ie===void 0||ie.attribute!==Ce||Ce&&ie.data!==Ce.data)return!0;q++}return s.attributesNum!==q||s.index!==I}function x(D,B,X,I){const z={},V=B.attributes;let q=0;const te=X.getAttributes();for(const j in te)if(te[j].location>=0){let ie=V[j];ie===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor));const Ce={};Ce.attribute=ie,ie&&ie.data&&(Ce.data=ie.data),z[j]=Ce,q++}s.attributes=z,s.attributesNum=q,s.index=I}function b(){const D=s.newAttributes;for(let B=0,X=D.length;B<X;B++)D[B]=0}function m(D){p(D,0)}function p(D,B){const X=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;X[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),z[D]!==B&&(i.vertexAttribDivisor(D,B),z[D]=B)}function w(){const D=s.newAttributes,B=s.enabledAttributes;for(let X=0,I=B.length;X<I;X++)B[X]!==D[X]&&(i.disableVertexAttribArray(X),B[X]=0)}function R(D,B,X,I,z,V,q){q===!0?i.vertexAttribIPointer(D,B,X,z,V):i.vertexAttribPointer(D,B,X,I,z,V)}function S(D,B,X,I){b();const z=I.attributes,V=X.getAttributes(),q=B.defaultAttributeValues;for(const te in V){const j=V[te];if(j.location>=0){let $=z[te];if($===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){const ie=$.normalized,Ce=$.itemSize,Te=e.get($);if(Te===void 0)continue;const rt=Te.buffer,Je=Te.type,nt=Te.bytesPerElement,K=Je===i.INT||Je===i.UNSIGNED_INT||$.gpuType===Ra;if($.isInterleavedBufferAttribute){const re=$.data,_e=re.stride,ke=$.offset;if(re.isInstancedInterleavedBuffer){for(let Me=0;Me<j.locationSize;Me++)p(j.location+Me,re.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Me=0;Me<j.locationSize;Me++)m(j.location+Me);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let Me=0;Me<j.locationSize;Me++)R(j.location+Me,Ce/j.locationSize,Je,ie,_e*nt,(ke+Ce/j.locationSize*Me)*nt,K)}else{if($.isInstancedBufferAttribute){for(let re=0;re<j.locationSize;re++)p(j.location+re,$.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let re=0;re<j.locationSize;re++)m(j.location+re);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let re=0;re<j.locationSize;re++)R(j.location+re,Ce/j.locationSize,Je,ie,Ce*nt,Ce/j.locationSize*re*nt,K)}}else if(q!==void 0){const ie=q[te];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(j.location,ie);break;case 3:i.vertexAttrib3fv(j.location,ie);break;case 4:i.vertexAttrib4fv(j.location,ie);break;default:i.vertexAttrib1fv(j.location,ie)}}}}w()}function A(){T();for(const D in n){const B=n[D];for(const X in B){const I=B[X];for(const z in I){const V=I[z];for(const q in V)u(V[q].object),delete V[q];delete I[z]}}delete n[D]}}function y(D){if(n[D.id]===void 0)return;const B=n[D.id];for(const X in B){const I=B[X];for(const z in I){const V=I[z];for(const q in V)u(V[q].object),delete V[q];delete I[z]}}delete n[D.id]}function C(D){for(const B in n){const X=n[B];for(const I in X){const z=X[I];if(z[D.id]===void 0)continue;const V=z[D.id];for(const q in V)u(V[q].object),delete V[q];delete z[D.id]}}}function _(D){for(const B in n){const X=n[B],I=D.isInstancedMesh===!0?D.id:0,z=X[I];if(z!==void 0){for(const V in z){const q=z[V];for(const te in q)u(q[te].object),delete q[te];delete z[V]}delete X[I],Object.keys(X).length===0&&delete n[B]}}}function T(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:y,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:w}}function yp(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Ep(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Zt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Gt&&C!==on&&!_&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:S,maxSamples:A,samples:y}}function Ap(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Dn,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const x=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const w=s?0:n,R=w*4;let S=p.clippingState||null;l.value=S,S=u(x,d,R,f);for(let A=0;A!==R;++A)S[A]=t[A];p.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,x){const b=h!==null?h.length:0;let m=null;if(b!==0){if(m=l.value,x!==!0||m===null){const p=f+b*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,S=f;R!==b;++R,S+=4)a.copy(h[R]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}const _i=4,Tp=6,wp=20,Rp=256,Bi=new Gr,Oo=new Be;let Es=null,As=0,Ts=0,ws=!1;const Cp=new P,Vn=new P;class Bo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Cp}=s;Es=this._renderer.getRenderTarget(),As=this._renderer.getActiveCubeFace(),Ts=this._renderer.getActiveMipmapLevel(),ws=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Es,As,Ts),this._renderer.xr.enabled=ws,e.scissorTest=!1,pi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jn||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Es=this._renderer.getRenderTarget(),As=this._renderer.getActiveCubeFace(),Ts=this._renderer.getActiveMipmapLevel(),ws=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:un,format:Zt,colorSpace:Fr,depthBuffer:!1},r=zo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zo(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pp(s)),this._blurMaterial=Lp(s,e,t),this._ggxMaterial=Np(s,e,t)}return r}_compileMaterial(e){const t=new St(new Wt,e);this._renderer.compile(t,Bi)}_sceneToCubeUV(e,t,n,r,s){const l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Oo),h.toneMapping=cn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new Zn,new Pl({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let p=!1;const w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(Oo),p=!0);for(let R=0;R<6;R++){const S=R%3;S===0?(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[R],s.y,s.z)):S===1?(l.up.set(0,0,c[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[R],s.z)):(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[R]));const A=this._cubeSize;pi(r,S*A,R>2?A:0,A,A),h.setRenderTarget(r),p&&h.render(b,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===jn||e.mapping===bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ko());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;pi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Bi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:x}=this,b=this._sizeLods[n],m=3*b*(n>x-_i?n-x+_i:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=x-t,pi(s,m,p,3*b,2*b),r.setRenderTarget(s),r.render(o,Bi),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,pi(e,m,p,3*b,2*b),r.setRenderTarget(e),r.render(o,Bi)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[r],h=3*u*(r>this._lodMax-_i?r-this._lodMax+_i:0),d=4*(this._cubeSize-u);pi(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(l,Bi)}}function Pp(i){const e=[],t=[];let n=i;const r=i-_i+1+Tp;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,x=new Float32Array(f*d*h),b=new Float32Array(f*d*h);for(let p=0;p<h;p++){const w=p%3*2/3-1,R=p>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];x.set(S,f*d*p);for(let A=0;A<d;A++){const y=u[A*2]*2-1,C=u[A*2+1]*2-1;p===0?Vn.set(1,C,y):p===1?Vn.set(-y,1,-C):p===2?Vn.set(-y,C,1):p===3?Vn.set(-1,C,-y):p===4?Vn.set(-y,-1,C):Vn.set(y,C,-1),Vn.toArray(b,(p*d+A)*f)}}const m=new Wt;m.setAttribute("position",new yn(x,f)),m.setAttribute("outputDirection",new yn(b,f)),t.push(new St(m,null)),n>_i&&n--}return{lodMeshes:t,sizeLods:e}}function zo(i,e,t){const n=new Jt(i,e,t);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Np(i,e,t){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wr(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Lp(i,e,t){return new tn({name:"SphericalGaussianBlur",defines:{SAMPLES:wp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wr(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function ko(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wr(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Vo(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Wr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Zl extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Nl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zn(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Sn});s.uniforms.tEquirect.value=t;const a=new St(r,s),o=t.minFilter;return t.minFilter===Wn&&(t.minFilter=Rt),new Uu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Dp(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Yr||f===Zr)if(e.has(d)){const x=e.get(d).texture;return o(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const b=new Zl(x.height);return b.fromEquirectangularTexture(i,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,x=f===Yr||f===Zr,b=f===jn||f===bi;if(x||b){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Bo(i)),m=x?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const w=d.image;return x&&w&&w.height>0||b&&w&&l(w)?(n===null&&(n=new Bo(i)),m=x?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,f){return f===Yr?d.mapping=jn:f===Zr&&(d.mapping=bi),d}function l(d){let f=0;const x=6;for(let b=0;b<x;b++)d[b]!==void 0&&f++;return f===x}function c(d){const f=d.target;f.removeEventListener("dispose",c);const x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function Ip(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Mi("WebGLRenderer: "+n+" extension not supported."),r}}}function Up(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,x=h.attributes.position;let b=0;if(x===void 0)return;if(f!==null){const w=f.array;b=f.version;for(let R=0,S=w.length;R<S;R+=3){const A=w[R+0],y=w[R+1],C=w[R+2];d.push(A,y,y,C,C,A)}}else{const w=x.array;b=x.version;for(let R=0,S=w.length/3-1;R<S;R+=3){const A=R+0,y=R+1,C=R+2;d.push(A,y,y,C,C,A)}}const m=new(x.count>=65535?Cl:Rl)(d,1);m.version=b;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Fp(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*a),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,s,h*a,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,f);let b=0;for(let m=0;m<f;m++)b+=d[m];t.update(b,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Op(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Bp(i,e,t){const n=new WeakMap,r=new xt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let R=0;f===!0&&(R=1),x===!0&&(R=2),b===!0&&(R=3);let S=o.attributes.position.count*R,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const y=new Float32Array(S*A*4*h),C=new Al(y,S,A,h);C.type=on,C.needsUpdate=!0;const _=R*4;for(let L=0;L<h;L++){const D=m[L],B=p[L],X=w[L],I=S*A*4*L;for(let z=0;z<D.count;z++){const V=z*_;f===!0&&(r.fromBufferAttribute(D,z),y[I+V+0]=r.x,y[I+V+1]=r.y,y[I+V+2]=r.z,y[I+V+3]=0),x===!0&&(r.fromBufferAttribute(B,z),y[I+V+4]=r.x,y[I+V+5]=r.y,y[I+V+6]=r.z,y[I+V+7]=0),b===!0&&(r.fromBufferAttribute(X,z),y[I+V+8]=r.x,y[I+V+9]=r.y,y[I+V+10]=r.z,y[I+V+11]=X.itemSize===4?r.w:1)}}d={count:h,texture:C,size:new xe(S,A)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];const x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function zp(i,e,t,n,r){let s=new WeakMap;function a(c){const u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const kp={[dl]:"LINEAR_TONE_MAPPING",[ul]:"REINHARD_TONE_MAPPING",[hl]:"CINEON_TONE_MAPPING",[wa]:"ACES_FILMIC_TONE_MAPPING",[pl]:"AGX_TONE_MAPPING",[ml]:"NEUTRAL_TONE_MAPPING",[fl]:"CUSTOM_TONE_MAPPING"};function Vp(i,e,t,n,r,s){const a=new Jt(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Wt;c.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Et([0,2,0,0,2,0],2));const u=new Ru({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new St(c,u),d=new Gr(-1,1,1,-1,0,1);let f=null,x=null,b=!1,m,p=null,w=[],R=!1;this.setSize=function(S,A){a.setSize(S,A),o!==null&&o.setSize(S,A),l!==null&&l.setSize(S,A);for(let y=0;y<w.length;y++){const C=w[y];C.setSize&&C.setSize(S,A)}},this.setEffects=function(S){w=S,R=w.length>0&&w[0].isRenderPass===!0;const A=a.width,y=a.height;w.length>0&&o===null&&(o=new Jt(A,y,{type:un,depthBuffer:!1,stencilBuffer:!1}),l=new Jt(A,y,{type:un,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<w.length;C++){const _=w[C];_.setSize&&_.setSize(A,y)}},this.begin=function(S,A){if(b||S.toneMapping===cn&&w.length===0)return!1;if(p=A,A!==null){const y=A.width,C=A.height;(a.width!==y||a.height!==C)&&this.setSize(y,C)}return R===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=cn,!0},this.hasRenderPass=function(){return R},this.end=function(S,A){S.toneMapping=m,b=!0;let y=a,C=o;for(let _=0;_<w.length;_++){const T=w[_];T.enabled!==!1&&(T.render(S,C,y,A),T.needsSwap!==!1&&(y=C,C=C===o?l:o))}if(f!==S.outputColorSpace||x!==S.toneMapping){f=S.outputColorSpace,x=S.toneMapping,u.defines={},it.getTransfer(f)===ut&&(u.defines.SRGB_TRANSFER="");const _=kp[x];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(p),S.render(h,d),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Jl=new Ft,Sa=new Ei(1,1),Kl=new Al,Ql=new Rd,$l=new Nl,Ho=[],Go=[],Wo=new Float32Array(16),Xo=new Float32Array(9),qo=new Float32Array(4);function Ci(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ho[r];if(s===void 0&&(s=new Float32Array(r),Ho[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xr(i,e){let t=Go[e];t===void 0&&(t=new Int32Array(e),Go[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function qp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;qo.set(n),i.uniformMatrix2fv(this.addr,!1,qo),Tt(t,n)}}function jp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;Xo.set(n),i.uniformMatrix3fv(this.addr,!1,Xo),Tt(t,n)}}function Yp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;Wo.set(n),i.uniformMatrix4fv(this.addr,!1,Wo),Tt(t,n)}}function Zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function $p(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function im(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Sa.compareFunction=t.isReversedDepthBuffer()?Ua:Ia,s=Sa):s=Jl,t.setTexture2D(e||s,r)}function rm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ql,r)}function sm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||$l,r)}function am(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Kl,r)}function om(i){switch(i){case 5126:return Hp;case 35664:return Gp;case 35665:return Wp;case 35666:return Xp;case 35674:return qp;case 35675:return jp;case 35676:return Yp;case 5124:case 35670:return Zp;case 35667:case 35671:return Jp;case 35668:case 35672:return Kp;case 35669:case 35673:return Qp;case 5125:return $p;case 36294:return em;case 36295:return tm;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return am}}function lm(i,e){i.uniform1fv(this.addr,e)}function cm(i,e){const t=Ci(e,this.size,2);i.uniform2fv(this.addr,t)}function dm(i,e){const t=Ci(e,this.size,3);i.uniform3fv(this.addr,t)}function um(i,e){const t=Ci(e,this.size,4);i.uniform4fv(this.addr,t)}function hm(i,e){const t=Ci(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fm(i,e){const t=Ci(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pm(i,e){const t=Ci(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mm(i,e){i.uniform1iv(this.addr,e)}function gm(i,e){i.uniform2iv(this.addr,e)}function xm(i,e){i.uniform3iv(this.addr,e)}function vm(i,e){i.uniform4iv(this.addr,e)}function _m(i,e){i.uniform1uiv(this.addr,e)}function Mm(i,e){i.uniform2uiv(this.addr,e)}function Sm(i,e){i.uniform3uiv(this.addr,e)}function bm(i,e){i.uniform4uiv(this.addr,e)}function ym(i,e,t){const n=this.cache,r=e.length,s=Xr(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Sa:a=Jl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Em(i,e,t){const n=this.cache,r=e.length,s=Xr(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ql,s[a])}function Am(i,e,t){const n=this.cache,r=e.length,s=Xr(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||$l,s[a])}function Tm(i,e,t){const n=this.cache,r=e.length,s=Xr(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Kl,s[a])}function wm(i){switch(i){case 5126:return lm;case 35664:return cm;case 35665:return dm;case 35666:return um;case 35674:return hm;case 35675:return fm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return xm;case 35669:case 35673:return vm;case 5125:return _m;case 36294:return Mm;case 36295:return Sm;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Tm}}class Rm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=om(t.type)}}class Cm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wm(t.type)}}class Pm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Rs=/(\w+)(\])?(\[|\.)?/g;function jo(i,e){i.seq.push(e),i.map[e.id]=e}function Nm(i,e,t){const n=i.name,r=n.length;for(Rs.lastIndex=0;;){const s=Rs.exec(n),a=Rs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){jo(t,c===void 0?new Rm(o,i,e):new Cm(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Pm(o),jo(t,h)),t=h}}}class Lr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Nm(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Yo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Lm=37297;let Dm=0;function Im(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Zo=new je;function Um(i){it._getMatrix(Zo,it.workingColorSpace,i);const e=`mat3( ${Zo.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case Or:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Im(i.getShaderSource(e),o)}else return s}function Fm(i,e){const t=Um(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Om={[dl]:"Linear",[ul]:"Reinhard",[hl]:"Cineon",[wa]:"ACESFilmic",[pl]:"AgX",[ml]:"Neutral",[fl]:"Custom"};function Bm(i,e){const t=Om[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tr=new P;function zm(){it.getLuminanceCoefficients(Tr);const i=Tr.x.toFixed(4),e=Tr.y.toFixed(4),t=Tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function km(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function Vm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Hi(i){return i!==""}function Ko(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ba(i){return i.replace(Gm,Xm)}const Wm=new Map;function Xm(i,e){let t=Ze[e];if(t===void 0){const n=Wm.get(e);if(n!==void 0)t=Ze[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ba(t)}const qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $o(i){return i.replace(qm,jm)}function jm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function el(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Ym={[wr]:"SHADOWMAP_TYPE_PCF",[ki]:"SHADOWMAP_TYPE_VSM"};function Zm(i){return Ym[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Jm={[jn]:"ENVMAP_TYPE_CUBE",[bi]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE_UV"};function Km(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Jm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qm={[bi]:"ENVMAP_MODE_REFRACTION"};function $m(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Qm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const e0={[cl]:"ENVMAP_BLENDING_MULTIPLY",[sd]:"ENVMAP_BLENDING_MIX",[ad]:"ENVMAP_BLENDING_ADD"};function t0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":e0[i.combine]||"ENVMAP_BLENDING_NONE"}function n0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function i0(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Zm(t),c=Km(t),u=$m(t),h=t0(t),d=n0(t),f=km(t),x=Vm(s),b=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Hi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Hi).join(`
`),p.length>0&&(p+=`
`)):(m=[el(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),p=[el(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cn?"#define TONE_MAPPING":"",t.toneMapping!==cn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==cn?Bm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Fm("linearToOutputTexel",t.outputColorSpace),zm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hi).join(`
`)),a=ba(a),a=Ko(a,t),a=Qo(a,t),o=ba(o),o=Ko(o,t),o=Qo(o,t),a=$o(a),o=$o(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===io?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const R=w+m+a,S=w+p+o,A=Yo(r,r.VERTEX_SHADER,R),y=Yo(r,r.FRAGMENT_SHADER,S);r.attachShader(b,A),r.attachShader(b,y),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function C(D){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(b)||"",X=r.getShaderInfoLog(A)||"",I=r.getShaderInfoLog(y)||"",z=B.trim(),V=X.trim(),q=I.trim();let te=!0,j=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,A,y);else{const $=Jo(r,A,"vertex"),ie=Jo(r,y,"fragment");ot("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+$+`
`+ie)}else z!==""?Xe("WebGLProgram: Program Info Log:",z):(V===""||q==="")&&(j=!1);j&&(D.diagnostics={runnable:te,programLog:z,vertexShader:{log:V,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(A),r.deleteShader(y),_=new Lr(r,b),T=Hm(r,b)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(b,Lm)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dm++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=A,this.fragmentShader=y,this}let r0=0;class s0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new a0(e),t.set(e,n)),n}}class a0{constructor(e){this.id=r0++,this.code=e,this.usedTimes=0}}function o0(i){return i===Yn||i===Ir||i===Ur}function l0(i,e,t,n,r,s){const a=new Tl,o=new s0,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,T,L,D,B,X){const I=D.fog,z=B.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,te=e.get(_.envMap||V,q),j=te&&te.mapping===Hr?te.image.height:null,$=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Xe("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ce=ie!==void 0?ie.length:0;let Te=0;z.morphAttributes.position!==void 0&&(Te=1),z.morphAttributes.normal!==void 0&&(Te=2),z.morphAttributes.color!==void 0&&(Te=3);let rt,Je,nt,K;if($){const Qe=an[$];rt=Qe.vertexShader,Je=Qe.fragmentShader}else{rt=_.vertexShader,Je=_.fragmentShader;const Qe=o.getVertexShaderStage(_),lt=o.getFragmentShaderStage(_);o.update(_,Qe,lt),nt=Qe.id,K=lt.id}const re=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),ke=B.isInstancedMesh===!0,Me=B.isBatchedMesh===!0,Ve=!!_.map,tt=!!_.matcap,Q=!!te,se=!!_.aoMap,oe=!!_.lightMap,le=!!_.bumpMap&&_.wireframe===!1,he=!!_.normalMap,ze=!!_.displacementMap,Fe=!!_.emissiveMap,He=!!_.metalnessMap,We=!!_.roughnessMap,N=_.anisotropy>0,st=_.clearcoat>0,Ke=_.dispersion>0,E=_.retroreflectivity>0,g=_.iridescence>0,O=_.sheen>0,H=_.transmission>0,Z=N&&!!_.anisotropyMap,ce=st&&!!_.clearcoatMap,de=st&&!!_.clearcoatNormalMap,J=st&&!!_.clearcoatRoughnessMap,ne=g&&!!_.iridescenceMap,fe=g&&!!_.iridescenceThicknessMap,Ie=O&&!!_.sheenColorMap,ve=O&&!!_.sheenRoughnessMap,ue=!!_.specularMap,Le=!!_.specularColorMap,Oe=!!_.specularIntensityMap,qe=H&&!!_.transmissionMap,F=H&&!!_.thicknessMap,pe=!!_.gradientMap,ee=!!_.alphaMap,me=_.alphaTest>0,be=!!_.alphaHash,k=!!_.extensions;let ae=cn;_.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ae=i.toneMapping);const ge={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:rt,fragmentShader:Je,defines:_.defines,customVertexShaderID:nt,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Me,batchingColor:Me&&B._colorsTexture!==null,instancing:ke,instancingColor:ke&&B.instanceColor!==null,instancingMorph:ke&&B.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ve,matcap:tt,envMap:Q,envMapMode:Q&&te.mapping,envMapCubeUVHeight:j,aoMap:se,lightMap:oe,bumpMap:le,normalMap:he,displacementMap:ze,emissiveMap:Fe,normalMapObjectSpace:he&&_.normalMapType===cd,normalMapTangentSpace:he&&_.normalMapType===xa,packedNormalMap:he&&_.normalMapType===xa&&o0(_.normalMap.format),metalnessMap:He,roughnessMap:We,anisotropy:N,anisotropyMap:Z,clearcoat:st,clearcoatMap:ce,clearcoatNormalMap:de,clearcoatRoughnessMap:J,dispersion:Ke,retroreflection:E,iridescence:g,iridescenceMap:ne,iridescenceThicknessMap:fe,sheen:O,sheenColorMap:Ie,sheenRoughnessMap:ve,specularMap:ue,specularColorMap:Le,specularIntensityMap:Oe,transmission:H,transmissionMap:qe,thicknessMap:F,gradientMap:pe,opaque:_.transparent===!1&&_.blending===Gi&&_.alphaToCoverage===!1,alphaMap:ee,alphaTest:me,alphaHash:be,combine:_.combine,mapUv:Ve&&x(_.map.channel),aoMapUv:se&&x(_.aoMap.channel),lightMapUv:oe&&x(_.lightMap.channel),bumpMapUv:le&&x(_.bumpMap.channel),normalMapUv:he&&x(_.normalMap.channel),displacementMapUv:ze&&x(_.displacementMap.channel),emissiveMapUv:Fe&&x(_.emissiveMap.channel),metalnessMapUv:He&&x(_.metalnessMap.channel),roughnessMapUv:We&&x(_.roughnessMap.channel),anisotropyMapUv:Z&&x(_.anisotropyMap.channel),clearcoatMapUv:ce&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&x(_.sheenRoughnessMap.channel),specularMapUv:ue&&x(_.specularMap.channel),specularColorMapUv:Le&&x(_.specularColorMap.channel),specularIntensityMapUv:Oe&&x(_.specularIntensityMap.channel),transmissionMapUv:qe&&x(_.transmissionMap.channel),thicknessMapUv:F&&x(_.thicknessMap.channel),alphaMapUv:ee&&x(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(he||N),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Ve||ee),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&he===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Te,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ve&&_.map.isVideoTexture===!0&&it.getTransfer(_.map.colorSpace)===ut,decodeVideoTextureEmissive:Fe&&_.emissiveMap.isVideoTexture===!0&&it.getTransfer(_.emissiveMap.colorSpace)===ut,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_n,flipSided:_.side===zt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:k&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(k&&_.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ge.vertexUv1s=l.has(1),ge.vertexUv2s=l.has(2),ge.vertexUv3s=l.has(3),l.clear(),ge}function m(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)T.push(L),T.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(p(T,_),w(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function w(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function R(_){const T=f[_.type];let L;if(T){const D=an[T];L=Au.clone(D.uniforms)}else L=_.uniforms;return L}function S(_,T){let L=u.get(T);return L!==void 0?++L.usedTimes:(L=new i0(i,T,_,r),c.push(L),u.set(T,L)),L}function A(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function y(_){o.remove(_)}function C(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:R,acquireProgram:S,releaseProgram:A,releaseShaderCache:y,programs:c,dispose:C}}function c0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function d0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function tl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,x,b,m,p){let w=i[e];return w===void 0?(w={id:d.id,object:d,geometry:f,material:x,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:p},i[e]=w):(w.id=d.id,w.object=d,w.geometry=f,w.material=x,w.materialVariant=a(d),w.groupOrder=b,w.renderOrder=d.renderOrder,w.z=m,w.group=p),e++,w}function l(d,f,x,b,m,p,w){w.reversedDepth===!0&&(m=-m);const R=o(d,f,x,b,m,p);x.transmission>0?n.push(R):x.transparent===!0?r.push(R):t.push(R)}function c(d,f,x,b,m,p){const w=o(d,f,x,b,m,p);x.transmission>0?n.unshift(w):x.transparent===!0?r.unshift(w):t.unshift(w)}function u(d,f){t.length>1&&t.sort(d||d0),n.length>1&&n.sort(f||tl),r.length>1&&r.sort(f||tl)}function h(){for(let d=e,f=i.length;d<f;d++){const x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function u0(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new nl,i.set(n,[a])):r>=s.length?(a=new nl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function h0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Be};break;case"SpotLight":t={position:new P,direction:new P,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function f0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let p0=0;function m0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function g0(i){const e=new h0,t=f0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const r=new P,s=new gt,a=new gt;function o(c){let u=0,h=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,x=0,b=0,m=0,p=0,w=0,R=0,S=0,A=0,y=0,C=0,_=0,T=0,L=0;c.sort(m0);for(let B=0,X=c.length;B<X;B++){const I=c[B],z=I.color,V=I.intensity,q=I.distance;let te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Yn?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=z.r*V,h+=z.g*V,d+=z.b*V;else if(I.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(I.sh.coefficients[j],V);L++}else if(I.isSunLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,ie=t.get(I);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[x]=ie,n.sunShadowMap[x]=te;const Ce=$.getViewportCount();for(let Te=0;Te<Ce;Te++)n.sunShadowMatrix[b+Te]=$.getMatrix(Te),n.sunShadowCascade[b+Te]=$._cascadeData[Te];b+=Ce,x++}n.sun[f]=j,f++}else if(I.isDirectionalLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,ie=t.get(I);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,n.directionalShadow[m]=ie,n.directionalShadowMap[m]=te,n.directionalShadowMatrix[m]=I.shadow.matrix,A++}n.directional[m]=j,m++}else if(I.isSpotLight){const j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(z).multiplyScalar(V),j.distance=q,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,n.spot[w]=j;const $=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,$.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[w]=$.matrix,I.castShadow){const ie=t.get(I);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,n.spotShadow[w]=ie,n.spotShadowMap[w]=te,C++}w++}else if(I.isRectAreaLight){const j=e.get(I);j.color.copy(z).multiplyScalar(V),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),n.rectArea[R]=j,R++}else if(I.isPointLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){const $=I.shadow,ie=t.get(I);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,ie.shadowCameraNear=$.camera.near,ie.shadowCameraFar=$.camera.far,n.pointShadow[p]=ie,n.pointShadowMap[p]=te,n.pointShadowMatrix[p]=I.shadow.matrix,y++}n.point[p]=j,p++}else if(I.isHemisphereLight){const j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(V),j.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[S]=j,S++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==w||D.rectAreaLength!==R||D.hemiLength!==S||D.numSunShadows!==x||D.numDirectionalShadows!==A||D.numPointShadows!==y||D.numSpotShadows!==C||D.numSpotMaps!==_||D.numLightProbes!==L)&&(n.sun.length=f,n.directional.length=m,n.spot.length=w,n.rectArea.length=R,n.point.length=p,n.hemi.length=S,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=w,D.rectAreaLength=R,D.hemiLength=S,D.numSunShadows=x,D.numDirectionalShadows=A,D.numPointShadows=y,D.numSpotShadows=C,D.numSpotMaps=_,D.numLightProbes=L,n.version=p0++)}function l(c,u){let h=0,d=0,f=0,x=0,b=0,m=0;const p=u.matrixWorldInverse;for(let w=0,R=c.length;w<R;w++){const S=c[w];if(S.isSunLight){const A=n.sun[h];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),h++}else if(S.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),d++}else if(S.isSpotLight){const A=n.spot[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),x++}else if(S.isRectAreaLight){const A=n.rectArea[b];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),b++}else if(S.isPointLight){const A=n.point[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const A=n.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function il(i){const e=new g0(i),t=[],n=[],r=[];function s(d){h.camera=d,t.length=0,n.length=0,r.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function x0(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new il(i),e.set(r,[o])):s>=a.length?(o=new il(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const v0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_0=`uniform sampler2D shadow_pass;
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
}`,M0=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],S0=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],rl=new gt,zi=new P,Cs=new P;function b0(i,e,t){let n=new Ba;const r=new xe,s=new xe,a=new xt,o=new Cu,l=new Pu,c={},u=t.maxTextureSize,h={[qn]:zt,[zt]:qn,[_n]:_n},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:v0,fragmentShader:_0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const x=new Wt;x.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new St(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wr;let p=this.type;this.render=function(y,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===kc&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wr);const T=i.getRenderTarget(),L=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Sn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=p!==this.type;X&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=y.length;I<z;I++){const V=y[I],q=V.shadow;if(q===void 0){Xe("WebGLShadowMap:",V,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const te=q.getFrameExtents();r.multiply(te),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,q.mapSize.y=s.y));const j=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=j,q.map===null||X===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ki){if(V.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Jt(r.x,r.y,{format:Yn,type:un,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),q.map.texture.name=V.name+".shadowMap",q.map.depthTexture=new Ei(r.x,r.y,on),q.map.depthTexture.name=V.name+".shadowMapDepth",q.map.depthTexture.format=En,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ct,q.map.depthTexture.magFilter=Ct}else V.isPointLight?(q.map=new Zl(r.x),q.map.depthTexture=new qd(r.x,dn)):(q.map=new Jt(r.x,r.y),q.map.depthTexture=new Ei(r.x,r.y,dn)),q.map.depthTexture.name=V.name+".shadowMap",q.map.depthTexture.format=En,this.type===wr?(q.map.depthTexture.compareFunction=j?Ua:Ia,q.map.depthTexture.minFilter=Rt,q.map.depthTexture.magFilter=Rt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ct,q.map.depthTexture.magFilter=Ct);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==r.x||q.map.height!==r.y)&&q.map.setSize(r.x,r.y);const $=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();V.isPointLight!==!0&&q.updateMatrices(V,_);for(let ie=0;ie<$;ie++){const Ce=q.getCamera(ie);if(V.isPointLight){const Te=q.camera,rt=q.matrix,Je=V.distance||Te.far;Je!==Te.far&&(Te.far=Je,Te.updateProjectionMatrix()),zi.setFromMatrixPosition(V.matrixWorld),Te.position.copy(zi),Cs.copy(Te.position),Cs.add(M0[ie]),Te.up.copy(S0[ie]),Te.lookAt(Cs),Te.updateMatrixWorld(),rt.makeTranslation(-zi.x,-zi.y,-zi.z),rl.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),q._frustum.setFromProjectionMatrix(rl,Te.coordinateSystem,Te.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,ie),i.clear();else{ie===0&&(i.setRenderTarget(q.map),i.clear());const Te=q.getViewport(ie);a.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),B.viewport(a)}n=q.getFrustum(ie),S(C,_,Ce,V,this.type)}q.isPointLightShadow!==!0&&this.type===ki&&w(q,_),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,L,D)};function w(y,C){const _=e.update(b);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null?y.mapPass=new Jt(r.x,r.y,{format:Yn,type:un}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(C,null,_,d,b,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value.set(y.map.width,y.map.height),f.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(C,null,_,f,b,null)}function R(y,C,_,T){let L=null;const D=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)L=D;else if(L=_.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=L.uuid,X=C.uuid;let I=c[B];I===void 0&&(I={},c[B]=I);let z=I[X];z===void 0&&(z=L.clone(),I[X]=z,C.addEventListener("dispose",A)),L=z}if(L.visible=C.visible,L.wireframe=C.wireframe,T===ki?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:h[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const B=i.properties.get(L);B.light=_}return L}function S(y,C,_,T,L){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&L===ki)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,y.matrixWorld);const X=e.update(y),I=y.material;if(Array.isArray(I)){const z=X.groups;for(let V=0,q=z.length;V<q;V++){const te=z[V],j=I[te.materialIndex];if(j&&j.visible){const $=R(y,j,T,L);y.onBeforeShadow(i,y,C,_,X,$,te),i.renderBufferDirect(_,null,X,$,y,te),y.onAfterShadow(i,y,C,_,X,$,te)}}}else if(I.visible){const z=R(y,I,T,L);y.onBeforeShadow(i,y,C,_,X,z,null),i.renderBufferDirect(_,null,X,z,y,null),y.onAfterShadow(i,y,C,_,X,z,null)}}const B=y.children;for(let X=0,I=B.length;X<I;X++)S(B[X],C,_,T,L)}function A(y){y.target.removeEventListener("dispose",A);for(const _ in c){const T=c[_],L=y.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function y0(i,e){function t(){let F=!1;const pe=new xt;let ee=null;const me=new xt(0,0,0,0);return{setMask:function(be){ee!==be&&!F&&(i.colorMask(be,be,be,be),ee=be)},setLocked:function(be){F=be},setClear:function(be,k,ae,ge,Qe){Qe===!0&&(be*=ge,k*=ge,ae*=ge),pe.set(be,k,ae,ge),me.equals(pe)===!1&&(i.clearColor(be,k,ae,ge),me.copy(pe))},reset:function(){F=!1,ee=null,me.set(-1,0,0,0)}}}function n(){let F=!1,pe=!1,ee=null,me=null,be=null;return{setReversed:function(k){if(pe!==k){const ae=e.get("EXT_clip_control");k?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),pe=k;const ge=be;be=null,this.setClear(ge)}},getReversed:function(){return pe},setTest:function(k){k?re(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(k){ee!==k&&!F&&(i.depthMask(k),ee=k)},setFunc:function(k){if(pe&&(k=Sd[k]),me!==k){switch(k){case Ls:i.depthFunc(i.NEVER);break;case Ds:i.depthFunc(i.ALWAYS);break;case Is:i.depthFunc(i.LESS);break;case qi:i.depthFunc(i.LEQUAL);break;case Us:i.depthFunc(i.EQUAL);break;case Fs:i.depthFunc(i.GEQUAL);break;case Os:i.depthFunc(i.GREATER);break;case Bs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=k}},setLocked:function(k){F=k},setClear:function(k){be!==k&&(be=k,pe&&(k=1-k),i.clearDepth(k))},reset:function(){F=!1,ee=null,me=null,be=null,pe=!1}}}function r(){let F=!1,pe=null,ee=null,me=null,be=null,k=null,ae=null,ge=null,Qe=null;return{setTest:function(lt){F||(lt?re(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(lt){pe!==lt&&!F&&(i.stencilMask(lt),pe=lt)},setFunc:function(lt,Ge,Ae){(ee!==lt||me!==Ge||be!==Ae)&&(i.stencilFunc(lt,Ge,Ae),ee=lt,me=Ge,be=Ae)},setOp:function(lt,Ge,Ae){(k!==lt||ae!==Ge||ge!==Ae)&&(i.stencilOp(lt,Ge,Ae),k=lt,ae=Ge,ge=Ae)},setLocked:function(lt){F=lt},setClear:function(lt){Qe!==lt&&(i.clearStencil(lt),Qe=lt)},reset:function(){F=!1,pe=null,ee=null,me=null,be=null,k=null,ae=null,ge=null,Qe=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d={},f=new WeakMap,x=[],b=null,m=!1,p=null,w=null,R=null,S=null,A=null,y=null,C=null,_=new Be(0,0,0),T=0,L=!1,D=null,B=null,X=null,I=null,z=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,te=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=te>=1):j.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=te>=2);let $=null,ie={};const Ce=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),rt=new xt().fromArray(Ce),Je=new xt().fromArray(Te);function nt(F,pe,ee,me){const be=new Uint8Array(4),k=i.createTexture();i.bindTexture(F,k),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ae=0;ae<ee;ae++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(pe+ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return k}const K={};K[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(qi),le(!1),he($a),re(i.CULL_FACE),se(Sn);function re(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function _e(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function ke(F,pe){return d[F]!==pe?(i.bindFramebuffer(F,pe),d[F]=pe,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pe),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Me(F,pe){let ee=x,me=!1;if(F){ee=f.get(pe),ee===void 0&&(ee=[],f.set(pe,ee));const be=F.textures;if(ee.length!==be.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let k=0,ae=be.length;k<ae;k++)ee[k]=i.COLOR_ATTACHMENT0+k;ee.length=be.length,me=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,me=!0);me&&i.drawBuffers(ee)}function Ve(F){return b!==F?(i.useProgram(F),b=F,!0):!1}const tt={[mi]:i.FUNC_ADD,[Hc]:i.FUNC_SUBTRACT,[Gc]:i.FUNC_REVERSE_SUBTRACT};tt[Wc]=i.MIN,tt[Xc]=i.MAX;const Q={[qc]:i.ZERO,[jc]:i.ONE,[Yc]:i.SRC_COLOR,[ol]:i.SRC_ALPHA,[ed]:i.SRC_ALPHA_SATURATE,[Qc]:i.DST_COLOR,[Jc]:i.DST_ALPHA,[Zc]:i.ONE_MINUS_SRC_COLOR,[ll]:i.ONE_MINUS_SRC_ALPHA,[$c]:i.ONE_MINUS_DST_COLOR,[Kc]:i.ONE_MINUS_DST_ALPHA,[td]:i.CONSTANT_COLOR,[nd]:i.ONE_MINUS_CONSTANT_COLOR,[id]:i.CONSTANT_ALPHA,[rd]:i.ONE_MINUS_CONSTANT_ALPHA};function se(F,pe,ee,me,be,k,ae,ge,Qe,lt){if(F===Sn){m===!0&&(_e(i.BLEND),m=!1);return}if(m===!1&&(re(i.BLEND),m=!0),F!==Vc){if(F!==p||lt!==L){if((w!==mi||A!==mi)&&(i.blendEquation(i.FUNC_ADD),w=mi,A=mi),lt)switch(F){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eo:i.blendFunc(i.ONE,i.ONE);break;case to:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case no:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",F);break}else switch(F){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case to:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case no:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",F);break}R=null,S=null,y=null,C=null,_.set(0,0,0),T=0,p=F,L=lt}return}be=be||pe,k=k||ee,ae=ae||me,(pe!==w||be!==A)&&(i.blendEquationSeparate(tt[pe],tt[be]),w=pe,A=be),(ee!==R||me!==S||k!==y||ae!==C)&&(i.blendFuncSeparate(Q[ee],Q[me],Q[k],Q[ae]),R=ee,S=me,y=k,C=ae),(ge.equals(_)===!1||Qe!==T)&&(i.blendColor(ge.r,ge.g,ge.b,Qe),_.copy(ge),T=Qe),p=F,L=!1}function oe(F,pe){F.side===_n?_e(i.CULL_FACE):re(i.CULL_FACE);let ee=F.side===zt;pe&&(ee=!ee),le(ee),F.blending===Gi&&F.transparent===!1?se(Sn):se(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const me=F.stencilWrite;o.setTest(me),me&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Fe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(F){D!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),D=F)}function he(F){F!==Bc?(re(i.CULL_FACE),F!==B&&(F===$a?i.cullFace(i.BACK):F===zc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),B=F}function ze(F){F!==X&&(q&&i.lineWidth(F),X=F)}function Fe(F,pe,ee){F?(re(i.POLYGON_OFFSET_FILL),(I!==pe||z!==ee)&&(I=pe,z=ee,a.getReversed()&&(pe=-pe),i.polygonOffset(pe,ee))):_e(i.POLYGON_OFFSET_FILL)}function He(F){F?re(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function We(F){F===void 0&&(F=i.TEXTURE0+V-1),$!==F&&(i.activeTexture(F),$=F)}function N(F,pe,ee){ee===void 0&&($===null?ee=i.TEXTURE0+V-1:ee=$);let me=ie[ee];me===void 0&&(me={type:void 0,texture:void 0},ie[ee]=me),(me.type!==F||me.texture!==pe)&&($!==ee&&(i.activeTexture(ee),$=ee),i.bindTexture(F,pe||K[F]),me.type=F,me.texture=pe)}function st(){const F=ie[$];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ke(){try{i.compressedTexImage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function g(){try{i.texSubImage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function O(){try{i.texSubImage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function ce(){try{i.texStorage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function de(){try{i.texStorage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function J(){try{i.texImage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function ne(){try{i.texImage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function fe(F){return h[F]!==void 0?h[F]:i.getParameter(F)}function Ie(F,pe){h[F]!==pe&&(i.pixelStorei(F,pe),h[F]=pe)}function ve(F){rt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),rt.copy(F))}function ue(F){Je.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Je.copy(F))}function Le(F,pe){let ee=c.get(pe);ee===void 0&&(ee=new WeakMap,c.set(pe,ee));let me=ee.get(F);me===void 0&&(me=i.getUniformBlockIndex(pe,F.name),ee.set(F,me))}function Oe(F,pe){const me=c.get(pe).get(F);l.get(pe)!==me&&(i.uniformBlockBinding(pe,me,F.__bindingPointIndex),l.set(pe,me))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},$=null,ie={},d={},f=new WeakMap,x=[],b=null,m=!1,p=null,w=null,R=null,S=null,A=null,y=null,C=null,_=new Be(0,0,0),T=0,L=!1,D=null,B=null,X=null,I=null,z=null,rt.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:_e,bindFramebuffer:ke,drawBuffers:Me,useProgram:Ve,setBlending:se,setMaterial:oe,setFlipSided:le,setCullFace:he,setLineWidth:ze,setPolygonOffset:Fe,setScissorTest:He,activeTexture:We,bindTexture:N,unbindTexture:st,compressedTexImage2D:Ke,compressedTexImage3D:E,texImage2D:J,texImage3D:ne,pixelStorei:Ie,getParameter:fe,updateUBOMapping:Le,uniformBlockBinding:Oe,texStorage2D:ce,texStorage3D:de,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:H,compressedTexSubImage3D:Z,scissor:ve,viewport:ue,reset:qe}}function E0(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,u=new WeakMap,h=new Set;let d;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,g){return x?new OffscreenCanvas(E,g):Br("canvas")}function m(E,g,O){let H=1;const Z=Ke(E);if((Z.width>O||Z.height>O)&&(H=O/Math.max(Z.width,Z.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ce=Math.floor(H*Z.width),de=Math.floor(H*Z.height);d===void 0&&(d=b(ce,de));const J=g?b(ce,de):d;return J.width=ce,J.height=de,J.getContext("2d").drawImage(E,0,0,ce,de),Xe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ce+"x"+de+")."),J}else return"data"in E&&Xe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function p(E){return E.generateMipmaps}function w(E){i.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,g,O,H,Z,ce=!1){if(E!==null){if(i[E]!==void 0)return i[E];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let de;H&&(de=e.get("EXT_texture_norm16"),de||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=g;if(g===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8),O===i.UNSIGNED_SHORT&&de&&(J=de.R16_EXT),O===i.SHORT&&de&&(J=de.R16_SNORM_EXT)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),g===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8),O===i.UNSIGNED_SHORT&&de&&(J=de.RG16_EXT),O===i.SHORT&&de&&(J=de.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_SHORT&&de&&(J=de.RGB16_EXT),O===i.SHORT&&de&&(J=de.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),g===i.RGBA){const ne=ce?Or:it.getTransfer(Z);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=ne===ut?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&de&&(J=de.RGBA16_EXT),O===i.SHORT&&de&&(J=de.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function A(E,g){let O;return E?g===null||g===dn||g===ji?O=i.DEPTH24_STENCIL8:g===on?O=i.DEPTH32F_STENCIL8:g===yi&&(O=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===dn||g===ji?O=i.DEPTH_COMPONENT24:g===on?O=i.DEPTH_COMPONENT32F:g===yi&&(O=i.DEPTH_COMPONENT16),O}function y(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ct&&E.minFilter!==Rt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function C(E){const g=E.target;g.removeEventListener("dispose",C),T(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&h.delete(g)}function _(E){const g=E.target;g.removeEventListener("dispose",_),D(g)}function T(E){const g=n.get(E);if(g.__webglInit===void 0)return;const O=E.source,H=f.get(O);if(H){const Z=H[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(E),Object.keys(H).length===0&&f.delete(O)}n.remove(E)}function L(E){const g=n.get(E);i.deleteTexture(g.__webglTexture);const O=E.source,H=f.get(O);delete H[g.__cacheKey],a.memory.textures--}function D(E){const g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let Z=0;Z<g.__webglFramebuffer[H].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[H][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=E.textures;for(let H=0,Z=O.length;H<Z;H++){const ce=n.get(O[H]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(O[H])}n.remove(E)}let B=0;function X(){B=0}function I(){return B}function z(E){B=E}function V(){const E=B;return E>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,E}function q(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function te(E,g){const O=n.get(E);if(E.isVideoTexture&&N(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){const H=E.image;if(H===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(O,E,g);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function j(E,g){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){_e(O,E,g);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function $(E,g){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){_e(O,E,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function ie(E,g){const O=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){ke(O,E,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const Ce={[zs]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[ks]:i.MIRRORED_REPEAT},Te={[Ct]:i.NEAREST,[od]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},rt={[ud]:i.NEVER,[gd]:i.ALWAYS,[hd]:i.LESS,[Ia]:i.LEQUAL,[fd]:i.EQUAL,[Ua]:i.GEQUAL,[pd]:i.GREATER,[md]:i.NOTEQUAL};function Je(E,g){if(g.type===on&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Rt||g.magFilter===Jr||g.magFilter===ir||g.magFilter===Wn||g.minFilter===Rt||g.minFilter===Jr||g.minFilter===ir||g.minFilter===Wn)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Ce[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Ce[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Ce[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Te[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Te[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,rt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ct||g.minFilter!==ir&&g.minFilter!==Wn||g.type===on&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function nt(E,g){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",C));const H=g.source;let Z=f.get(H);Z===void 0&&(Z={},f.set(H,Z));const ce=q(g);if(ce!==E.__cacheKey){Z[ce]===void 0&&(Z[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[ce].usedTimes++;const de=Z[E.__cacheKey];de!==void 0&&(Z[E.__cacheKey].usedTimes--,de.usedTimes===0&&L(g)),E.__cacheKey=ce,E.__webglTexture=Z[ce].texture}return O}function K(E,g,O){return Math.floor(Math.floor(E/O)/g)}function re(E,g,O,H){const ce=E.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,H,g.data);else{ce.sort((Ie,ve)=>Ie.start-ve.start);let de=0;for(let Ie=1;Ie<ce.length;Ie++){const ve=ce[de],ue=ce[Ie],Le=ve.start+ve.count,Oe=K(ue.start,g.width,4),qe=K(ve.start,g.width,4);ue.start<=Le+1&&Oe===qe&&K(ue.start+ue.count-1,g.width,4)===Oe?ve.count=Math.max(ve.count,ue.start+ue.count-ve.start):(++de,ce[de]=ue)}ce.length=de+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ie=0,ve=ce.length;Ie<ve;Ie++){const ue=ce[Ie],Le=Math.floor(ue.start/4),Oe=Math.ceil(ue.count/4),qe=Le%g.width,F=Math.floor(Le/g.width),pe=Oe,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,qe,F,pe,ee,O,H,g.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function _e(E,g,O){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);const Z=nt(E,g),ce=g.source;t.bindTexture(H,E.__webglTexture,i.TEXTURE0+O);const de=n.get(ce);if(ce.version!==de.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const ee=it.getPrimaries(it.workingColorSpace),me=g.colorSpace===In?null:it.getPrimaries(g.colorSpace),be=g.colorSpace===In||ee===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let ne=m(g.image,!1,r.maxTextureSize);ne=st(g,ne);const fe=s.convert(g.format,g.colorSpace),Ie=s.convert(g.type);let ve=S(g.internalFormat,fe,Ie,g.normalized,g.colorSpace,g.isVideoTexture);Je(H,g);let ue;const Le=g.mipmaps,Oe=g.isVideoTexture!==!0,qe=de.__version===void 0||Z===!0,F=ce.dataReady,pe=y(g,ne);if(g.isDepthTexture)ve=A(g.format===Xn,g.type),qe&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,ve,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ve,ne.width,ne.height,0,fe,Ie,null));else if(g.isDataTexture)if(Le.length>0){Oe&&qe&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Le[0].width,Le[0].height);for(let ee=0,me=Le.length;ee<me;ee++)ue=Le[ee],Oe?F&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ue.width,ue.height,fe,Ie,ue.data):t.texImage2D(i.TEXTURE_2D,ee,ve,ue.width,ue.height,0,fe,Ie,ue.data);g.generateMipmaps=!1}else Oe?(qe&&t.texStorage2D(i.TEXTURE_2D,pe,ve,ne.width,ne.height),F&&re(g,ne,fe,Ie)):t.texImage2D(i.TEXTURE_2D,0,ve,ne.width,ne.height,0,fe,Ie,ne.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Oe&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ve,Le[0].width,Le[0].height,ne.depth);for(let ee=0,me=Le.length;ee<me;ee++)if(ue=Le[ee],g.format!==Zt)if(fe!==null)if(Oe){if(F)if(g.layerUpdates.size>0){const be=Fo(ue.width,ue.height,g.format,g.type);for(const k of g.layerUpdates){const ae=ue.data.subarray(k*be/ue.data.BYTES_PER_ELEMENT,(k+1)*be/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,k,ue.width,ue.height,1,fe,ae)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ne.depth,fe,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,ve,ue.width,ue.height,ne.depth,0,ue.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ne.depth,fe,Ie,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,ve,ue.width,ue.height,ne.depth,0,fe,Ie,ue.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Oe&&qe&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Le[0].width,Le[0].height);for(let ee=0,me=Le.length;ee<me;ee++)ue=Le[ee],g.format!==Zt?fe!==null?Oe?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,ve,ue.width,ue.height,0,ue.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?F&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ue.width,ue.height,fe,Ie,ue.data):t.texImage2D(i.TEXTURE_2D,ee,ve,ue.width,ue.height,0,fe,Ie,ue.data)}else if(g.isDataArrayTexture)if(Oe){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ve,ne.width,ne.height,ne.depth),F)if(g.layerUpdates.size>0){const ee=Fo(ne.width,ne.height,g.format,g.type);for(const me of g.layerUpdates){const be=ne.data.subarray(me*ee/ne.data.BYTES_PER_ELEMENT,(me+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,ne.width,ne.height,1,fe,Ie,be)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ie,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,ne.width,ne.height,ne.depth,0,fe,Ie,ne.data);else if(g.isData3DTexture)Oe?(qe&&t.texStorage3D(i.TEXTURE_3D,pe,ve,ne.width,ne.height,ne.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ie,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ve,ne.width,ne.height,ne.depth,0,fe,Ie,ne.data);else if(g.isFramebufferTexture){if(qe)if(Oe)t.texStorage2D(i.TEXTURE_2D,pe,ve,ne.width,ne.height);else{let ee=ne.width,me=ne.height;for(let be=0;be<pe;be++)t.texImage2D(i.TEXTURE_2D,be,ve,ee,me,0,fe,Ie,null),ee>>=1,me>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),ne.parentNode!==ee){ee.appendChild(ne),h.add(g),ee.onpaint=me=>{const be=me.changedElements;for(const k of h)be.includes(k.image)&&(k.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{const be=i.RGBA,k=i.RGBA,ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,be,k,ae,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Oe&&qe){const ee=Ke(Le[0]);t.texStorage2D(i.TEXTURE_2D,pe,ve,ee.width,ee.height)}for(let ee=0,me=Le.length;ee<me;ee++)ue=Le[ee],Oe?F&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,fe,Ie,ue):t.texImage2D(i.TEXTURE_2D,ee,ve,fe,Ie,ue);g.generateMipmaps=!1}else if(Oe){if(qe){const ee=Ke(ne);t.texStorage2D(i.TEXTURE_2D,pe,ve,ee.width,ee.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Ie,ne)}else t.texImage2D(i.TEXTURE_2D,0,ve,fe,Ie,ne);p(g)&&w(H),de.__version=ce.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ke(E,g,O){if(g.image.length!==6)return;const H=nt(E,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const ce=n.get(Z);if(Z.version!==ce.__version||H===!0){t.activeTexture(i.TEXTURE0+O);const de=it.getPrimaries(it.workingColorSpace),J=g.colorSpace===In?null:it.getPrimaries(g.colorSpace),ne=g.colorSpace===In||de===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const fe=g.isCompressedTexture||g.image[0].isCompressedTexture,Ie=g.image[0]&&g.image[0].isDataTexture,ve=[];for(let k=0;k<6;k++)!fe&&!Ie?ve[k]=m(g.image[k],!0,r.maxCubemapSize):ve[k]=Ie?g.image[k].image:g.image[k],ve[k]=st(g,ve[k]);const ue=ve[0],Le=s.convert(g.format,g.colorSpace),Oe=s.convert(g.type),qe=S(g.internalFormat,Le,Oe,g.normalized,g.colorSpace),F=g.isVideoTexture!==!0,pe=ce.__version===void 0||H===!0,ee=Z.dataReady;let me=y(g,ue);Je(i.TEXTURE_CUBE_MAP,g);let be;if(fe){F&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,qe,ue.width,ue.height);for(let k=0;k<6;k++){be=ve[k].mipmaps;for(let ae=0;ae<be.length;ae++){const ge=be[ae];g.format!==Zt?Le!==null?F?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae,0,0,ge.width,ge.height,Le,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae,qe,ge.width,ge.height,0,ge.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae,0,0,ge.width,ge.height,Le,Oe,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae,qe,ge.width,ge.height,0,Le,Oe,ge.data)}}}else{if(be=g.mipmaps,F&&pe){be.length>0&&me++;const k=Ke(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,qe,k.width,k.height)}for(let k=0;k<6;k++)if(Ie){F?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,ve[k].width,ve[k].height,Le,Oe,ve[k].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,qe,ve[k].width,ve[k].height,0,Le,Oe,ve[k].data);for(let ae=0;ae<be.length;ae++){const Qe=be[ae].image[k].image;F?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae+1,0,0,Qe.width,Qe.height,Le,Oe,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae+1,qe,Qe.width,Qe.height,0,Le,Oe,Qe.data)}}else{F?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Le,Oe,ve[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,qe,Le,Oe,ve[k]);for(let ae=0;ae<be.length;ae++){const ge=be[ae];F?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae+1,0,0,Le,Oe,ge.image[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae+1,qe,Le,Oe,ge.image[k])}}}p(g)&&w(i.TEXTURE_CUBE_MAP),ce.__version=Z.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Me(E,g,O,H,Z,ce){const de=s.convert(O.format,O.colorSpace),J=s.convert(O.type),ne=S(O.internalFormat,de,J,O.normalized,O.colorSpace),fe=n.get(g),Ie=n.get(O);if(Ie.__renderTarget=g,!fe.__hasExternalTextures){const ve=Math.max(1,g.width>>ce),ue=Math.max(1,g.height>>ce);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,ce,ne,ve,ue,g.depth,0,de,J,null):t.texImage2D(Z,ce,ne,ve,ue,0,de,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),We(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Z,Ie.__webglTexture,0,He(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Z,Ie.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(E,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){const H=g.depthTexture,Z=H&&H.isDepthTexture?H.type:null,ce=A(g.stencilBuffer,Z),de=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;We(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(g),ce,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(g),ce,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ce,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,E)}else{const H=g.textures;for(let Z=0;Z<H.length;Z++){const ce=H[Z],de=s.convert(ce.format,ce.colorSpace),J=s.convert(ce.type),ne=S(ce.internalFormat,de,J,ce.normalized,ce.colorSpace);We(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(g),ne,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(g),ne,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ne,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(E,g,O){const H=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Je(i.TEXTURE_CUBE_MAP,g.depthTexture);const fe=s.convert(g.depthTexture.format),Ie=s.convert(g.depthTexture.type);let ve;g.depthTexture.format===En?ve=i.DEPTH_COMPONENT24:g.depthTexture.format===Xn&&(ve=i.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ve,g.width,g.height,0,fe,Ie,null)}}else te(g.depthTexture,0);const ce=Z.__webglTexture,de=He(g),J=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ne=g.depthTexture.format===Xn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===En)We(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,J,ce,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,ne,J,ce,0);else if(g.depthTexture.format===Xn)We(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,J,ce,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,ne,J,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(E){const g=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const H=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",Z)};H.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=H}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let H=0;H<6;H++)tt(g.__webglFramebuffer[H],E,H);else{const H=E.texture.mipmaps;H&&H.length>0?tt(g.__webglFramebuffer[0],E,0):tt(g.__webglFramebuffer,E,0)}else if(O){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),Ve(g.__webglDepthbuffer[H],E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ce)}}else{const H=E.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ve(g.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(E,g,O){const H=n.get(E);g!==void 0&&Me(H.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Q(E)}function oe(E){const g=E.texture,O=n.get(E),H=n.get(g);E.addEventListener("dispose",_);const Z=E.textures,ce=E.isWebGLCubeRenderTarget===!0,de=Z.length>1;if(de||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,a.memory.textures++),ce){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let ne=0;ne<g.mipmaps.length;ne++)O.__webglFramebuffer[J][ne]=i.createFramebuffer()}else O.__webglFramebuffer[J]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<g.mipmaps.length;J++)O.__webglFramebuffer[J]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(de)for(let J=0,ne=Z.length;J<ne;J++){const fe=n.get(Z[J]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&We(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const ne=Z[J];O.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[J]);const fe=s.convert(ne.format,ne.colorSpace),Ie=s.convert(ne.type),ve=S(ne.internalFormat,fe,Ie,ne.normalized,ne.colorSpace,E.isXRRenderTarget===!0),ue=He(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,ve,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,O.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Je(i.TEXTURE_CUBE_MAP,g);for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0)for(let ne=0;ne<g.mipmaps.length;ne++)Me(O.__webglFramebuffer[J][ne],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne);else Me(O.__webglFramebuffer[J],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(g)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let J=0,ne=Z.length;J<ne;J++){const fe=Z[J],Ie=n.get(fe);let ve=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ve=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,Ie.__webglTexture),Je(ve,fe),Me(O.__webglFramebuffer,E,fe,i.COLOR_ATTACHMENT0+J,ve,0),p(fe)&&w(ve)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,H.__webglTexture),Je(J,g),g.mipmaps&&g.mipmaps.length>0)for(let ne=0;ne<g.mipmaps.length;ne++)Me(O.__webglFramebuffer[ne],E,g,i.COLOR_ATTACHMENT0,J,ne);else Me(O.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,J,0);p(g)&&w(J),t.unbindTexture()}E.depthBuffer&&Q(E)}function le(E){const g=E.textures;for(let O=0,H=g.length;O<H;O++){const Z=g[O];if(p(Z)){const ce=R(E),de=n.get(Z).__webglTexture;t.bindTexture(ce,de),w(ce),t.unbindTexture()}}}const he=[],ze=[];function Fe(E){if(E.samples>0){if(We(E)===!1){const g=E.textures,O=E.width,H=E.height;let Z=i.COLOR_BUFFER_BIT;const ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(E),J=g.length>1;if(J)for(let fe=0;fe<g.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const ne=E.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let fe=0;fe<g.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);const Ie=n.get(g[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,O,H,0,0,O,H,Z,i.NEAREST),l===!0&&(he.length=0,ze.length=0,he.push(i.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(he.push(ce),ze.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let fe=0;fe<g.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);const Ie=n.get(g[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){const g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function He(E){return Math.min(r.maxSamples,E.samples)}function We(E){const g=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function N(E){const g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function st(E,g){const O=E.colorSpace,H=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Fr&&O!==In&&(it.getTransfer(O)===ut?(H!==Zt||Z!==Gt)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",O)),g}function Ke(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.getTextureUnits=I,this.setTextureUnits=z,this.setTexture2D=te,this.setTexture2DArray=j,this.setTexture3D=$,this.setTextureCube=ie,this.rebindTextures=se,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function A0(i,e){function t(n,r=In){let s;const a=it.getTransfer(r);if(n===Gt)return i.UNSIGNED_BYTE;if(n===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_l)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ml)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xl)return i.BYTE;if(n===vl)return i.SHORT;if(n===yi)return i.UNSIGNED_SHORT;if(n===Ra)return i.INT;if(n===dn)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===Sl)return i.ALPHA;if(n===bl)return i.RGB;if(n===Zt)return i.RGBA;if(n===En)return i.DEPTH_COMPONENT;if(n===Xn)return i.DEPTH_STENCIL;if(n===yl)return i.RED;if(n===Na)return i.RED_INTEGER;if(n===Yn)return i.RG;if(n===La)return i.RG_INTEGER;if(n===Da)return i.RGBA_INTEGER;if(n===Rr||n===Cr||n===Pr||n===Nr)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Rr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Rr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vs||n===Hs||n===Gs||n===Ws)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ws)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xs||n===qs||n===js||n===Ys||n===Zs||n===Ir||n===Js)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xs||n===qs)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===js)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ys)return s.COMPRESSED_R11_EAC;if(n===Zs)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ir)return s.COMPRESSED_RG11_EAC;if(n===Js)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ks||n===Qs||n===$s||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===aa||n===oa||n===la||n===ca||n===da)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ks)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qs)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$s)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ea)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ta)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===na)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ia)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ra)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sa)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===aa)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oa)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===la)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ca)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===da)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ua||n===ha||n===fa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ua)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ha)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pa||n===ma||n===Ur||n===ga)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===pa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ma)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ur)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ga)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const T0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w0=`
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

}`;class R0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ll(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new tn({vertexShader:T0,fragmentShader:w0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C0 extends Kn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,x=null;const b=typeof XRWebGLBinding<"u",m=new R0,p={},w=t.getContextAttributes();let R=null,S=null;const A=[],y=[],C=new xe;let _=null,T=null;const L=new Ht;L.viewport=new xt;const D=new Ht;D.viewport=new xt;const B=[L,D],X=new Fu;let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=A[K];return re===void 0&&(re=new ss,A[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=A[K];return re===void 0&&(re=new ss,A[K]=re),re.getGripSpace()},this.getHand=function(K){let re=A[K];return re===void 0&&(re=new ss,A[K]=re),re.getHandSpace()};function V(K){const re=y.indexOf(K.inputSource);if(re===-1)return;const _e=A[re];_e!==void 0&&(_e.update(K.inputSource,K.frame,c||a),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",te);for(let K=0;K<A.length;K++){const re=y[K];re!==null&&(y[K]=null,A[K].disconnect(re))}I=null,z=null,m.reset();for(const K in p)delete p[K];if(e.setRenderTarget(R),f=null,d=null,h=null,r=null,S=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),T!==null){const K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",q),r.addEventListener("inputsourceschange",te),w.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,ke=null,Me=null;w.depth&&(Me=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=w.stencil?Xn:En,ke=w.stencil?ji:dn);const Ve={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Jt(d.textureWidth,d.textureHeight,{format:Zt,type:Gt,depthTexture:new Ei(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const _e={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Jt(f.framebufferWidth,f.framebufferHeight,{format:Zt,type:Gt,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(K){for(let re=0;re<K.removed.length;re++){const _e=K.removed[re],ke=y.indexOf(_e);ke>=0&&(y[ke]=null,A[ke].disconnect(_e))}for(let re=0;re<K.added.length;re++){const _e=K.added[re];let ke=y.indexOf(_e);if(ke===-1){for(let Ve=0;Ve<A.length;Ve++)if(Ve>=y.length){y.push(_e),ke=Ve;break}else if(y[Ve]===null){y[Ve]=_e,ke=Ve;break}if(ke===-1)break}const Me=A[ke];Me&&Me.connect(_e)}}const j=new P,$=new P;function ie(K,re,_e){j.setFromMatrixPosition(re.matrixWorld),$.setFromMatrixPosition(_e.matrixWorld);const ke=j.distanceTo($),Me=re.projectionMatrix.elements,Ve=_e.projectionMatrix.elements,tt=Me[14]/(Me[10]-1),Q=Me[14]/(Me[10]+1),se=(Me[9]+1)/Me[5],oe=(Me[9]-1)/Me[5],le=(Me[8]-1)/Me[0],he=(Ve[8]+1)/Ve[0],ze=tt*le,Fe=tt*he,He=ke/(-le+he),We=He*-le;if(re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(We),K.translateZ(He),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Me[10]===-1)K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const N=tt+He,st=Q+He,Ke=ze-We,E=Fe+(ke-We),g=se*Q/st*N,O=oe*Q/st*N;K.projectionMatrix.makePerspective(Ke,E,g,O,N,st),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ce(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let re=K.near,_e=K.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),X.near=D.near=L.near=re,X.far=D.far=L.far=_e,(I!==X.near||z!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),I=X.near,z=X.far),X.layers.mask=K.layers.mask|6,L.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;const ke=K.parent,Me=X.cameras;Ce(X,ke);for(let Ve=0;Ve<Me.length;Ve++)Ce(Me[Ve],ke);Me.length===2?ie(X,L,D):X.projectionMatrix.copy(L.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),Te(K,X,ke)};function Te(K,re,_e){_e===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=va*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(K){return p[K]};let rt=null;function Je(K,re){if(u=re.getViewerPose(c||a),x=re,u!==null){const _e=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let ke=!1;_e.length!==X.cameras.length&&(X.cameras.length=0,ke=!0);for(let Q=0;Q<_e.length;Q++){const se=_e[Q];let oe=null;if(f!==null)oe=f.getViewport(se);else{const he=h.getViewSubImage(d,se);oe=he.viewport,Q===0&&(e.setRenderTargetTextures(S,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(S))}let le=B[Q];le===void 0&&(le=new Ht,le.layers.enable(Q),le.viewport=new xt,B[Q]=le),le.matrix.fromArray(se.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(se.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(oe.x,oe.y,oe.width,oe.height),Q===0&&(X.matrix.copy(le.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ke===!0&&X.cameras.push(le)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){h=n.getBinding();const Q=h.getDepthInformation(_e[0]);Q&&Q.isValid&&Q.texture&&m.init(Q,r.renderState)}if(Me&&Me.includes("camera-access")&&b){e.state.unbindTexture(),h=n.getBinding();for(let Q=0;Q<_e.length;Q++){const se=_e[Q].camera;if(se){let oe=p[se];oe||(oe=new Ll,p[se]=oe);const le=h.getCameraImage(se);oe.sourceTexture=le}}}}for(let _e=0;_e<A.length;_e++){const ke=y[_e],Me=A[_e];ke!==null&&Me!==void 0&&Me.update(ke,re,c||a)}rt&&rt(K,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),x=null}const nt=new jl;nt.setAnimationLoop(Je),this.setAnimationLoop=function(K){rt=K},this.dispose=function(){}}}const P0=new gt,ec=new je;ec.set(-1,0,0,0,1,0,0,0,1);function N0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,R,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),x(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),R=w.envMap,S=w.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(P0.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ec),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function L0(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,A){const y=A.program;n.uniformBlockBinding(S,y)}function c(S,A){let y=r[S.id];y===void 0&&(m(S),y=u(S),r[S.id]=y,S.addEventListener("dispose",w));const C=A.program;n.updateUBOMapping(S,C);const _=e.render.frame;s[S.id]!==_&&(d(S),s[S.id]=_)}function u(S){const A=h();S.__bindingPointIndex=A;const y=i.createBuffer(),C=S.__size,_=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,y),y}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const A=r[S.id],y=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let _=0,T=y.length;_<T;_++){const L=y[_];if(Array.isArray(L))for(let D=0,B=L.length;D<B;D++)f(L[D],_,D,C);else f(L,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,A,y,C){if(b(S,A,y,C)===!0){const _=S.__offset,T=S.value;if(Array.isArray(T)){let L=0;for(let D=0;D<T.length;D++){const B=T[D],X=p(B);x(B,S.__data,L),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(T,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,S.__data)}}function x(S,A,y){typeof S=="number"||typeof S=="boolean"?A[0]=S:S.isMatrix3?(A[0]=S.elements[0],A[1]=S.elements[1],A[2]=S.elements[2],A[3]=0,A[4]=S.elements[3],A[5]=S.elements[4],A[6]=S.elements[5],A[7]=0,A[8]=S.elements[6],A[9]=S.elements[7],A[10]=S.elements[8],A[11]=0):ArrayBuffer.isView(S)?A.set(new S.constructor(S.buffer,S.byteOffset,A.length)):S.toArray(A,y)}function b(S,A,y,C){const _=S.value,T=A+"_"+y;if(C[T]===void 0)return typeof _=="number"||typeof _=="boolean"?C[T]=_:ArrayBuffer.isView(_)?C[T]=_.slice():C[T]=_.clone(),!0;{const L=C[T];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return C[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function m(S){const A=S.uniforms;let y=0;const C=16;for(let T=0,L=A.length;T<L;T++){const D=Array.isArray(A[T])?A[T]:[A[T]];for(let B=0,X=D.length;B<X;B++){const I=D[B],z=Array.isArray(I.value)?I.value:[I.value];for(let V=0,q=z.length;V<q;V++){const te=z[V],j=p(te),$=y%C,ie=$%j.boundary,Ce=$+ie;y+=ie,Ce!==0&&C-Ce<j.storage&&(y+=C-Ce),I.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=j.storage}}}const _=y%C;return _>0&&(y+=C-_),S.__size=y,S.__cache={},this}function p(S){const A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(A.boundary=16,A.storage=S.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",S),A}function w(S){const A=S.target;A.removeEventListener("dispose",w);const y=a.indexOf(A.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function R(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:R}}const D0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let sn=null;function I0(){return sn===null&&(sn=new Wd(D0,16,16,Yn,un),sn.name="DFG_LUT",sn.minFilter=Rt,sn.magFilter=Rt,sn.wrapS=Mn,sn.wrapT=Mn,sn.generateMipmaps=!1,sn.needsUpdate=!0),sn}class U0{constructor(e={}){const{canvas:t=_d(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Gt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const b=f,m=new Set([Da,La,Na]),p=new Set([Gt,dn,yi,ji,Ca,Pa]),w=new Uint32Array(4),R=new Int32Array(4),S=new P;let A=null,y=null;const C=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,B=null,X=null,I=null,z=null;this._outputColorSpace=Yt;let V=0,q=0,te=null,j=-1,$=null;const ie=new xt,Ce=new xt;let Te=null;const rt=new Be(0);let Je=0,nt=t.width,K=t.height,re=1,_e=null,ke=null;const Me=new xt(0,0,nt,K),Ve=new xt(0,0,nt,K);let tt=!1;const Q=new Ba;let se=!1,oe=!1;const le=new gt,he=new P,ze=new xt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function We(){return te===null?re:1}let N=n;function st(M,U){return t.getContext(M,U)}let Ke,E,g,O,H,Z,ce,de,J,ne,fe,Ie,ve,ue,Le,Oe,qe,F,pe,ee,me,be,k;try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ta}`),t.addEventListener("webglcontextlost",Qe,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Ge,!1),N===null){const U="webgl2";if(N=st(U,M),N===null)throw st(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(M){throw t.removeEventListener("webglcontextlost",Qe,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),ot("WebGLRenderer: "+M.message),M}function ae(){Ke=new Ip(N),Ke.init(),me=new A0(N,Ke),E=new Ep(N,Ke,e,me),g=new y0(N,Ke),E.reversedDepthBuffer&&d&&g.buffers.depth.setReversed(!0),X=N.createFramebuffer(),I=N.createFramebuffer(),z=N.createFramebuffer(),O=new Op(N),H=new c0,Z=new E0(N,Ke,g,H,E,me,O),ce=new Dp(L),de=new Bu(N),be=new bp(N,de),J=new Up(N,de,O,be),ne=new zp(N,J,de,be,O),F=new Bp(N,E,Z),Le=new Ap(H),fe=new l0(L,ce,Ke,E,be,Le),Ie=new N0(L,H),ve=new u0,ue=new x0(Ke),qe=new Sp(L,ce,g,ne,x,l),Oe=new b0(L,ne,E),k=new L0(N,O,E,g),pe=new yp(N,Ke,O),ee=new Fp(N,Ke,O),O.programs=fe.programs,L.capabilities=E,L.extensions=Ke,L.properties=H,L.renderLists=ve,L.shadowMap=Oe,L.state=g,L.info=O}b!==Gt&&(T=new Vp(b,t.width,t.height,o,r,s));const ge=new C0(L,N);this.xr=ge,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=Ke.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ke.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(M){M!==void 0&&(re=M,this.setSize(nt,K,!1))},this.getSize=function(M){return M.set(nt,K)},this.setSize=function(M,U,Y=!0){if(ge.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=M,K=U,t.width=Math.floor(M*re),t.height=Math.floor(U*re),Y===!0&&(t.style.width=M+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(nt*re,K*re).floor()},this.setDrawingBufferSize=function(M,U,Y){nt=M,K=U,re=Y,t.width=Math.floor(M*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(b===Gt){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ie)},this.getViewport=function(M){return M.copy(Me)},this.setViewport=function(M,U,Y,G){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,U,Y,G),g.viewport(ie.copy(Me).multiplyScalar(re).round())},this.getScissor=function(M){return M.copy(Ve)},this.setScissor=function(M,U,Y,G){M.isVector4?Ve.set(M.x,M.y,M.z,M.w):Ve.set(M,U,Y,G),g.scissor(Ce.copy(Ve).multiplyScalar(re).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){g.setScissorTest(tt=M)},this.setOpaqueSort=function(M){_e=M},this.setTransparentSort=function(M){ke=M},this.getClearColor=function(M){return M.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,Y=!0){let G=0;if(M){let W=!1;if(te!==null){const Ee=te.texture.format;W=m.has(Ee)}if(W){const Ee=te.texture.type,Re=p.has(Ee),ye=qe.getClearColor(),Pe=qe.getClearAlpha(),Ue=ye.r,Ye=ye.g,et=ye.b;Re?(w[0]=Ue,w[1]=Ye,w[2]=et,w[3]=Pe,N.clearBufferuiv(N.COLOR,0,w)):(R[0]=Ue,R[1]=Ye,R[2]=et,R[3]=Pe,N.clearBufferiv(N.COLOR,0,R))}else G|=N.COLOR_BUFFER_BIT}U&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),B=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Qe,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),qe.dispose(),ve.dispose(),ue.dispose(),H.dispose(),ce.dispose(),ne.dispose(),be.dispose(),k.dispose(),fe.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Fn),ge.removeEventListener("sessionend",Ni),fn.stop()};function Qe(M){M.preventDefault(),so("WebGLRenderer: Context Lost."),D=!0}function lt(){so("WebGLRenderer: Context Restored."),D=!1;const M=O.autoReset,U=Oe.enabled,Y=Oe.autoUpdate,G=Oe.needsUpdate,W=Oe.type;ae(),O.autoReset=M,Oe.enabled=U,Oe.autoUpdate=Y,Oe.needsUpdate=G,Oe.type=W}function Ge(M){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ae(M){const U=M.target;U.removeEventListener("dispose",Ae),De(U)}function De(M){Pi(M),H.remove(M)}function Pi(M){const U=H.get(M).programs;U!==void 0&&(U.forEach(function(Y){fe.releaseProgram(Y)}),M.isShaderMaterial&&fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,Y,G,W,Ee){U===null&&(U=Fe);const Re=W.isMesh&&W.matrixWorld.determinantAffine()<0,ye=Lc(M,U,Y,G,W);g.setMaterial(G,Re);let Pe=Y.index,Ue=1;if(G.wireframe===!0){if(Pe=J.getWireframeAttribute(Y),Pe===void 0)return;Ue=2}const Ye=Y.drawRange,et=Y.attributes.position;let Ne=Ye.start*Ue,dt=(Ye.start+Ye.count)*Ue;Ee!==null&&(Ne=Math.max(Ne,Ee.start*Ue),dt=Math.min(dt,(Ee.start+Ee.count)*Ue)),Pe!==null?(Ne=Math.max(Ne,0),dt=Math.min(dt,Pe.count)):et!=null&&(Ne=Math.max(Ne,0),dt=Math.min(dt,et.count));const bt=dt-Ne;if(bt<0||bt===1/0)return;be.setup(W,G,ye,Y,Pe);let mt,ft=pe;if(Pe!==null&&(mt=de.get(Pe),ft=ee,ft.setIndex(mt)),W.isMesh)G.wireframe===!0?(g.setLineWidth(G.wireframeLinewidth*We()),ft.setMode(N.LINES)):ft.setMode(N.TRIANGLES);else if(W.isLine){let Pt=G.linewidth;Pt===void 0&&(Pt=1),g.setLineWidth(Pt*We()),W.isLineSegments?ft.setMode(N.LINES):W.isLineLoop?ft.setMode(N.LINE_LOOP):ft.setMode(N.LINE_STRIP)}else W.isPoints?ft.setMode(N.POINTS):W.isSprite&&ft.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))ft.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Pt=W._multiDrawStarts,we=W._multiDrawCounts,It=W._multiDrawCount,at=Pe?de.get(Pe).bytesPerElement:1,Xt=H.get(G).currentProgram.getUniforms();for(let nn=0;nn<It;nn++)Xt.setValue(N,"_gl_DrawID",nn),ft.render(Pt[nn]/at,we[nn])}else if(W.isInstancedMesh)ft.renderInstances(Ne,bt,W.count);else if(Y.isInstancedBufferGeometry){const Pt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,we=Math.min(Y.instanceCount,Pt);ft.renderInstances(Ne,bt,we)}else ft.render(Ne,bt)};function Qn(M,U,Y,G){B!==null&&M.isNodeMaterial&&B.setObject(G,M),se===!0&&Le.setState(M,Y,!1),M.transparent===!0&&M.side===_n&&M.forceSinglePass===!1?(M.side=zt,M.needsUpdate=!0,nr(M,U,G),M.side=qn,M.needsUpdate=!0,nr(M,U,G),M.side=_n):nr(M,U,G)}this.compile=function(M,U,Y=null){Y===null&&(Y=M),B!==null&&B.renderStart(M,U,Y),y=ue.get(Y),y.init(U),_.push(y),Y.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),M!==Y&&M.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),y.setupLights(),B!==null&&B.updateLights(y.state.lightsArray),oe=this.localClippingEnabled,se=Le.init(this.clippingPlanes,oe),se===!0&&Le.setGlobalState(this.clippingPlanes,U),B!==null&&Oe.render(y.state.shadowsArray,Y,U);const G=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let Re=0;Re<Ee.length;Re++){const ye=Ee[Re];Qn(ye,Y,U,W),G.add(ye)}else Qn(Ee,Y,U,W),G.add(Ee)}),y=_.pop(),B!==null&&B.renderEnd(),G},this.compileAsync=function(M,U,Y=null){const G=this.compile(M,U,Y);return new Promise(W=>{function Ee(){if(G.forEach(function(Re){const Pe=H.get(Re).currentProgram;(Pe===void 0||Pe.isReady())&&G.delete(Re)}),G.size===0){W(M);return}setTimeout(Ee,10)}Ke.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ot=null;function $n(M){Ot&&Ot(M)}function Fn(){fn.stop()}function Ni(){fn.start()}const fn=new jl;fn.setAnimationLoop($n),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(M){Ot=M,ge.setAnimationLoop(M),M===null?fn.stop():fn.start()},ge.addEventListener("sessionstart",Fn),ge.addEventListener("sessionend",Ni),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(M,U);const Y=ge.enabled===!0&&ge.isPresenting===!0,G=T!==null&&(te===null||Y)&&T.begin(L,te);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(U),U=ge.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,U,te),y=ue.get(M,_.length),y.init(U),y.state.textureUnits=Z.getTextureUnits(),_.push(y),le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Q.setFromProjectionMatrix(le,ln,U.reversedDepth),oe=this.localClippingEnabled,se=Le.init(this.clippingPlanes,oe),A=ve.get(M,C.length),A.init(),C.push(A),ge.enabled===!0&&ge.isPresenting===!0){const Re=L.xr.getDepthSensingMesh();Re!==null&&qr(Re,U,-1/0,L.sortObjects)}qr(M,U,0,L.sortObjects),A.finish(),B!==null&&B.updateLights(y.state.lightsArray),L.sortObjects===!0&&A.sort(_e,ke),He=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,He&&qe.addToRenderList(A,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Le.beginShadows();const W=y.state.shadowsArray;if(Oe.render(W,M,U),se===!0&&Le.endShadows(),(G&&T.hasRenderPass())===!1){const Re=A.opaque,ye=A.transmissive;if(y.setupLights(),U.isArrayCamera){const Pe=U.cameras;if(ye.length>0)for(let Ue=0,Ye=Pe.length;Ue<Ye;Ue++){const et=Pe[Ue];Xa(Re,ye,M,et)}He&&qe.render(M);for(let Ue=0,Ye=Pe.length;Ue<Ye;Ue++){const et=Pe[Ue];Wa(A,M,et,et.viewport)}}else ye.length>0&&Xa(Re,ye,M,U),He&&qe.render(M),Wa(A,M,U)}te!==null&&q===0&&(Z.updateMultisampleRenderTarget(te),Z.updateRenderTargetMipmap(te)),G&&T.end(L),M.isScene===!0&&M.onAfterRender(L,M,U),be.resetDefaultState(),j=-1,$=null,_.pop(),_.length>0?(y=_[_.length-1],Z.setTextureUnits(y.state.textureUnits),se===!0&&Le.setGlobalState(L.clippingPlanes,y.state.camera)):y=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,B!==null&&B.renderEnd()};function qr(M,U,Y,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)y.pushLightProbeGrid(M);else if(M.isLight)y.pushLight(M),M.castShadow&&y.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Q)){G&&ze.setFromMatrixPosition(M.matrixWorld).applyMatrix4(le);const Re=ne.update(M),ye=M.material;ye.visible&&A.push(M,Re,ye,Y,ze.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Q))){const Re=ne.update(M),ye=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ze.copy(M.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ze.copy(Re.boundingSphere.center)),ze.applyMatrix4(M.matrixWorld).applyMatrix4(le)),Array.isArray(ye)){const Pe=Re.groups;for(let Ue=0,Ye=Pe.length;Ue<Ye;Ue++){const et=Pe[Ue],Ne=ye[et.materialIndex];Ne&&Ne.visible&&A.push(M,Re,Ne,Y,ze.z,et,U)}}else ye.visible&&A.push(M,Re,ye,Y,ze.z,null,U)}}const Ee=M.children;for(let Re=0,ye=Ee.length;Re<ye;Re++)qr(Ee[Re],U,Y,G)}function Wa(M,U,Y,G){const{opaque:W,transmissive:Ee,transparent:Re}=M;y.setupLightsView(Y),se===!0&&Le.setGlobalState(L.clippingPlanes,Y),G&&g.viewport(ie.copy(G)),W.length>0&&tr(W,U,Y),Ee.length>0&&tr(Ee,U,Y),Re.length>0&&tr(Re,U,Y),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Xa(M,U,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[G.id]===void 0){const Ne=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[G.id]=new Jt(1,1,{generateMipmaps:!0,type:Ne?un:Gt,minFilter:Wn,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}const Ee=y.state.transmissionRenderTarget[G.id],Re=G.viewport||ie;Ee.setSize(Re.z*L.transmissionResolutionScale,Re.w*L.transmissionResolutionScale);const ye=L.getRenderTarget(),Pe=L.getActiveCubeFace(),Ue=L.getActiveMipmapLevel();L.setRenderTarget(Ee),L.getClearColor(rt),Je=L.getClearAlpha(),Je<1&&L.setClearColor(16777215,.5),L.clear(),He&&qe.render(Y);const Ye=L.toneMapping;L.toneMapping=cn;const et=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),y.setupLightsView(G),se===!0&&Le.setGlobalState(L.clippingPlanes,G),tr(M,Y,G),Z.updateMultisampleRenderTarget(Ee),Z.updateRenderTargetMipmap(Ee),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let dt=0,bt=U.length;dt<bt;dt++){const mt=U[dt],{object:ft,geometry:Pt,material:we,group:It}=mt;if(we.side===_n&&ft.layers.test(G.layers)){const at=we.side;we.side=zt,we.needsUpdate=!0,qa(ft,Y,G,Pt,we,It),we.side=at,we.needsUpdate=!0,Ne=!0}}Ne===!0&&(Z.updateMultisampleRenderTarget(Ee),Z.updateRenderTargetMipmap(Ee))}L.setRenderTarget(ye,Pe,Ue),L.setClearColor(rt,Je),et!==void 0&&(G.viewport=et),L.toneMapping=Ye}function tr(M,U,Y){const G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,Ee=M.length;W<Ee;W++){const Re=M[W],{object:ye,geometry:Pe,group:Ue}=Re;let Ye=Re.material;Ye.allowOverride===!0&&G!==null&&(Ye=G),ye.layers.test(Y.layers)&&qa(ye,U,Y,Pe,Ye,Ue)}}function qa(M,U,Y,G,W,Ee){B!==null&&W.isNodeMaterial&&B.setObject(M,W),M.onBeforeRender(L,U,Y,G,W,Ee),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(L,U,Y,G,M,Ee),W.transparent===!0&&W.side===_n&&W.forceSinglePass===!1?(W.side=zt,W.needsUpdate=!0,L.renderBufferDirect(Y,U,G,W,M,Ee),W.side=qn,W.needsUpdate=!0,L.renderBufferDirect(Y,U,G,W,M,Ee),W.side=_n):L.renderBufferDirect(Y,U,G,W,M,Ee),M.onAfterRender(L,U,Y,G,W,Ee)}function nr(M,U,Y){U.isScene!==!0&&(U=Fe);const G=H.get(M),W=y.state.lights,Ee=y.state.shadowsArray,Re=W.state.version,ye=fe.getParameters(M,W.state,Ee,U,Y,y.state.lightProbeGridArray),Pe=fe.getProgramCacheKey(ye);let Ue=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const Ye=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=ce.get(M.envMap||G.environment,Ye),G.envMapRotation=G.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",Ae),Ue=new Map,G.programs=Ue);let et=Ue.get(Pe);if(et!==void 0){if(G.currentProgram===et&&G.lightsStateVersion===Re)return Ya(M,ye),et}else ye.uniforms=fe.getUniforms(M),B!==null&&M.isNodeMaterial&&B.build(M,Y,ye),M.onBeforeCompile(ye,L),et=fe.acquireProgram(ye,Pe),Ue.set(Pe,et),G.uniforms=ye.uniforms;const Ne=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ne.clippingPlanes=Le.uniform),Ya(M,ye),G.needsLights=Ic(M),G.lightsStateVersion=Re,G.needsLights&&(Ne.ambientLightColor.value=W.state.ambient,Ne.lightProbe.value=W.state.probe,Ne.sunLights.value=W.state.sun,Ne.sunLightShadows.value=W.state.sunShadow,Ne.directionalLights.value=W.state.directional,Ne.directionalLightShadows.value=W.state.directionalShadow,Ne.spotLights.value=W.state.spot,Ne.spotLightShadows.value=W.state.spotShadow,Ne.rectAreaLights.value=W.state.rectArea,Ne.ltc_1.value=W.state.rectAreaLTC1,Ne.ltc_2.value=W.state.rectAreaLTC2,Ne.pointLights.value=W.state.point,Ne.pointLightShadows.value=W.state.pointShadow,Ne.hemisphereLights.value=W.state.hemi,Ne.sunShadowMatrix.value=W.state.sunShadowMatrix,Ne.sunShadowCascade.value=W.state.sunShadowCascade,Ne.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ne.spotLightMatrix.value=W.state.spotLightMatrix,Ne.spotLightMap.value=W.state.spotLightMap,Ne.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=y.state.lightProbeGridArray.length>0,G.currentProgram=et,G.uniformsList=null,et}function ja(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Lr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Ya(M,U){const Y=H.get(M);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Nc(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(U.matrixWorld);for(let Y=0,G=M.length;Y<G;Y++){const W=M[Y];if(W.texture!==null&&W.boundingBox.containsPoint(S))return W}return null}function Lc(M,U,Y,G,W){U.isScene!==!0&&(U=Fe),Z.resetTextureUnits();const Ee=U.fog,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,ye=te===null?L.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:it.workingColorSpace,Pe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ue=ce.get(G.envMap||Re,Pe),Ye=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,et=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ne=!!Y.morphAttributes.position,dt=!!Y.morphAttributes.normal,bt=!!Y.morphAttributes.color;let mt=cn;G.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(mt=L.toneMapping);const ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Pt=ft!==void 0?ft.length:0,we=H.get(G),It=y.state.lights;if(se===!0&&(oe===!0||M!==$)){const pt=M===$&&G.id===j;Le.setState(G,M,pt)}let at=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==It.state.version||we.outputColorSpace!==ye||W.isBatchedMesh&&we.batching===!1||!W.isBatchedMesh&&we.batching===!0||W.isBatchedMesh&&we.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&we.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&we.instancing===!1||!W.isInstancedMesh&&we.instancing===!0||W.isSkinnedMesh&&we.skinning===!1||!W.isSkinnedMesh&&we.skinning===!0||W.isInstancedMesh&&we.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&we.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&we.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&we.instancingMorph===!1&&W.morphTexture!==null||we.envMap!==Ue||G.fog===!0&&we.fog!==Ee||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Le.numPlanes||we.numIntersection!==Le.numIntersection)||we.vertexAlphas!==Ye||we.vertexTangents!==et||we.morphTargets!==Ne||we.morphNormals!==dt||we.morphColors!==bt||we.toneMapping!==mt||we.morphTargetsCount!==Pt||!!we.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,we.__version=G.version);let Xt=we.currentProgram;at===!0&&(Xt=nr(G,U,W),B&&G.isNodeMaterial&&B.onUpdateProgram(G,Xt,we));let nn=!1,An=!1,ei=!1;const ht=Xt.getUniforms(),Mt=we.uniforms;if(g.useProgram(Xt.program)&&(nn=!0,An=!0,ei=!0),G.id!==j&&(j=G.id,An=!0),we.needsLights){const pt=Nc(y.state.lightProbeGridArray,W);we.lightProbeGrid!==pt&&(we.lightProbeGrid=pt,An=!0)}if(nn||$!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ht.setValue(N,"projectionMatrix",M.projectionMatrix),ht.setValue(N,"viewMatrix",M.matrixWorldInverse);const wn=ht.map.cameraPosition;wn!==void 0&&wn.setValue(N,he.setFromMatrixPosition(M.matrixWorld)),E.logarithmicDepthBuffer&&ht.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ht.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),$!==M&&($=M,An=!0,ei=!0)}if(we.needsLights&&(It.state.sunShadowMap.length>0&&ht.setValue(N,"sunShadowMap",It.state.sunShadowMap,Z),It.state.directionalShadowMap.length>0&&ht.setValue(N,"directionalShadowMap",It.state.directionalShadowMap,Z),It.state.spotShadowMap.length>0&&ht.setValue(N,"spotShadowMap",It.state.spotShadowMap,Z),It.state.pointShadowMap.length>0&&ht.setValue(N,"pointShadowMap",It.state.pointShadowMap,Z)),W.isSkinnedMesh){ht.setOptional(N,W,"bindMatrix"),ht.setOptional(N,W,"bindMatrixInverse");const pt=W.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),ht.setValue(N,"boneTexture",pt.boneTexture,Z))}W.isBatchedMesh&&(ht.setOptional(N,W,"batchingTexture"),ht.setValue(N,"batchingTexture",W._matricesTexture,Z),ht.setOptional(N,W,"batchingIdTexture"),ht.setValue(N,"batchingIdTexture",W._indirectTexture,Z),ht.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&ht.setValue(N,"batchingColorTexture",W._colorsTexture,Z));const Tn=Y.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&F.update(W,Y,Xt),(An||we.receiveShadow!==W.receiveShadow)&&(we.receiveShadow=W.receiveShadow,ht.setValue(N,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Mt.envMapIntensity.value=U.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=I0()),An){if(ht.setValue(N,"toneMappingExposure",L.toneMappingExposure),we.needsLights&&Dc(Mt,ei),Ee&&G.fog===!0&&Ie.refreshFogUniforms(Mt,Ee),Ie.refreshMaterialUniforms(Mt,G,re,K,y.state.transmissionRenderTarget[M.id]),we.needsLights&&we.lightProbeGrid){const pt=we.lightProbeGrid;Mt.probesSH.value=pt.texture,Mt.probesMin.value.copy(pt.boundingBox.min),Mt.probesMax.value.copy(pt.boundingBox.max),Mt.probesResolution.value.copy(pt.resolution)}Lr.upload(N,ja(we),Mt,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Lr.upload(N,ja(we),Mt,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ht.setValue(N,"center",W.center),ht.setValue(N,"modelViewMatrix",W.modelViewMatrix),ht.setValue(N,"normalMatrix",W.normalMatrix),ht.setValue(N,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){const pt=G.uniformsGroups;for(let wn=0,ti=pt.length;wn<ti;wn++){const Ja=pt[wn];k.update(Ja,Xt),k.bind(Ja,Xt)}}return Xt}function Dc(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Ic(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(M,U,Y){const G=H.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=U,H.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const Y=H.get(M);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,Y=0){te=M,V=U,q=Y;let G=null,W=!1,Ee=!1;if(M){const ye=H.get(M);if(ye.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(N.FRAMEBUFFER,ye.__webglFramebuffer),ie.copy(M.viewport),Ce.copy(M.scissor),Te=M.scissorTest,g.viewport(ie),g.scissor(Ce),g.setScissorTest(Te),j=-1;return}else if(ye.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(ye.__hasExternalTextures)Z.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ye=M.depthTexture;if(ye.__boundDepthTexture!==Ye){if(Ye!==null&&H.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}const Pe=M.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Ee=!0);const Ue=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?G=Ue[U][Y]:G=Ue[U],W=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?G=H.get(M).__webglMultisampledFramebuffer:Array.isArray(Ue)?G=Ue[Y]:G=Ue,ie.copy(M.viewport),Ce.copy(M.scissor),Te=M.scissorTest}else ie.copy(Me).multiplyScalar(re).floor(),Ce.copy(Ve).multiplyScalar(re).floor(),Te=tt;if(Y!==0&&(G=X),g.bindFramebuffer(N.FRAMEBUFFER,G)&&g.drawBuffers(M,G),g.viewport(ie),g.scissor(Ce),g.setScissorTest(Te),W){const ye=H.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,Y)}else if(Ee){const ye=U;for(let Pe=0;Pe<M.textures.length;Pe++){const Ue=H.get(M.textures[Pe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,Y,ye)}}else if(M!==null&&Y!==0){const ye=H.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ye.__webglTexture,Y)}j=-1};function Za(M){const U=H.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=E.textureFormatReadable(M.format),U.__typeReadable=E.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,Y,G,W,Ee,Re,ye=0){if(!(M&&M.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){g.bindFramebuffer(N.FRAMEBUFFER,Pe);try{const Ue=M.textures[ye],Ye=Ue.format,et=Ue.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ye);const Ne=Za(Ue);if(Ne.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&Y>=0&&Y<=M.height-W&&N.readPixels(U,Y,G,W,me.convert(Ye),me.convert(et),Ee)}finally{const Ue=te!==null?H.get(te).__webglFramebuffer:null;g.bindFramebuffer(N.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(M,U,Y,G,W,Ee,Re,ye=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe)if(U>=0&&U<=M.width-G&&Y>=0&&Y<=M.height-W){g.bindFramebuffer(N.FRAMEBUFFER,Pe);const Ue=M.textures[ye],Ye=Ue.format,et=Ue.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ye);const Ne=Za(Ue);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,dt),N.bufferData(N.PIXEL_PACK_BUFFER,Ee.byteLength,N.STREAM_READ),N.readPixels(U,Y,G,W,me.convert(Ye),me.convert(et),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const bt=te!==null?H.get(te).__webglFramebuffer:null;g.bindFramebuffer(N.FRAMEBUFFER,bt);const mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Md(N,mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,dt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ee),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(dt),N.deleteSync(mt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,Y=0){const G=Math.pow(2,-Y),W=Math.floor(M.image.width*G),Ee=Math.floor(M.image.height*G),Re=U!==null?U.x:0,ye=U!==null?U.y:0;Z.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,Re,ye,W,Ee),g.unbindTexture()},this.copyTextureToTexture=function(M,U,Y=null,G=null,W=0,Ee=0){let Re,ye,Pe,Ue,Ye,et,Ne,dt,bt;const mt=M.isCompressedTexture?M.mipmaps[Ee]:M.image;if(Y!==null)Re=Y.max.x-Y.min.x,ye=Y.max.y-Y.min.y,Pe=Y.isBox3?Y.max.z-Y.min.z:1,Ue=Y.min.x,Ye=Y.min.y,et=Y.isBox3?Y.min.z:0;else{const Mt=Math.pow(2,-W);Re=Math.floor(mt.width*Mt),ye=Math.floor(mt.height*Mt),M.isDataArrayTexture?Pe=mt.depth:M.isData3DTexture?Pe=Math.floor(mt.depth*Mt):Pe=1,Ue=0,Ye=0,et=0}G!==null?(Ne=G.x,dt=G.y,bt=G.z):(Ne=0,dt=0,bt=0);const ft=me.convert(U.format),Pt=me.convert(U.type);let we;U.isData3DTexture?(Z.setTexture3D(U,0),we=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Z.setTexture2DArray(U,0),we=N.TEXTURE_2D_ARRAY):(Z.setTexture2D(U,0),we=N.TEXTURE_2D),g.activeTexture(N.TEXTURE0),g.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const It=g.getParameter(N.UNPACK_ROW_LENGTH),at=g.getParameter(N.UNPACK_IMAGE_HEIGHT),Xt=g.getParameter(N.UNPACK_SKIP_PIXELS),nn=g.getParameter(N.UNPACK_SKIP_ROWS),An=g.getParameter(N.UNPACK_SKIP_IMAGES);g.pixelStorei(N.UNPACK_ROW_LENGTH,mt.width),g.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt.height),g.pixelStorei(N.UNPACK_SKIP_PIXELS,Ue),g.pixelStorei(N.UNPACK_SKIP_ROWS,Ye),g.pixelStorei(N.UNPACK_SKIP_IMAGES,et);const ei=M.isDataArrayTexture||M.isData3DTexture,ht=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const Mt=H.get(M),Tn=H.get(U),pt=H.get(Mt.__renderTarget),wn=H.get(Tn.__renderTarget);g.bindFramebuffer(N.READ_FRAMEBUFFER,pt.__webglFramebuffer),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let ti=0;ti<Pe;ti++)ei&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(M).__webglTexture,W,et+ti),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(U).__webglTexture,Ee,bt+ti)),N.blitFramebuffer(Ue,Ye,Re,ye,Ne,dt,Re,ye,N.DEPTH_BUFFER_BIT,N.NEAREST);g.bindFramebuffer(N.READ_FRAMEBUFFER,null),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||H.has(M)){const Mt=H.get(M),Tn=H.get(U);g.bindFramebuffer(N.READ_FRAMEBUFFER,I),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let pt=0;pt<Pe;pt++)ei?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.__webglTexture,W,et+pt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Mt.__webglTexture,W),ht?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tn.__webglTexture,Ee,bt+pt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Tn.__webglTexture,Ee),W!==0?N.blitFramebuffer(Ue,Ye,Re,ye,Ne,dt,Re,ye,N.COLOR_BUFFER_BIT,N.NEAREST):ht?N.copyTexSubImage3D(we,Ee,Ne,dt,bt+pt,Ue,Ye,Re,ye):N.copyTexSubImage2D(we,Ee,Ne,dt,Ue,Ye,Re,ye);g.bindFramebuffer(N.READ_FRAMEBUFFER,null),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ht?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(we,Ee,Ne,dt,bt,Re,ye,Pe,ft,Pt,mt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(we,Ee,Ne,dt,bt,Re,ye,Pe,ft,mt.data):N.texSubImage3D(we,Ee,Ne,dt,bt,Re,ye,Pe,ft,Pt,mt):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ee,Ne,dt,Re,ye,ft,Pt,mt.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ee,Ne,dt,mt.width,mt.height,ft,mt.data):N.texSubImage2D(N.TEXTURE_2D,Ee,Ne,dt,Re,ye,ft,Pt,mt);g.pixelStorei(N.UNPACK_ROW_LENGTH,It),g.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at),g.pixelStorei(N.UNPACK_SKIP_PIXELS,Xt),g.pixelStorei(N.UNPACK_SKIP_ROWS,nn),g.pixelStorei(N.UNPACK_SKIP_IMAGES,An),Ee===0&&U.generateMipmaps&&N.generateMipmap(we),g.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){V=0,q=0,te=null,g.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const F0=({focalLength:i,aperture:e=22,dofBlurCaninesPx:t,motionBlurPx:n,noiseOpacity:r,ambientLightContamination:s,hasFlashCurtainArtifact:a,evDiff:o,showFocusPeaking:l,showGrid:c,subjectMode:u,flashMode:h="twin",whiteBalance:d="flash"})=>{const f=ct.useRef(null),x=ct.useRef(null),b=ct.useRef(null),m=ct.useRef(null),p=ct.useRef(null),w=ct.useRef(null),R=ct.useRef(null),S=ct.useRef(null),A=ct.useRef(null),y=ct.useRef(null),C=ct.useRef(null),_=ct.useRef(null),T=ct.useRef(0),L=ct.useRef(Date.now()),D=ct.useRef({x:0,y:0,targetX:0,targetY:0}),B=V=>{switch(V){case"flash":return new Be(16777215);case"custom":return new Be(16579839);case"cloudy":return new Be(16770756);case"tungsten":return new Be(13033471);default:return new Be(16777215)}},X=V=>{switch(V){case 60:return{fov:38,z:5.8};case 85:return{fov:27,z:7.4};case 100:return{fov:23,z:8.8};case 180:return{fov:14,z:14.5};default:return{fov:23,z:8.8}}},I=V=>{switch(V){case 2.8:return 2.8;case 4:return 1.9;case 5.6:return 1.2;case 8:return .65;case 11:return .28;case 16:return .1;case 22:case 32:return 0;default:return 0}};ct.useEffect(()=>{const V=f.current;if(!V)return;const q=V.clientWidth||640,te=V.clientHeight||360,j=new xo;j.background=new Be(395018),x.current=j;const $=X(i),ie=new Ht($.fov,q/te,.1,50);ie.position.set(0,-.2,$.z),m.current=ie;const Ce=new U0({antialias:!0,alpha:!1,powerPreference:"high-performance"});Ce.setSize(q,te),Ce.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ce.toneMapping=wa,Ce.toneMappingExposure=1,V.innerHTML="",V.appendChild(Ce.domElement),b.current=Ce;const Te=new Ei(q,te);Te.type=yi;const rt=new Jt(q,te,{minFilter:Rt,magFilter:Rt,format:Zt,depthTexture:Te});p.current=rt;const Je=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,nt=`
      uniform sampler2D tColor;
      uniform sampler2D tDepth;
      uniform float uFocalDepth;
      uniform float uApertureBlur;
      uniform vec2 uResolution;
      uniform float uNear;
      uniform float uFar;
      varying vec2 vUv;

      float linearizeDepth(float z_b) {
        float z_n = 2.0 * z_b - 1.0;
        return 2.0 * uNear * uFar / (uFar + uNear - z_n * (uFar - uNear));
      }

      void main() {
        float rawDepth = texture2D(tDepth, vUv).r;
        
        // If background (depth near 1.0), it's far oral depth
        float linDepth = rawDepth >= 0.9999 ? uFar * 0.8 : linearizeDepth(rawDepth);
        
        // Distance from focal plane (upper central incisors are at uFocalDepth)
        float dist = abs(linDepth - uFocalDepth);
        
        // Circle of confusion radius in pixels
        float coc = clamp(dist * uApertureBlur, 0.0, 14.0);

        if (coc < 0.25) {
          gl_FragColor = texture2D(tColor, vUv);
          return;
        }

        // 12-tap Poisson disc blur for creamy macro bokeh
        vec2 texel = 1.0 / uResolution;
        vec4 sum = vec4(0.0);
        
        vec2 offsets[12];
        offsets[0] = vec2(-0.32, -0.40);
        offsets[1] = vec2(-0.84, -0.07);
        offsets[2] = vec2(-0.69,  0.45);
        offsets[3] = vec2(-0.20,  0.62);
        offsets[4] = vec2( 0.96, -0.19);
        offsets[5] = vec2( 0.47, -0.48);
        offsets[6] = vec2( 0.51,  0.76);
        offsets[7] = vec2( 0.18, -0.89);
        offsets[8] = vec2( 0.50,  0.06);
        offsets[9] = vec2( 0.89,  0.41);
        offsets[10] = vec2(-0.32, -0.93);
        offsets[11] = vec2(-0.79, -0.59);

        for (int i = 0; i < 12; i++) {
          sum += texture2D(tColor, vUv + offsets[i] * coc * texel);
        }
        
        gl_FragColor = sum * 0.083333; // 1.0 / 12.0
      }
    `,K=new tn({vertexShader:Je,fragmentShader:nt,uniforms:{tColor:{value:null},tDepth:{value:null},uFocalDepth:{value:$.z},uApertureBlur:{value:I(e)},uResolution:{value:new xe(q,te)},uNear:{value:.1},uFar:{value:50}}});S.current=K;const re=new Gr(-1,1,1,-1,0,1),_e=new St(new er(2,2),K),ke=new xo;ke.add(_e),w.current=ke,R.current=re;const Me=new jt;j.add(Me),A.current=Me;const Ve=(k,ae,ge,Qe,lt)=>{const Ge=new Bl,Ae=ae*.5,De=ge*.5;k==="central"?(Ge.moveTo(-Ae*.75,De*.9),Ge.quadraticCurveTo(0,De*1.05,Ae*.75,De*.9),Ge.quadraticCurveTo(Ae*1.04,-De*.55,Ae*.96,-De*.85),Ge.quadraticCurveTo(Ae*.94,-De*1,Ae*.75,-De*1),Ge.lineTo(-Ae*.65,-De*1),Ge.quadraticCurveTo(-Ae*1.05,-De*.98,-Ae*.98,-De*.75),Ge.quadraticCurveTo(-Ae*1.02,.1,-Ae*.75,De*.9)):k==="lateral"?(Ge.moveTo(-Ae*.7,De*.9),Ge.quadraticCurveTo(0,De*1.05,Ae*.7,De*.9),Ge.quadraticCurveTo(Ae*1.02,-De*.45,Ae*.9,-De*.85),Ge.quadraticCurveTo(Ae*.85,-De*1,Ae*.65,-De*1),Ge.lineTo(-Ae*.5,-De*1),Ge.quadraticCurveTo(-Ae*1.05,-De*.9,-Ae*.9,-De*.6),Ge.quadraticCurveTo(-Ae*.98,.15,-Ae*.7,De*.9)):k==="canine"?(Ge.moveTo(-Ae*.65,De*.9),Ge.quadraticCurveTo(0,De*1.05,Ae*.65,De*.9),Ge.quadraticCurveTo(Ae*1.05,-De*.25,Ae*.85,-De*.7),Ge.quadraticCurveTo(Ae*.65,-De*.9,0,-De*1.08),Ge.quadraticCurveTo(-Ae*.65,-De*.9,-Ae*.85,-De*.7),Ge.quadraticCurveTo(-Ae*1.05,-De*.25,-Ae*.65,De*.9)):k==="lower_central"||k==="lower_lateral"?(Ge.moveTo(-Ae*.8,-De*.9),Ge.quadraticCurveTo(0,-De*1.05,Ae*.8,-De*.9),Ge.quadraticCurveTo(Ae*.98,.4,Ae*.9,.88),Ge.quadraticCurveTo(Ae*.85,De*1,Ae*.65,De*1),Ge.lineTo(-Ae*.65,De*1),Ge.quadraticCurveTo(-Ae*.85,De*1,-Ae*.9,.88),Ge.quadraticCurveTo(-Ae*.98,.4,-Ae*.8,-De*.9)):k==="lower_canine"?(Ge.moveTo(-Ae*.7,-De*.9),Ge.quadraticCurveTo(0,-De*1.05,Ae*.7,-De*.9),Ge.quadraticCurveTo(Ae*1.02,.2,Ae*.8,.75),Ge.quadraticCurveTo(Ae*.5,De*.92,0,De*1.08),Ge.quadraticCurveTo(-Ae*.5,De*.92,-Ae*.8,.75),Ge.quadraticCurveTo(-Ae*1.02,.2,-Ae*.7,-De*.9)):(Ge.moveTo(-Ae*.75,De*.85),Ge.quadraticCurveTo(0,De*1,Ae*.75,De*.85),Ge.quadraticCurveTo(Ae*1.05,-De*.3,Ae*.85,-De*.8),Ge.quadraticCurveTo(0,-De*1.02,-Ae*.85,-De*.8),Ge.quadraticCurveTo(-Ae*1.05,-De*.3,-Ae*.75,De*.85));const Pi=new Ha(Ge,{depth:Qe*.5,bevelEnabled:!0,bevelSegments:8,bevelSize:Qe*.24,bevelThickness:Qe*.28,bevelOffset:-.01}),Qn=Pi.attributes.position,Ot=new P;for(let $n=0;$n<Qn.count;$n++){if(Ot.fromBufferAttribute(Qn,$n),Ot.z>0){const Fn=Ot.x/Ae,Ni=Ot.y/De,fn=Math.max(0,1-(Fn*Fn+Ni*Ni)*.5)*.08;Ot.z+=fn,k==="central"||k==="lateral"?Ot.z+=Math.cos(Fn*Math.PI*1.5)*.02:k==="canine"&&(Ot.z+=Math.max(0,1-Math.abs(Fn))*.06)}Qn.setXYZ($n,Ot.x,Ot.y,Ot.z)}return Pi.computeVertexNormals(),new St(Pi,lt)},tt=new Po({color:new Be(16513524),roughness:.13,metalness:.01,clearcoat:.95,clearcoatRoughness:.05,transmission:.22,ior:1.62,reflectivity:.6,specularColor:new Be(16777215)}),Q=tt.clone();Q.color=new Be(16182214);const se=tt.clone();se.color=new Be(16316142);const oe=new xi({color:new Be(13200764),roughness:.44,metalness:.02}),le=new jt;Me.add(le);const he=[{id:"11",type:"central",x:-.46,y:.38,z:0,rotY:.03,rotZ:.015,w:.92,h:1.25,d:.36,mat:tt},{id:"21",type:"central",x:.46,y:.38,z:0,rotY:-.03,rotZ:-.015,w:.92,h:1.25,d:.36,mat:tt},{id:"12",type:"lateral",x:-1.33,y:.44,z:-.22,rotY:.18,rotZ:.03,w:.74,h:1.08,d:.32,mat:tt},{id:"22",type:"lateral",x:1.33,y:.44,z:-.22,rotY:-.18,rotZ:-.03,w:.74,h:1.08,d:.32,mat:tt},{id:"13",type:"canine",x:-2.12,y:.38,z:-.68,rotY:.42,rotZ:.04,w:.82,h:1.28,d:.42,mat:Q},{id:"23",type:"canine",x:2.12,y:.38,z:-.68,rotY:-.42,rotZ:-.04,w:.82,h:1.28,d:.42,mat:Q},{id:"14",type:"premolar",x:-2.82,y:.5,z:-1.38,rotY:.65,rotZ:.02,w:.75,h:.96,d:.52,mat:Q},{id:"24",type:"premolar",x:2.82,y:.5,z:-1.38,rotY:-.65,rotZ:-.02,w:.75,h:.96,d:.52,mat:Q},{id:"15",type:"premolar",x:-3.38,y:.56,z:-2.25,rotY:.82,rotZ:.01,w:.72,h:.88,d:.54,mat:Q},{id:"25",type:"premolar",x:3.38,y:.56,z:-2.25,rotY:-.82,rotZ:-.01,w:.72,h:.88,d:.54,mat:Q}];he.forEach(k=>{const ae=Ve(k.type,k.w,k.h,k.d,k.mat);ae.position.set(k.x,k.y,k.z),ae.rotation.y=k.rotY,ae.rotation.z=k.rotZ,ae.name=`upper-${k.id}`,le.add(ae)});const ze=new gi([new P(-3.5,.95,-2.4),new P(-2.8,.98,-1.4),new P(-2.1,1.02,-.7),new P(-1.3,1.05,-.25),new P(-.5,1.12,.02),new P(0,.92,.05),new P(.5,1.12,.02),new P(1.3,1.05,-.25),new P(2.1,1.02,-.7),new P(2.8,.98,-1.4),new P(3.5,.95,-2.4)]),Fe=new St(new Gn(ze,40,.38,10,!1),oe);Fe.position.y=.16,le.add(Fe);const He=new jt;Me.add(He);const We=[{id:"41",type:"lower_central",x:-.29,y:-.85,z:-.16,rotY:.02,rotZ:-.015,w:.58,h:1.02,d:.32,mat:se},{id:"31",type:"lower_central",x:.29,y:-.85,z:-.16,rotY:-.02,rotZ:.015,w:.58,h:1.02,d:.32,mat:se},{id:"42",type:"lower_lateral",x:-.88,y:-.82,z:-.32,rotY:.15,rotZ:-.02,w:.64,h:1.05,d:.32,mat:se},{id:"32",type:"lower_lateral",x:.88,y:-.82,z:-.32,rotY:-.15,rotZ:.02,w:.64,h:1.05,d:.32,mat:se},{id:"43",type:"lower_canine",x:-1.55,y:-.78,z:-.65,rotY:.36,rotZ:-.03,w:.74,h:1.18,d:.38,mat:Q},{id:"33",type:"lower_canine",x:1.55,y:-.78,z:-.65,rotY:-.36,rotZ:.03,w:.74,h:1.18,d:.38,mat:Q},{id:"44",type:"premolar",x:-2.25,y:-.72,z:-1.25,rotY:.58,rotZ:-.02,w:.7,h:.92,d:.48,mat:Q},{id:"34",type:"premolar",x:2.25,y:-.72,z:-1.25,rotY:-.58,rotZ:.02,w:.7,h:.92,d:.48,mat:Q}];We.forEach(k=>{const ae=Ve(k.type,k.w,k.h,k.d,k.mat);ae.position.set(k.x,k.y,k.z),ae.rotation.y=k.rotY,ae.rotation.z=k.rotZ,ae.name=`lower-${k.id}`,He.add(ae)});const N=new gi([new P(-2.8,-1.28,-1.4),new P(-2.1,-1.34,-.7),new P(-1.3,-1.38,-.28),new P(-.5,-1.42,-.12),new P(0,-1.3,-.1),new P(.5,-1.42,-.12),new P(1.3,-1.38,-.28),new P(2.1,-1.34,-.7),new P(2.8,-1.28,-1.4)]),st=new St(new Gn(N,32,.34,10,!1),oe);st.position.y=-.12,He.add(st);const Ke=new gi([new P(-3.2,-1.45,.6),new P(-1.8,-1.75,.8),new P(0,-1.85,.85),new P(1.8,-1.75,.8),new P(3.2,-1.45,.6)]),E=new xi({color:new Be(12079202),roughness:.38,metalness:.05}),g=new St(new Gn(Ke,24,.28,10,!1),E);Me.add(g);const O=new jt;Me.add(O),C.current=O;const H=new xi({color:new Be(15594231),metalness:.95,roughness:.15}),Z=new xi({color:new Be(165063),roughness:.28}),ce=[];if(he.slice(0,6).forEach(k=>{const ae=new jt;ae.add(new St(new Zn(.28,.24,.1),H));const ge=new St(new kr(.1,.03,8,16),Z);ge.position.z=.06,ae.add(ge),ae.position.set(k.x,k.y-.02,k.z+k.d*.46),ae.rotation.y=k.rotY,O.add(ae),ce.push(new P(ae.position.x,ae.position.y,ae.position.z+.06))}),ce.length>=2){ce.sort((ae,ge)=>ae.x-ge.x);const k=new gi(ce);O.add(new St(new Gn(k,32,.02,8,!1),H))}const de=[];if(We.slice(0,6).forEach(k=>{const ae=new jt;ae.add(new St(new Zn(.24,.22,.09),H));const ge=new St(new kr(.09,.028,8,16),Z);ge.position.z=.05,ae.add(ge),ae.position.set(k.x,k.y+.02,k.z+k.d*.44),ae.rotation.y=k.rotY,O.add(ae),de.push(new P(ae.position.x,ae.position.y,ae.position.z+.05))}),de.length>=2){de.sort((ae,ge)=>ae.x-ge.x);const k=new gi(de);O.add(new St(new Gn(k,32,.018,8,!1),H))}const J=new jt;Me.add(J),_.current=J;const ne=new Po({color:new Be(16115659),roughness:.16,clearcoat:.92,transmission:.16,ior:1.6}),fe=Ve("central",.9,1.2,.35,ne);fe.position.set(1.48,-.05,.25),fe.rotation.y=-.18,J.add(fe);const Ie=new xi({color:new Be(14409960),metalness:.92,roughness:.2}),ve=new St(new za(.07,.07,1.9,12),Ie);ve.position.set(1.48,-1.15,.25),J.add(ve);const ue=new jt;j.add(ue),y.current=ue;const Le=new Iu(16777215,.25);Le.name="ambient",ue.add(Le);const Oe=new Uo(16777215,2);Oe.name="flashLeft",Oe.position.set(-4.5,1.2,4),ue.add(Oe);const qe=new Uo(16777215,2);qe.name="flashRight",qe.position.set(4.5,1.2,4),ue.add(qe);const F=new Lu(16777215,.6,14);F.name="centerFill",F.position.set(0,0,4.8),ue.add(F);const pe=k=>{const ae=V.getBoundingClientRect(),ge=(k.clientX-ae.left)/ae.width*2-1,Qe=-((k.clientY-ae.top)/ae.height*2-1);D.current.targetX=ge*.12,D.current.targetY=Qe*.08},ee=()=>{D.current.targetX=0,D.current.targetY=0};V.addEventListener("mousemove",pe),V.addEventListener("mouseleave",ee);const me=new ResizeObserver(k=>{for(const ae of k){const ge=ae.contentRect.width,Qe=ae.contentRect.height;ge>0&&Qe>0&&m.current&&b.current&&p.current&&S.current&&(m.current.aspect=ge/Qe,m.current.updateProjectionMatrix(),b.current.setSize(ge,Qe),p.current.setSize(ge,Qe),S.current.uniforms.uResolution.value.set(ge,Qe))}});me.observe(V);const be=()=>{T.current=requestAnimationFrame(be);const k=(Date.now()-L.current)*.001;if(D.current.x+=(D.current.targetX-D.current.x)*.08,D.current.y+=(D.current.targetY-D.current.y)*.08,A.current){const ae=Math.sin(k*1.3)*.01;A.current.rotation.y=D.current.x,A.current.rotation.x=-D.current.y+ae,A.current.position.y=ae*.4}b.current&&x.current&&m.current&&p.current&&w.current&&R.current&&S.current&&(b.current.setRenderTarget(p.current),b.current.render(x.current,m.current),S.current.uniforms.tColor.value=p.current.texture,S.current.uniforms.tDepth.value=p.current.depthTexture,S.current.uniforms.uFocalDepth.value=m.current.position.z,b.current.setRenderTarget(null),b.current.render(w.current,R.current))};return be(),()=>{cancelAnimationFrame(T.current),me.disconnect(),V.removeEventListener("mousemove",pe),V.removeEventListener("mouseleave",ee),p.current&&p.current.dispose(),b.current&&b.current.domElement&&(V.removeChild(b.current.domElement),b.current.dispose())}},[]),ct.useEffect(()=>{if(m.current){const V=X(i);m.current.fov=V.fov,m.current.position.z=V.z,m.current.updateProjectionMatrix()}if(S.current&&m.current&&(S.current.uniforms.uApertureBlur.value=I(e),S.current.uniforms.uFocalDepth.value=m.current.position.z),C.current&&(C.current.visible=u==="ortho"),_.current&&(_.current.visible=u==="vita"),y.current&&b.current){const V=B(d),q=y.current.getObjectByName("flashLeft"),te=y.current.getObjectByName("flashRight"),j=y.current.getObjectByName("centerFill"),$=y.current.getObjectByName("ambient"),ie=Math.max(.15,Math.min(2.5,1+o*.28));if(b.current.toneMappingExposure=ie,$&&($.color=V,$.intensity=h==="off"?.65:.22),q&&te&&j)switch(q.color=V,te.color=V,j.color=V,h){case"twin":q.intensity=2.2,q.position.set(-4.5,1,4),te.intensity=2.2,te.position.set(4.5,1,4),j.intensity=.4;break;case"studio":q.intensity=1.9,q.position.set(-3.2,2.8,4.4),te.intensity=1.9,te.position.set(3.2,2.8,4.4),j.intensity=.8;break;case"ring":q.intensity=1,q.position.set(-1.2,0,4.2),te.intensity=1,te.position.set(1.2,0,4.2),j.intensity=2;break;case"off":q.intensity=.15,q.color=new Be(16764064),te.intensity=.15,te.color=new Be(16764064),j.intensity=.1;break}}},[i,e,h,d,u,o]);const z=[n>1?`blur(${Math.min(n*.8,8)}px)`:"",o!==0?`contrast(${Math.max(.7,1+o*.08)})`:""].filter(Boolean).join(" ");return v.jsxs("div",{className:"relative w-full h-full min-h-[280px] overflow-hidden flex items-center justify-center bg-[#06070a] select-none",children:[v.jsx("div",{ref:f,className:"w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing transition-filter duration-300",style:{filter:z||void 0}}),a&&v.jsx("div",{className:"absolute inset-x-0 bottom-0 top-[52%] bg-black/98 z-30 pointer-events-none flex items-center justify-center border-t-4 border-rose-500/80",children:v.jsx("div",{className:"bg-rose-950/90 text-rose-200 border border-rose-500/50 px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-2 shadow-lg",children:v.jsx("span",{children:"⚠️ Sombra da 2ª Cortina do Obturador (Velocidade > Sincronismo X-Sync)"})})}),s>.1&&v.jsx("div",{className:"absolute inset-0 pointer-events-none z-10 mix-blend-color",style:{backgroundColor:"#f59e0b",opacity:Math.min(.45,s*.5)}}),r>.05&&v.jsx("div",{className:"absolute inset-0 pointer-events-none z-20 mix-blend-screen opacity-60",style:{backgroundImage:`radial-gradient(circle, rgba(255,255,255,${r*.4}) 1px, transparent 1px)`,backgroundSize:"4px 4px"}}),l&&v.jsx("div",{className:"absolute inset-0 pointer-events-none z-20 flex items-center justify-center",children:v.jsx("div",{className:"w-28 h-24 border-2 border-emerald-400/80 rounded-lg shadow-[0_0_12px_rgba(34,197,94,0.6)] flex items-center justify-center",children:v.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-400"})})}),c&&v.jsxs("div",{className:"absolute inset-0 pointer-events-none z-10 grid grid-cols-3 grid-rows-3 opacity-30 border border-sky-400/40",children:[v.jsx("div",{className:"border-r border-b border-sky-400/30"}),v.jsx("div",{className:"border-r border-b border-sky-400/30 relative",children:v.jsx("div",{className:"absolute inset-y-0 left-1/2 w-0.5 bg-rose-500/80 -translate-x-1/2"})}),v.jsx("div",{className:"border-b border-sky-400/30"}),v.jsx("div",{className:"border-r border-b border-sky-400/30"}),v.jsx("div",{className:"border-r border-b border-sky-400/30"}),v.jsx("div",{className:"border-b border-sky-400/30"}),v.jsx("div",{className:"border-r border-b border-sky-400/30"}),v.jsx("div",{className:"border-r border-b border-sky-400/30"}),v.jsx("div",{})]})]})},tc=i=>v.jsx(F0,{...i}),O0=({evDiff:i,ambientContamination:e,whiteBalance:t="flash"})=>{const r=50+Math.max(-1,Math.min(1,i/3))*35,s=t==="cloudy"?9:t==="tungsten"?-8:0,a=Math.max(10,Math.min(90,r+e*10+s)),l=Math.max(10,Math.min(90,r+(t==="tungsten"?10:t==="cloudy"?-8:0))),c=`
    M 0 45 
    L 10 44
    C ${r*.5} 40, ${r-15} 12, ${r} 8 
    C ${r+15} 12, ${r+25} 35, 95 44 
    L 100 45 Z
  `,u=`
    M 0 45 
    C ${a*.4} 42, ${a-12} 18, ${a} 14 
    C ${a+14} 18, ${a+20} 38, 100 45 Z
  `,h=`
    M 0 45 
    C ${l*.4} 43, ${l-12} 24, ${l} 20 
    C ${l+14} 24, ${l+20} 40, 100 45 Z
  `;return v.jsxs("div",{className:"flex flex-col gap-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg p-2.5 w-44",children:[v.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-zinc-400",children:[v.jsxs("span",{className:"flex items-center gap-1 font-semibold text-zinc-300",children:[v.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),"HISTOGRAMA"]}),v.jsxs("span",{className:i>1.2?"text-rose-400 font-bold":i<-1.2?"text-amber-400 font-bold":"text-emerald-400",children:[i>0?`+${i.toFixed(1)}`:i.toFixed(1)," EV"]})]}),v.jsxs("div",{className:"relative w-full h-11 bg-zinc-950/80 rounded border border-white/5 overflow-hidden",children:[v.jsxs("div",{className:"absolute inset-0 flex justify-between px-2 pointer-events-none opacity-20",children:[v.jsx("div",{className:"w-px h-full bg-white"}),v.jsx("div",{className:"w-px h-full bg-white"}),v.jsx("div",{className:"w-px h-full bg-white"})]}),v.jsxs("svg",{viewBox:"0 0 100 45",className:"w-full h-full preserve-3d",preserveAspectRatio:"none",children:[v.jsx("path",{d:u,fill:"#f43f5e",opacity:"0.38"}),v.jsx("path",{d:h,fill:"#38bdf8",opacity:"0.3"}),v.jsx("path",{d:c,fill:"#ffffff",opacity:"0.55"}),i>1.5&&v.jsx("line",{x1:"99",y1:"0",x2:"99",y2:"45",stroke:"#ef4444",strokeWidth:"2.5"}),i<-1.5&&v.jsx("line",{x1:"1",y1:"0",x2:"1",y2:"45",stroke:"#3b82f6",strokeWidth:"2.5"})]}),i>1.5&&v.jsx("span",{className:"absolute right-1 top-0.5 text-[8px] font-mono bg-rose-600/90 text-white px-1 rounded",children:"ESTOURO"}),i<-1.5&&v.jsx("span",{className:"absolute left-1 top-0.5 text-[8px] font-mono bg-blue-600/90 text-white px-1 rounded",children:"SUBEXPOSTO"})]}),v.jsxs("div",{className:"flex justify-between text-[9px] font-mono text-zinc-500",children:[v.jsx("span",{children:"0 (Sombras)"}),v.jsx("span",{children:"128 (Médios)"}),v.jsx("span",{children:"255 (Altas)"})]})]})};class B0{ctx=null;enabled=!0;getContext(){if(typeof window>"u")return null;if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}playShutter(e=1/160){if(!this.enabled)return;const t=this.getContext();if(!t)return;const n=t.currentTime;t.createOscillator();const r=t.createGain(),s=t.createBiquadFilter(),a=t.sampleRate*.05,o=t.createBuffer(1,a,t.sampleRate),l=o.getChannelData(0);for(let x=0;x<a;x++)l[x]=(Math.random()*2-1)*Math.exp(-x/(t.sampleRate*.008));const c=t.createBufferSource();c.buffer=o,s.type="bandpass",s.frequency.setValueAtTime(1200,n),s.Q.setValueAtTime(3,n),r.gain.setValueAtTime(.7,n),r.gain.exponentialRampToValueAtTime(.001,n+.04),c.connect(s),s.connect(r),r.connect(t.destination),c.start(n),c.stop(n+.05);const u=Math.min(Math.max(e,.06),.35),h=n+u,d=t.createBufferSource();d.buffer=o;const f=t.createGain();f.gain.setValueAtTime(.5,h),f.gain.exponentialRampToValueAtTime(.001,h+.04),d.connect(s),s.connect(f),f.connect(t.destination),d.start(h),d.stop(h+.05)}playDial(){if(!this.enabled)return;const e=this.getContext();if(!e)return;const t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type="triangle",n.frequency.setValueAtTime(800,t),n.frequency.exponentialRampToValueAtTime(200,t+.015),r.gain.setValueAtTime(.15,t),r.gain.exponentialRampToValueAtTime(.001,t+.015),n.connect(r),r.connect(e.destination),n.start(t),n.stop(t+.015)}playBeep(){if(!this.enabled)return;const e=this.getContext();if(!e)return;const t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type="sine",n.frequency.setValueAtTime(1760,t),r.gain.setValueAtTime(.15,t),r.gain.setValueAtTime(.15,t+.06),r.gain.exponentialRampToValueAtTime(.001,t+.07),n.connect(r),r.connect(e.destination),n.start(t),n.stop(t+.07);const s=e.createOscillator(),a=e.createGain();s.type="sine",s.frequency.setValueAtTime(1760,t+.1),a.gain.setValueAtTime(.15,t+.1),a.gain.setValueAtTime(.15,t+.16),a.gain.exponentialRampToValueAtTime(.001,t+.17),s.connect(a),a.connect(e.destination),s.start(t+.1),s.stop(t+.17)}}const Vr=new B0;/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=i=>i?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function k0(i,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:z0(i),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=i=>{let e="",t=!1;for(const n of i){if(n==="-"||n==="_"||n<=" "){t=e.length>0;continue}e.length===0?e+=n.toLowerCase():e+=t?n.toUpperCase():n,t=!1}return e};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=i=>{const e=V0(i);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=(...i)=>i.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ps(i){return i!=null}function G0(i,e={}){const t=e.attributeNames??{},n=d=>t[d]??d,r=i.size??i.width??Hn.width,s=i.size??i.height??Hn.height,a=i.aliases?.filter(d=>typeof d=="string"&&d.trim()!=="").map(d=>`lucide-${d}`)??[],o=[...i.name?[`lucide-${i.name}`]:[],...a],l=e.className?.split(" ").filter(Boolean)??[],c=e.includeDefaultClasses===!1?ya(...l):ya("lucide",...o,...l),u=e.absoluteStrokeWidth?Number(e.strokeWidth??Hn["stroke-width"])*Number(i.size??i.width??Hn.width)/Number(e.size??e.width??Hn.width):e.strokeWidth??Hn["stroke-width"];return["svg",{...Object.entries(Hn).reduce((d,[f,x])=>(d[n(f)]=x,d),{}),..."color"in e&&e.color&&{[n("stroke")]:e.color},..."size"in e&&Ps(e.size)&&{[n("width")]:e.size,[n("height")]:e.size},..."width"in e&&Ps(e.width)&&{[n("width")]:e.width},..."height"in e&&Ps(e.height)&&{[n("height")]:e.height},[n("stroke-width")]:u,...c&&{[n("class")]:c},[n("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[n("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},i.node.map(d=>{const[f,x,b]=d,m=e.nonScalingStroke?{[n("vector-effect")]:"non-scaling-stroke",...x}:x;return b?[f,m,b]:[f,m]})]}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function W0(i,e={}){return G0(i,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},q0=ct.createContext({}),j0=()=>ct.useContext(q0),Y0=ct.forwardRef(({color:i,size:e,width:t,height:n,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:l,iconNode:c=[],icon:u={node:c,aliases:[],size:24},...h},d)=>{const{size:f=24,strokeWidth:x=2,absoluteStrokeWidth:b=!1,nonScalingStroke:m=!1,color:p="currentColor",className:w=""}=j0()??{},R=!!l||X0(h),[S,A,y=[]]=W0(u,{color:i??p,width:t??e??f,height:n??e??f,strokeWidth:r??x,absoluteStrokeWidth:s??b,nonScalingStroke:a??m,className:ya(w,o),hasA11yProp:R,attributes:h});return ct.createElement(S,{ref:d,...A},[...y.map(([C,_])=>ct.createElement(C,_)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function _t(i,e=[],t=[]){const n=typeof i=="string"?k0(i,e,t):i,r=ct.forwardRef(({className:s,...a},o)=>ct.createElement(Y0,{ref:o,icon:n,className:s,...a}));return n.name&&(r.displayName=H0(n.name)),r}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc={name:"aperture",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]]};nc.node;const Z0=_t(nc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic={name:"arrow-right-left",size:24,node:[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]};ic.node;const J0=_t(ic);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};rc.node;const sc=_t(rc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};ac.node;const sl=_t(ac);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};oc.node;const K0=_t(oc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};lc.node;const cc=_t(lc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc={name:"crosshair",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]};dc.node;const Q0=_t(dc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};uc.node;const Ea=_t(uc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc={name:"gauge",size:24,node:[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]};hc.node;const $0=_t(hc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc={name:"grid-3x3",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],aliases:["grid","grid-3-x-3"]};fc.node;const eg=_t(fc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};pc.node;const tg=_t(pc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc={name:"octagon-alert",size:24,node:[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],aliases:["alert-octagon"]};mc.node;const ng=_t(mc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};gc.node;const ig=_t(gc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc={name:"ruler",size:24,node:[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]};xc.node;const rg=_t(xc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};vc.node;const sg=_t(vc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};_c.node;const ag=_t(_c);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Mc.node;const Sc=_t(Mc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};bc.node;const og=_t(bc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};yc.node;const Ec=_t(yc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Ac.node;const lg=_t(Ac);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Tc.node;const cg=_t(Tc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};wc.node;const dg=_t(wc);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Rc.node;const Cc=_t(Rc),ug=({settings:i,diagnostics:e,onUpdateSetting:t,onTakePhoto:n})=>{const[r,s]=ct.useState(!0),[a,o]=ct.useState(!1),[l,c]=ct.useState(!0),[u,h]=ct.useState(!1),d=()=>{const b=!l;c(b),Vr.enabled=b},f=()=>{h(!0),Vr.playShutter(al(i.shutterSpeed)),n(),setTimeout(()=>{h(!1)},240)},x=Math.max(0,Math.min(100,(e.evDiff+3)/6*100));return v.jsxs("div",{className:"relative flex flex-col w-full bg-[#101217] rounded-xl border border-[#272a36] shadow-sm overflow-hidden",children:[v.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 bg-[#161820] border-b border-[#242733] text-xs font-mono",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"px-1.5 py-0.5 rounded bg-[#232733] text-emerald-400 font-bold text-[10px] tracking-wider",children:"LIVE 1:1"}),v.jsx("span",{className:"px-1.5 py-0.5 rounded bg-amber-400/15 text-amber-300 border border-amber-400/30 font-bold text-[9px] tracking-wider",children:"THREE.JS 3D"}),v.jsx("span",{className:"text-zinc-400 text-[11px] hidden sm:inline",children:"MACRO INTRAORAL"}),v.jsx("span",{className:"text-zinc-600 hidden sm:inline",children:"|"}),v.jsxs("span",{className:"text-zinc-300 font-semibold text-[11px]",children:[Aa[i.focalLength].workingDistanceCm," cm dist."]})]}),v.jsxs("div",{className:"flex items-center gap-1.5",children:[v.jsxs("div",{className:"flex items-center bg-[#101217] p-0.5 rounded-md border border-[#262934] text-[10px]",children:[v.jsx("button",{onClick:()=>t("subjectMode","natural"),className:`px-2 py-0.5 rounded transition-colors ${i.subjectMode==="natural"?"bg-zinc-200 text-black font-bold":"text-zinc-400 hover:text-zinc-200"}`,children:"Estética"}),v.jsx("button",{onClick:()=>t("subjectMode","ortho"),className:`px-2 py-0.5 rounded transition-colors ${i.subjectMode==="ortho"?"bg-zinc-200 text-black font-bold":"text-zinc-400 hover:text-zinc-200"}`,children:"Ortodontia"}),v.jsx("button",{onClick:()=>t("subjectMode","vita"),className:`px-2 py-0.5 rounded transition-colors ${i.subjectMode==="vita"?"bg-zinc-200 text-black font-bold":"text-zinc-400 hover:text-zinc-200"}`,children:"VITA"})]}),v.jsx("button",{onClick:()=>s(!r),title:"Grade Oclusal & Linha Média",className:`p-1 rounded border transition-colors ${r?"bg-amber-400/20 text-amber-300 border-amber-400/40":"bg-[#181a22] text-zinc-500 border-[#272b37] hover:text-zinc-300"}`,children:v.jsx(eg,{className:"w-3.5 h-3.5"})}),v.jsx("button",{onClick:()=>o(!a),title:"Focus Peaking (Realce de Foco)",className:`p-1 rounded border transition-colors ${a?"bg-emerald-500/20 text-emerald-300 border-emerald-500/40":"bg-[#181a22] text-zinc-500 border-[#272b37] hover:text-zinc-300"}`,children:v.jsx(Q0,{className:"w-3.5 h-3.5"})}),v.jsx("button",{onClick:d,title:l?"Silenciar Sons":"Ativar Sons Mecânicos",className:"p-1 rounded border border-[#272b37] bg-[#181a22] text-zinc-400 hover:text-zinc-200",children:l?v.jsx(lg,{className:"w-3.5 h-3.5"}):v.jsx(cg,{className:"w-3.5 h-3.5"})})]})]}),v.jsxs("div",{className:"relative w-full aspect-[16/10] min-h-[280px] max-h-[360px] bg-black overflow-hidden group select-none",children:[u&&v.jsx("div",{className:"absolute inset-0 z-50 bg-white shutter-flash pointer-events-none"}),v.jsx(tc,{focalLength:i.focalLength,aperture:i.aperture,dofBlurCaninesPx:e.dofBlurCaninesPx,motionBlurPx:e.blurAmountPx,noiseOpacity:e.noiseOpacity,ambientLightContamination:e.ambientLightContamination,hasFlashCurtainArtifact:e.hasFlashCurtainArtifact,evDiff:e.evDiff,showFocusPeaking:a,showGrid:r,subjectMode:i.subjectMode,flashMode:i.flashMode,whiteBalance:i.whiteBalance}),v.jsxs("div",{className:"absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between pointer-events-none z-20",children:[v.jsxs("div",{className:"flex items-center gap-1.5 font-mono text-[10px] text-zinc-200",children:[v.jsx("span",{className:"px-1.5 py-0.5 rounded bg-black/70 border border-white/10 font-bold",children:"RAW"}),v.jsx("span",{className:"px-1.5 py-0.5 rounded bg-black/70 border border-white/10 text-emerald-400",children:"AF-S"}),v.jsxs("span",{className:"px-1.5 py-0.5 rounded bg-black/70 border border-white/10 text-amber-300 font-bold",children:["WB ",Dr[i.whiteBalance].kelvin]})]}),v.jsx("div",{className:"pointer-events-auto",children:v.jsx(O0,{evDiff:e.evDiff,ambientContamination:e.ambientLightContamination,whiteBalance:i.whiteBalance})})]}),v.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none z-10",children:v.jsxs("div",{className:"relative w-24 h-20 border border-white/20 rounded flex items-center justify-center",children:[v.jsx("div",{className:"absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-emerald-400"}),v.jsx("div",{className:"absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-emerald-400"}),v.jsx("div",{className:"absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-emerald-400"}),v.jsx("div",{className:"absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-emerald-400"}),v.jsx("div",{className:"w-1 h-1 rounded-full bg-emerald-400"}),v.jsx("span",{className:"absolute -bottom-4 text-[8px] font-mono tracking-wider bg-black/70 px-1 rounded text-emerald-400",children:"11 / 21"})]})}),v.jsxs("div",{className:"absolute bottom-2 left-2 right-2 flex flex-col gap-1 pointer-events-none z-20",children:[v.jsx("div",{className:"flex items-center justify-center",children:v.jsxs("div",{className:"flex flex-col items-center bg-black/80 px-3 py-0.5 rounded-full border border-white/10",children:[v.jsx("div",{className:"relative w-36 h-1.5",children:v.jsx("div",{className:"absolute -top-1 w-2 h-2 -ml-1 border-solid border-t-transparent border-r-transparent border-b-amber-400 border-l-transparent transition-all duration-200",style:{left:`${x}%`,borderWidth:"0 3px 5px 3px"}})}),v.jsxs("div",{className:"flex items-center justify-between w-36 text-[8px] font-mono text-zinc-400",children:[v.jsx("span",{children:"-3"}),v.jsx("span",{children:"-2"}),v.jsx("span",{children:"-1"}),v.jsx("span",{className:"text-white font-bold",children:"0"}),v.jsx("span",{children:"+1"}),v.jsx("span",{children:"+2"}),v.jsx("span",{children:"+3"})]})]})}),v.jsxs("div",{className:"flex items-center justify-between bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 font-mono text-xs",children:[v.jsxs("div",{className:"flex flex-col",children:[v.jsx("span",{className:"text-[9px] text-zinc-500 uppercase",children:"Obturador"}),v.jsxs("span",{className:`font-bold ${e.hasFlashCurtainArtifact?"text-rose-400":"text-amber-300"}`,children:[i.shutterSpeed,"s"]})]}),v.jsxs("div",{className:"flex flex-col",children:[v.jsx("span",{className:"text-[9px] text-zinc-500 uppercase",children:"Abertura"}),v.jsxs("span",{className:"font-bold text-emerald-400",children:["f/",i.aperture]})]}),v.jsxs("div",{className:"flex flex-col",children:[v.jsx("span",{className:"text-[9px] text-zinc-500 uppercase",children:"ISO"}),v.jsx("span",{className:`font-bold ${i.iso>800?"text-rose-400":"text-zinc-100"}`,children:i.iso})]}),v.jsxs("div",{className:"flex flex-col",children:[v.jsx("span",{className:"text-[9px] text-zinc-500 uppercase",children:"Lente"}),v.jsxs("span",{className:"font-bold text-zinc-200",children:[i.focalLength,"mm"]})]}),v.jsxs("div",{className:"flex flex-col items-end",children:[v.jsx("span",{className:"text-[9px] text-zinc-500 uppercase",children:"Difusor / Flash"}),v.jsxs("div",{className:"flex items-center gap-1 font-semibold text-amber-300 text-[11px]",children:[v.jsx(Cc,{className:"w-3 h-3 fill-amber-400 text-amber-400"}),v.jsxs("span",{children:[i.flashMode==="twin"&&"Twin D-Lux",i.flashMode==="studio"&&"Estúdio D-Lux",i.flashMode==="ring"&&"Ring D-Lux",i.flashMode==="off"&&"Sem Flash"]})]})]})]})]})]}),v.jsxs("div",{className:"flex items-center justify-between px-3.5 py-2 bg-[#14161d] border-t border-[#242733]",children:[v.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[v.jsx("span",{className:"text-zinc-400 text-[11px]",children:"Status:"}),v.jsx("span",{className:`font-semibold text-xs ${e.exposureStatus==="good"?"text-emerald-400":e.exposureStatus==="under"?"text-sky-400":"text-rose-400"}`,children:e.exposureDescription}),e.blurAmountPx>2&&v.jsx("span",{className:"text-rose-400 font-mono text-[10px] bg-rose-950/40 px-2 py-0.5 rounded border border-rose-800/40",children:"Tremor Detectado"})]}),v.jsxs("button",{onClick:f,className:"flex items-center gap-2 px-4 py-1.5 bg-zinc-100 hover:bg-white text-black font-bold text-xs rounded-md shadow-sm active:scale-95 transition-all cursor-pointer",children:[v.jsx(sc,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"Disparar Foto"})]})]})]})},hg=({settings:i})=>{const{focalLength:e,aperture:t,flashMode:n}=i,r=Aa[e],a={60:250,85:205,100:155,180:75}[e]||155,l={2.8:18,4:15,5.6:12,8:9,11:7,16:5,22:3.5,32:2.2}[t]||5,u={2.8:6,4:10,5.6:16,8:24,11:34,16:48,22:65,32:80}[t]||30,h=490,d=135;return v.jsxs("div",{className:"flex flex-col bg-[#16181f] rounded-xl border border-[#272a36] p-3 shadow-sm",children:[v.jsxs("div",{className:"flex items-center justify-between mb-2.5 border-b border-[#232733] pb-2",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("div",{className:"p-1 rounded bg-[#232733] text-amber-400",children:v.jsx(J0,{className:"w-3.5 h-3.5"})}),v.jsxs("div",{children:[v.jsx("h3",{className:"text-xs font-bold text-white",children:"Geometria Óptica & Distância de Trabalho"}),v.jsx("p",{className:"text-[10px] text-zinc-400",children:"Posição ergonômica da câmera em relação à boca do paciente"})]})]}),v.jsx("div",{className:"flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border bg-zinc-950",children:e===100?v.jsxs("span",{className:"flex items-center gap-1 text-emerald-400",children:[v.jsx(sg,{className:"w-3.5 h-3.5"}),"Ergonomia Perfeita (32cm)"]}):e===60?v.jsxs("span",{className:"flex items-center gap-1 text-amber-400",children:[v.jsx(Ec,{className:"w-3.5 h-3.5"}),"Muito Próximo (15cm)"]}):v.jsxs("span",{className:"flex items-center gap-1 text-sky-400",children:[v.jsx(cc,{className:"w-3.5 h-3.5"}),"Campo Seguro (55cm)"]})})]}),v.jsxs("div",{className:"relative w-full h-[220px] bg-zinc-950 rounded-xl border border-zinc-850 overflow-hidden flex items-center justify-center",children:[v.jsx("div",{className:"absolute inset-0 lcd-grid opacity-30"}),v.jsxs("svg",{viewBox:"0 0 600 220",className:"w-full h-full max-w-[650px] select-none",xmlns:"http://www.w3.org/2000/svg",children:[v.jsxs("defs",{children:[v.jsxs("linearGradient",{id:"flashConeGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[v.jsx("stop",{offset:"0%",stopColor:"#38bdf8",stopOpacity:"0.45"}),v.jsx("stop",{offset:"50%",stopColor:"#38bdf8",stopOpacity:"0.2"}),v.jsx("stop",{offset:"100%",stopColor:"#38bdf8",stopOpacity:"0.02"})]}),v.jsxs("linearGradient",{id:"dofSharpZoneGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[v.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0"}),v.jsx("stop",{offset:"20%",stopColor:"#10b981",stopOpacity:"0.35"}),v.jsx("stop",{offset:"80%",stopColor:"#10b981",stopOpacity:"0.35"}),v.jsx("stop",{offset:"100%",stopColor:"#10b981",stopOpacity:"0"})]}),v.jsxs("linearGradient",{id:"opticalRayGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[v.jsx("stop",{offset:"0%",stopColor:"#e2e8f0",stopOpacity:"0.5"}),v.jsx("stop",{offset:"100%",stopColor:"#e2e8f0",stopOpacity:"0.1"})]})]}),v.jsxs("g",{transform:"translate(0, 190)",children:[v.jsx("line",{x1:a+85,y1:"0",x2:h,y2:"0",stroke:"#64748b",strokeWidth:"1.5",strokeDasharray:"4 3",className:"transition-all duration-500 ease-out"}),v.jsx("line",{x1:a+85,y1:"-6",x2:a+85,y2:"6",stroke:"#64748b",strokeWidth:"2",className:"transition-all duration-500 ease-out"}),v.jsx("line",{x1:h,y1:"-6",x2:h,y2:"6",stroke:"#64748b",strokeWidth:"2"}),v.jsx("rect",{x:(a+85+h)/2-42,y:"-12",width:"84",height:"20",rx:"4",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"1.2",className:"transition-all duration-500 ease-out"}),v.jsxs("text",{x:(a+85+h)/2,y:"2",textAnchor:"middle",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",fontFamily:"monospace",className:"transition-all duration-500 ease-out",children:[r.workingDistanceCm," cm"]})]}),n!=="off"&&v.jsx("g",{opacity:"0.8",children:v.jsx("polygon",{points:`
                  ${a+85},${d-35} 
                  ${h},${d-20} 
                  ${h},${d+20} 
                  ${a+85},${d+35}
                `,fill:"url(#flashConeGrad)",className:"transition-all duration-500 ease-out"})}),v.jsx("line",{x1:a,y1:d,x2:h,y2:d,stroke:"#ef4444",strokeWidth:"0.8",strokeDasharray:"5 3",opacity:"0.6",className:"transition-all duration-500 ease-out"}),v.jsxs("g",{id:"patient-side-view",transform:`translate(${h}, 60)`,children:[v.jsx("path",{d:"M 50 10 C 25 30, 10 50, 0 75 C 10 85, 20 85, 0 95 C 15 125, 35 140, 50 150",stroke:"#475569",strokeWidth:"2.5",fill:"none",strokeLinecap:"round"}),v.jsx("path",{d:"M 5 62 C -15 62, -15 88, 5 88",stroke:"#38bdf8",strokeWidth:"3.5",fill:"none",strokeLinecap:"round",opacity:"0.75"}),v.jsxs("g",{transform:"translate(0, 68)",children:[v.jsx("path",{d:"M 0 0 C 8 2, 10 10, 8 16 L 2 16 C -2 10, -3 2, 0 0 Z",fill:"#fefcf0",stroke:"#d4be88",strokeWidth:"1.2"}),v.jsx("path",{d:"M 0 0 C 4 -6, 12 -4, 15 2",stroke:"#e11d48",strokeWidth:"2.5",fill:"none"}),v.jsx("rect",{x:-u/2+4,y:"-18",width:u,height:"48",rx:"3",fill:"url(#dofSharpZoneGrad)",stroke:"#10b981",strokeWidth:"1.2",strokeDasharray:"3 2",className:"transition-all duration-400 ease-out"}),v.jsxs("text",{x:"4",y:"-23",textAnchor:"middle",fill:"#10b981",fontSize:"9",fontWeight:"bold",fontFamily:"monospace",children:["DOF: ",t>=22?"~8mm (Total)":t<=4?"<1mm (Raso)":"~3mm"]})]}),v.jsx("text",{x:"50",y:"80",fill:"#94a3b8",fontSize:"11",fontFamily:"sans-serif",children:"Boca / Paciente"})]}),v.jsxs("g",{id:"camera-rig",transform:`translate(${a}, 75)`,className:"transition-transform duration-500 ease-out",children:[v.jsx("rect",{x:"0",y:"20",width:"48",height:"70",rx:"6",fill:"#1e293b",stroke:"#475569",strokeWidth:"1.5"}),v.jsx("rect",{x:"6",y:"10",width:"22",height:"12",rx:"2",fill:"#334155"})," ",v.jsx("circle",{cx:"15",cy:"55",r:"8",fill:"#0f172a",stroke:"#64748b",strokeWidth:"1"})," ",v.jsx("rect",{x:"48",y:"32",width:"12",height:"46",rx:"2",fill:"#334155",stroke:"#475569",strokeWidth:"1"}),v.jsx("rect",{x:"60",y:"35",width:"25",height:"40",fill:"#1e293b",stroke:"#475569",strokeWidth:"1"}),v.jsx("line",{x1:"66",y1:"36",x2:"66",y2:"74",stroke:"#64748b",strokeWidth:"2",strokeDasharray:"3 2"}),v.jsx("line",{x1:"72",y1:"36",x2:"72",y2:"74",stroke:"#64748b",strokeWidth:"2",strokeDasharray:"3 2"}),v.jsx("path",{d:"M 85 36 C 89 45, 89 65, 85 74 Z",fill:"#0284c7",opacity:"0.8"}),v.jsxs("g",{transform:"translate(72, 55)",children:[v.jsx("circle",{cx:"0",cy:"0",r:"16",fill:"#0f172a",stroke:"#64748b",strokeWidth:"1.2"}),v.jsx("circle",{cx:"0",cy:"0",r:l,fill:"#38bdf8",opacity:"0.9",className:"transition-all duration-300 ease-out"}),v.jsxs("text",{x:"0",y:"26",textAnchor:"middle",fill:"#94a3b8",fontSize:"8",fontFamily:"monospace",children:["f/",t]})]}),n==="twin"&&v.jsxs("g",{id:"twin-flash-rig",children:[v.jsx("path",{d:"M 85 36 L 96 15",stroke:"#64748b",strokeWidth:"2.5"}),v.jsx("path",{d:"M 85 74 L 96 95",stroke:"#64748b",strokeWidth:"2.5"}),v.jsx("rect",{x:"94",y:"8",width:"16",height:"14",rx:"2",fill:"#f8fafc",stroke:"#334155",strokeWidth:"1.2"}),v.jsx("ellipse",{cx:"102",cy:"15",rx:"3",ry:"5",fill:"#38bdf8"}),v.jsx("rect",{x:"109",y:"5",width:"8",height:"20",rx:"2",fill:"#fbbf24",stroke:"#d97706",strokeWidth:"1"}),v.jsx("text",{x:"120",y:"14",fill:"#fbbf24",fontSize:"7",fontWeight:"bold",fontFamily:"monospace",children:"D-LUX MF12"}),v.jsx("rect",{x:"94",y:"88",width:"16",height:"14",rx:"2",fill:"#f8fafc",stroke:"#334155",strokeWidth:"1.2"}),v.jsx("ellipse",{cx:"102",cy:"95",rx:"3",ry:"5",fill:"#38bdf8"}),v.jsx("rect",{x:"109",y:"85",width:"8",height:"20",rx:"2",fill:"#fbbf24",stroke:"#d97706",strokeWidth:"1"}),v.jsx("text",{x:"120",y:"94",fill:"#fbbf24",fontSize:"7",fontWeight:"bold",fontFamily:"monospace",children:"D-LUX MF12"})]}),n==="ring"&&v.jsxs("g",{id:"ring-flash-rig",children:[v.jsx("ellipse",{cx:"88",cy:"55",rx:"5",ry:"24",fill:"#ffffff",stroke:"#0284c7",strokeWidth:"2"}),v.jsx("ellipse",{cx:"91",cy:"55",rx:"3",ry:"26",fill:"none",stroke:"#fbbf24",strokeWidth:"1.8"}),v.jsx("text",{x:"96",y:"58",fill:"#fbbf24",fontSize:"7",fontWeight:"bold",fontFamily:"monospace",children:"D-LUX RING"})]}),n==="studio"&&v.jsxs("g",{id:"studio-flash-rig",children:[v.jsxs("g",{transform:"translate(85, -20)",children:[v.jsx("polygon",{points:"0,30 24,0 38,0 20,40",fill:"#334155",stroke:"#64748b",strokeWidth:"1.2"}),v.jsx("rect",{x:"22",y:"-2",width:"16",height:"38",rx:"2",fill:"#f8fafc",stroke:"#a855f7",strokeWidth:"1.5",opacity:"0.95"}),v.jsx("line",{x1:"30",y1:"-2",x2:"30",y2:"36",stroke:"#c084fc",strokeWidth:"1",strokeDasharray:"3 2"}),v.jsx("text",{x:"44",y:"18",fill:"#c084fc",fontSize:"7",fontWeight:"bold",fontFamily:"monospace",children:"SOFTBOX"})]}),v.jsxs("g",{transform:"translate(85, 75)",children:[v.jsx("polygon",{points:"0,10 20,0 38,40 24,40",fill:"#334155",stroke:"#64748b",strokeWidth:"1.2"}),v.jsx("rect",{x:"22",y:"4",width:"16",height:"38",rx:"2",fill:"#f8fafc",stroke:"#a855f7",strokeWidth:"1.5",opacity:"0.95"}),v.jsx("line",{x1:"30",y1:"4",x2:"30",y2:"42",stroke:"#c084fc",strokeWidth:"1",strokeDasharray:"3 2"}),v.jsx("text",{x:"44",y:"24",fill:"#c084fc",fontSize:"7",fontWeight:"bold",fontFamily:"monospace",children:"SOFTBOX"})]})]}),v.jsx("text",{x:"24",y:"-4",textAnchor:"middle",fill:"#38bdf8",fontSize:"10",fontWeight:"bold",fontFamily:"monospace",children:r.label})]})]})]}),v.jsxs("div",{className:"mt-2.5 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs",children:[v.jsxs("div",{className:"bg-[#1b1d25] p-2 rounded-lg border border-[#272a36]",children:[v.jsxs("span",{className:"font-semibold text-zinc-200 flex items-center gap-1.5 mb-0.5 text-[11px]",children:[v.jsx(rg,{className:"w-3 h-3 text-amber-400"}),"Distância de Trabalho (",r.workingDistanceCm," cm):"]}),v.jsx("p",{className:"text-zinc-400 text-[11px] leading-relaxed",children:r.clinicalAdvantage})]}),v.jsxs("div",{className:"bg-[#1b1d25] p-2 rounded-lg border border-[#272a36]",children:[v.jsxs("span",{className:"font-semibold text-zinc-200 flex items-center gap-1.5 mb-0.5 text-[11px]",children:[v.jsx(Sc,{className:"w-3 h-3 text-emerald-400"}),"Profundidade de Campo (f/",t,"):"]}),v.jsx("p",{className:"text-zinc-400 text-[11px] leading-relaxed",children:t>=22?"Abertura f/22 cobre incisivos e caninos com nitidez máxima no plano focal 1:1.":t<=5.6?"Abertura muito aberta: apenas a face vestibular do incisivo central fica nítida (< 1.5mm).":"Abertura intermediária ideal para fotos estéticas do sorriso e lábios."})]})]})]})},fg=[60,85,100,180],pg=["1/30","1/60","1/125","1/160","1/200","1/250","1/500","1/1000"],mg=[100,200,400,800,1600,3200,6400],gg=[2.8,4,5.6,8,11,16,22,32],xg=({settings:i,onUpdateSetting:e})=>{const t=(n,r)=>{Vr.playDial(),e(n,r)};return v.jsxs("div",{className:"bg-[#16181f] border border-[#272a36] rounded-xl p-3.5 flex flex-col gap-3 shadow-sm",children:[v.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-[#232733]",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(ag,{className:"w-4 h-4 text-amber-400"}),v.jsx("h2",{className:"text-xs font-bold text-zinc-100 uppercase tracking-wider",children:"Painel de Controle Óptico"})]}),v.jsx("span",{className:"text-[11px] font-mono text-zinc-400",children:"Modo Manual [M]"})]}),v.jsxs("div",{className:"flex flex-col gap-1.5",children:[v.jsxs("div",{className:"flex items-center justify-between text-xs",children:[v.jsxs("span",{className:"font-semibold text-zinc-300 flex items-center gap-1.5",children:[v.jsx(sc,{className:"w-3.5 h-3.5 text-zinc-400"}),"Lente Macro"]}),v.jsxs("span",{className:"font-mono text-amber-300 font-bold text-xs",children:[i.focalLength,"mm (",Aa[i.focalLength].workingDistanceCm," cm dist.)"]})]}),v.jsx("div",{className:"grid grid-cols-4 gap-1.5 font-mono text-xs",children:fg.map(n=>{const r=i.focalLength===n,s=n===100;return v.jsxs("button",{onClick:()=>t("focalLength",n),className:`flex items-center justify-center gap-1 py-1.5 px-2 rounded-md border transition-colors cursor-pointer ${r?"bg-amber-400 text-black border-amber-300 font-bold shadow-sm":"bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white"}`,children:[v.jsxs("span",{children:[n,"mm"]}),s&&!r&&v.jsx("span",{className:"text-amber-400 text-[10px]",children:"★"})]},n)})}),v.jsx("p",{className:"text-[10px] text-zinc-400",children:i.focalLength===100?"★ 100mm: Padrão Ouro mundial com distância ergonômica (~32cm) sem distorcer o sorriso.":i.focalLength===60?"⚠️ 60mm: Muito próximo (15cm) do paciente; projeta sombra da câmera e distorce dentes.":i.focalLength===85?"85mm: Ótimo para proporção facial e fotografia do sorriso/lábios.":"180mm: Tele-macro com distância estéril (55cm) para cirurgias periodontais."})]}),v.jsxs("div",{className:"flex flex-col gap-1.5 pt-2 border-t border-[#232733]",children:[v.jsxs("div",{className:"flex items-center justify-between text-xs",children:[v.jsxs("span",{className:"font-semibold text-zinc-300 flex items-center gap-1.5",children:[v.jsx(Z0,{className:"w-3.5 h-3.5 text-zinc-400"}),"Abertura (Profundidade de Campo)"]}),v.jsxs("span",{className:"font-mono text-emerald-400 font-bold text-xs",children:["f/",i.aperture]})]}),v.jsx("div",{className:"grid grid-cols-8 gap-1 font-mono text-xs",children:gg.map(n=>{const r=i.aperture===n;return v.jsxs("button",{onClick:()=>t("aperture",n),className:`py-1.5 px-0.5 rounded-md border text-center transition-colors cursor-pointer ${r?"bg-emerald-400 text-black border-emerald-300 font-bold shadow-sm":"bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white"}`,children:["f/",n]},n)})}),v.jsx("p",{className:"text-[10px] text-zinc-400",children:i.aperture>=22?"★ f/22: Nitidez máxima cobrindo incisivos, caninos e molares simultaneamente.":i.aperture<=4?"⚠️ f/2.8 a f/4: Profundidade < 1mm; caninos e dentes vizinhos ficam totalmente borrados.":"f/8 a f/16: Profundidade moderada, recomendada para retrato do sorriso."})]}),v.jsxs("div",{className:"flex flex-col gap-1.5 pt-2 border-t border-[#232733]",children:[v.jsxs("div",{className:"flex items-center justify-between text-xs",children:[v.jsxs("span",{className:"font-semibold text-zinc-300 flex items-center gap-1.5",children:[v.jsx($0,{className:"w-3.5 h-3.5 text-zinc-400"}),"Velocidade do Obturador"]}),v.jsxs("span",{className:"font-mono text-amber-300 font-bold text-xs",children:[i.shutterSpeed,"s"]})]}),v.jsx("div",{className:"grid grid-cols-8 gap-1 font-mono text-xs",children:pg.map(n=>{const r=i.shutterSpeed===n,s=n==="1/500"||n==="1/1000";return v.jsx("button",{onClick:()=>t("shutterSpeed",n),className:`py-1.5 px-0.5 rounded-md border text-center transition-colors cursor-pointer ${r?s?"bg-rose-500 text-white border-rose-400 font-bold":"bg-zinc-100 text-black border-white font-bold shadow-sm":s?"bg-[#20181b] text-rose-300/80 border-rose-900/40 hover:bg-rose-950/40":"bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white"}`,children:n},n)})}),v.jsx("p",{className:"text-[10px] text-zinc-400",children:i.shutterSpeed==="1/160"||i.shutterSpeed==="1/200"?"★ 1/160s - 1/200s: Sincronismo oficial de flash; congela micro-tremores e bloqueia luz de consultório.":i.shutterSpeed==="1/500"||i.shutterSpeed==="1/1000"?"⚠️ Acima de 1/250s: Ultrapassa o sincronismo X-Sync e corta a foto com a faixa preta da cortina.":"1/30s - 1/60s: Lento demais sem flash; causa borrão de movimento e contamina com luz amarela."})]}),v.jsxs("div",{className:"flex flex-col gap-1.5 pt-2 border-t border-[#232733]",children:[v.jsxs("div",{className:"flex items-center justify-between text-xs",children:[v.jsxs("span",{className:"font-semibold text-zinc-300 flex items-center gap-1.5",children:[v.jsx(og,{className:"w-3.5 h-3.5 text-zinc-400"}),"Sensibilidade ISO"]}),v.jsxs("span",{className:"font-mono text-zinc-100 font-bold text-xs",children:["ISO ",i.iso]})]}),v.jsx("div",{className:"grid grid-cols-7 gap-1 font-mono text-xs",children:mg.map(n=>{const r=i.iso===n,s=n>=3200;return v.jsx("button",{onClick:()=>t("iso",n),className:`py-1.5 px-0.5 rounded-md border text-center transition-colors cursor-pointer ${r?s?"bg-rose-500 text-white border-rose-400 font-bold":"bg-zinc-100 text-black border-white font-bold shadow-sm":"bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white"}`,children:n},n)})}),v.jsx("p",{className:"text-[10px] text-zinc-400",children:i.iso===100?"★ ISO 100: Ausência de ruído digital e máxima fidelidade de cor para análise de resinas e periquimáceas.":i.iso>=1600?"⚠️ ISO alto causa granulação severa que destrói detalhes da textura de esmalte e registro clínico.":"ISO 200 a 800: Ruído aceitável, mas prefira sempre aumentar a potência do flash em vez do ISO."})]}),v.jsxs("div",{className:"flex flex-col gap-1.5 pt-2 border-t border-[#232733]",children:[v.jsxs("div",{className:"flex items-center justify-between text-xs",children:[v.jsxs("span",{className:"font-semibold text-zinc-300 flex items-center gap-1.5",children:[v.jsx(Cc,{className:"w-3.5 h-3.5 text-amber-400"}),"Iluminação & Difusor D-Lux"]}),v.jsxs("span",{className:"font-mono text-amber-300 font-bold text-xs",children:[i.flashMode==="twin"&&"Twin Flash + Difusor D-Lux MF-12",i.flashMode==="studio"&&"Estúdio + Bouncers / Softbox D-Lux",i.flashMode==="ring"&&"Ring Flash + Difusor D-Lux YN-14",i.flashMode==="off"&&"Sem Flash (Luz Ambiente)"]})]}),v.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-xs",children:[v.jsx("button",{onClick:()=>t("flashMode","twin"),className:`py-1.5 px-2 rounded-md border text-center transition-colors cursor-pointer ${i.flashMode==="twin"?"bg-amber-400 text-black border-amber-300 font-bold shadow-sm":"bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white"}`,children:"Twin + D-Lux MF-12"}),v.jsx("button",{onClick:()=>t("flashMode","studio"),className:`py-1.5 px-2 rounded-md border text-center transition-colors cursor-pointer ${i.flashMode==="studio"?"bg-amber-400 text-black border-amber-300 font-bold shadow-sm":"bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white"}`,children:"Estúdio / Bouncers"}),v.jsx("button",{onClick:()=>t("flashMode","ring"),className:`py-1.5 px-2 rounded-md border text-center transition-colors cursor-pointer ${i.flashMode==="ring"?"bg-amber-400 text-black border-amber-300 font-bold shadow-sm":"bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white"}`,children:"Ring + D-Lux YN-14"}),v.jsx("button",{onClick:()=>t("flashMode","off"),className:`py-1.5 px-2 rounded-md border text-center transition-colors cursor-pointer ${i.flashMode==="off"?"bg-rose-500 text-white border-rose-400 font-bold":"bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white"}`,children:"Sem Flash (Ambiente)"})]}),v.jsx("p",{className:"text-[10px] text-zinc-400",children:"Difusores D-Lux suavizam a luz estroboscópica pontual, gerando reflexos lineares e destacando a tridimensionalidade vestibular."})]}),v.jsxs("div",{className:"flex flex-col gap-1.5 pt-2 border-t border-[#232733]",children:[v.jsxs("div",{className:"flex items-center justify-between text-xs",children:[v.jsxs("span",{className:"font-semibold text-zinc-300 flex items-center gap-1.5",children:[v.jsx(ig,{className:"w-3.5 h-3.5 text-zinc-400"}),"Balanço de Branco (WB)"]}),v.jsxs("span",{className:"font-mono text-zinc-100 font-bold text-xs",children:[Dr[i.whiteBalance].label," (",Dr[i.whiteBalance].kelvin,")"]})]}),v.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-xs",children:[v.jsx("button",{onClick:()=>t("whiteBalance","flash"),className:`py-1.5 px-2 rounded-md border text-center transition-colors cursor-pointer ${i.whiteBalance==="flash"?"bg-amber-400 text-black border-amber-300 font-bold shadow-sm":"bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white"}`,children:"Flash 5500K ★"}),v.jsx("button",{onClick:()=>t("whiteBalance","custom"),className:`py-1.5 px-2 rounded-md border text-center transition-colors cursor-pointer ${i.whiteBalance==="custom"?"bg-zinc-100 text-black border-white font-bold shadow-sm":"bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white"}`,children:"Cinza 18%"}),v.jsx("button",{onClick:()=>t("whiteBalance","cloudy"),className:`py-1.5 px-2 rounded-md border text-center transition-colors cursor-pointer ${i.whiteBalance==="cloudy"?"bg-zinc-100 text-black border-white font-bold shadow-sm":"bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white"}`,children:"Nublado 6500K"}),v.jsx("button",{onClick:()=>t("whiteBalance","tungsten"),className:`py-1.5 px-2 rounded-md border text-center transition-colors cursor-pointer ${i.whiteBalance==="tungsten"?"bg-blue-500 text-white border-blue-400 font-bold":"bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white"}`,children:"Tungstênio 3200K"})]}),v.jsx("p",{className:"text-[10px] text-zinc-400",children:"5500K é a temperatura oficial odontológica para correta estratificação de cerâmicas e resinas na escala VITA."})]})]})},Ns=[{id:"gold-standard",name:"Padrão Ouro: Estética Anterior (1:1)",tag:"Padrão Clínico",description:"Configuração consagrada pela Odontologia Estética mundial. Nitidez máxima, foco em todo o arco anterior, fidelidade de cor para seleção de resinas.",badgeColor:"bg-emerald-500/20 text-emerald-300 border-emerald-500/30",settings:{focalLength:100,aperture:22,shutterSpeed:"1/160",iso:100,flashMode:"twin",subjectMode:"natural",whiteBalance:"flash"}},{id:"smile-portrait",name:"Fotografia de Sorriso & Terço Inferior",tag:"Retrato",description:"Enquadramento mais amplo para análise da harmonia facial, linha do sorriso e corredor bucal com suave desfoque de fundo.",badgeColor:"bg-sky-500/20 text-sky-300 border-sky-500/30",settings:{focalLength:85,aperture:8,shutterSpeed:"1/125",iso:100,flashMode:"twin",subjectMode:"natural",whiteBalance:"flash"}},{id:"surgical-perio",name:"Cirurgia Periodontal & Implante",tag:"Cirúrgico",description:"Tele-macro de 180mm que permite ao dentista permanecer a 55cm do campo operatório estéril, mantendo iluminação uniforme sem risco de contaminação.",badgeColor:"bg-indigo-500/20 text-indigo-300 border-indigo-500/30",settings:{focalLength:180,aperture:22,shutterSpeed:"1/200",iso:100,flashMode:"ring",subjectMode:"natural",whiteBalance:"flash"}},{id:"ortho-brackets",name:"Ortodontia & Registro de Braquetes",tag:"Padrão Clínico",description:"Luz anelar circular (Ring Flash) que ilumina bráquetes, fios e molar sem criar sombras duras indesejadas.",badgeColor:"bg-cyan-500/20 text-cyan-300 border-cyan-500/30",settings:{focalLength:100,aperture:22,shutterSpeed:"1/160",iso:100,flashMode:"ring",subjectMode:"ortho",whiteBalance:"flash"}},{id:"shade-vita",name:"Tomada de Cor (Escala VITA)",tag:"Padrão Clínico",description:"Fotografia comparativa com a pastilha da escala VITA encostada no incisivo central. Requer ISO 100, flash calibrado e WB Flash 5500K.",badgeColor:"bg-amber-500/20 text-amber-300 border-amber-500/30",settings:{focalLength:100,aperture:22,shutterSpeed:"1/160",iso:100,flashMode:"twin",subjectMode:"vita",whiteBalance:"flash"}},{id:"studio-softbox",name:"Estúdio: Softbox & Protocolo Artístico",tag:"Padrão Clínico",description:"Iluminação difusa de estúdio com softbox/stripbox. Cria reflexos suaves e contínuos nas arestas de transição das facetas de resina e cerâmica.",badgeColor:"bg-purple-500/20 text-purple-300 border-purple-500/30",settings:{focalLength:100,aperture:22,shutterSpeed:"1/160",iso:100,flashMode:"studio",subjectMode:"natural",whiteBalance:"flash"}},{id:"error-shutter-sync",name:"⚠️ Erro Comum: Faixa Preta do Obturador",tag:"Erro Comum",description:"Velocidade além do limite de sincronismo da câmera (ex: 1/1000s). A segunda cortina fecha antes do flash disparar, cortando metade da foto com uma barra preta!",badgeColor:"bg-rose-500/20 text-rose-300 border-rose-500/30",settings:{focalLength:100,aperture:22,shutterSpeed:"1/1000",iso:100,flashMode:"twin",subjectMode:"natural",whiteBalance:"flash"}},{id:"error-hand-shake",name:"⚠️ Erro Comum: Tremor & Luz de Teto Amarela",tag:"Erro Comum",description:"Tentativa de fotografar sem flash com velocidade lenta (1/30s) e ISO alto (1600). A foto fica borrada pelo tremor e manchada pela lâmpada quente da clínica.",badgeColor:"bg-orange-500/20 text-orange-300 border-orange-500/30",settings:{focalLength:60,aperture:4,shutterSpeed:"1/30",iso:1600,flashMode:"off",subjectMode:"natural",whiteBalance:"cloudy"}},{id:"error-shallow-dof",name:"⚠️ Erro Comum: Foco Raso Demais (f/2.8)",tag:"Erro Comum",description:"Usar f/2.8 em foto macro faz com que apenas 0.8mm fiquem em foco. O incisivo central fica nítido, mas os caninos e a gengiva viram uma mancha desfocada.",badgeColor:"bg-yellow-500/20 text-yellow-300 border-yellow-500/30",settings:{focalLength:100,aperture:2.8,shutterSpeed:"1/160",iso:100,flashMode:"twin",subjectMode:"natural",whiteBalance:"flash"}},{id:"error-wrong-wb",name:"⚠️ Erro Comum: WB Incorreto (Tungstênio Frio)",tag:"Erro Comum",description:"Fotografar com WB em Tungstênio (3200K) usando flash. A câmera compensa aplicando um filtro azul excessivo que desfigura a cor do esmalte e gengiva!",badgeColor:"bg-blue-500/20 text-blue-300 border-blue-500/30",settings:{focalLength:100,aperture:22,shutterSpeed:"1/160",iso:100,flashMode:"twin",subjectMode:"natural",whiteBalance:"tungsten"}}],vg=({currentSettings:i,onSelectPreset:e})=>{const t=o=>{Vr.playBeep(),e(o.settings)},n=o=>{const l=o.settings,c=i;return l.focalLength===c.focalLength&&l.shutterSpeed===c.shutterSpeed&&l.iso===c.iso&&l.aperture===c.aperture&&l.flashMode===c.flashMode&&l.subjectMode===c.subjectMode&&l.whiteBalance===c.whiteBalance},r=Ns.find(n),s=Ns.filter(o=>o.tag!=="Erro Comum"),a=Ns.filter(o=>o.tag==="Erro Comum");return v.jsxs("div",{className:"bg-[#16181f] border border-[#272a36] rounded-xl px-3 py-2 flex flex-col gap-1.5 shadow-sm",children:[v.jsxs("div",{className:"flex items-center justify-between gap-3 flex-wrap xl:flex-nowrap",children:[v.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[v.jsxs("div",{className:"flex items-center gap-1 text-[11px] font-semibold text-zinc-400 mr-1 shrink-0",children:[v.jsx(Sc,{className:"w-3.5 h-3.5 text-amber-400"}),v.jsx("span",{children:"Protocolos:"})]}),s.map(o=>{const l=n(o),c=o.id==="gold-standard";return v.jsxs("button",{onClick:()=>t(o),title:`${o.name}: ${o.description}`,className:`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer border ${l?"bg-amber-400 text-black border-amber-300 font-bold shadow-sm":c?"bg-[#1e222d] text-zinc-200 border-amber-500/40 hover:border-amber-400 hover:text-white":"bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white"}`,children:[l&&v.jsx(sl,{className:"w-3 h-3 stroke-[3]"}),v.jsx("span",{children:o.name.split(":")[0].replace("Padrão Ouro","Padrão Ouro 1:1")})]},o.id)})]}),v.jsx("div",{className:"hidden xl:block h-4 w-px bg-zinc-700/60 shrink-0"}),v.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[v.jsxs("div",{className:"flex items-center gap-1 text-[11px] font-semibold text-zinc-400 mr-1 shrink-0",children:[v.jsx(K0,{className:"w-3.5 h-3.5 text-rose-400"}),v.jsx("span",{children:"Erros Típicos:"})]}),a.map(o=>{const l=n(o);return v.jsxs("button",{onClick:()=>t(o),title:`${o.name}: ${o.description}`,className:`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer border ${l?"bg-rose-500 text-white border-rose-400 font-bold shadow-sm":"bg-[#1c1820] text-rose-200/80 border-rose-900/40 hover:bg-rose-950/40 hover:text-rose-100 hover:border-rose-700/60"}`,children:[l&&v.jsx(sl,{className:"w-3 h-3 stroke-[3]"}),v.jsx("span",{children:o.name.replace("⚠️ Erro Comum: ","").replace("Faixa Preta do Obturador","Cortina (1/1000s)").replace("Tremor & Luz de Teto Amarela","Tremor (1/30s)").replace("Foco Raso Demais (f/2.8)","Foco Raso (f/2.8)").replace("WB Incorreto (Tungstênio Frio)","WB Incorreto (3200K)")})]},o.id)})]})]}),v.jsxs("div",{className:"flex items-center justify-between text-[11px] text-zinc-400 border-t border-[#232733] pt-1",children:[v.jsx("div",{className:"truncate flex items-center gap-1.5",children:r?v.jsxs(v.Fragment,{children:[v.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"}),v.jsxs("span",{className:"font-semibold text-zinc-200",children:[r.name,":"]}),v.jsx("span",{className:"text-zinc-400 truncate",children:r.description})]}):v.jsxs(v.Fragment,{children:[v.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"}),v.jsx("span",{className:"text-zinc-400",children:"Ajuste Manual Personalizado — altere os parâmetros abaixo para simular os efeitos em tempo real."})]})}),r&&v.jsxs("span",{className:"hidden md:inline-block font-mono text-[10px] text-amber-300/90 shrink-0 pl-2",children:[r.settings.focalLength,"mm • f/",r.settings.aperture," • ",r.settings.shutterSpeed,"s • ISO ",r.settings.iso]})]})]})},_g=({diagnostics:i})=>{const{clinicalScore:e,clinicalTitle:t,clinicalFeedback:n,clinicalBadges:r,exposureStatus:s}=i,a=e>=80?"bg-emerald-500/15 text-emerald-300 border-emerald-500/30":e>=50?"bg-amber-500/15 text-amber-300 border-amber-500/30":"bg-rose-500/15 text-rose-300 border-rose-500/30",o=e>=80?"bg-emerald-400":e>=50?"bg-amber-400":"bg-rose-400";return v.jsxs("div",{className:"bg-[#16181f] border border-[#272a36] rounded-xl p-3 flex flex-col gap-2 shadow-sm",children:[v.jsxs("div",{className:"flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap",children:[v.jsxs("div",{className:"flex items-center gap-2.5",children:[v.jsxs("div",{className:`flex items-center gap-1.5 px-2.5 py-1 rounded-md border font-mono text-xs font-bold ${a}`,children:[v.jsx("span",{className:`w-2 h-2 rounded-full ${o}`}),v.jsxs("span",{children:[e,"/100"]}),v.jsx("span",{className:"text-[10px] uppercase tracking-wider font-semibold opacity-80",children:e>=80?"Padrão Clínico":e>=50?"Atenção":"Falha Crítica"})]}),v.jsx("h4",{className:"text-xs font-bold text-zinc-100 truncate",children:t})]}),v.jsxs("div",{className:"text-[11px] font-mono text-zinc-400 shrink-0",children:[v.jsx("span",{className:"text-zinc-500",children:"Exposição: "}),v.jsx("span",{className:`font-semibold ${s==="good"?"text-emerald-400":s==="under"?"text-sky-400":"text-rose-400"}`,children:i.exposureDescription})]})]}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-zinc-300",children:n.slice(0,2).map((l,c)=>v.jsxs("div",{className:"flex items-start gap-1.5 leading-snug",children:[v.jsx("span",{className:"text-amber-400 font-bold shrink-0 mt-0.5",children:"•"}),v.jsx("span",{className:"text-[11px] text-zinc-300",children:l})]},c))}),r.length>0&&v.jsx("div",{className:"flex items-center gap-1.5 flex-wrap pt-1 border-t border-[#232733]",children:r.map((l,c)=>{let u="bg-[#1e222d] text-zinc-300 border-[#2a2e3c]";return l.type==="success"&&(u="bg-emerald-950/40 text-emerald-300 border-emerald-800/40"),l.type==="warning"&&(u="bg-amber-950/40 text-amber-300 border-amber-800/40"),l.type==="danger"&&(u="bg-rose-950/40 text-rose-300 border-rose-800/40"),l.type==="info"&&(u="bg-sky-950/40 text-sky-300 border-sky-800/40"),v.jsxs("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded border ${u} flex items-center gap-1`,children:[l.type==="success"&&v.jsx(cc,{className:"w-2.5 h-2.5 text-emerald-400 shrink-0"}),l.type==="warning"&&v.jsx(Ec,{className:"w-2.5 h-2.5 text-amber-400 shrink-0"}),l.type==="danger"&&v.jsx(ng,{className:"w-2.5 h-2.5 text-rose-400 shrink-0"}),l.type==="info"&&v.jsx(tg,{className:"w-2.5 h-2.5 text-sky-400 shrink-0"}),v.jsx("span",{children:l.text})]},c)})})]})},Pc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAADYCAYAAAA3SZ0tAAAAAXNSR0IArs4c6QAAAHhlWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAAEsAAAAAQAAASwAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAligAwAEAAAAAQAAANgAAAAABt7XHQAAAAlwSFlzAAAuIwAALiMBeKU/dgAAQABJREFUeAHtnQe8HFXZ/xNyUwiEEqpSDBCqNFFAEKQJYgMRAQGpIkWQP70pvUlRRNAAAlKkg/D6ooDwAtIElSJNAqEFQieBJJebcpP8v7/L7s1mM7N3ZnZ2Znb393w+z53ZM6c85ztzZ559zpmz/WfMmHFU//79v96vX7+ZaOEE22bOmjVrEjphnnnm+RADu9Cppe1ktp3oJHQiqs/aKm1GSbvZTke1naH62FpMwARMwARMwARMoGEEOnBc1sRx2bxhLaRQMU5RP2kNmcUxOV2foHKwJqDvo+PQN0r6Jtu36a/Sp1XodOqWM2YxARMwARMwARMwgVQIdOBcKLLT7CLva0hJh7MdgVaL+vkR+hb6MvoC+jw6BqdLTtiUkk6DiSJeFhMwARMwARMwARNIRKAjUanmLKS+LlrSNSu6oIjX6zNnznyGSN4T7D+Bw/UKWw07yuma6ggXFCwm0EQE+B+eB3P1pavR0s39QRFxiwmYgAnMQaCdHKw5Ol7xYQH218C5WoPtLqiGGuVg/Qt9CH2cm/WbbDX8OKVFIn50xWICLU1Akezt0f58eWpIR7lnqN4x6D0NacCVmoAJNDUBO1hzn77BJK1a0t3ZamL9E9yk7+OG+gDO1kt8lrPV5cgWFCwmUEwCIzDrIplWcoS02wi5nkrtYDWCrOs0gSYnYAer7xO4CFm25Ca9JVsNG/4bvRO9F2frNbaTcbQ0lGgxARMoDgGFrfTyS823Y1IwV3M7LSZgAiYwFwE7WHMhqZkwjKOblVSRrQfQ23C0HmSrz52OakHBYgImYAImYAJtTsAOVvILQJGt7UqqtxFvQ/8HZ0tzMhTV8sRXQFhMwARMwARMoB0J2MFK56yvRjXS/dA70GtwtB5nOxFHS5PmLSZgAiZgAiZgAm1EIK6DpTkNWiU9D9FcirLq9Z1KbfQ8i6j9VVTrh+iO6CPon3C07mP7Bo7Wx2wtJmACJmACJmACbUAgroOlSd43o928VZeJU1N6A0jOlNqTvYPQgWh5YdF52ZeWj+m4jultwLLG7SdF6xLZsCm6MfooehOOlt40GoujJYYWEzABEzABEzCBFiYQ1/HQz8z8FO1q8KvP1cjLkav+Y8aMGTBy5MgBZJCTJUdGztX8qNazWhjVYqKLo0uUttpXmvLMV9KhbOWENdpJlJ1fQTdANRH+uoqIln5T0WICJmACJmACJtCCBOI6WEIwkyiMhgqzlMr2Ir8WjTOj/snxkoO1NLocukJpuwxbLUa4IKo8croUKWuEqN5N0A2w6W74XdXV1fXYkCFD3mTfv4PYCOKu0wRMwARMwARyJJDEwWp01Cc1HDgvcsbGl/TFcsU4OYpeLdnd3b1iR0dHeYL6KqQp2qUomJwu5UlbBmHTt6h0I5wrDbVejS3PkfZB2g25PhMwARMwARMwgfwIJHGw8rM2pZZxaLQw6GslvRsnR0N5S6Kro19C10ZXQjVpXVEuDUOmKXLgfoRujl5G+39i+2rJLnYtJmACJmACJmACzUygLR2s6hOGY6NhunElvQuHR/O1VkY1d0oqx2sxVA6X5n2lJRqyPA3dFL2Idh/BlrfZt5iACZiACZiACTQxATtYAScPJ2cyyVrHSj/0fBlbDSNuhm6MKrK1DKoJ82nJ16hoHVTRrKvYjnE0Ky20rscETMAETMAEsiegydeWGgRwdPSjzo+j55JtD/RQtHc+V42icQ9pKPJIdBT6TRwtzQezmIAJmIAJmIAJNCEBO1gxThpO1kdk/zfayIn+G1H/RehBOFkropofZjEBEzABEzABE2giAnawYpwsnB05VjujmgRfLVNJGItqW69ovtfx6DnoRrSrOWEWEzABEzABEzCBJiFgByvGiers7NTipfuHFHmK9FPQO9DX0elovbItFVyM7oCTpbYtJmACJmACJmACTUDAk9wjnqRS9GoHsmvCe7VMI+EihhCvIN+t7G/Ddic+r8m+ln+ox5FdmbrOp66RbDXhXss5VC68SpLFBEzABEzABEygSATqefAXqR9Z2KJJ5/uFNPQf0uVY9cP5GY9ege7Fx7PRx1AtdppYqGsYhY9Dz0DXxtHSzwRZTMAETMAETMAECkrADlaEE4NDo7lXO6KfD8iu6NUonKCPK4/x+R30fNLkaP0e/S+qBU7rkZ0o/Ft0M2xKc5mIemxyWRMwARMwARMwgSoCdrCqgIR81KTzWtErrcQeKDhZozlwLHowejv6FlqPbEDh36Hb4mQtXE9FLmsCJmACJmACJtAYAnaw+uBail4pchQ5elVdJU7WLPQe0uWkadhQE+I/QZOKfrD6N+ju2KehS4sJmIAJmIAJmECBCNjB6vtkJI5eVVeNk6X5WedPnz5dbyJqzlY9P4ujn+05Ez0QJ2spthYTMAETMAETMIGCELCDVeNEpBG9Cqp+0KBBmvh+IPpLVHOzNI8riehHqH+GHo2tn0tSgcuYgAmYgAmYgAmkT8AOVm2mqUWvqpshkvUxKgfrIPReVKvEJxGt9P5T9HicrOWSVOAyJmACJmACJmAC6RKwgxXCs1HRq+rmcLLkXO2LXoW+WX08xucfkfc07Nb8LIsJmIAJmIAJmECOBOxghcNfDGcl0ZuD4VUGH8HJeoMjR6G/QPXW4Qw0iexCoTOwe8UkhV3GBEzABEzABEwgHQJ2sAI4lqNXOD6J3xwMqLZmEm1NRbXG1SHoo2jSNbN2pOxZ9GElthYTMAETMAETMIEcCNjBCoauuVcatgsSrdoeuu5VUIE4aThZd5L/APQOdGKcshV5t2P/TJyskRVp3jUBEzABEzABE8iIgB2sKtDl6BXJq1cd0sdpM2bM0G8OfhxwLLUk6n+GyvSW4XXoBwkr/h7lNCdrRMLyLmYCJmACJmACJpCQgB2sucHVjF4NGDCgYdGrSlNwsrRG1hHoRaj2k4gWSD0RJ2vpJIVdxgRMwARMwARMIBkBO1gV3BS9mjlzppySwOgV6YpeJV1OoaKlaLu0NZmcp6DnopoIn0T2pNAx9G2JJIVdxgRMwARMwARMID4BO1hzMltsnnnmyWXu1ZxmzP6EkzWdT+ehp6Gvzj4Sa08rx2vFd/92YSxszmwCJmACJmACyQjYwSpxU/SKXb2BV4joVeXpxMnSbxleQtqJ6CuVxyLuDyDfkehu9HO+iGWczQRMwARMwARMICEBO1izwWnuVeC6VzglT3Msk7lXs82Zew8n62pSf449SSJZQygrB+3blB84d+1OMQETMAETMAETSIuAHSxI4nDUjF7h2IxCM5t7VevkYsd1qJys12rlCzk2nHQtZrphqc8h2ZxsAiZgAiZgAiZQDwE7WJ/SqxW90pIJuUevKk8yDta16AmkvV6ZHnF/BM7VWeRdJWJ+ZzMBEzABEzABE4hJoO0drAjRq9/hzBQielV5brFJw4WnorF/v5Cy61PuZPruNwsroXrfBEzABEzABFIi0PYOFhxDo1ccK1z0qvK84yhdxmdFo96tTI+4/33y/QQna/6I+Z3NBEzABEzABEwgIoG2drD6il7BsJDRq6pzO4rPF6Djq9L7+qh5Z4exMr0mvestQ4sJmIAJmIAJmEBKBNrawYLhYjgXgW8OcqzQ0avy+SeKNYN9LUR6JaqFSePI/KxMfwoF1oxTyHlNwARMwARMwARqE2hbB0vRK1Zt3xEHJWzdq2aIXvWcXfowlZ2T6c+f2U6rfcrnOrqiysJDQ6UWEzABEzABEzCBFAi0rYMFu1qrtjdF9Kry/ONkfcwq9PpJnIdIn1l5LML+t8mz76uvvqq1siwmYAImYAImYAJ1EmhLB0vRK7jtgK4RwE8RoKaJXlXaj5P1BnoUac9XpkfY75mPNWLEiI0i5HUWEzABEzABEzCBPgjEdbBm9VFfsxzu683BW5ulI9V24mA9TprWyHqn+lgfn7UI6Yk4n5/tI58Pm4AJmIAJmIAJ9EEgroOlt80U7Wha6St6xVt1WrV9QtN2EMOxXw7i+eikmP1QBEtLNwyOWc7ZTcAETMAETMAEKgjEdbAWoOxSFeWbcbdm9Iq36gq1ansdgH9DWU16745Zx0/Iv0HMMs5uAiZgAiZgAiZQQSCug7UIZfcgwtGU6yaVoldaYDNs7lXTR6/K55Yo1ifs68edny6nRdwuTD791qHOtcUETMAETMAETCABgbgOlprYA10uQVtFKKLo1f4hhjxLeqtEr3q6iJP1MkOecrLeD+lzWPLmHNi1WR3psE453QRMwARMwASyIpDEwVoa4/Zuwoev1r2qFb3Sm4NNPfcq6KJhyPMvpP8e1VpZUUXz7A5BR0Yt4HwmYAImYAImYAKzCSRxsFR6d7Spolg4hFr3qm2iV+VTjNOoNz9/hf6jnBZxq/P7/+DmCe8RgTmbCZiACZiACZQJJHWwNNF9n2aJYmGnIjLbo4Fzr1rhzcHyCQ3a4mR9SPrJaNwfhd6lu7t7/aA6nWYCJmACJmACJhBOIKmDpRp/iK4QXnWhjmju1QEhFj3LMNotIcdaJhkn6346cxk6PUanFuzo6DgMB3W+GGWc1QRMwARMwATankA9DpaiWD9qkihWaPSKPrTMm4MRruYLyPNkhHyVWb7Bhy0qE7xvAiZgAiZgAiZQm0A9DpZqVhSr0BOhcQAXx8bQ6BXHWj56RR97hCiWVnc/C530aUqkv4NgeCiqNdAsJmACJmACJmACEQjU62DpZ1U0F6sjQlt5ZXH0ak7yt/NRGllwzDYi89cjF3BGEzABEzABE2hzAvU6WMJX2CgWjl9brXsV5VrGWdKPWZ+Dxvmtwg5YHoQOi9KG85iACZiACZhAuxNIw8FaEog/LmgUK2zdK030vghnY3w7XgD0W/OwrkJnRu0/ZTYk79ei5nc+EzABEzABE2hnAmk4WOK3C7pikUBWRK+0REO16Odj2mbuVXXnS59HsX0l5FhQsoaB94fr0KCDTjMBEzABEzABE5hNIO7cKa0GPgOtfsgqirUvD98jiXR0z64+1z1Fr9YMsED2X4lOx952HvL6EAbXwuB4zlmQExqArt9XSdS6WPcFHXSaCZiACZiACZjApwTiOljjKDYG3SoA4M6k/R59PuBYpkk4DXpzMGzVdjmJ86O7ZmpUQRvDt9Jw6aCI5g0hn15qeKhULmIxZzMBEzABEzCB9iIQ18HqAs9v0A3Q6ujPEqQpinUED9/coli0r2hMWPSKQ/3kJJyGpjU8qjqbVTQHK2r0qtzHrdnRcHDujnTZIG9NwARMwARMoGgE4joZ+l26e9G/hXREUayVQ45llVzrzUHZoD7H7XdWtmfdjjjEdbCGU+YHJUc2a3vdngmYgAmYgAk0BYG4joYexhpiuxANWqxy8ZkzZ+7HwzduZCwVWKWH/g5UtkYqFbqSMAJivHDYQaebgAmYgAmYQLsTiOtgiZfm6zyEBkax5plnnh9wbFU0D1H0ar88Gm6zNlfiB7I3b7M+u7smYAImYAImEJlAkkgTU6z6dxMtUhRLk92r52LJydFcrMOynAjdAtGrKXDTnKi8RNHJeSM2Pg8/kL0TzG/Lc75dRFudzQRMwARMwAQyJ5DEwSob+RAP2Lt4wGpCebXsRMIl6DPVBxr4udmjV1r8czQad05UWkg1+f87aPUSHGH1b8aBz6Evh2VwugmYgAmYgAm0K4HEDpYiF9OnT7+wo6NDUazqHwKWs6NFKQ/JIopVil7tSJvNPPfqv9h/IJrXG5hysG5HN0GjyCJk0u8T/i5KZucxARMwARMwgXYikGQOVi8fnKuH+XBXb0LFDk6PolirVSQ1crfZo1di8110NTmuOelk2r8WjTNMuR3neSBlLCZgAiZgAiZgAhUE6nKw5AhQ1wXoxIo6e3Y5pgiHolgNfQCXoldy5lavtqHJPg/nDcwD6Y9eIshL/krD78RofF3yLhcjv7OagAmYgAmYQFsQqMvBKhFSFOviEFo/JH3LkGNpJeuNxSPTqizPekpvYH47Lxtwit+k7etitL8geTU0azEBEzABEzABE6ggULeDxUNZQ0p/QN+oqLe8q5+k+QlRmfnKCWluqVf274Uuk2a9OdalCeaK+lXPacvSpNtoTG80RpWv5xx1i2qn85mACZiACZhAZgTqdrBKlurtN83fCRJNmtYbZ42QVahU6261kmxEZxod9avF6z8cfKFWhqpjerFgRFWaP5qACZiACZhAWxNIxcGqiGKNDaCpKJaiMtqmJopeMWfpR1S4dGqVFqMirUWVWxSLczmJ9gMXkQ3Bo2jbV0KOOdkETMAETMAE2pJAKg5WidxLbK8Jobgp6WlHsVZjzlKrzv+Rw6LlL3KR7u5uvRk6PWLj/cmX9rmN2LSzmYAJmIAJmEAxCaTmYJWiWFfQzdcCuqo5WAekFcVS9Ir69kJbLXpVRqcolnhpEnnmwvIbT9FoUDQyzJb1sDXPeWNhdjndBEzABEzABHIhkJqDVbJ+DMN2YXOxvkqeLVLqpdbX0tIMrSwb0Lm8olgTaPuRGHC1ovvIGPmd1QRMwARMwARamkCqDpaiWKzufiXEXg2gpiiW5hZV/3ZhQNbwpFL0SnOvlgrP1RJHeqJYEyZMWCjr3nAeZ/FjzvfHaFerwH8pRn5nNQETMAETMIGWJpCqgyVSgwcPfolN2FysNKJYn6f+HdRWG8gGCy20kH6OJnPhx5wfpdHOGA1/OUZeZzUBEzABEzCBliaQuoOl6AfErkKDolha50lzixLN16HcAMrvjbZ69Iou9ogiQ+KVeRSLdnX+4vyQ89rYObjHav8xARMwARMwgTYnkLqDVeI5hu0fQ9hqnaevhRzrK1lzr1r1zcGwvq/PgW+EHWxUOo5yF3U/EbV+nKvlyLtE1PzOZwImYAImYAKtTKAhDlZFFOuVAHiJVisvRa/2ob7PBtTZykmKYmnu2sI5dFLDhJGEc66o5MqRMjuTCZiACZiACbQ4gYY4WCVmGl66GtWQYbUoihX3DTnNvfp+dUVt8jmXKBZstar79IiMdS3pHFlMwARMwARMoO0JNMzBKkWx5GAFRbHKq5VHWuepFL3Sm4PtFr0qX6Ca25RHFEtDvR+WjYiw1c/mWEzABEzABEyg7Qk0zMEqkZVzdRUaFMXakPRIUSyWftCDu13eHKSrgbIeqd8KPNK4RK2HFeQgh7W4Es5wo6+psLadbgImYAImYAKFIdDQh2FFFCvobbRIUSxFrwYOHKjo1WcKQy0fQxTF2g8ew7NqnvM3g7b+G6O9Zchb1zpnMdpyVhMwARMwARMoLIGGOlilXr/GVouPBkWxNmBBy61L+cI2a3Jg+7CDbZa+Lv3NOor1fAzGi5F38Rj5ndUETMAETMAEWpJAwx2sUhRLSzZoPk+1zMuClorKBK7zRHoHP72jNwfbPXpV5pZ5FIuGXyw3HmGrqGS7rFEWAYezmIAJmIAJtCuBhjtYJbCvs70CjRvFWmOeeeb5XqkObz4loCjWdzKEMZa2or5J2J+I5LIZ2uamTMAETMAETKCQBDqysEpRrK6urmuHDBmyO+1Vr5U0hCiW3pC7k3wfle1R9Ir9H6NLltO87SEwiL/7wud2eH2YAZN3aEPnRcN/fQrn0g5Wn5ScwQSKTYD7i6LRIzKw8iPuY29n0E4hmoDr/BiiuaqSafQ9aH7yp0fr+Es7WvS5r7UT38/oGVJHT5IXhYFGxvLyHxS8ejsTB0uIcK4UxdJcrNPR/millNd5uq4iUXOvHL2qAFKxqx9WVhTrioq0Ru1+TMUfoJEcLIZ0l26UIa7XBEwgMwJyAk7MoLW/08aoDNopShMrYchRMoZ75XScgPNwciL/YkaMTnybvFv2kX807Z9F+5/0ka/pDtMvTafZF10nJ+P1Bv6ZmTlYnET6POtadA/254piYUw5ijWBPJp7tS/Dg/LCLXMTUBRLc9cUxZLz00iZRuWKYq0apRHs8Xy5KKCcxwSKTWARzNspAxO7aKOdHCyt5djDleeb8A7mPn4I98239CFFkWPR1/nTCIgiaFel2G5RqvomhhyC5vE8mkq7v0In9JxhdjIRLqLX0StobGZAg+uTVn5Dbi0uvu8G5HHSbALrMN9pm9kfG7PH+dK8uXej1k7+RblhVEcooxZ3PhMwgWIQCJov2wjLZjSi0gLXWc1V9/ADuGdqSDZNicJVTvQRnZ2dGhFpGYGlfrP4WDQP50ocb0Mv4Fk4KVMHSy0j16JBb6b1hPSAswTH90a1tYQTGMR8J83FWjQ8S2pHFMGKKhr3Hhg1s/OZgAmYQBsTKA9lpT0dptqRC0O8xtChQ4/iOdISy+vQD807OxLNy2n8N21r2PVtAc/cwaLhsbT7BzQoirUe6Qejjl4BIYIoDLxthHz1Znk/RgULkDftb2MxmndWEzABE2gqAnJu5OR8OSerNZ/3x7Tf1F+MsX8A/dgN/T6axyjKm7R7Jj7Ok2x7JHMHq9TudWxHl/YrN/Lm90fzCu1V2tIM+/qHUBQr0gT0OjoU523FobRjB6sO2C5qAibQdgTWpMfHci9fJoeeD6HN/Zly8vUc2k6zya9S2f9D50+z0oh16UWB36K3V+bPxcHCw3sDIy5Hg6JYw0nPw/us5NJM+1/A2EZH/D6KAUT/rHawYgBzVhMwAROAwDfQn+JkzVcvDV4Si1vF0kw5OYa2V4pbsAj5sXsEdhyHLp+DPRqOvRG9FN9GL4X1Si4OVqn169n+t9cS7yQlUI5iNXIMfXIM42SPHawYwJzVBEzABCCge+fe6E44DPUGGaLOwaoEvwEfDqNtTfNoGsHeoTiUP8XgTXMy+mHaPQfnaq43+nNzsDBG45VhUaycODVts2theSOjWJ0xyGgc3A5WDGDOagImYAIlAj1v9rG/cT1EeAs/iYMlf+AH0hQcvHrMj1t2e/q7B4UyW3aqwsBX2T8df+b5irTe3dwcrJIFCqsFGtZroXeiEBjIP4TmYjUqijUlihGlPLqmtE6XxQRMwARMID6BVSlyHPfz5eMXrbvEgtRwGLph3TVlUAGM9KKX3hqUY5q1TCRy9msavSes4VwdrFIU6zKMiz1gHNahdk2HpaJY32tE/6cj1BvnHNnBasSJcJ0mYALtQmALOnoIDkQew3Ur07bmYy1VZNiTJ09eAhuPxcY1crBzBm1eQ+TsKp693WHt5+pglYy6ie1zYQY6PTIBhUf34YJLff2wgQMHhl5AIdYV4boKMc3JJmACJlB4Arqf74buyj09yf00yRBhJZSt+KAFUPVmf+EEuwbON998++DcfDsn4+6j3V/Rfs0XwJKcuFT7g4HjqFBzseQRWuojoCjWdvVVEVha0as4ESzNw7KYgAmYgAkkJ7AQRQ9FN09QRb0OlkYh9kG1RlYRZWuM2h/VW+tZi5aY0ryrMX01nLuDVTJQc7EcxerrbPV9XN96tGBcXr8g3reFzmECJmACJhCVwIpk/Bn39JWiFkgxn0ZDjqbt1VOss+6qsGcVKjkGXbruyuJXMJ4i56IPRClaCAcLT/AtjNVcLEexopy12nm0YF2qc7GYgqXrJPK10t3dHSfaVbs3PmoCJmAC7U3gq3T/cBwL/QxMVKk3glVuRz85cyRtDy8n5LnFDk3CV1RPS0pkLZqLfDl6PT5LpGdc5IdmBj3RXKxnM2in1Zsoz8X6TFodZQ5WrCG/jo4OO8ppwXc9JmAC7U5Az+md0T1xMHR/jyKRHIAoFZFne3R32o71HIhYd+RstC8Ou6BiUe86YZHbrch4B/v6EefI60IWxsHC6LcxXlGsuBOqK/rv3RIBRbH0T5GWaDw+zrUyx2q2aRnhekzABEygTQkMo98Ho1vl0H+tLK+2N8mh7comv8IHRa/EImt5mgb1O4Nj4zQc56EZp96keR3FSkpuznL6prFPZ2fnZ+dMTvwpzpsk+uZkBysxahc0ARMwgUACI0jV+lifDzw6Z2JaQ4TlWpdjR7+VqG3mQrvL0OixqOakZS3v8juNZ+NcPRq34UI5WHTgHTpwKeooVvQz+RBZgxYCXX3o0KHfj15NzZz6BhNVNDzYFTWz85mACZiACUQmsCE5j8DhWDRyifQybkZVB9F2nOdB3a3Tnn4Z5EB0y7ori1+Bnq0X8zuNt8QvGm/YJ0n9ScqoI88kKdiGZTSsegr6REDfFcX6ERdnGlGsOCFZTQQMcvgCTHSSCZiACZhADAKae7QjqjUPNXUjTNKOYKkdPVP2JJqT6ktUYR2oSN+G/b3RqPPPKorWvftnariI4E+iZ1qhIlhCoSgWy887ihXturiZbP/HBa83G+TYVItCyTtUJyb4rPVYooouxE+iZnY+EzABEzCBWASGklsRnW/GKpVO5uFEc/RW4TrpVFe7FtrR2o7HoIvVzpn+Udr+N7Vq3pUCGYmkcA6WesHy84pi/SdRj9qnkJa2uJSTP5MLXl52rSjWUvVgweGN8ztPcq48RFgPcJc1ARMwgdoEluaw5mPJAcla1qBB/ZROo377tqc/1K9h0KPQtXsSsv3zJs/WM9Cn6mm2kA4WnXqXTl0KYM/FCj+7il71LM4Kr/fZvxgNmly+Gul1RbFweON8e5hEe3awgGAxARMwgQYSWJe65egs2cA2wqr+Dgc0TDkwLEM96dTbwRd7DQtuV089Cct2Uu5C9C8Jy/cWK6SDVbLuT2wdxeo9VXPslKNXletN/S85akWx9I0nkXChx/kH/ohGgoYrE7XtQiZgAiZgAqEEvsuRfXFIsv7JGLV3ANqoZSO24Iu9hkE1wT1L0dy1m9DLCFwEBSxi2VJYB4vOvYdeQm/8sJ77lOqnhZ6vTIbVB3yuFcXasTJ/1H3+cftzoS8RNT/53seWRkywjGGCs5qACZhAWxDocXSYh7ttVW+zuAfrS7siaCtVtV3XR+obSQXHocvWVVGywg9T7JzS8zRZDRWlCutglWy8ja2jWBUnjN1x6OVcAJXRq3IORbE0Ma9adJ735sKNHcUaM2bMIMrGiWAlnhBYbbQ/m4AJmIAJ9ElgSebhytH5Up8508/wFao8lLYXSKNq6tEb64egG6VRX8w6XiG/fsR5juBFzDrmyJ7Ha49zGFDrAx19D+CKYmkiX0PGemu1X8RjDNfdSETpuSDb4PVhiZf+0eQYVcqqfPgBem5lYl/7I0eOXJA8mmwYVd6MmjGtfPRZry4P/eCDD+ZZdNFFs/jmlpbpRa6nP871tBVXXHFqkY20bSZgAj0E1uavJr0fzHMgy3uw7r27oE/QtobVtNB0Iindx3ei8K5o1sGfibR5Pno3mpoU2sEq9VJRrB+h66fW6yatiAtwHM6VolehF/GkSZNuHzZs2L/oor5ZVEo5inUD5d+oPNDH/uIcl5MVVeLUHbXOvvJpnP4gnKv5+8ro49EJ4FzfT+7/i17COU3ABHIk8C3afoHnxMlsg0Y4GmWaoleHo/ri/0jSRrq7u79MJO5wnk8LJa0jYTmx+iN6JW2nyq3wDhYdfp8LZhSdl4ce5ydbyN5aAosb6FHN8OUCCyygKJbmYimKVc1rZdJ2Rs9Go8oIMlZHw8LKzuKfZGzYwQamq58/QRen7w1spn2q5lpTZ7tRO1jtc9rd0+YmoPv0PmjQy06N7pmeLRqmPIB7h6axxJJPPvlkqY6OjmMotEqsgulkvpdqzsPuj9OpbnYthXewSqZqbpEunDzGZWfTynfvTZr/AxdBaPSqwjy9XqooVjUvRbH24p/geuqJ5AgxJLkSUbOKqmvudjHZMvY/V80aox2UN6DJnkPoV7QSzhWFgIflo1ByHhMoDoHFMEW/GfhGDvfCrXle7E/bmsc0JSoS8usL8n7o1lHLpJjvBYICZwwcOHBMinX2VhX5ydlbIocdTtZ4mlVUpp3ng1xP/2tGr8qnpg9eK5FPY+aRBOdKc7ciCf8oHw4ePPjdSJnTz+TQlZmmT8A1mkDzEViHZ4CmS7ycsekDeV78mDY1VBlHvs2zY18KRB0piVN3aF7alF/xSyJnD4RmqvNAUzhYpT4qKvPPOvvbrMU1rylq9KrcR/F6rPyhYqtzvgcX1+cq0gJ3yTOAA5EdLP6px5J/UmBlTjQBEzABE8iKwIs09Gt0clYNltrRkj5H8+xYPUq7pXxH8+xQuSxlOm1eToMazYkyKpTItqZxsIAwgR5ehLZjFOsG+v1CnDNc4qWoX1CoVuPlu3Bx9zWetjD5lo/R7uhGXqwx7HBWEzABE2hnAtPo/NWo1kxsmAMRAnhdhgqP4PkyPOR4T3Lp+BF8WLdWvgYdu4N6L+B51VAHtGkcrBJkQQmKyjToHBSiWkWFar45WMPKMF5yrPZAl61RVodWQBftI0/l4ecqP3jfBEzABEwgFwIDcB40afsc9KGsLWCo8Pu0uRtOlEZB5hKl44TpGaR8WcvTNKgfcdaztaHSVA4WQMpRrKCoTENB5Vi55l6NTtJ+H7w0F2tXLvTQKBb/AHpzM+pEZ31LeiaJnS5jAiZgAiaQPgGeARr5OB3Nej7WfLR5MLoJGiSb4oT9lAPKl6W8y4tYZ8Pl0SwabSoHqwQkLCqTBa+s25CHHXfuVbWNd5Lwj+pEPsux2hMNnYvFP8B6HI8qmnulcX+LCZiACZhAcQhoqZXz0NSXIeiji8tzXEs3jKjMx+fl+Hwsqm2WosDMxay1dUtWjTadg4Xn+RFwRqHtEMW6ln7W5bSUeIXNxRpJ/T8MimKRNi/HvoRGlVfJ+E7UzM5nAiZgAibQeAI8A2ZMmDDhj7R0Nff1GY1vcY4WNufTT2l3qFLZliNbm+pzxvJn2rsIHpn5Dk3nYJVOyF1sg6IyGZ+vhjb3OrVfwcWQxgTFO7mwg3gpiqVx8BFotYwgQd9AospT2Do1ambnMwETMAETyIbA8OHDFb3SYpr3ZNNibyuag6VnzHY8g+RvbI/ujgbOzSK9UfIvKta8q7cb1UBQvU3pYAFJUayLOWGZeaJB8BqYNou6645ele2D18eoon5d5bSK7QrsazKinK1KWZ8PkX96hvlamYxpVxrofRMwARMwgWgEeAa8Qs4z0P9GK5FarkWo6Uh059K25tuFqbU6uyIt0i3n6qnZSdnsNaWDVUJzJ8AeyQZT5q28QYtX0j85WmnJ36goLIqlbxS90aqSs7VZjIanMF/r3zHyO6sJmIAJmED2BB6kyXPQDzJuei3aOwGNtD5WirZ1UteF6F9SrDNyVU3rYOF8KOR5ERoUlYkMoKAZU4telftX4jUqhJecq8oo1oJ83rBcNsJ2LHleipDPWUzABEzABHIiUPrSrrWxLkenZWzGShm3pwDFTehl9DvrvvZ0tWkdrNKJCovKlA435UbOypWlf4S0OyBeQWuiaHhwN1TDhf34baYvsFlW+xHln9g7MWJeZzMBEzABE8iJAPfqzq6uLkV17sjJhKyafZiGzqG/WUfrevvX1A4W4BTFCovK9HayyXYUvRrdCJtLTpCifp8E1L88abtreJDfZtqK/UEBeYKS9C3hvqADTjMBEzABEygegaFDh2oaitbHynxeUkY0XlH/eOZF+v3eRtnU1A5WCYqiMvJUW0EaGb0q87kHJyqM165kUvRqi3LmCFutfxVWX4TizmICJmACJpA1AZwPvVl3Ftpqy+toNOV89G40V2l6B6siKtMKc7EaFr0qX2XixRt/ivoFRbGWI/1YdOVy/gjbZ8jzWoR8zmICJmACJlAsArdhjkY1WuWNfK3zpTW/ruRZl/WaXzQ7pyRxsLrnrKIQn+Sp3l8IS5Ib8TpFdVGk+eZgoDWsZKu1UB4IOKi5WNuiCwQcC0v6GzZ7/aswOk43ARMwgYIS4N4tx0oO1q0FNTGuWfdSQOt9afpQ7tIR04KFyf9zhphy9wwD7NbrmM0sZ3FRvJBFB2hnEufweNr6MrpQVZsDqz7X+qiL+IZaGXzMBEzABEyguAR4HrzL8+BQLByCbldcS/u0TC9w7Ud/Xu0zZ0YZ4jpYen3/gIxsi9wMF0c/oMbtS+T6M8j4NG3cnEE7lU08zVDhn1i/au/KxJj7/ya/JhNaTMAETMAEmpRAyck6AfNHoms0WzfwAcbRh58VybkSw7hOyQDKLFY0+EAtmklx7dHvI70ft1A9+WlvGhflb6lD31gWTlIXDtr/MNw4PUlZlzEBEzABEygUAb1x93P0D2jWq63XA2IKz7MTqaBwvyaSZA5WPSBcdm4CmiSedfSqbMWz7CT6ZXGcs/FEv1p9HZUyJ29NwARMoKUJ4KTMpIOaz3w2WsRpQGH8L+bAzQoahGXIK90OVl7kZ7c7igsj0+hVuenSBak3CseX06JuKXsfeV+Lmt/5TMAETMAEik2A+7rexr8Mva7YlvZaJ4fwXOz+uDelQDt2sHI8GUSBnpk8eXKiCFKKZiuKFTeCpm86N3BRF+WNUo0RD06Riav6lICmBFhMwATaiAD39Q/o7qmo1skqsryMcZp39WZRjYw7B2sCHbkULcqDNZArc4P6M3zVT9vADBkkltqfwXZrmlsnoMlZXBijhg0b9l7AscySsEFzsfStJY68ROZ74xRocF6FhvVNZliD22mb6rkmuDT6v9g2HXZHTcAEKgnoHn8c+kd0icoDBdmfjB2alP9kQewJNCOug6Uw3HmoIhiFFTk3SI+TlaeR06ZNm3fIkCHfC7Ehz7lXvSZ1dnZ+lg/f7E2ItqOIV+xhxWhVJ8qlJTp0M4h7PSdqrB0K4Vypm/omazEBE2gzAvz/8x1r1oN0+zT0l2jUn07LitRvaOjP2FnoYE/cB5I6M55OeWHJCJcRF+iPyLZcSNbM3xwMsoPfpNqF9OWDjoWkKYp5vf4BQ45nnowtcvjHZN6wGzQBEzCBFiWg5zzPsGvo3urofgXq5v9gywXYpyhWoSXuHCx9rY1bptAAGmUcF6Zec/0JGjQ36GnSFQXKVbBxSQyQEzgghiF3knd0jPzOagImYAIm0IQEcGL0hVq/V1iUKSH/wZYTsKspfj/RzlLjLnoNDcrzD5JCRK8wbA90ZJCBIWmKXF7OxT095LiTTcAETMAEWogA9/tX6c7VaBGmBv0JO55rFrx2sBpwpogMLUy1WvF+rnFrjhVi7hV2LIt9+6CRh4kp8yD5H0EtJmACJmACbUCA+75+Tm07tAj+gl4aW6pZsBcBWLOwimPn9mQOjF7xbSC3da+qOnAA/zjLV6XV+jgD2xV5+6RWJh8zARNoCQJFiFa0BMicOpHKQqE33nijpo8chX4tp35UN/tFEk7i2TVv9YEifraDlfJZ4cSHRq9oStGrvNe96oeNa2PHHjhLcc6/Ild/Qy0mYAKtT0DTALJwsuLcg1qBelZLB01LA9YOO+ywE/X8GB2aRn0p1KFRoe1Zgknzmwsv7XZxZ3FCQqNXNK7o1XtZGBHWBs7VQI4djmqCe1SZgfwO2ydFLeB8JmACTU2gm3tFFm8KR56i0NQ0Zxuv+28WUreDxen/IoYejy6ahcEx2liApZgOwz4NFxZa7GCleHo44YWPXtHdb6LboHG+ST3Ijzr/NUVUrsoETKDYBD7hC1UWy/HMX2wMqVs3X+o1BldY15dhnmWLU+0Z6MrB1eee+lksOG3KlCkr5W5JDQPsYNWAk+BQrTcHR1FfLr85WO5H6Z/mWD4vUE6LsNU3ofO52U6MkNdZTMAEWoOA5lpm4WDpS2nbyPTp07OKBml5hUTCc0JRtp+hm6Bxvognaq+OQmsPHjz4VOwt7C942MGq4+xWFuUk60ahcWGNEVfLMyTcgpOSRci9uu3KzwfxYZ3KhAj7fyPPPRHyOYsJmEDrENCvI2SxkOMS3DuD1gpsHZIVPRk4cGBWb8DV80sbe2LybmjRz4sm4H8L1XBhIR1BO1icnZQkNHrFhLzc173iAvwq/dwXjTMHYGJ3d7d+qTyLG21Kp8HVmIAJpECgk3tGPQ/pqCZoLugiUTO3QL4VMuiDvsgnmuvLOd+YshrlaJbIooZctSSSnr+FEztYKZwSLsqac6+YkHczzeQWvcK+4bR/Ahr3Rzuv6+joeCwFRK7CBEygiQjwpUrLsrydgcmarjAig3Zyb4L78BCMWDEDQzS0G3ulc+xbhnKno8tlYGOaTei5dtLUqVPXTLPSNOqyg5UGxU+95zVCqrqY9FznXtH+IehGIfYFJvPP9joHNPdqSmAGJ5qACbQ6gbEZdFDDPF/KoJ3cm8ABWBojRmRgiOZffRCnHTl/jLScRJkvxylXoLyrDRo06Az6oWBCYcQOVp2nghNaM3pF9TfhpOQZvfoGNuyHxhlPn4XNv6bMi6jFBEygPQmMzqjbGpZqeWFC9rp0UkNajZY3aeDjmI0cwEjL9ykTZwpJzCYaml2+zOboMTyT5bQXQuxg1X8aNPZbyOgVF5pCvSejeuU2jtxH5qtxsmbEKeS8JmACLUUgKwdrA+5VcacvNCNordvUPwPDX4pz74b917HpcFTDtc0sWt19b3TXonTCDlYdZ+Kjjz4qbPSKf5p5SyHfL8Ts4kfkP51/0A9jlnN2EzCB1iKgCHYWL7gsyULGm7QWujl7IwcS3XTO1IZ9eipqzdg0krynoVm93RjVtKT59MLE8dOmTVs/aQVplrODVQfNBRdccDuKB0avcG4u4Viec68OIuQr+2KtlIzdoyjzMGoxARNobwJv0P2xGSBgHeMBu/CwL8zQTgP6/HW+tGbhxGg6ypNR7Ie3FnmVc7V2lPxNlGcFlsPQfKw4v1bSkO7ZwUqIlZO3EEUD173i2LM4NzfyD5XL3Cva3wbbDkWHxezeI9j9W+zWWygWEzCBNibAfUAvuESOhtSJShGsteqso5DFuR/r7cE90SwcyPG08xwaRfSM+BYa60t4lIpzzqNh2K+gJ8A+aF3KzMyzg5UcdejcK25Mub05yAWlbyOnop+J2TX9Y56E7eNilnN2EzCB1iXwYEZd0xfW/bl/ZTFHKaMu9TazBXtZDVk9TVt9jpzAWaMbB6KKYrWi6KWunRmR2SfPztnBSkCfizM0ekV1z6K5RK+wSyHos9HV0bjyawpkdTONa5vzm4AJ5ENA0wW6MmpaX1qzckQy6RL35Plo6BB0aCYN9uv3d74kd9dqC5vWQE8hzxK18rXAsYUYkTmKvm6aV1/sYCUjHxq9orpcoldcRHoD5ExUK7bHPa9/kd38Y3rNK0BYTMAEegm8xN7zvZ8au6MJykdzL9PbYK0iO9MRDVdlIdNp5P9qNQTb4Rw/jXv9arXyNeDYJKJJv6TeLF6aqDT/c3zQfCxtM5e4D+LMDSxag5yowkWvsEnjzD9Hv4vGWe9KeMegJ/IP954+WEzABEygTKD0peuu8ucMtlvSxh4ZtNPwJrgvr0wjR6BZOYwvjh8/XkOEgYI9A3ByjuagGGf97B9FNEkOll7+ylq+RIMn0/+szkNv/7KG3NtwE+8UKnrFRaNzeBi6Nxp3Urt+0PWk+++//z9sLSZgAiYQREAR7mlBBxqQpiG1I7ivrduAujOrEvvVj5PQFTNrtF+/uxZZZJGJNdrbGSdHz4msHY37aPM3OOtvd3V1aSrK32vY2IhDA6lUz+2DGlF5zTpZf+QKLoaoMoaMWZ+cmvZneZC+L4T+MwTWM6THXdCzbvNp8wD07RCb+ko+jQytOsmxbrauoHkJcF2vg87s6x8gheNXNy+laJbDaCj6aAqsolah83Y3GvdFnWgdyiAXtv8MnYRmJV00tGFY1zi2Hjo6K2Mq2nmT/Y0q7dJn9K2KPFntqs1vVdrS6H1HsOIRlhcc9ipx5nOvuFgUSj8WTbLexy2Uu5BvFVmPidOsxQRMoFkIcI/4BFtvytBevUm4MXo697i4UfkMzQxuCpt344iiJVl+eX2c9gLXv8IePR9OR7OMpvWjXU22PwN9DK2Uf/JB6TqepchhPwW7NHSbidjBioiZk6K5V/ujQetqPEt6pm8OYs8utHkSugwaSyj7LwqcwI0z9i+ux2rImU3ABFqFwK3cN97NsDOaS/p9NJe5M0n7CSMtf3AymuRLb9Jm+zG36hru53O97Yk95fm5clgzXQIDe66lzevYavJ9r/BZw83XoDqetShAopEbvRTWcLGDFR1xYaJXXBw7Yfap6Ijo5vfmHMsFromOL/SmeMcETMAEahN4nfvGbbWzpH5U0StF6eVkZRkNStQRbJRzdQa6XKIKkhd6mblVYedmL6rVl/G4Lz8lt+bTkk+x0U+uTQiqqJQuVsqXpQygsW+gh3O+Gu5w2sGKcGo5EQuRrRDRK2zRP4suzOUjmF6d5SMSjkEf5gKfWX3Qn03ABEwgiAD3ixmkX4ZOCjrewLTh1L03qlftF21gO3VVjW27UcEv0FXqqihZYUWC5hqNwKZNSNf9fuFk1SYu9TElT0S1xEeonHzyyTqufMqfpegFBD3PFSFtrHiSe998u7u79+ZinYoGyUEkNtwTlpXYsQdtvRxkRIS0KeQ5BNXFZTGBlibAde5J7imfYZgORq9G85AJPKuupeE8HJhQktijFwCORF9B85DXaXSuL9ukLYs+lIdBtHkiGullOOUr5WeTuTzHj0KvHXpyUzjgCFYfEDnlC/FDpPJ2BwVkzWTuFTb0Rw/AjpOwYa5/pgC7qpMUrfolehXfRLU0g8UETMAEYhHg3jGVAheiWUccZKdW5d6W7cXcC7dRQt6CHZosfR7bw9hmPSxY7v4V7Lxe/qAt9si5OQVdT58zlr/S3kVcK3PNBwuyo5TvIo5pKZCsZRV+FPq0iRMnNiwyagerj1PKt6Zac68uofj7fVRR12H+WeTYHYHqbcERaGxhAuQlnZ2dF3Ax6/cGLSZgAiaQlIDmzFyftHCd5RQt+gp1nMtWE5VH1FlfouK0q6iLhgR/j+7MfXXJRBXVX2j0lClTLqd9Dd9WyoF82A7V+k9Zyqs0pkWrY70MUcp/AmVVPkuR/7PFsGHDjuV8am5W+uIhwnCmQF8QzW3dK9peAD0TBynpOlcUn3UVukx4L33EBFqPANe8hwgbdFphuyqqoak85X0avxfdB12sQV2do1raGYhugWrtSA0JdqN5yQwa1hqIcwRJ+PwNdByatWgKyl5oxxzQIn5QOXR3VOt5ZS0f0OBeEU2NlS0RjFgtNHfm3KJXnPClQacJgNvh4es3upLIzRTSN4o3khR2GRMwgT4JtOPLIi9C5VfouWhezxAN62yMroBuz/3ydrZ3oS9zv5vFNjWh7oWpTJEzDU1q0cxl0bznst6HDdfT197rDztXIu1U9LNo1nI5Dd6CPYnWtlI57L+NOjSsqQhclqLn63G0/wJ2/CPNhvP650izDw2pC9gLUvEBaNDcq+dIv4GTkeo/crkjtK2Jdyejm6FJF9rTxfozbHyVrcUETKAxBBTl1gKO/RtTfTFrnT59+mPMX9F9cPGShYmHWODHbSoxPs030v1STs9W6D+o72G2uu+9R73T2MYW6lBUTD+IvAG6Iar5Vp9Bk96PKZqaaKrHqfStdwkE7B2G6kecxSJreZQGz6btifU0rPL04Rzq+AIq5lmKHPXTmUrzw/nmm++ttBq2gxVOslb06mKKvR9eNPkRLrDvUPo4VBfZ4IQ1/Zlyx3LBvpiwvIuZgAlEI6AoyrXRsrZOLpwrfblcCn0CvZQ3nN/p6OjQnJ/YnhL3KYrVJapAQ2WKnnyCygHRWn8Lcz/VPfA1dBz6IToZnYpq3pLK6Qv0UFRRKs2l+hyqh62cZjlUipTpmPIVRS7EEDk1PUIf1Y/D4PhNtokd3U9ri/33A0qcgL4eu2RAAfqgoeefc0jz/MrOe0DO1JPE8CtDhw49gfYPxo5pabRgByuAIoAzj17Rpr6J7YcqajYSnWNsnc9RRZGr47hAXohawPlMwAQSExhOSWk7ipysddAf4lz9hu39aJ6ih2SPMrd4Zd661rBeZ0k1t2ca98UpfJ6OysHSPVbPwCEcG8SxIezL2dLwn7ZFfD7ejV2/w1Y5iWXZnp2foLI7S9HwpCJOD2CProW05BHmHZ/FW6NnU2GWDqOcaC3i/SwqJ7ZuKeIFVHenUqjge9SxVkg9qUev+OdejgvqyNJryJ8NaTdK8s1Tp079+ZAhQ0ZHyew8JmACJlAHATkzivBshepLoaIOv+dh+w7bXIX7qR74cpKkGu7rh13aSOQYlKXHIas4Vk4v4nYsRh2Pre+WjePZsSb7J6FZRnt6mqftW7FFbzFWOns9x+r5o/qo+0rqWA+Vw5OlLERjR9H+89hxb70NJ42S1NtuYcsDNtPoFXMZtgbGJZzMXdnW41xdRflj7FwV9tKyYSbQqgQU+VkNPQi9hHuo7mlFFj33ytrrdRXZYGzT0OeJqIZkewTOipyega76aUqmf0fzzDoZ1RBh6kK9Gs49BdU8v6xlGRrUD40vV2/DusgscxLIJHqlfw70GELr59H8JlxQC8xpRuRP+jY2CtXbgi9HLuWMJmACJpAuAUVRvo7+mnvbKehS6Vbf1rXpOaG39DS8qcVENXR2LLo5mvVzXMOuJ6DPo40UTXNRO1n/PJP69CVU17AioIkl6xOT2NAsCgIzk+gV7ehVXzlFh6CroJocmkQ0n+Csrq6uM/nHey1JBS5jAiZgAikS0DyWlVHNJdXk92243zVLlChFDKlWdTW1Xcg9vtLR+CFpe6HzptpStMouIttfsUfz2Bom1K/gwV1oKvOhYhqq6VPbogfHLDdHds/BqsChVduZGLlWRVLl7sV8qOvNQW40mguwJ7obqjkL9fxzjKe8wsN/5M2Hd9laTMAETKAoBDQ3awvup8uz3YB73ygemGOLYlwT2fFXbNXoxDtlm2G5Pvt6007rN2Ut99PgedgzOYuGaaeT/uoFCkWUtsyizYo2tCTHwXxJeI6Rpv+tSI+86whWCRUncUFuBvvzUd/A5hCOKRR6Iyc70ZsSlB/ASfomdfwePQxdA63HuXqV8oeif8AmO1eAsJiACRSOgCLzK6E/Ri/jPvg93QsLZ2VxDXoA047hHq/7fY+wTtNn2NEX6xU+Tcn071u0pkn247JslfbkXB6P5uGgfwa/4BReHls1SZ/tYM2mth27gYu0cYIVEn1vdtboe9xQVif32ZykX7HdGl0yeunAnI+SegCq8XhFsSwmYAImUGQCirRsip4l5Z64PFtLbQL/4PDhaO8kb7gN4iUmzUnSFJOsh127afNM9J9oHvIEjZ6GprI+VcwOrDFo0CD99qWmEMUSO1jgKoGT0zJX9Iq0RNEr6lwKPZLyl6F7o5qXMBitR26ksN7UuQ/nShMNLSZgAibQDAQ0HUXTInQvVDRrJ1QRLsvcBB4hSSMdT3Cf1zyksvyYpXx+wIeg51Q5T6O211LxNdiTh4OjJTY0uV/Pvysb1cEa9SrqquDIEVyzsXwmXfSWT395PDB6BZxY0StOgOZZfRfdEf08qohVvd82JlHHb9FL0Ve42BINVVLWYgImYAJ5EtDq6htzD1sWIzZkX4tmjs7ToIK1fS/2HI0+CZde5wpOm5GmL+wLoVnLf2jwDOyZkHXDle3R/sdw+AVpmie9XuWxDPaH0sZ+6LPoDVHba3sHixOmsF+t6NVNnNg+HRrqkWP1LXR7dE1Ua1qlwXc0k+81xPgX7HiXOi0mYAIm0LQEuI8pIrA8uju6DvfOS9jqt11ziY7QdlHkVgw5CX0WFpXO1QjSTkc/h2YtH9PgCehLWTcc0p7mo8mea1ANPWcpesafyPX6IufnySgNp+EARGmnyHkUbQqLXunNwZpODbCXJo8cq++gmm+lSYhphXD/TF2/wrl6nBOayVsbtGcxARMwgSwIKBqzAbqUttxLtRSBpmS0m2i5A41OnIu+DIPeL/QwUeTkZFRv0eUheoPvHmzqdfjyMKLcptggf+ezWMnpjDVkV66njq2m+pyBDbtjS5+rCrS1gwUkRa9+ggY5RKFzryinIT85U3KstkRXRNLc7ekAAAheSURBVJdAg+ohObboxGlo8mpUQ4L6B7SYgAmYQKsRUDRrOXRX9AvcW3/P9jrueV1s20H0otIv0avp8xsBHT6INL2ANTDgWKOT7qCB32LXJ41uKE792DOF60QOqYYJxSZLkUO3KXosNhyFLd21Gm9rB4uht+8SHYocvQLocGDqG9dW6EaohgEVNtRNIhWhjYc4aedRmbbvpVKpKzEBEzCBYhNYAPP0wNQIwJe5D+rBrrk/rSzP0Lkz0bvp6wfVHYWBvsAfgmo9pqzlNRrU+ls1R3CyNqrcnnjB5yQ+r4YqqpSlDKGxPfAfnmOrl9hCpW0dLE5OreiVJrJdy0kk26x5+b3ANXDENiNNTtVKqKJVKp+m6JvMZbR5FdsxbKekWbnrMgETMIGCE1B0QPOMfoCuxb33crZ/5F7YybaVRCMSN6AXoE/Tv7kiRPR9ZfQ0jsnhzFqm0uCp6JNZNxyzPTk4J6FycjSUmqUMxyc4jnP0X87RI2ENt62DBZBtgbM2cKrZzOCX2K/lddhlOb4LBzcYOHCgvOTFUUWw0hoGpKpPhXY0xj2KT4+wfaec7q0JmIAJtCEBRWzWRcvRLM3NerxFOIyhH7rX34q+Tr/mmtvE80Bf3k/n2Bps85A/0OjNtF9z+CsPwyrbxL4ZsLqdNPE8vPJYRvsa2tZ8rF2xZVxQm23pYJUu4AOBEuQszcS5+gawdkIXReVUzYs2Ql6h0sux409sX2XrqFUjKLtOEzCBZiOgb77LoDug5WjWVdwjJ0bsyFzfnCOWa1Q2ReFuQS9F9ZbghKCGeDbJbjkLegalNvUkqK2QtH+SfnYMziHVZJOMnZNhdh6tfRHdNJtWe1vRudoAPQEbDsYWRf7mkLZ0sCDwXTRs7pWYaC7AYLRR8jFRspvRq/mNo+c4MXONvzeqYddrAiZgAk1EYD5s1b36aFRzsxTNerQv+8lTFAdLw4H3o1egD6FvYJrSwkQO5X5o1kNesudD9Ofoa2jTCDzHcV0cj8EadtW86CxFQRoFY55Df1PdcBIHq/cV0urKivYZ6PoGMAxVJErfhpZDV0DlYAVFr0juWRS0Uc6V1nn5G3o1UbJH0XF9/LPJHosJmIAJtDMBOUtLo3pjbHXu61ey1e+wfsS2qKKhv3+gN6J3o69j71xzrUjvFfq1NnoS+TQdJWuRveegD9J+0zzjKyAp8nYG+ms0iV9TUVXs3QU5b0eiz8PunsrSSQzJ5ZsBxqtdTYKUynHSa6uDurq65kX0LUdvoSyMypnSBbpEabtkKW1+tsqn7UJolqJvLPr2ci16PzqWE+HhQEBYTMAETCAiAUV11kKPQBXNuoD7qO6rRZIujJFN/4vehypi9THbmkJfFkW1WvrKNTM27uBtVK2XrJryuYTd0+Cn5+u66B6NwxRcM+3rC4B+r1DLKmnqT4/EdbAWo9T5VNLN8FYsR4toTT1esZwqtSd7B5VUr0oOwbnSP53mSPU4XJXH2FckSvl1LA+RY6VvMTeh8mz1zzaJrcUETMAETCAZAQ0DfQf9PM+iq9jKMdDwVp7yKo3/HVW06kn0LWzq07Ein34LV8+1Y8m/GVs967KW0TR4Mu039VQV7J8AyzPoi5zwtbOGSHtfxC86FRv2xZZOtR/XwVL05wcqiMOkTZYiB6usarxas7Slr7Y0FPgwqsnr96ORvsWQz2ICJmACJtA3AX2p/jx6KLo+DzXNzVLEKBOhPf0A8Rs09m9U9/rHUH1+j3RFseLIbmTeE1XQIGv5hPWcTmbJAc0hagV5iU4cj16NZj1S1YFftA1OlljK0YvtYMmp0ZwmSzABfYv6K3ot+jg6kX+2ud4sIN1iAiZgAiZQPwFNAdkG3RhHQcvr6A24t+qvdq4atCTAu9T9IkceZSuH6ll0PKq5VVNJiz1KQ51bUfZXaNbOAE3264cz8Aucq1uwXaMtTS86B8id9OsEroW5Jp1n0MH5affY7u7ucbzAdmXcCFYG9jVlE89j9a3on9Ex6CRO9HS2FhMwgXwI6MugIt6W1ieg59hiPNj2YbsZD9hT2Wp6SFzRPVtzkCZSx3ju4XLUXkZ1T9cP/GoYUMNoyqMvztP0QGebSGhD84SPRDXi8W6iSuor9LCcEPqg9ltG6E83bC+nQ1q6Yes8OobTehA2PNYfr/8KIO+RhxFN3qaiVQ+gmhz4IKrPnZzclvgmQF8sJtC0BLi5LYbxO6F2spr2LCYyXI61nCA5XQuE1CCnSPfp7pLKsZpcoR+xr/W2lD6H1uNQUdccwjWq+cMj5kjM8ENnZ+eH888/fx6OXSa9hO8iNCQnNg/RfWecHax46DVBXUN/d6D3oq+hk/mn0zcaiwmYQEEIcHPVg3begphjM7InICeqlnNdjjxpW1YtVdCjaTpSYV3nGpV9tWwMK5pKOn1UX1taSveBvPrY8/ZCXo03S7saY38ClUOlSJXG4DXm3sUF6mgVICwmUDQCpYdHZ9Hssj0mUCZQcuLKjl452dsUCeTtRHoO1twncype72ucmH9xSA6VIlZvoHKqppCusLLFBEzABEzABEzABEIJ2MH6dOz9dQg9g8qZegonSpMaNQbfM5mRz45UAcNiAiZgAiZgAiYQjUA7OVgab9bkRb0Z8gr6X1Rv/8mZGot2oXozRK/bamKjxQRMwARMwARMwAQSEejIeRJYIqNDCsk5UsRJE9E1b0pvkoxjPYw3eUtSESoN872Nvocqr5wovZ6qV20doQKExQRMwARMwARMIB0CHTgX7+BkKaKjCE8aQpWpvhiBebPkNH1EvW/hML2GwyRHShEnvVqriaw6riG9siqt5xVc8vZsy5+pI61+UqXFBEzABEzABEzABOYm8P8BSr69Zj1OJz4AAAAASUVORK5CYII=",Mg=({isOpen:i,onClose:e,settings:t,diagnostics:n})=>i?v.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in",children:v.jsxs("div",{className:"relative flex flex-col w-full max-w-4xl bg-[#12141a] border border-[#272a36] rounded-xl shadow-xl overflow-hidden max-h-[92vh]",children:[v.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 border-b border-[#232733] bg-[#161820]",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("img",{src:Pc,alt:"D-Lux Diffuser",className:"h-7 w-auto object-contain"}),v.jsxs("div",{className:"border-l border-zinc-800 pl-3",children:[v.jsxs("h3",{className:"text-sm font-bold text-white flex items-center gap-2",children:["D-Lux Dental Studio ",v.jsx("span",{className:"text-zinc-500 font-normal",children:"|"})," Registro Fotográfico"]}),v.jsx("p",{className:"text-xs text-amber-400/90 font-mono",children:"Aplicação Proprietária D-Lux Diffuser • IMG_DLUX_0042.RAW"})]})]}),v.jsx("button",{onClick:e,className:"p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors",children:v.jsx(dg,{className:"w-5 h-5"})})]}),v.jsxs("div",{className:"flex flex-col md:flex-row overflow-y-auto",children:[v.jsxs("div",{className:"relative flex-1 bg-black flex items-center justify-center min-h-[300px] p-2 border-b md:border-b-0 md:border-r border-zinc-800",children:[v.jsx(tc,{focalLength:t.focalLength,aperture:t.aperture,dofBlurCaninesPx:n.dofBlurCaninesPx,motionBlurPx:n.blurAmountPx,noiseOpacity:n.noiseOpacity,ambientLightContamination:n.ambientLightContamination,hasFlashCurtainArtifact:n.hasFlashCurtainArtifact,evDiff:n.evDiff,showFocusPeaking:!1,showGrid:!1,subjectMode:t.subjectMode,flashMode:t.flashMode,whiteBalance:t.whiteBalance}),v.jsxs("div",{className:"absolute top-4 right-4 bg-black/75 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl font-mono text-xs flex items-center gap-2",children:[v.jsx("span",{className:"text-zinc-400",children:"SCORE:"}),v.jsxs("span",{className:`font-bold ${n.clinicalScore>=80?"text-emerald-400":n.clinicalScore>=50?"text-amber-400":"text-rose-400"}`,children:[n.clinicalScore,"/100"]})]})]}),v.jsxs("div",{className:"w-full md:w-80 p-5 flex flex-col gap-4 bg-zinc-900/50",children:[v.jsxs("div",{children:[v.jsx("h4",{className:"text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2",children:"Metadados EXIF"}),v.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs font-mono",children:[v.jsxs("div",{className:"bg-zinc-950/80 p-2 rounded-lg border border-zinc-850",children:[v.jsx("span",{className:"text-zinc-500 block text-[10px]",children:"LENTE"}),v.jsxs("span",{className:"text-cyan-300 font-bold",children:[t.focalLength,"mm"]})]}),v.jsxs("div",{className:"bg-zinc-950/80 p-2 rounded-lg border border-zinc-850",children:[v.jsx("span",{className:"text-zinc-500 block text-[10px]",children:"OBTURADOR"}),v.jsxs("span",{className:"text-amber-300 font-bold",children:[t.shutterSpeed,"s"]})]}),v.jsxs("div",{className:"bg-zinc-950/80 p-2 rounded-lg border border-zinc-850",children:[v.jsx("span",{className:"text-zinc-500 block text-[10px]",children:"ABERTURA"}),v.jsxs("span",{className:"text-emerald-300 font-bold",children:["f/",t.aperture]})]}),v.jsxs("div",{className:"bg-zinc-950/80 p-2 rounded-lg border border-zinc-850",children:[v.jsx("span",{className:"text-zinc-500 block text-[10px]",children:"ISO"}),v.jsx("span",{className:"text-yellow-300 font-bold",children:t.iso})]}),v.jsxs("div",{className:"col-span-2 bg-zinc-950/80 p-2 rounded-lg border border-zinc-850",children:[v.jsx("span",{className:"text-zinc-500 block text-[10px]",children:"BALANÇO DE BRANCO (WB)"}),v.jsx("span",{className:"text-amber-300 font-bold",children:Dr[t.whiteBalance].label})]}),v.jsxs("div",{className:"col-span-2 bg-zinc-950/80 p-2 rounded-lg border border-zinc-850",children:[v.jsx("span",{className:"text-zinc-500 block text-[10px]",children:"ILUMINAÇÃO & DIFUSOR"}),v.jsxs("span",{className:"text-white font-bold",children:[t.flashMode==="twin"&&"Twin Flash + Difusor D-Lux MF-12",t.flashMode==="studio"&&"Estúdio + Bouncers / Softbox D-Lux",t.flashMode==="ring"&&"Ring Flash + Difusor D-Lux YN-14",t.flashMode==="off"&&"Sem Flash (Luz Ambiente Clínica)"]})]})]})]}),v.jsxs("div",{className:"bg-zinc-950/80 p-3 rounded-xl border border-zinc-850",children:[v.jsx("span",{className:"text-xs font-bold text-white block mb-1",children:n.clinicalTitle}),v.jsx("p",{className:"text-xs text-zinc-400 leading-relaxed",children:n.clinicalFeedback[0]||"Foto registrada com sucesso."})]}),v.jsxs("div",{className:"mt-auto flex flex-col gap-2 pt-2 border-t border-zinc-800",children:[v.jsxs("a",{href:"https://dluxdiffuser.lojavirtualnuvem.com.br/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-medium transition-colors",children:[v.jsx("span",{children:"Conhecer Difusores D-Lux"}),v.jsx(Ea,{className:"w-3 h-3"})]}),v.jsx("button",{onClick:e,className:"w-full py-2 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors",children:"Voltar à Câmera"})]})]})]})]})}):null,yg=()=>{const[i,e]=ct.useState({focalLength:100,shutterSpeed:"1/160",iso:100,aperture:22,flashMode:"twin",subjectMode:"natural",whiteBalance:"flash"}),[t,n]=ct.useState("viewfinder"),[r,s]=ct.useState(!1),a=Oc(i),o=(c,u)=>{e(h=>({...h,[c]:u}))},l=c=>{e(c)};return v.jsxs("div",{className:"min-h-screen bg-[#0e1015] text-zinc-100 flex flex-col font-sans selection:bg-amber-400 selection:text-black",children:[v.jsx("header",{className:"border-b border-[#252834] bg-[#14161e] sticky top-0 z-40 px-3 lg:px-6 py-2",children:v.jsxs("div",{className:"max-w-[1520px] mx-auto flex items-center justify-between gap-3",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("a",{href:"https://dluxdiffuser.lojavirtualnuvem.com.br/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center hover:opacity-90 transition-opacity",title:"Acessar Loja Oficial D-Lux Diffuser",children:v.jsx("img",{src:Pc,alt:"D-Lux Diffuser",className:"h-8 w-auto object-contain"})}),v.jsxs("div",{className:"border-l border-[#272a38] pl-2.5",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("h1",{className:"text-sm font-bold text-white tracking-tight",children:"Simulador Macro Odontológico"}),v.jsx("span",{className:"hidden sm:inline-block px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase",children:"D-Lux Studio"})]}),v.jsx("p",{className:"text-[10px] text-zinc-400 hidden md:block",children:"Console óptico de calibração para fotografia odontológica e difusores"})]})]}),v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsxs("div",{className:"flex items-center bg-[#101217] p-0.5 rounded-lg border border-[#272a38] text-xs font-medium",children:[v.jsx("button",{onClick:()=>n("viewfinder"),className:`px-3 py-1 rounded-md transition-colors cursor-pointer ${t==="viewfinder"?"bg-zinc-200 text-black font-bold shadow-sm":"text-zinc-400 hover:text-white"}`,children:"Visor da Câmera"}),v.jsx("button",{onClick:()=>n("diagram"),className:`px-3 py-1 rounded-md transition-colors cursor-pointer ${t==="diagram"?"bg-zinc-200 text-black font-bold shadow-sm":"text-zinc-400 hover:text-white"}`,children:"Distância Clínica"})]}),v.jsxs("a",{href:"https://dluxdiffuser.lojavirtualnuvem.com.br/",target:"_blank",rel:"noopener noreferrer",className:"hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#20232e] hover:bg-[#282c3a] text-amber-300 border border-amber-400/30 text-xs font-semibold transition-colors",children:[v.jsx("span",{children:"Loja D-Lux"}),v.jsx(Ea,{className:"w-3 h-3"})]})]})]})}),v.jsxs("main",{className:"flex-1 max-w-[1520px] w-full mx-auto p-2.5 sm:p-4 flex flex-col gap-2.5",children:[v.jsx(vg,{currentSettings:i,onSelectPreset:l}),v.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-3 items-start",children:[v.jsxs("div",{className:"lg:col-span-7 flex flex-col gap-2.5",children:[t==="viewfinder"?v.jsx(ug,{settings:i,diagnostics:a,onUpdateSetting:o,onTakePhoto:()=>s(!0)}):v.jsx(hg,{settings:i}),v.jsx(_g,{diagnostics:a})]}),v.jsx("div",{className:"lg:col-span-5",children:v.jsx(xg,{settings:i,onUpdateSetting:o})})]}),v.jsxs("footer",{className:"mt-auto pt-2 border-t border-[#232733] text-[11px] text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"text-zinc-300 font-semibold",children:"© 2026 D-Lux Diffuser."}),v.jsx("span",{children:"Aplicação proprietária para calibração óptica odontológica."})]}),v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("span",{className:"hidden md:inline text-zinc-400",children:"Padrão Ouro Recomendado: 100mm Macro + Difusor Twin D-Lux (MF-12)"}),v.jsxs("a",{href:"https://dluxdiffuser.lojavirtualnuvem.com.br/",target:"_blank",rel:"noopener noreferrer",className:"text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1",children:[v.jsx("span",{children:"dluxdiffuser.lojavirtualnuvem.com.br"}),v.jsx(Ea,{className:"w-3 h-3"})]})]})]})]}),v.jsx(Mg,{isOpen:r,onClose:()=>s(!1),settings:i,diagnostics:a})]})};export{yg as DentalCameraApp};
