import React, { useState } from "react";
import { tabs } from "../assets/tabsDataPort";
import TabItemGal from "./TabItemGal";

const PortTabs = () => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const currentTabData = tabs[activeTabIndex];

	return (
		<div className="tabs-container w-full pb-20">
			{/* Tabs header */}
			<div className="tab-labels flex flex-wrap gap-4 pt-4">
				{tabs.map((tab, index) => (
					<button
						key={index}
						className={`tab tab-bordered ${
							activeTabIndex === index
								? "tab-active text-[#0C89FF]"
								: "!text-[#424242]"
						} first:px-0 hover:!scale-110 hover:!text-[#0C89FF]`}
						onClick={() => setActiveTabIndex(index)}
					>
						{tab.label}
					</button>
				))}
			</div>

			{/* Active tab content */}
			<div className="pt-4">
				{currentTabData ? (
					<TabItemGal images={currentTabData.images} />
				) : (
					<div className="text-gray-500">
						No data found for this tab.
					</div>
				)}
			</div>
		</div>
	);
};

export default PortTabs;
