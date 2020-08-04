import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class IssueService {

    constructor(private _http: HttpClient) {
    }

    /**
     * Get issues.
     * */
    getIssues(query?: any) {
        let url = environment.API_URL + `tracker/issues?perPage=0&state=open`;
        if (query) {
            url = url + '&filter=' + encodeURIComponent(query);
        }
        return this._http.get(url);
    }

    /**
     * Get issue comments.
     * */
    getIssueComments(issueId: string) {
        return this._http.get(environment.API_URL + `tracker/issues/${issueId}/comments?perPage=0&state=open`);
    }

    /**
     * Create issue comment.
     * */
    createIssueComment(issueId: string, comment: any) {
        return this._http.post(environment.API_URL + `tracker/issues/${issueId}/comments?perPage=0&state=open`, {body: comment});
    }
}
