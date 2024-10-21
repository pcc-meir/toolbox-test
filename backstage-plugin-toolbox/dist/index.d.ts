import * as _backstage_plugin_home_react from '@backstage/plugin-home-react';
import * as React$1 from 'react';
import React__default, { ReactElement } from 'react';
import { Tool } from '@drodil/backstage-plugin-toolbox-react';
export * from '@drodil/backstage-plugin-toolbox-react';
import * as _backstage_core_plugin_api from '@backstage/core-plugin-api';
import * as react_use_lib_useAsyncFn from 'react-use/lib/useAsyncFn';
import * as undici_types from 'undici-types';
import * as _backstage_core_plugin_api_alpha from '@backstage/core-plugin-api/alpha';

type ToolsPageProps = {
    /** extra custom local tools to add into the tool page */
    extraTools?: Tool[];
    /** A list of which tools to have by default. Defaults to defaultTools.*/
    tools?: Tool[];
    /** Allows for custom sorting of the categories in the sidebar. Defaults to alphabetic sort with Favorites at top. */
    categorySortFunction?: (category1: string, caregory2: string) => number;
    /** Allows for custom sorting of the tools within a category. Defaults to alphabetic sort. */
    toolSortFunction?: (tool1: Tool, tool2: Tool) => number;
    /** Filter tools to be shown in runtime */
    toolFilterFunction?: (tool: Tool) => boolean;
    /** customize the landing page */
    welcomePage?: ReactElement;
};

declare const Root: (props: ToolsPageProps) => React__default.JSX.Element;

declare const defaultTools: Tool[];

declare const toolboxPlugin: _backstage_core_plugin_api.BackstagePlugin<{
    root: _backstage_core_plugin_api.RouteRef<undefined>;
}, {}, {}>;
declare const ToolboxPage: (props: ToolsPageProps) => React$1.JSX.Element;
declare const ToolboxHomepageCard: (props: _backstage_plugin_home_react.CardExtensionProps<{
    toolId?: string;
}>) => React.JSX.Element;

type Props$6 = {
    input: string;
    setInput: (value: string) => void;
    output?: string;
    mode?: string;
    minRows?: number;
    inputLabel?: string;
    outputLabel?: string;
    setMode?: (value: string) => void;
    modes?: Array<string>;
    leftContent?: ReactElement;
    extraLeftContent?: ReactElement;
    rightContent?: ReactElement;
    extraRightContent?: ReactElement;
    sample?: string;
    additionalTools?: ReactElement[];
    allowFileUpload?: boolean;
    acceptFileTypes?: string;
    allowFileDownload?: boolean;
    downloadFileType?: string;
    downloadFileName?: string;
    inputProps?: any;
    outputProps?: any;
};
declare const DefaultEditor: (props: Props$6) => React__default.JSX.Element;

type Props$5 = {
    setValue: (input: string) => void;
    tooltip?: string;
};
declare const ClearValueButton: (props: Props$5) => React__default.JSX.Element;

type Props$4 = {
    output: string | number;
    title?: string;
};
declare const CopyToClipboardButton: (props: Props$4) => React__default.JSX.Element;

type Props$3 = {
    toolId: string;
};
declare const FavoriteButton: (props: Props$3) => React__default.JSX.Element;

type Props$2 = {
    setInput: (input: string) => void;
    title?: string;
};
declare const PasteFromClipboardButton: (props: Props$2) => React__default.JSX.Element;

type Props$1 = {
    sample: string;
    setInput: (input: string) => void;
};
declare const SampleButton: (props: Props$1) => React__default.JSX.Element;

type Props = {
    onFileLoad: (input: File) => void;
    id?: string;
    buttonText?: string;
    accept?: string;
};
declare const FileUploadButton: (props: Props) => React__default.JSX.Element;

type ToolRequest = typeof globalThis extends {
    onmessage: any;
} ? {
    method?: string;
    headers?: Record<string, string>;
    body?: string | ArrayBuffer | ArrayBufferView | Blob | FormData | URLSearchParams | ReadableStream<Uint8Array> | null;
} : undici_types.RequestInit;
type ToolResponse = typeof globalThis extends {
    onmessage: any;
} ? {
    readonly status: number;
    readonly statusText: string;
    readonly ok: boolean;
    readonly json: () => Promise<unknown>;
    readonly text: () => Promise<string>;
    readonly arrayBuffer: () => Promise<ArrayBuffer>;
} : undici_types.Response;
interface ToolboxApi {
    getBackendTools(): Promise<string[]>;
    toolRequest(toolName: string, request: ToolRequest): Promise<ToolResponse>;
    toolJsonRequest(toolName: string, data: any): Promise<unknown>;
}

declare const useBackendTools: () => string[];
declare function useToolboxApi<T>(f: (api: ToolboxApi) => Promise<T>, deps?: any[]): react_use_lib_useAsyncFn.AsyncState<T>;
declare const useToolboxTranslation: () => any;

/** @public */
declare const toolboxTranslationRef: _backstage_core_plugin_api_alpha.TranslationRef<"toolbox", {
    readonly "toolsPage.title": "Toolbox";
    readonly "toolsPage.pageTitle": "Toolbox";
    readonly "toolsPage.input.search": "Search";
    readonly "toolsPage.tabPanel.mainLabel": "Toolbox";
    readonly "toolsPage.tabPanel.tooltipTitle": "Open tool in new window";
    readonly "toolPage.toolNotAvailable": "Tool not available";
    readonly "welcomePage.introText": "The toolbox contains commonly used tools for development and design. These tools include encoding, data generation, conversion tools, and other utilities to make work easier. All data is kept within this domain, so you don’t have to worry about your data getting into the wrong hands.";
    readonly "welcomePage.secondText": "To select tools, click the cards below or use the left-side navigation.";
    readonly "tool.category.favorites": "Favorites";
    readonly "tool.category.backstage": "Backstage";
    readonly "tool.category.calculate": "Calculate";
    readonly "tool.category.convert": "Convert";
    readonly "tool.category.encode/decode": "Encode/Decode";
    readonly "tool.category.format": "Format";
    readonly "tool.category.generate": "Generate";
    readonly "tool.category.miscellaneous": "Miscellaneous";
    readonly "tool.base64-encode.name": "Base64";
    readonly "tool.base64-encode.description": "Encode and decode base64 strings";
    readonly "tool.url-encode.name": "URL";
    readonly "tool.url-encode.description": "Encode and decode URLs";
    readonly "tool.html-entity-encode.name": "HTML entities";
    readonly "tool.html-entity-encode.description": "Encode and decode HTML entity characters";
    readonly "tool.backslash-encode.name": "Backslash escape";
    readonly "tool.backslash-encode.description": "Encode and decode backslash escape characters";
    readonly "tool.jwt-decoder-encode.name": "JSON Web Token";
    readonly "tool.jwt-decoder-encode.description": "Encode and decode JSON Web Tokens";
    readonly "tool.jwt-decoder-encode.decodeError": "Couldn't decode JWT token: {{error}}";
    readonly "tool.jwt-decoder-encode.encodeError": "Couldn't encode JWT token: {{error}}";
    readonly "tool.jwt-decoder-encode.missingAttribute": "Couldn't encode JWT token: missing attribute {{attribute}}";
    readonly "tool.markdown-preview.name": "Markdown preview";
    readonly "tool.markdown-preview.description": "Render markdown as HTML";
    readonly "tool.csv-to-json-convert.name": "CSV to JSON";
    readonly "tool.csv-to-json-convert.description": "Convert CSV text to JSON";
    readonly "tool.xml-to-json-convert.name": "XML to JSON";
    readonly "tool.xml-to-json-convert.description": "Convert to XML text to JSON";
    readonly "tool.xml-to-json-convert.invalidFormat": "Invalid XML provided";
    readonly "tool.json-to-yaml-convert.name": "JSON to YAML";
    readonly "tool.json-to-yaml-convert.description": "Convert to JSON text to YAML";
    readonly "tool.yaml-to-json-convert.name": "YAML to JSON";
    readonly "tool.yaml-to-json-convert.description": "Convert to YAML text to JSON";
    readonly "tool.rich-text-to-markdown-convert.name": "HTML to Markdown";
    readonly "tool.rich-text-to-markdown-convert.description": "Convert rich text to markdown";
    readonly "tool.rich-text-to-markdown-convert.preview": "Preview";
    readonly "tool.number-base-convert.name": "Number base";
    readonly "tool.number-base-convert.description": "Convert numbers between different bases";
    readonly "tool.number-base-convert.base2": "Base 2 (Binary)";
    readonly "tool.number-base-convert.base8": "Base 8 (Octal)";
    readonly "tool.number-base-convert.base10": "Base 10 (Decimal)";
    readonly "tool.number-base-convert.base16": "Base 16 (Hex)";
    readonly "tool.string-utilities-convert.name": "String utilities";
    readonly "tool.string-utilities-convert.description": "Convert string to different case or string";
    readonly "tool.string-utilities-convert.inputSearch": "Search";
    readonly "tool.string-utilities-convert.inputReplace": "Replace";
    readonly "tool.string-analyzer.name": "String analyzer";
    readonly "tool.string-analyzer.description": "Analyze string and get statistics";
    readonly "tool.string-analyzer.overallStats": "Overall stats";
    readonly "tool.string-analyzer.characterStats": "Character stats";
    readonly "tool.time-convert.name": "Time format";
    readonly "tool.time-convert.description": "Convert to time to different presentations";
    readonly "tool.time-convert.labelNow": "Now";
    readonly "tool.time-convert.labelInput": "Input";
    readonly "tool.time-convert.inputType": "Input type";
    readonly "tool.time-convert.unixTime": "Unix time (seconds since epoch)";
    readonly "tool.time-convert.millisecondsTime": "Milliseconds (since epoch)";
    readonly "tool.time-convert.outputLabel.local": "Local";
    readonly "tool.time-convert.outputLabel.utc": "UTC";
    readonly "tool.time-convert.outputLabel.unix": "Unix time";
    readonly "tool.time-convert.outputLabel.dayOfTheWeek": "Day of the week";
    readonly "tool.time-convert.outputLabel.weekNumber": "Week number";
    readonly "tool.time-convert.outputLabel.quarter": "Quarter";
    readonly "tool.time-convert.outputLabel.dayOfTheYear": "Day of the year";
    readonly "tool.time-convert.outputLabel.leapYear": "Leap year";
    readonly "tool.time-convert.outputLabel.timezone": "Timezone";
    readonly "tool.color-convert.name": "Color format";
    readonly "tool.color-convert.description": "Convert to color between different representation models";
    readonly "tool.color-convert.inputLabel": "Color";
    readonly "tool.sla-calculator.name": "Service level agreement";
    readonly "tool.sla-calculator.description": "Calculate service level agreement percentage in time";
    readonly "tool.sla-calculator.invalidFormat": "Only float values are supported!";
    readonly "tool.sla-calculator.inputLabel": "Agreed SLA level in %";
    readonly "tool.sla-calculator.maxValueError": "Max value is 100!";
    readonly "tool.sla-calculator.dailyLabel": "Daily";
    readonly "tool.sla-calculator.weeklyLabel": "Weekly";
    readonly "tool.sla-calculator.monthlyLabel": "Monthly";
    readonly "tool.sla-calculator.quarterlyLabel": "Quarterly";
    readonly "tool.sla-calculator.yearlyLabel": "Yearly";
    readonly "tool.entity-validator.name": "Entity validator";
    readonly "tool.entity-validator.description": "Validate catalog entity YAML";
    readonly "tool.entity-validator.inputLabel": "Entity YAML";
    readonly "tool.entity-validator.headerFormatButton": "Entity descriptor format";
    readonly "tool.entity-validator.alertEmptyValue": "Empty value provided";
    readonly "tool.entity-validator.alertSuccessTitle": "Success!";
    readonly "tool.entity-validator.alertErrorTitle": "Error!";
    readonly "tool.entity-validator.alertValidEntity": "Entity is valid!";
    readonly "tool.entity-describer.name": "Entity describer";
    readonly "tool.entity-describer.description": "Describes existing catalog entity in YAML";
    readonly "tool.entity-describer.outputLabel": "Output";
    readonly "tool.entity-describer.entityLabel": "Entity";
    readonly "tool.qr-code-generate.name": "QR Code";
    readonly "tool.qr-code-generate.description": "Generate QR code from text";
    readonly "tool.bar-code-generate.name": "Barcode";
    readonly "tool.bar-code-generate.description": "Generate barcode from text";
    readonly "tool.lorem-ipsum-generate.name": "Lorem ipsum";
    readonly "tool.lorem-ipsum-generate.description": "Generate random text for placeholders";
    readonly "tool.lorem-ipsum-generate.button.string": "String";
    readonly "tool.lorem-ipsum-generate.button.number": "Number";
    readonly "tool.lorem-ipsum-generate.button.name": "Name";
    readonly "tool.lorem-ipsum-generate.button.line": "Line";
    readonly "tool.lorem-ipsum-generate.button.paragraph": "Paragraph";
    readonly "tool.lorem-ipsum-generate.button.slug": "Slug";
    readonly "tool.lorem-ipsum-generate.button.word": "Word";
    readonly "tool.lorem-ipsum-generate.button.hack": "Hack";
    readonly "tool.lorem-ipsum-generate.button.hex": "Hex";
    readonly "tool.lorem-ipsum-generate.button.datetime": "Datetime";
    readonly "tool.lorem-ipsum-generate.button.uuid": "UUID";
    readonly "tool.lorem-ipsum-generate.button.ipv4": "IPv4";
    readonly "tool.lorem-ipsum-generate.button.ipv6": "IPv6";
    readonly "tool.lorem-ipsum-generate.button.mac": "MAC";
    readonly "tool.lorem-ipsum-generate.button.imei": "IMEI";
    readonly "tool.lorem-ipsum-generate.button.cron": "Cron";
    readonly "tool.lorem-ipsum-generate.button.domain": "Domain";
    readonly "tool.lorem-ipsum-generate.button.password": "Password";
    readonly "tool.lorem-ipsum-generate.button.url": "URL";
    readonly "tool.lorem-ipsum-generate.button.user-agent": "User agent";
    readonly "tool.lorem-ipsum-generate.button.emoji": "Emoji";
    readonly "tool.lorem-ipsum-generate.button.address": "Address";
    readonly "tool.lorem-ipsum-generate.button.job-title": "Job title";
    readonly "tool.lorem-ipsum-generate.button.product-name": "Product name";
    readonly "tool.lorem-ipsum-generate.button.product-description": "Product description";
    readonly "tool.lorem-ipsum-generate.button.catch-phrase": "Catch phrase";
    readonly "tool.lorem-ipsum-generate.button.song": "Song name";
    readonly "tool.lorem-ipsum-generate.button.bic": "BIC";
    readonly "tool.lorem-ipsum-generate.button.credit-card": "Credit card";
    readonly "tool.lorem-ipsum-generate.button.iban": "IBAN";
    readonly "tool.iban.name": "IBAN validator";
    readonly "tool.iban.description": "Validates IBAN based on ISO 13616";
    readonly "tool.iban.alertErrorTitle": "Error!";
    readonly "tool.iban.alertInvalidIBAN": "Invalid IBAN provided";
    readonly "tool.hash-generate.name": "Hash";
    readonly "tool.hash-generate.description": "Calculate hash from given text";
    readonly "tool.interface-generate.name": "JSON to Interface";
    readonly "tool.interface-generate.description": "Generate interfaces for different programming languages from JSON";
    readonly "tool.format-js.name": "Javascript / JSON";
    readonly "tool.format-js.description": "Reformat Javascript / JSON code with Beautify";
    readonly "tool.format-js.outputLabel": "Formatted JS";
    readonly "tool.format-js.inputLabel": "Unformatted JS";
    readonly "tool.format-html.name": "HTML";
    readonly "tool.format-html.description": "Reformat HTML code with Beautify";
    readonly "tool.format-html.outputLabel": "Formatted HTML";
    readonly "tool.format-html.inputLabel": "Unformatted HTML";
    readonly "tool.format-css.name": "CSS";
    readonly "tool.format-css.description": "Reformat CSS code with Beautify";
    readonly "tool.format-css.outputLabel": "Formatted CSS";
    readonly "tool.format-css.inputLabel": "Unformatted CSS";
    readonly "tool.format-sql.name": "SQL";
    readonly "tool.format-sql.description": "Reformat SQL code with Beautify";
    readonly "tool.format-sql.outputLabel": "Formatted SQL";
    readonly "tool.format-sql.inputLabel": "Unformatted SQL";
    readonly "tool.countdown.name": "Countdown timer";
    readonly "tool.countdown.description": "Timer that counts down and notifies when time runs out";
    readonly "tool.countdown.startButton": "Start";
    readonly "tool.countdown.stopButton": "Stop";
    readonly "tool.countdown.resetButton": "Reset";
    readonly "tool.countdown.hoursLabel": "Hours";
    readonly "tool.countdown.minutesLabel": "Minutes";
    readonly "tool.countdown.secondsLabel": "Seconds";
    readonly "tool.stopwatch.name": "Stopwatch timer";
    readonly "tool.stopwatch.description": "Timer that counts up until stopped";
    readonly "tool.diff.name": "Text diff";
    readonly "tool.diff.description": "Shows differences between two texts";
    readonly "tool.diff.loadingLabel": "Loading...";
    readonly "tool.diff.selectLanguage": "Select text language";
    readonly "tool.diff.originalFileUploadButton": "Original file";
    readonly "tool.diff.modifiedFileUploadButton": "Modified file";
    readonly "tool.url-exploder.name": "URL exploder";
    readonly "tool.url-exploder.description": "Explode and modify parts of URL easily";
    readonly "tool.url-exploder.pasteFromClipboard": "Paste URL from clipboard";
    readonly "tool.url-exploder.copyToClipboard": "Copy URL to clipboard";
    readonly "tool.url-exploder.protocolLabel": "Protocol";
    readonly "tool.url-exploder.pathLabel": "Path";
    readonly "tool.url-exploder.usernameLabel": "Username";
    readonly "tool.url-exploder.queryLabel": "Query";
    readonly "tool.url-exploder.queryHelperText": "Each parameter on it's own row, format is key=value";
    readonly "tool.url-exploder.hostLabel": "Host";
    readonly "tool.url-exploder.portLabel": "Port";
    readonly "tool.url-exploder.passwordLabel": "Password";
    readonly "tool.url-exploder.hashLabel": "Hash";
    readonly "tool.url-exploder.originLabel": "Origin";
    readonly "tool.whois.name": "WHOIS lookup";
    readonly "tool.whois.description": "Lookup domain WHOIS information";
    readonly "tool.whois.domainInput": "Domain";
    readonly "tool.whois.lookupButton": "Lookup";
    readonly "tool.whois.exampleButton": "Example";
    readonly "components.clearValueButton.tooltipTitle": "Clear input value";
    readonly "components.clearValueButton.buttonText": "Clear";
    readonly "components.copyToClipboardButton.tooltipTitle": "Copy output to clipboard";
    readonly "components.copyToClipboardButton.buttonText": "Copy";
    readonly "components.favoriteButton.tooltipTitleFavorite": "Remove this tool from favorites";
    readonly "components.favoriteButton.tooltipTitleNotFavorite": "Mark this tool as favorite";
    readonly "components.fileDownloadButton.tooltipTitle": "Download file";
    readonly "components.fileDownloadButton.buttonText": "Download";
    readonly "components.fileUploadButton.tooltipTitle": "Upload file";
    readonly "components.fileUploadButton.buttonText": "Upload";
    readonly "components.pasteFromClipboardButton.tooltipTitle": "Paste input from clipboard";
    readonly "components.pasteFromClipboardButton.buttonText": "Clipboard";
    readonly "components.sampleButton.tooltipTitle": "Input sample";
    readonly "components.sampleButton.buttonText": "Sample";
    readonly "components.defaultEditor.outputLabel": "Output";
    readonly "components.defaultEditor.inputLabel": "Input";
    readonly "components.defaultEditor.mode.replace": "Replace";
    readonly "components.defaultEditor.mode.encode": "Encode";
    readonly "components.defaultEditor.mode.decode": "Decode";
    readonly "components.defaultEditor.mode.camel": "Camel";
    readonly "components.defaultEditor.mode.snake": "Snake";
    readonly "components.defaultEditor.mode.kebab": "Kebab";
    readonly "components.defaultEditor.mode.upper": "Upper";
    readonly "components.defaultEditor.mode.lower": "Lower";
    readonly "components.defaultEditor.mode.capitalize": "Capitalize";
    readonly "components.defaultEditor.mode.escape": "Escape";
    readonly "components.defaultEditor.mode.unescape": "Unescape";
    readonly "components.jsonSpaceSelector.space_one": "1 space";
    readonly "components.jsonSpaceSelector.space_two": "2 spaces";
    readonly "components.jsonSpaceSelector.space_other": "{{count}} spaces";
    readonly "components.homePageCard.selectToolText": "Select tool from widget settings";
}>;
declare const toolboxTranslations: _backstage_core_plugin_api_alpha.TranslationResource<"toolbox">;

export { ClearValueButton, CopyToClipboardButton, DefaultEditor, FavoriteButton, FileUploadButton, PasteFromClipboardButton, Root, SampleButton, ToolboxHomepageCard, ToolboxPage, type ToolsPageProps, defaultTools, toolboxPlugin, toolboxTranslationRef, toolboxTranslations, useBackendTools, useToolboxApi, useToolboxTranslation };
