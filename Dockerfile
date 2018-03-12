FROM ambakshi/amazon-linux

ENV container docker

RUN rm -rf /etc/yum.repos.d/amzn-*
RUN echo $'[centos]\nname=CentOS\nmirrorlist=http://mirrorlist.centos.org/?release=6&arch=$basearch&repo=os\nenabled=1\ngpgcheck=0' > /etc/yum.repos.d/centos.repo
RUN yum install -y git && \
    yum clean all

RUN curl -k  "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py" && \
  python get-pip.py && \
  pip install awscli && \
  pip install awslogs && \
  rm get-pip.py

RUN mkdir -p /root/.aws && \
    echo "[default]\\naws_access_key_id=${AWS_ACCESS_KEY_ID}\\naws_secret_access_key=${AWS_SECRET_ACCESS_KEY}" > /root/.aws/credentials && \
    echo "[default]\\noutput=json\\nregion=${AWS_REGION}" > /root/.aws/config

RUN curl -k --silent https://nodejs.org/dist/v6.10.3/node-v6.10.3-linux-x64.tar.gz | tar --strip-components 1 -xzf - -C /usr/local/
RUN npm install -g serverless@1.26.1

WORKDIR /home/ec2user

CMD bash
