# www.be-oi.be - Static website

Using [Middleman](https://middlemanapp.com/) for static website generator.

## Contributing

Prerequisite: Ruby and bundler. 

People that have never worked with Ruby before and work on **MacOS X** may first want to follow these instructions.
MacOS X comes with a Ruby installation, however, installing gemfiles results in a permission error unless sudo is used.
Since that is generally a bad idea, it's better to have a Ruby installation somewhere in userspace. Here's how to:
- Install homebrew ( follow instructions on http://brew.sh/ )
- `brew install rbenv ruby-build`
- `echo 'eval "$(rbenv init -)"' >> ~/.bash_profile`
- close and open terminal to re-load profile
- `rbenv install -l` will show a list of packages. Find the latest `2.x.x`
- `rbenv install 2.2.3` (or whatever the latest version is)
- `rbenv global 2.2.3`
- `rbenv rehash`
- `gem update —system`
- `gem install middleman`
- `gem install bundler`

In the project directory, install required package: 

    bundle install

Launch the (auto-reload) web server: 

    bundle exec middleman server

Install [EditorConfig](http://editorconfig.org/) for your favorite editor to enforce the formatting rules of source files.

###


## Build and Deployment

To build:

    bundle exec middleman build

To deploy on S3 (requires AWS credentials in `.s3.sync` in the yaml format):

    bundle exec middleman s3_sync
