'use strict';
import { Callback, Context, Handler, APIGatewayEvent } from 'aws-lambda';
import { TechCrunchRssFeedFetcher } from '../posts/application/TechCrunchRssFeedFetcher';
import { RssParserJson } from '../posts/infrastructure/RssParserJson';
import { PostMapper } from '../posts/application/PostMapper';

const handler: Handler = async (event: APIGatewayEvent, context: Context, cb: Callback) => {
    try {
        const link: string = process.env.TECH_CRUNCH_FEED_URL;
        const parser = new RssParserJson(link);
        const mapper = new PostMapper();
        const fetcher: TechCrunchRssFeedFetcher = new TechCrunchRssFeedFetcher(parser, mapper);
        const feeds = await fetcher.fetch();
        const resp = { 
            statusCode: 200, 
            headers: { 
                "Access-Control-Allow-Origin" : "*",
                'Access-Control-Allow-Credentials': true,
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Content-Type": "application/json"
            }, 
            body:  JSON.stringify(feeds) 
        };
        cb(null, resp);
    } catch (error) {
        const resp = { statusCode: 503, body: JSON.stringify({ message: "Service Unavailable"}) };
        cb(null, resp);
    }
};

export { handler };
