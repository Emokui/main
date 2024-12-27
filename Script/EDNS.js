var {
  defineProperty: x2,
  getOwnPropertyNames: rS,
  getOwnPropertyDescriptor: sS
} = Object;
var oS = Object.prototype.hasOwnProperty;
var RS = new WeakMap();
var TS = C => {
  var S = RS.get(C);
  var N;
  if (S) {
    return S;
  }
  S = x2({}, "__esModule", {
    value: true
  });
  if (C && typeof C === "object" || typeof C === "function") {
    rS(C).map(R => !oS.call(S, R) && x2(S, R, {
      get: () => C[R],
      enumerable: !(N = sS(C, R)) || N.enumerable
    }));
  }
  RS.set(C, S);
  return S;
};
var D2 = (C, S) => () => {
  if (!S) {
    C((S = {
      exports: {}
    }).exports, S);
  }
  return S.exports;
};
var eS = (C, S) => {
  for (var N in S) {
    x2(C, N, {
      get: S[N],
      enumerable: true,
      configurable: true,
      set: R => S[N] = () => R
    });
  }
};
var tS = (C, S) => () => {
  if (C) {
    S = C(C = 0);
  }
  return S;
};
var l2 = {};
eS(l2, {
  transcode: () => ZS,
  resolveObjectURL: () => QS,
  kStringMaxLength: () => q2,
  isUtf8: () => DS,
  isAscii: () => US,
  default: () => HA,
  createObjectURL: () => GS,
  constants: () => VS,
  btoa: () => FS,
  atob: () => MS,
  File: () => PS,
  Buffer: () => YA,
  Blob: () => IS
});
function QS(C) {
  throw new Error("Not implemented");
}
function ZS(C, S, N) {
  throw new Error("Not implemented");
}
var fS;
var c2;
var SA;
var AA;
var CA;
var NA;
var m2 = (C, S) => () => {
  if (!S) {
    C((S = {
      exports: {}
    }).exports, S);
  }
  return S.exports;
};
var EA = (C, S) => {
  for (var N in S) {
    c2(C, N, {
      get: S[N],
      enumerable: true
    });
  }
};
var y2 = (C, S, N, R) => {
  if (S && typeof S == "object" || typeof S == "function") {
    for (let H of AA(S)) {
      if (!NA.call(C, H) && H !== N) {
        c2(C, H, {
          get: () => S[H],
          enumerable: !(R = SA(S, H)) || R.enumerable
        });
      }
    }
  }
  return C;
};
var KA = (C, S, N) => {
  y2(C, S, "default");
  return N && y2(N, S, "default");
};
var g2 = (C, S, N) => {
  N = C != null ? fS(CA(C)) : {};
  return y2(S || !C || !C.__esModule ? c2(N, "default", {
    value: C,
    enumerable: true
  }) : N, C);
};
var RA;
var TA;
var h2;
var YS;
var HS;
var XS;
var q2 = 4294967295;
var IS;
var PS;
var MS;
var FS;
var GS;
var US = C => ArrayBuffer.isView(C) ? C.every(S => S < 128) : C.split("").every(S => S.charCodeAt(0) < 128);
var DS = C => {
  throw new Error("Not implemented");
};
var VS;
var YA;
var HA;
var p2 = tS(() => {
  fS = Object.create;
  c2 = Object.defineProperty;
  SA = Object.getOwnPropertyDescriptor;
  AA = Object.getOwnPropertyNames;
  CA = Object.getPrototypeOf;
  NA = Object.prototype.hasOwnProperty;
  RA = m2(C => {
    C.byteLength = J;
    C.toByteArray = y;
    C.fromByteArray = U;
    var S = [];
    var N = [];
    var R = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var H = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    M = 0;
    V = H.length;
    for (; M < V; ++M) {
      S[M] = H[M];
      N[H.charCodeAt(M)] = M;
    }
    var M;
    var V;
    N[45] = 62;
    N[95] = 63;
    function Y(I) {
      var D = I.length;
      if (D % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var $ = I.indexOf("=");
      if ($ === -1) {
        $ = D;
      }
      var z = $ === D ? 0 : 4 - $ % 4;
      return [$, z];
    }
    function J(I) {
      var D = Y(I);
      var $ = D[0];
      var z = D[1];
      return ($ + z) * 3 / 4 - z;
    }
    function W(I, D, $) {
      return (D + $) * 3 / 4 - $;
    }
    function y(I) {
      var D;
      var $ = Y(I);
      var z = $[0];
      var k = $[1];
      var L = new R(W(I, z, k));
      var c = 0;
      var B = k > 0 ? z - 4 : z;
      var w;
      for (w = 0; w < B; w += 4) {
        D = N[I.charCodeAt(w)] << 18 | N[I.charCodeAt(w + 1)] << 12 | N[I.charCodeAt(w + 2)] << 6 | N[I.charCodeAt(w + 3)];
        L[c++] = D >> 16 & 255;
        L[c++] = D >> 8 & 255;
        L[c++] = D & 255;
      }
      if (k === 2) {
        D = N[I.charCodeAt(w)] << 2 | N[I.charCodeAt(w + 1)] >> 4;
        L[c++] = D & 255;
      }
      if (k === 1) {
        D = N[I.charCodeAt(w)] << 10 | N[I.charCodeAt(w + 1)] << 4 | N[I.charCodeAt(w + 2)] >> 2;
        L[c++] = D >> 8 & 255;
        L[c++] = D & 255;
      }
      return L;
    }
    function j(I) {
      return S[I >> 18 & 63] + S[I >> 12 & 63] + S[I >> 6 & 63] + S[I & 63];
    }
    function Z(I, D, $) {
      for (var z, k = [], L = D; L < $; L += 3) {
        z = (I[L] << 16 & 16711680) + (I[L + 1] << 8 & 65280) + (I[L + 2] & 255);
        k.push(j(z));
      }
      return k.join("");
    }
    function U(I) {
      for (var D, $ = I.length, z = $ % 3, k = [], L = 16383, c = 0, B = $ - z; c < B; c += L) {
        k.push(Z(I, c, c + L > B ? B : c + L));
      }
      if (z === 1) {
        D = I[$ - 1];
        k.push(S[D >> 2] + S[D << 4 & 63] + "==");
      } else if (z === 2) {
        D = (I[$ - 2] << 8) + I[$ - 1];
        k.push(S[D >> 10] + S[D >> 4 & 63] + S[D << 2 & 63] + "=");
      }
      return k.join("");
    }
  });
  TA = m2(C => {
    C.read = function (S, N, R, H, M) {
      var V;
      var Y;
      var J = M * 8 - H - 1;
      var W = (1 << J) - 1;
      var y = W >> 1;
      var j = -7;
      var Z = R ? M - 1 : 0;
      var U = R ? -1 : 1;
      var I = S[N + Z];
      Z += U;
      V = I & (1 << -j) - 1;
      I >>= -j;
      j += J;
      for (; j > 0; j -= 8) {
        V = V * 256 + S[N + Z];
        Z += U;
      }
      Y = V & (1 << -j) - 1;
      V >>= -j;
      j += H;
      for (; j > 0; j -= 8) {
        Y = Y * 256 + S[N + Z];
        Z += U;
      }
      if (V === 0) {
        V = 1 - y;
      } else {
        if (V === W) {
          if (Y) {
            return NaN;
          } else {
            return (I ? -1 : 1) * Infinity;
          }
        }
        Y = Y + Math.pow(2, H);
        V = V - y;
      }
      return (I ? -1 : 1) * Y * Math.pow(2, V - H);
    };
    C.write = function (S, N, R, H, M, V) {
      var Y;
      var J;
      var W;
      var y = V * 8 - M - 1;
      var j = (1 << y) - 1;
      var Z = j >> 1;
      var U = M === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var I = H ? 0 : V - 1;
      var D = H ? 1 : -1;
      var $ = N < 0 || N === 0 && 1 / N < 0 ? 1 : 0;
      N = Math.abs(N);
      if (isNaN(N) || N === Infinity) {
        J = isNaN(N) ? 1 : 0;
        Y = j;
      } else {
        Y = Math.floor(Math.log(N) / Math.LN2);
        if (N * (W = Math.pow(2, -Y)) < 1) {
          Y--;
          W *= 2;
        }
        if (Y + Z >= 1) {
          N += U / W;
        } else {
          N += U * Math.pow(2, 1 - Z);
        }
        if (N * W >= 2) {
          Y++;
          W /= 2;
        }
        if (Y + Z >= j) {
          J = 0;
          Y = j;
        } else if (Y + Z >= 1) {
          J = (N * W - 1) * Math.pow(2, M);
          Y = Y + Z;
        } else {
          J = N * Math.pow(2, Z - 1) * Math.pow(2, M);
          Y = 0;
        }
      }
      for (; M >= 8; M -= 8) {
        S[R + I] = J & 255;
        I += D;
        J /= 256;
      }
      Y = Y << M | J;
      y += M;
      for (; y > 0; y -= 8) {
        S[R + I] = Y & 255;
        I += D;
        Y /= 256;
      }
      S[R + I - D] |= $ * 128;
    };
  });
  h2 = m2(C => {
    var S = RA();
    var N = TA();
    var R = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    C.Buffer = Y;
    C.SlowBuffer = k;
    C.INSPECT_MAX_BYTES = 50;
    var H = 2147483647;
    C.kMaxLength = H;
    Y.TYPED_ARRAY_SUPPORT = M();
    if (!Y.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error == "function") {
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function M() {
      try {
        let A = new Uint8Array(1);
        let E = {
          foo: function () {
            return 42;
          }
        };
        Object.setPrototypeOf(E, Uint8Array.prototype);
        Object.setPrototypeOf(A, E);
        return A.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(Y.prototype, "parent", {
      enumerable: true,
      get: function () {
        if (Y.isBuffer(this)) {
          return this.buffer;
        }
      }
    });
    Object.defineProperty(Y.prototype, "offset", {
      enumerable: true,
      get: function () {
        if (Y.isBuffer(this)) {
          return this.byteOffset;
        }
      }
    });
    function V(A) {
      if (A > H) {
        throw new RangeError("The value \"" + A + "\" is invalid for option \"size\"");
      }
      let E = new Uint8Array(A);
      Object.setPrototypeOf(E, Y.prototype);
      return E;
    }
    function Y(A, E, K) {
      if (typeof A == "number") {
        if (typeof E == "string") {
          throw new TypeError("The \"string\" argument must be of type string. Received type number");
        }
        return j(A);
      }
      return J(A, E, K);
    }
    Y.poolSize = 8192;
    function J(A, E, K) {
      if (typeof A == "string") {
        return Z(A, E);
      }
      if (ArrayBuffer.isView(A)) {
        return I(A);
      }
      if (A == null) {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof A);
      }
      if (e(A, ArrayBuffer) || A && e(A.buffer, ArrayBuffer) || typeof SharedArrayBuffer !== "undefined" && (e(A, SharedArrayBuffer) || A && e(A.buffer, SharedArrayBuffer))) {
        return D(A, E, K);
      }
      if (typeof A == "number") {
        throw new TypeError("The \"value\" argument must not be of type number. Received type number");
      }
      let T = A.valueOf && A.valueOf();
      if (T != null && T !== A) {
        return Y.from(T, E, K);
      }
      let X = $(A);
      if (X) {
        return X;
      }
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof A[Symbol.toPrimitive] == "function") {
        return Y.from(A[Symbol.toPrimitive]("string"), E, K);
      }
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof A);
    }
    Y.from = function (A, E, K) {
      return J(A, E, K);
    };
    Object.setPrototypeOf(Y.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Y, Uint8Array);
    function W(A) {
      if (typeof A != "number") {
        throw new TypeError("\"size\" argument must be of type number");
      }
      if (A < 0) {
        throw new RangeError("The value \"" + A + "\" is invalid for option \"size\"");
      }
    }
    function y(A, E, K) {
      W(A);
      if (A <= 0) {
        return V(A);
      } else if (E !== undefined) {
        if (typeof K == "string") {
          return V(A).fill(E, K);
        } else {
          return V(A).fill(E);
        }
      } else {
        return V(A);
      }
    }
    Y.alloc = function (A, E, K) {
      return y(A, E, K);
    };
    function j(A) {
      W(A);
      return V(A < 0 ? 0 : z(A) | 0);
    }
    Y.allocUnsafe = function (A) {
      return j(A);
    };
    Y.allocUnsafeSlow = function (A) {
      return j(A);
    };
    function Z(A, E) {
      if (typeof E != "string" || E === "") {
        E = "utf8";
      }
      if (!Y.isEncoding(E)) {
        throw new TypeError("Unknown encoding: " + E);
      }
      let K = L(A, E) | 0;
      let T = V(K);
      let X = T.write(A, E);
      if (X !== K) {
        T = T.slice(0, X);
      }
      return T;
    }
    function U(A) {
      let E = A.length < 0 ? 0 : z(A.length) | 0;
      let K = V(E);
      for (let T = 0; T < E; T += 1) {
        K[T] = A[T] & 255;
      }
      return K;
    }
    function I(A) {
      if (e(A, Uint8Array)) {
        let E = new Uint8Array(A);
        return D(E.buffer, E.byteOffset, E.byteLength);
      }
      return U(A);
    }
    function D(A, E, K) {
      if (E < 0 || A.byteLength < E) {
        throw new RangeError("\"offset\" is outside of buffer bounds");
      }
      if (A.byteLength < E + (K || 0)) {
        throw new RangeError("\"length\" is outside of buffer bounds");
      }
      let T;
      if (E === undefined && K === undefined) {
        T = new Uint8Array(A);
      } else if (K === undefined) {
        T = new Uint8Array(A, E);
      } else {
        T = new Uint8Array(A, E, K);
      }
      Object.setPrototypeOf(T, Y.prototype);
      return T;
    }
    function $(A) {
      if (Y.isBuffer(A)) {
        let E = z(A.length) | 0;
        let K = V(E);
        if (!(K.length === 0)) {
          A.copy(K, 0, 0, E);
        }
        return K;
      }
      if (A.length !== undefined) {
        if (typeof A.length != "number" || B2(A.length)) {
          return V(0);
        } else {
          return U(A);
        }
      }
      if (A.type === "Buffer" && Array.isArray(A.data)) {
        return U(A.data);
      }
    }
    function z(A) {
      if (A >= H) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + H.toString(16) + " bytes");
      }
      return A | 0;
    }
    function k(A) {
      if (+A != A) {
        A = 0;
      }
      return Y.alloc(+A);
    }
    Y.isBuffer = function (A) {
      return A != null && A._isBuffer === true && A !== Y.prototype;
    };
    Y.compare = function (A, E) {
      if (e(A, Uint8Array)) {
        A = Y.from(A, A.offset, A.byteLength);
      }
      if (e(E, Uint8Array)) {
        E = Y.from(E, E.offset, E.byteLength);
      }
      if (!Y.isBuffer(A) || !Y.isBuffer(E)) {
        throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
      }
      if (A === E) {
        return 0;
      }
      let K = A.length;
      let T = E.length;
      for (let X = 0, P = Math.min(K, T); X < P; ++X) {
        if (A[X] !== E[X]) {
          K = A[X];
          T = E[X];
          break;
        }
      }
      if (K < T) {
        return -1;
      } else if (T < K) {
        return 1;
      } else {
        return 0;
      }
    };
    Y.isEncoding = function (A) {
      switch (String(A).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Y.concat = function (A, E) {
      if (!Array.isArray(A)) {
        throw new TypeError("\"list\" argument must be an Array of Buffers");
      }
      if (A.length === 0) {
        return Y.alloc(0);
      }
      let K;
      if (E === undefined) {
        E = 0;
        K = 0;
        E = 0;
        K = 0;
        for (; K < A.length; ++K) {
          E += A[K].length;
        }
      }
      let T = Y.allocUnsafe(E);
      let X = 0;
      for (K = 0; K < A.length; ++K) {
        let P = A[K];
        if (e(P, Uint8Array)) {
          if (X + P.length > T.length) {
            if (!Y.isBuffer(P)) {
              P = Y.from(P);
            }
            P.copy(T, X);
          } else {
            Uint8Array.prototype.set.call(T, P, X);
          }
        } else if (Y.isBuffer(P)) {
          P.copy(T, X);
        } else {
          throw new TypeError("\"list\" argument must be an Array of Buffers");
        }
        X += P.length;
      }
      return T;
    };
    function L(A, E) {
      if (Y.isBuffer(A)) {
        return A.length;
      }
      if (ArrayBuffer.isView(A) || e(A, ArrayBuffer)) {
        return A.byteLength;
      }
      if (typeof A != "string") {
        throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof A);
      }
      let K = A.length;
      let T = arguments.length > 2 && arguments[2] === true;
      if (!T && K === 0) {
        return 0;
      }
      let X = false;
      for (;;) {
        switch (E) {
          case "ascii":
          case "latin1":
          case "binary":
            return K;
          case "utf8":
          case "utf-8":
            return O2(A).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return K * 2;
          case "hex":
            return K >>> 1;
          case "base64":
            return KS(A).length;
          default:
            if (X) {
              if (T) {
                return -1;
              } else {
                return O2(A).length;
              }
            }
            E = ("" + E).toLowerCase();
            X = true;
        }
      }
    }
    Y.byteLength = L;
    function c(A, E, K) {
      let T = false;
      if (E === undefined || E < 0) {
        E = 0;
      }
      if (E > this.length || ((K === undefined || K > this.length) && (K = this.length), K <= 0) || (K >>>= 0, E >>>= 0, K <= E)) {
        return "";
      }
      for (A || (A = "utf8");;) {
        switch (A) {
          case "hex":
            return hS(this, E, K);
          case "utf8":
          case "utf-8":
            return o2(this, E, K);
          case "ascii":
            return mS(this, E, K);
          case "latin1":
          case "binary":
            return gS(this, E, K);
          case "base64":
            return yS(this, E, K);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return lS(this, E, K);
          default:
            if (T) {
              throw new TypeError("Unknown encoding: " + A);
            }
            A = (A + "").toLowerCase();
            T = true;
        }
      }
    }
    Y.prototype._isBuffer = true;
    function B(A, E, K) {
      let T = A[E];
      A[E] = A[K];
      A[K] = T;
    }
    Y.prototype.swap16 = function () {
      let A = this.length;
      if (A % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let E = 0; E < A; E += 2) {
        B(this, E, E + 1);
      }
      return this;
    };
    Y.prototype.swap32 = function () {
      let A = this.length;
      if (A % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let E = 0; E < A; E += 4) {
        B(this, E, E + 3);
        B(this, E + 1, E + 2);
      }
      return this;
    };
    Y.prototype.swap64 = function () {
      let A = this.length;
      if (A % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let E = 0; E < A; E += 8) {
        B(this, E, E + 7);
        B(this, E + 1, E + 6);
        B(this, E + 2, E + 5);
        B(this, E + 3, E + 4);
      }
      return this;
    };
    Y.prototype.toString = function () {
      let A = this.length;
      if (A === 0) {
        return "";
      } else if (arguments.length === 0) {
        return o2(this, 0, A);
      } else {
        return c.apply(this, arguments);
      }
    };
    Y.prototype.toLocaleString = Y.prototype.toString;
    Y.prototype.equals = function (A) {
      if (!Y.isBuffer(A)) {
        throw new TypeError("Argument must be a Buffer");
      }
      if (this === A) {
        return true;
      } else {
        return Y.compare(this, A) === 0;
      }
    };
    Y.prototype.inspect = function () {
      let A = "";
      let E = C.INSPECT_MAX_BYTES;
      A = this.toString("hex", 0, E).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > E) {
        A += " ... ";
      }
      return "<Buffer " + A + ">";
    };
    if (R) {
      Y.prototype[R] = Y.prototype.inspect;
    }
    Y.prototype.compare = function (A, E, K, T, X) {
      if (e(A, Uint8Array)) {
        A = Y.from(A, A.offset, A.byteLength);
      }
      if (!Y.isBuffer(A)) {
        throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof A);
      }
      if (E === undefined) {
        E = 0;
      }
      if (K === undefined) {
        K = A ? A.length : 0;
      }
      if (T === undefined) {
        T = 0;
      }
      if (X === undefined) {
        X = this.length;
      }
      if (E < 0 || K > A.length || T < 0 || X > this.length) {
        throw new RangeError("out of range index");
      }
      if (T >= X && E >= K) {
        return 0;
      }
      if (T >= X) {
        return -1;
      }
      if (E >= K) {
        return 1;
      }
      E >>>= 0;
      K >>>= 0;
      T >>>= 0;
      X >>>= 0;
      if (this === A) {
        return 0;
      }
      let P = X - T;
      let F = K - E;
      let q = Math.min(P, F);
      let h = this.slice(T, X);
      let O = A.slice(E, K);
      for (let v = 0; v < q; ++v) {
        if (h[v] !== O[v]) {
          P = h[v];
          F = O[v];
          break;
        }
      }
      if (P < F) {
        return -1;
      } else if (F < P) {
        return 1;
      } else {
        return 0;
      }
    };
    function w(A, E, K, T, X) {
      if (A.length === 0) {
        return -1;
      }
      if (typeof K == "string") {
        T = K;
        K = 0;
      } else if (K > 2147483647) {
        K = 2147483647;
      } else if (K < -2147483648) {
        K = -2147483648;
      }
      K = +K;
      if (B2(K)) {
        K = X ? 0 : A.length - 1;
      }
      if (K < 0) {
        K = A.length + K;
      }
      if (K >= A.length) {
        if (X) {
          return -1;
        }
        K = A.length - 1;
      } else if (K < 0) {
        if (X) {
          K = 0;
        } else {
          return -1;
        }
      }
      if (typeof E == "string") {
        E = Y.from(E, T);
      }
      if (Y.isBuffer(E)) {
        if (E.length === 0) {
          return -1;
        } else {
          return s2(A, E, K, T, X);
        }
      }
      if (typeof E == "number") {
        E = E & 255;
        if (typeof Uint8Array.prototype.indexOf == "function") {
          if (X) {
            return Uint8Array.prototype.indexOf.call(A, E, K);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(A, E, K);
          }
        } else {
          return s2(A, [E], K, T, X);
        }
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function s2(A, E, K, T, X) {
      let P = 1;
      let F = A.length;
      let q = E.length;
      if (T !== undefined && (T = String(T).toLowerCase(), T === "ucs2" || T === "ucs-2" || T === "utf16le" || T === "utf-16le")) {
        if (A.length < 2 || E.length < 2) {
          return -1;
        }
        P = 2;
        F /= 2;
        q /= 2;
        K /= 2;
      }
      function h(v, x) {
        if (P === 1) {
          return v[x];
        } else {
          return v.readUInt16BE(x * P);
        }
      }
      let O;
      if (X) {
        let v = -1;
        for (O = K; O < F; O++) {
          if (h(A, O) === h(E, v === -1 ? 0 : O - v)) {
            if (v === -1) {
              v = O;
            }
            if (O - v + 1 === q) {
              return v * P;
            }
          } else {
            if (v !== -1) {
              O -= O - v;
            }
            v = -1;
          }
        }
      } else {
        if (K + q > F) {
          K = F - q;
        }
        O = K;
        if (K + q > F) {
          K = F - q;
        }
        O = K;
        for (; O >= 0; O--) {
          let v = true;
          for (let x = 0; x < q; x++) {
            if (h(A, O + x) !== h(E, x)) {
              v = false;
              break;
            }
          }
          if (v) {
            return O;
          }
        }
      }
      return -1;
    }
    Y.prototype.includes = function (A, E, K) {
      return this.indexOf(A, E, K) !== -1;
    };
    Y.prototype.indexOf = function (A, E, K) {
      return w(this, A, E, K, true);
    };
    Y.prototype.lastIndexOf = function (A, E, K) {
      return w(this, A, E, K, false);
    };
    function kS(A, E, K, T) {
      K = Number(K) || 0;
      let X = A.length - K;
      if (T) {
        T = Number(T);
        if (T > X) {
          T = X;
        }
      } else {
        T = X;
      }
      let P = E.length;
      if (T > P / 2) {
        T = P / 2;
      }
      let F;
      for (F = 0; F < T; ++F) {
        let q = parseInt(E.substr(F * 2, 2), 16);
        if (B2(q)) {
          return F;
        }
        A[K + F] = q;
      }
      return F;
    }
    function wS(A, E, K, T) {
      return L2(O2(E, A.length - K), A, K, T);
    }
    function OS(A, E, K, T) {
      return L2(aS(E), A, K, T);
    }
    function BS(A, E, K, T) {
      return L2(KS(E), A, K, T);
    }
    function xS(A, E, K, T) {
      return L2(bS(E, A.length - K), A, K, T);
    }
    Y.prototype.write = function (A, E, K, T) {
      if (E === undefined) {
        T = "utf8";
        K = this.length;
        E = 0;
      } else if (K === undefined && typeof E == "string") {
        T = E;
        K = this.length;
        E = 0;
      } else if (isFinite(E)) {
        E = E >>> 0;
        if (isFinite(K)) {
          K = K >>> 0;
          if (T === undefined) {
            T = "utf8";
          }
        } else {
          T = K;
          K = undefined;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      let X = this.length - E;
      if (K === undefined || K > X) {
        K = X;
      }
      if (A.length > 0 && (K < 0 || E < 0) || E > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!T) {
        T = "utf8";
      }
      let P = false;
      for (;;) {
        switch (T) {
          case "hex":
            return kS(this, A, E, K);
          case "utf8":
          case "utf-8":
            return wS(this, A, E, K);
          case "ascii":
          case "latin1":
          case "binary":
            return OS(this, A, E, K);
          case "base64":
            return BS(this, A, E, K);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return xS(this, A, E, K);
          default:
            if (P) {
              throw new TypeError("Unknown encoding: " + T);
            }
            T = ("" + T).toLowerCase();
            P = true;
        }
      }
    };
    Y.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function yS(A, E, K) {
      if (E === 0 && K === A.length) {
        return S.fromByteArray(A);
      } else {
        return S.fromByteArray(A.slice(E, K));
      }
    }
    function o2(A, E, K) {
      K = Math.min(A.length, K);
      let T = [];
      let X = E;
      for (; X < K;) {
        let P = A[X];
        let F = null;
        let q = P > 239 ? 4 : P > 223 ? 3 : P > 191 ? 2 : 1;
        if (X + q <= K) {
          let h;
          let O;
          let v;
          let x;
          switch (q) {
            case 1:
              if (P < 128) {
                F = P;
              }
              break;
            case 2:
              h = A[X + 1];
              if ((h & 192) === 128) {
                x = (P & 31) << 6 | h & 63;
                if (x > 127) {
                  F = x;
                }
              }
              break;
            case 3:
              h = A[X + 1];
              O = A[X + 2];
              if ((h & 192) === 128 && (O & 192) === 128) {
                x = (P & 15) << 12 | (h & 63) << 6 | O & 63;
                if (x > 2047 && (x < 55296 || x > 57343)) {
                  F = x;
                }
              }
              break;
            case 4:
              h = A[X + 1];
              O = A[X + 2];
              v = A[X + 3];
              if ((h & 192) === 128 && (O & 192) === 128 && (v & 192) === 128) {
                x = (P & 15) << 18 | (h & 63) << 12 | (O & 63) << 6 | v & 63;
                if (x > 65535 && x < 1114112) {
                  F = x;
                }
              }
          }
        }
        if (F === null) {
          F = 65533;
          q = 1;
        } else if (F > 65535) {
          F -= 65536;
          T.push(F >>> 10 & 1023 | 55296);
          F = F & 1023 | 56320;
        }
        T.push(F);
        X += q;
      }
      return cS(T);
    }
    var e2 = 4096;
    function cS(A) {
      let E = A.length;
      if (E <= e2) {
        return String.fromCharCode.apply(String, A);
      }
      let K = "";
      let T = 0;
      for (; T < E;) {
        K += String.fromCharCode.apply(String, A.slice(T, T += e2));
      }
      return K;
    }
    function mS(A, E, K) {
      let T = "";
      K = Math.min(A.length, K);
      for (let X = E; X < K; ++X) {
        T += String.fromCharCode(A[X] & 127);
      }
      return T;
    }
    function gS(A, E, K) {
      let T = "";
      K = Math.min(A.length, K);
      for (let X = E; X < K; ++X) {
        T += String.fromCharCode(A[X]);
      }
      return T;
    }
    function hS(A, E, K) {
      let T = A.length;
      if (!E || E < 0) {
        E = 0;
      }
      if (!K || K < 0 || K > T) {
        K = T;
      }
      let X = "";
      for (let P = E; P < K; ++P) {
        X += uS[A[P]];
      }
      return X;
    }
    function lS(A, E, K) {
      let T = A.slice(E, K);
      let X = "";
      for (let P = 0; P < T.length - 1; P += 2) {
        X += String.fromCharCode(T[P] + T[P + 1] * 256);
      }
      return X;
    }
    Y.prototype.slice = function (A, E) {
      let K = this.length;
      A = ~~A;
      E = E === undefined ? K : ~~E;
      if (A < 0) {
        A += K;
        if (A < 0) {
          A = 0;
        }
      } else if (A > K) {
        A = K;
      }
      if (E < 0) {
        E += K;
        if (E < 0) {
          E = 0;
        }
      } else if (E > K) {
        E = K;
      }
      if (E < A) {
        E = A;
      }
      let T = this.subarray(A, E);
      Object.setPrototypeOf(T, Y.prototype);
      return T;
    };
    function m(A, E, K) {
      if (A % 1 !== 0 || A < 0) {
        throw new RangeError("offset is not uint");
      }
      if (A + E > K) {
        throw new RangeError("Trying to access beyond buffer length");
      }
    }
    Y.prototype.readUintLE = Y.prototype.readUIntLE = function (A, E, K) {
      A = A >>> 0;
      E = E >>> 0;
      if (!K) {
        m(A, E, this.length);
      }
      let T = this[A];
      let X = 1;
      let P = 0;
      for (; ++P < E && (X *= 256);) {
        T += this[A + P] * X;
      }
      return T;
    };
    Y.prototype.readUintBE = Y.prototype.readUIntBE = function (A, E, K) {
      A = A >>> 0;
      E = E >>> 0;
      if (!K) {
        m(A, E, this.length);
      }
      let T = this[A + --E];
      let X = 1;
      for (; E > 0 && (X *= 256);) {
        T += this[A + --E] * X;
      }
      return T;
    };
    Y.prototype.readUint8 = Y.prototype.readUInt8 = function (A, E) {
      A = A >>> 0;
      if (!E) {
        m(A, 1, this.length);
      }
      return this[A];
    };
    Y.prototype.readUint16LE = Y.prototype.readUInt16LE = function (A, E) {
      A = A >>> 0;
      if (!E) {
        m(A, 2, this.length);
      }
      return this[A] | this[A + 1] << 8;
    };
    Y.prototype.readUint16BE = Y.prototype.readUInt16BE = function (A, E) {
      A = A >>> 0;
      if (!E) {
        m(A, 2, this.length);
      }
      return this[A] << 8 | this[A + 1];
    };
    Y.prototype.readUint32LE = Y.prototype.readUInt32LE = function (A, E) {
      A = A >>> 0;
      if (!E) {
        m(A, 4, this.length);
      }
      return (this[A] | this[A + 1] << 8 | this[A + 2] << 16) + this[A + 3] * 16777216;
    };
    Y.prototype.readUint32BE = Y.prototype.readUInt32BE = function (A, E) {
      A = A >>> 0;
      if (!E) {
        m(A, 4, this.length);
      }
      return this[A] * 16777216 + (this[A + 1] << 16 | this[A + 2] << 8 | this[A + 3]);
    };
    Y.prototype.readBigUInt64LE = G2(function (A) {
      A = A >>> 0;
      J2(A, "offset");
      let E = this[A];
      let K = this[A + 7];
      if (E === undefined || K === undefined) {
        _2(A, this.length - 8);
      }
      let T = E + this[++A] * 256 + this[++A] * 65536 + this[++A] * 16777216;
      let X = this[++A] + this[++A] * 256 + this[++A] * 65536 + K * 16777216;
      return BigInt(T) + (BigInt(X) << BigInt(32));
    });
    Y.prototype.readBigUInt64BE = G2(function (A) {
      A = A >>> 0;
      J2(A, "offset");
      let E = this[A];
      let K = this[A + 7];
      if (E === undefined || K === undefined) {
        _2(A, this.length - 8);
      }
      let T = E * 16777216 + this[++A] * 65536 + this[++A] * 256 + this[++A];
      let X = this[++A] * 16777216 + this[++A] * 65536 + this[++A] * 256 + K;
      return (BigInt(T) << BigInt(32)) + BigInt(X);
    });
    Y.prototype.readIntLE = function (A, E, K) {
      A = A >>> 0;
      E = E >>> 0;
      if (!K) {
        m(A, E, this.length);
      }
      let T = this[A];
      let X = 1;
      let P = 0;
      for (; ++P < E && (X *= 256);) {
        T += this[A + P] * X;
      }
      X *= 128;
      if (T >= X) {
        T -= Math.pow(2, E * 8);
      }
      return T;
    };
    Y.prototype.readIntBE = function (A, E, K) {
      A = A >>> 0;
      E = E >>> 0;
      if (!K) {
        m(A, E, this.length);
      }
      let T = E;
      let X = 1;
      let P = this[A + --T];
      for (; T > 0 && (X *= 256);) {
        P += this[A + --T] * X;
      }
      X *= 128;
      if (P >= X) {
        P -= Math.pow(2, E * 8);
      }
      return P;
    };
    Y.prototype.readInt8 = function (A, E) {
      A = A >>> 0;
      if (!E) {
        m(A, 1, this.length);
      }
      if (this[A] & 128) {
        return (255 - this[A] + 1) * -1;
      } else {
        return this[A];
      }
    };
    Y.prototype.readInt16LE = function (A, E) {
      A = A >>> 0;
      if (!E) {
        m(A, 2, this.length);
      }
      let K = this[A] | this[A + 1] << 8;
      if (K & 32768) {
        return K | 4294901760;
      } else {
        return K;
      }
    };
    Y.prototype.readInt16BE = function (A, E) {
      A = A >>> 0;
      if (!E) {
        m(A, 2, this.length);
      }
      let K = this[A + 1] | this[A] << 8;
      if (K & 32768) {
        return K | 4294901760;
      } else {
        return K;
      }
    };
    Y.prototype.readInt32LE = function (A, E) {
      A = A >>> 0;
      if (!E) {
        m(A, 4, this.length);
      }
      return this[A] | this[A + 1] << 8 | this[A + 2] << 16 | this[A + 3] << 24;
    };
    Y.prototype.readInt32BE = function (A, E) {
      A = A >>> 0;
      if (!E) {
        m(A, 4, this.length);
      }
      return this[A] << 24 | this[A + 1] << 16 | this[A + 2] << 8 | this[A + 3];
    };
    Y.prototype.readBigInt64LE = G2(function (A) {
      A = A >>> 0;
      J2(A, "offset");
      let E = this[A];
      let K = this[A + 7];
      if (E === undefined || K === undefined) {
        _2(A, this.length - 8);
      }
      let T = this[A + 4] + this[A + 5] * 256 + this[A + 6] * 65536 + (K << 24);
      return (BigInt(T) << BigInt(32)) + BigInt(E + this[++A] * 256 + this[++A] * 65536 + this[++A] * 16777216);
    });
    Y.prototype.readBigInt64BE = G2(function (A) {
      A = A >>> 0;
      J2(A, "offset");
      let E = this[A];
      let K = this[A + 7];
      if (E === undefined || K === undefined) {
        _2(A, this.length - 8);
      }
      let T = (E << 24) + this[++A] * 65536 + this[++A] * 256 + this[++A];
      return (BigInt(T) << BigInt(32)) + BigInt(this[++A] * 16777216 + this[++A] * 65536 + this[++A] * 256 + K);
    });
    Y.prototype.readFloatLE = function (A, E) {
      A = A >>> 0;
      if (!E) {
        m(A, 4, this.length);
      }
      return N.read(this, A, true, 23, 4);
    };
    Y.prototype.readFloatBE = function (A, E) {
      A = A >>> 0;
      if (!E) {
        m(A, 4, this.length);
      }
      return N.read(this, A, false, 23, 4);
    };
    Y.prototype.readDoubleLE = function (A, E) {
      A = A >>> 0;
      if (!E) {
        m(A, 8, this.length);
      }
      return N.read(this, A, true, 52, 8);
    };
    Y.prototype.readDoubleBE = function (A, E) {
      A = A >>> 0;
      if (!E) {
        m(A, 8, this.length);
      }
      return N.read(this, A, false, 52, 8);
    };
    function d(A, E, K, T, X, P) {
      if (!Y.isBuffer(A)) {
        throw new TypeError("\"buffer\" argument must be a Buffer instance");
      }
      if (E > X || E < P) {
        throw new RangeError("\"value\" argument is out of bounds");
      }
      if (K + T > A.length) {
        throw new RangeError("Index out of range");
      }
    }
    Y.prototype.writeUintLE = Y.prototype.writeUIntLE = function (A, E, K, T) {
      A = +A;
      E = E >>> 0;
      K = K >>> 0;
      if (!T) {
        let F = Math.pow(2, K * 8) - 1;
        d(this, A, E, K, F, 0);
      }
      let X = 1;
      let P = 0;
      for (this[E] = A & 255; ++P < K && (X *= 256);) {
        this[E + P] = A / X & 255;
      }
      return E + K;
    };
    Y.prototype.writeUintBE = Y.prototype.writeUIntBE = function (A, E, K, T) {
      A = +A;
      E = E >>> 0;
      K = K >>> 0;
      if (!T) {
        let F = Math.pow(2, K * 8) - 1;
        d(this, A, E, K, F, 0);
      }
      let X = K - 1;
      let P = 1;
      for (this[E + X] = A & 255; --X >= 0 && (P *= 256);) {
        this[E + X] = A / P & 255;
      }
      return E + K;
    };
    Y.prototype.writeUint8 = Y.prototype.writeUInt8 = function (A, E, K) {
      A = +A;
      E = E >>> 0;
      if (!K) {
        d(this, A, E, 1, 255, 0);
      }
      this[E] = A & 255;
      return E + 1;
    };
    Y.prototype.writeUint16LE = Y.prototype.writeUInt16LE = function (A, E, K) {
      A = +A;
      E = E >>> 0;
      if (!K) {
        d(this, A, E, 2, 65535, 0);
      }
      this[E] = A & 255;
      this[E + 1] = A >>> 8;
      return E + 2;
    };
    Y.prototype.writeUint16BE = Y.prototype.writeUInt16BE = function (A, E, K) {
      A = +A;
      E = E >>> 0;
      if (!K) {
        d(this, A, E, 2, 65535, 0);
      }
      this[E] = A >>> 8;
      this[E + 1] = A & 255;
      return E + 2;
    };
    Y.prototype.writeUint32LE = Y.prototype.writeUInt32LE = function (A, E, K) {
      A = +A;
      E = E >>> 0;
      if (!K) {
        d(this, A, E, 4, 4294967295, 0);
      }
      this[E + 3] = A >>> 24;
      this[E + 2] = A >>> 16;
      this[E + 1] = A >>> 8;
      this[E] = A & 255;
      return E + 4;
    };
    Y.prototype.writeUint32BE = Y.prototype.writeUInt32BE = function (A, E, K) {
      A = +A;
      E = E >>> 0;
      if (!K) {
        d(this, A, E, 4, 4294967295, 0);
      }
      this[E] = A >>> 24;
      this[E + 1] = A >>> 16;
      this[E + 2] = A >>> 8;
      this[E + 3] = A & 255;
      return E + 4;
    };
    function t2(A, E, K, T, X) {
      ES(E, T, X, A, K, 7);
      let P = Number(E & BigInt(4294967295));
      A[K++] = P;
      P = P >> 8;
      A[K++] = P;
      P = P >> 8;
      A[K++] = P;
      P = P >> 8;
      A[K++] = P;
      let F = Number(E >> BigInt(32) & BigInt(4294967295));
      A[K++] = F;
      F = F >> 8;
      A[K++] = F;
      F = F >> 8;
      A[K++] = F;
      F = F >> 8;
      A[K++] = F;
      return K;
    }
    function f2(A, E, K, T, X) {
      ES(E, T, X, A, K, 7);
      let P = Number(E & BigInt(4294967295));
      A[K + 7] = P;
      P = P >> 8;
      A[K + 6] = P;
      P = P >> 8;
      A[K + 5] = P;
      P = P >> 8;
      A[K + 4] = P;
      let F = Number(E >> BigInt(32) & BigInt(4294967295));
      A[K + 3] = F;
      F = F >> 8;
      A[K + 2] = F;
      F = F >> 8;
      A[K + 1] = F;
      F = F >> 8;
      A[K] = F;
      return K + 8;
    }
    Y.prototype.writeBigUInt64LE = G2(function (A, E = 0) {
      return t2(this, A, E, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Y.prototype.writeBigUInt64BE = G2(function (A, E = 0) {
      return f2(this, A, E, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Y.prototype.writeIntLE = function (A, E, K, T) {
      A = +A;
      E = E >>> 0;
      if (!T) {
        let q = Math.pow(2, K * 8 - 1);
        d(this, A, E, K, q - 1, -q);
      }
      let X = 0;
      let P = 1;
      let F = 0;
      for (this[E] = A & 255; ++X < K && (P *= 256);) {
        if (A < 0 && F === 0 && this[E + X - 1] !== 0) {
          F = 1;
        }
        this[E + X] = (A / P >> 0) - F & 255;
      }
      return E + K;
    };
    Y.prototype.writeIntBE = function (A, E, K, T) {
      A = +A;
      E = E >>> 0;
      if (!T) {
        let q = Math.pow(2, K * 8 - 1);
        d(this, A, E, K, q - 1, -q);
      }
      let X = K - 1;
      let P = 1;
      let F = 0;
      for (this[E + X] = A & 255; --X >= 0 && (P *= 256);) {
        if (A < 0 && F === 0 && this[E + X + 1] !== 0) {
          F = 1;
        }
        this[E + X] = (A / P >> 0) - F & 255;
      }
      return E + K;
    };
    Y.prototype.writeInt8 = function (A, E, K) {
      A = +A;
      E = E >>> 0;
      if (!K) {
        d(this, A, E, 1, 127, -128);
      }
      if (A < 0) {
        A = 255 + A + 1;
      }
      this[E] = A & 255;
      return E + 1;
    };
    Y.prototype.writeInt16LE = function (A, E, K) {
      A = +A;
      E = E >>> 0;
      if (!K) {
        d(this, A, E, 2, 32767, -32768);
      }
      this[E] = A & 255;
      this[E + 1] = A >>> 8;
      return E + 2;
    };
    Y.prototype.writeInt16BE = function (A, E, K) {
      A = +A;
      E = E >>> 0;
      if (!K) {
        d(this, A, E, 2, 32767, -32768);
      }
      this[E] = A >>> 8;
      this[E + 1] = A & 255;
      return E + 2;
    };
    Y.prototype.writeInt32LE = function (A, E, K) {
      A = +A;
      E = E >>> 0;
      if (!K) {
        d(this, A, E, 4, 2147483647, -2147483648);
      }
      this[E] = A & 255;
      this[E + 1] = A >>> 8;
      this[E + 2] = A >>> 16;
      this[E + 3] = A >>> 24;
      return E + 4;
    };
    Y.prototype.writeInt32BE = function (A, E, K) {
      A = +A;
      E = E >>> 0;
      if (!K) {
        d(this, A, E, 4, 2147483647, -2147483648);
      }
      if (A < 0) {
        A = 4294967295 + A + 1;
      }
      this[E] = A >>> 24;
      this[E + 1] = A >>> 16;
      this[E + 2] = A >>> 8;
      this[E + 3] = A & 255;
      return E + 4;
    };
    Y.prototype.writeBigInt64LE = G2(function (A, E = 0) {
      return t2(this, A, E, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Y.prototype.writeBigInt64BE = G2(function (A, E = 0) {
      return f2(this, A, E, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function SS(A, E, K, T, X, P) {
      if (K + T > A.length) {
        throw new RangeError("Index out of range");
      }
      if (K < 0) {
        throw new RangeError("Index out of range");
      }
    }
    function AS(A, E, K, T, X) {
      E = +E;
      K = K >>> 0;
      if (!X) {
        SS(A, E, K, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
      }
      N.write(A, E, K, T, 23, 4);
      return K + 4;
    }
    Y.prototype.writeFloatLE = function (A, E, K) {
      return AS(this, A, E, true, K);
    };
    Y.prototype.writeFloatBE = function (A, E, K) {
      return AS(this, A, E, false, K);
    };
    function CS(A, E, K, T, X) {
      E = +E;
      K = K >>> 0;
      if (!X) {
        SS(A, E, K, 8, 1.7976931348623157e+308, -1.7976931348623157e+308);
      }
      N.write(A, E, K, T, 52, 8);
      return K + 8;
    }
    Y.prototype.writeDoubleLE = function (A, E, K) {
      return CS(this, A, E, true, K);
    };
    Y.prototype.writeDoubleBE = function (A, E, K) {
      return CS(this, A, E, false, K);
    };
    Y.prototype.copy = function (A, E, K, T) {
      if (!Y.isBuffer(A)) {
        throw new TypeError("argument should be a Buffer");
      }
      if (!K) {
        K = 0;
      }
      if (!T && T !== 0) {
        T = this.length;
      }
      if (E >= A.length) {
        E = A.length;
      }
      if (!E) {
        E = 0;
      }
      if (T > 0 && T < K) {
        T = K;
      }
      if (T === K || A.length === 0 || this.length === 0) {
        return 0;
      }
      if (E < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (K < 0 || K >= this.length) {
        throw new RangeError("Index out of range");
      }
      if (T < 0) {
        throw new RangeError("sourceEnd out of bounds");
      }
      if (T > this.length) {
        T = this.length;
      }
      if (A.length - E < T - K) {
        T = A.length - E + K;
      }
      let X = T - K;
      if (this === A && typeof Uint8Array.prototype.copyWithin == "function") {
        this.copyWithin(E, K, T);
      } else {
        Uint8Array.prototype.set.call(A, this.subarray(K, T), E);
      }
      return X;
    };
    Y.prototype.fill = function (A, E, K, T) {
      if (typeof A == "string") {
        if (typeof E == "string") {
          T = E;
          E = 0;
          K = this.length;
        } else if (typeof K == "string") {
          T = K;
          K = this.length;
        }
        if (T !== undefined && typeof T != "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof T == "string" && !Y.isEncoding(T)) {
          throw new TypeError("Unknown encoding: " + T);
        }
        if (A.length === 1) {
          let P = A.charCodeAt(0);
          if (T === "utf8" && P < 128 || T === "latin1") {
            A = P;
          }
        }
      } else if (typeof A == "number") {
        A = A & 255;
      } else if (typeof A == "boolean") {
        A = Number(A);
      }
      if (E < 0 || this.length < E || this.length < K) {
        throw new RangeError("Out of range index");
      }
      if (K <= E) {
        return this;
      }
      E = E >>> 0;
      K = K === undefined ? this.length : K >>> 0;
      if (!A) {
        A = 0;
      }
      let X;
      if (typeof A == "number") {
        for (X = E; X < K; ++X) {
          this[X] = A;
        }
      } else {
        let P = Y.isBuffer(A) ? A : Y.from(A, T);
        let F = P.length;
        if (F === 0) {
          throw new TypeError("The value \"" + A + "\" is invalid for argument \"value\"");
        }
        for (X = 0; X < K - E; ++X) {
          this[X + E] = P[X % F];
        }
      }
      return this;
    };
    var Z2 = {};
    function w2(A, E, K) {
      Z2[A] = class extends K {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: E.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${A}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return A;
        }
        set code(T) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value: T,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${A}]: ${this.message}`;
        }
      };
    }
    w2("ERR_BUFFER_OUT_OF_BOUNDS", function (A) {
      if (A) {
        return `${A} is outside of buffer bounds`;
      } else {
        return "Attempt to access memory outside buffer bounds";
      }
    }, RangeError);
    w2("ERR_INVALID_ARG_TYPE", function (A, E) {
      return `The "${A}" argument must be of type number. Received type ${typeof E}`;
    }, TypeError);
    w2("ERR_OUT_OF_RANGE", function (A, E, K) {
      let T = `The value of "${A}" is out of range.`;
      let X = K;
      if (Number.isInteger(K) && Math.abs(K) > 4294967296) {
        X = NS(String(K));
      } else if (typeof K == "bigint") {
        X = String(K);
        if (K > BigInt(2) ** BigInt(32) || K < -(BigInt(2) ** BigInt(32))) {
          X = NS(X);
        }
        X += "n";
      }
      T += ` It must be ${E}. Received ${X}`;
      return T;
    }, RangeError);
    function NS(A) {
      let E = "";
      let K = A.length;
      let T = A[0] === "-" ? 1 : 0;
      for (; K >= T + 4; K -= 3) {
        E = `_${A.slice(K - 3, K)}${E}`;
      }
      return `${A.slice(0, K)}${E}`;
    }
    function pS(A, E, K) {
      J2(E, "offset");
      if (A[E] === undefined || A[E + K] === undefined) {
        _2(E, A.length - (K + 1));
      }
    }
    function ES(A, E, K, T, X, P) {
      if (A > K || A < E) {
        let F = typeof E == "bigint" ? "n" : "";
        let q;
        if (P > 3) {
          if (E === 0 || E === BigInt(0)) {
            q = `>= 0${F} and < 2${F} ** ${(P + 1) * 8}${F}`;
          } else {
            q = `>= -(2${F} ** ${(P + 1) * 8 - 1}${F}) and < 2 ** ${(P + 1) * 8 - 1}${F}`;
          }
        } else {
          q = `>= ${E}${F} and <= ${K}${F}`;
        }
        throw new Z2.ERR_OUT_OF_RANGE("value", q, A);
      }
      pS(T, X, P);
    }
    function J2(A, E) {
      if (typeof A != "number") {
        throw new Z2.ERR_INVALID_ARG_TYPE(E, "number", A);
      }
    }
    function _2(A, E, K) {
      throw Math.floor(A) !== A ? (J2(A, K), new Z2.ERR_OUT_OF_RANGE(K || "offset", "an integer", A)) : E < 0 ? new Z2.ERR_BUFFER_OUT_OF_BOUNDS() : new Z2.ERR_OUT_OF_RANGE(K || "offset", `>= ${K ? 1 : 0} and <= ${E}`, A);
    }
    var dS = /[^+/0-9A-Za-z-_]/g;
    function nS(A) {
      A = A.split("=")[0];
      A = A.trim().replace(dS, "");
      if (A.length < 2) {
        return "";
      }
      for (; A.length % 4 !== 0;) {
        A = A + "=";
      }
      return A;
    }
    function O2(A, E) {
      E = E || Infinity;
      let K;
      let T = A.length;
      let X = null;
      let P = [];
      for (let F = 0; F < T; ++F) {
        K = A.charCodeAt(F);
        if (K > 55295 && K < 57344) {
          if (!X) {
            if (K > 56319) {
              if ((E -= 3) > -1) {
                P.push(239, 191, 189);
              }
              continue;
            } else if (F + 1 === T) {
              if ((E -= 3) > -1) {
                P.push(239, 191, 189);
              }
              continue;
            }
            X = K;
            continue;
          }
          if (K < 56320) {
            if ((E -= 3) > -1) {
              P.push(239, 191, 189);
            }
            X = K;
            continue;
          }
          K = (X - 55296 << 10 | K - 56320) + 65536;
        } else if (X && (E -= 3) > -1) {
          P.push(239, 191, 189);
        }
        X = null;
        if (K < 128) {
          if ((E -= 1) < 0) {
            break;
          }
          P.push(K);
        } else if (K < 2048) {
          if ((E -= 2) < 0) {
            break;
          }
          P.push(K >> 6 | 192, K & 63 | 128);
        } else if (K < 65536) {
          if ((E -= 3) < 0) {
            break;
          }
          P.push(K >> 12 | 224, K >> 6 & 63 | 128, K & 63 | 128);
        } else if (K < 1114112) {
          if ((E -= 4) < 0) {
            break;
          }
          P.push(K >> 18 | 240, K >> 12 & 63 | 128, K >> 6 & 63 | 128, K & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return P;
    }
    function aS(A) {
      let E = [];
      for (let K = 0; K < A.length; ++K) {
        E.push(A.charCodeAt(K) & 255);
      }
      return E;
    }
    function bS(A, E) {
      let K;
      let T;
      let X;
      let P = [];
      for (let F = 0; F < A.length && !((E -= 2) < 0); ++F) {
        K = A.charCodeAt(F);
        T = K >> 8;
        X = K % 256;
        P.push(X);
        P.push(T);
      }
      return P;
    }
    function KS(A) {
      return S.toByteArray(nS(A));
    }
    function L2(A, E, K, T) {
      let X;
      for (X = 0; X < T && !(X + K >= E.length || X >= A.length); ++X) {
        E[X + K] = A[X];
      }
      return X;
    }
    function e(A, E) {
      return A instanceof E || A != null && A.constructor != null && A.constructor.name != null && A.constructor.name === E.name;
    }
    function B2(A) {
      return A !== A;
    }
    var uS = function () {
      let A = "0123456789abcdef";
      let E = new Array(256);
      for (let K = 0; K < 16; ++K) {
        let T = K * 16;
        for (let X = 0; X < 16; ++X) {
          E[T + X] = A[K] + A[X];
        }
      }
      return E;
    }();
    function G2(A) {
      if (typeof BigInt === "undefined") {
        return iS;
      } else {
        return A;
      }
    }
    function iS() {
      throw new Error("BigInt not supported");
    }
  });
  YS = {};
  EA(YS, {
    Blob: () => IS,
    Buffer: () => XS.Buffer,
    File: () => PS,
    atob: () => MS,
    btoa: () => FS,
    constants: () => VS,
    createObjectURL: () => GS,
    default: () => HS.Buffer,
    isAscii: () => US,
    isUtf8: () => DS,
    kStringMaxLength: () => q2,
    resolveObjectURL: () => QS,
    transcode: () => ZS
  });
  KA(YS, g2(h2()));
  HS = g2(h2());
  XS = g2(h2());
  ({
    Blob: IS,
    File: PS,
    atob: MS,
    btoa: FS
  } = globalThis);
  ({
    createObjectURL: GS
  } = URL);
  VS = {
    __proto__: null,
    MAX_LENGTH: q2,
    MAX_STRING_LENGTH: q2,
    BYTES_PER_ELEMENT: 1
  };
  YA = XS.Buffer;
  HA = HS.Buffer;
  /*!
  * The buffer module from node.js, for the browser.
  *
  * @author   Feross Aboukhadijeh <https://feross.org>
  * @license  MIT
  */
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
});
var JS = D2(XA => {
  XA.toString = function (C) {
    switch (C) {
      case 1:
        return "A";
      case 10:
        return "NULL";
      case 28:
        return "AAAA";
      case 18:
        return "AFSDB";
      case 42:
        return "APL";
      case 257:
        return "CAA";
      case 60:
        return "CDNSKEY";
      case 59:
        return "CDS";
      case 37:
        return "CERT";
      case 5:
        return "CNAME";
      case 49:
        return "DHCID";
      case 32769:
        return "DLV";
      case 39:
        return "DNAME";
      case 48:
        return "DNSKEY";
      case 43:
        return "DS";
      case 55:
        return "HIP";
      case 13:
        return "HINFO";
      case 45:
        return "IPSECKEY";
      case 25:
        return "KEY";
      case 36:
        return "KX";
      case 29:
        return "LOC";
      case 15:
        return "MX";
      case 35:
        return "NAPTR";
      case 2:
        return "NS";
      case 47:
        return "NSEC";
      case 50:
        return "NSEC3";
      case 51:
        return "NSEC3PARAM";
      case 12:
        return "PTR";
      case 46:
        return "RRSIG";
      case 17:
        return "RP";
      case 24:
        return "SIG";
      case 6:
        return "SOA";
      case 99:
        return "SPF";
      case 33:
        return "SRV";
      case 44:
        return "SSHFP";
      case 32768:
        return "TA";
      case 249:
        return "TKEY";
      case 52:
        return "TLSA";
      case 250:
        return "TSIG";
      case 16:
        return "TXT";
      case 252:
        return "AXFR";
      case 251:
        return "IXFR";
      case 41:
        return "OPT";
      case 255:
        return "ANY";
    }
    return "UNKNOWN_" + C;
  };
  XA.toType = function (C) {
    switch (C.toUpperCase()) {
      case "A":
        return 1;
      case "NULL":
        return 10;
      case "AAAA":
        return 28;
      case "AFSDB":
        return 18;
      case "APL":
        return 42;
      case "CAA":
        return 257;
      case "CDNSKEY":
        return 60;
      case "CDS":
        return 59;
      case "CERT":
        return 37;
      case "CNAME":
        return 5;
      case "DHCID":
        return 49;
      case "DLV":
        return 32769;
      case "DNAME":
        return 39;
      case "DNSKEY":
        return 48;
      case "DS":
        return 43;
      case "HIP":
        return 55;
      case "HINFO":
        return 13;
      case "IPSECKEY":
        return 45;
      case "KEY":
        return 25;
      case "KX":
        return 36;
      case "LOC":
        return 29;
      case "MX":
        return 15;
      case "NAPTR":
        return 35;
      case "NS":
        return 2;
      case "NSEC":
        return 47;
      case "NSEC3":
        return 50;
      case "NSEC3PARAM":
        return 51;
      case "PTR":
        return 12;
      case "RRSIG":
        return 46;
      case "RP":
        return 17;
      case "SIG":
        return 24;
      case "SOA":
        return 6;
      case "SPF":
        return 99;
      case "SRV":
        return 33;
      case "SSHFP":
        return 44;
      case "TA":
        return 32768;
      case "TKEY":
        return 249;
      case "TLSA":
        return 52;
      case "TSIG":
        return 250;
      case "TXT":
        return 16;
      case "AXFR":
        return 252;
      case "IXFR":
        return 251;
      case "OPT":
        return 41;
      case "ANY":
        return 255;
      case "*":
        return 255;
    }
    if (C.toUpperCase().startsWith("UNKNOWN_")) {
      return parseInt(C.slice(8));
    }
    return 0;
  };
});
var $S = D2(MA => {
  MA.toString = function (C) {
    switch (C) {
      case 0:
        return "NOERROR";
      case 1:
        return "FORMERR";
      case 2:
        return "SERVFAIL";
      case 3:
        return "NXDOMAIN";
      case 4:
        return "NOTIMP";
      case 5:
        return "REFUSED";
      case 6:
        return "YXDOMAIN";
      case 7:
        return "YXRRSET";
      case 8:
        return "NXRRSET";
      case 9:
        return "NOTAUTH";
      case 10:
        return "NOTZONE";
      case 11:
        return "RCODE_11";
      case 12:
        return "RCODE_12";
      case 13:
        return "RCODE_13";
      case 14:
        return "RCODE_14";
      case 15:
        return "RCODE_15";
    }
    return "RCODE_" + C;
  };
  MA.toRcode = function (C) {
    switch (C.toUpperCase()) {
      case "NOERROR":
        return 0;
      case "FORMERR":
        return 1;
      case "SERVFAIL":
        return 2;
      case "NXDOMAIN":
        return 3;
      case "NOTIMP":
        return 4;
      case "REFUSED":
        return 5;
      case "YXDOMAIN":
        return 6;
      case "YXRRSET":
        return 7;
      case "NXRRSET":
        return 8;
      case "NOTAUTH":
        return 9;
      case "NOTZONE":
        return 10;
      case "RCODE_11":
        return 11;
      case "RCODE_12":
        return 12;
      case "RCODE_13":
        return 13;
      case "RCODE_14":
        return 14;
      case "RCODE_15":
        return 15;
    }
    return 0;
  };
});
var WS = D2(UA => {
  UA.toString = function (C) {
    switch (C) {
      case 0:
        return "QUERY";
      case 1:
        return "IQUERY";
      case 2:
        return "STATUS";
      case 3:
        return "OPCODE_3";
      case 4:
        return "NOTIFY";
      case 5:
        return "UPDATE";
      case 6:
        return "OPCODE_6";
      case 7:
        return "OPCODE_7";
      case 8:
        return "OPCODE_8";
      case 9:
        return "OPCODE_9";
      case 10:
        return "OPCODE_10";
      case 11:
        return "OPCODE_11";
      case 12:
        return "OPCODE_12";
      case 13:
        return "OPCODE_13";
      case 14:
        return "OPCODE_14";
      case 15:
        return "OPCODE_15";
    }
    return "OPCODE_" + C;
  };
  UA.toOpcode = function (C) {
    switch (C.toUpperCase()) {
      case "QUERY":
        return 0;
      case "IQUERY":
        return 1;
      case "STATUS":
        return 2;
      case "OPCODE_3":
        return 3;
      case "NOTIFY":
        return 4;
      case "UPDATE":
        return 5;
      case "OPCODE_6":
        return 6;
      case "OPCODE_7":
        return 7;
      case "OPCODE_8":
        return 8;
      case "OPCODE_9":
        return 9;
      case "OPCODE_10":
        return 10;
      case "OPCODE_11":
        return 11;
      case "OPCODE_12":
        return 12;
      case "OPCODE_13":
        return 13;
      case "OPCODE_14":
        return 14;
      case "OPCODE_15":
        return 15;
    }
    return 0;
  };
});
var _S = D2(QA => {
  QA.toString = function (C) {
    switch (C) {
      case 1:
        return "IN";
      case 2:
        return "CS";
      case 3:
        return "CH";
      case 4:
        return "HS";
      case 255:
        return "ANY";
    }
    return "UNKNOWN_" + C;
  };
  QA.toClass = function (C) {
    switch (C.toUpperCase()) {
      case "IN":
        return 1;
      case "CS":
        return 2;
      case "CH":
        return 3;
      case "HS":
        return 4;
      case "ANY":
        return 255;
    }
    return 0;
  };
});
var zS = D2($A => {
  $A.toString = function (C) {
    switch (C) {
      case 1:
        return "LLQ";
      case 2:
        return "UL";
      case 3:
        return "NSID";
      case 5:
        return "DAU";
      case 6:
        return "DHU";
      case 7:
        return "N3U";
      case 8:
        return "CLIENT_SUBNET";
      case 9:
        return "EXPIRE";
      case 10:
        return "COOKIE";
      case 11:
        return "TCP_KEEPALIVE";
      case 12:
        return "PADDING";
      case 13:
        return "CHAIN";
      case 14:
        return "KEY_TAG";
      case 26946:
        return "DEVICEID";
    }
    if (C < 0) {
      return null;
    }
    return `OPTION_${C}`;
  };
  $A.toCode = function (C) {
    if (typeof C === "number") {
      return C;
    }
    if (!C) {
      return -1;
    }
    switch (C.toUpperCase()) {
      case "OPTION_0":
        return 0;
      case "LLQ":
        return 1;
      case "UL":
        return 2;
      case "NSID":
        return 3;
      case "OPTION_4":
        return 4;
      case "DAU":
        return 5;
      case "DHU":
        return 6;
      case "N3U":
        return 7;
      case "CLIENT_SUBNET":
        return 8;
      case "EXPIRE":
        return 9;
      case "COOKIE":
        return 10;
      case "TCP_KEEPALIVE":
        return 11;
      case "PADDING":
        return 12;
      case "CHAIN":
        return 13;
      case "KEY_TAG":
        return 14;
      case "DEVICEID":
        return 26946;
      case "OPTION_65535":
        return 65535;
    }
    let S = C.match(/_(\d+)$/);
    if (S) {
      return parseInt(S[1], 10);
    }
    return -1;
  };
});
var qS = D2((LS, d2) => {
  var jS = function (C) {
    Object.defineProperty(C, "__esModule", {
      value: true
    });
    C.decode = j;
    C.encode = y;
    C.familyOf = W;
    C.name = undefined;
    C.sizeOf = J;
    C.v6 = C.v4 = undefined;
    let S = /^(\d{1,3}\.){3,3}\d{1,3}$/;
    let N = 4;
    let R = /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;
    let H = 16;
    let M = {
      name: "v4",
      size: N,
      isFormat: Z => S.test(Z),
      encode(Z, U, I) {
        I = ~~I;
        U = U || new Uint8Array(I + N);
        let D = Z.length;
        let $ = 0;
        for (let z = 0; z < D;) {
          let k = Z.charCodeAt(z++);
          if (k === 46) {
            U[I++] = $;
            $ = 0;
          } else {
            $ = $ * 10 + (k - 48);
          }
        }
        U[I] = $;
        return U;
      },
      decode(Z, U) {
        U = ~~U;
        return `${Z[U++]}.${Z[U++]}.${Z[U++]}.${Z[U]}`;
      }
    };
    C.v4 = M;
    let V = {
      name: "v6",
      size: H,
      isFormat: Z => Z.length > 0 && R.test(Z),
      encode(Z, U, I) {
        I = ~~I;
        let D = I + H;
        let $ = -1;
        let z = 0;
        let k = 0;
        let L = true;
        let c = false;
        U = U || new Uint8Array(I + H);
        for (let B = 0; B < Z.length; B++) {
          let w = Z.charCodeAt(B);
          if (w === 58) {
            if (L) {
              if ($ !== -1) {
                if (I < D) {
                  U[I] = 0;
                }
                if (I < D - 1) {
                  U[I + 1] = 0;
                }
                I += 2;
              } else if (I < D) {
                $ = I;
              }
            } else {
              if (c === true) {
                if (I < D) {
                  U[I] = k;
                }
                I++;
              } else {
                if (I < D) {
                  U[I] = z >> 8;
                }
                if (I < D - 1) {
                  U[I + 1] = z & 255;
                }
                I += 2;
              }
              z = 0;
              k = 0;
            }
            L = true;
            c = false;
          } else if (w === 46) {
            if (I < D) {
              U[I] = k;
            }
            I++;
            k = 0;
            z = 0;
            L = false;
            c = true;
          } else {
            L = false;
            if (w >= 97) {
              w -= 87;
            } else if (w >= 65) {
              w -= 55;
            } else {
              w -= 48;
              k = k * 10 + w;
            }
            z = (z << 4) + w;
          }
        }
        if (L === false) {
          if (c === true) {
            if (I < D) {
              U[I] = k;
            }
            I++;
          } else {
            if (I < D) {
              U[I] = z >> 8;
            }
            if (I < D - 1) {
              U[I + 1] = z & 255;
            }
            I += 2;
          }
        } else if ($ === 0) {
          if (I < D) {
            U[I] = 0;
          }
          if (I < D - 1) {
            U[I + 1] = 0;
          }
          I += 2;
        } else if ($ !== -1) {
          I += 2;
          for (let B = Math.min(I - 1, D - 1); B >= $ + 2; B--) {
            U[B] = U[B - 2];
          }
          U[$] = 0;
          U[$ + 1] = 0;
          $ = I;
        }
        if ($ !== I && $ !== -1) {
          if (I > D - 2) {
            I = D - 2;
          }
          while (D > $) {
            U[--D] = I < D && I > $ ? U[--I] : 0;
          }
        } else {
          while (I < D) {
            U[I++] = 0;
          }
        }
        return U;
      },
      decode(Z, U) {
        U = ~~U;
        let I = "";
        for (let D = 0; D < H; D += 2) {
          if (D !== 0) {
            I += ":";
          }
          I += (Z[U + D] << 8 | Z[U + D + 1]).toString(16);
        }
        return I.replace(/(^|:)0(:0)*:0(:|$)/, "$1::$3").replace(/:{3,4}/, "::");
      }
    };
    C.v6 = V;
    let Y = "ip";
    C.name = Y;
    function J(Z) {
      if (M.isFormat(Z)) {
        return M.size;
      }
      if (V.isFormat(Z)) {
        return V.size;
      }
      throw Error(`Invalid ip address: ${Z}`);
    }
    function W(Z) {
      if (J(Z) === M.size) {
        return 1;
      } else {
        return 2;
      }
    }
    function y(Z, U, I) {
      I = ~~I;
      let D = J(Z);
      if (typeof U === "function") {
        U = U(I + D);
      }
      if (D === M.size) {
        return M.encode(Z, U, I);
      }
      return V.encode(Z, U, I);
    }
    function j(Z, U, I) {
      U = ~~U;
      I = I || Z.length - U;
      if (I === M.size) {
        return M.decode(Z, U, I);
      }
      if (I === V.size) {
        return V.decode(Z, U, I);
      }
      throw Error(`Invalid buffer size needs to be ${M.size} for v4 or ${V.size} for v6.`);
    }
    if ("default" in C) {
      return C.default;
    } else {
      return C;
    }
  }({});
  if (typeof define === "function" && define.amd) {
    define([], function () {
      return jS;
    });
  } else if (typeof d2 === "object" && typeof LS === "object") {
    d2.exports = jS;
  }
});
var vS = D2(vA => {
  var Q = (p2(), TS(l2)).Buffer;
  var F2 = JS();
  var zA = $S();
  var jA = WS();
  var k2 = _S();
  var b2 = zS();
  var V2 = qS();
  var G = vA.name = {};
  G.encode = function (C, S, N, {
    mail: R = false
  } = {}) {
    if (!S) {
      S = Q.alloc(G.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let H = N;
    let M = C.replace(/^\.|\.$/gm, "");
    if (M.length) {
      let V = [];
      if (R) {
        let Y = "";
        M.split(".").forEach(J => {
          if (J.endsWith("\\")) {
            Y += (Y.length ? "." : "") + J.slice(0, -1);
          } else if (V.length === 0 && Y.length) {
            V.push(Y + "." + J);
          } else {
            V.push(J);
          }
        });
      } else {
        V = M.split(".");
      }
      for (let Y = 0; Y < V.length; Y++) {
        let J = S.write(V[Y], N + 1);
        S[N] = J;
        N += J + 1;
      }
    }
    S[N++] = 0;
    G.encode.bytes = N - H;
    return S;
  };
  G.encode.bytes = 0;
  G.decode = function (C, S, {
    mail: N = false
  } = {}) {
    if (!S) {
      S = 0;
    }
    let R = [];
    let H = S;
    let M = 0;
    let V = 0;
    let Y = false;
    while (true) {
      if (S >= C.length) {
        throw new Error("Cannot decode name (buffer overflow)");
      }
      let J = C[S++];
      V += Y ? 0 : 1;
      if (J === 0) {
        break;
      } else if ((J & 192) === 0) {
        if (S + J > C.length) {
          throw new Error("Cannot decode name (buffer overflow)");
        }
        M += J + 1;
        if (M > 254) {
          throw new Error("Cannot decode name (name too long)");
        }
        let W = C.toString("utf-8", S, S + J);
        if (N) {
          W = W.replace(/\./g, "\\.");
        }
        R.push(W);
        S += J;
        V += Y ? 0 : J;
      } else if ((J & 192) === 192) {
        if (S + 1 > C.length) {
          throw new Error("Cannot decode name (buffer overflow)");
        }
        let W = C.readUInt16BE(S - 1) - 49152;
        if (W >= H) {
          throw new Error("Cannot decode name (bad pointer)");
        }
        S = W;
        H = W;
        V += Y ? 0 : 1;
        Y = true;
      } else {
        throw new Error("Cannot decode name (bad label)");
      }
    }
    G.decode.bytes = V;
    if (R.length === 0) {
      return ".";
    } else {
      return R.join(".");
    }
  };
  G.decode.bytes = 0;
  G.encodingLength = function (C) {
    if (C === "." || C === "..") {
      return 1;
    }
    return Q.byteLength(C.replace(/^\.|\.$/gm, "")) + 2;
  };
  var _ = {};
  _.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(_.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = S.write(C, N + 1);
    S[N] = R;
    _.encode.bytes = R + 1;
    return S;
  };
  _.encode.bytes = 0;
  _.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = C[S];
    let R = C.toString("utf-8", S + 1, S + 1 + N);
    _.decode.bytes = N + 1;
    return R;
  };
  _.decode.bytes = 0;
  _.encodingLength = function (C) {
    return Q.byteLength(C) + 1;
  };
  var o = {};
  o.encode = function (C, S, N) {
    if (!S) {
      S = o.encodingLength(C);
    }
    if (!N) {
      N = 0;
    }
    let R = (C.flags || 0) & 32767;
    let H = C.type === "response" ? 32768 : 0;
    S.writeUInt16BE(C.id || 0, N);
    S.writeUInt16BE(R | H, N + 2);
    S.writeUInt16BE(C.questions.length, N + 4);
    S.writeUInt16BE(C.answers.length, N + 6);
    S.writeUInt16BE(C.authorities.length, N + 8);
    S.writeUInt16BE(C.additionals.length, N + 10);
    return S;
  };
  o.encode.bytes = 12;
  o.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    if (C.length < 12) {
      throw new Error("Header must be 12 bytes");
    }
    let N = C.readUInt16BE(S + 2);
    return {
      id: C.readUInt16BE(S),
      type: N & 32768 ? "response" : "query",
      flags: N & 32767,
      flag_qr: (N >> 15 & 1) === 1,
      opcode: jA.toString(N >> 11 & 15),
      flag_aa: (N >> 10 & 1) === 1,
      flag_tc: (N >> 9 & 1) === 1,
      flag_rd: (N >> 8 & 1) === 1,
      flag_ra: (N >> 7 & 1) === 1,
      flag_z: (N >> 6 & 1) === 1,
      flag_ad: (N >> 5 & 1) === 1,
      flag_cd: (N >> 4 & 1) === 1,
      rcode: zA.toString(N & 15),
      questions: new Array(C.readUInt16BE(S + 4)),
      answers: new Array(C.readUInt16BE(S + 6)),
      authorities: new Array(C.readUInt16BE(S + 8)),
      additionals: new Array(C.readUInt16BE(S + 10))
    };
  };
  o.decode.bytes = 12;
  o.encodingLength = function () {
    return 12;
  };
  var K2 = vA.unknown = {};
  K2.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(K2.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    S.writeUInt16BE(C.length, N);
    C.copy(S, N + 2);
    K2.encode.bytes = C.length + 2;
    return S;
  };
  K2.encode.bytes = 0;
  K2.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = C.readUInt16BE(S);
    let R = C.slice(S + 2, S + 2 + N);
    K2.decode.bytes = N + 2;
    return R;
  };
  K2.decode.bytes = 0;
  K2.encodingLength = function (C) {
    return C.length + 2;
  };
  var R2 = vA.ns = {};
  R2.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(R2.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    G.encode(C, S, N + 2);
    S.writeUInt16BE(G.encode.bytes, N);
    R2.encode.bytes = G.encode.bytes + 2;
    return S;
  };
  R2.encode.bytes = 0;
  R2.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = C.readUInt16BE(S);
    let R = G.decode(C, S + 2);
    R2.decode.bytes = N + 2;
    return R;
  };
  R2.decode.bytes = 0;
  R2.encodingLength = function (C) {
    return G.encodingLength(C) + 2;
  };
  var T2 = vA.soa = {};
  T2.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(T2.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    N += 2;
    G.encode(C.mname, S, N);
    N += G.encode.bytes;
    G.encode(C.rname, S, N, {
      mail: true
    });
    N += G.encode.bytes;
    S.writeUInt32BE(C.serial || 0, N);
    N += 4;
    S.writeUInt32BE(C.refresh || 0, N);
    N += 4;
    S.writeUInt32BE(C.retry || 0, N);
    N += 4;
    S.writeUInt32BE(C.expire || 0, N);
    N += 4;
    S.writeUInt32BE(C.minimum || 0, N);
    N += 4;
    S.writeUInt16BE(N - R - 2, R);
    T2.encode.bytes = N - R;
    return S;
  };
  T2.encode.bytes = 0;
  T2.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = S;
    let R = {};
    S += 2;
    R.mname = G.decode(C, S);
    S += G.decode.bytes;
    R.rname = G.decode(C, S, {
      mail: true
    });
    S += G.decode.bytes;
    R.serial = C.readUInt32BE(S);
    S += 4;
    R.refresh = C.readUInt32BE(S);
    S += 4;
    R.retry = C.readUInt32BE(S);
    S += 4;
    R.expire = C.readUInt32BE(S);
    S += 4;
    R.minimum = C.readUInt32BE(S);
    S += 4;
    T2.decode.bytes = S - N;
    return R;
  };
  T2.decode.bytes = 0;
  T2.encodingLength = function (C) {
    return 22 + G.encodingLength(C.mname) + G.encodingLength(C.rname);
  };
  var Y2 = vA.txt = {};
  Y2.encode = function (C, S, N) {
    if (!Array.isArray(C)) {
      C = [C];
    }
    for (let H = 0; H < C.length; H++) {
      if (typeof C[H] === "string") {
        C[H] = Q.from(C[H]);
      }
      if (!Q.isBuffer(C[H])) {
        throw new Error("Must be a Buffer");
      }
    }
    if (!S) {
      S = Q.alloc(Y2.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    N += 2;
    C.forEach(function (H) {
      S[N++] = H.length;
      H.copy(S, N, 0, H.length);
      N += H.length;
    });
    S.writeUInt16BE(N - R - 2, R);
    Y2.encode.bytes = N - R;
    return S;
  };
  Y2.encode.bytes = 0;
  Y2.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = S;
    let R = C.readUInt16BE(S);
    S += 2;
    let H = [];
    while (R > 0) {
      let M = C[S++];
      --R;
      if (R < M) {
        throw new Error("Buffer overflow");
      }
      H.push(C.slice(S, S + M));
      S += M;
      R -= M;
    }
    Y2.decode.bytes = S - N;
    return H;
  };
  Y2.decode.bytes = 0;
  Y2.encodingLength = function (C) {
    if (!Array.isArray(C)) {
      C = [C];
    }
    let S = 2;
    C.forEach(function (N) {
      if (typeof N === "string") {
        S += Q.byteLength(N) + 1;
      } else {
        S += N.length + 1;
      }
    });
    return S;
  };
  var H2 = vA.null = {};
  H2.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(H2.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    if (typeof C === "string") {
      C = Q.from(C);
    }
    if (!C) {
      C = Q.alloc(0);
    }
    let R = N;
    N += 2;
    let H = C.length;
    C.copy(S, N, 0, H);
    N += H;
    S.writeUInt16BE(N - R - 2, R);
    H2.encode.bytes = N - R;
    return S;
  };
  H2.encode.bytes = 0;
  H2.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = S;
    let R = C.readUInt16BE(S);
    S += 2;
    let H = C.slice(S, S + R);
    S += R;
    H2.decode.bytes = S - N;
    return H;
  };
  H2.decode.bytes = 0;
  H2.encodingLength = function (C) {
    if (!C) {
      return 2;
    }
    return (Q.isBuffer(C) ? C.length : Q.byteLength(C)) + 2;
  };
  var X2 = vA.hinfo = {};
  X2.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(X2.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    N += 2;
    _.encode(C.cpu, S, N);
    N += _.encode.bytes;
    _.encode(C.os, S, N);
    N += _.encode.bytes;
    S.writeUInt16BE(N - R - 2, R);
    X2.encode.bytes = N - R;
    return S;
  };
  X2.encode.bytes = 0;
  X2.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = S;
    let R = {};
    S += 2;
    R.cpu = _.decode(C, S);
    S += _.decode.bytes;
    R.os = _.decode(C, S);
    S += _.decode.bytes;
    X2.decode.bytes = S - N;
    return R;
  };
  X2.decode.bytes = 0;
  X2.encodingLength = function (C) {
    return _.encodingLength(C.cpu) + _.encodingLength(C.os) + 2;
  };
  var r = vA.ptr = {};
  var LA = vA.cname = r;
  var qA = vA.dname = r;
  r.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(r.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    G.encode(C, S, N + 2);
    S.writeUInt16BE(G.encode.bytes, N);
    r.encode.bytes = G.encode.bytes + 2;
    return S;
  };
  r.encode.bytes = 0;
  r.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = G.decode(C, S + 2);
    r.decode.bytes = G.decode.bytes + 2;
    return N;
  };
  r.decode.bytes = 0;
  r.encodingLength = function (C) {
    return G.encodingLength(C) + 2;
  };
  var I2 = vA.srv = {};
  I2.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(I2.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    S.writeUInt16BE(C.priority || 0, N + 2);
    S.writeUInt16BE(C.weight || 0, N + 4);
    S.writeUInt16BE(C.port || 0, N + 6);
    G.encode(C.target, S, N + 8);
    let R = G.encode.bytes + 6;
    S.writeUInt16BE(R, N);
    I2.encode.bytes = R + 2;
    return S;
  };
  I2.encode.bytes = 0;
  I2.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = C.readUInt16BE(S);
    let R = {};
    R.priority = C.readUInt16BE(S + 2);
    R.weight = C.readUInt16BE(S + 4);
    R.port = C.readUInt16BE(S + 6);
    R.target = G.decode(C, S + 8);
    I2.decode.bytes = N + 2;
    return R;
  };
  I2.decode.bytes = 0;
  I2.encodingLength = function (C) {
    return 8 + G.encodingLength(C.target);
  };
  var b = vA.caa = {};
  b.ISSUER_CRITICAL = 128;
  b.encode = function (C, S, N) {
    let R = b.encodingLength(C);
    if (!S) {
      S = Q.alloc(b.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    if (C.issuerCritical) {
      C.flags = b.ISSUER_CRITICAL;
    }
    S.writeUInt16BE(R - 2, N);
    N += 2;
    S.writeUInt8(C.flags || 0, N);
    N += 1;
    _.encode(C.tag, S, N);
    N += _.encode.bytes;
    S.write(C.value, N);
    N += Q.byteLength(C.value);
    b.encode.bytes = R;
    return S;
  };
  b.encode.bytes = 0;
  b.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = C.readUInt16BE(S);
    S += 2;
    let R = S;
    let H = {};
    H.flags = C.readUInt8(S);
    S += 1;
    H.tag = _.decode(C, S);
    S += _.decode.bytes;
    H.value = C.toString("utf-8", S, R + N);
    H.issuerCritical = !!(H.flags & b.ISSUER_CRITICAL);
    b.decode.bytes = N + 2;
    return H;
  };
  b.decode.bytes = 0;
  b.encodingLength = function (C) {
    return _.encodingLength(C.tag) + _.encodingLength(C.value) + 2;
  };
  var U2 = vA.mx = {};
  U2.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(U2.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    N += 2;
    S.writeUInt16BE(C.preference || 0, N);
    N += 2;
    G.encode(C.exchange, S, N);
    N += G.encode.bytes;
    S.writeUInt16BE(N - R - 2, R);
    U2.encode.bytes = N - R;
    return S;
  };
  U2.encode.bytes = 0;
  U2.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = S;
    let R = {};
    S += 2;
    R.preference = C.readUInt16BE(S);
    S += 2;
    R.exchange = G.decode(C, S);
    S += G.decode.bytes;
    U2.decode.bytes = S - N;
    return R;
  };
  U2.encodingLength = function (C) {
    return 4 + G.encodingLength(C.exchange);
  };
  var P2 = vA.a = {};
  P2.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(P2.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    S.writeUInt16BE(4, N);
    N += 2;
    V2.v4.encode(C, S, N);
    P2.encode.bytes = 6;
    return S;
  };
  P2.encode.bytes = 0;
  P2.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    S += 2;
    let N = V2.v4.decode(C, S);
    P2.decode.bytes = 6;
    return N;
  };
  P2.decode.bytes = 0;
  P2.encodingLength = function () {
    return 6;
  };
  var M2 = vA.aaaa = {};
  M2.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(M2.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    S.writeUInt16BE(16, N);
    N += 2;
    V2.v6.encode(C, S, N);
    M2.encode.bytes = 18;
    return S;
  };
  M2.encode.bytes = 0;
  M2.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    S += 2;
    let N = V2.v6.decode(C, S);
    M2.decode.bytes = 18;
    return N;
  };
  M2.decode.bytes = 0;
  M2.encodingLength = function () {
    return 18;
  };
  var n = vA.option = {};
  n.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(n.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    let H = b2.toCode(C.code);
    S.writeUInt16BE(H, N);
    N += 2;
    if (C.data) {
      S.writeUInt16BE(C.data.length, N);
      N += 2;
      C.data.copy(S, N);
      N += C.data.length;
    } else {
      switch (H) {
        case 8:
          let M = C.sourcePrefixLength || 0;
          let V = C.family || V2.familyOf(C.ip);
          let Y = V2.encode(C.ip, Q.alloc);
          let J = Math.ceil(M / 8);
          S.writeUInt16BE(J + 4, N);
          N += 2;
          S.writeUInt16BE(V, N);
          N += 2;
          S.writeUInt8(M, N++);
          S.writeUInt8(C.scopePrefixLength || 0, N++);
          Y.copy(S, N, 0, J);
          N += J;
          break;
        case 11:
          if (C.timeout) {
            S.writeUInt16BE(2, N);
            N += 2;
            S.writeUInt16BE(C.timeout, N);
            N += 2;
          } else {
            S.writeUInt16BE(0, N);
            N += 2;
          }
          break;
        case 12:
          let W = C.length || 0;
          S.writeUInt16BE(W, N);
          N += 2;
          S.fill(0, N, N + W);
          N += W;
          break;
        case 14:
          let y = C.tags.length * 2;
          S.writeUInt16BE(y, N);
          N += 2;
          for (let j of C.tags) {
            S.writeUInt16BE(j, N);
            N += 2;
          }
          break;
        default:
          throw new Error(`Unknown roption code: ${C.code}`);
      }
    }
    n.encode.bytes = N - R;
    return S;
  };
  n.encode.bytes = 0;
  n.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = {};
    N.code = C.readUInt16BE(S);
    N.type = b2.toString(N.code);
    S += 2;
    let R = C.readUInt16BE(S);
    S += 2;
    N.data = C.slice(S, S + R);
    switch (N.code) {
      case 8:
        N.family = C.readUInt16BE(S);
        S += 2;
        N.sourcePrefixLength = C.readUInt8(S++);
        N.scopePrefixLength = C.readUInt8(S++);
        let H = Q.alloc(N.family === 1 ? 4 : 16);
        C.copy(H, 0, S, S + R - 4);
        N.ip = V2.decode(H);
        break;
      case 11:
        if (R > 0) {
          N.timeout = C.readUInt16BE(S);
          S += 2;
        }
        break;
      case 14:
        N.tags = [];
        for (let M = 0; M < R; M += 2) {
          N.tags.push(C.readUInt16BE(S));
          S += 2;
        }
    }
    n.decode.bytes = R + 4;
    return N;
  };
  n.decode.bytes = 0;
  n.encodingLength = function (C) {
    if (C.data) {
      return C.data.length + 4;
    }
    switch (b2.toCode(C.code)) {
      case 8:
        let N = C.sourcePrefixLength || 0;
        return Math.ceil(N / 8) + 8;
      case 11:
        if (typeof C.timeout === "number") {
          return 6;
        } else {
          return 4;
        }
      case 12:
        return C.length + 4;
      case 14:
        return 4 + C.tags.length * 2;
    }
    throw new Error(`Unknown roption code: ${C.code}`);
  };
  var i = vA.opt = {};
  i.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(i.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    let H = $2(C, n);
    S.writeUInt16BE(H, N);
    N = z2(C, n, S, N + 2);
    i.encode.bytes = N - R;
    return S;
  };
  i.encode.bytes = 0;
  i.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = S;
    let R = [];
    let H = C.readUInt16BE(S);
    S += 2;
    let M = 0;
    while (H > 0) {
      R[M++] = n.decode(C, S);
      S += n.decode.bytes;
      H -= n.decode.bytes;
    }
    i.decode.bytes = S - N;
    return R;
  };
  i.decode.bytes = 0;
  i.encodingLength = function (C) {
    return 2 + $2(C || [], n);
  };
  var p = vA.dnskey = {};
  p.PROTOCOL_DNSSEC = 3;
  p.ZONE_KEY = 128;
  p.SECURE_ENTRYPOINT = 32768;
  p.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(p.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    let H = C.key;
    if (!Q.isBuffer(H)) {
      throw new Error("Key must be a Buffer");
    }
    N += 2;
    S.writeUInt16BE(C.flags, N);
    N += 2;
    S.writeUInt8(p.PROTOCOL_DNSSEC, N);
    N += 1;
    S.writeUInt8(C.algorithm, N);
    N += 1;
    H.copy(S, N, 0, H.length);
    N += H.length;
    p.encode.bytes = N - R;
    S.writeUInt16BE(p.encode.bytes - 2, R);
    return S;
  };
  p.encode.bytes = 0;
  p.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = S;
    var R = {};
    var H = C.readUInt16BE(S);
    S += 2;
    R.flags = C.readUInt16BE(S);
    S += 2;
    if (C.readUInt8(S) !== p.PROTOCOL_DNSSEC) {
      throw new Error("Protocol must be 3");
    }
    S += 1;
    R.algorithm = C.readUInt8(S);
    S += 1;
    R.key = C.slice(S, N + H + 2);
    S += R.key.length;
    p.decode.bytes = S - N;
    return R;
  };
  p.decode.bytes = 0;
  p.encodingLength = function (C) {
    return 6 + Q.byteLength(C.key);
  };
  var t = vA.rrsig = {};
  t.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(t.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    let H = C.signature;
    if (!Q.isBuffer(H)) {
      throw new Error("Signature must be a Buffer");
    }
    N += 2;
    S.writeUInt16BE(F2.toType(C.typeCovered), N);
    N += 2;
    S.writeUInt8(C.algorithm, N);
    N += 1;
    S.writeUInt8(C.labels, N);
    N += 1;
    S.writeUInt32BE(C.originalTTL, N);
    N += 4;
    S.writeUInt32BE(C.expiration, N);
    N += 4;
    S.writeUInt32BE(C.inception, N);
    N += 4;
    S.writeUInt16BE(C.keyTag, N);
    N += 2;
    G.encode(C.signersName, S, N);
    N += G.encode.bytes;
    H.copy(S, N, 0, H.length);
    N += H.length;
    t.encode.bytes = N - R;
    S.writeUInt16BE(t.encode.bytes - 2, R);
    return S;
  };
  t.encode.bytes = 0;
  t.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = S;
    var R = {};
    var H = C.readUInt16BE(S);
    S += 2;
    R.typeCovered = F2.toString(C.readUInt16BE(S));
    S += 2;
    R.algorithm = C.readUInt8(S);
    S += 1;
    R.labels = C.readUInt8(S);
    S += 1;
    R.originalTTL = C.readUInt32BE(S);
    S += 4;
    R.expiration = C.readUInt32BE(S);
    S += 4;
    R.inception = C.readUInt32BE(S);
    S += 4;
    R.keyTag = C.readUInt16BE(S);
    S += 2;
    R.signersName = G.decode(C, S);
    S += G.decode.bytes;
    R.signature = C.slice(S, N + H + 2);
    S += R.signature.length;
    t.decode.bytes = S - N;
    return R;
  };
  t.decode.bytes = 0;
  t.encodingLength = function (C) {
    return 20 + G.encodingLength(C.signersName) + Q.byteLength(C.signature);
  };
  var f = vA.rp = {};
  f.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(f.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    N += 2;
    G.encode(C.mbox || ".", S, N, {
      mail: true
    });
    N += G.encode.bytes;
    G.encode(C.txt || ".", S, N);
    N += G.encode.bytes;
    f.encode.bytes = N - R;
    S.writeUInt16BE(f.encode.bytes - 2, R);
    return S;
  };
  f.encode.bytes = 0;
  f.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = S;
    let R = {};
    S += 2;
    R.mbox = G.decode(C, S, {
      mail: true
    }) || ".";
    S += G.decode.bytes;
    R.txt = G.decode(C, S) || ".";
    S += G.decode.bytes;
    f.decode.bytes = S - N;
    return R;
  };
  f.decode.bytes = 0;
  f.encodingLength = function (C) {
    return 2 + G.encodingLength(C.mbox || ".") + G.encodingLength(C.txt || ".");
  };
  var g = {};
  g.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(g.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    var H = [];
    for (var M = 0; M < C.length; M++) {
      var V = F2.toType(C[M]);
      if (H[V >> 8] === undefined) {
        H[V >> 8] = [];
      }
      H[V >> 8][V >> 3 & 31] |= 1 << 7 - (V & 7);
    }
    for (M = 0; M < H.length; M++) {
      if (H[M] !== undefined) {
        var Y = Q.from(H[M]);
        S.writeUInt8(M, N);
        N += 1;
        S.writeUInt8(Y.length, N);
        N += 1;
        Y.copy(S, N);
        N += Y.length;
      }
    }
    g.encode.bytes = N - R;
    return S;
  };
  g.encode.bytes = 0;
  g.decode = function (C, S, N) {
    if (!S) {
      S = 0;
    }
    let R = S;
    var H = [];
    while (S - R < N) {
      var M = C.readUInt8(S);
      S += 1;
      var V = C.readUInt8(S);
      S += 1;
      for (var Y = 0; Y < V; Y++) {
        var J = C.readUInt8(S + Y);
        for (var W = 0; W < 8; W++) {
          if (J & 1 << 7 - W) {
            var y = F2.toString(M << 8 | Y << 3 | W);
            H.push(y);
          }
        }
      }
      S += V;
    }
    g.decode.bytes = S - R;
    return H;
  };
  g.decode.bytes = 0;
  g.encodingLength = function (C) {
    var S = [];
    for (var N = 0; N < C.length; N++) {
      var R = F2.toType(C[N]);
      S[R >> 8] = Math.max(S[R >> 8] || 0, R & 255);
    }
    var H = 0;
    for (N = 0; N < S.length; N++) {
      if (S[N] !== undefined) {
        H += 2 + Math.ceil((S[N] + 1) / 8);
      }
    }
    return H;
  };
  var S2 = vA.nsec = {};
  S2.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(S2.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    N += 2;
    G.encode(C.nextDomain, S, N);
    N += G.encode.bytes;
    g.encode(C.rrtypes, S, N);
    N += g.encode.bytes;
    S2.encode.bytes = N - R;
    S.writeUInt16BE(S2.encode.bytes - 2, R);
    return S;
  };
  S2.encode.bytes = 0;
  S2.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = S;
    var R = {};
    var H = C.readUInt16BE(S);
    S += 2;
    R.nextDomain = G.decode(C, S);
    S += G.decode.bytes;
    R.rrtypes = g.decode(C, S, H - (S - N));
    S += g.decode.bytes;
    S2.decode.bytes = S - N;
    return R;
  };
  S2.decode.bytes = 0;
  S2.encodingLength = function (C) {
    return 2 + G.encodingLength(C.nextDomain) + g.encodingLength(C.rrtypes);
  };
  var A2 = vA.nsec3 = {};
  A2.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(A2.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    let H = C.salt;
    if (!Q.isBuffer(H)) {
      throw new Error("salt must be a Buffer");
    }
    let M = C.nextDomain;
    if (!Q.isBuffer(M)) {
      throw new Error("nextDomain must be a Buffer");
    }
    N += 2;
    S.writeUInt8(C.algorithm, N);
    N += 1;
    S.writeUInt8(C.flags, N);
    N += 1;
    S.writeUInt16BE(C.iterations, N);
    N += 2;
    S.writeUInt8(H.length, N);
    N += 1;
    H.copy(S, N, 0, H.length);
    N += H.length;
    S.writeUInt8(M.length, N);
    N += 1;
    M.copy(S, N, 0, M.length);
    N += M.length;
    g.encode(C.rrtypes, S, N);
    N += g.encode.bytes;
    A2.encode.bytes = N - R;
    S.writeUInt16BE(A2.encode.bytes - 2, R);
    return S;
  };
  A2.encode.bytes = 0;
  A2.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = S;
    var R = {};
    var H = C.readUInt16BE(S);
    S += 2;
    R.algorithm = C.readUInt8(S);
    S += 1;
    R.flags = C.readUInt8(S);
    S += 1;
    R.iterations = C.readUInt16BE(S);
    S += 2;
    let M = C.readUInt8(S);
    S += 1;
    R.salt = C.slice(S, S + M);
    S += M;
    let V = C.readUInt8(S);
    S += 1;
    R.nextDomain = C.slice(S, S + V);
    S += V;
    R.rrtypes = g.decode(C, S, H - (S - N));
    S += g.decode.bytes;
    A2.decode.bytes = S - N;
    return R;
  };
  A2.decode.bytes = 0;
  A2.encodingLength = function (C) {
    return 8 + C.salt.length + C.nextDomain.length + g.encodingLength(C.rrtypes);
  };
  var C2 = vA.ds = {};
  C2.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(C2.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    let H = C.digest;
    if (!Q.isBuffer(H)) {
      throw new Error("Digest must be a Buffer");
    }
    N += 2;
    S.writeUInt16BE(C.keyTag, N);
    N += 2;
    S.writeUInt8(C.algorithm, N);
    N += 1;
    S.writeUInt8(C.digestType, N);
    N += 1;
    H.copy(S, N, 0, H.length);
    N += H.length;
    C2.encode.bytes = N - R;
    S.writeUInt16BE(C2.encode.bytes - 2, R);
    return S;
  };
  C2.encode.bytes = 0;
  C2.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = S;
    var R = {};
    var H = C.readUInt16BE(S);
    S += 2;
    R.keyTag = C.readUInt16BE(S);
    S += 2;
    R.algorithm = C.readUInt8(S);
    S += 1;
    R.digestType = C.readUInt8(S);
    S += 1;
    R.digest = C.slice(S, N + H + 2);
    S += R.digest.length;
    C2.decode.bytes = S - N;
    return R;
  };
  C2.decode.bytes = 0;
  C2.encodingLength = function (C) {
    return 6 + Q.byteLength(C.digest);
  };
  var u = vA.sshfp = {};
  u.getFingerprintLengthForHashType = function C(S) {
    switch (S) {
      case 1:
        return 20;
      case 2:
        return 32;
    }
  };
  u.encode = function C(S, N, R) {
    if (!N) {
      N = Q.alloc(u.encodingLength(S));
    }
    if (!R) {
      R = 0;
    }
    let H = R;
    R += 2;
    N[R] = S.algorithm;
    R += 1;
    N[R] = S.hash;
    R += 1;
    let M = Q.from(S.fingerprint.toUpperCase(), "hex");
    if (M.length !== u.getFingerprintLengthForHashType(S.hash)) {
      throw new Error("Invalid fingerprint length");
    }
    M.copy(N, R);
    R += M.byteLength;
    u.encode.bytes = R - H;
    N.writeUInt16BE(u.encode.bytes - 2, H);
    return N;
  };
  u.encode.bytes = 0;
  u.decode = function C(S, N) {
    if (!N) {
      N = 0;
    }
    let R = N;
    let H = {};
    N += 2;
    H.algorithm = S[N];
    N += 1;
    H.hash = S[N];
    N += 1;
    let M = u.getFingerprintLengthForHashType(H.hash);
    H.fingerprint = S.slice(N, N + M).toString("hex").toUpperCase();
    N += M;
    u.decode.bytes = N - R;
    return H;
  };
  u.decode.bytes = 0;
  u.encodingLength = function (C) {
    return 4 + Q.from(C.fingerprint, "hex").byteLength;
  };
  var N2 = vA.naptr = {};
  N2.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(N2.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    N += 2;
    S.writeUInt16BE(C.order || 0, N);
    N += 2;
    S.writeUInt16BE(C.preference || 0, N);
    N += 2;
    _.encode(C.flags, S, N);
    N += _.encode.bytes;
    _.encode(C.services, S, N);
    N += _.encode.bytes;
    _.encode(C.regexp, S, N);
    N += _.encode.bytes;
    G.encode(C.replacement, S, N);
    N += G.encode.bytes;
    N2.encode.bytes = N - R;
    S.writeUInt16BE(N2.encode.bytes - 2, R);
    return S;
  };
  N2.encode.bytes = 0;
  N2.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = S;
    let R = {};
    S += 2;
    R.order = C.readUInt16BE(S);
    S += 2;
    R.preference = C.readUInt16BE(S);
    S += 2;
    R.flags = _.decode(C, S);
    S += _.decode.bytes;
    R.services = _.decode(C, S);
    S += _.decode.bytes;
    R.regexp = _.decode(C, S);
    S += _.decode.bytes;
    R.replacement = G.decode(C, S);
    S += G.decode.bytes;
    N2.decode.bytes = S - N;
    return R;
  };
  N2.decode.bytes = 0;
  N2.encodingLength = function (C) {
    return _.encodingLength(C.flags) + _.encodingLength(C.services) + _.encodingLength(C.regexp) + G.encodingLength(C.replacement) + 6;
  };
  var E2 = vA.tlsa = {};
  E2.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(E2.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    let H = C.certificate;
    if (!Q.isBuffer(H)) {
      throw new Error("Certificate must be a Buffer");
    }
    N += 2;
    S.writeUInt8(C.usage, N);
    N += 1;
    S.writeUInt8(C.selector, N);
    N += 1;
    S.writeUInt8(C.matchingType, N);
    N += 1;
    H.copy(S, N, 0, H.length);
    N += H.length;
    E2.encode.bytes = N - R;
    S.writeUInt16BE(E2.encode.bytes - 2, R);
    return S;
  };
  E2.encode.bytes = 0;
  E2.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = S;
    let R = {};
    let H = C.readUInt16BE(S);
    S += 2;
    R.usage = C.readUInt8(S);
    S += 1;
    R.selector = C.readUInt8(S);
    S += 1;
    R.matchingType = C.readUInt8(S);
    S += 1;
    R.certificate = C.slice(S, N + H + 2);
    S += R.certificate.length;
    E2.decode.bytes = S - N;
    return R;
  };
  E2.decode.bytes = 0;
  E2.encodingLength = function (C) {
    return 5 + Q.byteLength(C.certificate);
  };
  var u2 = vA.record = function (C) {
    switch (C.toUpperCase()) {
      case "A":
        return P2;
      case "PTR":
        return r;
      case "CNAME":
        return LA;
      case "DNAME":
        return qA;
      case "TXT":
        return Y2;
      case "NULL":
        return H2;
      case "AAAA":
        return M2;
      case "SRV":
        return I2;
      case "HINFO":
        return X2;
      case "CAA":
        return b;
      case "NS":
        return R2;
      case "SOA":
        return T2;
      case "MX":
        return U2;
      case "OPT":
        return i;
      case "DNSKEY":
        return p;
      case "RRSIG":
        return t;
      case "RP":
        return f;
      case "NSEC":
        return S2;
      case "NSEC3":
        return A2;
      case "SSHFP":
        return u;
      case "DS":
        return C2;
      case "NAPTR":
        return N2;
      case "TLSA":
        return E2;
    }
    return K2;
  };
  var l = vA.answer = {};
  l.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(l.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    G.encode(C.name, S, N);
    N += G.encode.bytes;
    S.writeUInt16BE(F2.toType(C.type), N);
    if (C.type.toUpperCase() === "OPT") {
      if (C.name !== ".") {
        throw new Error("OPT name must be root.");
      }
      S.writeUInt16BE(C.udpPayloadSize || 4096, N + 2);
      S.writeUInt8(C.extendedRcode || 0, N + 4);
      S.writeUInt8(C.ednsVersion || 0, N + 5);
      S.writeUInt16BE(C.flags || 0, N + 6);
      N += 8;
      i.encode(C.options || [], S, N);
      N += i.encode.bytes;
    } else {
      let H = k2.toClass(C.class === undefined ? "IN" : C.class);
      if (C.flush) {
        H |= 32768;
      }
      S.writeUInt16BE(H, N + 2);
      S.writeUInt32BE(C.ttl || 0, N + 4);
      N += 8;
      let M = u2(C.type);
      M.encode(C.data, S, N);
      N += M.encode.bytes;
    }
    l.encode.bytes = N - R;
    return S;
  };
  l.encode.bytes = 0;
  l.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = {};
    let R = S;
    N.name = G.decode(C, S);
    S += G.decode.bytes;
    N.type = F2.toString(C.readUInt16BE(S));
    if (N.type === "OPT") {
      N.udpPayloadSize = C.readUInt16BE(S + 2);
      N.extendedRcode = C.readUInt8(S + 4);
      N.ednsVersion = C.readUInt8(S + 5);
      N.flags = C.readUInt16BE(S + 6);
      N.flag_do = (N.flags >> 15 & 1) === 1;
      N.options = i.decode(C, S + 8);
      S += 8 + i.decode.bytes;
    } else {
      let H = C.readUInt16BE(S + 2);
      N.ttl = C.readUInt32BE(S + 4);
      N.class = k2.toString(H & -32769);
      N.flush = !!(H & 32768);
      let M = u2(N.type);
      N.data = M.decode(C, S + 8);
      S += 8 + M.decode.bytes;
    }
    l.decode.bytes = S - R;
    return N;
  };
  l.decode.bytes = 0;
  l.encodingLength = function (C) {
    let S = C.data !== null && C.data !== undefined ? C.data : C.options;
    return G.encodingLength(C.name) + 8 + u2(C.type).encodingLength(S);
  };
  var s = vA.question = {};
  s.encode = function (C, S, N) {
    if (!S) {
      S = Q.alloc(s.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let R = N;
    G.encode(C.name, S, N);
    N += G.encode.bytes;
    S.writeUInt16BE(F2.toType(C.type), N);
    N += 2;
    S.writeUInt16BE(k2.toClass(C.class === undefined ? "IN" : C.class), N);
    N += 2;
    s.encode.bytes = N - R;
    return C;
  };
  s.encode.bytes = 0;
  s.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = S;
    let R = {};
    R.name = G.decode(C, S);
    S += G.decode.bytes;
    R.type = F2.toString(C.readUInt16BE(S));
    S += 2;
    R.class = k2.toString(C.readUInt16BE(S));
    S += 2;
    if (!!(R.class & 32768)) {
      R.class &= -32769;
    }
    s.decode.bytes = S - N;
    return R;
  };
  s.decode.bytes = 0;
  s.encodingLength = function (C) {
    return G.encodingLength(C.name) + 4;
  };
  vA.AUTHORITATIVE_ANSWER = 1024;
  vA.TRUNCATED_RESPONSE = 512;
  vA.RECURSION_DESIRED = 256;
  vA.RECURSION_AVAILABLE = 128;
  vA.AUTHENTIC_DATA = 32;
  vA.CHECKING_DISABLED = 16;
  vA.DNSSEC_OK = 32768;
  vA.encode = function (C, S, N) {
    let R = !S;
    if (R) {
      S = Q.alloc(vA.encodingLength(C));
    }
    if (!N) {
      N = 0;
    }
    let H = N;
    if (!C.questions) {
      C.questions = [];
    }
    if (!C.answers) {
      C.answers = [];
    }
    if (!C.authorities) {
      C.authorities = [];
    }
    if (!C.additionals) {
      C.additionals = [];
    }
    o.encode(C, S, N);
    N += o.encode.bytes;
    N = z2(C.questions, s, S, N);
    N = z2(C.answers, l, S, N);
    N = z2(C.authorities, l, S, N);
    N = z2(C.additionals, l, S, N);
    vA.encode.bytes = N - H;
    if (R && vA.encode.bytes !== S.length) {
      return S.slice(0, vA.encode.bytes);
    }
    return S;
  };
  vA.encode.bytes = 0;
  vA.decode = function (C, S) {
    if (!S) {
      S = 0;
    }
    let N = S;
    let R = o.decode(C, S);
    S += o.decode.bytes;
    S = v2(R.questions, s, C, S);
    S = v2(R.answers, l, C, S);
    S = v2(R.authorities, l, C, S);
    S = v2(R.additionals, l, C, S);
    vA.decode.bytes = S - N;
    return R;
  };
  vA.decode.bytes = 0;
  vA.encodingLength = function (C) {
    return o.encodingLength(C) + $2(C.questions || [], s) + $2(C.answers || [], l) + $2(C.authorities || [], l) + $2(C.additionals || [], l);
  };
  vA.streamEncode = function (C) {
    let S = vA.encode(C);
    let N = Q.alloc(2);
    N.writeUInt16BE(S.byteLength);
    let R = Q.concat([N, S]);
    vA.streamEncode.bytes = R.byteLength;
    return R;
  };
  vA.streamEncode.bytes = 0;
  vA.streamDecode = function (C) {
    let S = C.readUInt16BE(0);
    if (C.byteLength < S + 2) {
      return null;
    }
    let N = vA.decode(C.slice(2));
    vA.streamDecode.bytes = vA.decode.bytes;
    return N;
  };
  vA.streamDecode.bytes = 0;
  function $2(C, S) {
    let N = 0;
    for (let R = 0; R < C.length; R++) {
      N += S.encodingLength(C[R]);
    }
    return N;
  }
  function z2(C, S, N, R) {
    for (let H = 0; H < C.length; H++) {
      S.encode(C[H], N, R);
      R += S.encode.bytes;
    }
    return R;
  }
  function v2(C, S, N, R) {
    for (let H = 0; H < C.length; H++) {
      C[H] = S.decode(N, R);
      R += S.decode.bytes;
    }
    return R;
  }
});
var i2 = vS();
p2();
var {
  Buffer: gA
} = TS(l2);
var a;
if (typeof $argument != "undefined") {
  a = Object.fromEntries($argument.split("&").map(C => C.split("=")));
} else {
  a = {};
}
function Q2(...C) {
  if (`${a?.log}` === "1") {
    console.log(...C);
  }
}
Q2(`传入的 $argument: ${JSON.stringify(a, null, 2)}`);
var r2 = {
  addresses: [],
  ttl: parseInt(a?.ttl || 60)
};
(async () => {
  let C = a?.type || "A,AAAA";
  C = C.split(/\s*,\s*/).filter(W => ["A", "AAAA"].includes(W));
  let S = a?.doh || "https://8.8.4.4/dns-query";
  S = S.split(/\s*,\s*/).filter(W => /https?:\/\//.test(W));
  let N = $domain;
  let R = parseInt(a?.timeout || 2);
  let H;
  if (a?.edns === "auto") {
    try {
      H = JSON.parse(await $persistentStore.read("lastNetworkInfoEvent"))?.CN_IP;
      Q2(`从持久化缓存解析 CN_IP: ${H}`);
    } catch (W) {
      Q2(`从持久化缓存解析 CN_IP 失败: ${W}`);
    }
  } else {
    H = a?.edns;
  }
  H = H || "114.114.114.114";
  Q2(`使用 edns: ${H}`);
  Q2(`[${N}] 使用 ${S.join(", ")} 查询 ${C} 结果`);
  let M = S.map(async W => {
    let y = await Promise.all(C.map(U => lA({
      url: W,
      domain: N,
      type: U,
      timeout: R,
      edns: H
    })));
    let j = [];
    let Z = parseInt(a?.ttl || 60);
    y.forEach(U => {
      U.answers.forEach(I => {
        if (C.includes(I.type)) {
          j.push(I.data);
          if (I.ttl > 0) {
            Z = I.ttl;
          }
        }
      });
    });
    if (j.length === 0) {
      throw new Error(`[${N}] ${W} 查询结果为空`);
    }
    return {
      url: W,
      addresses: j,
      ttl: Z
    };
  });
  let {
    url: V,
    addresses: Y,
    ttl: J
  } = await Promise.any(M);
  Q2(`[${N}] 最快响应来自: ${V}`);
  r2 = {
    addresses: Y,
    ttl: J
  };
})().catch(async C => {
  Q2(C);
  if (`${a?.fallback}` === "1") {
    r2 = {};
  }
}).finally(async () => {
  $done(r2);
});
function hA(C) {
  return /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/.test(C);
}
async function lA({
  url: C,
  domain: S,
  type: N = "A",
  timeout: R,
  edns: H
}) {
  let M = i2.encode({
    type: "query",
    id: 0,
    flags: i2.RECURSION_DESIRED,
    questions: [{
      type: N,
      name: S
    }],
    additionals: [{
      type: "OPT",
      name: ".",
      udpPayloadSize: 4096,
      flags: 0,
      options: [{
        code: "CLIENT_SUBNET",
        ip: H,
        sourcePrefixLength: hA(H) ? 24 : 56,
        scopePrefixLength: 0
      }]
    }]
  });
  let V = await pA({
    url: `${C}?dns=${M.toString("base64").toString("utf-8").replace(/=/g, "")}`,
    headers: {
      Accept: "application/dns-message"
    },
    "binary-mode": true,
    encoding: null,
    timeout: R,
    policy: `${a?.policy}` === "0" ? undefined : a?.policy
  });
  return i2.decode(gA.from(V.body));
}
async function pA(C) {
  return new Promise((S, N) => {
    $httpClient.get(C, (R, H, M) => {
      if (H) {
        H.body = M;
        S(H, {
          error: R
        });
      } else {
        S(null, {
          error: R
        });
      }
    });
  });
}