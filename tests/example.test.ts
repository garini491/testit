import { test } from "@playwright/test";
import { testit } from "testit-adapter-playwright";

test('All annotations', async () => {
  testit.externalId('all_annotations');
  testit.displayName('All annotations');
  testit.title('All annotations title');
  testit.description('Test with all annotations');
  testit.labels(['label1', 'label2']);

  testit.addMessage('This is a message');
  testit.addLinks([
    {
      url: 'https://www.google.com',
      title: 'Google',
      description: 'This is a link to Google',
      type: 'Related',
    },
  ]);

  testit.addAttachment('file01.txt', 'Content', {contentType: "text/markdown",});

  await test.step("step with title", async () => {
  });
});