import { ICardProps } from "../components/card";

export class GithubService {

  static getByUsername(username: string): Promise<ICardProps> {
    return new Promise((resolve, reject) => {

      fetch(`https://api.github.com/users/${username}`)
        .then(response => {
          if( response.status === 200) {
            return response.json()
          }else{
            reject();
            return false;
          }
        })
        .then(json => {
          resolve({
            image: json.avatar_url,
            name: json.name,
            description: json.bio,
            url: json.html_url
          });
        })
        .catch(reject);

    });
  }

}