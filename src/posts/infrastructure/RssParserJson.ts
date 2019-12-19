import * as RssParser from 'rss-parser';
import { ParseFeeds } from '../domain/ParseFeeds';

export class RssParserJson implements ParseFeeds {

    private _parser: RssParser;

    constructor(private _link: string) {
        this._parser = new RssParser({
            customFields: {
                item: ['description', 'content:encoded'],
            }
        });
    }

    public async parse() {
        const feeds = await this._parser.parseURL(this._link);

        return feeds.items;
    }
}