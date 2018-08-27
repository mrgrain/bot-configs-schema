export declare namespace BotsSchema {
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "bot-engine".
     */
    export type BotEngine = AwsLexEngine | DialogflowEngine;
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "adapter-label".
     */
    export type AdapterLabel = string | null;
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "aws-region-lex".
     */
    export type AwsRegionLex = 'us-east-1' | 'us-west-2' | 'eu-west-1';
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "dialogflow-engine-settings".
     */
    export type DialogflowEngineSettings =
        | DialogflowEngineSettingsV1
        | DialogflowEngineSettingsV2;
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "aws-polly-voice".
     */
    export type AwsPollyVoice =
        | 'Geraint'
        | 'Gwyneth'
        | 'Mads'
        | 'Naja'
        | 'Hans'
        | 'Marlene'
        | 'Nicole'
        | 'Russell'
        | 'Amy'
        | 'Brian'
        | 'Emma'
        | 'Raveena'
        | 'Ivy'
        | 'Joanna'
        | 'Joey'
        | 'Justin'
        | 'Kendra'
        | 'Kimberly'
        | 'Matthew'
        | 'Salli'
        | 'Conchita'
        | 'Enrique'
        | 'Miguel'
        | 'Penelope'
        | 'Chantal'
        | 'Celine'
        | 'Mathieu'
        | 'Dora'
        | 'Karl'
        | 'Carla'
        | 'Giorgio'
        | 'Mizuki'
        | 'Liv'
        | 'Lotte'
        | 'Ruben'
        | 'Ewa'
        | 'Jacek'
        | 'Jan'
        | 'Maja'
        | 'Ricardo'
        | 'Vitoria'
        | 'Cristiano'
        | 'Ines'
        | 'Carmen'
        | 'Maxim'
        | 'Tatyana'
        | 'Astrid'
        | 'Filiz'
        | 'Vicki'
        | 'Takumi'
        | 'Seoyeon'
        | 'Aditi';
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "aws-region-polly".
     */
    export type AwsRegionPolly =
        | 'us-east-1'
        | 'us-east-2'
        | 'us-west-1'
        | 'us-west-2'
        | 'ca-central-1'
        | 'eu-west-1'
        | 'eu-central-1'
        | 'eu-west-2'
        | 'eu-west-3'
        | 'ap-northeast-1'
        | 'ap-northeast-2'
        | 'ap-southeast-1'
        | 'ap-southeast-2'
        | 'ap-south-1'
        | 'sa-east-1';
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "bot-channel".
     */
    export type BotChannel =
        | ApiChannel
        | WebchatChannel
        | FacebookChannel
        | KikChannel;
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "aws-region".
     */
    export type AwsRegion =
        | 'us-east-1'
        | 'us-east-2'
        | 'us-west-1'
        | 'us-west-2'
        | 'ca-central-1'
        | 'eu-west-1'
        | 'eu-central-1'
        | 'eu-west-2'
        | 'eu-west-3'
        | 'ap-northeast-1'
        | 'ap-northeast-2'
        | 'ap-southeast-1'
        | 'ap-southeast-2'
        | 'ap-south-1'
        | 'sa-east-1';
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "dialogflow-api-version".
     */
    export type DialogflowApiVersion = 'v1' | 'v2';
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "bot-engine-settings".
     */
    export type BotEngineSettings =
        | AwsLexEngineSettings
        | DialogflowEngineSettings;
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "bot-channel-settings".
     */
    export type BotChannelSettings =
        | ApiChannelSettings
        | WebchatChannelSettings
        | FacebookChannelSettings;

    export interface BotConfig {
        name: string;
        team: string;
        engines: BotEngines;
        options: BotOptions;
        channels: BotChannels;
        [k: string]: any;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "bot-engines".
     */
    export interface BotEngines {
        [k: string]: BotEngine;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "aws-lex-engine".
     */
    export interface AwsLexEngine {
        service: 'amazon-lex' | 'aws-lex';
        label?: AdapterLabel;
        hidden?: boolean;
        settings: AwsLexEngineSettings;
        [k: string]: any;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "aws-lex-engine-settings".
     */
    export interface AwsLexEngineSettings {
        botName: string;
        botAlias: string;
        awsRegion: AwsRegionLex;
        awsCredentials: AwsCredentials;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "aws-credentials".
     */
    export interface AwsCredentials {
        awsAccessKeyId: string;
        awsSecretAccessKey: string;
        [k: string]: any;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "dialogflow-engine".
     */
    export interface DialogflowEngine {
        service: 'dialogflow';
        label?: AdapterLabel;
        hidden?: boolean;
        settings: DialogflowEngineSettings;
        [k: string]: any;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "dialogflow-engine-settings-v1".
     */
    export interface DialogflowEngineSettingsV1 {
        apiVersion: 'v1';
        clientToken: string;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "dialogflow-engine-settings-v2".
     */
    export interface DialogflowEngineSettingsV2 {
        apiVersion: 'v2';
        dialogflowCredentials: DialogflowCredentials;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "dialogflow-credentials".
     */
    export interface DialogflowCredentials {
        type?: string;
        project_id: string;
        private_key_id?: string;
        private_key: string;
        client_email: string;
        client_id?: string;
        auth_uri?: string;
        token_uri?: string;
        auth_provider_x509_cert_url?: string;
        client_x509_cert_url?: string;
        [k: string]: any;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "bot-options".
     */
    export interface BotOptions {
        defaultEngine: string;
        defaultConversationLifetime?: number;
        icon?: string | null;
        supportedSystemEvents?: string[];
        awsVoice?: AwsPollyVoice;
        awsRegion?: AwsRegionPolly;
        awsCredentials?: AwsCredentials;
        [k: string]: any;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "bot-channels".
     */
    export interface BotChannels {
        [k: string]: BotChannel;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "api-channel".
     */
    export interface ApiChannel {
        service: 'api';
        label?: AdapterLabel;
        hidden?: boolean;
        settings: ApiChannelSettings;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "api-channel-settings".
     */
    export interface ApiChannelSettings {
        webhook: string;
        authToken: string;
        shouldSendPreAndPostQueryTypingMessages?: boolean;
        awsVoice?: AwsPollyVoice;
        awsRegion?: AwsRegionPolly;
        awsCredentials?: AwsCredentials;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "webchat-channel".
     */
    export interface WebchatChannel {
        service: 'webchat';
        label?: AdapterLabel;
        hidden?: boolean;
        settings: WebchatChannelSettings;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "webchat-channel-settings".
     */
    export interface WebchatChannelSettings {
        authToken: string;
        awsVoice?: AwsPollyVoice;
        awsRegion?: AwsRegionPolly;
        awsCredentials?: AwsCredentials;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "facebook-channel".
     */
    export interface FacebookChannel {
        service: 'facebook';
        label?: AdapterLabel;
        hidden?: boolean;
        settings: FacebookChannelSettings;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "facebook-channel-settings".
     */
    export interface FacebookChannelSettings {
        verifyToken: string;
        pageToken: string;
        awsVoice?: AwsPollyVoice;
        awsRegion?: AwsRegionPolly;
        awsCredentials?: AwsCredentials;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "kik-channel".
     */
    export interface KikChannel {
        service: 'kik';
        label?: AdapterLabel;
        hidden?: boolean;
        settings: KikChannelSettings;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "kik-channel-settings".
     */
    export interface KikChannelSettings {
        userName: string;
        apiKey: string;
        manuallySendReadReceipts?: boolean;
        receiveReadReceipts?: boolean;
        receiveDeliveryReceipts?: boolean;
        receiveIsTyping?: boolean;
        awsVoice?: AwsPollyVoice;
        awsRegion?: AwsRegionPolly;
        awsCredentials?: AwsCredentials;
    }
    /**
     * This interface was referenced by `BotConfig`'s JSON-Schema
     * via the `definition` "bots".
     */
    export interface Bots {
        $schema?: string;
        [k: string]: BotConfig;
    }

    export type BotOptionKey = keyof BotOptions;
    export type BotOptionValue<key extends keyof BotOptions> = BotOptions[key];
}
