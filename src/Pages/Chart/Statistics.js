return (
    <div className="py-16 px-6 space-y-8">
      <div className="bg-white w-full border max-w-[92%] mx-auto shadow-sm pt-3 px-3">
        <Tabs value="bar">
          <TabsHeader>
            <Tab value={"bar"}>Réservations par jour de la semaine</Tab>
            <Tab value={"pie"}>Réservations par terrains</Tab>
            <Tab value={"line"}>Réservations par créneaux horaires</Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel value={"bar"}>
              <div className="flex my-3 flex-col items-center">
                <DateRangePicker
                  range={[selectionRange]}
                  onChange={handleSelect}
                />
              </div>
              <BarChart params={params} />
            </TabPanel>
            <TabPanel value={"pie"}>
              <div className="flex my-3 flex-col items-center">
                <DateRangePicker
                  range={[selectionRange]}
                  onChange={handleSelect}
                />
              </div>
              <PieChart params={params} />
            </TabPanel>
            <TabPanel value={"line"}>
              <div className="flex my-3 flex-col items-center">
                <DateRangePicker
                  range={[selectionRange]}
                  onChange={handleSelect}
                />
              </div>
              <LineChart params={params} />
            </TabPanel>
          </TabsBody>
        </Tabs>

        {/* {selectChartType === "bar" ? (
          <BarChart params={params} />
        ) : selectChartType === "pie" ? (
          <PieChart params={params} />
        ) : null} */}
      </div>
    </div>
  );
}
