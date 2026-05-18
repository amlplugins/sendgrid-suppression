// @ts-nocheck
/**
 * @amlplugins/sendgrid-suppression
 *
 * Thin re-export of @sendgrid/client (untyped CommonJS SDK — no .d.ts shipped upstream).
 *
 * SendGrid Suppressions — bounces, blocks, spam reports, invalid emails, unsubscribe groups.
 */

import _sdk from "@sendgrid/client";
export { _sdk as sdk };
export default _sdk;
