'use strict';
import { Callback, Context, Handler, APIGatewayEvent } from 'aws-lambda';
import * as Parser from 'rss-parser';

// Anything declered outside the handler function is reused between invocations.
let chachedPosts: Parser.Output[];

const handler: Handler = async (event: APIGatewayEvent, context: Context, cb: Callback) => {
    const parse = new Parser({
        customFields: {
            item: ['description', 'content:encoded'],
        }
    });

    try {
        const feeds = await parse.parseURL('http://feeds.feedburner.com/TechCrunch/');
        this.chachedPosts = feeds.items.map(({ 
                title, 
                link, 
                creator, 
                pubDate, 
                description, 
                "content:encoded": encondedContent, 
                categories 
        }) => {
            return { title, link, creator, pubDate, description, encondedContent, categories };
         });
        const resp = { statusCode: 200, body: this.chachedPosts };
        cb(null, resp);
    } catch (error) {
        const resp = { statusCode: 200, body: this.chachedPosts };
        cb(null, resp);
    }
};

export { handler };
