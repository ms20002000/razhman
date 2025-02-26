import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className=" bg-[#02071d] text-white">

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-16 min-h-screen p-3 flex flex-col items-center gap-20 bg-[#091028]">
          <div className="pt-2">
            <img src="/icons/arm.svg" alt="arm" />
          </div>
          <div className="flex flex-col items-center gap-10">
          <Link
            href="#"
            className="flex flex-col items-center p-2 rounded-lg text-[#78ff97] hover:bg-[#051632]/80 transition-colors"
          >
            <img src="/icons/home.svg" alt="Home" className="w-5 h-5 mb-1" />
            <p className="text-xs">home</p>
          </Link>
          <Link
            href="/info"
            className="flex flex-col items-center p-2 rounded-lg hover:bg-[#051632]/80 transition-colors"
          >
            <img src="/icons/map.svg" alt="Map" className="w-5 h-5 mb-1" />
            <p className="text-xs">map</p>
          </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex flex-col px-6 gap-y-4 mt-6 ">
            <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between pl-0 pr-4 py-0 col-span-full">
              <div className="flex items-center gap-2">
                  <h1 className="text-xl font-semibold">TIC DDoS Radar</h1>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 text-sm">
                  <div className="flex items-center gap-1">
                  <img src="/icons/calender.svg" alt="calender" />
                  <span>Saturday - 1403/09/03</span>
                  </div>
                  <div className="flex items-center gap-1">
                  <img src="/icons/clock.svg" alt="clock" />
                  <span>09:08:59</span>
                  </div>
                </div>
              </header>
              <div className="col-span-full lg:col-span-2 xl:col-span-3 lg:w-2/3 my-0">
                <p className="text-sm dark:text-gray-300 my-0">
                  The Radar report has been extracted from the data of the<span className="text-[#78ff97] underline">  SIWAN  </span>DDoS detection and Mitigation system, which has
                  been deployed and operated by the TIC company as the country's defense shield, providing effective protection
                  against attacks.
                </p>
              </div>
          {/* Attacks Counter */}
          <div className="flex flex-row">
          <Card className="p-6 bg-[#091028] border-y-[0.5px] border-l-[0.5px] flex flex-col items-center gap-4 text-center">
            <img src="/icons/chart.svg" alt="chart" className="w-16 h-16 mb-4" />
            <h2 className="text-5xl font-bold text-[#78ff97]">492014</h2>
            <p className="text-2xl">
              Number Of <span className="text-[#504ca6] underline">Mitigated</span> Attacks
            </p>
          </Card>


          {/* Cumulative Sum */}
          <Card className="p-6 bg-[#091028] border-[0.5px]">
            <h3 className="text-xl mb-4">
              Cumulative Sum of Mitigated DDoS Attacks
            </h3>
            <div className="grid grid-cols-2">
            <div className="p-4 border-y-[0.5px] border-l-[0.5px]">
              <div className="text-xs text-[#78ff97]">BILLION PACKETS</div>
              <div className="text-4xl font-bold my-2">66455.45</div>
              <div className="text-l text-gray-500">
                Total Number <br />
                of <span className="underline"> Dropped Packets</span>
              </div>
            </div>
            <div className="p-4 border-[0.5px]">
              <div className="text-xs text-[#78ff97]">PETA BYTES</div>
              <div className="text-4xl font-bold my-2">68.72</div>
              <div className="text-l text-gray-500">
                Total Number <br />
                of <span className="underline">Dropped Bytes</span>
              </div>
            </div>
          </div>

          </Card>

          {/* Maximum Attack Volumes */}
          <Card className="p-6 ml-6 bg-[#091028] border-[0.5px]">
            <div className="flex items-center gap-2 mb-4">
              <img className="bg-[#142733] rounded-full p-3" src="/icons/rocket.svg" alt="rocket" />
              <div>
                <h3 className="text-xl">Maximum Attack Volumes</h3>
                <h4 className="text-sm text-gray-400">BITS</h4>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-[#78ff97] text-5xl font-bold">
                831.6 <span className="text-xs text-gray-400">Gbps</span>
              </div>
              <p className="text-xl">
                Maximum Volume <br />Of The{" "}
                <span className="text-[#504ca6] underline">Mitigated</span> Attacks
              </p>
              <div className="flex gap-1 text-xs">
                <span className="px-1.5 py-1 rounded text-gray-400 border-[0.5px] border-current">
                  830.5 Gbps
                </span>
                <span className="px-1.5 py-1 rounded text-gray-400 border-[0.5px] border-current">
                  826.7 Gbps
                </span>
                <span className="px-1.5 py-1 rounded text-gray-400 border-[0.5px] border-current">
                  795.8 Gbps
                </span>
                <span className="px-1.5 py-1 rounded text-gray-400 border-[0.5px] border-current">
                  786.5 Gbps
                </span>
              </div>

            </div>
          </Card>
          </div>

          {/* Attack Duration */}
          <Card className="w-2/3 bg-[#0b1b26] border-[#051632] h-fit overflow-hidden">
            <div className="flex items-center gap-8 relative">
              <div className="absolute left-1/8 translate-x-9 translate-y-2">
                <div className="bg-[#23313b] rounded-full w-32 h-32"></div>
              </div>

              <img src="/icons/cir.svg" alt="" className="relative z-10" />

              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-[#23313b] p-2.5 mb-1 rounded-l">
                    56
                  </div>
                  <div className="text-xs text-gray-400">DAYS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-[#23313b] p-2.5 mb-1 rounded-l">15</div>
                  <div className="text-xs text-gray-400">HOURS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-[#23313b] p-2.5 mb-1 rounded-l">55</div>
                  <div className="text-xs text-gray-400">MINUTES</div>
                </div>
              </div>
              <div className="ml-10">
                <h3 className="text-[#78ff97] text-xl">Maximum</h3>
                <p className="text-xl">Attack Duration</p>
              </div>
            </div>
          </Card>

        </main>
      </div>
    </div>
  );
}
