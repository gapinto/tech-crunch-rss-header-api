import * as RssParser from 'rss-parser';
import { ParseFeeds } from '../domain/ParseFeeds';
import { Mapper } from '../domain/Mapper';
import { encodeText } from '../../common/Util';

export class PostMapper implements Mapper {

    constructor() { }

    public transform(feeds: RssParser.Output[]): {} {
        return feeds.map(({
            title,
            link,
            creator,
            pubDate,
            description,
            "content:encoded": encodedContent,
            categories
        }) => {
            return { title, link, creator, pubDate, description: encodeText(description), encodedContent, categories };
        });
    }
}