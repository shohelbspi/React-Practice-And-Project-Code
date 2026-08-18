import React from 'react';

function Loader() {
    return (
        <div className="flex min-h-[200px] w-full items-center justify-center">
            <div
                className="group relative inline-flex items-center justify-center rounded-3xl border border-stone-200 bg-stone-100 p-4 text-stone-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-300 active:translate-y-0 active:shadow-sm"
                role="status"
                aria-live="polite"
                aria-busy="true"
                aria-label="Loading"
                tabIndex={0}
                style={{ fontSize: '16px' }}
            >
                <div className="relative flex h-[12em] w-[12em] items-center justify-center overflow-hidden rounded-3xl border border-stone-200 bg-white">
                    {/* Background Concentric Rings */}
                    <div className="absolute h-[9.5em] w-[9.5em] rounded-full border border-stone-200 transition-colors duration-300 group-hover:border-stone-300" />
                    <div className="absolute h-[6.75em] w-[6.75em] rounded-full border border-dashed border-stone-200 transition-colors duration-300 group-hover:border-stone-300" />

                    {/* Corner Accent Dots */}
                    <div className="absolute left-[1em] top-[1em] h-[0.35em] w-[0.35em] rounded-full bg-stone-300" />
                    <div className="absolute right-[1em] top-[1em] h-[0.35em] w-[0.35em] rounded-full bg-stone-300" />
                    <div className="absolute bottom-[1em] left-[1em] h-[0.35em] w-[0.35em] rounded-full bg-stone-300" />
                    <div className="absolute bottom-[1em] right-[1em] h-[0.35em] w-[0.35em] rounded-full bg-stone-300" />

                    {/* Center Crosshair Lines */}
                    <div className="absolute h-[7em] w-[0.0625em] bg-stone-200" />
                    <div className="absolute h-[0.0625em] w-[7em] bg-stone-200" />

                    {/* Outer Spinner Element */}
                    <div className="absolute h-[9.5em] w-[9.5em] animate-[spin_2.8s_linear_infinite]">
                        <div className="absolute left-1/2 top-1 h-[2.5em] w-[1.25em] -translate-x-1/2 rounded-full bg-stone-900 transition-transform duration-300 group-hover:scale-105">
                            <div className="mx-auto mt-[0.75em] h-[1em] w-[0.0625em] bg-amber-300" />
                        </div>
                    </div>

                    {/* Inner Counter-Rotating Elements */}
                    <div className="absolute h-[6.75em] w-[6.75em] rotate-45">
                        <div className="relative h-full w-full animate-[spin_4.25s_linear_infinite_reverse]">
                            <div className="absolute left-0 top-1/2 h-[0.75em] w-[0.75em] -translate-y-1/2 rounded-full bg-rose-500 transition-colors duration-300 group-hover:bg-rose-600" />
                            <div className="absolute right-0 top-1/2 h-[0.5em] w-[0.5em] -translate-y-1/2 rounded-full bg-stone-300 transition-colors duration-300 group-hover:bg-stone-400" />
                        </div>
                    </div>

                    {/* Center Hub */}
                    <div className="relative flex h-[4.5em] w-[4.5em] items-center justify-center rounded-full border border-stone-200 bg-stone-100 shadow-inner transition-colors duration-300 group-hover:border-stone-300">
                        <div className="absolute h-[0.0625em] w-[2.5em] bg-stone-300" />
                        <div className="absolute h-[2.5em] w-[0.0625em] bg-stone-300" />
                        <div className="h-[1.2em] w-[1.2em] rounded-full bg-stone-900" />
                        <div className="absolute bottom-[0.8em] right-[1em] h-[0.35em] w-[0.35em] rounded-full bg-rose-500" />
                    </div>

                    {/* Bottom Label Text */}
                    <div className="absolute bottom-4 text-xs font-medium uppercase tracking-widest text-stone-400 transition-colors duration-300 group-hover:text-stone-500">
                        Loading
                    </div>

                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
}

export default Loader;