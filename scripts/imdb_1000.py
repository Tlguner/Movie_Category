# %%
import pandas as pd

import os

# %%
# Get the directory where this script is located
script_dir = os.path.dirname(os.path.abspath(__file__))
path = os.path.join(script_dir, 'imdb_top_1000.csv')

print(f"Script directory: {script_dir}")
print(f"Looking for CSV at: {path}")
print(f"File exists: {os.path.exists(path)}")

data = pd.read_csv(path)
print(data)

# %%

data.head(4)


# %%
allowed_genres = {'Comedy', 'Action', 'Drama', 'Thriller', 'Horror', 'Romance'}  # örnek izin verilen türler


def genre_filter_and_clean(genre_str):
    genres = [g.strip() for g in genre_str.split(',')]
    if all(g in allowed_genres for g in genres):
        return genres[0]  # Return first genre if all are allowed
    return None  # Filter out otherwise

if 'Genre' in data.columns:
    data = data[data['Genre'].notna()]
    data['First_Genre'] = data['Genre'].apply(genre_filter_and_clean)
    data = data[data['First_Genre'].notna()]  # Only keep rows where we got a genre

print(data[['Series_Title', 'Genre', 'First_Genre']].head(10))

# %%
from youtube_search import YoutubeSearch

all_results = []

all_movies = data[['Series_Title', 'First_Genre']].dropna()

for index, row in all_movies.iterrows():
    title = row['Series_Title']
    genre = row['First_Genre']
    
    results = YoutubeSearch(f"{title} Trailer", max_results=1).to_dict()
    
    if results:
        video = results[0]
        # URL suffix: "/watch?v=YoHD9XEInc0"
        # Split ile video ID'yi alıyoruz
        video_id = video['url_suffix'].split("v=")[-1].split("&")[0]
        
        all_results.append({
            "title": title,
            "category": genre,
            "url": video_id
        })

# Yazdır:
for item in all_results:
    print(item)


# %%
import json

output_path = os.path.join(script_dir, 'trailers.json')
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(all_results, f, ensure_ascii=False, indent=4)




# %%
