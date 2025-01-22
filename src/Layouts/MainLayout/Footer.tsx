import GradientBorder from "@/src/Components/GradientBorder/GradientBorder"
import Image from "next/image"

export default function RootFooter() {
    return (
    <footer className="py-8" style={{marginTop: 50}}>
      <h1 className="flex justify-center font-begex title-roadmap" >ROADMAP</h1>

      <div className="flex flex-col md:flex-row flex-wrap mt-8 p-4 bg-strong-purple relative" style={{zIndex:10}}>
        <div className="w-full md:w-1/2 p-2 px-4">
          <h6 className="mb-4 q1-2024">Q1 2024</h6>
          <Image src="/images/others/phase1.svg" width={450} height={150} alt="" />
        </div>

        <div className="w-full md:w-1/2 p-2 px-4 mt-4 md:mt-0">
          <h5 className="mb-4 purple-gradient-text fs-110">Title</h5>
          <ul>
            <li className="mb-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum.
            </li>
            <li className="mb-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row flex-wrap mt-8 p-4 bg-strong-purple relative" style={{zIndex:10}}>
        <div className="w-full md:w-1/2 p-2 px-4 mt-4 md:mt-0">
          <h5 className="mb-4 purple-gradient-text fs-110">Title</h5>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 p-2 px-4">
          <h6 className="mb-4 q1-2024">Q1 2024</h6>
          <Image src="/images/others/phase2.svg" width={450} height={150} alt="" />
        </div>
      </div>

      <div className="flex felx-col md:flex-row flex-wrap mt-8 p-4 bg-strong-purple relative" style={{zIndex:10}}>
        <div className="w-full md:w-1/2 p-2 px-4">
          <h6 className="mb-4 q1-2024">Q1 2024</h6>
          <Image src="/images/others/phase3.svg" width={450} height={150} alt="" />
        </div>

        <div className="w-full md:w-1/2 p-2 px-4 mt-4 md:mt-0">
          <h5 className="mb-4 purple-gradient-text fs-110">Title</h5>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
            </li>
          </ul>
        </div>
      </div>

      <div className="phase-4 flex flex-col-reverse md:flex-row mt-8 p-4 bg-strong-purple">
        <div className="w-full md:w-1/2 p-2 px-4 mt-4 md:mt-0">
          <h5 className="mb-4 purple-gradient-text fs-110">Title</h5>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-2 px-4">
          <h6 className="mb-4 q1-2024">Q1 2024</h6>
          <Image src="/images/others/phase3.svg" width={450} height={150} alt="" />
        </div>
      </div>
    </footer>
    )
}