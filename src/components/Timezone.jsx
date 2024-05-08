import React, { useMemo, useState } from "react";
import spacetime from "spacetime";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import "./styles.css";

export default function App() {
  const [tz, setTz] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [datetime, setDatetime] = useState(spacetime.now());

  useMemo(() => {
    const tzValue = tz.value ?? tz;
    setDatetime(datetime.goto(tzValue));
  }, [tz]);

  return (
    <div className="App">
      <h1>Demo</h1>
      <h2>
        <code>react-timezone-select</code> + <code>spacetime</code>
      </h2>
      <div className="timezone--wrapper">
        <TimezoneSelect
          value={tz}
          onChange={setTz}
          labelStyle="abbrev"
          timezones={{
            ...allTimezones,
            "America/Lima": "Pittsburgh",
            "Europe/Berlin": "Frankfurt",
          }}
        />
      </div>
      <div className="output-wrapper">
        <div>
          Current Date / Time in{" "}
          {tz.value ? tz.value.split("/")[1] : tz.split("/")[1]}:{" "}
          <pre>{datetime.unixFmt("dd.MM.YY HH:mm:ss")}</pre>
        </div>
        <div>
          <div>Selected Timezone:</div>
          <pre>{JSON.stringify(tz, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
