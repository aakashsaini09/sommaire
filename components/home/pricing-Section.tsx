import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function PricingSection() {
  return (
    <section>
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div className="flex items-center justify-center w-full pb-12">
          <h2 className="uppercase font-bold text-5xl mb-5 text-rose-500">
            Pricing
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 px-8 gap-10 text-zinc-800 mt-10">
          <div className="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg max-w-sm">
            <div>
              <h2 className="font-extrabold text-3xl text-center mb-2">
                Basic
              </h2>
              <p className="opacity-60 text-center">
                Perfect for occasional use
              </p>
              <div className="flex flex-col items-center my-8">
                <p className="font-extrabold text-4xl">$9</p>
                <p className="text-sm opacity-60">/month</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <b>5 PDF summaries per month</b>
              </p>
              <p className="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <b>Standard processing speed</b>
              </p>
              <p className="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <b>Email support </b>
              </p>
              <div className="flex justify-center mt-8">
                <div className="space-y-2 flex justify-center w-full">
                  <Link
                    href="/signup"
                    className="w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-rose-800 to-rose-500 hover:from-rose-500 hover:to-rose-800 text-white border-2 py-2"
                  >
                    Buy Now <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-100 p-8 rounded-lg shadow-lg relative border-3 border-rose-600 max-w-sm">
            <svg
              xmlns=""
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-20 h-20 absolute -top-11 -left-11 fill-rose-600"
            >
              <path
                fillRule="evenodd"
                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="mono text-sm absolute -top-4 bg-rose-700 text-zinc-100 py-0.5 px-2 font-bold tracking-wider rounded">
              POPULAR
            </p>
            <div>
              <div className="flex gap-4 justify-center">
                <p className="font-extrabold text-3xl mb-2">Pro</p>
              </div>
              <p className="opacity-60 text-center">
                For Professional and teams
              </p>
              <p className="opacity-60 text-center"></p>
              <div className="flex gap-4 justify-center">
                <div className="flex flex-col items-center my-8">
                  <p className="font-extrabold text-4xl">$19</p>
                  <p className="text-sm opacity-60">/month</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <b>Unlimited PDF summaries</b>
              </p>
              <p className="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <b>Priority processing</b>
              </p>
              <p className="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <b>24/7 priority support</b>
              </p>
              <p className="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <b>Markdown Export</b>
              </p>
              <div className="flex justify-center mt-8">
                <div className="space-y-2 flex justify-center w-full">
                  <Link
                    href="/signup"
                    className="w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-rose-800 to-rose-500 hover:from-rose-500 hover:to-rose-800 text-white border-2 py-2"
                  >
                    Buy Now <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
