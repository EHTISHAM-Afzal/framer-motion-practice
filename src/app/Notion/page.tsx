// import { Client } from "@notionhq/client";
import { Client } from "@notionhq/client";
import React from "react";

const app = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRETE,
  });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID as string,
  });

  const Page = await notion.pages.retrieve({
    page_id: "0ed4837a2b6e41c3b1a265f900912040",
  });
  return (
    <div>
      <pre>{JSON.stringify(Page, undefined, 2)}</pre>
    </div>
  );
};

export default app;
