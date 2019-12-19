import * as RssParser from 'rss-parser';
import { ParseFeeds } from '../domain/ParseFeeds';
import { Mapper } from '../domain/Mapper';

export class TechCrunchRssFeedFetcher {

    constructor(
        private _parser: ParseFeeds,
        private _mapper: Mapper, 
    ) {}

    public async fetch() {
       const feeds = await this._parser.parse();

       return this._mapper.transform(feeds);
    }
}