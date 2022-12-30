import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import { Dialog } from "@mui/material";
import { metaballsMenu } from "../SvgIcons";
import { likeFill, likeOutline } from "../../Navbar/SvgIcons";
import {
  commentIcon,
  emojiIcon,
  saveIconFill,
  saveIconOutline,
  shareIcon,
} from "../../Home/SvgIcons";

const PostItem = () => {
  return (
    <>
      <div className="group w-full h-32 sm:h-72 flex justify-center items-center bg-black cursor-pointer relative z-0">
        <img
          src="https://i.insider.com/5baa6a85a135a2885c8b456b?width=750&format=jpeg&auto=webp"
          alt=""
          draggable="false"
          loading="lazy"
          className="hover:opacity-75 group-hover:opacity-75 cursor-pointer object-cover h-full w-full"
        />
        <div className="hidden group-hover:flex text-white absolute pointer-events-none gap-4">
          <span>
            <FavoriteIcon /> 20
          </span>
          <span>
            <ModeCommentIcon /> 12
          </span>
        </div>
      </div>

      <Dialog open={false} maxWidth="xl">
        <div className="flex sm:flex-row flex-col max-w-7xl">
          <div className="relative flex items-center justify-center bg-black sm:h-[90vh] w-full">
            <img
              src="https://i.insider.com/5baa6a85a135a2885c8b456b?width=750&format=jpeg&auto=webp"
              alt="post"
              draggable="false"
              className="object-cover h-full w-full"
            />
          </div>

          <div className="flex flex-col justify-between border w-full max-w-xl rounded bg-white">
            <div className="flex justify-between px-3 py-2 border-b items-center">
              <div className="flex space-x-3 items-center">
                <img
                  draggable="false"
                  className="w-10 h-10 rounded-full object-cover"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <span className="text-black text-sm font-semibold  hover:underline cursor-pointer">
                  Kevin
                </span>
              </div>
              <span className="cursor-pointer">{metaballsMenu}</span>
            </div>

            <Dialog open={false}>
              <div className="flex flex-col items-center w-80">
                <button className="border-b text-red-600 w-full font-medium py-2.5 hover:bg-red-50">
                  Delete
                </button>
                <button className=" w-full font-medium py-2.5 hover:bg-gray-50">
                  Cancel
                </button>
              </div>
            </Dialog>

            <div className="p-4 w-full flex-1  overscroll-x-hidden overflow-y-auto">
              <div className="flex items-start">
                <img
                  className="w-9 h-9 rounded-full object-cover"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGRgZHRwdHBoZGBoeGhoZHBwcHBwaHR0cIS4lHB4rIR4cJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEDBAUGAgj/xABAEAACAQIDBQYFAgQEBAcAAAABAgADEQQhMQUGEkFRByJhcYGREzKhsfBCwVJi0eEjcoLxFDM0shckU2NzksL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Al+IiAiVlICJWUgIiealRVBZmAA1JIAHqYHqeK9ZUUu7BVAuSTYCcttftC2fQViMQlRhccFNi5Jte11BAHK5NpCu92+GJ2i1m7tJTdaS5AH+JjlxN4nS+kCe9p71YPDoHqYhAGAK2YEsCLiwGek4rHdrlG5FFAAD81b4i3GlwqI/1tqJCFyDY3B0zvyyAnpKfFz94Ev8A/jBZwGp02TLvUy99f/cRbex/p1GA33d0NYYc1qAt38Owd1Frnipmx7vOxuMu7mJ8+nDFc208M/pzHjNzsTeLEYJmbDPYPYshF1a3MDyy65wPovYu38Ni1vh6qvlcrmrKNO8psw87TaT5jobzumNXFU70hx8ZRACtj86ACws2dxkCTfkJJmx+2HDEBcRTqI1zd1VSlr9024uIG1rjPO8CUIlnB4pKqJURuJHUMrC9irC4OfhL0BERAREQEREBERAREQERECsREBERARE5ffbb5w6ClSZVrVQxDsbJRprYPWc9BcADmxAgavfLtJoYImlTX41YZEBrIhGodtSfADkQSLSH95t+cZjgFqsqoDfgprwrfxuST6manaap8Vypdlvkz/O/8xFu7c525AgdTMEqeYtA8qxvfMzJFQlbZe1zbz5zHU2Ol5k/GUjNPUHP3gYvDnrMkADMjztqPNdRKBL5lgAP4m732z0nllUn5gB5G/sMoHl6hGmnLw8oWrwkFcj05f2lwYa4JVXNtdLe2sxwmeeXnkf94F7EV1bPhAPMjn6THM9smf5eWzA6Hd3e7F4Ig0Kx4b503HFTP+knu+a2OWslTdbtao1QFxg+E+nGqn4fvxEr6i3jIKnpDA+vMHi6dVA9J0dDoyMGU+ol6fMe6m8dXBVVqU2JH6k4rBxbRuTeF/S159J7Mx6YiklambpUUMp8DyPQg5EciDAyYlYgUiViBSIiAiIgIiIHq0rEQEREChkCdpW3w2KrrTYMSFp5ElUpoDe4042dn62W3UyW9+dqthsFWqobMF4Q2XcLZcWfMcsjnafLz1Sb5nMkkk5knUk84GTWIyN+I3u19PKYtSoWJY6meS+VoCmBcVwOXpeXWdWAHCL9QdPJRl7zdbD3VrYggKhsf1EZeckLZnZfSSxqOWPMDIQIg4SDzI/MvCZtBcv0+VgD9BeTNiOz6k1uADxvMjC7jADh4aajqFufrAg0pr3Rn4ZiYbLbT89J9Ajs8p3uWvfWwAP2np9wMOBa1/QQPnm0Sbtodm9FgeEWPnn9Zx+P7N8SD3FQjrxG/wBoEfz3TaxzFxznWHcXED5iq+5vbXpac3i8I1Jyjggj8v5QKZC/CcvGSz2Kbw958G5+a9RLn9Q+YWJ6Z5SKGp5XA8RbmJe2NtF8NXp4imbPTYMPG2RU+BFwfAmB9ZxMPZG0FxFCnXT5aiq4B1HEL2PiDl6TMgIiICIiBSJWIFIlYgeoiICIiBFXbvtLhw9DDg2NRy7DqqCwv/qYH0kJ00yudPuZLXbzSvVwZOjLUHsyE/8AdInrNxNYdcoFpVuQJ3O6W7HxXDuCEQqBxas1rnLp+1pzexqQNVQcwDnlfPmfvJj2Th+6gXQC/PVsz/T2gdRgMMiIFQAekzKY628tTLNBLDnMukBpkIF1EvL6C3+8tp5n6S8IFZbYeJ+n9Jdt4y2R4n6f0gY1VPWYpp/SZzJ5+8sfD1ga3F0gRmAbZyJO0/ZtnSqgHj/UeEmTEJyMjztFpkYe4/SbwIkd+6Mrc/X+IdD/AHmOrd4Hx/eXK+I4gBYZdPrLAgfR3ZHXD7OQKLBHdQL3tc8ZH/2dp2tpHPYfX4sA62zWu4v1uiEH9vSSRA82iepS0CkStpS0BERAREQPUREBERAhrt8qd7BjmFrn3NIfsZEdJtTJb7fh3sH5Vs/Wn+esh+Bstm4rhcWyNxpyF9JOewGHw0H8oP59feQRsenx1kXqRJx2JUCuU6BQIHX4dSbXmYqW6Th96N9Ewf8AhqOKoRfhB0vpc8gf3E5BO0HaNawool+dk4r9Ac7+0Ca1Q+BlwCRbu/vtjS/DiUHkUK+ikc9cj0EknA45KqK6Zqw+v5zgZMWlQZYxDFQTe1gc/IXvAuO6jUgeZE5/aW+GCoGz10v0U8Z9luZw22tmviSx4nuxYZM2YF9BfXUZ5WAmHgezR2W3EqW53uQQc7W8tYEh4Tb+GxIPwKquRqoyI81OYnNb3UfiIUI+YEZ8jyM5/Gbk16TKULFwcnV2DeGYOXvbwhdq4i4oYsH4n6Ht84GqMRlxWzGl4EWYugyOysLEEiWQZ2G/eFW9OouvyHLzIP3nHGB9A9iGFKbPZiMqlZ2XxUKifdWkjTmuzynw7Nwg4QP8JTlb9V2v5m9/WdLAREQEREBERApaViICIiAiIgRj247HarhqVdQW/wCHZuIDklSwLHyZFH+oyBzPrzaeCWvRqUW+WojIfJlKn7z5Lx+DajUek4s6MyMP5lNj6QNruYinFJxcgT6iSZU2muHL1SOIgAIv8Tm/CPf7SM9zR/5gf5TJKwOGV8UgfRAH820gXdg7iGofjY2zO7cbi5Iu2YW2gte2mQUDlO4o7FwiKOGmgytxBQCR0JGomv2jtr4aEgHwtcknoJxGJ2ziOIq2KwtCxA4Hq99bkjvKoIUcznzgd3isPhyOA5cwb8xoRfp0mbsdVSyowK3J9DnYeAJnF4J8Q6FrUcSg1fDVA7CxIJKZE6cry/hndWDU2NjyOvkRyMCSeKYWPrALmRbmPCWtj4gup4hYj205TB3hp3UjPTl6wNDtHbyoTwWy8vz1mrw++FVhalSeoBe5RGZcss3A4R7zjt5atVOElAfiE8CHQhTw8Tj+C5AAORJN9M+x7O9mUcdh3OJetVdbBxxVKVOmc7Inw2VW7oUnLI2gZuA3ncvwVaL026OpF/K+vpMjbAp4pGUizqLq1sww0IPmNJz+/G79XCcL4au70796jUdn4ed1Yni9z0mdu65r0gWHCxGdzrb+ogczvThC+Ddh8ykN7HvfvI72fhGrVadJPmqOqL5swUfeTzX2MPhshFwwIPrcSHNlUnw+NXhYo1KoQXsO6BcFs8vlzgfTmycCtChSoKbrTRUBOpCqFv8ASZk4Tcve18Q5purFDcI7WuxHXIWv0zndwEREBERAREQEREBERAREQKEz567YsGgxvx6TcQrKC1gbCooCmxtYgqFOROd5Om8Fzh6iqSC6lQRr3tfpeQPvD8RadWhVvUQDiVibsjjQgn9J0I8YGs3Ew5OIJ6ID7kSU8Lge/wAXPh+xzkf9nNjWc/yoo+pk2YKitvSBHG+lOuwFOkGBJGYPI5EkWtoZquz/AHaqYfHU61VEamobvFgeA2NmCjNmtcAEfqvyksvgMyQoub8tf6CX6FB1FuFMoFNrbLoVu9w8NQCy1UstRefzDUXAyNx4TBw2zWsTUKOQFtUXJyw1DDQ+BmzfDlvnY+QyHvKVCEFhAps1AvFbLONoqDa8pgT9ZXaYyHhAtjZ1N1syKcgMxkQNARodT7z2EZe6KYK/y5fS8YepobzOBvA0tTZqNmKQBNrk53tl1/LS5gdlhL5Cx0FhbnNvaDaBrq9MW/NZBu+mF+HtJRay1ChPQ3bgb6ASc8awAJkK9q1S2JosvzcJ+jAiBI+7GCCXSwvTOXpoZ3gnPYOj/iKQLcaKSOhyH7zooCIiAiIgIiICIiAiIgIiIGPjKfEtvH9rfnnI12hsb4j4kcN+4V972sJKDrcWmgSgFq1ybC6qT05g/UX9YEEbg1jTxDIRnoRzBUkfcyd9nVAQJBO1KbYfHGoPkqVG4WF7HvC+R8TJd3cxfEov4X+kDrUMvBZiI8ykaAZJqdqNYzciaja9AsygZA6nwEC1s175zL2hTLJaYOy6PC1gbgTd1UXhN4GlwNTlfMZGbumuU5rDYmk7MVYXB16/1nQ4WrdRAuMJaqES85mFiGgYG0X7pkf7QwVGpiqTViborlEsTxuChF+gGvjlO3xLXuJzi4S+KR/4A3qTw2H0gdnszEKzoo+ZUJNs7A2C38/2m8mn3fwiohZVC8XTU55sTzvl6ATcQEREBERAREQEREBERAREQE0G8FN0YVUXjuCrJcDiBtoTo2WV8src5v5bq0w6lWFwdRAgvejAu6lzxKEcsEdbFSDlfoZ0G6eKBVTfObveXd2qEbhHxEJHMBwScgb5NmbXHtOF2DiQrlNLOy2JzBVipHuDAlmhXBAmajzn9n1O6ADpb0/Mpt8NUgbEPOb3z2g1GiHXrYm17XH2vab8NlLGLw6uhRgCCOcCFcFvvi6T8TKCCfmQnhIvzU6+hmx21v8A16lJlUKGbLK9j/abfbe6SM4KLw31t8vtpMPDbpBaoV7FeduR8oHM7Bo46s/GrO7DkO7TXzytfTxk44BClNAfmCi56m2c1mzdlCgchlbpzm0+Py5wMgVLiYmJqS4Ades1+MzygYlZ/t6S5u/synULu4LFWsO8QNOYGsw8W4Hn/abndAdxz1f7AQN+qgCwFgNAJWIgIiICIiAiIgIiICIiAiIgIiIHh0DCx8PcG4PvIG3goPhsfiUP/qfEQ2tdavf9gSR6eEnycZ2ibvpWoPiQLVaKkhh+pAeJlbrlcjp6mBr9iYoMgPMidDhXuJHm7WJJS152ey8UTf7e0DeKTaW3qBddTynkV8s9Zx28lPaZ4nw6U+HkzPZh07pFj7wOpr4+kli7DwFxcy0d5sEvEWdVIFyDa5kQjdTFV2LYjEkVDfu5m3lmB7Tc0Oy+qwBfEgDLRFDcrczA6DanadhkzU8XQKpPuTNfhu0vDObsGQ9LE3PgACZlpuJhKCcb/wCK45ueLTwOQ9BM7YuzKfxFZaSCx14Rl4aawNnsrbDYhQVp1An8bLwAnpZ7MfQTIqqdT4zYYvh8P9pq8S9hA1+LYHMek6bdinajf+JifoBOSqny5TuNk0+Gig8L++cDNiIgIiICIiAiIgIiICIiAiIgIiICY+Ow4qU3Rs1dWU+TKQfvMiBA+c929pcDgE65HzGskHCYoKeIHI/eRHtFvg4mqEN0FR1BHNQ7BT7TsdgbYV1Cscx9YElYWvxgfhmyVldSuuWc5HZuJBIF+vnOgwrXzgaHaGyKiPemQega+XhcSwMTtD5EpUwNOJnb+k7haQMocEh1ufW0Dk8NsbEVCGxNcW/gTIeVzn9p0WFwqIAFGXhM9MKi6Ae0qQIGBWF/WYmJpgC/5abDFOFz5zltt7YCgoCCT9OXXL+0D1h1FWulMZC+f1vJAUWyEibc3FmrtGmq/Iiux8X4WXiN/OwElqAiIgIiICIiAiIgIiICIiAiIgIiICYW18YKNCpVP6EYjxNu6PU2EzZy2+NU1E+AumrW6jRf39oEB7Qwhve2ud/HmP3mBRd0PEpIIki43YnEClrcwehnJYzZxFzbMGzDoRA2mxN6zcK/dP5nO62Rt5GFuK588zIerYXwniniqlMjhY5e8D6Q2ftFXA/B/aZ6MOsg3YG/jUwEqi4H6uYytOywm/dDhzcD1gSGagEx62KVQSTpzkb43tJoKbJxN48py+1N/wCpUuEHCD5389YHc7wbzcNwpBPn0nD4nahdiRqdT9bD85TmK20HfUmbPZSngZzy084Hb9lqE40noj388hJkkRdkiXxLnkKZ+rLJdgIiICIiAiIgIiICIiAiIgIiICInJdo28H/CYVuGoFq1CFTqB+ph0yuL8iRA5PtC7SKlGqcPgiAyMRUqEBgSBYovSx1Otx74mxO0mjUIXFIabHWot2pnxIzZfrI5roSbn7c5aZF5rfyygT8MPRxCfEoOjr1Rgw8jbT1nNbe2Gf8Amqt+TqNSOvmPt6SK8DiKtF+PDVXpuP4WKn15MPA5Tt9j9pzCyY2jxDQvTAVv9SHJvNSPKBgYrZH6lzBz/wBppMVs8iSJQx2FrEvh6quhN2Q910JOvA1jwnysNdJb2nsMMLiBFlbCeEwnokcp2WM2aykgrNVXwsDRBBLiUxMqrhbHKePhkQCU5t0HdCD8M1dJWvOl2HgeM3MDtuyjDla731+H/wDpZKkjvs4pkV63QIo92/tJEgIiICIiAiIgIiICIiAiIgIiaPereWjgKRqVDdjkiD5nbw6DqYFzeTeCjgqJrVm8EQfNUbkqjn56AZmQLtTaFbGVXxOIOZ+RBoi8kUdBz6nOW9tbaq4uscRiG4m0RB8lNb34VH3PPnMGpWJIv7fnKAr26zDqk6/vL9Rr/wC395Zax1gWAZfWuCLOA0fCvofQmWHpkHMWge3woOan65j1mzwG9eNw9lFTjUfpqDiHvkw95qlexyyns1r/ADe8Dql31o1f+bSZDzK95f2YfWGajV/5bo3hezexznGvSB0llqREDqcTgWGdphohvYzWYfaVdPldrdD3h7NMtNtk/PTU/wCU8P0zgbvB4TiIFp3Ox9m8KA8Oo0PKcPsrerDU83pVMv4eA/dhN+/ahQVbJh6hP8zKB9CYHXbA2vh8LXZa9RaZq8KoWyUstyQW0XUa2EkFTfMfgnyzvFvAcYbsgQLmoBJsSQDc2F8vDlM/dHf/ABWAIRW+LR50nJsP8jaofLLwgfTETSbsby4fH0viUG0txo2TU2PJh72IyNpu4CIiAiIgIiICIiAiIgJB/bB/1q/5B9hEQOHqa+/3E81OX5ziIFP6Sy2p8jEQPPMfnKZFT5IiBhNoYfQREDxLr6L+dIiBbM8n9oiBbM8GIgeqWjeX7iWzEQJK7Cv+uq//AAN/3pJ7iICIiAiIgIiICIiB/9k="
                  alt=""
                />
                <span className="text-sm font-semibold hover:underline pl-3">
                  Kevin
                </span>
              </div>
              <p className="text-sm whitespace-pre-line ml-12 -mt-4 mb-3.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
              <div className="flex items-start space-x-1 mb-3">
                <img
                  src="https://media1.popsugar-assets.com/files/thumbor/uTHhSxK0UrK36Icb2Oj9XY4rWiU/0x112:3229x3341/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/03/697/n/1922398/f2ed98e15e8759cf135536.52531494_/i/Idris-Elba.jpg"
                  alt=""
                  className="w-9 h-9 rounded-full object-cover mr-2.5"
                />
                <span className="text-sm font-semibold hover:underline">
                  idriselba
                </span>
                <p className="text-sm whitespace-pre-line">
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col px-3 space-y-1 border-b border-t pb-2">
                <div className="flex items-center justify-between py-2">
                  <div className="flex space-x-4">
                    <button>{likeOutline}</button>
                    <button>{commentIcon}</button>
                    <button>{shareIcon}</button>
                  </div>
                  <button>{saveIconOutline}</button>
                </div>

                <span className="w-full font-semibold text-sm">
                  1,000 likes
                </span>

                <span className="text-xs text-gray-500">2 months ago</span>
              </div>

              <form
                action=""
                className="flex items-center justify-between p-3 w-full space-x-3 relative"
              >
                <span className="cursor-pointer">{emojiIcon}</span>
                <div>{/* picker goes here */}</div>
                <input
                  type="text"
                  className="flex-auto text-sm outline-none border-none bg-transparent"
                  placeholder="Add a comment..."
                />
                <button className="text-blue-300 text-sm font-semibold">
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default PostItem;
