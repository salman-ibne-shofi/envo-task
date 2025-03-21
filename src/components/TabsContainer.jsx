import React, { useState } from "react";
import TabItem from "./TabItem";
import { tabs } from "../assets/tabsData";

const TabsContainer = () => {
	const [activeTab, setActiveTab] = useState("website");
	const currentTabData = tabs[activeTab];

	return (
		<div className="tabs-container w-full pb-8">
			{/* Tabs header */}
			<div className="tab-labels flex flex-wrap gap-4 pt-4">
				{Object.entries(tabs).map(([key, tab]) => (
					<button
						key={key}
						className={`tab tab-bordered ${
							activeTab === key ? "tab-active" : ""
						} first:px-0`}
						onClick={() => setActiveTab(key)}
					>
						{tab.label}
					</button>
				))}
			</div>

			{/* Active tab content */}
			<div className="pt-4">
				{currentTabData ? (
					<TabItem items={currentTabData.items} />
				) : (
					<div className="text-gray-500">
						No data found for this tab.
					</div>
				)}
			</div>
		</div>
	);
};

export default TabsContainer;
