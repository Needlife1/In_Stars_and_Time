function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var fslightbox = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(window, function() {
    return function(e) {
      var t = {};
      function n(o) {
        if (t[o])
          return t[o].exports;
        var i = t[o] = { i: o, l: false, exports: {} };
        return e[o].call(i.exports, i, i.exports, n), i.l = true, i.exports;
      }
      return n.m = e, n.c = t, n.d = function(e2, t2, o) {
        n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: o });
      }, n.r = function(e2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      }, n.t = function(e2, t2) {
        if (1 & t2 && (e2 = n(e2)), 8 & t2)
          return e2;
        if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
          return e2;
        var o = /* @__PURE__ */ Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
          for (var i in e2)
            n.d(o, i, (function(t3) {
              return e2[t3];
            }).bind(null, i));
        return o;
      }, n.n = function(e2) {
        var t2 = e2 && e2.__esModule ? function() {
          return e2.default;
        } : function() {
          return e2;
        };
        return n.d(t2, "a", t2), t2;
      }, n.o = function(e2, t2) {
        return Object.prototype.hasOwnProperty.call(e2, t2);
      }, n.p = "", n(n.s = 0);
    }([function(e, t, n) {
      n.r(t);
      var o, i = "fslightbox-", r = "".concat(i, "styles"), s = "".concat(i, "cursor-grabbing"), a = "".concat(i, "full-dimension"), c = "".concat(i, "flex-centered"), l = "".concat(i, "open"), u = "".concat(i, "transform-transition"), d = "".concat(i, "absoluted"), f = "".concat(i, "slide-btn"), p = "".concat(f, "-container"), h = "".concat(i, "fade-in"), m = "".concat(i, "fade-out"), g = h + "-strong", v = m + "-strong", b = "".concat(i, "opacity-"), x = "".concat(b, "1"), y = "".concat(i, "source");
      function w(e2) {
        return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      function S(e2) {
        var t2 = e2.stageIndexes, n2 = e2.core.stageManager, o2 = e2.props.sources.length - 1;
        n2.getPreviousSlideIndex = function() {
          return 0 === t2.current ? o2 : t2.current - 1;
        }, n2.getNextSlideIndex = function() {
          return t2.current === o2 ? 0 : t2.current + 1;
        }, n2.updateStageIndexes = 0 === o2 ? function() {
        } : 1 === o2 ? function() {
          0 === t2.current ? (t2.next = 1, delete t2.previous) : (t2.previous = 0, delete t2.next);
        } : function() {
          t2.previous = n2.getPreviousSlideIndex(), t2.next = n2.getNextSlideIndex();
        }, n2.i = o2 <= 2 ? function() {
          return true;
        } : function(e3) {
          var n3 = t2.current;
          if (0 === n3 && e3 === o2 || n3 === o2 && 0 === e3)
            return true;
          var i2 = n3 - e3;
          return -1 === i2 || 0 === i2 || 1 === i2;
        };
      }
      "object" === ("undefined" == typeof document ? "undefined" : w(document)) && ((o = document.createElement("style")).className = r, o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")), document.head.appendChild(o));
      function L(e2) {
        var t2, n2 = e2.props, o2 = 0, i2 = {};
        this.getSourceTypeFromLocalStorageByUrl = function(e3) {
          return t2[e3] ? t2[e3] : r2(e3);
        }, this.handleReceivedSourceTypeForUrl = function(e3, n3) {
          if (false === i2[n3] && (o2--, "invalid" !== e3 ? i2[n3] = e3 : delete i2[n3], 0 === o2)) {
            !function(e4, t3) {
              for (var n4 in t3)
                e4[n4] = t3[n4];
            }(t2, i2);
            try {
              localStorage.setItem("fslightbox-types", JSON.stringify(t2));
            } catch (e4) {
            }
          }
        };
        var r2 = function(e3) {
          o2++, i2[e3] = false;
        };
        if (n2.disableLocalStorage)
          this.getSourceTypeFromLocalStorageByUrl = function() {
          }, this.handleReceivedSourceTypeForUrl = function() {
          };
        else {
          try {
            t2 = JSON.parse(localStorage.getItem("fslightbox-types"));
          } catch (e3) {
          }
          t2 || (t2 = {}, this.getSourceTypeFromLocalStorageByUrl = r2);
        }
      }
      function A(e2, t2, n2, o2) {
        var i2 = e2.data, r2 = e2.elements.sources, s2 = n2 / o2, a2 = 0;
        this.adjustSize = function() {
          if ((a2 = i2.maxSourceWidth / s2) < i2.maxSourceHeight)
            return n2 < i2.maxSourceWidth && (a2 = o2), c2();
          a2 = o2 > i2.maxSourceHeight ? i2.maxSourceHeight : o2, c2();
        };
        var c2 = function() {
          r2[t2].style.width = a2 * s2 + "px", r2[t2].style.height = a2 + "px";
        };
      }
      function C(e2, t2) {
        var n2 = this, o2 = e2.collections.sourceSizers, i2 = e2.elements, r2 = i2.sourceAnimationWrappers, s2 = i2.sources, a2 = e2.isl, c2 = e2.resolve;
        function l2(e3, n3) {
          o2[t2] = c2(A, [t2, e3, n3]), o2[t2].adjustSize();
        }
        this.runActions = function(e3, o3) {
          a2[t2] = true, s2[t2].classList.add(x), r2[t2].classList.add(g), r2[t2].removeChild(r2[t2].firstChild), l2(e3, o3), n2.runActions = l2;
        };
      }
      function E(e2, t2) {
        var n2, o2 = this, i2 = e2.elements.sources, r2 = e2.props, s2 = (0, e2.resolve)(C, [t2]);
        this.handleImageLoad = function(e3) {
          var t3 = e3.target, n3 = t3.naturalWidth, o3 = t3.naturalHeight;
          s2.runActions(n3, o3);
        }, this.handleVideoLoad = function(e3) {
          var t3 = e3.target, o3 = t3.videoWidth, i3 = t3.videoHeight;
          n2 = true, s2.runActions(o3, i3);
        }, this.handleNotMetaDatedVideoLoad = function() {
          n2 || o2.handleYoutubeLoad();
        }, this.handleYoutubeLoad = function() {
          var e3 = 1920, t3 = 1080;
          r2.maxYoutubeDimensions && (e3 = r2.maxYoutubeDimensions.width, t3 = r2.maxYoutubeDimensions.height), s2.runActions(e3, t3);
        }, this.handleCustomLoad = function() {
          var e3 = i2[t2], n3 = e3.offsetWidth, r3 = e3.offsetHeight;
          n3 && r3 ? s2.runActions(n3, r3) : setTimeout(o2.handleCustomLoad);
        };
      }
      function F(e2, t2, n2) {
        var o2 = e2.elements.sources, i2 = e2.props.customClasses, r2 = i2[t2] ? i2[t2] : "";
        o2[t2].className = n2 + " " + r2;
      }
      function I(e2, t2) {
        var n2 = e2.elements.sources, o2 = e2.props.customAttributes;
        for (var i2 in o2[t2])
          n2[t2].setAttribute(i2, o2[t2][i2]);
      }
      function T(e2, t2) {
        var n2 = e2.collections.sourceLoadHandlers, o2 = e2.elements, i2 = o2.sources, r2 = o2.sourceAnimationWrappers, s2 = e2.props.sources;
        i2[t2] = document.createElement("img"), F(e2, t2, y), i2[t2].src = s2[t2], i2[t2].onload = n2[t2].handleImageLoad, I(e2, t2), r2[t2].appendChild(i2[t2]);
      }
      function N(e2, t2) {
        var n2 = e2.collections.sourceLoadHandlers, o2 = e2.elements, i2 = o2.sources, r2 = o2.sourceAnimationWrappers, s2 = e2.props, a2 = s2.sources, c2 = s2.videosPosters;
        i2[t2] = document.createElement("video"), F(e2, t2, y), i2[t2].src = a2[t2], i2[t2].onloadedmetadata = function(e3) {
          n2[t2].handleVideoLoad(e3);
        }, i2[t2].controls = true, I(e2, t2), c2[t2] && (i2[t2].poster = c2[t2]);
        var l2 = document.createElement("source");
        l2.src = a2[t2], i2[t2].appendChild(l2), setTimeout(n2[t2].handleNotMetaDatedVideoLoad, 3e3), r2[t2].appendChild(i2[t2]);
      }
      function z(e2, t2) {
        var n2 = e2.collections.sourceLoadHandlers, o2 = e2.elements, r2 = o2.sources, s2 = o2.sourceAnimationWrappers, a2 = e2.props.sources;
        r2[t2] = document.createElement("iframe"), F(e2, t2, "".concat(y, " ").concat(i, "youtube-iframe"));
        var c2 = a2[t2], l2 = c2.split("?")[1];
        r2[t2].src = "https://www.youtube.com/embed/".concat(c2.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?").concat(l2 || ""), r2[t2].allowFullscreen = true, I(e2, t2), s2[t2].appendChild(r2[t2]), n2[t2].handleYoutubeLoad();
      }
      function P(e2, t2) {
        var n2 = e2.collections.sourceLoadHandlers, o2 = e2.elements, i2 = o2.sources, r2 = o2.sourceAnimationWrappers, s2 = e2.props.sources;
        i2[t2] = s2[t2], F(e2, t2, "".concat(i2[t2].className, " ").concat(y)), r2[t2].appendChild(i2[t2]), n2[t2].handleCustomLoad();
      }
      function k(e2, t2) {
        var n2 = e2.elements, o2 = n2.sources, r2 = n2.sourceAnimationWrappers;
        e2.props.sources;
        o2[t2] = document.createElement("div"), o2[t2].className = "".concat(i, "invalid-file-wrapper ").concat(c), o2[t2].innerHTML = "Invalid source", r2[t2].classList.add(g), r2[t2].removeChild(r2[t2].firstChild), r2[t2].appendChild(o2[t2]);
      }
      function H(e2) {
        var t2 = e2.collections, n2 = t2.sourceLoadHandlers, o2 = t2.sourcesRenderFunctions, i2 = e2.core.sourceDisplayFacade, r2 = e2.resolve;
        this.runActionsForSourceTypeAndIndex = function(t3, s2) {
          var a2;
          switch ("invalid" !== t3 && (n2[s2] = r2(E, [s2])), t3) {
            case "image":
              a2 = T;
              break;
            case "video":
              a2 = N;
              break;
            case "youtube":
              a2 = z;
              break;
            case "custom":
              a2 = P;
              break;
            default:
              a2 = k;
          }
          o2[s2] = function() {
            return a2(e2, s2);
          }, i2.displaySourcesWhichShouldBeDisplayed();
        };
      }
      function W() {
        var e2, t2, n2, o2 = { isUrlYoutubeOne: function(e3) {
          var t3 = document.createElement("a");
          return t3.href = e3, "www.youtube.com" === t3.hostname || "youtu.be" === t3.hostname;
        }, getTypeFromResponseContentType: function(e3) {
          return e3.slice(0, e3.indexOf("/"));
        } };
        function i2() {
          if (4 !== n2.readyState) {
            if (2 === n2.readyState) {
              var e3;
              switch (o2.getTypeFromResponseContentType(n2.getResponseHeader("content-type"))) {
                case "image":
                  e3 = "image";
                  break;
                case "video":
                  e3 = "video";
                  break;
                default:
                  e3 = "invalid";
              }
              n2.onreadystatechange = null, n2.abort(), t2(e3);
            }
          } else
            t2("invalid");
        }
        this.setUrlToCheck = function(t3) {
          e2 = t3;
        }, this.getSourceType = function(r2) {
          if (o2.isUrlYoutubeOne(e2))
            return r2("youtube");
          t2 = r2, (n2 = new XMLHttpRequest()).onreadystatechange = i2, n2.open("GET", e2, true), n2.send();
        };
      }
      function R(e2, t2, n2) {
        var o2 = e2.props, i2 = o2.types, r2 = o2.type, s2 = o2.sources, a2 = e2.resolve;
        this.getTypeSetByClientForIndex = function(e3) {
          var t3;
          return i2 && i2[e3] ? t3 = i2[e3] : r2 && (t3 = r2), t3;
        }, this.retrieveTypeWithXhrForIndex = function(e3) {
          var o3 = a2(W);
          o3.setUrlToCheck(s2[e3]), o3.getSourceType(function(o4) {
            t2.handleReceivedSourceTypeForUrl(o4, s2[e3]), n2.runActionsForSourceTypeAndIndex(o4, e3);
          });
        };
      }
      function D(e2, t2) {
        var n2 = e2.core.stageManager, o2 = e2.elements, i2 = o2.smw, r2 = o2.sourceWrappersContainer, s2 = e2.props, l2 = 0, f2 = document.createElement("div");
        function p2(e3) {
          f2.style.transform = "translateX(".concat(e3 + l2, "px)"), l2 = 0;
        }
        function h2() {
          return (1 + s2.slideDistance) * innerWidth;
        }
        f2.className = "".concat(d, " ").concat(a, " ").concat(c), f2.s = function() {
          f2.style.display = "flex";
        }, f2.h = function() {
          f2.style.display = "none";
        }, f2.a = function() {
          f2.classList.add(u);
        }, f2.d = function() {
          f2.classList.remove(u);
        }, f2.n = function() {
          f2.style.removeProperty("transform");
        }, f2.v = function(e3) {
          return l2 = e3, f2;
        }, f2.ne = function() {
          p2(-h2());
        }, f2.z = function() {
          p2(0);
        }, f2.p = function() {
          p2(h2());
        }, n2.i(t2) || f2.h(), i2[t2] = f2, r2.appendChild(f2), function(e3, t3) {
          var n3 = e3.elements, o3 = n3.smw, i3 = n3.sourceAnimationWrappers, r3 = document.createElement("div"), s3 = document.createElement("div");
          s3.className = "fslightboxl";
          for (var a2 = 0; a2 < 3; a2++) {
            var c2 = document.createElement("div");
            s3.appendChild(c2);
          }
          r3.appendChild(s3), o3[t3].appendChild(r3), i3[t3] = r3;
        }(e2, t2);
      }
      function O(e2, t2, n2, o2) {
        var r2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        r2.setAttributeNS(null, "width", t2), r2.setAttributeNS(null, "height", t2), r2.setAttributeNS(null, "viewBox", n2);
        var s2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return s2.setAttributeNS(null, "class", "".concat(i, "svg-path")), s2.setAttributeNS(null, "d", o2), r2.appendChild(s2), e2.appendChild(r2), r2;
      }
      function M(e2, t2) {
        var n2 = document.createElement("div");
        return n2.className = "".concat(i, "toolbar-button ").concat(c), n2.title = t2, e2.appendChild(n2), n2;
      }
      function j(e2, t2) {
        var n2 = document.createElement("div");
        n2.className = "".concat(i, "toolbar"), t2.appendChild(n2), function(e3, t3) {
          var n3 = e3.componentsServices, o2 = e3.data, i2 = e3.fs, r2 = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z", s2 = M(t3);
          s2.title = "Enter fullscreen";
          var a2 = O(s2, "20px", "0 0 18 18", r2);
          n3.ofs = function() {
            o2.ifs = true, s2.title = "Exit fullscreen", a2.setAttributeNS(null, "width", "24px"), a2.setAttributeNS(null, "height", "24px"), a2.setAttributeNS(null, "viewBox", "0 0 950 1024"), a2.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z");
          }, n3.xfs = function() {
            o2.ifs = false, s2.title = "Enter fullscreen", a2.setAttributeNS(null, "width", "20px"), a2.setAttributeNS(null, "height", "20px"), a2.setAttributeNS(null, "viewBox", "0 0 18 18"), a2.firstChild.setAttributeNS(null, "d", r2);
          }, s2.onclick = i2.t;
        }(e2, n2), function(e3, t3) {
          var n3 = M(t3, "Close");
          n3.onclick = e3.core.lightboxCloser.closeLightbox, O(n3, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z");
        }(e2, n2);
      }
      function X(e2) {
        var t2 = e2.props.sources, n2 = e2.elements.container, o2 = document.createElement("div");
        o2.className = "".concat(i, "nav"), n2.appendChild(o2), j(e2, o2), t2.length > 1 && function(e3, t3) {
          var n3 = e3.componentsServices, o3 = e3.props.sources, r2 = (e3.stageIndexes, document.createElement("div"));
          r2.className = "".concat(i, "slide-number-container");
          var s2 = document.createElement("div");
          s2.className = c;
          var a2 = document.createElement("span");
          n3.setSlideNumber = function(e4) {
            return a2.innerHTML = e4;
          };
          var l2 = document.createElement("span");
          l2.className = "".concat(i, "slash");
          var u2 = document.createElement("div");
          u2.innerHTML = o3.length, r2.appendChild(s2), s2.appendChild(a2), s2.appendChild(l2), s2.appendChild(u2), t3.appendChild(r2), setTimeout(function() {
            s2.offsetWidth > 55 && (r2.style.justifyContent = "flex-start");
          });
        }(e2, o2);
      }
      function B(e2, t2, n2, o2) {
        var i2 = e2.elements.container, r2 = n2.charAt(0).toUpperCase() + n2.slice(1), s2 = document.createElement("div");
        s2.className = "".concat(p, " ").concat(p, "-").concat(n2), s2.title = "".concat(r2, " slide"), s2.onclick = t2, function(e3, t3) {
          var n3 = document.createElement("div");
          n3.className = "".concat(f, " ").concat(c), O(n3, "20px", "0 0 20 20", t3), e3.appendChild(n3);
        }(s2, o2), i2.appendChild(s2);
      }
      function U(e2) {
        var t2 = e2.core, n2 = t2.lightboxCloser, o2 = t2.slideChangeFacade, i2 = e2.fs;
        this.listener = function(e3) {
          switch (e3.key) {
            case "Escape":
              n2.closeLightbox();
              break;
            case "ArrowLeft":
              o2.changeToPrevious();
              break;
            case "ArrowRight":
              o2.changeToNext();
              break;
            case "F11":
              e3.preventDefault(), i2.t();
          }
        };
      }
      function q(e2) {
        var t2 = e2.elements, n2 = e2.sourcePointerProps, o2 = e2.stageIndexes;
        function i2(e3, o3) {
          t2.smw[e3].v(n2.swipedX)[o3]();
        }
        this.runActionsForEvent = function(e3) {
          var r2, a2, c2;
          t2.container.contains(t2.slideSwipingHoverer) || t2.container.appendChild(t2.slideSwipingHoverer), r2 = t2.container, a2 = s, (c2 = r2.classList).contains(a2) || c2.add(a2), n2.swipedX = e3.screenX - n2.downScreenX;
          var l2 = o2.previous, u2 = o2.next;
          i2(o2.current, "z"), void 0 !== l2 && n2.swipedX > 0 ? i2(l2, "ne") : void 0 !== u2 && n2.swipedX < 0 && i2(u2, "p");
        };
      }
      function V(e2) {
        var t2 = e2.props.sources, n2 = e2.resolve, o2 = e2.sourcePointerProps, i2 = n2(q);
        1 === t2.length ? this.listener = function() {
          o2.swipedX = 1;
        } : this.listener = function(e3) {
          o2.isPointering && i2.runActionsForEvent(e3);
        };
      }
      function _(e2) {
        var t2 = e2.core.slideIndexChanger, n2 = e2.elements.smw, o2 = e2.stageIndexes, i2 = e2.sws;
        function r2(e3) {
          var t3 = n2[o2.current];
          t3.a(), t3[e3]();
        }
        function s2(e3, t3) {
          void 0 !== e3 && (n2[e3].s(), n2[e3][t3]());
        }
        this.runPositiveSwipedXActions = function() {
          var e3 = o2.previous;
          if (void 0 === e3)
            r2("z");
          else {
            r2("p");
            var n3 = o2.next;
            t2.changeTo(e3);
            var a2 = o2.previous;
            i2.d(a2), i2.b(n3), r2("z"), s2(a2, "ne");
          }
        }, this.runNegativeSwipedXActions = function() {
          var e3 = o2.next;
          if (void 0 === e3)
            r2("z");
          else {
            r2("ne");
            var n3 = o2.previous;
            t2.changeTo(e3);
            var a2 = o2.next;
            i2.d(a2), i2.b(n3), r2("z"), s2(a2, "p");
          }
        };
      }
      function Y(e2, t2) {
        e2.contains(t2) && e2.removeChild(t2);
      }
      function J(e2) {
        var t2 = e2.core.lightboxCloser, n2 = e2.elements, o2 = e2.resolve, i2 = e2.sourcePointerProps, r2 = o2(_);
        this.runNoSwipeActions = function() {
          Y(n2.container, n2.slideSwipingHoverer), i2.isSourceDownEventTarget || t2.closeLightbox(), i2.isPointering = false;
        }, this.runActions = function() {
          i2.swipedX > 0 ? r2.runPositiveSwipedXActions() : r2.runNegativeSwipedXActions(), Y(n2.container, n2.slideSwipingHoverer), n2.container.classList.remove(s), i2.isPointering = false;
        };
      }
      function G(e2) {
        var t2 = e2.resolve, n2 = e2.sourcePointerProps, o2 = t2(J);
        this.listener = function() {
          n2.isPointering && (n2.swipedX ? o2.runActions() : o2.runNoSwipeActions());
        };
      }
      function $(e2) {
        var t2 = this, n2 = e2.core, o2 = n2.eventsDispatcher, i2 = n2.globalEventsController, r2 = n2.scrollbarRecompensor, s2 = e2.data, a2 = e2.elements, c2 = e2.fs, u2 = e2.props, d2 = e2.sourcePointerProps;
        this.isLightboxFadingOut = false, this.runActions = function() {
          t2.isLightboxFadingOut = true, a2.container.classList.add(v), i2.removeListeners(), u2.exitFullscreenOnClose && s2.ifs && c2.x(), setTimeout(function() {
            t2.isLightboxFadingOut = false, d2.isPointering = false, a2.container.classList.remove(v), document.documentElement.classList.remove(l), r2.removeRecompense(), document.body.removeChild(a2.container), o2.dispatch("onClose");
          }, 270);
        };
      }
      function K(e2, t2) {
        var n2 = e2.classList;
        n2.contains(t2) && n2.remove(t2);
      }
      function Q(e2) {
        var t2, n2, o2;
        n2 = (t2 = e2).core.eventsDispatcher, o2 = t2.props, n2.dispatch = function(e3) {
          o2[e3] && o2[e3]();
        }, function(e3) {
          var t3 = e3.componentsServices, n3 = e3.data, o3 = e3.fs, i2 = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
          function r2(e4) {
            for (var t4 = 0; t4 < i2.length; t4++)
              document[e4](i2[t4], s2);
          }
          function s2() {
            document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement ? t3.ofs() : t3.xfs();
          }
          o3.o = function() {
            t3.ofs();
            var e4 = document.documentElement;
            e4.requestFullscreen ? e4.requestFullscreen() : e4.mozRequestFullScreen ? e4.mozRequestFullScreen() : e4.webkitRequestFullscreen ? e4.webkitRequestFullscreen() : e4.msRequestFullscreen && e4.msRequestFullscreen();
          }, o3.x = function() {
            t3.xfs(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
          }, o3.t = function() {
            n3.ifs ? o3.x() : o3.o();
          }, o3.l = function() {
            r2("addEventListener");
          }, o3.q = function() {
            r2("removeEventListener");
          };
        }(e2), function(e3) {
          var t3 = e3.core, n3 = t3.globalEventsController, o3 = t3.windowResizeActioner, i2 = e3.fs, r2 = e3.resolve, s2 = r2(U), a2 = r2(V), c2 = r2(G);
          n3.attachListeners = function() {
            document.addEventListener("pointermove", a2.listener), document.addEventListener("pointerup", c2.listener), addEventListener("resize", o3.runActions), document.addEventListener("keydown", s2.listener), i2.l();
          }, n3.removeListeners = function() {
            document.removeEventListener("pointermove", a2.listener), document.removeEventListener("pointerup", c2.listener), removeEventListener("resize", o3.runActions), document.removeEventListener("keydown", s2.listener), i2.q();
          };
        }(e2), function(e3) {
          var t3 = e3.core.lightboxCloser, n3 = (0, e3.resolve)($);
          t3.closeLightbox = function() {
            n3.isLightboxFadingOut || n3.runActions();
          };
        }(e2), function(e3) {
          var t3 = e3.data, n3 = e3.core.scrollbarRecompensor;
          function o3() {
            document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t3.scrollbarWidth + "px");
          }
          n3.addRecompense = function() {
            "complete" === document.readyState ? o3() : addEventListener("load", function() {
              o3(), n3.addRecompense = o3;
            });
          }, n3.removeRecompense = function() {
            document.body.style.removeProperty("margin-right");
          };
        }(e2), function(e3) {
          var t3 = e3.core, n3 = t3.slideChangeFacade, o3 = t3.slideIndexChanger, i2 = t3.stageManager;
          e3.props.sources.length > 1 ? (n3.changeToPrevious = function() {
            o3.jumpTo(i2.getPreviousSlideIndex());
          }, n3.changeToNext = function() {
            o3.jumpTo(i2.getNextSlideIndex());
          }) : (n3.changeToPrevious = function() {
          }, n3.changeToNext = function() {
          });
        }(e2), function(e3) {
          var t3 = e3.componentsServices, n3 = e3.core, o3 = n3.slideIndexChanger, i2 = n3.sourceDisplayFacade, r2 = n3.stageManager, s2 = e3.elements, a2 = s2.smw, c2 = s2.sourceAnimationWrappers, l2 = e3.isl, u2 = e3.stageIndexes, d2 = e3.sws;
          o3.changeTo = function(e4) {
            u2.current = e4, r2.updateStageIndexes(), t3.setSlideNumber(e4 + 1), i2.displaySourcesWhichShouldBeDisplayed();
          }, o3.jumpTo = function(e4) {
            var t4 = u2.previous, n4 = u2.current, i3 = u2.next, s3 = l2[n4], f2 = l2[e4];
            o3.changeTo(e4);
            for (var p2 = 0; p2 < a2.length; p2++)
              a2[p2].d();
            d2.d(n4), d2.c(), requestAnimationFrame(function() {
              requestAnimationFrame(function() {
                var e5 = u2.previous, o4 = u2.next;
                function p3() {
                  r2.i(n4) ? n4 === u2.previous ? a2[n4].ne() : n4 === u2.next && a2[n4].p() : (a2[n4].h(), a2[n4].n());
                }
                s3 && c2[n4].classList.add(m), f2 && c2[u2.current].classList.add(h), d2.a(), void 0 !== e5 && e5 !== n4 && a2[e5].ne(), a2[u2.current].n(), void 0 !== o4 && o4 !== n4 && a2[o4].p(), d2.b(t4), d2.b(i3), l2[n4] ? setTimeout(p3, 260) : p3();
              });
            });
          };
        }(e2), function(e3) {
          var t3 = e3.core.sourcesPointerDown, n3 = e3.elements, o3 = n3.smw, i2 = n3.sources, r2 = e3.sourcePointerProps, s2 = e3.stageIndexes;
          t3.listener = function(e4) {
            "VIDEO" !== e4.target.tagName && e4.preventDefault(), r2.isPointering = true, r2.downScreenX = e4.screenX, r2.swipedX = 0;
            var t4 = i2[s2.current];
            t4 && t4.contains(e4.target) ? r2.isSourceDownEventTarget = true : r2.isSourceDownEventTarget = false;
            for (var n4 = 0; n4 < o3.length; n4++)
              o3[n4].d();
          };
        }(e2), function(e3) {
          var t3 = e3.collections.sourcesRenderFunctions, n3 = e3.core.sourceDisplayFacade, o3 = e3.props, i2 = e3.stageIndexes;
          function r2(e4) {
            t3[e4] && (t3[e4](), delete t3[e4]);
          }
          n3.displaySourcesWhichShouldBeDisplayed = function() {
            if (o3.loadOnlyCurrentSource)
              r2(i2.current);
            else
              for (var e4 in i2)
                r2(i2[e4]);
          };
        }(e2), function(e3) {
          var t3 = e3.core.stageManager, n3 = e3.elements, o3 = n3.smw, i2 = n3.sourceAnimationWrappers, r2 = e3.isl, s2 = e3.stageIndexes, a2 = e3.sws;
          a2.a = function() {
            for (var e4 in s2)
              o3[s2[e4]].s();
          }, a2.b = function(e4) {
            void 0 === e4 || t3.i(e4) || (o3[e4].h(), o3[e4].n());
          }, a2.c = function() {
            for (var e4 in s2)
              a2.d(s2[e4]);
          }, a2.d = function(e4) {
            if (r2[e4]) {
              var t4 = i2[e4];
              K(t4, g), K(t4, h), K(t4, m);
            }
          };
        }(e2), function(e3) {
          var t3 = e3.collections.sourceSizers, n3 = e3.core.windowResizeActioner, o3 = e3.data, i2 = e3.elements.smw, r2 = e3.stageIndexes;
          n3.runActions = function() {
            innerWidth < 992 ? o3.maxSourceWidth = innerWidth : o3.maxSourceWidth = 0.9 * innerWidth, o3.maxSourceHeight = 0.9 * innerHeight;
            for (var e4 = 0; e4 < i2.length; e4++)
              i2[e4].d(), t3[e4] && t3[e4].adjustSize();
            var n4 = r2.previous, s2 = r2.next;
            void 0 !== n4 && i2[n4].ne(), void 0 !== s2 && i2[s2].p();
          };
        }(e2);
      }
      function Z(e2) {
        var t2 = e2.componentsServices, n2 = e2.core, o2 = n2.eventsDispatcher, r2 = n2.globalEventsController, s2 = n2.scrollbarRecompensor, c2 = n2.sourceDisplayFacade, u2 = n2.stageManager, f2 = n2.windowResizeActioner, p2 = e2.data, h2 = e2.elements, m2 = (e2.props, e2.stageIndexes), v2 = e2.sws;
        function b2() {
          var t3, n3;
          p2.i = true, p2.scrollbarWidth = function() {
            var e3 = document.createElement("div"), t4 = e3.style, n4 = document.createElement("div");
            t4.visibility = "hidden", t4.width = "100px", t4.msOverflowStyle = "scrollbar", t4.overflow = "scroll", n4.style.width = "100%", document.body.appendChild(e3);
            var o3 = e3.offsetWidth;
            e3.appendChild(n4);
            var i2 = n4.offsetWidth;
            return document.body.removeChild(e3), o3 - i2;
          }(), Q(e2), h2.container = document.createElement("div"), h2.container.className = "".concat(i, "container ").concat(a, " ").concat(g), function(e3) {
            var t4 = e3.elements;
            t4.slideSwipingHoverer = document.createElement("div"), t4.slideSwipingHoverer.className = "".concat(i, "slide-swiping-hoverer ").concat(a, " ").concat(d);
          }(e2), X(e2), function(e3) {
            var t4 = e3.core.sourcesPointerDown, n4 = e3.elements, o3 = e3.props.sources, i2 = document.createElement("div");
            i2.className = "".concat(d, " ").concat(a), n4.container.appendChild(i2), i2.addEventListener("pointerdown", t4.listener), n4.sourceWrappersContainer = i2;
            for (var r3 = 0; r3 < o3.length; r3++)
              D(e3, r3);
          }(e2), e2.props.sources.length > 1 && (n3 = (t3 = e2).core.slideChangeFacade, B(t3, n3.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), B(t3, n3.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")), function(e3) {
            for (var t4 = e3.props.sources, n4 = e3.resolve, o3 = n4(L), i2 = n4(H), r3 = n4(R, [o3, i2]), s3 = 0; s3 < t4.length; s3++)
              if ("string" == typeof t4[s3]) {
                var a2 = r3.getTypeSetByClientForIndex(s3);
                if (a2)
                  i2.runActionsForSourceTypeAndIndex(a2, s3);
                else {
                  var c3 = o3.getSourceTypeFromLocalStorageByUrl(t4[s3]);
                  c3 ? i2.runActionsForSourceTypeAndIndex(c3, s3) : r3.retrieveTypeWithXhrForIndex(s3);
                }
              } else
                i2.runActionsForSourceTypeAndIndex("custom", s3);
          }(e2), o2.dispatch("onInit");
        }
        e2.open = function() {
          var n3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i2 = m2.previous, a2 = m2.current, d2 = m2.next;
          m2.current = n3, p2.i || S(e2), u2.updateStageIndexes(), p2.i ? (v2.c(), v2.a(), v2.b(i2), v2.b(a2), v2.b(d2), o2.dispatch("onShow")) : b2(), c2.displaySourcesWhichShouldBeDisplayed(), t2.setSlideNumber(n3 + 1), document.body.appendChild(h2.container), document.documentElement.classList.add(l), s2.addRecompense(), r2.attachListeners(), f2.runActions(), h2.smw[m2.current].n(), o2.dispatch("onOpen");
        };
      }
      function ee(e2, t2, n2) {
        return (ee = te() ? Reflect.construct.bind() : function(e3, t3, n3) {
          var o2 = [null];
          o2.push.apply(o2, t3);
          var i2 = new (Function.bind.apply(e3, o2))();
          return n3 && ne(i2, n3.prototype), i2;
        }).apply(null, arguments);
      }
      function te() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if ("function" == typeof Proxy)
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (e2) {
          return false;
        }
      }
      function ne(e2, t2) {
        return (ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
          return e3.__proto__ = t3, e3;
        })(e2, t2);
      }
      function oe(e2) {
        return function(e3) {
          if (Array.isArray(e3))
            return ie(e3);
        }(e2) || function(e3) {
          if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
            return Array.from(e3);
        }(e2) || function(e3, t2) {
          if (!e3)
            return;
          if ("string" == typeof e3)
            return ie(e3, t2);
          var n2 = Object.prototype.toString.call(e3).slice(8, -1);
          "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
          if ("Map" === n2 || "Set" === n2)
            return Array.from(e3);
          if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return ie(e3, t2);
        }(e2) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function ie(e2, t2) {
        (null == t2 || t2 > e2.length) && (t2 = e2.length);
        for (var n2 = 0, o2 = new Array(t2); n2 < t2; n2++)
          o2[n2] = e2[n2];
        return o2;
      }
      function re() {
        for (var e2 = document.getElementsByTagName("a"), t2 = function(t3) {
          if (!e2[t3].hasAttribute("data-fslightbox"))
            return "continue";
          var n3 = e2[t3].hasAttribute("data-href") ? e2[t3].getAttribute("data-href") : e2[t3].getAttribute("href");
          if (!n3)
            return console.warn('The "data-fslightbox" attribute was set without the "href" attribute.'), "continue";
          var o3 = e2[t3].getAttribute("data-fslightbox");
          fsLightboxInstances[o3] || (fsLightboxInstances[o3] = new FsLightbox());
          var i2 = null;
          "#" === n3.charAt(0) ? (i2 = document.getElementById(n3.substring(1)).cloneNode(true)).removeAttribute("id") : i2 = n3, fsLightboxInstances[o3].props.sources.push(i2), fsLightboxInstances[o3].elements.a.push(e2[t3]);
          var r2 = fsLightboxInstances[o3].props.sources.length - 1;
          e2[t3].onclick = function(e3) {
            e3.preventDefault(), fsLightboxInstances[o3].open(r2);
          }, d2("types", "data-type"), d2("videosPosters", "data-video-poster"), d2("customClasses", "data-class"), d2("customClasses", "data-custom-class");
          for (var s2 = ["href", "data-fslightbox", "data-href", "data-type", "data-video-poster", "data-class", "data-custom-class"], a2 = e2[t3].attributes, c2 = fsLightboxInstances[o3].props.customAttributes, l2 = 0; l2 < a2.length; l2++)
            if (-1 === s2.indexOf(a2[l2].name) && "data-" === a2[l2].name.substr(0, 5)) {
              c2[r2] || (c2[r2] = {});
              var u2 = a2[l2].name.substr(5);
              c2[r2][u2] = a2[l2].value;
            }
          function d2(n4, i3) {
            e2[t3].hasAttribute(i3) && (fsLightboxInstances[o3].props[n4][r2] = e2[t3].getAttribute(i3));
          }
        }, n2 = 0; n2 < e2.length; n2++)
          t2(n2);
        var o2 = Object.keys(fsLightboxInstances);
        window.fsLightbox = fsLightboxInstances[o2[o2.length - 1]];
      }
      window.FsLightbox = function() {
        var e2 = this;
        this.props = { sources: [], customAttributes: [], customClasses: [], types: [], videosPosters: [], slideDistance: 0.3 }, this.data = { isFullscreenOpen: false, maxSourceWidth: 0, maxSourceHeight: 0, scrollbarWidth: 0 }, this.isl = [], this.sourcePointerProps = { downScreenX: null, isPointering: false, isSourceDownEventTarget: false, swipedX: 0 }, this.stageIndexes = {}, this.elements = { a: [], container: null, slideSwipingHoverer: null, smw: [], sourceWrappersContainer: null, sources: [], sourceAnimationWrappers: [] }, this.componentsServices = { setSlideNumber: function() {
        } }, this.resolve = function(t2) {
          var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return n2.unshift(e2), ee(t2, oe(n2));
        }, this.collections = { sourceLoadHandlers: [], sourcesRenderFunctions: [], sourceSizers: [] }, this.core = { eventsDispatcher: {}, globalEventsController: {}, lightboxCloser: {}, lightboxUpdater: {}, scrollbarRecompensor: {}, slideChangeFacade: {}, slideIndexChanger: {}, sourcesPointerDown: {}, sourceDisplayFacade: {}, stageManager: {}, windowResizeActioner: {} }, this.fs = {}, this.sws = {}, Z(this), this.close = function() {
          return e2.core.lightboxCloser.closeLightbox();
        };
      }, window.fsLightboxInstances = {}, re(), window.refreshFsLightbox = function() {
        for (var e2 in fsLightboxInstances) {
          var t2 = fsLightboxInstances[e2].props;
          fsLightboxInstances[e2] = new FsLightbox(), fsLightboxInstances[e2].props = t2, fsLightboxInstances[e2].props.sources = [], fsLightboxInstances[e2].elements.a = [];
        }
        re();
      };
    }]);
  });
})(fslightbox);
var fslightboxExports = fslightbox.exports;
const index = /* @__PURE__ */ getDefaultExportFromCjs(fslightboxExports);
const index$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: index
}, [fslightboxExports]);
export {
  index$1 as i
};
