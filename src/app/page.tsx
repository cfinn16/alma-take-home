'use client'

import { JsonForms } from "@jsonforms/react";
import styles from "./page.module.css";
import { materialCells, materialRenderers} from "@jsonforms/material-renderers"
import schema from '../schema.json'
import { useState } from "react";

export default function Home() {
  const initialData = {
    first_name: "",
    last_name: "",
    email: "",
    linkedin: "",
  }

  const [data, setData] = useState(initialData)
  return (
    <main className={styles.main}>
      <JsonForms
        data={data}
        schema={schema}
        cells={materialCells}
        renderers={materialRenderers}
        onChange={({ data }) => setData(data)}
      />


    </main>
  );
}
