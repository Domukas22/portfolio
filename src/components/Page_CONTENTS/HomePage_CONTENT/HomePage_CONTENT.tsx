//
//
//

import Project_LIST from "@/components/Project_LIST/Project_LIST";
import SideNav from "@/components/Nav/SideNav/SideNav";
import TinyTopNav from "@/components/Nav/TinyTopNav/TinyTopNav";

export default function HomePage_CONTENT() {
  return (
    <div className="w-full flex">
      <SideNav />
      <div className="flex-1">
        <TinyTopNav />

        <Project_LIST />
      </div>
    </div>
  );
}
